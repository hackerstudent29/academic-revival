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
    <footer className="border-t border-foreground/12 bg-background">
      <motion.div
        variants={footerContainerVariants}
        initial="hidden"
        animate={revealed ? "visible" : "hidden"}
        className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 md:grid-cols-4 md:px-12"
      >
        <motion.div variants={footerItemVariants} className="md:col-span-2">
          <Logo className="h-12" />
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
                whileHover={{ y: -3, scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 380, damping: 18 }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 text-foreground/70 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Icon size={17} />
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
