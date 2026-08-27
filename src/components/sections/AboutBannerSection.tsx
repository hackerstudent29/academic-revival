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
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (window.innerWidth >= 1024) return;
        
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = cardRefs.current.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) setActiveFacility(idx);
          }
        });
      },
      {
        root: null, // use viewport to avoid ref timing issues
        threshold: 0.5,
      }
    );

    // Slight delay to ensure Framer Motion and React have fully mounted the DOM nodes
    const timer = setTimeout(() => {
      cardRefs.current.forEach((card) => {
        if (card) observer.observe(card);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="about" className="relative z-10 w-full bg-[#F0F4F8] dark:bg-[#1a1e24] min-h-[100svh] flex flex-col justify-center py-16 border-t border-b border-foreground/10">
      <div className="mx-auto grid w-full max-w-[1440px] px-6 md:px-12 grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        
        {/* Left: Dynamic editorial copy */}
        <Reveal variant="slide-right" className="flex flex-col justify-center lg:col-span-6 pr-0 md:pr-10 lg:pr-16 relative min-h-[450px]">
          <AnimatePresence mode="wait">
            {activeFacility === null ? (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full"
              >
                <div className="flex flex-col h-full justify-center lg:pr-12 py-8">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-8 h-[2px] bg-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground">The MSAJCE Edge</span>
                  </div>

                  <h2 className="text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] font-black uppercase leading-[0.85] tracking-tighter text-foreground mb-8">
                    BEYOND<br/>
                    <span className="text-primary">TRADITION.</span>
                  </h2>
                  
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md font-medium mb-12 border-l-[3px] border-primary pl-6">
                    We merge a 25-year legacy of academic excellence with relentless innovation. Welcome to the proving ground for tomorrow's engineering pioneers.
                  </p>

                  <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                    {[
                      { value: "25+", label: "Years of Legacy" },
                      { value: "90%", label: "Placement Rate" },
                      { value: "NAAC", label: "Accreditation" }
                    ].map((stat, i) => (
                      <div key={i} className="flex flex-col group">
                        <span className="text-6xl md:text-[5rem] font-black tracking-tighter text-foreground/10 group-hover:text-primary transition-colors duration-500 leading-none mb-3">{stat.value}</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-14">
                    <Link to="/about" className="group inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-foreground hover:text-primary transition-all">
                      <span className="w-12 h-[2px] bg-foreground group-hover:bg-primary transition-colors origin-left scale-x-100 group-hover:scale-x-150" />
                      Discover Our Story
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
                className="w-full flex flex-col justify-center h-full"
              >
                <div className="flex flex-col h-full justify-center lg:pr-12 py-8">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-8 h-[2px] bg-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground">Campus Facilities</span>
                  </div>

                  <h2 className="text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] font-black uppercase leading-[0.85] tracking-tighter text-foreground mb-8 break-words">
                    {campusFacilities[activeFacility]!.name}
                  </h2>
                  
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md font-medium mb-12 border-l-[3px] border-primary pl-6">
                    {campusFacilities[activeFacility]!.description}
                  </p>

                  <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                    {campusFacilities[activeFacility]!.stats.map((stat, i) => (
                      <div key={i} className="flex flex-col group">
                        <span className="text-6xl md:text-[5rem] font-black tracking-tighter text-foreground/10 group-hover:text-primary transition-colors duration-500 leading-none mb-3">{stat.value}</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground">{stat.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-14">
                    <Link to="/campus-life" className="group inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-foreground hover:text-primary transition-all">
                      <span className="w-12 h-[2px] bg-foreground group-hover:bg-primary transition-colors origin-left scale-x-100 group-hover:scale-x-150" />
                      Explore Facility
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>

        {/* Right: hover accordion image gallery */}
        <Reveal 
          variant="slide-left" 
          className="lg:col-span-6 h-[400px] lg:h-[65vh] lg:min-h-[600px]" 
        >
          <div
            ref={containerRef}
            className="flex h-full lg:items-stretch gap-4 lg:gap-2 max-lg:overflow-x-auto max-lg:snap-x max-lg:snap-mandatory max-lg:pb-4 scrollbar-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {campusFacilities.map((facility, idx) => (
              <div
                key={idx}
                ref={(el) => { cardRefs.current[idx] = el; }}
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
                
                {/* Dark Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-700 z-10 ${activeFacility === idx ? 'opacity-100' : 'opacity-0 lg:group-hover:opacity-100'}`} />
                
                {/* Unhovered Black Overlay */}
                <div className={`absolute inset-0 transition-opacity duration-700 z-10 ${activeFacility === idx ? 'bg-black/0 lg:bg-black/20' : 'bg-black/60'} lg:group-hover:bg-black/20 lg:group-hover:opacity-0`} />

                {/* Unhovered Vertical Text (Desktop only) */}
                <div className={`absolute inset-0 hidden lg:flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] z-20 overflow-hidden ${activeFacility === idx ? 'translate-y-8 opacity-0 pointer-events-none' : 'group-hover:translate-y-8 group-hover:opacity-0 group-hover:pointer-events-none'}`}>
                  <span className="flex text-white text-4xl md:text-5xl lg:text-[60px] leading-none font-black uppercase tracking-tighter [writing-mode:vertical-rl] -rotate-180 whitespace-nowrap">
                    {facility.name}
                  </span>
                </div>

                {/* Hovered Content (Name + Description) */}
                <div className={`absolute bottom-0 left-0 w-full lg:w-[300px] p-6 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-end pointer-events-none z-20 ${activeFacility === idx ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100'}`}>
                  <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tighter">{facility.name}</h3>
                  <p className="mt-2 text-xs md:text-sm text-white/90 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
