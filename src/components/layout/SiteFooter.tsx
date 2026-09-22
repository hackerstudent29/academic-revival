import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
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

const E: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: E } },
};

const fadeUp2 = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: E } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
};

const listItem = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: E } },
};

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
      className="relative w-full overflow-hidden bg-[#18181B] dark:bg-[#121214] text-[#CCCCCC] border-t border-white/10 dark:border-white/5 pointer-events-auto"
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
      <motion.div
        className="relative z-10 mx-auto grid max-w-[1440px] gap-8 px-5 py-8 sm:px-8 sm:py-10 md:gap-8 md:px-12 md:py-12 lg:grid-cols-12 lg:gap-8 lg:px-16 lg:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={stagger}
        {...(revealed !== undefined ? { animate: revealed ? "visible" : "hidden" } : {})}
      >
        {/* ── Col 1: Brand ── */}
        <motion.div variants={fadeUp} className="lg:col-span-4">
          <Link to="/" className="inline-block group focus:outline-none" aria-label="MSAJCE Home">
            <svg
              className="h-14 sm:h-18 md:h-20 lg:h-24 w-auto text-white -ml-2 sm:-ml-4 transition-transform duration-300 group-hover:scale-[1.01] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
              viewBox="0 0 700 220"
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

          <p className="mt-2.5 max-w-md text-xs sm:text-sm leading-relaxed text-stone-300 font-sans drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)]">
            An autonomous-spirited engineering campus on Chennai's OMR IT corridor. Empowering the
            next generation of innovators with industry-aligned education, cutting-edge facilities,
            and global perspectives.
          </p>

          {/* Contact Details */}
          <div className="mt-4 sm:mt-6 flex flex-col items-start gap-2 sm:gap-3 text-xs sm:text-sm text-stone-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)]">
            <a
              href="https://maps.google.com/?q=Mohamed+Sathak+A.J.+College+of+Engineering"
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-2.5 sm:gap-3 text-stone-300 hover:text-rose-400 dark:hover:text-rose-300 transition-colors text-left"
            >
              <MapPin
                size={16}
                className="mt-0.5 shrink-0 text-rose-400 group-hover:text-rose-300 transition-colors drop-shadow"
              />
              <span className="leading-relaxed">
                34, Rajiv Gandhi Salai (OMR), IT Highway, Siruseri, Egattur, Chennai, Tamil Nadu 603103
              </span>
            </a>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <Phone size={16} className="shrink-0 text-rose-400 drop-shadow" />
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
              className="group flex items-center gap-2.5 sm:gap-3 text-stone-300 hover:text-rose-400 dark:hover:text-rose-300 transition-colors"
            >
              <Mail
                size={16}
                className="shrink-0 text-rose-400 group-hover:text-rose-300 transition-colors drop-shadow"
              />
              <span>admissions@msajce.edu.in</span>
            </a>
          </div>
        </motion.div>

        {/* ── Link Columns Container (2-cols on mobile, 3-cols on tablet & desktop) ── */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:gap-x-8 lg:col-span-8 lg:grid-cols-3 lg:gap-8">
          {/* ── Col 2: Governance ── */}
          <motion.div variants={fadeUp2}>
            <h3 className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-rose-400 dark:text-rose-400 font-oswald mb-3 sm:mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              Governance
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-stone-300 font-sans font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)]">
              {[
                { to: "/about", hash: "leadership", label: "Governing Council" },
                { to: "/about", hash: "leadership", label: "Planning & Monitoring Board" },
                { to: "/about", hash: "leadership", label: "Academic Advisory Board" },
                { to: "/about", hash: "leadership", label: "Governance Structure" },
              ].map(({ to, hash, label }) => (
                <motion.li key={label} variants={listItem}>
                  <Link
                    to={to}
                    hash={hash}
                    className="group flex items-center justify-between hover:text-rose-400 dark:hover:text-rose-300 transition-colors py-0.5"
                  >
                    <span>{label}</span>
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 -translate-x-1.5 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-rose-400"
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ── Col 3: Quick Links ── */}
          <motion.div variants={fadeUp2}>
            <h3 className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-rose-400 dark:text-rose-400 font-oswald mb-3 sm:mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-stone-300 font-sans font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)]">
              {[
                { to: "/about", label: "About the College" },
                { to: "/placements", label: "Placements & Career" },
                { to: "/campus-life", label: "Campus Life" },
                { to: "/campus-life", label: "Alumni Network" },
              ].map(({ to, label }) => (
                <motion.li key={label} variants={listItem}>
                  <Link
                    to={to}
                    className="group flex items-center justify-between hover:text-rose-400 dark:hover:text-rose-300 transition-colors py-0.5"
                  >
                    <span>{label}</span>
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 -translate-x-1.5 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-rose-400"
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ── Col 4: Admissions ── */}
          <motion.div variants={fadeUp2} className="col-span-2 sm:col-span-1">
            <h3 className="text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-rose-400 dark:text-rose-400 font-oswald mb-3 sm:mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              Admissions
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-stone-300 font-sans font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)]">
              {[
                { to: "/admissions/procedure", label: "How to Apply" },
                { to: "/admissions/eligibility", label: "Eligibility Criteria" },
                { to: "/admissions/scholarships", label: "Scholarships" },
                { to: "/contact", label: "Talk to an Advisor" },
              ].map(({ to, label }) => (
                <motion.li key={label} variants={listItem}>
                  <Link
                    to={to}
                    className="group flex items-center justify-between hover:text-rose-400 dark:hover:text-rose-300 transition-colors py-0.5"
                  >
                    <span>{label}</span>
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 -translate-x-1.5 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-rose-400"
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Bottom Bar ── */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 md:px-12 lg:px-16">
        <div className="h-px w-full bg-white/10 dark:bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 py-5 sm:py-6 md:flex-row md:py-8">
          {/* Social icons: boxy asymmetrical shapes per MSAJCE design guidelines */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="group relative inline-flex h-9 w-9 sm:h-10 sm:w-10 overflow-hidden items-center justify-center rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-white/15 text-[#CCCCCC] transition-all hover:border-primary hover:text-white"
              >
                <span className="absolute inset-0 top-full bg-primary transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:top-0" />
                <Icon
                  size={15}
                  className="relative z-10 transition-colors duration-300 group-hover:text-primary-foreground sm:size-[17px]"
                />
              </a>
            ))}
          </div>

          {/* Copyright & Legal */}
          <div className="flex flex-col items-center gap-2.5 sm:gap-4 md:flex-row md:gap-8 text-[11px] sm:text-xs font-medium uppercase tracking-widest text-stone-400 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-center">
              <Link to="/about" className="text-stone-400 hover:text-rose-400 dark:hover:text-rose-300 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/about" className="text-stone-400 hover:text-rose-400 dark:hover:text-rose-300 transition-colors">
                Terms of Service
              </Link>
              <Link to="/credits" className="text-stone-400 hover:text-rose-400 dark:hover:text-rose-300 transition-colors">
                Credits
              </Link>
            </div>
            <p className="text-stone-400">&copy; {new Date().getFullYear()} MSAJCE. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
