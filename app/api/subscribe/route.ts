import { NextRequest, NextResponse } from "next/server";

const SCRIPT_URL = process.env.NEWSLETTER_SCRIPT_URL ?? "";
const SECRET = process.env.NEWSLETTER_SECRET ?? "";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Bad request" }, { status: 400 });

  const { email, trap } = body;

  // Honeypot — bots fill hidden fields, humans don't
  if (trap) return NextResponse.json({ success: true }); // silent pass

  // Validate email
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  if (!SCRIPT_URL) {
    return NextResponse.json({ error: "Not configured" }, { status: 500 });
  }

  const res = await fetch(SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify({ email: email.trim().toLowerCase(), secret: SECRET }),
  });

  const json = await res.json().catch(() => ({ success: false }));
  return NextResponse.json(json);
}
