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
              className="border border-gray-200 :border-gray-700 rounded-2xl p-6 bg-gray-50 :bg-gray-800"
            >
              <div className="h-5 w-3/4 bg-gray-300 :bg-gray-700 rounded mb-3"></div>
              <div className="h-4 w-1/2 bg-gray-200 :bg-gray-700 rounded"></div>
            </div>
          ))}
        </div>
        <div className="mt-24"></div>
      </section>
    );
  }

  if (!faqs.length)
    return (
      <p className="text-center py-10 text-gray-500 :text-gray-400">
        No FAQs found.
      </p>
    );

  // ✅ Enhanced design with soft gradient & animation
  return (
    <section id="faq" className="max-w-4xl mx-auto px-4 py-16">
      <div
        className="rounded-2xl p-8 md:p-12 shadow-sm"
        style={{ backgroundColor: "#f5e6d3" }}
      >
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">
          Common Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-slate-300/50 last:border-none pb-4"
            >
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`w-5 h-5 text-slate-700 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Animated Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i
                    ? "max-h-40 mt-3 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
