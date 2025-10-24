import { v2 as cloudinary } from "cloudinary";
import { createClient } from "@sanity/client";
import { NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const sanity = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET || "production",
  apiVersion: "2025-01-01",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN, // 👈 Add this in your .env.local
});

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    const firstName = formData.get("firstName");
    const email = formData.get("email");

    if (!file || !email) {
      return NextResponse.json(
        { error: "Missing file or email" },
        { status: 400 }
      );
    }

    // Convert to base64
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(base64, {
      folder: "foxline_contracts",
      resource_type: "auto",
    });

    console.log("✅ Cloudinary Upload:", result.secure_url);

    // Save record to Sanity CMS
    const sanityResponse = await sanity.create({
      _type: "contractUpload",
      firstName,
      email,
      fileUrl: result.secure_url,
      uploadedAt: new Date().toISOString(),
    });

    console.log("🧾 Saved to Sanity:", sanityResponse._id);

    return NextResponse.json({
      success: true,
      url: result.secure_url,
      sanityId: sanityResponse._id,
      message: "File uploaded and saved to Sanity",
    });
  } catch (err) {
    console.error("❌ Upload error:", err);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
