import { ReactNode } from "react";

interface StickySectionWrapperProps {
  children: ReactNode;
  heightClass?: string;
  className?: string;
}

export function StickySectionWrapper({ 
  children, 
  heightClass = "h-[150vh]",
  className = ""
}: StickySectionWrapperProps) {
  return (
    <div className={`relative w-full ${heightClass} ${className}`}>
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden flex flex-col justify-center bg-background shadow-2xl">
        {children}
      </div>
    </div>
  );
}
