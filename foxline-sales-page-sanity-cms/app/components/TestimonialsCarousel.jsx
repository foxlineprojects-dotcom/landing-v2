"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function TestimonialsCarousel() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/testimonials", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch testimonials");
        const data = await res.json();
        setTestimonials(data);
      } catch (err) {
        console.error("❌ Testimonials fetch failed:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // 🩶 Skeleton shimmer
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse mt-10">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-200 dark:bg-gray-800 rounded-2xl p-6 shadow-md"
          >
            <div className="h-5 w-4/5 bg-gray-300 dark:bg-gray-700 rounded mb-3"></div>
            <div className="h-5 w-2/3 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
            <div className="h-4 w-1/3 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!testimonials.length)
    return (
      <p className="text-center text-gray-500 dark:text-gray-400 mt-10">
        No testimonials found.
      </p>
    );

  // ✅ Enhanced design: 3 per row + pagination adjustment
  return (
    <section id="testimonial" className="mt-12 pb-14">
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{
          clickable: true,
          el: ".custom-swiper-pagination",
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="w-full"
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white/70 h-[230px] flex flex-col justify-between dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 transition-transform duration-300">
              <div>
                <p className="italic text-gray-700 dark:text-gray-200 mb-2 leading-relaxed whitespace-pre-wrap break-words line-clamp-5">
                  “{t.quote}”
                </p>
              </div>

              <div className="mt-4">
                <p className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                  {t.name}
                </p>
                {t.company && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {t.company}
                  </p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 👇 Custom pagination container */}
      <div className="custom-swiper-pagination flex justify-center mt-8 space-x-2"></div>

      <style jsx global>{`
        /* Move pagination lower and recolor active dot */
        .custom-swiper-pagination .swiper-pagination-bullet {
          background-color: rgba(156, 163, 175, 0.6); /* gray-400 */
          opacity: 1;
          transition: all 0.3s ease;
        }

        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background-color: #ea580c; /* Tailwind orange-600 (matches your accent) */
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}
