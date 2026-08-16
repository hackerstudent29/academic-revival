import { Link } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { Logo } from "@/components/Logo";

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

export function SiteFooter({ revealed = true }: { revealed?: boolean }) {
  return (
    <footer className="border-t border-foreground/12 bg-[#f5f5f7] dark:bg-[#111111]">
      <motion.div
        variants={footerContainerVariants}
        initial="hidden"
        animate={revealed ? "visible" : "hidden"}
        className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 md:grid-cols-4 md:px-12"
      >
        <motion.div variants={footerItemVariants} className="md:col-span-2">
          <svg className="h-20 w-auto text-foreground -ml-4" viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="30" width="500" height="1.5" fill="currentColor"/>
            <text x="30" y="95" fontFamily="Georgia, 'Times New Roman', serif" fontWeight="700" fontSize="52" fill="currentColor" letterSpacing="4">MSAJ<tspan fontSize="66">C</tspan>EA</text>
            <text x="34" y="130" fontFamily="Georgia, 'Times New Roman', serif" fontWeight="400" fontSize="20" fill="currentColor" letterSpacing="6">MOHAMED SATHAK A.J. COLLEGE</text>
            <text x="120" y="160" fontFamily="Georgia, 'Times New Roman', serif" fontWeight="400" fontSize="20" fill="currentColor" letterSpacing="6">OF ENGINEERING &amp; ARCHITECTURE</text>
          </svg>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/60">
            An autonomous-spirited engineering campus on Chennai's OMR IT corridor, affiliated to Anna
            University and approved by AICTE, New Delhi.
          </p>
          <div className="mt-8 space-y-3 text-sm text-foreground/60">
            <p className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              OMR IT Corridor, Chennai, Tamil Nadu 603103
            </p>
            <p className="flex items-center gap-3">
              <Phone size={16} /> +91 44 2747 0000
            </p>
            <p className="flex items-center gap-3">
              <Mail size={16} /> admissions@msajce.edu.in
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-2.5">
            {socials.map(({ label, href, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                variants={footerItemVariants}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex h-10 w-10 overflow-hidden items-center justify-center rounded-full border border-foreground/15 text-foreground/70 transition-colors hover:border-primary"
              >
                <span className="absolute inset-0 top-full bg-primary transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:top-0" />
                <Icon size={17} className="relative z-10 transition-colors duration-300 group-hover:text-primary-foreground" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={footerItemVariants}>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm text-foreground/60">
            <li><Link to="/about" className="hover:text-foreground">About the College</Link></li>
            <li><Link to="/academics" className="hover:text-foreground">Academic Programmes</Link></li>
            <li><Link to="/placements" className="hover:text-foreground">Placements</Link></li>
            <li><Link to="/campus-life" className="hover:text-foreground">Campus Life</Link></li>
          </ul>
        </motion.div>

        <motion.div variants={footerItemVariants}>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">Admissions</h3>
          <ul className="mt-5 space-y-3 text-sm text-foreground/60">
            <li><Link to="/admissions" className="hover:text-foreground">How to Apply</Link></li>
            <li><Link to="/admissions" className="hover:text-foreground">Eligibility</Link></li>
            <li><Link to="/admissions" className="hover:text-foreground">Scholarships</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Talk to Us</Link></li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        variants={footerItemVariants}
        initial="hidden"
        animate={revealed ? "visible" : "hidden"}
        className="border-t border-foreground/12 px-6 py-6 text-center text-xs uppercase tracking-[0.16em] text-foreground/40 md:px-12"
      >
        &copy; {new Date().getFullYear()} MSAJCE. All rights reserved.
      </motion.div>
    </footer>
  );
}
