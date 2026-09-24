import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
  ArrowUpRight,
} from "lucide-react";
import { useEffect, useRef } from "react";

const socials = [
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { label: "Facebook", href: "https://facebook.com", Icon: Facebook },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  { label: "X", href: "https://x.com", Icon: Twitter },
  { label: "YouTube", href: "https://youtube.com", Icon: Youtube },
];

export function SiteFooter({ revealed }: { revealed?: boolean } = {}) {
  const footerRef = useRef<HTMLElement>(null);

  // Measure footer height dynamically and update --footer-height CSS variable
  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;

    const updateHeight = () => {
      if (!footerRef.current) return;
      const h = footerRef.current.offsetHeight || footerRef.current.getBoundingClientRect().height;
      if (h > 0) {
        document.documentElement.style.setProperty("--footer-height", `${Math.ceil(h)}px`);
      }
    };

    updateHeight();
    const rafId = requestAnimationFrame(updateHeight);
    const timer = setTimeout(updateHeight, 250);

    const ro = new ResizeObserver(updateHeight);
    ro.observe(el);
    window.addEventListener("resize", updateHeight);
    window.addEventListener("orientationchange", updateHeight);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
      ro.disconnect();
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("orientationchange", updateHeight);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#18181B] dark:bg-[#121214] text-[#CCCCCC] border-t border-white/10 dark:border-white/5 pointer-events-auto"
    >
      {/* ── 1. Architectural Campus Outline Ambient Background ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 flex items-end justify-center select-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Mobile View Outline Logo */}
        <img
          src="/logos/msajce%20logo%20outline%20mobbile%20view%20%20footer.png"
          alt="MSAJCE Architectural Campus Outline Mobile"
          className="block sm:hidden w-full h-full object-cover object-bottom mix-blend-screen opacity-55 pointer-events-none select-none filter contrast-125 brightness-110 origin-bottom"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/logos/college%20logo%20outline%20resized%20green.png";
          }}
        />
        {/* Tablet & Desktop View Outline Logo */}
        <img
          src="/logos/college%20logo%20outline%20resized%20green.png"
          alt="MSAJCE Architectural Campus Outline"
          className="hidden sm:block w-full h-auto sm:max-h-[420px] md:h-full md:max-h-none max-w-[1920px] object-contain object-bottom mix-blend-screen opacity-65 md:opacity-70 pointer-events-none select-none filter contrast-125 brightness-110 sm:scale-110 md:scale-120 lg:scale-130 origin-bottom sm:translate-y-1 md:translate-y-2"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/logos/msajce%20logo%20outline.jpeg";
          }}
        />
        {/* Directional gradient: darker at top behind text links, revealing building architecture across middle and bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#18181B] via-[#18181B]/75 to-transparent sm:from-[#18181B]/95 sm:via-[#18181B]/45 sm:to-transparent dark:from-[#121214] dark:via-[#121214]/75 dark:to-transparent sm:dark:from-[#121214]/95 sm:dark:via-[#121214]/45 sm:dark:to-transparent pointer-events-none" />
        {/* Radial vignette to give extra crisp contrast directly behind the link columns */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,0,0,0.55)_0%,transparent_75%)] pointer-events-none" />
      </div>

      {/* ── Main Grid ── */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] grid grid-cols-12 gap-8 px-4 sm:px-6 md:px-8 xl:px-12 py-12 md:py-16 lg:py-20">
        {/* ── Col 1: Brand ── */}
        <div className="col-span-12 lg:col-span-4">
          <Link to="/" className="inline-block group focus:outline-none" aria-label="MSAJCE Home">
            <svg
              className="h-16 sm:h-20 md:h-22 lg:h-24 w-auto text-white transition-transform duration-300 group-hover:scale-[1.01] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
              viewBox="30 20 670 190"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="30" y="30" width="500" height="1.5" fill="currentColor" />
              <text
                x="30"
                y="95"
                fontFamily="Georgia,'Times New Roman',serif"
                fontWeight="700"
                fontSize="52"
                fill="currentColor"
                letterSpacing="4"
              >
                MSAJ<tspan fontSize="66">C</tspan>EA
              </text>
              <text
                x="34"
                y="130"
                fontFamily="Georgia,'Times New Roman',serif"
                fontWeight="400"
                fontSize="20"
                fill="currentColor"
                letterSpacing="6"
              >
                MOHAMED SATHAK A.J. COLLEGE
              </text>
              <text
                x="120"
                y="160"
                fontFamily="Georgia,'Times New Roman',serif"
                fontWeight="400"
                fontSize="20"
                fill="currentColor"
                letterSpacing="6"
              >
                OF ENGINEERING &amp; ARCHITECTURE
              </text>
            </svg>
          </Link>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-stone-300 font-sans drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)]">
            An autonomous-spirited engineering campus on Chennai's OMR IT corridor. Empowering the
            next generation of innovators with industry-aligned education, cutting-edge facilities,
            and global perspectives.
          </p>

          {/* Contact Details */}
          <div className="mt-6 flex flex-col items-start gap-3.5 text-sm text-stone-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)]">
            <a
              href="https://maps.google.com/?q=Mohamed+Sathak+A.J.+College+of+Engineering"
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-3 text-stone-300 hover:text-rose-400 dark:hover:text-rose-300 transition-colors text-left"
            >
              <MapPin
                size={18}
                className="mt-0.5 shrink-0 text-rose-400 group-hover:text-rose-300 transition-colors drop-shadow"
              />
              <span className="leading-relaxed">
                34, Rajiv Gandhi Salai (OMR),
                <br />
                IT Highway, Siruseri, Egattur,
                <br />
                Chennai, Tamil Nadu 603103
              </span>
            </a>

            <div className="flex flex-wrap items-center gap-3">
              <Phone size={18} className="shrink-0 text-rose-400 drop-shadow" />
              <span className="flex items-center gap-2">
                <a href="tel:+914427470000" className="text-stone-300 hover:text-rose-400 dark:hover:text-rose-300 transition-colors">
                  +91 44 2747 0000
                </a>
                <span className="text-white/40">/</span>
                <a href="tel:+914427470001" className="text-stone-300 hover:text-rose-400 dark:hover:text-rose-300 transition-colors">
                  +91 44 2747 0001
                </a>
              </span>
            </div>

            <a
              href="mailto:admissions@msajce.edu.in"
              className="group flex items-center gap-3 text-stone-300 hover:text-rose-400 dark:hover:text-rose-300 transition-colors"
            >
              <Mail
                size={18}
                className="shrink-0 text-rose-400 group-hover:text-rose-300 transition-colors drop-shadow"
              />
              <span>admissions@msajce.edu.in</span>
            </a>
          </div>
        </div>

        {/* ── Col 2: Governance ── */}
        <div className="col-span-6 sm:col-span-4 md:col-span-4 lg:col-span-2 lg:col-start-5">
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-rose-400 dark:text-rose-400 font-oswald mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            Governance
          </h3>
          <ul className="space-y-3 text-sm text-stone-300 font-sans font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)]">
            {[
              { to: "/about", hash: "leadership", label: "Governing Council" },
              { to: "/about", hash: "leadership", label: "Planning & Monitoring Board" },
              { to: "/about", hash: "leadership", label: "Academic Advisory Board" },
              { to: "/about", hash: "leadership", label: "Governance Structure" },
            ].map(({ to, hash, label }) => (
              <li key={label}>
                <Link
                  to={to}
                  hash={hash}
                  className="group flex items-center justify-between hover:text-rose-400 dark:hover:text-rose-300 transition-colors py-0.5"
                >
                  <span>{label}</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 -translate-x-1.5 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-rose-400"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Col 3: Quick Links ── */}
        <div className="col-span-6 sm:col-span-4 md:col-span-4 lg:col-span-2">
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-rose-400 dark:text-rose-400 font-oswald mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm text-stone-300 font-sans font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)]">
            {[
              { to: "/about", label: "About the College" },
              { to: "/placements", label: "Placements & Career" },
              { to: "/campus-life", label: "Campus Life" },
              { to: "/student-community/alumni", label: "Alumni Network" },
            ].map(({ to, label }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="group flex items-center justify-between hover:text-rose-400 dark:hover:text-rose-300 transition-colors py-0.5"
                >
                  <span>{label}</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 -translate-x-1.5 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-rose-400"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Col 4: Admissions ── */}
        <div className="col-span-12 sm:col-span-4 md:col-span-4 lg:col-span-2">
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-rose-400 dark:text-rose-400 font-oswald mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            Admissions
          </h3>
          <ul className="space-y-3 text-sm text-stone-300 font-sans font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)]">
            {[
              { to: "/admissions/procedure", label: "How to Apply" },
              { to: "/admissions/eligibility", label: "Eligibility Criteria" },
              { to: "/admissions/scholarships", label: "Scholarships" },
              { to: "/contact", label: "Talk to an Advisor" },
            ].map(({ to, label }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="group flex items-center justify-between hover:text-rose-400 dark:hover:text-rose-300 transition-colors py-0.5"
                >
                  <span>{label}</span>
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 -translate-x-1.5 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-rose-400"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="h-px w-full bg-white/10 dark:bg-white/10" />

        <div className="flex w-full flex-col items-center justify-between gap-6 py-6 sm:flex-row md:py-8">
          {/* Social icons: aligned straight to the college logo on the left with Liquid Ocean Wave Fill Effect */}
          <div className="flex flex-wrap items-center justify-start gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="group relative inline-flex h-10 w-10 overflow-hidden items-center justify-center rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-white/20 bg-white/5 text-[#CCCCCC] transition-all duration-300 hover:border-primary hover:text-white shadow-xs"
              >
                {/* Liquid Ocean Wave Fill Effect */}
                <span className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
                  <span className="absolute inset-x-0 top-0 h-[140%] bg-primary translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    {/* Ocean Wave Crest SVG (Primary) */}
                    <span className="absolute -top-3.5 left-0 w-[200%] h-4 pointer-events-none block">
                      <svg className="w-full h-full fill-primary animate-ocean-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,-20 1200,40 L1200,120 L0,120 Z" />
                      </svg>
                    </span>
                    {/* Secondary Depth Layer Wave */}
                    <span className="absolute -top-4 left-0 w-[200%] h-5 opacity-40 pointer-events-none block">
                      <svg className="w-full h-full fill-primary animate-ocean-wave-reverse" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,30 C200,-30 400,90 600,10 C800,-40 1000,70 1200,20 L1200,120 L0,120 Z" />
                      </svg>
                    </span>
                  </span>
                </span>

                <Icon
                  size={17}
                  className="relative z-10 transition-colors duration-300 group-hover:text-white"
                />
              </a>
            ))}
          </div>

          {/* Copyright & Legal - placed straight to the header ending padding on the right with high-visibility bright styling */}
          <div className="flex flex-col items-center sm:items-end md:flex-row md:items-center gap-4 sm:gap-6 md:gap-8 text-xs font-semibold uppercase tracking-widest text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
            <div className="flex flex-wrap gap-4 md:gap-6 items-center justify-center sm:justify-end">
              <Link to="/about" className="text-white/90 hover:text-white dark:hover:text-rose-300 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/about" className="text-white/90 hover:text-white dark:hover:text-rose-300 transition-colors">
                Terms of Service
              </Link>
              <Link to="/credits" className="text-white/90 hover:text-white dark:hover:text-rose-300 transition-colors">
                Credits
              </Link>
            </div>
            <p className="text-white shrink-0 text-center sm:text-right">&copy; {new Date().getFullYear()} MSAJCE. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
