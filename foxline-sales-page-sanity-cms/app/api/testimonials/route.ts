export const revalidate = 60;
export const dynamic = "force-dynamic";

import { createClient } from "@sanity/client";
import { NextResponse } from "next/server";

const sanity = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET || "production",
  apiVersion: process.env.SANITY_API_VERSION || "2025-01-01",
  token: process.env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

export async function GET() {
  try {
    const query = `*[_type == "testimonial" && !(_id in path("drafts.**"))] | order(_createdAt desc){
      name,
      company,
      quote
    }`;
    const testimonials = await sanity.fetch(query);
    return NextResponse.json(testimonials, { status: 200 });
  } catch (error) {
    console.error("❌ CMS fetch error:", error);
    return NextResponse.json([], { status: 500 });
  }
}
