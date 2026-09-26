import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

import { motion } from "framer-motion";
import { WhyJoinSection } from "@/components/sections/home/WhyJoinSection";
import { AcademicProgrammesSection } from "@/components/sections/home/AcademicProgrammesSection";
import { DynamicText } from "@/components/typography/DynamicText";
import { HeroReel } from "@/components/widgets/HeroReel";
import { RecruiterMarquee } from "@/components/widgets/RecruiterMarquee";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { RotatingWord } from "@/components/typography/RotatingWord";
import { TestimonialSection } from "@/components/sections/home/TestimonialSection";
import { NewsAndEventsSection } from "@/components/sections/home/NewsAndEventsSection";
import { ContactSection } from "@/components/sections/contact/ContactSection";
import { SocialMediaSection } from "@/components/sections/home/SocialMediaSection";
import { CampusVideoReveal } from "@/components/widgets/CampusVideoReveal";

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
  component: HomePage,
});

const heroLinks = [
  { label: "Apply for Admission", to: "/admissions" },
  { label: "Explore Engineering Branches", to: "/academics" },
  { label: "Our Industry Partners", to: "/placements" },
  { label: "Campus Life at MSAJCE", to: "/campus-life" },
  { label: "Speak to an Advisor", to: "/contact" },
] as const;

export function HomePage() {
  const stripRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;

    let intervalId: ReturnType<typeof setInterval>;

    const startScroll = () => {
      intervalId = setInterval(() => {
        // If we are at the end, jump back to start
        if (strip.scrollWidth - strip.scrollLeft <= strip.clientWidth + 10) {
          strip.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll by roughly one item width
          const scrollAmount = strip.clientWidth > 0 ? strip.clientWidth * 0.75 : 250;
          strip.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }, 3500);
    };

    startScroll();

    const pauseScroll = () => clearInterval(intervalId);
    const resumeScroll = () => {
      clearInterval(intervalId);
      startScroll();
    };

    strip.addEventListener("touchstart", pauseScroll, { passive: true });
    strip.addEventListener("touchend", resumeScroll, { passive: true });

    return () => {
      clearInterval(intervalId);
      strip.removeEventListener("touchstart", pauseScroll);
      strip.removeEventListener("touchend", resumeScroll);
    };
  }, []);

  return (
    <motion.main 
      className="relative z-0 transform-gpu will-change-transform"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
    >
      {/* ── HERO SECTION ── */}
      <section
        className="relative h-auto lg:h-[calc(100svh-65px)] overflow-x-hidden bg-background flex flex-col"
        id="hero"
      >
        {/* ========================================================================= */}
        {/* 1. MSAJCE SIGNATURE MOBILE HERO SECTION (< lg screens)                   */}
        {/* ========================================================================= */}
        <div className="block lg:hidden relative w-full bg-background text-foreground overflow-hidden pt-4 pb-2 px-4 sm:px-6 flex flex-col gap-4">
          
          {/* A. TOP: Sliding Image Showcase (Left to Right Horizontal Touch Carousel) */}
          <div className="w-full space-y-1.5">
            <div 
              ref={stripRef}
              className="flex snap-x snap-mandatory gap-3 overflow-x-auto scrollbar-none pb-1" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {[
                { src: "/images/hero_dsc6410.jpg", fallback: "/DSC06410.JPG", alt: "25+ Years of Excellence" },
                { src: "/images/placement/03interviewroom.jpg", fallback: "/images/eligibility_hero.jpg", alt: "Placements" },
                { src: "/images/placement/06LAB.jpg", fallback: "/images/eligibility_hero.jpg", alt: "Research" },
                { src: "/images/placement/05classroom.jpg", fallback: "/images/eligibility_hero.jpg", alt: "Training" },
                { src: "/images/hero_dsc6419.jpg", fallback: "/DSC06419.JPG", alt: "Campus Life" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="relative h-[200px] sm:h-[220px] w-[85vw] max-w-[320px] shrink-0 snap-center overflow-hidden rounded-md border border-border bg-white dark:bg-[#121214] shadow-xs"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      if (item.fallback) {
                        (e.target as HTMLImageElement).src = item.fallback;
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* B. BELOW: 5 Hero Links (PC Editorial List Style, Clean Alignment) */}
          <div className="flex flex-col pt-1">
            <Stagger gap={0.05} delay={0.1} className="border-t border-foreground/12">
              {heroLinks.map((item) => (
                <StaggerItem key={item.to} variant="mask">
                  <Link
                    to={item.to}
                    className="group flex items-center justify-between border-b border-foreground/12 py-3.5 sm:py-4 text-[13px] sm:text-sm font-bold font-oswald uppercase tracking-[0.12em] text-foreground/80 transition-colors hover:text-primary active:text-primary pl-1 pr-2"
                  >
                    <span className="transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                      {item.label}
                    </span>
                    <span
                      aria-hidden
                      className="text-lg text-primary transition-transform duration-300 ease-out group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. DESKTOP HERO SECTION (lg+ screens)                                     */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid flex-1 items-stretch lg:grid-cols-[47%_53%]">
          <div className="flex h-full flex-col justify-start px-6 pt-6 pb-8 md:px-8 md:pt-8 md:pb-10 lg:px-12 lg:pt-10">
            <div className="pl-4 lg:pl-6">
              <DynamicText />
            </div>
            <div className="pl-4 lg:pl-6 mt-6 mb-6 flex items-center justify-start min-h-[40px] sm:min-h-[50px] md:min-h-[70px] lg:min-h-[100px]">
              <img
                src="/logos/college-name-only-logo.png"
                alt="Mohamed Sathak A.J. College of Engineering"
                className="w-[90%] max-w-[340px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[850px] h-auto object-contain object-left origin-top-left"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/logos/college%20name%20only%20logo.PNG";
                }}
              />
            </div>

            <Stagger gap={0.07} delay={0.25} className="mt-8 border-t border-foreground/12 md:mt-10">
              {heroLinks.map((item) => (
                <StaggerItem key={item.to} variant="mask">
                  <Link
                    to={item.to}
                    className="group flex items-center justify-between border-b border-foreground/12 py-5 text-[13px] font-bold font-oswald uppercase tracking-[0.12em] text-foreground/80 transition-colors hover:text-primary active:text-primary md:py-4 lg:py-5"
                  >
                    <span className="pl-4 lg:pl-6 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-2">
                      {item.label}
                    </span>
                    <span
                      aria-hidden
                      className="text-lg text-primary transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5"
                    >
                      →
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div className="relative min-w-0 min-h-0 w-full overflow-hidden border-foreground/12 lg:h-full lg:border-l">
            <div className="absolute inset-0 hidden lg:block overflow-hidden">
              <HeroReel />
            </div>
          </div>
        </div>
      </section>

      {/* ── Top recruiters marquee ── */}
      <section className="bg-page-bg flex flex-col justify-center py-6" id="top-recruiters">
        <Reveal variant="blur">
          <h2 className="px-6 text-center text-[12px] font-bold font-oswald uppercase tracking-[0.32em] text-[#005DA6] dark:text-[#60A5FA] md:px-12">
            Top Recruiters
          </h2>
        </Reveal>
        <div className="mt-6">
          <RecruiterMarquee />
        </div>
      </section>

      <AcademicProgrammesSection />

      <NewsAndEventsSection />

      <WhyJoinSection />

      <CampusVideoReveal />

      <TestimonialSection />

      <SocialMediaSection />

      <ContactSection />
    </motion.main>
  );
}
