import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const campusFacilities = [
  {
    name: "Library",
    description: "A vast collection of over 50,000 volumes, digital resources, and quiet study spaces.",
    src: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=800&auto=format&fit=crop",
    stats: [
      { value: "50K+", label: "Volumes" },
      { value: "24/7", label: "Digital Access" },
      { value: "500", label: "Seating" }
    ]
  },
  {
    name: "Hostel",
    description: "Comfortable, secure, and vibrant residential facilities for a home away from home.",
    src: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop",
    stats: [
      { value: "1200", label: "Capacity" },
      { value: "WiFi", label: "Enabled" },
      { value: "100%", label: "Secure" }
    ]
  },
  {
    name: "Sports",
    description: "State-of-the-art indoor and outdoor sports complexes for athletic excellence.",
    src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
    stats: [
      { value: "5+", label: "Courts" },
      { value: "400m", label: "Track" },
      { value: "Gym", label: "Equipped" }
    ]
  },
  {
    name: "Labs",
    description: "Cutting-edge laboratories equipped with the latest technology for practical learning.",
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    stats: [
      { value: "DST", label: "Sponsored" },
      { value: "IDEA", label: "AICTE Lab" },
      { value: "24h", label: "Access" }
    ]
  },
  {
    name: "Transport",
    description: "A dedicated fleet of buses ensuring safe and seamless connectivity across the city.",
    src: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=800&auto=format&fit=crop",
    stats: [
      { value: "40+", label: "Buses" },
      { value: "50km", label: "Radius" },
      { value: "GPS", label: "Tracked" }
    ]
  },
  {
    name: "Auditorium",
    description: "A 1000-seater modern auditorium hosting global conferences and cultural fests.",
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop",
    stats: [
      { value: "1000", label: "Seats" },
      { value: "AC", label: "Centralized" },
      { value: "A/V", label: "Advanced" }
    ]
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
  }
};

export function AboutBannerSection() {
  const getSpan = (idx: number) => {
    if (idx === 0) return "md:row-span-2";
    if (idx === 1) return "md:row-span-1";
    if (idx === 2) return "md:row-span-1";
    if (idx === 3) return "md:row-span-2";
    if (idx === 4) return "md:row-span-2";
    if (idx === 5) return "md:row-span-1";
    return "md:row-span-1";
  };

  return (
    <section id="about" className="relative z-10 w-full bg-[#EDEDED] dark:bg-[#131313] min-h-[100svh] flex flex-col justify-center py-16 border-t border-b border-foreground/10 overflow-hidden">
      {/* Clean, Cool Minimalist Background - Removed overlapping panels from directly behind the grid to preserve the tab illusion */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deep offset plane - moved further out */}
        <div className="absolute top-[-40%] right-[-20%] w-[120%] lg:w-[100%] h-[85%] bg-[#E0E2E5] dark:bg-white/[0.03] rounded-bl-[100px] lg:rounded-bl-[200px] -rotate-6 origin-top-right" />

        {/* Subtle accent panel at the bottom left */}
        <div className="absolute bottom-[-20%] left-[-20%] w-[50%] h-[40%] bg-[#E6E8EA] dark:bg-white/[0.02] rounded-tr-[100px] lg:rounded-tr-[150px] rotate-3 origin-bottom-left" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col gap-12 lg:gap-16">

        {/* Minimal & Short Title Block */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65, ease: [0.215, 0.61, 0.355, 1] }}
          className="w-full flex flex-col pt-8"
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[2px] bg-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground">The MSAJCE Edge</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-foreground leading-none">
              CAMPUS FACILITIES.
            </h2>
          </div>
        </motion.div>

        {/* Masonry Layout Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 auto-rows-[250px]"
        >
          {campusFacilities.map((facility, idx) => {
            return (
              <motion.div
                variants={cardVariants}
                key={idx}
                className={`group relative overflow-hidden bg-muted transition-all duration-500 rounded-3xl ${getSpan(idx)}`}
              >
                <img
                  src={facility.src}
                  alt={facility.name}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:blur-md"
                />

                {/* Folder Tab UI (Matches section background to create the physical cutout illusion) */}
                <div className="absolute top-0 left-0 bg-background rounded-tl-3xl rounded-br-[24px] px-5 py-3.5 z-20 flex items-center transition-colors duration-500">
                  <span className="text-sm font-bold text-foreground group-hover:text-primary tracking-wide transition-colors duration-500">{facility.name}</span>
                  
                  {/* Sliding Arrow */}
                  <div className="flex items-center overflow-hidden max-w-0 opacity-0 group-hover:max-w-[24px] group-hover:opacity-100 group-hover:ml-2 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                    <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                  </div>
                  
                  {/* Outer Curve - Right */}
                  <svg width="24" height="24" viewBox="0 0 24 24" className="absolute top-0 -right-[23px] fill-background transition-colors duration-500">
                    <path d="M 0 0 L 24 0 A 24 24 0 0 0 0 24 Z" />
                  </svg>

                  {/* Outer Curve - Bottom */}
                  <svg width="24" height="24" viewBox="0 0 24 24" className="absolute -bottom-[23px] left-0 fill-background transition-colors duration-500">
                    <path d="M 0 0 L 24 0 A 24 24 0 0 0 0 24 Z" />
                  </svg>
                </div>

                {/* Hover overlay that dims the image slightly to reveal text (blur handles most of the readability) */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                {/* Content Overlay - Hidden by default, slides up on hover */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-8 group-hover:translate-y-0 z-20">
                  <p className="text-sm text-white/90 font-medium mb-4 line-clamp-3">
                    {facility.description}
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 border-t border-white/20 pt-4">
                    {facility.stats.map((stat, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-lg font-bold text-white leading-none mb-1">{stat.value}</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-white/70">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
