import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
  try {
    localStorage.setItem("msajce-theme", theme);
  } catch {
    /* ignore */
  }
}

export function ThemeToggle({ className }: { className?: string }) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem("msajce-theme");
    } catch {
      /* ignore */
    }
    const dark = stored === "dark";
    setIsDark(dark);
    applyTheme(dark ? "dark" : "light");
    setMounted(true);
  }, []);

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    const next: Theme = isDark ? "light" : "dark";
    const switchTheme = () => {
      applyTheme(next);
      setIsDark(!isDark);
    };

    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => void;
    };

    if (
      !doc.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      switchTheme();
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const root = document.documentElement;
    root.style.setProperty("--transition-x", `${x}px`);
    root.style.setProperty("--transition-y", `${y}px`);
    root.style.setProperty("--transition-r", `${endRadius}px`);

    doc.startViewTransition(switchTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn("theme-toggle-btn border border-border", className)}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      style={{ visibility: mounted ? "visible" : "hidden" }}
    >
      <svg
        className="theme-toggle-svg"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        fill="currentColor"
        strokeLinecap="round"
        viewBox="0 0 32 32"
      >
        <mask id="msajce-moon-mask">
          <rect x="0" y="0" width="32" height="32" fill="white" />
          <circle className="clip-mask" cx="24" cy="8" r="7" fill="black" />
        </mask>
        <circle
          className="theme-center-circle"
          cx="16"
          cy="16"
          r="8"
          mask="url(#msajce-moon-mask)"
        />
        <g className="theme-rays" stroke="currentColor" strokeWidth="1.5" fill="none">
          <path d="M16 5.5v-4" />
          <path d="M16 30.5v-4" />
          <path d="M1.5 16h4" />
          <path d="M26.5 16h4" />
          <path d="m23.4 8.6 2.8-2.8" />
          <path d="m5.7 26.3 2.9-2.9" />
          <path d="m5.8 5.8 2.8 2.8" />
          <path d="m23.4 23.4 2.9 2.9" />
        </g>
      </svg>
    </button>
  );
}
