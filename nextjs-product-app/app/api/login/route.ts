import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password,role } = await req.json();
  if (email === "test@example.com" && password === "password") {
    return NextResponse.json({ success: true,role },{status:200});
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
