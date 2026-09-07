import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useHeader } from '@/context/HeaderContext';

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
  const { isHeaderHidden, isScrolled } = useHeader();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentTabLabel = tabs.find(t => t.id === activeTab)?.label || 'Overview';

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const shouldShiftDown = !isHeaderHidden && isScrolled;
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const shiftAmount = isMobile ? 57 : 65;

  return (
    <motion.div
      initial={false}
      animate={{ y: shouldShiftDown ? shiftAmount : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-40 w-full bg-background/80 backdrop-blur-xl border-b border-foreground/10 shadow-sm ${className}`}
    >
      <div className="relative max-w-[1440px] mx-auto px-3.5 sm:px-6 md:px-8 xl:px-12 py-2 min-h-[44px] flex flex-col md:flex-row md:items-center justify-between gap-1.5 md:gap-0">
        
        {/* Department Title Header */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div 
            onClick={onTitleClick}
            className={`${
              title.length <= 25 
                ? 'text-xs sm:text-base md:text-lg xl:text-xl font-black tracking-tight' 
                : 'text-[11px] sm:text-sm xl:text-base font-bold tracking-tight'
            } uppercase text-primary font-oswald md:mr-4 xl:mr-8 shrink-0 select-none transition-all truncate max-w-[90%] md:max-w-none ${
              onTitleClick ? 'cursor-pointer hover:opacity-80' : ''
            }`}
          >
            {title}
          </div>
        </div>

        {/* MOBILE VIEW: Modern Custom Dropdown Menu (< md) */}
        <div ref={dropdownRef} className="block md:hidden w-full relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between gap-2 bg-card dark:bg-[#1C1E1D] text-primary border border-primary/50 hover:border-primary px-3 py-1.5 rounded-[4px] shadow-2xs cursor-pointer text-xs font-bold font-oswald uppercase tracking-wider transition-all"
          >
            <div className="flex items-center gap-1.5 truncate">
              <span className="text-muted-foreground text-[10px] font-sans font-semibold uppercase tracking-wider shrink-0">Section:</span>
              <span className="text-primary font-black truncate">{currentTabLabel}</span>
            </div>
            <ChevronDown className={`w-4 h-4 text-primary shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
          </button>

          {/* Animated Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-card dark:bg-[#1E201F] border border-primary/30 shadow-2xl rounded-[4px] py-1 z-50 overflow-hidden max-h-[300px] overflow-y-auto backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150 divide-y divide-border/40">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      onSelectTab(tab.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 text-left text-xs font-bold font-oswald uppercase tracking-wider transition-colors cursor-pointer ${
                      isActive
                        ? "bg-primary text-primary-foreground font-black"
                        : "text-foreground hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    <span>{tab.label}</span>
                    {isActive && <Check className="w-3.5 h-3.5 shrink-0" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* DESKTOP VIEW: Horizontal Tabs (>= md) */}
        <div className="hidden md:flex md:flex-1 relative md:ml-4 lg:ml-6 overflow-hidden items-center">
          <ul className="flex items-center justify-end gap-3 lg:gap-4 xl:gap-6 w-full overflow-x-auto scrollbar-none no-scrollbar py-1">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <li
                  key={tab.id}
                  onClick={() => onSelectTab(tab.id)}
                  className={`relative py-1.5 whitespace-nowrap text-[12px] xl:text-[13px] font-bold uppercase tracking-[0.04em] font-oswald cursor-pointer transition-colors duration-200 select-none shrink-0 ${
                    isActive
                      ? 'text-primary font-black'
                      : 'text-foreground/80 hover:text-primary'
                  }`}
                >
                  {tab.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[2.5px] bg-primary transition-all duration-300 ${
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
