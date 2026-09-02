import { Reveal } from "@/components/motion";
import { motion } from "framer-motion";

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
  return (
    <section id="about" className="relative z-10 w-full bg-background min-h-[100svh] flex flex-col justify-center py-16 border-b border-border overflow-hidden">
      {/* Clean, Cool Minimalist Background - Layered Floating Panels */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deep offset plane */}
        <div className="absolute top-[-30%] right-[-10%] w-[120%] lg:w-[100%] h-[85%] bg-muted/30 dark:bg-white/[0.03] rounded-bl-[100px] lg:rounded-bl-[200px] -rotate-6 origin-top-right" />
        
        {/* Clean primary overlapping plane */}
        <div className="absolute top-[-20%] right-[-5%] w-[120%] lg:w-[95%] h-[80%] bg-muted/20 dark:bg-white/[0.02] rounded-bl-[100px] lg:rounded-bl-[200px] -rotate-6 origin-top-right" />
        
        {/* Subtle accent panel at the bottom left */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[40%] bg-muted/20 dark:bg-white/[0.02] rounded-tr-[100px] lg:rounded-tr-[150px] rotate-3 origin-bottom-left" />
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
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-primary leading-none">
              CAMPUS FACILITIES.
            </h2>
          </div>
        </motion.div>

        {/* Highly Structured 3x2 Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2 auto-rows-[250px] md:auto-rows-[300px]"
        >
          {campusFacilities.map((facility, idx) => {
            return (
              <motion.div 
                variants={cardVariants}
                key={idx}
                className="group relative rounded-[2px] overflow-hidden bg-muted shadow-sm hover:shadow-lg transition-all duration-500 border border-border/50"
              >
                <img 
                  src={facility.src} 
                  alt={facility.name} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Always-on bottom gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                {/* Hover overlay that dims the image slightly */}
                <div className="absolute inset-0 bg-[#004b87]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-2">
                      {facility.name}
                    </h3>
                    
                    <div className="overflow-hidden h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 ease-[cubic-bezier(0.22,1,0.36,1)]">
                      <p className="text-sm text-white/90 font-medium mb-4 line-clamp-2 md:line-clamp-none">
                        {facility.description}
                      </p>
                      
                      {/* Hide stats on smallest square cards to prevent overflow */}
                      {(idx !== 2 && idx !== 3) && (
                        <div className="grid grid-cols-3 gap-2 border-t border-white/20 pt-4 mt-4">
                          {facility.stats.map((stat, i) => (
                            <div key={i} className="flex flex-col">
                              <span className="text-lg font-bold text-white leading-none mb-1">{stat.value}</span>
                              <span className="text-[8px] font-bold uppercase tracking-[0.1em] text-white/70">{stat.label}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
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
