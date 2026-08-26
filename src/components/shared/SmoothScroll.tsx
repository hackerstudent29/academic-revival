import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 1024px)").matches) return;

    const lenis = new Lenis({
      lerp: 0.15, // Higher value means faster, tighter settling (less drift)
      smoothWheel: true,
      wheelMultiplier: 0.9, // Slightly tighter scroll distance
      touchMultiplier: 1.5,
      infinite: false,
    });

    (window as any).lenis = lenis;

    let rafId = requestAnimationFrame(function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  return null;
}
