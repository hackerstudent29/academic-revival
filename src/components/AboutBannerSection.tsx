import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CountUp, Magnetic, Reveal, SplitText, Stagger, StaggerItem } from "@/components/motion";

const campusFacilities = [
  {
    name: "Library",
    description: "A vast collection of over 50,000 volumes, digital resources, and quiet study spaces.",
    src: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Hostel",
    description: "Comfortable, secure, and vibrant residential facilities for a home away from home.",
    src: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Sports",
    description: "State-of-the-art indoor and outdoor sports complexes for athletic excellence.",
    src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Labs",
    description: "Cutting-edge laboratories equipped with the latest technology for practical learning.",
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Transport",
    description: "A dedicated fleet of buses ensuring safe and seamless connectivity across the city.",
    src: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Auditorium",
    description: "A 1000-seater modern auditorium hosting global conferences and cultural fests.",
    src: "https://images.unsplash.com/photo-1510511233900-1982d92bd21f?q=80&w=800&auto=format&fit=crop"
  }
];

export function AboutBannerSection() {
  return (
    <section id="about" className="relative z-10 w-full bg-gray-100 dark:bg-[#171613] min-h-[100svh] flex flex-col justify-center py-16 transition-colors">
      <div className="mx-auto grid w-full max-w-[1440px] px-6 md:px-12 grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: editorial copy */}
        <Reveal variant="slide-right" className="flex flex-col justify-center lg:col-span-6 pr-0 md:pr-10 lg:pr-16">
          <div className="mb-8 flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-foreground/70">
              The MSAJCE Edge
            </span>
          </div>

          <h2 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] font-bold leading-[1.05] tracking-tight text-foreground">
            Empowering leaders, innovators &amp;{" "}
            <span className="bg-gradient-to-r from-primary via-[#059669] to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_8s_ease_infinite]">
              changemakers.
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Be part of an institution that prepares you for tomorrow&rsquo;s challenges. We blend rigorous academics with real-world innovation to shape the future of engineering.
          </p>

          <Stagger gap={0.15} className="mt-12 flex flex-col sm:flex-row gap-4">
            <StaggerItem variant="rise" className="flex-1">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border/50 bg-white/40 dark:bg-black/20 p-6 backdrop-blur-sm transition-all hover:bg-white/60 dark:hover:bg-black/40 hover:shadow-sm">
                <CountUp value={5} suffix="th" className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4" />
                <span className="text-sm font-medium text-muted-foreground leading-snug">
                  Ranked in Tamil Nadu by NIRF 2024
                </span>
              </div>
            </StaggerItem>
            
            <StaggerItem variant="rise" className="flex-1">
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border/50 bg-white/40 dark:bg-black/20 p-6 backdrop-blur-sm transition-all hover:bg-white/60 dark:hover:bg-black/40 hover:shadow-sm">
                <span className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">AICTE</span>
                <span className="text-sm font-medium text-muted-foreground leading-snug">
                  Approved &amp; Affiliated to Anna University
                </span>
              </div>
            </StaggerItem>
          </Stagger>

          <div className="mt-12">
            <Link
              to="/about"
              className="group flex w-fit items-center gap-4 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-all hover:scale-105 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/25"
            >
              Explore our Vision
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        {/* Right: hover accordion image gallery */}
        <Reveal variant="slide-left" className="flex lg:items-stretch gap-4 lg:gap-2 lg:col-span-6 h-[400px] lg:h-[65vh] lg:min-h-[600px] max-lg:overflow-x-auto max-lg:snap-x max-lg:snap-mandatory max-lg:pb-4 scrollbar-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {campusFacilities.map((facility, idx) => (
            <div
              key={idx}
              className="group relative h-full flex-1 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hover:flex-[15] border border-border cursor-pointer rounded-sm max-lg:min-w-[280px] max-lg:snap-center"
            >
              <img
                className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-105"
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
