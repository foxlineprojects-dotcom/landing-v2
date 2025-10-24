export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";

// ✅ Sanity Config
const sanity = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET || "production",
  apiVersion: "2025-01-01",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN, // Must exist in .env
});

export async function POST(req: Request) {
  try {
    const { email, firstName, fileUrl } = await req.json();

    if (!email || !fileUrl) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    /* ✅ 1️⃣ Save to Sanity */
    const document = {
      _type: "contractUpload",
      firstName,
      email,
      fileUrl,
      uploadedAt: new Date().toISOString(),
    };

    const sanityResult = await sanity.create(document);
    console.log("🧾 Saved to Sanity:", sanityResult._id);

    /* ✅ 2️⃣ Send confirmation email */
    if (process.env.RESEND_API_KEY) {
      const subject = "Your Contract was Received ✅";
      const html = `
        <div style="font-family:Arial,sans-serif;padding:16px">
          <h2>Thanks ${firstName || ""}! ✅</h2>
          <p>We received your document successfully.</p>
          <p>Our team will review your car contract and contact you shortly.</p>
          <br/>
          <p><strong>File uploaded securely:</strong></p>
          <a href="${fileUrl}" target="_blank" rel="noopener">View Contract</a>
          <br/><br/>
          <p>— Foxline Team 🚗</p>
        </div>
      `;

      const mailResponse = await fetch("https://api.resend.com/emails", {
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

      if (!mailResponse.ok) {
        console.error("Resend API error:", await mailResponse.text());
        return NextResponse.json(
          { error: "Email send failed" },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({
      success: true,
      message: "Email sent and data saved ✅",
      sanityId: sanityResult._id,
    });
  } catch (err: any) {
    console.error("❌ API error:", err);
    return NextResponse.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  }
}
