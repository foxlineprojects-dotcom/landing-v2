"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex items-center gap-2 px-3 py-2 rounded-md border border-gray-300 :border-gray-700 hover:bg-gray-100 :hover:bg-gray-800 transition"
      aria-label="Toggle dark mode"
    >
      {theme === "light" ? (
        <>
          <Moon className="w-5 h-5" /> <span>Dark</span>
        </>
      ) : (
        <>
          <Sun className="w-5 h-5" /> <span>Light</span>
        </>
      )}
    </button>
  );
}
