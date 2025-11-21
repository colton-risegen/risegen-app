import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Test route working ✅",
    order: {
      id: "TEST123",
      agent: "Colton Sturgill",
      timestamp: new Date().toISOString(),
    },
  });
}
