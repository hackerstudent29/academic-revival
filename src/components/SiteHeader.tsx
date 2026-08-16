import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";

type RoutePath = "/" | "/about" | "/academics" | "/admissions" | "/placements" | "/campus-life" | "/contact";

type MenuGroup = {
  title: string;
  links: { label: string; to: RoutePath }[];
};

type NavItem = {
  label: string;
  to: RoutePath;
  groups?: MenuGroup[];
};

const nav: NavItem[] = [
  { to: "/", label: "Home" },
  {
    to: "/about",
    label: "About",
    groups: [
      { title: "Overview", links: [{ label: "Campus Profile", to: "/about" }, { label: "Mission & Values", to: "/about" }, { label: "Principal's Message", to: "/about" }] },
      { title: "Institution", links: [{ label: "The Trust", to: "/about" }, { label: "Governance", to: "/about" }, { label: "Group Institutions", to: "/about" }] },
      { title: "Recognitions", links: [{ label: "NAAC", to: "/about" }, { label: "IQAC", to: "/about" }, { label: "NIRF", to: "/about" }] },
    ],
  },
  {
    to: "/academics",
    label: "Academics",
    groups: [
      { title: "Programmes", links: [{ label: "Undergraduate", to: "/academics" }, { label: "Postgraduate", to: "/academics" }, { label: "Research", to: "/academics" }] },
      { title: "Education", links: [{ label: "Academic Rules", to: "/academics" }, { label: "Course Structure", to: "/academics" }, { label: "Departments", to: "/academics" }] },
      { title: "Innovation", links: [{ label: "IDEA Lab", to: "/academics" }, { label: "R&D Cell", to: "/academics" }, { label: "Industry Learning", to: "/academics" }] },
    ],
  },
  {
    to: "/admissions",
    label: "Admissions",
    groups: [
      { title: "Join MSAJCE", links: [{ label: "Courses Offered", to: "/admissions" }, { label: "How to Apply", to: "/admissions" }, { label: "Eligibility", to: "/admissions" }] },
      { title: "Student Support", links: [{ label: "Scholarships", to: "/admissions" }, { label: "Financial Aid", to: "/admissions" }, { label: "Admission Enquiry", to: "/contact" }] },
    ],
  },
  { to: "/placements", label: "Placements" },
  {
    to: "/campus-life",
    label: "Campus Life",
    groups: [
      { title: "Facilities", links: [{ label: "Digital Library", to: "/campus-life" }, { label: "Student Housing", to: "/campus-life" }, { label: "Transport", to: "/campus-life" }] },
      { title: "Student Life", links: [{ label: "Sports & Fitness", to: "/campus-life" }, { label: "Clubs & Chapters", to: "/campus-life" }, { label: "Social Outreach", to: "/campus-life" }] },
      { title: "Community", links: [{ label: "Student Corner", to: "/campus-life" }, { label: "Alumni Network", to: "/campus-life" }, { label: "Startup Hub", to: "/campus-life" }] },
    ],
  },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const closeMenus = () => {
    setOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown((current) => (current === label ? null : label));
  };

  return (
    <header
      className="msajce-header-glass sticky top-0 z-50 w-full border-b border-foreground/12"
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 md:px-12">
        <Link to="/" className="flex items-center gap-3" onClick={closeMenus}>
          <Logo className="h-9" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {nav.map((item) =>
            item.groups ? (
              <Button
                key={item.label}
                type="button"
                variant="ghost"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onClick={() => toggleDropdown(item.label)}
                aria-expanded={activeDropdown === item.label}
                aria-controls={`desktop-menu-${item.label.replaceAll(" ", "-").toLowerCase()}`}
                className="h-auto rounded-none px-0 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-foreground/60 hover:bg-transparent hover:text-foreground"
              >
                {item.label}
                <ChevronDown className={`transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`} />
              </Button>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                onMouseEnter={() => setActiveDropdown(null)}
                className="py-2 text-xs font-semibold uppercase tracking-[0.14em] text-foreground/60 transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
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
            className="hidden rounded-full bg-primary px-6 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Apply Now
          </Link>
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => {
              setOpen((current) => !current);
              setActiveDropdown(null);
            }}
            className="h-10 w-10 rounded-full bg-transparent text-foreground shadow-none lg:hidden"
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {nav.map((item) =>
        item.groups && activeDropdown === item.label ? (
          <div
            key={item.label}
            id={`desktop-menu-${item.label.replaceAll(" ", "-").toLowerCase()}`}
            className="absolute left-0 top-full hidden w-full border-y border-border bg-popover/95 text-popover-foreground shadow-xl backdrop-blur-xl lg:block"
          >
            <div className="mx-auto grid max-w-[1440px] grid-cols-[0.7fr_2.3fr] gap-12 px-12 py-10">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary">Explore</p>
                <Link to={item.to} onClick={closeMenus} className="text-3xl font-black uppercase text-foreground hover:text-primary">
                  {item.label}
                </Link>
              </div>
              <div className={`grid gap-10 ${item.groups.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
                {item.groups.map((group) => (
                  <div key={group.title}>
                    <p className="mb-4 border-b border-border pb-3 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">{group.title}</p>
                    <ul className="space-y-3">
                      {group.links.map((link) => (
                        <li key={link.label}>
                          <Link to={link.to} onClick={closeMenus} className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary">
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null,
      )}

      {open && (
        <nav className="max-h-[calc(100dvh-73px)] overflow-y-auto border-t border-border bg-popover/95 px-6 py-4 text-popover-foreground backdrop-blur-xl lg:hidden" aria-label="Mobile navigation">
          {nav.map((item) => (
            <div key={item.label} className="border-b border-border last:border-b-0">
              {item.groups ? (
                <>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => toggleDropdown(item.label)}
                    aria-expanded={activeDropdown === item.label}
                    className="flex h-auto w-full justify-between rounded-none px-3 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-foreground/70 hover:bg-accent hover:text-foreground"
                  >
                    {item.label}
                    <ChevronDown className={`transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                  </Button>
                  {activeDropdown === item.label && (
                    <div className="grid gap-6 bg-muted/60 px-5 py-5 sm:grid-cols-2">
                      {item.groups.map((group) => (
                        <div key={group.title}>
                          <p className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-primary">{group.title}</p>
                          <ul className="space-y-1">
                            {group.links.map((link) => (
                              <li key={link.label}>
                                <Link to={link.to} onClick={closeMenus} className="block py-2 text-sm text-foreground/70 hover:text-foreground">
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.to}
                  onClick={closeMenus}
                  className="block px-3 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-foreground/70 hover:bg-accent hover:text-foreground"
                  activeProps={{ className: "text-foreground bg-accent" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}