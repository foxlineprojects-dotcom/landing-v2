import { NextResponse } from "next/server";
import { sanityClient } from "../../../lib/sanity.client";
import { POSTS_LIST } from "../../../lib/queries";

export async function GET() {
  try {
    const posts = await sanityClient.fetch(POSTS_LIST);
    return NextResponse.json(posts);
  } catch (err) {
    console.error(err);
    return NextResponse.json([], { status: 500 });
  }
}
