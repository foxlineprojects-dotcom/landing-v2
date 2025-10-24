import { sanityClient } from "../../lib/sanity.client";
import { POSTS_LIST } from "../../lib/queries";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../lib/sanity.image";

export const revalidate = 60; // ISR

export default async function BlogPreviewSection() {
  const posts = await sanityClient.fetch(POSTS_LIST);
  const latestThree = posts.slice(0, 3);

  return (
    <section className="max-w-5xl mx-auto mt-24 px-4">
      <h2 className="text-3xl font-bold mb-10 text-center text-slate-900 dark:text-white">
        Latest Insights & Guides
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {latestThree.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug}`}
            className="block group bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            {post.coverImage && (
              <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
                <Image
                  src={urlFor(post.coverImage).width(800).height(450).url()}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-[#e08e79] transition">
                {post.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-gray-400 mt-2">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <p className="text-sm mt-3 text-slate-700 dark:text-gray-300 line-clamp-3">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/blog"
          className="text-lg font-semibold text-[#e08e79] hover:underline"
        >
          View all articles →
        </Link>
      </div>
    </section>
  );
}
