import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube, ArrowUpRight } from "lucide-react";
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
  { label: "Facebook",  href: "https://facebook.com",  Icon: Facebook  },
  { label: "LinkedIn",  href: "https://linkedin.com",  Icon: Linkedin  },
  { label: "X",         href: "https://x.com",         Icon: Twitter   },
  { label: "YouTube",   href: "https://youtube.com",   Icon: Youtube   },
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

    const ro = new ResizeObserver(updateHeight);
    ro.observe(el);
    window.addEventListener("resize", updateHeight);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative w-full overflow-hidden bg-[#18181B] dark:bg-[#121214] text-[#CCCCCC] border-t border-white/10 dark:border-white/5 pointer-events-auto"
    >
      {/* ── 1. Watermark: Ambient MSAJCEA Branding ── */}
      <div
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="font-oswald text-[18vw] font-black uppercase leading-none tracking-tighter text-primary/[0.08] dark:text-primary/[0.12]">
          MSAJCEA
        </span>
      </div>

      {/* ── Main Grid ── */}
      <motion.div
        className="relative z-10 mx-auto grid max-w-[1440px] gap-12 px-6 py-14 md:grid-cols-12 md:gap-8 md:px-12 lg:px-16 lg:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={stagger}
        animate={revealed ? "visible" : undefined}
      >
        {/* ── Col 1: Brand ── */}
        <motion.div variants={fadeUp} className="md:col-span-12 lg:col-span-4">
          <Link to="/" className="inline-block group focus:outline-none" aria-label="MSAJCE Home">
            <svg
              className="h-20 sm:h-24 w-auto text-white -ml-2 sm:-ml-4 transition-transform duration-300 group-hover:scale-[1.01]"
              viewBox="0 0 700 220"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="30" y="30" width="500" height="1.5" fill="currentColor" />
              <text x="30" y="95" fontFamily="Georgia,'Times New Roman',serif" fontWeight="700" fontSize="52" fill="currentColor" letterSpacing="4">
                MSAJ<tspan fontSize="66">C</tspan>EA
              </text>
              <text x="34" y="130" fontFamily="Georgia,'Times New Roman',serif" fontWeight="400" fontSize="20" fill="currentColor" letterSpacing="6">
                MOHAMED SATHAK A.J. COLLEGE
              </text>
              <text x="120" y="160" fontFamily="Georgia,'Times New Roman',serif" fontWeight="400" fontSize="20" fill="currentColor" letterSpacing="6">
                OF ENGINEERING &amp; ARCHITECTURE
              </text>
            </svg>
          </Link>

          <p className="mt-4 max-w-md text-sm leading-relaxed text-[#CCCCCC]/80 font-sans">
            An autonomous-spirited engineering campus on Chennai's OMR IT corridor. Empowering the next generation of innovators with industry-aligned education, cutting-edge facilities, and global perspectives.
          </p>

          {/* Contact Details */}
          <div className="mt-8 flex flex-col items-start gap-3.5 text-sm text-[#CCCCCC]">
            <a
              href="https://maps.google.com/?q=Mohamed+Sathak+A.J.+College+of+Engineering"
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-3 hover:text-primary transition-colors text-left"
            >
              <MapPin size={18} className="mt-0.5 shrink-0 text-white/50 group-hover:text-primary transition-colors" />
              <span className="leading-relaxed">
                34, Rajiv Gandhi Salai (OMR),<br />
                IT Highway, Siruseri, Egattur,<br />
                Chennai, Tamil Nadu 603103
              </span>
            </a>

            <div className="flex items-center gap-3">
              <Phone size={18} className="shrink-0 text-white/50" />
              <span className="flex items-center gap-2">
                <a href="tel:+914427470000" className="hover:text-primary transition-colors">+91 44 2747 0000</a>
                <span className="text-white/25">/</span>
                <a href="tel:+914427470001" className="hover:text-primary transition-colors">+91 44 2747 0001</a>
              </span>
            </div>

            <a
              href="mailto:admissions@msajce.edu.in"
              className="group flex items-center gap-3 hover:text-primary transition-colors"
            >
              <Mail size={18} className="shrink-0 text-white/50 group-hover:text-primary transition-colors" />
              <span>admissions@msajce.edu.in</span>
            </a>
          </div>
        </motion.div>

        {/* ── Col 2: Governance ── */}
        <motion.div variants={fadeUp2} className="md:col-span-4 lg:col-span-2 lg:col-start-5">
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-primary font-oswald mb-4">
            Governance
          </h3>
          <ul className="space-y-3 text-sm text-[#CCCCCC]/90 font-sans">
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
                  className="group flex items-center justify-between hover:text-primary transition-colors py-0.5"
                >
                  <span>{label}</span>
                  <ArrowUpRight size={14} className="opacity-0 -translate-x-1.5 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-primary" />
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* ── Col 3: Quick Links ── */}
        <motion.div variants={fadeUp2} className="md:col-span-4 lg:col-span-2">
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-primary font-oswald mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm text-[#CCCCCC]/90 font-sans">
            {[
              { to: "/about", label: "About the College" },
              { to: "/placements", label: "Placements & Career" },
              { to: "/campus-life", label: "Campus Life" },
              { to: "/campus-life", label: "Alumni Network" },
            ].map(({ to, label }) => (
              <motion.li key={label} variants={listItem}>
                <Link
                  to={to}
                  className="group flex items-center justify-between hover:text-primary transition-colors py-0.5"
                >
                  <span>{label}</span>
                  <ArrowUpRight size={14} className="opacity-0 -translate-x-1.5 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-primary" />
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* ── Col 4: Admissions ── */}
        <motion.div variants={fadeUp2} className="md:col-span-4 lg:col-span-2">
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-primary font-oswald mb-4">
            Admissions
          </h3>
          <ul className="space-y-3 text-sm text-[#CCCCCC]/90 font-sans">
            {[
              { to: "/admissions/procedure", label: "How to Apply" },
              { to: "/admissions/eligibility", label: "Eligibility Criteria" },
              { to: "/admissions/scholarships", label: "Scholarships" },
              { to: "/contact", label: "Talk to an Advisor" },
            ].map(({ to, label }) => (
              <motion.li key={label} variants={listItem}>
                <Link
                  to={to}
                  className="group flex items-center justify-between hover:text-primary transition-colors py-0.5"
                >
                  <span>{label}</span>
                  <ArrowUpRight size={14} className="opacity-0 -translate-x-1.5 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-primary" />
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* ── Bottom Bar ── */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
        <div className="h-px w-full bg-white/10 dark:bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
          {/* Social icons: boxy asymmetrical shapes per MSAJCE design guidelines */}
          <div className="flex flex-wrap gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="group relative inline-flex h-10 w-10 overflow-hidden items-center justify-center rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-white/15 text-[#CCCCCC] transition-all hover:border-primary hover:text-white"
              >
                <span className="absolute inset-0 top-full bg-primary transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:top-0" />
                <Icon size={17} className="relative z-10 transition-colors duration-300 group-hover:text-primary-foreground" />
              </a>
            ))}
          </div>

          {/* Copyright & Legal */}
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8 text-xs font-medium uppercase tracking-widest text-white/50">
            <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
              <Link to="/about" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/about" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link to="/credits" className="hover:text-primary transition-colors">Credits</Link>
            </div>
            <p>&copy; {new Date().getFullYear()} MSAJCE. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
