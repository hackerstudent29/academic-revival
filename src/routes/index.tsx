import { createFileRoute, Link } from "@tanstack/react-router";
import { WhyJoinSection } from "@/components/WhyJoinSection";
import { AcademicProgrammesSection } from "@/components/AcademicProgrammesSection";
import { AboutBannerSection } from "@/components/AboutBannerSection";
import { DynamicText } from "@/components/DynamicText";
import { RotatingWord } from "@/components/RotatingWord";
import { HeroReel } from "@/components/HeroReel";
import { RecruiterMarquee } from "@/components/RecruiterMarquee";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

const title = "MSAJCE — M.S.A.J. College of Engineering, Chennai";
const description =
  "Explore MSAJCE academic programmes — UG, PG and research — and the reasons to join Chennai's OMR IT corridor engineering campus.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const heroLinks = [
  { label: "Apply for Admission", to: "/admissions" },
  { label: "Explore Engineering Branches", to: "/academics" },
  { label: "Our Industry Partners", to: "/placements" },
  { label: "Campus Life at MSAJCE", to: "/campus-life" },
  { label: "Speak to an Advisor", to: "/contact" },
] as const;

function Index() {
  return (
    <main className="bg-background">
      <section
        className="relative border-b border-foreground/12 md:h-[calc(100svh-4rem)] md:overflow-hidden"
        id="hero"
      >
        <div className="grid h-full items-stretch md:grid-cols-2">
          <div className="flex h-full flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-12">
            <DynamicText />
            <h1 className="mt-2 flex flex-col text-[8vw] font-black uppercase leading-[0.95] tracking-tighter text-foreground sm:text-5xl md:text-[3.4vw] lg:text-[3.9vw] xl:text-[4.1vw]">
              <span className="whitespace-nowrap">Mohamed Sathak</span>
              <span className="whitespace-nowrap">A.J. College of</span>
              <span className="mt-0.5 flex flex-nowrap items-baseline gap-x-2 sm:gap-x-3 whitespace-nowrap text-[3.5vw] sm:text-2xl md:text-[1.7vw] lg:text-[1.8vw] xl:text-[1.9vw]">
                <RotatingWord
                  homeWord="Engineering"
                  words={["Innovation", "Technology", "Excellence"]}
                />
                <span className="text-foreground/70">&amp;</span>
                <RotatingWord
                  homeWord="Architecture"
                  words={["Design", "Creativity", "Craftsmanship"]}
                />
              </span>
            </h1>

            <Stagger gap={0.07} delay={0.25} className="mt-8 border-t border-foreground/12 md:mt-10">
              {heroLinks.map((item) => (
                <StaggerItem key={item.to} variant="mask">
                <Link
                  to={item.to}
                  className="group flex items-center justify-between border-b border-foreground/12 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-foreground/70 transition-colors hover:text-foreground md:py-[1.05vh] lg:py-3.5"
                >
                  <span className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
                    {item.label}
                  </span>
                  <span
                    aria-hidden
                    className="text-primary transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5"
                  >
                    →
                  </span>
                </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div className="relative min-h-0 border-foreground/12 md:h-full md:border-l">
            <div className="absolute inset-0 hidden md:block">
              <HeroReel />
            </div>
            {/* Mobile: horizontal snap strip */}
            <div className="flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 pb-3 md:hidden">
              {[
                { src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=400&h=300&q=80", label: "Research" },
                { src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=400&h=300&q=80", label: "Heritage" },
                { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=400&h=300&q=80", label: "Affiliation" },
                { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&h=300&q=80", label: "Placements" },
                { src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=400&h=300&q=80", label: "Campus Life" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="relative h-[180px] w-[72vw] max-w-[260px] shrink-0 snap-start overflow-hidden rounded-md"
                >
                  <img src={item.src} alt={item.label} loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-bold uppercase tracking-widest text-white">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Top recruiters marquee ── */}
      <section className="border-b border-foreground/12 py-16" id="top-recruiters">
        <Reveal variant="blur">
          <h2 className="px-6 text-center text-[11px] font-bold uppercase tracking-[0.32em] text-foreground/50 md:px-12">
            Top Recruiters
          </h2>
        </Reveal>
        <RecruiterMarquee />
      </section>

      <AcademicProgrammesSection />

      <WhyJoinSection />

      <AboutBannerSection />
    </main>
  );
}
