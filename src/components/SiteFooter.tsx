import { Link } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const footerContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const footerItemVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 120, damping: 20, mass: 0.9 },
  },
};

const socials = [
  { label: "Instagram", href: "https://instagram.com", Icon: Instagram },
  { label: "Facebook", href: "https://facebook.com", Icon: Facebook },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Linkedin },
  { label: "X", href: "https://x.com", Icon: Twitter },
  { label: "YouTube", href: "https://youtube.com", Icon: Youtube },
];

export function SiteFooter() {
  const footerRef = useRef<HTMLElement>(null);
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    if (!footerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      const height = entries[0].contentRect.height;
      setFooterHeight(height);
      document.documentElement.style.setProperty('--footer-height', `${height}px`);
    });
    observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="relative w-full bg-foreground"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div 
        className="relative w-full h-auto lg:h-[calc(100vh+var(--footer-height))] lg:mt-[-100vh]"
      >
        <div 
          className="w-full relative lg:sticky lg:top-[calc(100vh-var(--footer-height))] lg:h-[var(--footer-height)]"
        >
          <footer 
            ref={footerRef} 
            className="w-full bg-foreground text-background"
          >
            <motion.div
              variants={footerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 md:grid-cols-12 md:gap-8 md:px-12 lg:px-16 lg:py-24"
            >
              {/* Column 1: Brand & Contact (Spans 4 columns on desktop) */}
              <motion.div variants={footerItemVariants} className="md:col-span-12 lg:col-span-5">
                <svg className="h-24 w-auto text-background -ml-4" viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
                  <rect x="30" y="30" width="500" height="1.5" fill="currentColor"/>
                  <text x="30" y="95" fontFamily="Georgia, 'Times New Roman', serif" fontWeight="700" fontSize="52" fill="currentColor" letterSpacing="4">MSAJ<tspan fontSize="66">C</tspan>EA</text>
                  <text x="34" y="130" fontFamily="Georgia, 'Times New Roman', serif" fontWeight="400" fontSize="20" fill="currentColor" letterSpacing="6">MOHAMED SATHAK A.J. COLLEGE</text>
                  <text x="120" y="160" fontFamily="Georgia, 'Times New Roman', serif" fontWeight="400" fontSize="20" fill="currentColor" letterSpacing="6">OF ENGINEERING &amp; ARCHITECTURE</text>
                </svg>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-background/60">
                  An autonomous-spirited engineering campus on Chennai's OMR IT corridor. Empowering the next generation of innovators with industry-aligned education, cutting-edge facilities, and global perspectives.
                </p>
                <div className="mt-10 space-y-4 text-sm text-background/80 flex flex-col items-start">
                  <a href="https://maps.google.com/?q=Mohamed+Sathak+A.J.+College+of+Engineering" target="_blank" rel="noreferrer" className="group flex items-start gap-4 hover:text-primary transition-colors">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-background/50 group-hover:text-primary transition-colors" />
                    <span className="leading-relaxed">
                      34, Rajiv Gandhi Salai (OMR),<br />
                      IT Highway, Siruseri, Egattur,<br />
                      Chennai, Tamil Nadu 603103
                    </span>
                  </a>
                  <div className="flex items-center gap-4">
                    <Phone size={18} className="text-background/50" /> 
                    <span className="flex items-center gap-1.5">
                      <a href="tel:+914427470000" className="hover:text-primary transition-colors">+91 44 2747 0000</a>
                      <span className="text-background/30">/</span>
                      <a href="tel:+914427470001" className="hover:text-primary transition-colors">+91 44 2747 0001</a>
                    </span>
                  </div>
                  <a href="mailto:admissions@msajce.edu.in" className="group flex items-center gap-4 hover:text-primary transition-colors">
                    <Mail size={18} className="text-background/50 group-hover:text-primary transition-colors" /> 
                    <span>admissions@msajce.edu.in</span>
                  </a>
                </div>
              </motion.div>

              {/* Column 2: Academics (Spans 2 columns) */}
              <motion.div variants={footerItemVariants} className="md:col-span-4 lg:col-span-2 lg:col-start-7">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-background/50">Academics</h3>
                <ul className="mt-8 space-y-4 text-sm text-background/80">
                  <li><Link to="/academics/msajce_cse" className="group flex items-center justify-between hover:text-primary transition-colors">B.E. CSE <ArrowUpRight size={14} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" /></Link></li>
                  <li><Link to="/academics/msajce_ece" className="group flex items-center justify-between hover:text-primary transition-colors">B.E. ECE <ArrowUpRight size={14} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" /></Link></li>
                  <li><Link to="/academics/msajce_it" className="group flex items-center justify-between hover:text-primary transition-colors">B.Tech IT <ArrowUpRight size={14} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" /></Link></li>
                  <li><Link to="/academics/msajce_aids" className="group flex items-center justify-between hover:text-primary transition-colors">B.Tech AI & DS <ArrowUpRight size={14} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" /></Link></li>
                  <li><Link to="/academics/msajce_mech" className="group flex items-center justify-between hover:text-primary transition-colors">B.E. Mechanical <ArrowUpRight size={14} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" /></Link></li>
                  <li><Link to="/academics" className="mt-4 inline-block text-[11px] font-bold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors">View All Programs &rarr;</Link></li>
                </ul>
              </motion.div>

              {/* Column 3: Quick Links (Spans 2 columns) */}
              <motion.div variants={footerItemVariants} className="md:col-span-4 lg:col-span-2">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-background/50">Quick Links</h3>
                <ul className="mt-8 space-y-4 text-sm text-background/80">
                  <li><Link to="/about" className="group flex items-center justify-between hover:text-primary transition-colors">About the College <ArrowUpRight size={14} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" /></Link></li>
                  <li><Link to="/placements" className="group flex items-center justify-between hover:text-primary transition-colors">Placements & Career <ArrowUpRight size={14} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" /></Link></li>
                  <li><Link to="/campus-life" className="group flex items-center justify-between hover:text-primary transition-colors">Campus Life <ArrowUpRight size={14} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" /></Link></li>
                  <li><Link to="/" className="group flex items-center justify-between hover:text-primary transition-colors">Governance <ArrowUpRight size={14} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" /></Link></li>
                  <li><Link to="/" className="group flex items-center justify-between hover:text-primary transition-colors">Alumni Network <ArrowUpRight size={14} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" /></Link></li>
                </ul>
              </motion.div>

              {/* Column 4: Admissions (Spans 2 columns) */}
              <motion.div variants={footerItemVariants} className="md:col-span-4 lg:col-span-2">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-background/50">Admissions</h3>
                <ul className="mt-8 space-y-4 text-sm text-background/80">
                  <li><Link to="/admissions" className="group flex items-center justify-between hover:text-primary transition-colors">How to Apply <ArrowUpRight size={14} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" /></Link></li>
                  <li><Link to="/admissions" className="group flex items-center justify-between hover:text-primary transition-colors">Eligibility Criteria <ArrowUpRight size={14} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" /></Link></li>
                  <li><Link to="/admissions" className="group flex items-center justify-between hover:text-primary transition-colors">Scholarships <ArrowUpRight size={14} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" /></Link></li>
                  <li><Link to="/contact" className="group flex items-center justify-between hover:text-primary transition-colors">Talk to an Advisor <ArrowUpRight size={14} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" /></Link></li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Bottom Bar */}
            <motion.div
              variants={footerItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-6 border-t border-background/10 px-6 py-8 md:flex-row md:px-12 lg:px-16"
            >
              <div className="flex flex-wrap gap-4">
                {socials.map(({ label, href, Icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex h-10 w-10 overflow-hidden items-center justify-center rounded-full border border-background/15 text-background/70 transition-colors hover:border-primary"
                  >
                    <span className="absolute inset-0 top-full bg-primary transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:top-0" />
                    <Icon size={17} className="relative z-10 transition-colors duration-300 group-hover:text-primary-foreground" />
                  </motion.a>
                ))}
              </div>

              <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8 text-xs font-medium uppercase tracking-widest text-background/40">
                <div className="flex gap-6">
                  <Link to="/" className="hover:text-primary transition-colors">Privacy Policy</Link>
                  <Link to="/" className="hover:text-primary transition-colors">Terms of Service</Link>
                </div>
                <p>&copy; {new Date().getFullYear()} MSAJCE. All rights reserved.</p>
              </div>
            </motion.div>
          </footer>
        </div>
      </div>
    </div>
  );
}
