import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const secret = body.secret;

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  const path = body.slug ? `/blog/${body.slug}` : "/blog";
  await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/revalidate-path?path=${path}`
  );

  return NextResponse.json({ revalidated: true, path });
}
