import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export interface SubNavTab {
  id: string;
  label: string;
}

export interface SecondarySubNavProps {
  title: string;
  tabs: SubNavTab[];
  activeTab: string;
  onSelectTab: (tabId: string) => void;
  onTitleClick?: () => void;
  className?: string;
}

export const SecondarySubNav: React.FC<SecondarySubNavProps> = ({
  title,
  tabs,
  activeTab,
  onSelectTab,
  onTitleClick,
  className = "",
}) => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 160) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.div
      animate={{ y: hidden ? -65 : 0 }}
      transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
      className={`sticky top-0 lg:top-[65px] z-40 w-full ${className}`}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-xl border-b border-foreground/10 pointer-events-none -z-10" />
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 xl:px-12 py-2 min-h-[48px] flex items-center justify-between">
        
        {/* Left Title */}
        <div 
          onClick={onTitleClick}
          className={`${
            title.length <= 25 
              ? 'text-sm sm:text-base md:text-lg xl:text-xl font-black tracking-tight' 
              : 'text-xs sm:text-sm xl:text-base font-bold tracking-tight'
          } uppercase text-primary font-oswald mr-4 xl:mr-8 shrink-0 select-none transition-all ${
            onTitleClick ? 'cursor-pointer hover:opacity-80' : ''
          }`}
        >
          {title}
        </div>

        {/* Right-Aligned Navigation Tabs */}
        <div className="flex-1 relative ml-4 lg:ml-6 overflow-hidden flex items-center">
          <ul className="flex items-center gap-4 lg:gap-5 xl:gap-6 w-full overflow-x-auto no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {tabs.map((tab, index) => {
              const isActive = activeTab === tab.id;
              return (
                <li
                  key={tab.id}
                  onClick={() => onSelectTab(tab.id)}
                  className={`relative py-2 whitespace-nowrap text-[11px] xl:text-[13px] font-bold uppercase tracking-[0.04em] font-oswald cursor-pointer transition-colors duration-200 select-none shrink-0 ${
                    index === 0 ? 'ml-auto' : ''
                  } ${
                    isActive
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {tab.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[2px] bg-primary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </li>
              );
            })}
          </ul>
        </div>

      </div>
    </motion.div>
  );
};
