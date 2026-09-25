import * as React from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onValueChange?: (value: string) => void;
  onClear?: () => void;
  containerClassName?: string;
}

/**
 * Standard MSAJCE SearchBar Component
 * Incorporates brand boxy asymmetrical geometry, theme tokens, clear action, and subtle focus ring.
 */
export const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      value,
      onValueChange,
      onClear,
      onChange,
      placeholder = "Search...",
      className,
      containerClassName,
      ...props
    },
    ref
  ) => {
    const handleClear = () => {
      if (onValueChange) {
        onValueChange("");
      }
      if (onClear) {
        onClear();
      }
    };

    return (
      <div
        className={cn(
          "relative flex items-center w-full transition-all duration-200 group",
          containerClassName
        )}
      >
        <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none shrink-0 transition-colors group-focus-within:text-primary" />
        <input
          ref={ref}
          type="text"
          value={value}
          onChange={(e) => {
            onChange?.(e);
            onValueChange?.(e.target.value);
          }}
          placeholder={placeholder}
          className={cn(
            "w-full pl-9 pr-8 py-2 text-xs sm:text-sm font-libre font-medium text-foreground",
            "bg-background dark:bg-[#18181B]",
            "border border-border/80 focus:border-primary",
            "rounded-tl-lg rounded-br-lg rounded-tr-xs rounded-bl-xs",
            "placeholder:text-muted-foreground/60 placeholder:font-normal",
            "focus:outline-none focus:ring-1 focus:ring-primary/25",
            "transition-all duration-150",
            className
          )}
          {...props}
        />
        {value && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded-xs text-muted-foreground hover:text-foreground hover:bg-foreground/[0.08] transition-colors cursor-pointer select-none"
            title="Clear search"
            aria-label="Clear search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    );
  }
);

SearchBar.displayName = "SearchBar";
