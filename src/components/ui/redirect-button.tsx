import React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface RedirectButtonProps {
  href?: string;
  to?: string;
  onClick?: () => void;
  label?: React.ReactNode;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  target?: string;
  rel?: string;
  className?: string;
  waveColor?: string;
  disabled?: boolean;
}

export const RedirectButton: React.FC<RedirectButtonProps> = ({
  href,
  to,
  onClick,
  label,
  children,
  icon,
  target,
  rel,
  className = "",
  waveColor = "#9E2339",
  disabled = false,
}) => {
  const content = children || label;
  const isExternal = href && (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:"));
  const defaultTarget = target || (isExternal ? "_blank" : undefined);
  const defaultRel = rel || (defaultTarget === "_blank" ? "noopener noreferrer" : undefined);

  const baseStyles = cn(
    "group relative inline-flex items-center justify-center overflow-hidden",
    "rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs",
    "border border-stone-300 dark:border-neutral-700",
    "bg-stone-200/90 dark:bg-neutral-800",
    "px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider font-oswald",
    "text-foreground dark:text-white hover:text-white dark:hover:text-white",
    "transition-all duration-300 shadow-2xs cursor-pointer select-none shrink-0",
    disabled && "opacity-50 pointer-events-none cursor-not-allowed",
    className
  );

  const waveOverlay = (
    <span className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
      <span
        className="absolute inset-x-0 top-0 h-[140%] translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-out"
        style={{ backgroundColor: waveColor }}
      >
        {/* Ocean Wave Crest SVG (Primary) */}
        <span className="absolute -top-3.5 left-0 w-[200%] h-4 pointer-events-none block">
          <svg
            className="w-full h-full animate-ocean-wave"
            style={{ fill: waveColor }}
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,-20 1200,40 L1200,120 L0,120 Z" />
          </svg>
        </span>
        {/* Secondary Depth Layer Wave */}
        <span className="absolute -top-4 left-0 w-[200%] h-5 opacity-40 pointer-events-none block">
          <svg
            className="w-full h-full animate-ocean-wave-reverse"
            style={{ fill: waveColor }}
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,30 C200,-30 400,90 600,10 C800,-40 1000,70 1200,20 L1200,120 L0,120 Z" />
          </svg>
        </span>
      </span>
    </span>
  );

  const innerContent = (
    <>
      {waveOverlay}
      <span className="relative z-10 flex items-center justify-center gap-1.5 group-hover:text-white transition-colors duration-300">
        <span>{content}</span>
        {icon !== undefined ? (
          icon
        ) : (
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseStyles} onClick={onClick}>
        {innerContent}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={defaultTarget}
        rel={defaultRel}
        className={baseStyles}
        onClick={onClick}
      >
        {innerContent}
      </a>
    );
  }

  return (
    <button type="button" className={baseStyles} onClick={onClick} disabled={disabled}>
      {innerContent}
    </button>
  );
};
