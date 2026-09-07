import { Link, useLocation } from "@tanstack/react-router";

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

  return (
    <nav className="sticky top-[64px] z-40 w-full bg-background/95 backdrop-blur-md border-b border-border shadow-xs transition-colors">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-12 flex items-center justify-between overflow-x-auto no-scrollbar py-2 md:py-3">
        <div className="flex items-center shrink-0 mr-4 border-r border-border pr-4">
          <span className="text-sm sm:text-base md:text-lg xl:text-xl font-black font-oswald uppercase text-primary tracking-wider whitespace-nowrap">
            ABOUT MSAJCE
          </span>
        </div>
        <div className="flex items-center gap-1 sm:gap-2 md:gap-4 shrink-0">
          {aboutNavItems.map((item) => {
            const isActive = currentPath === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`px-3 py-1.5 text-xs sm:text-sm font-oswald font-bold uppercase tracking-wider transition-all whitespace-nowrap border-b-2 ${
                  isActive
                    ? "border-primary text-primary bg-primary/5"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
