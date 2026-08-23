import { useEffect, useRef, useCallback } from "react";

/**
 * Renders text that auto-scales to fill the full width of its parent container.
 * Each instance independently sizes itself so multiple lines appear to span
 * the same visual width — the "BigText" / editorial typography effect.
 */
export function FitText({
  children,
  className = "",
  minSize = 16,
  maxSize = 200,
}: {
  children: React.ReactNode;
  className?: string;
  minSize?: number;
  maxSize?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  const resize = useCallback(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    const containerWidth = container.offsetWidth;
    // Binary search for the right font size
    let lo = minSize;
    let hi = maxSize;

    while (hi - lo > 0.5) {
      const mid = (lo + hi) / 2;
      text.style.fontSize = `${mid}px`;
      if (text.scrollWidth > containerWidth) {
        hi = mid;
      } else {
        lo = mid;
      }
    }

    text.style.fontSize = `${lo}px`;
  }, [minSize, maxSize]);

  useEffect(() => {
    resize();
    const ro = new ResizeObserver(resize);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [resize]);

  return (
    <div ref={containerRef} className={`w-full overflow-hidden ${className}`}>
      <span
        ref={textRef}
        className="inline-block whitespace-nowrap leading-[0.95] font-black uppercase tracking-tighter"
      >
        {children}
      </span>
    </div>
  );
}
