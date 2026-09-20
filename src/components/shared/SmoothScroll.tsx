import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 1024px)").matches) return;

    // Reset window scroll synchronously BEFORE Lenis instantiates
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;

    const lenis = new Lenis({
      lerp: 0.12, // Silky smooth response
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.5,
      infinite: false,
      autoResize: true,
    });

    (window as any).lenis = lenis;
    lenis.scrollTo(0, { immediate: true, force: true });

    let rafId = requestAnimationFrame(function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    });

    const handleBeforeUnload = () => {
      lenis.scrollTo(0, { immediate: true, force: true });
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("pagehide", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("pagehide", handleBeforeUnload);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  return null;
}
