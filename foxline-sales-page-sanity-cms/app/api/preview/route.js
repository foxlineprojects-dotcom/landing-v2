import { NextResponse } from "next/server";

export function GET(req) {
  const url = new URL(req.url);
  const secret = url.searchParams.get("secret");
  const slug = url.searchParams.get("slug") ?? "";

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  return NextResponse.redirect(new URL(`/blog/${slug}`, req.url), {
    status: 307,
    headers: {
      "Set-Cookie": "__prerender_bypass=1; Path=/;",
    },
  });
}

export const revalidate = 60;
export const dynamic = "force-dynamic";
