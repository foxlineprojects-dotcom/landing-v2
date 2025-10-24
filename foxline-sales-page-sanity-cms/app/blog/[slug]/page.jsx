import { sanityClient } from "../../../lib/sanity.client";
import { POST_BY_SLUG, SLUGS } from "../../../lib/queries";
import { urlFor } from "../../../lib/sanity.image";
import Image from "next/image";
import RichText from "../../components/RichText";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await sanityClient.fetch(SLUGS);
  return slugs.map((s) => ({ slug: s.slug }));
}
export const dynamicParams = true;
export default async function BlogPost({ params }) {
  const resolvedParams = await params; // ✅ fix
  console.log("✅ Params received from Next.js:", resolvedParams);

  if (!resolvedParams?.slug) {
    console.error("❌ No slug param passed into BlogPost");
    return <div>No slug provided</div>;
  }

  const post = await sanityClient.fetch(POST_BY_SLUG, {
    slug: resolvedParams.slug,
  });

  if (!post) return <div>Post not found</div>;
  return (
    <main className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      {post.coverImage && (
        <div className="relative w-full h-[400px] mb-8">
          <Image
            src={urlFor(post.coverImage)
              .width(1200)
              .height(600)
              .auto("format")
              .url()}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}
      <RichText value={post.body} />
    </main>
  );
}
