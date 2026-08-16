import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Logo } from "@/components/Logo";

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
    "inline-block text-[15px] leading-tight text-foreground/65 transition-colors duration-200 hover:text-primary";
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

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [mobileSub, setMobileSub] = useState<string | null>(null);

  const activeItem = nav.find((n) => n.id === active && n.cols);

  useEffect(() => {
    const cls = "dropdown-open";
    if (active || mobileOpen) document.body.classList.add(cls);
    else document.body.classList.remove(cls);
    return () => document.body.classList.remove(cls);
  }, [active, mobileOpen]);

  const closeAll = () => {
    setActive(null);
    setMobileOpen(false);
    setMobileSub(null);
  };

  return (
    <header
      className="msajce-header-glass sticky top-0 z-50 w-full border-b border-foreground/10"
      onMouseLeave={() => setActive(null)}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 py-4 md:px-12">
        <Link to="/" className="flex items-center gap-3" onClick={closeAll}>
          <Logo className="h-9" />
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
                className={`relative py-2 text-[13px] font-semibold tracking-[0.01em] transition-colors duration-200 ${
                  active === item.id ? "text-foreground" : "text-foreground/60 hover:text-foreground"
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
                className="py-2 text-[13px] font-semibold tracking-[0.01em] text-foreground/60 transition-colors duration-200 hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
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
            className="hidden rounded-full bg-primary px-5 py-2.5 text-[13px] font-bold text-primary-foreground transition-transform duration-300 hover:scale-[1.03] active:scale-[0.97] sm:inline-flex"
          >
            Apply 2026-27
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            onClick={() => {
              setMobileOpen((o) => !o);
              setActive(null);
            }}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-foreground/15 lg:hidden"
          >
            <span className={`block h-[1.5px] w-4 bg-foreground transition-transform duration-300 ${mobileOpen ? "translate-y-[6.5px] rotate-45" : ""}`} />
            <span className={`block h-[1.5px] w-4 bg-foreground transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[1.5px] w-4 bg-foreground transition-transform duration-300 ${mobileOpen ? "-translate-y-[6.5px] -rotate-45" : ""}`} />
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
              className="msajce-dropdown-glass overflow-hidden border-b border-foreground/10"
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
                  <Link to={activeItem.to} onClick={closeAll} className="text-3xl font-black leading-[0.95] text-foreground transition-colors hover:text-primary">
                    {activeItem.label}
                  </Link>
                </motion.div>
                <div className={`grid gap-10 ${activeItem.cols!.length === 1 ? "grid-cols-1" : activeItem.cols!.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
                  {activeItem.cols!.map((col) => (
                    <motion.div
                      key={col.title}
                      variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: APPLE_EASE } } }}
                    >
                      <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">{col.title}</h3>
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

      {/* Mobile menu */}
      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: APPLE_EASE }}
            className="msajce-dropdown-glass overflow-hidden border-t border-foreground/10 lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="max-h-[calc(100dvh-73px)] overflow-y-auto px-6 py-2">
              {nav.map((item) => (
                <div key={item.id} className="border-b border-foreground/10 last:border-b-0">
                  {item.cols ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setMobileSub((c) => (c === item.id ? null : item.id))}
                        aria-expanded={mobileSub === item.id}
                        className="flex w-full items-center justify-between py-4 text-[15px] font-semibold text-foreground/80"
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
                    <Link to={item.to} onClick={closeAll} className="block py-4 text-[15px] font-semibold text-foreground/80">
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/admissions"
                onClick={closeAll}
                className="my-5 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-[13px] font-bold text-primary-foreground sm:hidden"
              >
                Apply 2026-27
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
