import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ---------------------------------------------------------------------------
// 1. SCROLL PARALLAX CONTAINER (Multi-layer 3D depth)
// ---------------------------------------------------------------------------
interface ScrollParallaxProps {
  children: React.ReactNode;
  offset?: number; // Translation distance in px
  scale?: [number, number]; // [startScale, endScale]
  className?: string;
}

export const ScrollParallax: React.FC<ScrollParallaxProps> = ({
  children,
  offset = -40,
  scale,
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  const y = useTransform(smoothProgress, [0, 1], [offset, -offset]);
  const scaleTransform = scale ? useTransform(smoothProgress, [0, 1], scale) : undefined;

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{
          y,
          scale: scaleTransform,
          willChange: 'transform'
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// 2. SPLIT SLIDING HEADLINE (Opposing directional sliding on scroll)
// ---------------------------------------------------------------------------
interface SplitSlideHeadlineProps {
  leftText: string;
  rightText: string;
  highlightText?: string;
  subText?: string;
  className?: string;
}

export const SplitSlideHeadline: React.FC<SplitSlideHeadlineProps> = ({
  leftText,
  rightText,
  highlightText,
  subText,
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 90%', 'center 40%']
  });

  const smooth = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });
  const xLeft = useTransform(smooth, [0, 1], ['-35%', '0%']);
  const xRight = useTransform(smooth, [0, 1], ['35%', '0%']);
  const opacity = useTransform(smooth, [0, 0.4, 1], [0.3, 0.8, 1]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden py-4 ${className}`}>
      <div className="flex flex-col items-center justify-center text-center space-y-1">
        <motion.div
          style={{ x: xLeft, opacity, willChange: 'transform, opacity' }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#082B5C] font-['Outfit',sans-serif] uppercase tracking-tight"
        >
          {leftText}
        </motion.div>
        <motion.div
          style={{ x: xRight, opacity, willChange: 'transform, opacity' }}
          className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0D9488] font-['Outfit',sans-serif] uppercase tracking-tight flex items-center justify-center gap-3"
        >
          {highlightText && <span className="font-serif italic font-normal text-[#0284C7] lowercase">{highlightText}</span>}
          <span>{rightText}</span>
        </motion.div>
        {subText && (
          <motion.p
            style={{ opacity }}
            className="text-sm sm:text-base text-slate-600 max-w-xl font-normal pt-2"
          >
            {subText}
          </motion.p>
        )}
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// 3. PINNED HORIZONTAL SCROLL SEQUENCE (Vertical scroll -> Horizontal move)
// ---------------------------------------------------------------------------
interface HorizontalSequenceItem {
  id: string | number;
  title: string;
  subtitle?: string;
  category?: string;
  metric?: string;
  description: string;
  image: string;
  badge?: string;
  color?: string;
}

interface PinnedHorizontalSequenceProps {
  items: HorizontalSequenceItem[];
  sectionTitle: string;
  sectionSubtitle?: string;
  badgeText?: string;
  className?: string;
}

export const PinnedHorizontalSequence: React.FC<PinnedHorizontalSequenceProps> = ({
  items,
  sectionTitle,
  sectionSubtitle,
  badgeText = 'INTERACTIVE HORIZONTAL JOURNEY',
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 22, restDelta: 0.001 });
  // Total cards translate calculation
  const totalOffsetPercentage = Math.max((items.length - 1) * 65, 0);
  const x = useTransform(smoothProgress, [0, 1], ['0%', `-${totalOffsetPercentage}%`]);

  // Active index counter
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      const idx = Math.min(Math.floor(latest * items.length), items.length - 1);
      setActiveIndex(idx);
    });
  }, [scrollYProgress, items.length]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[320vh] bg-[#082B5C] text-white ${className}`}
    >
      {/* Pinned Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden py-10 px-4 sm:px-8 lg:px-14">
        
        {/* Top Header of Pinned Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/15 pb-4 z-20">
          <div>
            <span className="inline-block text-[10px] font-mono font-bold tracking-widest text-[#14B8A6] uppercase bg-white/10 px-3 py-1 mb-2">
              {badgeText}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-['Outfit',sans-serif] uppercase tracking-tight text-white">
              {sectionTitle}
            </h2>
            {sectionSubtitle && (
              <p className="text-xs sm:text-sm text-slate-300 font-normal mt-0.5">
                {sectionSubtitle}
              </p>
            )}
          </div>

          {/* Minimalist Progress Indicator: e.g. 03 / 08 */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="text-slate-400">SCROLL DOWN TO PROGRESS</span>
            <div className="px-3.5 py-1.5 bg-white/10 border border-white/20 text-white font-bold">
              <span className="text-[#14B8A6]">0{activeIndex + 1}</span> / 0{items.length}
            </div>
          </div>
        </div>

        {/* Horizontal Sliding Cards Track */}
        <div className="relative flex-1 flex items-center overflow-visible my-4 z-10">
          <motion.div
            style={{ x, willChange: 'transform' }}
            className="flex items-center gap-8 pl-2 pr-24"
          >
            {items.map((item, idx) => (
              <div
                key={item.id || idx}
                className="relative w-[300px] sm:w-[420px] lg:w-[460px] h-[380px] sm:h-[430px] shrink-0 bg-slate-900 border border-white/15 shadow-2xl flex flex-col justify-between overflow-hidden group transition-all"
              >
                {/* Background Image with Zoom */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover brightness-[0.55] group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Shading */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#082B5C] via-[#082B5C]/50 to-transparent" />

                {/* Top Card Badges */}
                <div className="relative p-6 flex items-center justify-between z-10">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#14B8A6] uppercase bg-black/40 px-2.5 py-1 backdrop-blur-xs">
                    STEP 0{idx + 1}
                  </span>
                  {item.badge && (
                    <span
                      className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 shadow-xs"
                      style={{ backgroundColor: item.color || '#0D9488' }}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Bottom Card Content */}
                <div className="relative p-6 space-y-2 z-10">
                  {item.category && (
                    <div className="text-[11px] font-mono font-bold text-[#38BDF8] uppercase">
                      {item.category}
                    </div>
                  )}
                  <h3 className="text-xl sm:text-2xl font-black font-['Outfit',sans-serif] uppercase tracking-tight text-white leading-snug">
                    {item.title}
                  </h3>
                  {item.metric && (
                    <div className="text-2xl sm:text-3xl font-black text-[#14B8A6] font-['Outfit',sans-serif]">
                      {item.metric}
                    </div>
                  )}
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Status Bar */}
        <div className="w-full flex items-center justify-between pt-3 border-t border-white/10 text-[10px] font-mono text-slate-400 z-20">
          <span>CONTINUOUS VERTICAL SCROLL DRIVES HORIZONTAL SPRINT</span>
          <div className="w-48 h-1 bg-white/20 overflow-hidden">
            <motion.div
              className="h-full bg-[#14B8A6] origin-left"
              style={{ scaleX: smoothProgress }}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// 4. INTERACTIVE DRAGGABLE & SCROLLABLE IMAGE GALLERY (01 / 08)
// ---------------------------------------------------------------------------
interface GalleryImage {
  url: string;
  title: string;
  caption?: string;
  category?: string;
}

interface InteractiveDragGalleryProps {
  images: GalleryImage[];
  title?: string;
  className?: string;
}

export const InteractiveDragGallery: React.FC<InteractiveDragGalleryProps> = ({
  images,
  title = 'EXPERIENTIAL CAMPUS & CORPORATE ARCHIVE',
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={`relative w-full py-12 px-4 sm:px-8 lg:px-14 bg-white border-y border-slate-200 ${className}`}>
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header with Counter & Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-mono font-bold text-[#0D9488] uppercase tracking-widest">
              PHOTOGRAPHIC REVEAL
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#082B5C] font-['Outfit',sans-serif] uppercase tracking-tight mt-0.5">
              {title}
            </h3>
          </div>

          {/* Controls + 03 / 08 Indicator */}
          <div className="flex items-center gap-4">
            <div className="px-3 py-1 bg-[#F4F8FC] border border-slate-200 font-mono text-xs font-bold text-[#082B5C]">
              <span className="text-[#0D9488]">0{currentIndex + 1}</span> / 0{images.length}
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                aria-label="Previous image"
                className="w-9 h-9 border border-slate-200 hover:border-[#082B5C] hover:bg-[#082B5C] hover:text-white text-[#082B5C] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next image"
                className="w-9 h-9 border border-slate-200 hover:border-[#082B5C] hover:bg-[#082B5C] hover:text-white text-[#082B5C] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Showcase: Active Centered Hero Image + Subtitle */}
        <div className="relative w-full h-[400px] sm:h-[520px] overflow-hidden bg-slate-950 shadow-xl border-2 border-slate-200 group">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{
                opacity: idx === currentIndex ? 1 : 0,
                scale: idx === currentIndex ? 1 : 1.05,
                zIndex: idx === currentIndex ? 10 : 0
              }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#082B5C]/90 via-transparent to-black/20" />
              
              {/* Bottom Caption */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
                <div>
                  {img.category && (
                    <span className="text-[10px] font-mono font-bold tracking-widest text-[#14B8A6] uppercase bg-black/50 px-2.5 py-1">
                      {img.category}
                    </span>
                  )}
                  <h4 className="text-xl sm:text-2xl font-black font-['Outfit',sans-serif] uppercase tracking-tight mt-1.5">
                    {img.title}
                  </h4>
                  {img.caption && (
                    <p className="text-xs sm:text-sm text-slate-200 max-w-xl font-normal mt-0.5">
                      {img.caption}
                    </p>
                  )}
                </div>
                <div className="text-[10px] font-mono text-slate-300">
                  IMAGE ARCHIVE 2022–2025
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Thumbnail Strip */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-thin"
        >
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative shrink-0 w-24 sm:w-32 h-16 sm:h-20 overflow-hidden border-2 transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'border-[#0D9488] ring-2 ring-[#0D9488]/30 scale-105'
                  : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-1 left-1 px-1 bg-black/70 text-[9px] font-mono text-white font-bold">
                0{idx + 1}
              </div>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// 5. PROGRESSIVE COUNTER (Animated number on scroll)
// ---------------------------------------------------------------------------
interface ProgressiveCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const ProgressiveCounter: React.FC<ProgressiveCounterProps> = ({
  target,
  prefix = '',
  suffix = '',
  duration = 1.6,
  className = ''
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px 0px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

// ---------------------------------------------------------------------------
// 6. SCROLL REVEAL (Restrained editorial fade & slide)
// ---------------------------------------------------------------------------
interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  distance?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  distance = 24,
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' });

  const getInitial = () => {
    switch (direction) {
      case 'up': return { opacity: 0, y: distance };
      case 'down': return { opacity: 0, y: -distance };
      case 'left': return { opacity: 0, x: distance };
      case 'right': return { opacity: 0, x: -distance };
      case 'none': default: return { opacity: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : getInitial()}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ---------------------------------------------------------------------------
// 7. PROGRESSIVE SVG CONNECTION DRAW LINE
// ---------------------------------------------------------------------------
export const ScrollDrawLine: React.FC<{ className?: string; orientation?: 'horizontal' | 'vertical' }> = ({
  className = '',
  orientation = 'horizontal'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'end 30%']
  });

  return (
    <div ref={ref} className={`overflow-hidden bg-slate-200 ${className}`}>
      {orientation === 'horizontal' ? (
        <motion.div
          className="h-full w-full bg-[#0D9488] origin-left"
          style={{ scaleX: scrollYProgress }}
        />
      ) : (
        <motion.div
          className="h-full w-full bg-[#0D9488] origin-top"
          style={{ scaleY: scrollYProgress }}
        />
      )}
    </div>
  );
};
