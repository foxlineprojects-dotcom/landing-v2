import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, firstName, fileUrl } = await req.json();

    if (!email || !fileUrl) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    /* ✅ Send confirmation email */
    if (process.env.RESEND_API_KEY) {
      const subject = "Your Contract was Received ✅";
      const html = `
        <div style="font-family:Arial,sans-serif;padding:16px">
          <h2>Thanks ${firstName || ""}! ✅</h2>
          <p>We received your document successfully.</p>
          <p>Our team will review your car contract and contact you shortly.</p>
          <br/>
          <p>File uploaded securely:</p>
          <a href="${fileUrl}" target="_blank" rel="noopener">View Contract</a>
          <br/><br/>
          <p>— Foxline Team 🚗</p>
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
        console.error("Resend API Error:", await res.text());
        return NextResponse.json(
          { error: "Email send failed" },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({
      message: "Success ✅ Email sent",
    });
  } catch (err: any) {
    console.error("Server Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
