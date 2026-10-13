"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/theme-provider";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  // Update isDark when theme changes or system preference changes
  useEffect(() => {
    const updateIsDark = () => {
      if (theme === "dark") {
        setIsDark(true);
      } else if (theme === "light") {
        setIsDark(false);
      } else {
        // system theme
        setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
      }
    };

    updateIsDark();

    // Listen for system theme changes if using system theme
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", updateIsDark);
      return () => mediaQuery.removeEventListener("change", updateIsDark);
    }
  }, [theme]);

  const toggleTheme = () => {
    // Toggle based on current visual state
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        key={isDark ? "dark" : "light"}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 0.4 }}
      >
        {isDark ? (
          <Moon className="w-5 h-5 text-slate-400" />
        ) : (
          <Sun className="w-5 h-5 text-slate-600" />
        )}
      </motion.div>
    </motion.button>
  );
}
