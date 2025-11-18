import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 🔹 Validate required fields
    const required = ["firstName", "lastName", "email", "phone"];
    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json({ error: `Missing field: ${field}` }, { status: 400 });
      }
    }

    // 🔹 Store lead in database (Supabase/Postgres)
    const res = await fetch(process.env.POSTGRES_URL!, {
      method: "POST",
      body: JSON.stringify({
        query: `
          INSERT INTO leads (first_name, last_name, email, phone, state, source, created_at)
          VALUES ('${body.firstName}', '${body.lastName}', '${body.email}', '${body.phone}', '${body.state || ""}', '${body.source || "RiseGen"}', NOW())
          RETURNING id;
        `,
      }),
      headers: { "Content-Type": "application/json" },
    });

    const result = await res.json();
    const leadId = result?.[0]?.id || null;

    // 🔹 Forward lead to Zack (GameChangerLeads)
    const forwardResponse = await fetch(process.env.GCL_WEBHOOK_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "x-make-apikey": process.env.GCL_SHARED_SECRET || "",
      },
      body: new URLSearchParams({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phone: body.phone,
        state: body.state || "",
        source: "RiseGen",
      }),
    });

    // 🔹 Update status in DB
    if (forwardResponse.ok && leadId) {
      await fetch(process.env.POSTGRES_URL!, {
        method: "POST",
        body: JSON.stringify({
          query: `UPDATE leads SET status = 'Delivered', delivered_at = NOW() WHERE id = '${leadId}'`,
        }),
        headers: { "Content-Type": "application/json" },
      });
    }

    return NextResponse.json({ success: true, forwarded: forwardResponse.ok });
  } catch (err: any) {
    console.error("Lead intake error:", err);
    return NextResponse.json({ error: err.message || "Unknown error" }, { status: 500 });
  }
}
