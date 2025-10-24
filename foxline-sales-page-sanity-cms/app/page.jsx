"use client";
// export const metadata = {
//   title: "Foxline — Understand Your Car Contract",
//   description:
//     "Upload your car contract or estimate for a free analysis in plain English. We show you hidden fees, negotiable terms, and red flags before you sign.",
//   openGraph: {
//     title: "Foxline — Car Contract Analysis, Simplified",
//     description:
//       "Get a free, plain-English breakdown of your car finance contract. Identify hidden fees, confusing terms, and red flags before signing.",
//     url: "https://foxline.ai",
//     siteName: "Foxline",
//     images: [
//       {
//         url: "/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Foxline — Car Contract Clarity",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Foxline — Understand Your Car Contract",
//     description:
//       "Upload your car contract for a free analysis. Know what you’re signing before you do.",
//     creator: "@foxline_ai",
//     images: ["/og-image.jpg"],
//   },
// };
import React, { useState } from "react";
import Logo from "../assets/Foxline_logo.png";
import {
  Upload,
  CheckCircle,
  Shield,
  FileText,
  AlertCircle,
} from "lucide-react";
import DarkModeToggle from "./components/DarkModeToggle";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import FaqSection from "./components/FaqSection";
import About from "./components/About";
import Image from "next/image";
import dynamic from "next/dynamic";
import BlogPreviewWrapper from "./components/BlogPreviewWrapper";

export default function FoxlineLanding() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    file: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, file });
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.firstName || !formData.email || !formData.file) {
      setError("Please fill out all fields and upload your contract.");
      return;
    }

    try {
      setLoading(true);

      const form = new FormData();
      form.append("firstName", formData.firstName);
      form.append("email", formData.email);
      form.append("file", formData.file);

      // Send to your backend (Next.js API route)
      const response = await fetch("/api/upload", {
        method: "POST",
        body: form,
      });

      if (!response.ok) throw new Error("Upload failed");

      // Trigger confirmation email
      await fetch("/api/send-confirmation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName,
        }),
      });

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-emerald-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Got it! Your analysis is on the way.
          </h1>
          <p className="text-lg text-slate-600 dark:text-gray-300 mb-8">
            We're reviewing your car contract now. Expect results within 24
            hours at{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              {formData.email}
            </span>
          </p>
          <p className="text-sm text-slate-500 dark:text-gray-400">
            Check your inbox for confirmation. We'll keep your file secure and
            delete it within 30 days.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-950">
      <header className="flex justify-between items-center p-6 max-w-5xl mx-auto">
        {/* <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Foxline
        </h1> */}

        <div>
          <Image src={Logo} alt="" className="w-[120px]" />
        </div>
        <DarkModeToggle />
      </header>

      <section className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-10 my-20">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
          Get Your Free Analysis
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
              Upload Your Car Contract
            </label>
            <input
              type="file"
              required
              onChange={handleFileChange}
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
              className="block w-full text-slate-600 dark:text-gray-200 border border-slate-300 dark:border-gray-700 rounded-lg p-2 bg-white dark:bg-gray-800"
            />
            {fileName && (
              <p className="text-sm text-slate-600 dark:text-gray-300 mt-1">
                {fileName}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
              First Name
            </label>
            <input
              type="text"
              required
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              className="w-full px-4 py-3 border border-slate-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-slate-900 dark:text-gray-100"
              placeholder="Enter your first name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 border border-slate-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-slate-900 dark:text-gray-100"
              placeholder="your@email.com"
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full font-semibold py-4 px-6 rounded-lg transition-colors text-lg shadow-lg text-white bg-[#e08e79] hover:bg-[#d97a62]"
          >
            {loading ? "Uploading..." : "Analyze My Car Contract Free"}
          </button>

          <p className="text-center text-xs text-slate-500 dark:text-gray-400">
            🔒 Files encrypted & auto-deleted after 30 days.
          </p>
        </form>
      </section>

      {/* Testimonials Carousel */}
      <section className="w-full max-w-4xl mx-auto mt-12 px-4">
        <h2 className="text-2xl font-semibold mb-6 text-center text-slate-900 dark:text-white">
          Real Stories from Foxline Users
        </h2>
        <TestimonialsCarousel />
      </section>

      <About />
      <BlogPreviewWrapper />
      <FaqSection />
    </div>
  );
}
