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
  action?: React.ReactNode;
  className?: string;
}

export const SecondarySubNav: React.FC<SecondarySubNavProps> = ({
  title,
  tabs,
  activeTab,
  onSelectTab,
  onTitleClick,
  action,
  className = "",
}) => {
  const { isHeaderHidden, setHeaderHidden, setHasSecondaryNav, setIsTabSwitching } = useHeader();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentTabLabel = tabs.find(t => t.id === activeTab)?.label || 'Overview';
  const switchTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Inform HeaderContext that a secondary navbar is mounted on this page
  useEffect(() => {
    setHasSecondaryNav(true);
    return () => {
      setHasSecondaryNav(false);
      setIsTabSwitching(false);
      if (switchTimerRef.current) {
        clearTimeout(switchTimerRef.current);
      }
    };
  }, [setHasSecondaryNav, setIsTabSwitching]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleTabClick = (tabId: string) => {
    if (switchTimerRef.current) clearTimeout(switchTimerRef.current);
    
    setIsTabSwitching(true);
    
    // Automatically hide header when going to a sub-tab, show when going to overview/first tab
    if (tabId === "overview" || tabId === tabs[0]?.id) {
      setHeaderHidden(false);
    } else {
      setHeaderHidden(true);
    }

    onSelectTab(tabId);

    switchTimerRef.current = setTimeout(() => {
      setIsTabSwitching(false);
    }, 650);
  };

  const handleTitleClickInternal = () => {
    if (switchTimerRef.current) clearTimeout(switchTimerRef.current);
    setIsTabSwitching(true);
    setHeaderHidden(false);
    
    if (onTitleClick) {
      onTitleClick();
    } else {
      onSelectTab(tabs[0]?.id || "overview");
    }

    switchTimerRef.current = setTimeout(() => {
      setIsTabSwitching(false);
    }, 650);
  };

  return (
    <div
      style={{
        transition: 'top 0.32s cubic-bezier(0.16, 1, 0.3, 1), transform 0.32s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      className={`sticky z-40 w-full bg-background/85 dark:bg-[#121214]/85 backdrop-blur-xl border-t border-b border-border/80 dark:border-white/10 shadow-xs ${
        !isHeaderHidden ? "top-[58px] md:top-[70px]" : "top-0 md:top-0"
      } ${className}`}
    >
      <div className="relative max-w-[1440px] mx-auto px-3.5 sm:px-6 md:px-8 xl:px-12 py-1.5 sm:py-2 min-h-[38px] md:min-h-[44px] flex items-center justify-between gap-3">
        
        {/* Department / Division Title Header */}
        <div 
          onClick={handleTitleClickInternal}
          className="text-xs sm:text-sm md:text-base lg:text-lg font-black font-oswald uppercase text-primary tracking-tight leading-none shrink-0 select-none transition-all truncate max-w-[55%] md:max-w-none cursor-pointer hover:opacity-85"
        >
          {title}
        </div>

        {/* MOBILE VIEW: Action + Compact Single-Row Custom Dropdown (< md) */}
        <div className="flex md:hidden items-center gap-2 shrink-0">
          {action}
          <div ref={dropdownRef} className="relative shrink-0">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1.5 bg-foreground/5 hover:bg-foreground/10 text-primary border border-primary/40 px-2.5 py-1 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs shadow-2xs cursor-pointer text-[11px] font-bold font-oswald uppercase tracking-wider transition-all"
            >
              <span className="truncate max-w-[130px] sm:max-w-[180px] font-black">{currentTabLabel}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-primary shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Animated Dropdown Menu */}
            {isOpen && (
              <div className="absolute top-full right-0 mt-1 w-64 bg-background dark:bg-[#18181B] border border-border dark:border-neutral-700 shadow-2xl rounded-tl-lg rounded-br-lg rounded-tr-xs rounded-bl-xs py-1 z-50 overflow-hidden max-h-[300px] overflow-y-auto backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150 divide-y divide-border/40">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => {
                        handleTabClick(tab.id);
                        setIsOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 text-left text-xs font-bold font-oswald uppercase tracking-wider transition-colors cursor-pointer ${
                        isActive
                          ? "bg-primary text-white font-black"
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
        </div>

        {/* DESKTOP VIEW: Horizontal Tabs (>= md) */}
        <div className="hidden md:flex md:flex-1 relative md:ml-4 lg:ml-6 items-center justify-end gap-3 lg:gap-4">
          <ul className="flex items-center justify-end gap-3 lg:gap-5 xl:gap-7 overflow-x-auto scrollbar-none no-scrollbar">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <li
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`relative py-1 whitespace-nowrap text-xs sm:text-sm xl:text-[13px] font-bold uppercase tracking-[0.05em] font-oswald cursor-pointer transition-colors duration-200 select-none shrink-0 ${
                    isActive
                      ? 'text-primary font-black'
                      : 'text-foreground/80 hover:text-primary'
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <motion.span
                      layoutId={`activeSubNav_${title.replace(/\s+/g, '_')}`}
                      className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
          {action && (
            <div className="shrink-0 pl-2 lg:pl-3 border-l border-border/60">
              {action}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
