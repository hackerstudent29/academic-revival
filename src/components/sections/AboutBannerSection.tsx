import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion";
import { useState } from "react";
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
    src: "https://images.unsplash.com/photo-1510511233900-1982d92bd21f?q=80&w=800&auto=format&fit=crop",
    stats: [
      { value: "1000", label: "Seats" },
      { value: "AC", label: "Centralized" },
      { value: "A/V", label: "Advanced" }
    ]
  }
];

export function AboutBannerSection() {
  const [activeFacility, setActiveFacility] = useState<number | null>(null);

  return (
    <section id="about" className="relative z-10 w-full bg-[#F0F4F8] dark:bg-[#1a1e24] min-h-[100svh] flex flex-col justify-center py-16 border-t border-b border-foreground/10">
      <div className="mx-auto grid w-full max-w-[1440px] px-6 md:px-12 grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        
        {/* Left: Dynamic editorial copy */}
        <Reveal variant="slide-right" className="flex flex-col justify-center lg:col-span-6 pr-0 md:pr-10 lg:pr-16 relative min-h-[450px]">
          <div className="mb-12 flex items-center gap-4">
            <div className="h-px w-8 bg-foreground/30" />
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-foreground/60 transition-all duration-300">
              {activeFacility !== null ? "Campus Facilities" : "The MSAJCE Edge"}
            </span>
          </div>

          <AnimatePresence mode="wait">
            {activeFacility === null ? (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <div className="flex flex-col h-full justify-center">
                  <div className="mb-8 pr-4">
                    <EditableText 
                      page="home" 
                      field="about.quote" 
                      as="blockquote"
                      defaultValue={`"We don't just teach engineering. We build the people who will <span class="italic font-normal text-primary">rebuild it.</span>"`}
                      className="text-[2rem] md:text-[2.5rem] lg:text-[2.75rem] font-medium leading-[1.15] tracking-tight text-foreground mb-6"
                    />
                    <div className="flex flex-col gap-1">
                      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">Dr. M. S. A. J.</span>
                      <span className="text-[11px] font-mono uppercase tracking-[0.15em] text-muted-foreground">Principal & Dean of Engineering</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 md:gap-10 mb-8 border-t border-border/50 pt-8">
                    <div className="flex flex-col gap-1">
                      <span className="text-2xl md:text-3xl font-black tracking-tight text-foreground leading-none">25+</span>
                      <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-muted-foreground">Years Legacy</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-2xl md:text-3xl font-black tracking-tight text-foreground leading-none">90%</span>
                      <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-muted-foreground">Placement</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-2xl md:text-3xl font-black tracking-tight text-foreground leading-none">NAAC</span>
                      <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-muted-foreground">Certified</span>
                    </div>
                  </div>

                  <div>
                    <Link
                      to="/about"
                      className="group flex w-fit items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                    >
                      — Read Message
                      <ArrowRight className="h-3 w-3 opacity-70 transition-transform group-hover:translate-x-1 group-hover:opacity-100" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={`facility-${activeFacility}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="w-full flex flex-col justify-center"
              >
                <div className="flex flex-col h-full justify-center">
                  <div className="mb-8 pr-4">
                    <h2 className="text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-black leading-[0.9] tracking-tighter text-foreground mb-4">
                      {campusFacilities[activeFacility].name}
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-[85%] leading-relaxed">
                      {campusFacilities[activeFacility].description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-6 md:gap-10 mb-8 border-t border-border/50 pt-8">
                    {campusFacilities[activeFacility].stats.map((stat, i) => (
                      <div key={i} className="flex flex-col gap-1">
                        <span className="text-2xl md:text-3xl font-black tracking-tight text-foreground leading-none">{stat.value}</span>
                        <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-muted-foreground">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <Link
                      to="/campus-life"
                      className="group flex w-fit items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase text-primary hover:text-primary/80 transition-colors"
                    >
                      — Explore {campusFacilities[activeFacility].name}
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>

        {/* Right: hover accordion image gallery */}
        <Reveal variant="slide-left" className="flex lg:items-stretch gap-4 lg:gap-2 lg:col-span-6 h-[400px] lg:h-[65vh] lg:min-h-[600px] max-lg:overflow-x-auto max-lg:snap-x max-lg:snap-mandatory max-lg:pb-4 scrollbar-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {campusFacilities.map((facility, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveFacility(idx)}
              onMouseLeave={() => setActiveFacility(null)}
              onClick={() => setActiveFacility(idx)}
              className="group relative h-full flex-1 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hover:flex-[15] border border-border cursor-pointer rounded-sm max-lg:min-w-[280px] max-lg:snap-center"
            >
              <img
                className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-700"
                src={facility.src}
                alt={facility.name}
              />
              
              {/* Hover Dark Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 z-10" />
              
              {/* Unhovered Black Overlay */}
              <div className="absolute inset-0 bg-black/60 transition-opacity duration-700 group-hover:opacity-0 z-10" />

              {/* Unhovered Vertical Text */}
              <div className="absolute inset-0 hidden lg:flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-8 group-hover:opacity-0 group-hover:pointer-events-none z-20 overflow-hidden">
                <span className="flex text-white text-4xl md:text-5xl lg:text-[60px] leading-none font-black uppercase tracking-tighter [writing-mode:vertical-rl] -rotate-180 whitespace-nowrap">
                  {facility.name}
                </span>
              </div>

              {/* Hovered Content (Name + Description) */}
              <div className="absolute bottom-0 left-0 w-full lg:w-[300px] p-6 lg:translate-y-8 lg:opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:group-hover:translate-y-0 lg:group-hover:opacity-100 flex flex-col justify-end pointer-events-none z-20">
                <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tighter">{facility.name}</h3>
                <p className="mt-2 text-xs md:text-sm text-white/90 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
