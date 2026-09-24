import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronDown, Check, Users, GraduationCap, Sparkles, Share2 } from "lucide-react";
import { useHeader } from "@/context/HeaderContext";

export const communityNavItems = [
  { label: "Our Alumni", to: "/student-community/alumni", icon: Users, shortLabel: "Alumni" },
  { label: "Convocation", to: "/student-community/convocation", icon: GraduationCap, shortLabel: "Convocation" },
  { label: "Campus Happenings", to: "/student-community/campus-happenings", icon: Sparkles, shortLabel: "Happenings" },
  { label: "Social Media Directory", to: "/student-community/social-media", icon: Share2, shortLabel: "Social Media" },
];

export function StudentCommunitySubNav() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { isHeaderHidden, isScrolled } = useHeader();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentItem =
    communityNavItems.find((item) => item.to === currentPath) ||
    communityNavItems[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const shouldShiftDown = !isHeaderHidden && isScrolled;
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const shiftAmount = isMobile ? 57 : 65;

  return (
    <motion.nav
      initial={false}
      animate={{ y: shouldShiftDown ? shiftAmount : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40 w-full bg-background/95 dark:bg-[#121214]/95 backdrop-blur-md border-y border-border/60 shadow-xs transition-all"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12 py-2.5 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6">
        {/* Brand / Section Identifier */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center gap-3 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shrink-0" />
            <span className="text-xs sm:text-sm font-black font-oswald uppercase tracking-widest text-primary whitespace-nowrap">
              Student Community
            </span>
          </div>

          {/* Mobile Dropdown Control (< md) */}
          <div ref={dropdownRef} className="block md:hidden relative">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 px-3 py-1.5 rounded-md text-xs font-bold font-oswald uppercase tracking-wider transition-all"
            >
              <span className="truncate max-w-[140px]">{currentItem?.label ?? ""}</span>
              <ChevronDown className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-card border border-border shadow-2xl rounded-lg py-1.5 z-50 overflow-hidden divide-y divide-border/40">
                {communityNavItems.map((item) => {
                  const isActive = currentPath === item.to;
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className={`w-full flex items-center justify-between px-4 py-2.5 text-xs font-bold font-oswald uppercase tracking-wider transition-all ${
                        isActive
                          ? "bg-primary text-primary-foreground font-black"
                          : "text-foreground hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4 shrink-0" />
                        <span>{item.label}</span>
                      </div>
                      {isActive && <Check className="w-4 h-4 shrink-0" />}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Desktop Balanced Segmented Pill Bar (>= md) */}
        <div className="hidden md:flex items-center justify-end w-full md:w-auto">
          <div className="inline-flex items-center p-1 bg-muted/60 dark:bg-muted/30 border border-border/70 rounded-lg shadow-inner gap-1">
            {communityNavItems.map((item) => {
              const isActive = currentPath === item.to;
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`relative inline-flex items-center gap-2 px-3.5 py-1.5 text-xs lg:text-sm font-oswald font-bold uppercase tracking-wider transition-colors whitespace-nowrap rounded-md ${
                    isActive
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCommunityTab"
                      className="absolute inset-0 bg-primary rounded-md shadow-xs"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{item.label}</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
