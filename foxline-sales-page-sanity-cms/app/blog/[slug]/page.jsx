import { sanityClient } from "../../../lib/sanity.client";
import { POST_BY_SLUG, SLUGS } from "../../../lib/queries";
import { urlFor } from "../../../lib/sanity.image";
import Image from "next/image";
import RichText from "../../components/RichText";
import Navbar from "../../components/Navbar"; // ✅ Import Navbar

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await sanityClient.fetch(SLUGS);
  return slugs.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = true;

export default async function BlogPost({ params }) {
  const post = await sanityClient.fetch(POST_BY_SLUG, {
    slug: params?.slug, // ✅ safe
  });

  if (!post) return <div>Post not found</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 dark:text-white transition-colors">
      {/* ✅ Navbar Added */}
      <Navbar />

      <main className="max-w-3xl mx-auto py-12 px-6">
        {/* ✅ Article Header */}
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        {post?.publishedAt && (
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        )}

        {post.coverImage && (
          <div className="relative w-full h-[400px] mb-10">
            <Image
              src={urlFor(post.coverImage).width(1200).height(600).url()}
              alt={post.title}
              fill
              className="object-cover rounded-xl"
            />
          </div>
        )}

        {/* ✅ Beautiful Readable Content Area */}
        <article className="prose prose-lg dark:prose-invert prose-blue max-w-none">
          <RichText value={post.body} />
        </article>
      </main>

      {/* ✅ Footer (optional if exists) */}
      {/* <Footer /> */}
    </div>
  );
}
