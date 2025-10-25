"use client";

import dynamic from "next/dynamic";
import FreeAnalysisForm from "./components/FreeAnalysisForm";
import About from "./components/About";
import DarkModeToggle from "./components/DarkModeToggle";
import Image from "next/image";
import Logo from "../assets/Foxline_logo.png";
import {
  Upload,
  CheckCircle,
  Shield,
  FileText,
  AlertCircle,
} from "lucide-react";
import Hero from "./components/Hero";

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 dark:text-white">
      <Hero />

      {/* Value Proposition */}
      <section className="bg-white dark:bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              You shouldn't need a law degree to understand what you're paying
              for.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
              Whether it's a contractor estimate, service agreement, or sales
              contract—the{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                opacity, the "add-ons I didn't ask for," the terms buried on
                page 7
              </span>
              —it's exhausting.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              We break it down: What are you actually getting? What's the total
              cost? What are the red flags? What questions should you ask before
              signing?
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
          What You'll Get
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-blue-600 dark:text-blue-300" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Line-by-line cost breakdown
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Know exactly where your money goes
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center mb-4">
              <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-300" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Hidden fee detector
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              We flag vague terms and surprise charges
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-red-600 dark:text-red-300" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Red flag alerts
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Unusual clauses, aggressive terms, missing details
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-300" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              Plain-English summary
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              No jargon, no confusion—just clarity
            </p>
          </div>
        </div>
      </section>

      <FreeAnalysisForm />

      <section className="w-full max-w-4xl mx-auto mt-12 px-4">
        <h2 className="text-2xl font-semibold mb-6 text-center text-slate-900 dark:text-white">
          Real Stories from Foxline Users
        </h2>
        <TestimonialsCarousel />
      </section>

      <FaqSection />

      {/* About Section */}
      <section id="about" className="bg-white dark:bg-slate-900 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-4xl font-bold">F</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              I Know the Games. I'm Here to End Them.
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-slate-600 dark:text-slate-300 space-y-4">
            <p>
              I grew up in the car dealership world. My family was in the
              business for over 40 years.
            </p>
            <p>
              I saw it all: the fine print tactics, the pressure techniques, the
              "add-ons" that mysteriously appeared on contracts...
            </p>
            <p className="text-xl font-semibold text-slate-900 dark:text-white">
              So I'm using my insider knowledge differently.
            </p>
            <p>
              Foxline exists because{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                you deserve transparency before you sign
              </span>
              . You deserve clarity without feeling talked down to.
            </p>
            <p>I've seen both sides. Now I'm on yours.</p>
            <p className="text-lg font-semibold text-slate-900 dark:text-white pt-4">
              — Founder, Foxline
            </p>
          </div>
        </div>
      </section>

      <BlogPreviewWrapper />

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to know what you're really signing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Upload your contract. Get clarity. Make confident decisions.
          </p>
          <a
            href="#analysis"
            className="inline-block bg-white dark:bg-slate-900 text-blue-600 dark:text-white font-semibold py-4 px-8 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors text-lg shadow-xl"
          >
            Get Your Free Analysis
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-black text-slate-400 dark:text-slate-500 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-2">© 2025 Foxline. Built with transparency.</p>
          <p className="text-sm">
            <a href="https://foxline.ai" className="hover:text-white">
              foxline.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

// "use client";

// import dynamic from "next/dynamic";
// import FreeAnalysisForm from "./components/FreeAnalysisForm";
// import About from "./components/About";
// import DarkModeToggle from "./components/DarkModeToggle";
// import Image from "next/image";
// import Logo from "../assets/Foxline_logo.png";
// import {
//   Upload,
//   CheckCircle,
//   Shield,
//   FileText,
//   AlertCircle,
// } from "lucide-react";
// import Hero from "./components/Hero";
// // ✅ Fully Client Sections
// const TestimonialsCarousel = dynamic(
//   () => import("./components/TestimonialsCarousel"),
//   { ssr: false }
// );

// const FaqSection = dynamic(() => import("./components/FaqSection"), {
//   ssr: false,
// });

// const BlogPreviewWrapper = dynamic(
//   () => import("./components/BlogPreviewSection"),
//   { ssr: false }
// );

// export default function FoxlineClientWrapper() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
//       <Hero />
//       {/* Value Proposition */}
//       <section className="bg-white py-16">
//         <div className="max-w-4xl mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-3xl font-bold text-slate-900 mb-6">
//               You shouldn't need a law degree to understand what you're paying
//               for.
//             </h2>
//             <p className="text-lg text-slate-600 mb-4">
//               Whether it's a contractor estimate, service agreement, or sales
//               contract—the{" "}
//               <span className="font-semibold">
//                 opacity, the "add-ons I didn't ask for," the terms buried on
//                 page 7
//               </span>
//               —it's exhausting.
//             </p>
//             <p className="text-lg text-slate-600">
//               We break it down: What are you actually getting? What's the total
//               cost? What are the red flags? What questions should you ask before
//               signing?
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* What You'll Get */}
//       <section className="max-w-6xl mx-auto px-4 py-16">
//         <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
//           What You'll Get
//         </h2>

//         <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
//           <div className="bg-white p-6 rounded-xl shadow-md">
//             <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
//               <FileText className="w-6 h-6 text-blue-600" />
//             </div>
//             <h3 className="text-xl font-semibold text-slate-900 mb-2">
//               Line-by-line cost breakdown
//             </h3>
//             <p className="text-slate-600">Know exactly where your money goes</p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow-md">
//             <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
//               <AlertCircle className="w-6 h-6 text-amber-600" />
//             </div>
//             <h3 className="text-xl font-semibold text-slate-900 mb-2">
//               Hidden fee detector
//             </h3>
//             <p className="text-slate-600">
//               We flag vague terms and surprise charges
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow-md">
//             <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
//               <Shield className="w-6 h-6 text-red-600" />
//             </div>
//             <h3 className="text-xl font-semibold text-slate-900 mb-2">
//               Red flag alerts
//             </h3>
//             <p className="text-slate-600">
//               Unusual clauses, aggressive terms, missing details
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow-md">
//             <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
//               <CheckCircle className="w-6 h-6 text-emerald-600" />
//             </div>
//             <h3 className="text-xl font-semibold text-slate-900 mb-2">
//               Plain-English summary
//             </h3>
//             <p className="text-slate-600">
//               No jargon, no confusion—just clarity
//             </p>
//           </div>
//         </div>
//       </section>
//       <FreeAnalysisForm />

//       <section className="w-full max-w-4xl mx-auto mt-12 px-4">
//         <h2 className="text-2xl font-semibold mb-6 text-center text-slate-900 dark:text-white">
//           Real Stories from Foxline Users
//         </h2>
//         <TestimonialsCarousel />
//       </section>

//       {/* <About /> */}
//       <FaqSection />

//       {/* Testimonials */}
//       {/* <section className="bg-slate-900 text-white py-16">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             Real Stories, Real Savings
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-slate-800 p-6 rounded-xl">
//               <p className="text-slate-300 mb-4">
//                 "I was about to sign a $8K contract. The analysis caught $1,200
//                 in 'miscellaneous fees' that were never explained to me.{" "}
//                 <span className="font-semibold text-white">
//                   I didn't feel dismissed for asking questions—I felt empowered.
//                 </span>
//                 "
//               </p>
//               <p className="font-semibold">— Maria T.</p>
//             </div>

//             <div className="bg-slate-800 p-6 rounded-xl">
//               <p className="text-slate-300 mb-4">
//                 "
//                 <span className="font-semibold text-white">
//                   No more dreading the paperwork.
//                 </span>{" "}
//                 Uploaded my contractor bid, got results same day. Found out I
//                 was being charged for materials twice."
//               </p>
//               <p className="font-semibold">— Jennifer L.</p>
//             </div>

//             <div className="bg-slate-800 p-6 rounded-xl">
//               <p className="text-slate-300 mb-4">
//                 "Finally, someone{" "}
//                 <span className="font-semibold text-white">
//                   treating me like I deserve clarity
//                 </span>{" "}
//                 instead of just a signature."
//               </p>
//               <p className="font-semibold">— Priya K.</p>
//             </div>
//           </div>
//         </div>
//       </section> */}

//       {/* Trust Section */}
//       {/* <section className="max-w-4xl mx-auto px-4 py-16">
//         <div className="bg-blue-50 rounded-2xl p-8 md:p-12">
//           <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
//             Common Questions
//           </h2>

//           <div className="space-y-6">
//             <div>
//               <h3 className="text-lg font-semibold text-slate-900 mb-2">
//                 Why free?
//               </h3>
//               <p className="text-slate-600">
//                 We believe you deserve transparency before you commit. This is
//                 how we earn your trust—no gimmicks, no bait-and-switch.
//               </p>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold text-slate-900 mb-2">
//                 Is my information secure?
//               </h3>
//               <p className="text-slate-600">
//                 Your documents are encrypted and never shared. We analyze, send
//                 results, and delete within 30 days.
//               </p>
//             </div>

//             <div>
//               <h3 className="text-lg font-semibold text-slate-900 mb-2">
//                 What's the catch?
//               </h3>
//               <p className="text-slate-600">
//                 No catch. If you love the analysis and want ongoing support, we
//                 offer premium services. But the first one's on us, no strings
//                 attached.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section> */}

//       {/* About Section */}
//       <section id="about" className="bg-white py-16">
//         <div className="max-w-4xl mx-auto px-4">
//           <div className="text-center mb-8">
//             <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center">
//               <span className="text-white text-4xl font-bold">F</span>
//             </div>
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">
//               I Know the Games. I'm Here to End Them.
//             </h2>
//           </div>

//           <div className="prose prose-lg max-w-none text-slate-600 space-y-4">
//             <p>
//               I grew up in the car dealership world. My family was in the
//               business for over 40 years.
//             </p>
//             <p>
//               I saw it all: the fine print tactics, the pressure techniques, the
//               "add-ons" that mysteriously appeared on contracts. I watched
//               customers—mostly women—walk out feeling{" "}
//               <span className="font-semibold text-slate-900">
//                 confused, pressured, and cheated
//               </span>
//               . And I watched salespeople celebrate it.
//             </p>
//             <p>
//               I loved my family. But I hated seeing people taken advantage of.
//             </p>
//             <p className="text-xl font-semibold text-slate-900">
//               So I'm using my insider knowledge differently.
//             </p>
//             <p>
//               Foxline exists because{" "}
//               <span className="font-semibold text-slate-900">
//                 you deserve transparency before you sign
//               </span>
//               . You deserve to know exactly what you're paying for, what's
//               negotiable, and what's a red flag—without feeling intimidated or
//               talked down to.
//             </p>
//             <p>I've seen both sides. Now I'm on yours.</p>
//             <p className="text-lg font-semibold text-slate-900 pt-4">
//               — Founder, Foxline
//             </p>
//           </div>
//         </div>
//       </section>
//       <BlogPreviewWrapper />

//       {/* Final CTA */}
//       <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Ready to know what you're really signing?
//           </h2>
//           <p className="text-xl text-blue-100 mb-8">
//             Upload your contract. Get clarity. Make confident decisions.
//           </p>
//           <a
//             href="#analysis"
//             className="inline-block bg-white text-blue-600 font-semibold py-4 px-8 rounded-lg hover:bg-blue-50 transition-colors text-lg shadow-xl"
//           >
//             Get Your Free Analysis
//           </a>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-slate-900 text-slate-400 py-8">
//         <div className="max-w-6xl mx-auto px-4 text-center">
//           <p className="mb-2">© 2025 Foxline. Built with transparency.</p>
//           <p className="text-sm">
//             <a href="https://foxline.ai" className="hover:text-white">
//               foxline.ai
//             </a>
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// }
