import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Logo } from "@/components/Logo";
import { MoreHorizontal, X, ChevronDown } from "lucide-react";

type RoutePath = "/" | "/about" | "/academics" | "/admissions" | "/placements" | "/campus-life" | "/contact";

type Col = { title: string; links: { label: string; to?: RoutePath; href?: string; hash?: string }[] };
type NavItem = { id: string; label: string; to: RoutePath; cols?: Col[] };

const APPLE_EASE = [0.32, 0.72, 0, 1] as const;

const nav: NavItem[] = [
  {
    id: "about",
    label: "The Institution",
    to: "/about",
    cols: [
      { title: "Overview", links: [{ label: "Campus Profile", to: "/about" }, { label: "Mission & Values", to: "/about", hash: "mission" }, { label: "The Trust", to: "/about", hash: "trust" }, { label: "Principal's Message", to: "/about", hash: "leadership" }, { label: "Trust Network", to: "/about", hash: "trust" }] },
      { title: "Administration & Compliance", links: [{ label: "Governance", to: "/about", hash: "leadership" }, { label: "Welfare Committees", to: "/about" }, { label: "Code of Conduct", to: "/campus-life", hash: "code-of-conduct" }, { label: "Compliance", to: "/about" }] },
      { title: "Recognitions", links: [{ label: "NAAC", to: "/about", hash: "accreditations" }, { label: "IQAC", to: "/about", hash: "accreditations" }, { label: "NIRF", to: "/about", hash: "accreditations" }, { label: "ARIIA", to: "/about", hash: "accreditations" }] },
    ],
  },
  {
    id: "admission",
    label: "Admissions",
    to: "/admissions",
    cols: [
      { title: "Join MSAJCE", links: [{ label: "Courses Offered", to: "/programmes" }, { label: "Online Application", to: "/admissions", hash: "process" }, { label: "Fee Portal", to: "/admissions" }, { label: "Financial Aid", to: "/admissions", hash: "scholarships" }] },
      { title: "Support", links: [{ label: "Eligibility", to: "/admissions", hash: "eligibility" }, { label: "Scholarships", to: "/admissions", hash: "scholarships" }, { label: "Admission Enquiry", to: "/contact" }] },
    ],
  },
  {
    id: "academics",
    label: "Education",
    to: "/academics",
    cols: [
      { 
        title: "Computing & IT", 
        links: [
          { label: "Computer Science & Engineering", to: "/programmes/computer-science-and-engineering" },
          { label: "Information Technology", to: "/programmes/information-technology" },
          { label: "AI & Data Science", to: "/programmes/artificial-intelligence-and-data-science" },
          { label: "AI & Machine Learning", to: "/programmes/artificial-intelligence-and-machine-learning" },
          { label: "Computer Science & Business", to: "/programmes/computer-science-and-business-systems" },
          { label: "CSE (Cyber Security)", to: "/programmes/computer-science-and-engineering-cyber-security" }
        ] 
      },
      { 
        title: "Core Engineering", 
        links: [
          { label: "Civil Engineering", to: "/programmes/civil-engineering" },
          { label: "Mechanical Engineering", to: "/programmes/mechanical-engineering" },
          { label: "Electrical & Electronics", to: "/programmes/electrical-and-electronics-engineering" },
          { label: "Electronics & Communication", to: "/programmes/electronics-and-communication-engineering" },
          { label: "ECE (Advanced Comm)", to: "/programmes/ece-advanced-communication" },
          { label: "Electronics (VLSI)", to: "/programmes/electronics-engg-vlsi-design" }
        ] 
      },
      { 
        title: "Postgraduate & Ph.D", 
        links: [
          { label: "M.E. Structural Engineering", to: "/programmes/pg-structural-engineering" },
          { label: "M.E. Computer Science", to: "/programmes/pg-computer-science-and-engineering" },
          { label: "Master of Architecture", to: "/programmes/pg-master-of-architecture" },
          { label: "Bachelor of Architecture", to: "/programmes/bachelor-of-architecture" },
          { label: "Bachelor of Design", to: "/programmes/bachelor-of-design" },
          { label: "Ph.D Mechanical Engg", to: "/programmes/phd-mechanical-engineering" }
        ] 
      },
    ],
  },
  { id: "placement", label: "Placements", to: "/placements" },
  {
    id: "life",
    label: "Campus Life",
    to: "/campus-life",
    cols: [
      { title: "Campus Facilities", links: [{ label: "Digital Library", to: "/campus-life", hash: "facilities" }, { label: "Student Housing", to: "/campus-life", hash: "facilities" }, { label: "Transit & Routes", to: "/campus-life", hash: "facilities" }, { label: "Athletics & Gym", to: "/campus-life", hash: "facilities" }, { label: "Tech Centres", to: "/campus-life", hash: "tech-centres" }] },
      { title: "Student Engagement", links: [{ label: "Student Clubs", to: "/campus-life", hash: "facilities" }, { label: "Tech Chapters", to: "/campus-life", hash: "tech-centres" }, { label: "Social Outreach (NSS)", to: "/campus-life", hash: "facilities" }, { label: "EBSB", to: "/campus-life" }] },
      { title: "Career & Community", links: [{ label: "Student Corner", to: "/campus-life" }, { label: "Alumni Network", to: "/campus-life" }, { label: "Startup Hub", to: "/campus-life" }] },
    ],
  },
  {
    id: "coe",
    label: "Examinations",
    to: "/academics",
    cols: [
      { title: "Controller of Examinations", links: [{ label: "Exam Schedules", to: "/academics", hash: "examinations" }, { label: "Exam Results", href: "https://results.msajce-edu.in" }, { label: "Hall Tickets", to: "/academics", hash: "examinations" }, { label: "Arrear Exams", to: "/academics", hash: "examinations" }] },
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
    <Link to={link.to!} hash={link.hash} onClick={onClick} className={cls}>
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
  const [active, setActive] = useState<string | null>(null);
  const [moreOpen, setMoreOpen] = useState(false);
  const [activePanel, setActivePanel] = useState<string>("main");
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      if (!moreOpen && !active) {
        setHidden(true);
      }
    } else {
      setHidden(false);
    }
  });

  const activeItem = nav.find((n) => n.id === active && n.cols);

  useEffect(() => {
    const cls = "dropdown-open";
    if (active || moreOpen) document.body.classList.add(cls);
    else document.body.classList.remove(cls);
    return () => document.body.classList.remove(cls);
  }, [active, moreOpen]);

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
    setActive(null);
    setActivePanel("main");
    setMoreOpen(false);
  };

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: APPLE_EASE }}
        className={`sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
          active || moreOpen ? "border-transparent bg-background" : 
          isScrolled ? "bg-background border-foreground/10" : "msajce-header-glass border-foreground/10"
        }`}
        onMouseLeave={() => setActive(null)}
      >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-2.5 md:px-12 md:py-3">
        <Link to="/" className="flex items-center gap-3" onClick={closeAll}>
          <Logo className="h-32 -my-12 sm:h-44 sm:-my-16 origin-left" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {nav.map((item) =>
            item.cols ? (
              <button
                key={item.id}
                type="button"
                onMouseEnter={() => setActive(item.id)}
                onClick={() => setActive((c) => (c === item.id ? null : item.id))}
                aria-expanded={active === item.id}
                className={`relative py-2 text-[13px] font-bold uppercase tracking-[0.04em] transition-colors duration-200 ${
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
                className="py-2 text-[13px] font-bold uppercase tracking-[0.04em] text-foreground transition-colors duration-200 hover:text-primary"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/admissions"
            onClick={closeAll}
            className="group relative hidden overflow-hidden rounded-none bg-forest px-5 py-2.5 text-[13px] font-bold text-white shadow transition-colors hover:text-background sm:inline-flex after:absolute after:inset-0 after:top-full after:bg-foreground after:transition-all after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:top-0"
          >
            <span className="relative z-10 flex items-center gap-2">Apply 2026-27</span>
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

      {/* Apple-style dropdown overlay */}
      <div className="absolute left-0 top-full hidden w-full lg:block">
        <AnimatePresence initial={false}>
          {activeItem && (
            <motion.div
              key="pane"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.42, ease: APPLE_EASE }}
              className="msajce-dropdown-glass overflow-hidden border-b border-foreground/10 w-full"
            >
              <motion.div
                key={activeItem.id}
                initial="hidden"
                animate="show"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } } }}
                className="mx-auto grid max-w-[1440px] grid-cols-[0.8fr_2.2fr] gap-12 px-12 py-12"
              >
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: APPLE_EASE } } }}
                >
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Explore</p>
                  <Link to={activeItem.to} onClick={closeAll} className="text-3xl font-black leading-[0.95] text-primary transition-colors hover:text-primary/80">
                    {activeItem.label}
                  </Link>
                </motion.div>
                <div className={`grid gap-10 ${activeItem.cols!.length === 1 ? "grid-cols-1" : activeItem.cols!.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
                  {activeItem.cols!.map((col) => (
                    <motion.div
                      key={col.title}
                      variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: APPLE_EASE } } }}
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

      {/* Sidebar unified menu overlay */}
      <AnimatePresence>
        {moreOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMoreOpen(false)}
              className="fixed inset-0 top-[53px] sm:top-[73px] z-[40] bg-black/40 touch-none"
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.5, ease: APPLE_EASE }}
              style={{ touchAction: "pan-y", WebkitOverflowScrolling: "touch" }}
              data-lenis-prevent="true"
              className="fixed right-0 top-[53px] sm:top-[73px] z-[40] block w-full max-w-[360px] h-[calc(100dvh-53px)] sm:h-[calc(100dvh-73px)] pt-6 pb-12 msajce-dropdown-glass px-6 overflow-y-auto overflow-x-hidden overscroll-contain border-l border-foreground/10 shadow-2xl scrollbar-none"
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
                      <div className="mb-8">
                        {nav.map((item) => (
                          <div key={item.id} className="border-b border-foreground/10 last:border-b-0">
                            {item.cols ? (
                              <button
                                type="button"
                                onClick={() => setActivePanel(item.id)}
                                className="flex w-full items-center justify-between py-4 text-[15px] font-bold uppercase tracking-widest text-foreground/80 hover:text-primary"
                              >
                                {item.label}
                                <span className="text-xl leading-none">›</span>
                              </button>
                            ) : (
                              <Link to={item.to} onClick={closeAll} className="block py-4 text-[15px] font-bold uppercase tracking-widest text-foreground/80 hover:text-primary">
                                {item.label}
                              </Link>
                            )}
                          </div>
                        ))}
                        <Link
                          to="/admissions"
                          onClick={closeAll}
                          className="my-5 inline-flex w-full items-center justify-center rounded-none bg-forest px-5 py-3 text-[13px] font-bold text-white sm:hidden"
                        >
                          Apply 2026-27
                        </Link>
                      </div>

                      <div className="w-full h-px bg-foreground/10 mb-8" />
                      
                      {/* Explore Additional Links */}
                      <h2 className="mb-6 text-xl font-bold uppercase tracking-widest text-foreground/50">Explore MSAJCE</h2>
                      <div className="flex flex-col">
                        {moreMenuData.map((section) => (
                          <div key={section.title} className="border-b border-foreground/10 last:border-b-0">
                            <button 
                              onClick={() => setActivePanel(section.title)}
                              className="flex w-full items-center justify-between py-4 text-[15px] font-bold uppercase tracking-widest text-foreground/80 hover:text-primary"
                            >
                              {section.title}
                              <span className="text-xl leading-none">›</span>
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
                      className="w-full"
                    >
                      <button
                        onClick={() => setActivePanel("main")}
                        className="mb-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground/50 hover:text-primary"
                      >
                        <span className="text-xl leading-none">‹</span> Back
                      </button>
                      
                      {/* Render active item content */}
                      {(() => {
                        const navItem = nav.find(n => n.id === activePanel);
                        if (navItem?.cols) {
                          return (
                            <div>
                              <h2 className="mb-8 text-2xl font-black uppercase tracking-tight text-primary">{navItem.label}</h2>
                              <div className="space-y-8">
                                {navItem.cols.map(col => (
                                  <div key={col.title}>
                                    <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-primary">{col.title}</p>
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
                              <h2 className="mb-8 text-2xl font-black uppercase tracking-tight text-primary">{moreItem.title}</h2>
                              <ul className="space-y-5">
                                {moreItem.links.map(link => (
                                  <li key={link.label}>
                                    {link.to ? (
                                      <Link to={link.to} onClick={closeAll} className="text-[15px] font-bold leading-tight text-foreground hover:text-primary">{link.label}</Link>
                                    ) : (
                                      <a href={link.href} onClick={closeAll} target="_blank" rel="noopener noreferrer" className="text-[15px] font-bold leading-tight text-foreground hover:text-primary">{link.label}</a>
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
          </>
        )}
      </AnimatePresence>
    </>
  );
}
