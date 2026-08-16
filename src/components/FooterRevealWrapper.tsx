import { useEffect, useRef, useState, type ReactNode } from "react";
import { SiteFooter } from "@/components/SiteFooter";

export function FooterRevealWrapper({ children }: { children: ReactNode }) {
  const footerRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) setHeight(entry.contentRect.height);
    });
    ro.observe(el);
    setHeight(el.getBoundingClientRect().height);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const el = spacerRef.current;
    if (!el || height === 0) return;
    const io = new IntersectionObserver(
      (entries) => setRevealed((entries[0]?.intersectionRatio ?? 0) > 0.2),
      { threshold: [0, 0.2, 0.6, 1] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [height]);

  return (
    <>
      <div className="relative z-[2] flex min-h-screen flex-col bg-background text-foreground">
        {children}
      </div>
      <div ref={spacerRef} style={{ height }} aria-hidden className="relative z-0" />
      <div
        ref={footerRef}
        className="fixed inset-x-0 bottom-0 z-[1] hidden lg:block"
      >
        <SiteFooter revealed={revealed} />
      </div>
      <div className="relative z-[2] bg-background lg:hidden">
        <SiteFooter revealed />
      </div>
    </>
  );
}
