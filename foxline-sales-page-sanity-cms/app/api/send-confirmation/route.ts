import { NextResponse } from "next/server";

/**
 * This endpoint:
 *  1️⃣  Validates Google reCAPTCHA v3 token (if provided)
 *  2️⃣  Sends a transactional email using the Resend API
 *
 * Environment variables (see .env.example):
 *  - RECAPTCHA_SECRET_KEY
 *  - RESEND_API_KEY
 */

export async function POST(req: Request) {
  try {
    const { email, token } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Missing email" }, { status: 400 });
    }

    /* ------------------ reCAPTCHA validation ------------------ */
    if (token && process.env.RECAPTCHA_SECRET_KEY) {
      const verify = await fetch(
        `https://www.google.com/recaptcha/api/siteverify`,
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
        }
      );
      const result = await verify.json();
      if (!result.success || result.score < 0.5) {
        return NextResponse.json(
          { error: "reCAPTCHA failed" },
          { status: 403 }
        );
      }
    }

    /* ------------------ Resend email sending ------------------ */
    if (!process.env.RESEND_API_KEY) {
      console.warn("⚠️  RESEND_API_KEY not set — skipping email send");
      return NextResponse.json({
        message: "Simulated success (no API key set)",
      });
    }

    const subject = "Thanks for contacting Foxline!";
    const html = `
      <div style="font-family:Arial,sans-serif;padding:16px">
        <h2>Hi there 👋</h2>
        <p>Thanks for getting in touch with Foxline.</p>
        <p>We’ve received your submission and will follow up shortly.</p>
        <br/>
        <p>— The Foxline Team</p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Foxline <noreply@foxline.ai>",
        to: [email],
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Resend API error:", errText);
      return NextResponse.json({ error: "Email send failed" }, { status: 500 });
    }

    return NextResponse.json({ message: "Email sent successfully ✅" });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
