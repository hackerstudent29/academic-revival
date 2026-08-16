import { createFileRoute, Link } from "@tanstack/react-router";
import { WhyJoinSection } from "@/components/WhyJoinSection";
import { AcademicProgrammesSection } from "@/components/AcademicProgrammesSection";
import { AboutBannerSection } from "@/components/AboutBannerSection";
import { DynamicText } from "@/components/DynamicText";
import { RotatingWord } from "@/components/RotatingWord";
import { HeroReel } from "@/components/HeroReel";
import { RecruiterMarquee } from "@/components/RecruiterMarquee";

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
      {/* ── Hero: editorial split grid ── */}
      <section className="border-b border-foreground/12" id="hero">
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-20 md:px-12 md:py-24">
            <DynamicText />
            <h1 className="flex flex-col gap-1 text-[13vw] font-black uppercase leading-[0.92] tracking-tighter text-foreground sm:text-6xl lg:text-7xl">
              <span>Mohamed Sathak</span>
              <span>A.J. College of</span>
              <span className="mt-1 flex flex-wrap items-baseline gap-x-4">
                <RotatingWord
                  homeWord="Engineering"
                  words={["Innovation", "Technology", "Excellence"]}
                />
                <span>&amp;</span>
                <RotatingWord
                  homeWord="Architecture"
                  words={["Design", "Creativity", "Craftsmanship"]}
                />
              </span>
            </h1>

            <div className="mt-12 border-t border-foreground/12">
              {heroLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="group flex items-center justify-between border-b border-foreground/12 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-foreground/70 transition-colors hover:text-foreground"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    {item.label}
                  </span>
                  <span aria-hidden className="text-primary transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="border-l border-foreground/12">
            <HeroReel />
            {/* Mobile: horizontal snap strip */}
            <div className="flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 pb-4 md:hidden">
              {[
                { src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=400&h=300&q=80", label: "Research" },
                { src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=400&h=300&q=80", label: "Heritage" },
                { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=400&h=300&q=80", label: "Affiliation" },
                { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&h=300&q=80", label: "Placements" },
                { src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=400&h=300&q=80", label: "Campus Life" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="relative h-[204px] w-[72vw] max-w-[280px] shrink-0 snap-start overflow-hidden rounded-md"
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
        <h2 className="px-6 text-center text-[11px] font-bold uppercase tracking-[0.32em] text-foreground/50 md:px-12">
          Top Recruiters
        </h2>
        <RecruiterMarquee />
      </section>

      <AcademicProgrammesSection />

      <WhyJoinSection />

      <AboutBannerSection />
    </main>
  );
}
