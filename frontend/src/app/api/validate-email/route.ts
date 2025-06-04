

import { NextRequest, NextResponse } from "next/server";
import { isValid } from "@/utils/emailValidator";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ valid: false, message: "Email is required" }, { status: 400 });
  }

  if (!isValid(email)) {
    return NextResponse.json({ valid: false, message: "Disposable or invalid email" }, { status: 400 });
  }

  return NextResponse.json({ valid: true });
}
