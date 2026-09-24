import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function RefreshSnapIndicator() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if this page load is continuing from a refresh
    try {
      if (sessionStorage.getItem("msajce_is_refreshing") === "true") {
        setIsRefreshing(true);
        sessionStorage.removeItem("msajce_is_refreshing");
        // Keep the refreshing snap indicator visible briefly until the hero section fade-in completes
        const timer = setTimeout(() => {
          setIsRefreshing(false);
        }, 650);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      // Ignore storage errors
    }

    const triggerRefreshSnap = () => {
      // 1. Immediately snap viewport to top hero section
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;

      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(0, { immediate: true, force: true });
      }

      // 2. Mark session storage so the newly loaded page maintains the refreshing snap
      try {
        sessionStorage.setItem("msajce_is_refreshing", "true");
      } catch (e) {}

      // 3. Immediately display DOM refresh snap indicator for zero-delay visual feedback
      const el = document.getElementById("msajce-refresh-snap");
      if (el) {
        el.style.display = "flex";
        el.style.opacity = "1";
      }
    };

    // Keyboard shortcut handler (F5, Ctrl+R, Cmd+R)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "F5" ||
        ((e.ctrlKey || e.metaKey) && (e.key === "r" || e.key === "R"))
      ) {
        triggerRefreshSnap();
      }
    };

    // Browser navigation / reload button handler
    const handleBeforeUnload = () => {
      triggerRefreshSnap();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("pagehide", handleBeforeUnload);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("pagehide", handleBeforeUnload);
    };
  }, []);

  return (
    <>
      {/* Immediate DOM element for pre-unload instant display (Minimal top bar only, no text) */}
      <div
        id="msajce-refresh-snap"
        className="fixed top-0 left-0 right-0 z-[99999] pointer-events-none hidden opacity-0 transition-opacity duration-150"
      >
        <div className="w-full h-[2.5px] bg-gradient-to-r from-primary via-[#E11D48] to-primary animate-pulse" />
      </div>

      {/* Smoothly animated post-refresh top indicator until full refresh finishes */}
      <AnimatePresence>
        {isRefreshing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-[99999] pointer-events-none"
          >
            <div className="w-full h-[2.5px] bg-gradient-to-r from-primary via-[#E11D48] to-primary animate-pulse" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
