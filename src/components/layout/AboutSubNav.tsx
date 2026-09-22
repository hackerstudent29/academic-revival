import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { useHeader } from "@/context/HeaderContext";

export const aboutNavItems = [
  { label: "An Overview", to: "/about/overview" },
  { label: "Vision & Mission", to: "/about/vision-mission" },
  { label: "Trust & History", to: "/about/trust" },
  { label: "Leadership Messages", to: "/about/leadership" },
  { label: "Governing Council", to: "/about/governing-council" },
  { label: "Group of Institutions", to: "/about/group-institutions" },
  { label: "Mandatory Disclosure", to: "/about/accreditations" },
];

export function AboutSubNav() {
  const location = useLocation();
  const currentPath = location.pathname;
  const { isHeaderHidden, isScrolled } = useHeader();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentItem = aboutNavItems.find((item) => item.to === currentPath) || aboutNavItems[0] || { label: "An Overview", to: "/about/overview" };

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
      className="sticky top-0 z-40 w-full bg-background/90 backdrop-blur-xl border-b border-border/80 shadow-2xs transition-colors"
    >
      <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 py-2 min-h-[44px] flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-0">
        {/* Department Title Header */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center shrink-0 md:mr-4 xl:mr-8 md:border-r md:border-border md:pr-6">
            <span className="text-sm sm:text-base md:text-lg xl:text-xl font-black font-oswald uppercase text-primary tracking-wider whitespace-nowrap">
              ABOUT MSAJCE
            </span>
          </div>

          {/* Mobile Selector (< md) */}
          <div ref={dropdownRef} className="block md:hidden relative">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 bg-foreground/5 hover:bg-foreground/10 text-primary border border-primary/40 px-3 py-1.5 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs text-xs font-bold font-oswald uppercase tracking-wider transition-all"
            >
              <span className="truncate max-w-[140px] sm:max-w-[200px]">{currentItem.label}</span>
              <ChevronDown className={`w-3.5 h-3.5 text-primary shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-1.5 w-56 bg-card border border-border shadow-xl rounded-sm py-1 z-50 overflow-hidden divide-y divide-border/60">
                {aboutNavItems.map((item) => {
                  const isActive = currentPath === item.to;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className={`w-full flex items-center justify-between px-3 py-2 text-left text-xs font-bold font-oswald uppercase tracking-wider transition-colors ${
                        isActive
                          ? "bg-primary text-primary-foreground font-black"
                          : "text-foreground hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <Check className="w-3.5 h-3.5 shrink-0" />}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Desktop Links (>= md) */}
        <div className="hidden md:flex md:flex-1 items-center justify-end overflow-x-auto no-scrollbar gap-1 sm:gap-2 lg:gap-3 shrink-0">
          {aboutNavItems.map((item) => {
            const isActive = currentPath === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative px-2.5 py-1.5 text-xs xl:text-sm font-oswald font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  isActive
                    ? "text-primary font-black"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2.5px] bg-primary transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}

