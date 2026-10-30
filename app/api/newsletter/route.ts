import { NextResponse } from "next/server";

export const runtime = "nodejs";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = String(body?.email || "").trim().toLowerCase();
    if (email.length > 254 || !emailPattern.test(email))
      return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });

    const key = process.env.RESEND_API_KEY;
    const from = process.env.NEWSLETTER_FROM_EMAIL;
    const to = process.env.NEWSLETTER_NOTIFY_EMAIL;
    if (!key || !from || !to)
      return NextResponse.json({ error: "Newsletter signup is not available yet. Please try again later." }, { status: 503 });

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        subject: "New Painted Gold newsletter signup",
        text: `A visitor has requested to join the studio newsletter: ${email}\n\nThis is a signup notification. Store the email securely in your opted-in audience before sending newsletters.`
      }),
      cache: "no-store"
    });
    if (!response.ok) {
      console.error("Newsletter notification provider failed", response.status);
      return NextResponse.json({ error: "Could not complete signup right now." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to process this request." }, { status: 400 });
  }
}
