import { Link } from "@tanstack/react-router";
import { CountUp, Magnetic, Reveal, SplitText, Stagger, StaggerItem } from "@/components/motion";

const galleryImages = [
  "https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&h=800&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1649265825072-f7dd6942baed?q=80&h=800&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555212697-194d092e3b8f?q=80&h=800&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1729086046027-09979ade13fd?q=80&h=800&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1601568494843-772eb04aca5d?q=80&h=800&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585687501004-615dfdfde7f1?q=80&h=800&w=800&auto=format&fit=crop",
];

export function AboutBannerSection() {
  return (
    <section id="about" className="w-full bg-background px-6 py-24 md:px-12 md:py-32">
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
            <Magnetic strength={0.2}>
              <Link
                to="/about"
                className="inline-flex items-center bg-primary px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-primary-foreground"
              >
                Vision &amp; Mission
              </Link>
            </Magnetic>
          </div>
        </Reveal>

        {/* Right: hover accordion image gallery */}
        <Reveal variant="slide-left" className="flex items-stretch gap-2 lg:col-span-6 h-[360px] lg:h-[560px]">
          {galleryImages.map((src, idx) => (
            <div
              key={idx}
              className="group relative h-full w-12 flex-grow overflow-hidden transition-all duration-500 hover:w-full border border-border"
            >
              <img
                className="h-full w-full object-cover object-center grayscale transition-all duration-500 group-hover:grayscale-0"
                src={src}
                alt={`Gallery image ${idx + 1}`}
              />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
