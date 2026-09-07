"use client";

import * as React from "react";

export interface ScrollReelTestimonial {
  /** The quote text */
  quote: string;
  /** Author name shown below the quote */
  author: string;
  /** Position of the author */
  position: string;
  /** URL for the company logo */
  companyLogo: string;
  /** Portrait image URL for the featured tile */
  image: string;
  /** Optional alt text for the portrait */
  alt?: string;
}

export interface ScrollReelTestimonialsProps {
  /** Testimonials to cycle through */
  testimonials: ScrollReelTestimonial[];
  /** Per-character stagger in ms (default 6) */
  charStaggerMs?: number;
  /** Extra classes for the outer container */
  className?: string;
}

const CELL = 150;
const GAP = 12;
const STEP = 3 * (CELL + GAP);

const EXIT_MS = 240;
const SLIDE_MS = 800;
const EASE_INOUT = "cubic-bezier(0.65,0,0.35,1)";

const QUOTE_CLASSES = "m-0 text-lg font-medium leading-[1.4] tracking-[-0.01em] text-foreground sm:text-[22px]";
const AUTHOR_CLASSES = "m-0 text-base font-bold tracking-tight text-foreground";
const POSITION_CLASSES = "m-0 text-sm font-medium text-foreground/60";

const FEATURED_SHADOW =
  "0 1.008px 0.705px -0.563px rgba(0,0,0,0.18), 0 2.389px 1.672px -1.125px rgba(0,0,0,0.17), 0 4.357px 3.05px -1.688px rgba(0,0,0,0.17), 0 7.244px 5.07px -2.25px rgba(0,0,0,0.16), 0 11.698px 8.188px -2.813px rgba(0,0,0,0.15), 0 19.148px 13.404px -3.375px rgba(0,0,0,0.13), 0 32.972px 23.08px -3.938px rgba(0,0,0,0.09), 0 60px 42px -4.5px rgba(0,0,0,0.02), inset 0 1px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(0,0,0,0.6)";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Cell({ src }: { src?: string }) {
  if (src) {
    return (
      <div
        aria-hidden="true"
        className="relative shrink-0 overflow-hidden rounded-[1.5rem] border border-border opacity-40 mix-blend-luminosity dark:opacity-30"
        style={{ width: CELL, height: CELL }}
      >
        <img
          src={src}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
        />
      </div>
    );
  }
  return (
    <div
      aria-hidden="true"
      className="shrink-0 rounded-[1.5rem] border border-border bg-gradient-to-b from-secondary to-card blur-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.05),inset_0_2px_0_rgba(255,255,255,1)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]"
      style={{ width: CELL, height: CELL }}
    />
  );
}

function Featured({ src, alt }: { src: string; alt?: string }) {
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-[1.5rem] bg-muted dark:ring-1 dark:ring-white/10"
      style={{ width: CELL, height: CELL, boxShadow: FEATURED_SHADOW }}
    >
      <img
        src={src}
        alt={alt ?? ""}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2] bg-white mix-blend-saturation"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[3] blur-[6px] mix-blend-overlay"
        style={{
          background:
            "linear-gradient(220.99deg, rgba(108,92,255,0) 32%, rgb(108,92,255) 41%, rgb(173,177,255) 47%, rgba(130,189,237,0.57) 54%, rgba(130,189,237,0) 65%)",
        }}
      />
    </div>
  );
}

function Chars({
  text,
  startIndex,
  staggerMs,
}: {
  text: string;
  startIndex: number;
  staggerMs: number;
}) {
  let idx = startIndex;
  const words = text.split(" ");
  return (
    <>
      {words.map((word, wi) => {
        const wordSpan = (
          <span className="inline-block whitespace-nowrap">
            {Array.from(word).map((ch, ci) => {
              const delay = idx * staggerMs;
              idx++;
              return (
                <span
                  key={ci}
                  className="scroll-reel-char"
                  style={{ animationDelay: `${delay}ms` }}
                >
                  {ch}
                </span>
              );
            })}
          </span>
        );
        if (wi < words.length - 1) idx++;
        return (
          <React.Fragment key={wi}>
            {wordSpan}
            {wi < words.length - 1 ? " " : null}
          </React.Fragment>
        );
      })}
    </>
  );
}

export function ScrollReelTestimonials({
  testimonials,
  charStaggerMs = 6,
  className,
}: ScrollReelTestimonialsProps) {
  const [index, setIndex] = React.useState(0);
  const [displayIndex, setDisplayIndex] = React.useState(0);
  const [exiting, setExiting] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const touchStartY = React.useRef<number | null>(null);
  const animating = React.useRef(false);
  const timeouts = React.useRef<ReturnType<typeof setTimeout>[]>([]);

  const count = testimonials.length;

  React.useEffect(() => {
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => setMounted(true))
    );
    return () => {
      cancelAnimationFrame(raf);
      timeouts.current.forEach(clearTimeout);
    };
  }, []);

  const paginate = React.useCallback(
    (dir: 1 | -1) => {
      if (animating.current) return;
      let next = index + dir;
      if (next < 0) next = count - 1;
      if (next >= count) next = 0;
      
      animating.current = true;

      setIndex(next);
      setExiting(true);

      timeouts.current.push(
        setTimeout(() => {
          setDisplayIndex(next);
          setExiting(false);
        }, EXIT_MS)
      );
      timeouts.current.push(
        setTimeout(() => {
          animating.current = false;
        }, SLIDE_MS)
      );
    },
    [index, count]
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      paginate(1);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      paginate(-1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0]?.clientY ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;
    const touchEndY = e.changedTouches[0]?.clientY;
    if (touchEndY === undefined) return;
    const deltaY = touchStartY.current - touchEndY;

    if (Math.abs(deltaY) > 40) {
      if (deltaY > 0) paginate(1);
      else paginate(-1);
    }
    touchStartY.current = null;
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (animating.current) return;
    // Don't prevent default, allow page to scroll
    if (e.deltaY > 30) paginate(1);
    else if (e.deltaY < -30) paginate(-1);
  };

  React.useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, paginate]);

  const middleItems = React.useMemo(() => {
    const items: Array<{ type: "cell"; src: string } | { type: "featured"; i: number }> = [];
    let imgIdx = 0;
    const getItem = (idx: number) => testimonials[idx % count] ?? testimonials[0]!;
    for (let i = 0; i < 3; i++) items.push({ type: "cell", src: getItem(imgIdx++).image });
    testimonials.forEach((_, i) => {
      items.push({ type: "featured", i });
      if (i < count - 1) {
        items.push({ type: "cell", src: getItem(imgIdx++).image });
        items.push({ type: "cell", src: getItem(imgIdx++).image });
      }
    });
    for (let i = 0; i < 3; i++) items.push({ type: "cell", src: getItem(imgIdx++).image });
    return items;
  }, [testimonials, count]);

  const sideCellCount = 4 + 2 * count;
  const centerIdx = (count - 1) / 2;
  const middleY = (centerIdx - index) * STEP;
  const sideY = -middleY;

  const colStyle = (y: number): React.CSSProperties => ({
    transform: `translateY(${y}px)`,
    transition: mounted ? `transform ${SLIDE_MS}ms ${EASE_INOUT}` : "none",
  });

  const current = testimonials[displayIndex] ?? testimonials[0]!;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimonials"
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onWheel={handleWheel}
      className={cn(
        "relative flex w-full max-w-[1060px] flex-col items-stretch gap-2.5 overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-ring md:min-h-[400px] md:flex-row",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="relative h-72 w-full shrink-0 self-stretch overflow-hidden md:h-auto md:w-[510px]"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMaskComposite: "source-in",
          maskComposite: "intersect",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center gap-2">
          <div
            className="flex shrink-0 flex-col gap-3 will-change-transform motion-reduce:[transition:none!important]"
            style={colStyle(sideY)}
          >
            {Array.from({ length: sideCellCount }).map((_, i) => (
              <Cell key={`l-${i}`} src={(testimonials[(i * 3) % count] ?? testimonials[0]!).image} />
            ))}
          </div>

          <div
            className="flex shrink-0 flex-col gap-3 will-change-transform motion-reduce:[transition:none!important]"
            style={colStyle(middleY)}
          >
            {middleItems.map((item, i) => {
              if (item.type === "featured") {
                const feat = testimonials[item.i] ?? testimonials[0]!;
                return (
                  <Featured
                    key={`m-${i}`}
                    src={feat.image}
                    alt={feat.alt ?? ""}
                  />
                );
              }
              return <Cell key={`mc-${i}`} src={item.src} />;
            })}
          </div>

          <div
            className="flex shrink-0 flex-col gap-3 will-change-transform motion-reduce:[transition:none!important]"
            style={colStyle(sideY)}
          >
            {Array.from({ length: sideCellCount }).map((_, i) => (
              <Cell key={`r-${i}`} src={(testimonials[(i * 5 + 7) % count] ?? testimonials[0]!).image} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between self-stretch px-8 py-10 md:px-12 md:py-16">
        <div className="flex flex-col gap-[9px]">
          <svg
            className="mb-4 block h-10 w-10 text-primary/40 md:h-12 md:w-12"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M4.58 17.32C3.55 16.23 3 15 3 13.01c0-3.5 2.46-6.64 6.03-8.19l.9 1.38c-3.34 1.8-4 4.15-4.25 5.62.54-.28 1.24-.38 1.93-.31 1.8.17 3.23 1.65 3.23 3.49a3.5 3.5 0 0 1-3.5 3.5c-1.07 0-2.1-.49-2.75-1.18zm10 0C13.55 16.23 13 15 13 13.01c0-3.5 2.46-6.64 6.03-8.19l.9 1.38c-3.34 1.8-4 4.15-4.25 5.62.54-.28 1.24-.38 1.93-.31 1.8.17 3.23 1.65 3.23 3.49a3.5 3.5 0 0 1-3.5 3.5c-1.07 0-2.1-.49-2.75-1.18z" />
          </svg>

          <div className="relative w-full overflow-hidden" aria-live="polite">
            <div aria-hidden="true" className="invisible flex min-h-[220px] flex-col gap-6 md:min-h-[180px]">
              <p className={QUOTE_CLASSES}>{current.quote}</p>
              <div className="flex items-center gap-4">
                <div className="rounded-md bg-white/95 p-1.5 shadow-sm dark:p-2">
                  <img src={current.companyLogo} alt="Company" className="h-6 w-auto object-contain md:h-8" />
                </div>
                <div>
                  <p className={AUTHOR_CLASSES}>{current.author}</p>
                  <p className={POSITION_CLASSES}>{current.position}</p>
                </div>
              </div>
            </div>
            
            <div
              key={displayIndex}
              className={cn(
                "absolute inset-x-0 top-0 flex flex-col gap-6 will-change-[transform,opacity]",
                exiting && "scroll-reel-exit"
              )}
            >
              <p className={QUOTE_CLASSES}>
                <Chars text={current.quote} startIndex={0} staggerMs={charStaggerMs} />
              </p>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-lg bg-white/95 px-2 py-1.5 shadow-sm dark:px-3">
                  <img 
                    src={current.companyLogo} 
                    alt="Company" 
                    className="h-6 w-auto object-contain md:h-8" 
                  />
                </div>
                <div className="flex flex-col">
                  <p className={AUTHOR_CLASSES}>
                    <Chars text={current.author} startIndex={current.quote.length + 6} staggerMs={charStaggerMs} />
                  </p>
                  <p className={POSITION_CLASSES}>
                    <Chars text={current.position} startIndex={current.quote.length + current.author.length + 10} staggerMs={charStaggerMs} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-2 md:mt-0">
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Previous testimonial"
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-foreground/15 bg-background p-0 text-foreground transition-[opacity,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.08] hover:border-primary active:scale-[0.94] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <svg className="h-4 w-4" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7.5 2.5 3.5 6l4 3.5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Next testimonial"
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-foreground/15 bg-background p-0 text-foreground transition-[opacity,transform] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.08] hover:border-primary active:scale-[0.94] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <svg className="h-4 w-4" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m4.5 2.5 4 3.5-4 3.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
