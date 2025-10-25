"use client";
import React, { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="bg-white dark:bg-slate-900 shadow-sm transition-colors sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                Foxline
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-x-5">
            <a
              href="/#about"
               onClick={() => setMenuOpen((prev) => !prev)}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium transition-colors"
            >
              About
            </a>
            <a
              href="/#testimonial"
               onClick={() => setMenuOpen((prev) => !prev)}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium transition-colors"
            >
              Testimonials
            </a>
            <a
              href="/#faq"
               onClick={() => setMenuOpen((prev) => !prev)}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium transition-colors"
            >
              Faq
            </a>
            <a
              href="/#analysis"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium transition-colors"
            >
              Contact
            </a>
            <DarkModeToggle />
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-slate-900 dark:text-white"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 transition-all">
            <div className="flex flex-col px-4 py-4 space-y-4 text-slate-700 dark:text-slate-300">
              <a
                 onClick={() => setMenuOpen((prev) => !prev)}
                href="/#about" className="font-medium hover:text-blue-500">
                About
              </a>
              <a
                href="/#testimonial"
                onClick={() => setMenuOpen((prev) => !prev)}
                className="font-medium hover:text-blue-500"
              >
                Testimonials
              </a>
              <a
                 onClick={() => setMenuOpen((prev) => !prev)}
                href="/#faq" className="font-medium hover:text-blue-500">
                Faq
              </a>
              <a 
                 onClick={() => setMenuOpen((prev) => !prev)}
                href="/#analysis" className="font-medium hover:text-blue-500">
                Contact
              </a>

              {/* Dark Mode toggle also visible on mobile */}
              <div>
                <DarkModeToggle />
              </div>
            </div>
          </nav>
        )}
      </header>
      
    </div>
  );
};

export default Navbar;


