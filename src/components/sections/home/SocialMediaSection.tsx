import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Youtube, Facebook, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/motion";

const EASE_APPLE = [0.16, 1, 0.3, 1] as const;

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com", handle: "@msajce_official" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", handle: "msajce-chennai" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com", handle: "MSAJCE Media" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com", handle: "msajceofficial" },
];

const galleryImages = [
  // Col 1: Tall Vertical
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800&q=80&auto=format&fit=crop",
    alt: "MSAJCE Campus Architecture & Greenery",
    caption: "Campus Life #MSAJCE",
    platform: "Instagram",
    colSpan: "col-span-1 lg:col-span-2 xl:col-span-2",
  },
  // Col 2: Two Stacked Images
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80&auto=format&fit=crop",
    alt: "Students Collaborating",
    caption: "Student Workshops",
    platform: "Instagram",
    colSpan: "col-span-1 lg:col-span-2 xl:col-span-2",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80&auto=format&fit=crop",
    alt: "Group Discussion in Library",
    caption: "Academic Excellence",
    platform: "LinkedIn",
    colSpan: "col-span-1 lg:col-span-2 xl:col-span-2",
  },
  // Col 3: Large Center Panoramic
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1562774053-701939374585?w=1000&q=80&auto=format&fit=crop",
    alt: "MSAJCE Main Academic Building & Campus Quad",
    caption: "Heart of MSAJCE",
    platform: "Facebook",
    colSpan: "col-span-1 lg:col-span-4 xl:col-span-4",
  },
  // Col 4: Two Stacked Images
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80&auto=format&fit=crop",
    alt: "Advanced Robotics & AI Lab",
    caption: "Innovation Lab",
    platform: "YouTube",
    colSpan: "col-span-1 lg:col-span-2 xl:col-span-2",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=600&q=80&auto=format&fit=crop",
    alt: "Cultural & Tech Fest",
    caption: "Campus Events 2026",
    platform: "Instagram",
    colSpan: "col-span-1 lg:col-span-2 xl:col-span-2",
  },
];

const collageGridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const collageItemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: EASE_APPLE,
    },
  },
};

export function SocialMediaSection() {
  return (
    <section 
      id="social-media" 
      className="relative z-10 w-full bg-page-bg border-b border-border py-16 md:py-24 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-16 flex flex-col items-center">
        
        {/* Header Block with Framer Motion blur & slide reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE_APPLE }}
          className="text-center max-w-2xl mx-auto mb-8"
        >
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-primary block mb-2">
            Connect With Us //
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-foreground font-normal mb-6">
            Explore <span className="font-bold text-primary font-oswald uppercase">#MSAJCE</span> on Social Media
          </h2>

          {/* Social Media Directory Button */}
          <div className="flex justify-center mb-8">
            <Link
              to="/social-media"
              className="group relative overflow-hidden inline-flex items-center justify-center border border-primary px-7 py-3 text-xs font-bold uppercase tracking-widest text-primary font-oswald transition-colors hover:text-white after:absolute after:inset-0 after:top-full after:bg-primary after:transition-all after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:top-0 rounded-xs shadow-xs"
            >
              <span className="relative z-10 flex items-center gap-2">
                Social Media Directory &raquo;
              </span>
            </Link>
          </div>

          {/* Quick Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2">
            {socialLinks.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-primary transition-colors font-sans"
                >
                  <Icon className="h-4 w-4 text-primary transition-transform group-hover:scale-110" />
                  <span>{s.handle}</span>
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Asymmetric Bounded Social Photo Collage with Staggered Framer Motion Scroll Reveal */}
        <motion.div 
          variants={collageGridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="w-full mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 md:gap-4 items-stretch"
        >
          
          {/* Item 1: Col 1 Tall */}
          <motion.div 
            variants={collageItemVariants}
            className="lg:col-span-3 aspect-[3/4] sm:aspect-auto lg:h-[360px] relative rounded-[2px] overflow-hidden border border-foreground/10 bg-muted group"
          >
            <img 
              src={galleryImages[0]!.src} 
              alt={galleryImages[0]!.alt} 
              loading="lazy" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
              <span className="text-[10px] font-mono uppercase tracking-widest bg-primary/90 px-2 py-0.5 rounded-xs self-start">
                {galleryImages[0]!.platform}
              </span>
              <span className="text-xs font-bold font-sans">
                {galleryImages[0]!.caption}
              </span>
            </div>
          </motion.div>

          {/* Item 2 & 3: Col 2 Stacked */}
          <motion.div 
            variants={collageItemVariants}
            className="lg:col-span-3 flex flex-col gap-3 md:gap-4 lg:h-[360px]"
          >
            <div className="flex-1 relative rounded-[2px] overflow-hidden border border-foreground/10 bg-muted group min-h-[170px]">
              <img 
                src={galleryImages[1]!.src} 
                alt={galleryImages[1]!.alt} 
                loading="lazy" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 text-white">
                <span className="text-xs font-bold font-sans">{galleryImages[1]!.caption}</span>
              </div>
            </div>
            <div className="flex-1 relative rounded-[2px] overflow-hidden border border-foreground/10 bg-muted group min-h-[170px]">
              <img 
                src={galleryImages[2]!.src} 
                alt={galleryImages[2]!.alt} 
                loading="lazy" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 text-white">
                <span className="text-xs font-bold font-sans">{galleryImages[2]!.caption}</span>
              </div>
            </div>
          </motion.div>

          {/* Item 4: Col 3 Panoramic Center */}
          <motion.div 
            variants={collageItemVariants}
            className="lg:col-span-3 aspect-[4/3] sm:aspect-auto lg:h-[360px] relative rounded-[2px] overflow-hidden border border-foreground/10 bg-muted group"
          >
            <img 
              src={galleryImages[3]!.src} 
              alt={galleryImages[3]!.alt} 
              loading="lazy" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
              <span className="text-[10px] font-mono uppercase tracking-widest bg-primary/90 px-2 py-0.5 rounded-xs self-start">
                {galleryImages[3]!.platform}
              </span>
              <span className="text-xs font-bold font-sans">{galleryImages[3]!.caption}</span>
            </div>
          </motion.div>

          {/* Item 5 & 6: Col 4 Stacked */}
          <motion.div 
            variants={collageItemVariants}
            className="lg:col-span-3 flex flex-col gap-3 md:gap-4 lg:h-[360px]"
          >
            <div className="flex-1 relative rounded-[2px] overflow-hidden border border-foreground/10 bg-muted group min-h-[170px]">
              <img 
                src={galleryImages[4]!.src} 
                alt={galleryImages[4]!.alt} 
                loading="lazy" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 text-white">
                <span className="text-xs font-bold font-sans">{galleryImages[4]!.caption}</span>
              </div>
            </div>
            <div className="flex-1 relative rounded-[2px] overflow-hidden border border-foreground/10 bg-muted group min-h-[170px]">
              <img 
                src={galleryImages[5]!.src} 
                alt={galleryImages[5]!.alt} 
                loading="lazy" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 text-white">
                <span className="text-xs font-bold font-sans">{galleryImages[5]!.caption}</span>
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
