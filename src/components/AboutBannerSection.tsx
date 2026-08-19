import { Link } from "@tanstack/react-router";
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
    <section id="about" className="w-full bg-background min-h-[100svh] flex flex-col justify-center py-16 px-6 md:px-12">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left: editorial copy */}
        <Reveal variant="slide-right" className="flex flex-col justify-center lg:col-span-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
            About MSAJCE
          </span>

          <h2 className="mt-6 text-4xl font-black uppercase leading-[0.95] tracking-tighter text-foreground md:text-5xl lg:text-6xl">
            <SplitText text="Empowering Leaders," />
            <br />
            <SplitText text="Innovators &" delay={0.1} />
            <br />
            <SplitText text="Changemakers" delay={0.2} wordClassName="text-primary" />
          </h2>

          <p className="mt-8 max-w-lg border-l-2 border-primary pl-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Be part of an institution that prepares you for tomorrow&rsquo;s challenges, today.
          </p>

          <Stagger gap={0.12} className="mt-12 grid gap-px border-t border-border bg-border md:grid-cols-2">
            <StaggerItem variant="unfold">
              <article className="group border-b border-border bg-background p-8 transition-colors hover:bg-muted/50">
                <CountUp value={5} suffix="th" className="block text-3xl font-bold tracking-tighter text-primary" />
                <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  In Tamil Nadu — NIRF 2024
                </span>
              </article>
            </StaggerItem>
            <StaggerItem variant="unfold">
              <article className="group border-b border-border bg-background p-8 transition-colors hover:bg-muted/50">
                <span className="block text-3xl font-bold tracking-tighter text-primary">AICTE</span>
                <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Approved &amp; Anna Univ Affiliated
                </span>
              </article>
            </StaggerItem>
          </Stagger>

          <div className="mt-12">
            <Link
              to="/about"
              className="group relative overflow-hidden inline-flex items-center bg-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:text-background after:absolute after:inset-0 after:top-full after:bg-foreground after:transition-all after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:after:top-0"
            >
              <span className="relative z-10">Vision &amp; Mission</span>
            </Link>
          </div>
        </Reveal>

        {/* Right: hover accordion image gallery */}
        <Reveal variant="slide-left" className="flex items-stretch gap-2 lg:col-span-6 h-[500px] lg:h-[65vh] lg:min-h-[600px]">
          {campusFacilities.map((facility, idx) => (
            <div
              key={idx}
              className="group relative h-full flex-1 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:flex-[6] border border-border cursor-pointer rounded-sm"
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
              <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-8 group-hover:opacity-0 group-hover:pointer-events-none z-20 overflow-hidden">
                <span className="flex text-white text-4xl md:text-5xl lg:text-[60px] leading-none font-black uppercase tracking-tighter [writing-mode:vertical-rl] -rotate-180 whitespace-nowrap">
                  {facility.name}
                </span>
              </div>

              {/* Hovered Content (Name + Description) */}
              <div className="absolute bottom-0 left-0 w-[300px] p-6 translate-y-8 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100 flex flex-col justify-end pointer-events-none z-20">
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
