"use client";

import dynamic from "next/dynamic";
import FreeAnalysisForm from "./components/FreeAnalysisForm";
import About from "./components/About";
import DarkModeToggle from "./components/DarkModeToggle";
import Image from "next/image";
import Logo from "../assets/Foxline_logo.png";

// ✅ Fully Client Sections
const TestimonialsCarousel = dynamic(
  () => import("./components/TestimonialsCarousel"),
  { ssr: false }
);

const FaqSection = dynamic(() => import("./components/FaqSection"), {
  ssr: false,
});

const BlogPreviewWrapper = dynamic(
  () => import("./components/BlogPreviewSection"),
  { ssr: false }
);

export default function FoxlineClientWrapper() {
  return (
    <div className="pb-10">
      <header className="flex justify-between items-center p-6 max-w-5xl mx-auto">
        <Image src={Logo} alt="Foxline" className="w-[120px]" />
        <DarkModeToggle />
      </header>

      <FreeAnalysisForm />

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



