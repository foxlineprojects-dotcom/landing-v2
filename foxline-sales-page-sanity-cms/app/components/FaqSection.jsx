"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [faqs, setFaqs] = useState([]);
  const [openIndex, setOpenIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFaqs() {
      try {
        const res = await fetch("/api/faq", { cache: "no-store" });
        if (!res.ok) throw new Error("Failed to fetch FAQs");
        const data = await res.json();
        setFaqs(data);
      } catch (err) {
        console.error("❌ FAQ fetch failed:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchFaqs();
  }, []);

  // Skeleton loader
  if (loading) {
    return (
      <section className="w-full  max-w-4xl mx-auto mb-24 mt-24 px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 pb-20 animate-pulse">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 bg-gray-50 dark:bg-gray-800"
            >
              <div className="h-5 w-3/4 bg-gray-300 dark:bg-gray-700 rounded mb-3"></div>
              <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          ))}
        </div>
        <div className="mt-24"></div>
      </section>
    );
  }

  if (!faqs.length)
    return (
      <p className="text-center py-10 text-gray-500 dark:text-gray-400">
        No FAQs found.
      </p>
    );

  // ✅ Enhanced design with soft gradient & animation
  return (
    <section id="faq" className="w-full max-w-4xl mb-20 mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-rose-500 to-orange-400 text-transparent bg-clip-text">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center text-left px-6 py-5"
            >
              <span className="font-semibold text-lg text-gray-800 dark:text-gray-100">
                {faq.question}
              </span>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === i
                    ? "rotate-180 text-orange-500"
                    : "text-gray-500"
                }`}
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-5 text-gray-700 dark:text-gray-300">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
