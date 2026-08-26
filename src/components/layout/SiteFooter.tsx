import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Smooth settle ease — used everywhere
const E: [number,number,number,number] = [0.16, 1, 0.3, 1];

// Variants: NO transition inside — full transition passed via prop so delay+duration+ease all work together
const fadeUp  = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const fadeUp2 = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };
const fadeUp3 = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } };
const fadeIn  = { hidden: { opacity: 0 },         visible: { opacity: 1 } };
const scaleIn = {
  hidden: { opacity: 0, scale: 0.78 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 280, damping: 18 } },
};
const lineGrow = {
  hidden:   { scaleX: 0 },
  visible:  { scaleX: 1 },
};

// Stagger container — children inherit timing from this, plus their own transition for duration/ease
const stagger = (delay: number, staggerBy: number = 0.055) => ({
  hidden: {},
  visible: { transition: { delayChildren: delay, staggerChildren: staggerBy } },
});

// Children of stagger lists: duration+ease live here (delay comes from stagger parent)
const listItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: E } },
};

const t = (duration: number, delay: number) => ({ duration, ease: E, delay });

const socials = [
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { label: "Facebook",  href: "https://facebook.com",  Icon: Facebook  },
  { label: "LinkedIn",  href: "https://linkedin.com",  Icon: Linkedin  },
  { label: "X",         href: "https://x.com",         Icon: Twitter   },
  { label: "YouTube",   href: "https://youtube.com",   Icon: Youtube   },
];

export function SiteFooter() {
  const footerRef   = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);
  const [on, setOn] = useState(false);

  // Toggle on/off as user scrolls in and out of footer range
  useEffect(() => {
    const check = () => {
      const scrollBottom = window.scrollY + window.innerHeight;
      const docHeight    = document.documentElement.scrollHeight;
      const threshold    = footerHeight > 0 ? footerHeight * 0.85 : 450;
      const inView = docHeight - scrollBottom < threshold;
      setOn(inView);
    };
    window.addEventListener("scroll", check, { passive: true });
    check();
    return () => window.removeEventListener("scroll", check);
  }, [footerHeight]);

  useEffect(() => {
    if (!footerRef.current) return;
    const ro = new ResizeObserver((entries) => {
      const h = entries[0].contentRect.height;
      setFooterHeight(h);
      document.documentElement.style.setProperty("--footer-height", `${h}px`);
    });
    ro.observe(footerRef.current);
    return () => ro.disconnect();
  }, []);

  const a = on ? "visible" : "hidden";

  return (
    <div className="relative w-full bg-[#222222]" style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <div ref={containerRef} className="relative w-full h-auto lg:h-[calc(100vh+var(--footer-height))] lg:mt-[-100vh]">
        <div className="w-full relative lg:sticky lg:top-[calc(100vh-var(--footer-height))] lg:h-[var(--footer-height)]">
          <footer ref={footerRef} className="w-full bg-[#222222] text-[#CCCCCC] relative overflow-hidden">

            {/* ── 1. Watermark: scale 1.08→1 + fade, fires first ── */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={on ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.08 }}
              transition={{ duration: 1.2, ease: E }}
            >
              <span className="text-[20vw] font-black text-primary/[0.12] uppercase leading-none tracking-tighter">MSAJCEA</span>
            </motion.div>

            {/* ── Main grid ── */}
            <div className="relative z-10 mx-auto grid max-w-[1440px] gap-12 px-6 py-16 md:grid-cols-12 md:gap-8 md:px-12 lg:px-16 lg:py-24">

              {/* ── Col 1: Brand ── */}
              <div className="md:col-span-12 lg:col-span-4">

                {/* ── 2. Logo block: slide up 0.1s ── */}
                <motion.div variants={fadeUp} initial="hidden" animate={a} transition={t(0.6, 0.1)}>
                  <svg className="h-24 w-auto text-white -ml-4" viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
                    {/* ── SVG divider line draws left→right ── */}
                    <motion.rect x="30" y="30" width="500" height="1.5" fill="currentColor"
                      initial={{ scaleX: 0 }} animate={on ? { scaleX: 1 } : { scaleX: 0 }}
                      style={{ transformOrigin: "30px 30px" }}
                      transition={t(0.75, 0.2)}
                    />
                    <text x="30" y="95" fontFamily="Georgia,'Times New Roman',serif" fontWeight="700" fontSize="52" fill="currentColor" letterSpacing="4">MSAJ<tspan fontSize="66">C</tspan>EA</text>
                    <text x="34" y="130" fontFamily="Georgia,'Times New Roman',serif" fontWeight="400" fontSize="20" fill="currentColor" letterSpacing="6">MOHAMED SATHAK A.J. COLLEGE</text>
                    <text x="120" y="160" fontFamily="Georgia,'Times New Roman',serif" fontWeight="400" fontSize="20" fill="currentColor" letterSpacing="6">OF ENGINEERING &amp; ARCHITECTURE</text>
                  </svg>
                </motion.div>

                <motion.p className="mt-6 max-w-md text-sm leading-relaxed text-[#CCCCCC]/75"
                  variants={fadeUp} initial="hidden" animate={a} transition={t(0.6, 0.2)}>
                  An autonomous-spirited engineering campus on Chennai's OMR IT corridor. Empowering the next generation of innovators with industry-aligned education, cutting-edge facilities, and global perspectives.
                </motion.p>

                {/* ── 3. Contact rows: stagger 90ms ── */}
                <div className="mt-10 flex flex-col items-start gap-4 text-sm text-[#CCCCCC]">
                  <motion.a href="https://maps.google.com/?q=Mohamed+Sathak+A.J.+College+of+Engineering"
                    target="_blank" rel="noreferrer"
                    className="group flex items-start gap-4 hover:text-primary transition-colors"
                    variants={fadeUp2} initial="hidden" animate={a} transition={t(0.55, 0.28)}>
                    <MapPin size={18} className="mt-0.5 shrink-0 text-white/40 group-hover:text-primary transition-colors" />
                    <span className="leading-relaxed">34, Rajiv Gandhi Salai (OMR),<br />IT Highway, Siruseri, Egattur,<br />Chennai, Tamil Nadu 603103</span>
                  </motion.a>

                  <motion.div className="flex items-center gap-4"
                    variants={fadeUp2} initial="hidden" animate={a} transition={t(0.55, 0.37)}>
                    <Phone size={18} className="text-white/40" />
                    <span className="flex items-center gap-1.5">
                      <a href="tel:+914427470000" className="hover:text-primary transition-colors">+91 44 2747 0000</a>
                      <span className="text-white/20">/</span>
                      <a href="tel:+914427470001" className="hover:text-primary transition-colors">+91 44 2747 0001</a>
                    </span>
                  </motion.div>

                  <motion.a href="mailto:admissions@msajce.edu.in"
                    className="group flex items-center gap-4 hover:text-primary transition-colors"
                    variants={fadeUp2} initial="hidden" animate={a} transition={t(0.55, 0.46)}>
                    <Mail size={18} className="text-white/40 group-hover:text-primary transition-colors" />
                    <span>admissions@msajce.edu.in</span>
                  </motion.a>
                </div>
              </div>



              {/* ── Col 3: Governance ── */}
              <div className="md:col-span-4 lg:col-span-2 lg:col-start-5">
                <motion.h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white"
                  variants={fadeUp} initial="hidden" animate={a} transition={t(0.5, 0.20)}>
                  Governance
                </motion.h3>
                <motion.ul className="mt-8 space-y-4 text-sm text-[#CCCCCC]"
                  initial="hidden" animate={a} variants={stagger(0.27)}>
                  {[
                    { to: "/about", hash: "leadership", label: "Governing Council" },
                    { to: "/about", hash: "leadership", label: "Planning & Monitoring Board" },
                    { to: "/about", hash: "leadership", label: "Academic Advisory Board" },
                    { to: "/about", hash: "leadership", label: "Governance Structure" },
                  ].map(({ to, hash, label }) => (
                    <motion.li key={label} variants={listItem}>
                      <Link to={to} hash={hash} className="group flex items-center justify-between hover:text-primary transition-colors">
                        {label}
                        <ArrowUpRight size={14} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              {/* ── Col 4: Quick Links — 100ms diagonal offset ── */}
              <div className="md:col-span-4 lg:col-span-2">
                <motion.h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white"
                  variants={fadeUp} initial="hidden" animate={a} transition={t(0.5, 0.25)}>
                  Quick Links
                </motion.h3>
                <motion.ul className="mt-8 space-y-4 text-sm text-[#CCCCCC]"
                  initial="hidden" animate={a} variants={stagger(0.32)}>
                  {[
                    { to: "/about",        label: "About the College" },
                    { to: "/placements",   label: "Placements & Career" },
                    { to: "/campus-life",  label: "Campus Life" },
                    { to: "/campus-life",  label: "Alumni Network" },
                  ].map(({ to, label }) => (
                    <motion.li key={label} variants={listItem}>
                      <Link to={to} className="group flex items-center justify-between hover:text-primary transition-colors">
                        {label}
                        <ArrowUpRight size={14} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              {/* ── Col 4: Admissions — another 100ms offset ── */}
              <div className="md:col-span-4 lg:col-span-2">
                <motion.h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white"
                  variants={fadeUp} initial="hidden" animate={a} transition={t(0.5, 0.35)}>
                  Admissions
                </motion.h3>
                <motion.ul className="mt-8 space-y-4 text-sm text-[#CCCCCC]"
                  initial="hidden" animate={a} variants={stagger(0.42)}>
                  {[
                    { to: "/admissions", label: "How to Apply" },
                    { to: "/admissions", label: "Eligibility Criteria" },
                    { to: "/admissions", label: "Scholarships" },
                    { to: "/contact",    label: "Talk to an Advisor" },
                  ].map(({ to, label }) => (
                    <motion.li key={label} variants={listItem}>
                      <Link to={to} className="group flex items-center justify-between hover:text-primary transition-colors">
                        {label}
                        <ArrowUpRight size={14} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>

            {/* ── 7. Bottom Bar ── */}
            <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-12 lg:px-16">
              {/* Divider line draws left→right */}
              <motion.div className="h-px w-full bg-white/10" style={{ transformOrigin: "left" }}
                variants={lineGrow} initial="hidden" animate={a} transition={t(0.75, 0.52)} />

              <div className="flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
                {/* Social icons: scale bounce, 60ms stagger */}
                <motion.div className="flex flex-wrap gap-4"
                  initial="hidden" animate={a} variants={stagger(0.62, 0.065)}>
                  {socials.map(({ label, href, Icon }) => (
                    <motion.a key={label} href={href} target="_blank" rel="noreferrer noopener" aria-label={label}
                      variants={scaleIn} whileTap={{ scale: 0.92 }}
                      className="group relative inline-flex h-10 w-10 overflow-hidden items-center justify-center rounded-full border border-white/15 text-[#CCCCCC] transition-colors hover:border-primary">
                      <span className="absolute inset-0 top-full bg-primary transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:top-0" />
                      <Icon size={17} className="relative z-10 transition-colors duration-300 group-hover:text-primary-foreground" />
                    </motion.a>
                  ))}
                </motion.div>

                {/* Copyright: fade only, fires last */}
                <motion.div className="flex flex-col items-center gap-4 md:flex-row md:gap-8 text-xs font-medium uppercase tracking-widest text-white/40"
                  variants={fadeIn} initial="hidden" animate={a} transition={t(0.55, 1.1)}>
                  <div className="flex gap-6">
                    <Link to="/" className="hover:text-primary transition-colors">Privacy Policy</Link>
                    <Link to="/" className="hover:text-primary transition-colors">Terms of Service</Link>
                  </div>
                  <p>&copy; {new Date().getFullYear()} MSAJCE. All rights reserved.</p>
                </motion.div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
