"use client";
import React, { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="bg-white  :bg-slate-900 shadow-sm transition-colors sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/">
            <div className="flex items-center gap-3">
              <svg
                width="40"
                height="40"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="100"
                  cy="100"
                  r="88"
                  fill="none"
                  stroke="#2c5f5f"
                  strokeWidth="3"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="82"
                  fill="none"
                  stroke="#d4af37"
                  strokeWidth="1.5"
                />
                <g transform="translate(100, 100)">
                  <path d="M -15 -20 L -10 -35 L -8 -20 Z" fill="#2c5f5f" />
                  <path d="M 15 -20 L 10 -35 L 8 -20 Z" fill="#2c5f5f" />
                  <path
                    d="M -18 -15 Q -20 0 -15 10 Q -10 15 0 18 Q 10 15 15 10 Q 20 0 18 -15 Q 15 -22 0 -25 Q -15 -22 -18 -15 Z"
                    fill="#2c5f5f"
                  />
                </g>
              </svg>
              <span
                className="text-2xl font-medium"
                style={{
                  color: "#2c5f5f",
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                Foxline
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-x-5">
            <a
              href="/#about"
              className="text-slate-600 :text-slate-300 hover:text-slate-900 :hover:text-white font-medium transition-colors"
            >
              About
            </a>
            <a
              href="/#testimonial"
              className="text-slate-600 :text-slate-300 hover:text-slate-900 :hover:text-white font-medium transition-colors"
            >
              Testimonials
            </a>
            <a
              href="/#faq"
              className="text-slate-600 :text-slate-300 hover:text-slate-900 :hover:text-white font-medium transition-colors"
            >
              Faq
            </a>
            <a
              href="/#analysis"
              className="text-slate-600 :text-slate-300 hover:text-slate-900 :hover:text-white font-medium transition-colors"
            >
              Contact
            </a>
            {/* <DarkModeToggle /> */}
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-slate-900 :text-white"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden bg-white :bg-slate-900 border-t border-slate-200 :border-slate-700 transition-all">
            <div className="flex flex-col px-4 py-4 space-y-4 text-slate-700 :text-slate-300">
              <a href="/#about" className="font-medium hover:text-blue-500">
                About
              </a>
              <a
                href="/#testimonial"
                className="font-medium hover:text-blue-500"
              >
                Testimonials
              </a>
              <a href="/#faq" className="font-medium hover:text-blue-500">
                Faq
              </a>
              <a href="/#analysis" className="font-medium hover:text-blue-500">
                Contact
              </a>

              {/* Dark Mode toggle also visible on mobile */}
              <div>{/* <DarkModeToggle /> */}</div>
            </div>
          </nav>
        )}
      </header>
    </div>
  );
};

export default Navbar;
