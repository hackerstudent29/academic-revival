import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface ScrollProgressBarProps {
  activeSectionTitle?: string;
  activeSectionIndex?: number;
  totalSections?: number;
}

export const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({
  activeSectionTitle = 'Placement Overview',
  activeSectionIndex = 1,
  totalSections = 6
}) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001
  });

  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setScrollPercentage(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* Top minimal hair progress line */}
      <div className="w-full h-[3px] bg-slate-200/50 backdrop-blur-xs">
        <motion.div
          className="h-full bg-gradient-to-r from-[#082B5C] via-[#0D9488] to-[#0052CC] origin-left"
          style={{ scaleX }}
        />
      </div>

      {/* Floating subtle position telemetry indicator on right */}
      <div className="hidden lg:flex items-center justify-between px-6 py-1.5 text-[10px] font-mono uppercase tracking-widest text-slate-500 bg-white/90 border-b border-slate-200 shadow-2xs backdrop-blur-md opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] animate-pulse" />
          <span className="font-bold text-[#082B5C]">
            SECTION 0{activeSectionIndex} / 0{totalSections}:
          </span>
          <span>{activeSectionTitle}</span>
        </div>
        <div className="flex items-center gap-3">
          <span>PAGE SCROLL PROGRESS</span>
          <span className="font-bold text-[#082B5C] min-w-[28px] text-right">
            {scrollPercentage}%
          </span>
        </div>
      </div>
    </div>
  );
};
