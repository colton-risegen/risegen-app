import { NextResponse } from "next/server";

export async function POST() {
  try {
    // 🧠 Dummy test order (fill with realistic values)
    const order = {
      order_id: "TEST-ORDER-001",
      order_date_time: new Date().toISOString(),
      agent_name: "Colton Sturgill",
      agent_email: "colton@risegen.com",
      agent_portrait_url: "https://risegen.com/images/agents/colton.jpg",
      agent_inbound_call_phone: "555-222-3333",
      agent_sms_phone: "555-222-4444",
      order_states: "OH, PA, MI",
      order_counties: "Lorain, Cuyahoga, Summit",
      lead_type: "Gold",
      lead_vertical: "FEX",
      twofa_verified_phone_leads: "Yes",
      lead_quantity: "20",
      lead_granularity: "County"
    };

    // 🔐 Send to GameChangerLeads
    const res = await fetch(process.env.GCL_WEBHOOK_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "x-make-apikey": process.env.GCL_SHARED_SECRET || ""
      },
      body: new URLSearchParams(order)
    });

    const resultText = await res.text();
    const success = res.status === 200;

    return NextResponse.json({
      sent: true,
      status: res.status,
      ok: success,
      response: resultText
    });
  } catch (err: any) {
    console.error("Error sending test order:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
