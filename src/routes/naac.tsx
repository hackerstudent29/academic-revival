import { Outlet, createFileRoute, Link, useLocation } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useHeader } from "@/context/HeaderContext";

export const Route = createFileRoute("/naac")({
  component: NaacLayout,
});

function NaacSecondaryNav() {
  const { pathname } = useLocation();
  const { isHeaderHidden, isScrolled } = useHeader();
  
  const navItems = [
    { label: "Overview", path: "/naac" },
    { label: "Criteria 1–7", path: "/naac/criteria" },
    { label: "DVV Clarification", path: "/naac/dvv" },
    { label: "Extended Profile", path: "/naac/extended-profile" },
    { label: "Best Practices", path: "/naac/best-practices" },
    { label: "Institutional Distinctiveness", path: "/naac/distinctiveness" },
    { label: "Code of Conduct", path: "/naac/code-of-conduct" },
    { label: "IQAC", path: "/naac/iqac" },
  ];

  const shouldShiftDown = !isHeaderHidden && isScrolled;
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const shiftAmount = isMobile ? 57 : 65;

  return (
    <motion.div
      initial={false}
      animate={{ y: shouldShiftDown ? shiftAmount : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-xl border-b border-foreground/10 shadow-sm"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 h-14 flex items-center overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-6 md:gap-8 min-w-max">
          <Link to="/naac" className="font-oswald font-black text-primary tracking-wider uppercase text-sm md:text-base border-r-[3px] border-primary/20 pr-6 mr-2 transition-opacity hover:opacity-80">
            NAAC
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`text-sm md:text-[15px] font-sans font-medium whitespace-nowrap transition-colors hover:text-primary ${
                pathname === item.path ? "text-primary font-bold" : "text-foreground/70"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function NaacLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative z-10">
      <NaacSecondaryNav />
      <main className="flex-1 w-full">
        <Outlet />
      </main>
    </div>
  );
}
