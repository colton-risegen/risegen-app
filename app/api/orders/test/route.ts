import { NextResponse } from "next/server";

export async function GET() {
  const testOrder = {
    order_id: "TEST123",
    order_date_time: new Date().toISOString(),
    agent_name: "Colton Sturgill",
    agent_email: "colton@risegenleads.com",
    lead_type: "Gold",
    lead_vertical: "Final Expense",
    lead_quantity: 5,
    order_state: "OH",
  };

  console.log("✅ Test order sent:", testOrder);

  return NextResponse.json({ success: true, order: testOrder }, { status: 200 });
}
