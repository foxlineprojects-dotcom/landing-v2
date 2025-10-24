import { sanityClient } from "../../lib/sanity.client";
import { POSTS_LIST } from "../../lib/queries";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../lib/sanity.image";

// ✅ Enable ISR in App Router
export const revalidate = 60;

export default async function BlogPage() {
  const posts = await sanityClient.fetch(POSTS_LIST);

  if (!posts?.length) {
    return (
      <div className="p-10 text-center text-gray-500">No posts found.</div>
    );
  }

  return (
    <main className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-10">Blog</h1>
      <div className="grid gap-10 md:grid-cols-2">
        {posts.map((p) => (
          <Link href={`/blog/${p.slug}`} key={p._id}>
            <article className="border rounded-lg overflow-hidden hover:shadow-lg transition">
              {p.coverImage && (
                <div className="relative w-full h-64">
                  <Image
                    src={urlFor(p.coverImage)
                      .width(800)
                      .height(400)
                      .auto("format")
                      .url()}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
                <p className="text-gray-600">{p.excerpt}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
