"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../lib/sanity.image";

export default function BlogPreviewSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/blogs", { cache: "no-store" });
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.error("❌ Blog fetch failed:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!posts.length)
    return <p className="text-center mt-10">No posts found.</p>;

  return (
    <section className="max-w-5xl mx-auto mt-24 px-4">
      <h2 className="text-3xl font-bold mb-10 text-center text-slate-900 dark:text-white">
        Latest Insights & Guides
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.slice(0, 3).map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug}`}
            className="block group"
          >
            {post.coverImage && (
              <div className="relative w-full h-48 overflow-hidden rounded-xl">
                <Image
                  src={urlFor(post.coverImage).width(800).height(450).url()}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="mt-4">
              <h3 className="font-semibold text-lg">{post.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

