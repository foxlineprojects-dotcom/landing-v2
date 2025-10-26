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
            className="bg-gray-200 :bg-gray-800 rounded-2xl p-6 shadow-md"
          >
            <div className="h-5 w-4/5 bg-gray-300 :bg-gray-700 rounded mb-3"></div>
            <div className="h-5 w-2/3 bg-gray-300 :bg-gray-700 rounded mb-4"></div>
            <div className="h-4 w-1/3 bg-gray-300 :bg-gray-700 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!testimonials.length)
    return (
      <p className="text-center text-gray-500 :text-gray-400 mt-10">
        No testimonials found.
      </p>
    );

  // ✅ Enhanced design: 3 per row + pagination adjustment
  return (
    <section
      id="testimonial"
      className="py-16 w-full"
      style={{ backgroundColor: "#2c5f5f" }}
    >
      <div className=" mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Real Stories, Real Savings
          </h2>

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
                <div
                  className="p-6 rounded-xl h-[230px] flex flex-col justify-between border border-transparent"
                  style={{ backgroundColor: "#3d7070" }}
                >
                  <p className="mb-4 leading-relaxed text-[#e8f4f4] line-clamp-5 whitespace-pre-wrap break-words">
                    <span className="text-white font-semibold">“</span>
                    {t.quote}
                    <span className="text-white font-semibold">”</span>
                  </p>

                  <p className="font-semibold text-white text-lg">{t.name}</p>
                  {t.company && (
                    <p className="text-sm text-teal-100">{t.company}</p>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ Pagination container */}
          <div className="custom-swiper-pagination flex justify-center mt-8 space-x-2"></div>

          {/* ✅ Updated pagination colors */}
          <style jsx global>{`
            .custom-swiper-pagination .swiper-pagination-bullet {
              width: 10px;
              height: 10px;
              background-color: rgba(232, 244, 244, 0.5);
              opacity: 1;
              transition: all 0.3s ease;
              border-radius: 50%;
            }
            .custom-swiper-pagination .swiper-pagination-bullet-active {
              background-color: #ffffff;
              transform: scale(1.15);
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
