import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Logo } from "@/components/Logo";
import { MoreHorizontal, X, ChevronDown } from "lucide-react";

type RoutePath = "/" | "/about" | "/academics" | "/admissions" | "/placements" | "/campus-life" | "/contact";

type Col = { title: string; links: { label: string; to?: RoutePath; href?: string }[] };
type NavItem = { id: string; label: string; to: RoutePath; cols?: Col[] };

const APPLE_EASE = [0.32, 0.72, 0, 1] as const;

const nav: NavItem[] = [
  {
    id: "about",
    label: "The Institution",
    to: "/about",
    cols: [
      { title: "Overview", links: [{ label: "Campus Profile", to: "/about" }, { label: "Mission & Values", to: "/about" }, { label: "The Trust", to: "/about" }, { label: "Principal's Message", to: "/about" }, { label: "Trust Network", to: "/about" }] },
      { title: "Administration & Compliance", links: [{ label: "Governance", to: "/about" }, { label: "Welfare Committees", to: "/about" }, { label: "Code of Conduct", to: "/about" }, { label: "Compliance", to: "/about" }] },
      { title: "Recognitions", links: [{ label: "NAAC", to: "/about" }, { label: "IQAC", to: "/about" }, { label: "NIRF", to: "/about" }, { label: "ARIIA", to: "/about" }] },
    ],
  },
  {
    id: "admission",
    label: "Admissions",
    to: "/admissions",
    cols: [
      { title: "Join MSAJCE", links: [{ label: "Courses Offered", to: "/admissions" }, { label: "Online Application", to: "/admissions" }, { label: "Fee Portal", to: "/admissions" }, { label: "Financial Aid", to: "/admissions" }] },
      { title: "Support", links: [{ label: "Eligibility", to: "/admissions" }, { label: "Scholarships", to: "/admissions" }, { label: "Admission Enquiry", to: "/contact" }] },
    ],
  },
  {
    id: "academics",
    label: "Education",
    to: "/academics",
    cols: [
      { title: "Education", links: [{ label: "Academic Rules", to: "/academics" }, { label: "Course Structure", to: "/academics" }, { label: "Academic Divisions", to: "/academics" }] },
      { title: "Innovation", links: [{ label: "IDEA Lab", to: "/academics" }, { label: "R&D Cell", to: "/academics" }, { label: "Industry Learning", to: "/academics" }] },
    ],
  },
  { id: "placement", label: "Placements", to: "/placements" },
  {
    id: "life",
    label: "Campus Life",
    to: "/campus-life",
    cols: [
      { title: "Campus Facilities", links: [{ label: "Digital Library", to: "/campus-life" }, { label: "Student Housing", to: "/campus-life" }, { label: "Transit & Routes", to: "/campus-life" }, { label: "Athletics & Gym", to: "/campus-life" }, { label: "Student Radio", to: "/campus-life" }] },
      { title: "Student Engagement", links: [{ label: "Student Clubs", to: "/campus-life" }, { label: "Tech Chapters", to: "/campus-life" }, { label: "Social Outreach (NSS)", to: "/campus-life" }, { label: "EBSB", to: "/campus-life" }] },
      { title: "Career & Community", links: [{ label: "Student Corner", to: "/campus-life" }, { label: "Alumni Network", to: "/campus-life" }, { label: "Startup Hub", to: "/campus-life" }] },
    ],
  },
  {
    id: "coe",
    label: "Examinations",
    to: "/academics",
    cols: [
      { title: "Controller of Examinations", links: [{ label: "Exam Schedules", to: "/academics" }, { label: "Exam Results", href: "https://results.msajce-edu.in" }, { label: "Hall Tickets", to: "/academics" }, { label: "Arrear Exams", to: "/academics" }] },
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
    <Link to={link.to!} onClick={onClick} className={cls}>
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
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const [moreOpen, setMoreOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const activeItem = nav.find((n) => n.id === active && n.cols);

  useEffect(() => {
    const cls = "dropdown-open";
    if (active || moreOpen) document.body.classList.add(cls);
    else document.body.classList.remove(cls);
    return () => document.body.classList.remove(cls);
  }, [active, moreOpen]);

  const closeAll = () => {
    setActive(null);
    setMobileSub(null);
    setMoreOpen(false);
  };

  return (
    <header
      className={`msajce-header-glass sticky top-0 z-50 w-full border-b transition-colors duration-300 ${
        active || moreOpen ? "border-transparent" : "border-foreground/10"
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
            className="group relative hidden overflow-hidden rounded-none bg-primary px-5 py-2.5 text-[13px] font-bold text-primary-foreground shadow transition-colors hover:text-background sm:inline-flex after:absolute after:inset-0 after:top-full after:bg-foreground after:transition-all after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:top-0"
          >
            <span className="relative z-10 flex items-center gap-2">Apply 2026-27</span>
          </Link>
          <button
            type="button"
            aria-label={moreOpen ? "Close menu" : "Open menu"}
            onClick={() => {
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
              className="absolute left-0 top-full z-[50] w-full h-[calc(100dvh-100%)] bg-black/40"
            />
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.5, ease: APPLE_EASE }}
              className="absolute right-0 top-full z-[60] flex flex-col w-full max-w-[360px] h-[calc(100dvh-100%)] pb-12 msajce-dropdown-glass px-6 py-8 overflow-y-auto border-l border-foreground/10 shadow-2xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              <div className="w-full">
                
                {/* Main Navigation Links */}
                <div className="mb-8">
                  {nav.map((item) => (
                    <div key={item.id} className="border-b border-foreground/10 last:border-b-0">
                      {item.cols ? (
                        <>
                          <button
                            type="button"
                            onClick={() => setMobileSub((c) => (c === item.id ? null : item.id))}
                            aria-expanded={mobileSub === item.id}
                            className="flex w-full items-center justify-between py-4 text-[15px] font-bold uppercase tracking-widest text-foreground/80 hover:text-primary"
                          >
                            {item.label}
                            <span className={`text-lg transition-transform duration-300 ${mobileSub === item.id ? "rotate-45" : ""}`}>+</span>
                          </button>
                          <AnimatePresence initial={false}>
                            {mobileSub === item.id && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35, ease: APPLE_EASE }}
                                className="overflow-hidden"
                              >
                                <div className="space-y-5 pb-5">
                                  {item.cols.map((col) => (
                                    <div key={col.title}>
                                      <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-primary">{col.title}</p>
                                      <ul className="space-y-2">
                                        {col.links.map((link) => (
                                          <li key={link.label}>
                                            <PaneLink link={link} onClick={closeAll} />
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
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
                    className="my-5 inline-flex w-full items-center justify-center rounded-none bg-primary px-5 py-3 text-[13px] font-bold text-primary-foreground sm:hidden"
                  >
                    Apply 2026-27
                  </Link>
                </div>

                <div className="w-full h-px bg-foreground/10 mb-8" />
                
                {/* Explore Additional Links */}
                <h2 className="mb-6 text-xl font-bold uppercase tracking-widest text-foreground/50">Explore MSAJCE</h2>
                <div className="flex flex-col gap-4">
                  {moreMenuData.map((section) => (
                    <div key={section.title} className="flex flex-col border-t border-foreground/10 pt-4">
                      <button 
                        onClick={() => setExpandedSection(expandedSection === section.title ? null : section.title)}
                        className="group flex w-full items-center justify-between text-left text-lg font-bold uppercase tracking-tight hover:text-primary"
                      >
                        {section.title}
                        <ChevronDown className={`transition-transform duration-300 ${expandedSection === section.title ? "rotate-180" : ""}`} size={20} />
                      </button>
                      
                      <AnimatePresence>
                        {expandedSection === section.title && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                             <ul className="flex flex-col gap-3 pb-2 pt-4">
                               {section.links.map((link) => (
                                 <li key={link.label}>
                                   {link.to ? (
                                     <Link
                                       to={link.to}
                                       onClick={() => closeAll()}
                                       className="group flex items-center justify-between text-sm font-semibold uppercase tracking-tight text-foreground/70 hover:text-primary"
                                     >
                                       {link.label}
                                       <span className="text-primary opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">→</span>
                                     </Link>
                                   ) : (
                                     <a
                                       href={link.href}
                                       onClick={() => closeAll()}
                                       className="group flex items-center justify-between text-sm font-semibold uppercase tracking-tight text-foreground/70 hover:text-primary"
                                     >
                                       {link.label}
                                       <span className="text-primary opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">↗</span>
                                     </a>
                                   )}
                                 </li>
                               ))}
                             </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
