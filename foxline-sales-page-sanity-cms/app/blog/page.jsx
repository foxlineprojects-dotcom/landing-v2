import Navbar from "../components/Navbar";
import { sanityClient } from "../../lib/sanity.client";
import { POSTS_LIST } from "../../lib/queries";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../lib/sanity.image";

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await sanityClient.fetch(POSTS_LIST);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 :from-slate-900 :to-slate-950 :text-white transition-colors">
      {/* ✅ Global Navigation */}
      <Navbar />

      <main className="max-w-6xl mx-auto py-20 px-6">
        {/* ✅ Blog Page Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 :text-white">
            Our Blog
          </h1>
          {posts?.length > 0 && (
            <p className="text-slate-600 :text-slate-400 mt-3 text-lg">
              {posts.length} Insightful Articles
            </p>
          )}
        </div>

        {/* Divider */}
        <div className="w-20 mx-auto h-1 bg-blue-600 :bg-blue-500 rounded-full mb-14"></div>

        {/* ✅ Blog Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts?.length > 0 ? (
            posts.map((p) => (
              <Link
                href={`/blog/${p.slug}`}
                key={p._id}
                className="group rounded-xl flex flex-col h-full overflow-hidden border border-slate-200 :border-slate-800 hover:shadow-xl hover:border-transparent :hover:border-transparent :hover:shadow-slate-700/30 transition-all duration-300 bg-white :bg-slate-900"
              >
                {/* Cover */}
                {p.coverImage && (
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={urlFor(p.coverImage).width(1000).height(600).url()}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-slate-900 :text-white group-hover:text-blue-600 :group-hover:text-blue-400 transition-colors">
                    {p.title}
                  </h2>

                  {/* Uniform Excerpt Height */}
                  <p className="mt-3 text-slate-600 :text-slate-400 line-clamp-3 flex-1">
                    {p.excerpt}
                  </p>

                  {/* CTA Bottom-Aligned */}
                  <span className="mt-5 inline-block text-sm font-medium text-blue-600 :text-blue-400 group-hover:underline">
                    Read More →
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-500 :text-gray-400 col-span-full">
              No posts found.
            </p>
          )}
        </div>
      </main>

      {/* ✅ Footer Section */}
      {/* <Footer /> */}
    </div>
  );
}
