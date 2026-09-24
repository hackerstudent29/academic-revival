import { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Logo } from "@/components/shared/Logo";
import { MoreHorizontal, X, ChevronDown } from "lucide-react";
import { useHeader } from "@/context/HeaderContext";

type RoutePath = any;

type Col = { title: string; links: { label: string; to?: RoutePath; href?: string; hash?: string; search?: any }[] };
type NavItem = { id: string; label: string; to: RoutePath; cols?: Col[] };

const APPLE_EASE = [0.22, 1, 0.36, 1] as const;

const nav: NavItem[] = [
  {
    id: "about",
    label: "The Institution",
    to: "/about/overview",
    cols: [
      {
        title: "About MSAJCE",
        links: [
          { label: "Institution Overview", to: "/about/overview" },
          { label: "Vision & Mission", to: "/about/vision-mission" },
          { label: "Leadership Message", to: "/about/leadership" },
          { label: "Governing Council", to: "/about/governing-council" },
          { label: "The Trust", to: "/about/trust" },
          { label: "Group of Institutions", to: "/about/group-institutions" },
          { label: "Institutional Policies", to: "/about/policies" },
        ],
      },
      {
        title: "Welfare committees",
        links: [
          { label: "Committees & Cells", to: "/about/committees" },
          { label: "Grievance Cell", to: "/about/committees" },
          { label: "Statutory Committees", to: "/about/governing-council" },
          { label: "Anti-Ragging Committee", to: "/about/committees" },
          { label: "Women's Empowerment Cell", to: "/about/committees" },
        ],
      },
      {
        title: "Accreditation & Rankings",
        links: [
          { label: "NAAC", to: "/naac" },
          { label: "IQAC", to: "/naac/iqac" },
          { label: "NIRF", to: "/nirf" },
          { label: "ARIIA", to: "/ariia" },
        ],
      },
    ],
  },
  {
    id: "admission",
    label: "Admissions",
    to: "/admissions",
    cols: [
      {
        title: "Explore Admissions",
        links: [
          { label: "Programmes Offered", to: "/programmes-offered" },
          { label: "B.E. / B.Tech Admissions", to: "/admissions", search: { level: "Undergraduate" } },
          { label: "M.E. Admissions", to: "/admissions", search: { level: "Postgraduate" } },
          { label: "Admission Procedure", to: "/admissions/procedure" },
        ],
      },
      {
        title: "Eligibility & Scholarships",
        links: [
          { label: "Admission Eligibility", to: "/admissions/eligibility" },
          { label: "Scholarship Programmes", to: "/admissions/scholarships" },
        ],
      },
      {
        title: "Apply Online",
        links: [
          { label: "Online Application", to: "/admissions", hash: "apply" },
          { label: "Online Fee Payment", to: "/admissions", hash: "apply" },
          { label: "Enquire Now", to: "/contact" },
        ],
      },
    ],
  },
  {
    id: "academics",
    label: "Education",
    to: "/academics",
    cols: [
      {
        title: "Departments",
        links: [
          { label: "Undergraduate Departments", to: "/programmes", search: { level: "Undergraduate" } },
          { label: "Postgraduate Departments", to: "/programmes", search: { level: "Postgraduate" } },
          { label: "Doctoral Studies", to: "/programmes", search: { level: "Research (Ph.D)" } },
          { label: "All Departments", to: "/programmes" },
        ],
      },
      {
        title: "Academic Resources",
        links: [
          { label: "Academic Calendar", to: "/curriculum" },
          { label: "Curriculum & Syllabus", to: "/curriculum" },
        ],
      },
      {
        title: "Research & Innovation",
        links: [
          { label: "Research", to: "/research", search: { tab: "overview" } },
          { label: "Publications", to: "/research", search: { tab: "publications" } },
          { label: "Patents", to: "/research", search: { tab: "patents" } },
          { label: "Innovation Council (IIC)", to: "/research", search: { tab: "iic" } },
          { label: "Startup Ecosystem", to: "/research", search: { tab: "startup-ecosystem" } },
        ],
      },
      {
        title: "Centres of Excellence",
        links: [
          { label: "Overview", to: "/academics" },
          { label: "Explore Centres", to: "/academics" },
        ],
      },
    ],
  },
  { id: "placement", label: "Placements", to: "/placements" },
  {
    id: "life",
    label: "Campus Life",
    to: "/campus-life",
    cols: [
      {
        title: "Campus Facilities",
        links: [
          { label: "Central Library", to: "/library" },
          { label: "Hostel", to: "/hostel" },
          { label: "Transport", to: "/transport" },
          { label: "Sports & Gym", to: "/sports" },
        ],
      },
      {
        title: "Student Life",
        links: [
          { label: "Student Hub", to: "/campus-life", hash: "facilities" },
          { label: "Clubs & Societies", to: "/campus-life", hash: "facilities" },
          { label: "Professional Societies", to: "/campus-life", hash: "tech-centres" },
          { label: "Our TEDx Chapter", to: "/campus-life" },
        ],
      },
      {
        title: "Social & Community",
        links: [
          { label: "National Service Scheme (NSS)", to: "/campus-life", hash: "facilities" },
          { label: "Youth Red Cross (YRC)", to: "/campus-life", hash: "facilities" },
          { label: "Unnat Bharat Abhiyan (UBA)", to: "/campus-life", hash: "facilities" },
          { label: "EBSB Initiative", to: "/campus-life" },
        ],
      },
      {
        title: "Student Community",
        links: [
          { label: "Our Alumni", to: "/student-community/alumni" },
          { label: "Convocation", to: "/student-community/convocation" },
          { label: "Campus Happenings", to: "/student-community/campus-happenings" },
          { label: "Social Media Directory", to: "/student-community/social-media" },
        ],
      },
    ],
  },
  { id: "incubation", label: "Incubation", to: "/incubation" },
  {
    id: "coe",
    label: "Examinations",
    to: "/academics",
    cols: [
      {
        title: "Examination",
        links: [
          { label: "Exam Schedules", to: "/academics", hash: "examinations" },
          { label: "IAT Timetable", to: "/academics", hash: "examinations" },
          { label: "ESE Timetable", to: "/academics", hash: "examinations" },
          { label: "Hall Tickets", to: "/academics", hash: "examinations" },
          { label: "Arrear Examinations", to: "/academics", hash: "examinations" },
        ],
      },
      {
        title: "Results",
        links: [
          { label: "Student Results Login", href: "https://results.msajce-edu.in" },
          { label: "Academic Toppers", to: "/academics", hash: "examinations" },
        ],
      },
    ],
  },
];

function PaneLink({ link, onClick }: { link: Col["links"][number]; onClick: () => void }) {
  const cls =
    "inline-block text-[15px] font-bold leading-tight text-foreground transition-colors duration-200 hover:text-primary";
  if (link.href) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" onClick={onClick} className={cls}>
        {link.label}
      </a>
    );
  }
  return (
    <Link to={link.to!} {...(link.hash ? { hash: link.hash } : {})} {...(link.search ? { search: link.search } : {})} onClick={onClick} className={cls}>
      {link.label}
    </Link>
  );
}

const moreMenuData = [
  {
    title: "Discover MSAJCE",
    links: [
      { label: "About the Institution", to: "/about" as RoutePath },
      { label: "Campus Life & Facilities", to: "/campus-life" as RoutePath },
      { label: "Our Heritage & Trust", to: "/about" as RoutePath }
    ]
  },
  {
    title: "Academics & Admissions",
    links: [
      { label: "Education & Programs", to: "/academics" as RoutePath },
      { label: "Admissions & Applications", to: "/admissions" as RoutePath },
      { label: "Placements & Careers", to: "/placements" as RoutePath },
      { label: "Examinations & Results", to: "/academics" as RoutePath }
    ]
  },
  {
    title: "Quick Links",
    links: [
      { label: "Alumni Network", to: "/campus-life" as RoutePath },
      { label: "Contact & Location", to: "/contact" as RoutePath },
      { label: "Faculty Login", href: "#" },
      { label: "Student Portal", href: "#" }
    ]
  }
];

export function SiteHeader() {
  const { isHeaderHidden, setHeaderHidden, setIsScrolled: setHeaderScrolled, hasSecondaryNav, isTabSwitching, setIsTabSwitching } = useHeader();
  const [active, setActive] = useState<string | null>(null);
  const [moreOpen, setMoreOpen] = useState(false);
  const [activePanel, setActivePanel] = useState<string>("main");
  const [isScrolled, setIsScrolled] = useState(false);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const headerRevealedTimeRef = useRef(0);

  const handleMouseEnterItem = (id: string) => {
    if (isHeaderHidden || isTabSwitching) return;

    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    const item = nav.find((n) => n.id === id);
    if (item && item.cols) {
      setActive(id);
    } else {
      setActive(null);
    }
  };

  const handleMouseLeaveNav = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
    leaveTimeoutRef.current = setTimeout(() => {
      setActive(null);
    }, 100);
  };

  // Close dropdown whenever header is hidden & record reveal timestamp
  useEffect(() => {
    if (isHeaderHidden) {
      setActive(null);
    } else {
      headerRevealedTimeRef.current = Date.now();
    }
  }, [isHeaderHidden]);

  const { scrollY } = useScroll();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const lastScrollY = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrolled = latest > 60;
    if (scrolled !== isScrolled) {
      setIsScrolled(scrolled);
      setHeaderScrolled(scrolled);
    }
    
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const minScroll = isMobile ? 35 : 50;
    const delta = isMobile ? 4 : 8;

    // While switching tabs via secondary nav, keep main header hidden during programmatic scroll
    if (isTabSwitching) {
      if (Math.abs(latest - lastScrollY.current) > 30) {
        setIsTabSwitching(false);
      } else {
        setHeaderHidden(true);
        lastScrollY.current = latest;
        return;
      }
    }

    // Near the top of the page, always show main header
    if (latest < minScroll) {
      setHeaderHidden(false);
      lastScrollY.current = latest;
      return;
    }

    // Scroll Down -> Hide Header
    if (latest > lastScrollY.current + delta) {
      if (!moreOpen && !active) {
        setHeaderHidden(true);
      }
      lastScrollY.current = latest;
    } 
    // Scroll Up -> Automatically reveal Header!
    else if (latest < lastScrollY.current - delta) {
      setHeaderHidden(false);
      lastScrollY.current = latest;
    }
  });

  const activeItem = nav.find((n) => n.id === active && n.cols);

  useEffect(() => {
    const cls = "dropdown-open";
    if (activeItem || moreOpen) document.body.classList.add(cls);
    else document.body.classList.remove(cls);
    return () => document.body.classList.remove(cls);
  }, [activeItem, moreOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    if (!active) return;
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("header")) {
        setActive(null);
      }
    };
    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, [active]);

  // Lock body scroll while the mobile sidebar is open.
  useEffect(() => {
    if (!moreOpen) return;

    const { style } = document.body;
    const prevOverflow = style.overflow;
    const prevOverscroll = style.overscrollBehavior;

    style.overflow = "hidden";
    style.overscrollBehavior = "none";

    return () => {
      style.overflow = prevOverflow;
      style.overscrollBehavior = prevOverscroll;
    };
  }, [moreOpen]);

  const closeAll = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setActive(null);
    setActivePanel("main");
    setMoreOpen(false);
  };

  return (
    <>
      <motion.header
        variants={{
          visible: { 
            y: "0%", 
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 380,
              damping: 30,
              mass: 0.8
            }
          },
          hidden: { 
            y: "-100%", 
            opacity: 0,
            transition: {
              duration: 0.25,
              ease: [0.32, 0, 0.67, 0]
            }
          }
        }}
        animate={isHeaderHidden ? "hidden" : "visible"}
        className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
          isHeaderHidden ? "pointer-events-none" : ""
        } ${
          active || moreOpen || isScrolled 
            ? "border-border/80 dark:border-white/10 bg-background/80 dark:bg-[#121214]/80 backdrop-blur-xl shadow-xs" 
            : "border-border/80 dark:border-white/10 bg-background/80 dark:bg-[#121214]/80 backdrop-blur-xl"
        }`}
        onMouseLeave={handleMouseLeaveNav}
        onMouseEnter={() => {
          if (leaveTimeoutRef.current) {
            clearTimeout(leaveTimeoutRef.current);
            leaveTimeoutRef.current = null;
          }
        }}
      >
        <div className="mx-auto flex max-w-[1440px] h-[58px] md:h-[70px] items-center justify-between gap-4 lg:gap-6 px-4 md:px-8 xl:px-12">
          <div className="flex-1 lg:flex-none flex items-center min-w-[160px] sm:min-w-[200px] md:min-w-[240px] lg:min-w-[280px]">
            <Link to="/" className="flex items-center w-full" onClick={closeAll}>
              <img
                src="/logos/msajce-header-combined-hd.png?v=2"
                alt="MSAJCE Logo"
                className="h-9 sm:h-10 md:h-11 lg:h-12 w-auto max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px] object-contain origin-left"
              />
            </Link>
          </div>

          <nav className="hidden items-center gap-2 lg:gap-2.5 xl:gap-5 2xl:gap-7 lg:flex" aria-label="Main navigation">
            {nav.map((item) =>
              item.cols ? (
                <button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => handleMouseEnterItem(item.id)}
                  onClick={() => setActive((c) => (c === item.id ? null : item.id))}
                  aria-expanded={active === item.id}
                  className={`relative py-2 whitespace-nowrap text-[11px] xl:text-[13px] font-bold uppercase tracking-[0.03em] xl:tracking-[0.04em] font-oswald transition-colors duration-200 ${
                    active === item.id ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[2px] bg-primary transition-all duration-300 ${
                      active === item.id ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              ) : (
                <Link
                  key={item.id}
                  to={item.to}
                  onMouseEnter={() => setActive(null)}
                  className="relative py-2 whitespace-nowrap text-[11px] xl:text-[13px] font-bold uppercase tracking-[0.03em] xl:tracking-[0.04em] font-oswald text-foreground transition-colors duration-200 hover:text-primary"
                  activeProps={{ className: "text-primary font-bold" }}
                >
                  {item.label}
                  <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/admissions"
              search={{} as any}
              className="group relative hidden overflow-hidden whitespace-nowrap sm:inline-flex lg:hidden xl:inline-flex items-center justify-center border border-primary px-4 xl:px-5 py-2 xl:py-2.5 text-[11px] xl:text-[13px] font-bold uppercase tracking-wide text-primary transition-colors hover:text-primary-foreground after:absolute after:inset-0 after:top-full after:bg-primary after:transition-all after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:top-0 rounded-xs shadow-xs"
              onClick={closeAll}
            >
              <span className="relative z-10 font-oswald tracking-wider">Apply Now &raquo;</span>
            </Link>
            <button
              type="button"
              aria-label={moreOpen ? "Close menu" : "Open menu"}
              onClick={() => {
                if (!moreOpen) setActivePanel("main");
                setMoreOpen(!moreOpen);
                setActive(null);
              }}
              className="group relative h-10 w-10 flex flex-col items-center justify-center gap-[5px] rounded-none border border-foreground/15 bg-transparent transition-colors hover:text-background after:absolute after:inset-0 after:top-full after:bg-foreground after:transition-all after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:top-0"
            >
              <span className="relative z-10 flex flex-col items-center justify-center gap-[5px]">
                <span className={`block h-[1.5px] w-4 bg-foreground transition-all duration-300 group-hover:bg-background ${moreOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
                <span className={`block h-[1.5px] w-4 bg-foreground transition-all duration-200 group-hover:bg-background ${moreOpen ? "opacity-0" : ""}`} />
                <span className={`block h-[1.5px] w-4 bg-foreground transition-all duration-300 group-hover:bg-background ${moreOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>

        {/* Apple-style dropdown menu */}
        <div 
          className="absolute left-0 top-full hidden w-full lg:block z-20"
          onMouseEnter={() => {
            if (leaveTimeoutRef.current) {
              clearTimeout(leaveTimeoutRef.current);
              leaveTimeoutRef.current = null;
            }
          }}
          onMouseLeave={handleMouseLeaveNav}
        >
          <AnimatePresence>
            {activeItem && (
              <motion.div
                key="pane"
                initial={{ opacity: 0, y: -12, scaleY: 0.96 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{ opacity: 0, y: -8, scaleY: 0.98 }}
                transition={{ duration: 0.24, ease: APPLE_EASE }}
                style={{ transformOrigin: "top center" }}
                className="msajce-dropdown-glass border-b border-black/10 dark:border-white/10 w-full shadow-2xl"
              >
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2, ease: APPLE_EASE }}
                  className="mx-auto grid max-w-[1440px] grid-cols-[0.8fr_2.2fr] xl:grid-cols-[0.5fr_2.5fr] gap-12 px-12 py-10"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.22, delay: 0.03, ease: APPLE_EASE }}
                  >
                    <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Explore</p>
                    <Link to={activeItem.to} onClick={closeAll} className="text-3xl font-black leading-[0.95] text-primary transition-colors hover:text-primary/80">
                      {activeItem.label}
                    </Link>
                  </motion.div>
                  <div className={`grid gap-x-10 gap-y-12 ${activeItem.cols!.length === 1 ? "grid-cols-1" :
                      activeItem.cols!.length === 2 ? "grid-cols-2" :
                        activeItem.cols!.length === 3 ? "grid-cols-3" :
                          activeItem.cols!.length === 4 ? "grid-cols-2 xl:grid-cols-4" :
                            "grid-cols-2 lg:grid-cols-3"
                    }`}>
                    {activeItem.cols!.map((col, idx) => (
                      <motion.div
                        key={col.title}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.24, delay: 0.04 + idx * 0.03, ease: APPLE_EASE }}
                      >
                        <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-primary">{col.title}</h3>
                        <ul className="space-y-3">
                          {col.links.map((link) => (
                            <li key={link.label}>
                              <PaneLink link={link} onClick={closeAll} />
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Feather-light GPU-accelerated Apple-style page backdrop blur overlay */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            key="dropdown-backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24, ease: APPLE_EASE }}
            onClick={() => setActive(null)}
            className="fixed inset-0 top-[58px] md:top-[70px] z-[48] bg-black/25 dark:bg-black/50 backdrop-blur-md cursor-pointer"
            style={{ willChange: "opacity" }}
          />
        )}
      </AnimatePresence>

      {/* Sidebar unified menu overlay */}
      <AnimatePresence>
        {moreOpen && (
          <motion.div
            key="sidebar-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setMoreOpen(false)}
            className="fixed inset-0 top-0 z-[40] bg-black/40 touch-none"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {moreOpen && (
          <motion.div
            key="sidebar-panel"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: APPLE_EASE }}
            style={{ touchAction: "pan-y", WebkitOverflowScrolling: "touch" }}
            data-lenis-prevent="true"
            className="fixed right-0 top-0 z-[45] block w-full lg:max-w-[360px] h-[100dvh] pt-[100px] lg:pt-[80px] pb-12 bg-background/80 backdrop-blur-3xl px-6 md:px-12 lg:px-8 overflow-y-auto overflow-x-hidden overscroll-contain lg:border-l border-foreground/10 shadow-2xl scrollbar-none"
          >
            <div className="relative w-full min-h-full">
              <AnimatePresence mode="wait">
                {activePanel === "main" ? (
                  <motion.div
                    key="main"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="w-full"
                  >
                    {/* Main Navigation Links */}
                    <div className="mb-8 font-oswald">
                      {nav.map((item) => (
                        <div key={item.id} className="border-b border-foreground/10 last:border-b-0">
                          {item.cols ? (
                            <button
                              type="button"
                              onClick={() => setActivePanel(item.id)}
                              className="flex w-full items-center justify-between py-4 text-[15px] font-bold uppercase tracking-widest text-foreground/80 hover:text-primary font-oswald"
                            >
                              {item.label}
                              <span className="text-xl leading-none font-sans">›</span>
                            </button>
                          ) : (
                            <Link to={item.to} onClick={closeAll} className="block py-4 text-[15px] font-bold uppercase tracking-widest text-foreground/80 hover:text-primary font-oswald">
                              {item.label}
                            </Link>
                          )}
                        </div>
                      ))}
                      <Link
                        to="/admissions"
                        search={{} as any}
                        className="group relative my-5 inline-flex w-full items-center justify-center overflow-hidden rounded-none bg-primary px-5 py-3 text-[13px] font-bold text-primary-foreground shadow transition-colors hover:text-background sm:hidden font-oswald uppercase tracking-wider after:absolute after:inset-0 after:top-full after:bg-foreground after:transition-all after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:top-0"
                        onClick={closeAll}
                      >
                        <span className="relative z-10">Apply 2026-27</span>
                      </Link>
                      <div className="flex items-center justify-between py-4 border-t border-foreground/10 mt-4">
                        <span className="text-[15px] font-bold uppercase tracking-widest text-foreground/80 font-oswald">Appearance</span>
                        <ThemeToggle />
                      </div>
                    </div>

                    <div className="w-full h-px bg-foreground/10 mb-8" />

                    {/* Explore Additional Links */}
                    <h2 className="mb-6 text-xl font-bold uppercase tracking-widest text-foreground/50 font-oswald">Explore MSAJCE</h2>
                    <div className="flex flex-col font-oswald">
                      {moreMenuData.map((section) => (
                        <div key={section.title} className="border-b border-foreground/10 last:border-b-0">
                          <button
                            onClick={() => setActivePanel(section.title)}
                            className="flex w-full items-center justify-between py-4 text-[15px] font-bold uppercase tracking-widest text-foreground/80 hover:text-primary font-oswald"
                          >
                            {section.title}
                            <span className="text-xl leading-none font-sans">›</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={activePanel}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="w-full font-oswald"
                  >
                    <button
                      onClick={() => setActivePanel("main")}
                      className="mb-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground/50 hover:text-primary font-oswald"
                    >
                      <span className="text-xl leading-none font-sans">‹</span> Back
                    </button>

                    {/* Render active item content */}
                    {(() => {
                      const navItem = nav.find(n => n.id === activePanel);
                      if (navItem?.cols) {
                        return (
                          <div>
                            <h2 className="mb-8 text-2xl font-black uppercase tracking-tight text-primary font-oswald">{navItem.label}</h2>
                            <div className="space-y-8">
                              {navItem.cols.map(col => (
                                <div key={col.title}>
                                  <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-primary font-oswald">{col.title}</p>
                                  <ul className="space-y-4">
                                    {col.links.map(link => (
                                      <li key={link.label}>
                                        <PaneLink link={link} onClick={closeAll} />
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      }

                      const moreItem = moreMenuData.find(m => m.title === activePanel);
                      if (moreItem) {
                        return (
                          <div>
                            <h2 className="mb-8 text-2xl font-black uppercase tracking-tight text-primary font-oswald">{moreItem.title}</h2>
                            <ul className="space-y-5">
                              {moreItem.links.map(link => (
                                <li key={link.label}>
                                  {link.to ? (
                                    <Link to={link.to} onClick={closeAll} className="text-[15px] font-bold leading-tight text-foreground hover:text-primary font-oswald uppercase tracking-wider">{link.label}</Link>
                                  ) : (
                                    <a href={link.href} onClick={closeAll} target="_blank" rel="noopener noreferrer" className="text-[15px] font-bold leading-tight text-foreground hover:text-primary font-oswald uppercase tracking-wider">{link.label}</a>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      }
                      return null;
                    })()}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
