import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative overflow-hidden inline-flex items-center justify-center gap-2 whitespace-nowrap text-xs sm:text-sm font-bold uppercase tracking-wider font-oswald cursor-pointer transition-all duration-300 select-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border shadow-xs",
  {
    variants: {
      variant: {
        default:
          "bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-white border-stone-300 dark:border-neutral-700 hover:text-white dark:hover:text-white",
        primary:
          "bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-white border-stone-300 dark:border-neutral-700 hover:text-white dark:hover:text-white",
        destructive:
          "bg-destructive text-destructive-foreground border-destructive hover:text-white",
        outline:
          "bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-white border-stone-300 dark:border-neutral-700 hover:text-white dark:hover:text-white",
        secondary:
          "bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-white border-stone-300 dark:border-neutral-700 hover:text-white",
        ghost:
          "bg-transparent text-foreground border-transparent hover:bg-accent hover:text-accent-foreground shadow-none rounded-md",
        link:
          "bg-transparent text-primary border-transparent underline-offset-4 hover:underline shadow-none rounded-none p-0 h-auto",
      },
      size: {
        default: "px-7 py-3 text-xs sm:text-sm",
        sm: "px-5 py-2 text-xs",
        lg: "px-9 py-4 text-sm sm:text-base",
        icon: "h-9 w-9 p-0 flex items-center justify-center rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  waveColor?: string;
  disableWave?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      waveColor = "#9E2339",
      disableWave = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const hasWave =
      !asChild &&
      !disableWave &&
      variant !== "ghost" &&
      variant !== "link";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {hasWave && (
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
        )}

        <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors duration-300">
          {children}
        </span>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
