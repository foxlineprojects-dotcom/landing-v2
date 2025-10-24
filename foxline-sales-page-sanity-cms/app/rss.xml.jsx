import { GetServerSideProps } from "next";
import { sanityClient } from "@/lib/sanity.client";
import { POSTS_LIST } from "@/lib/queries";

export const getServerSideProps = async ({ res }) => {
  const posts = await sanityClient.fetch(POSTS_LIST);
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const items = posts
    .map(
      (p) => `
<item>
<title><![CDATA[${p.title}]]></title>
<link>${base}/blog/${p.slug}</link>
<guid>${base}/blog/${p.slug}</guid>
<pubDate>${new Date(p.publishedAt).toUTCString()}</pubDate>
<description><![CDATA[${p.excerpt || ""}]]></description>
</item>`
    )
    .join("");
  const xml = `<?xml version="1.0"?><rss version="2.0"><channel><title>Blog</title><link>${base}</link><description>Latest posts</description>${items}</channel></rss>`;
  res.setHeader("Content-Type", "application/rss+xml");
  res.write(xml);
  res.end();
  return { props: {} };
};

export default function RSS() {
  return null;
}
