export const revalidate = 60;
export const dynamic = "force-dynamic";

import { createClient } from "@sanity/client";
import { NextResponse } from "next/server";

const sanity = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET || "production",
  apiVersion: process.env.SANITY_API_VERSION || "2025-01-01",
  useCdn: false, // ✅ ensures no stale cache from CDN
});

export async function GET() {
  try {
    const query = `*[_type == "faq" && !(_id in path("drafts.**"))] | order(_createdAt asc){
      question,
      answer
    }`;
    const faqs = await sanity.fetch(query);

    return NextResponse.json(faqs, { status: 200 });
  } catch (error) {
    console.error("❌ FAQ fetch error:", error);
    return NextResponse.json([], { status: 500 });
  }
}
