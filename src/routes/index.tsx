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
        className="relative min-h-[calc(100svh-53px)] h-auto lg:h-[calc(100svh-65px)] overflow-x-hidden bg-background flex flex-col"
        id="hero"
      >
        {/* ========================================================================= */}
        {/* 1. MSAJCE SIGNATURE MOBILE HERO SECTION (< lg screens)                   */}
        {/* ========================================================================= */}
        <div className="block lg:hidden relative w-full bg-background text-foreground overflow-hidden py-6 px-4 sm:px-6 flex flex-col gap-6">
          
          {/* Dynamic Text Category & Logo */}
          <div className="flex flex-col gap-4">
            <div className="pl-2">
              <DynamicText />
            </div>
            <div className="pl-2 py-1 flex items-center justify-start min-h-[45px]">
              <img
                src="/logos/college-name-only-logo.png"
                alt="Mohamed Sathak A.J. College of Engineering"
                className="w-[92%] max-w-[360px] h-auto object-contain object-left"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/logos/college%20name%20only%20logo.PNG";
                }}
              />
            </div>
          </div>

          {/* Hero Showcase Image Banner (Maroon Red Gradient Overlay) */}
          <div className="relative w-full rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs overflow-hidden shadow-xl aspect-[16/9] min-h-[200px]">
            <img
              src="/images/hero_dsc6410.jpg"
              alt="MSAJCE Campus Heritage"
              className="w-full h-full object-cover select-none pointer-events-none brightness-[0.8]"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/images/eligibility_hero.jpg";
              }}
            />
            {/* Signature Maroon Red Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#671422]/90 via-[#861E30]/40 to-transparent flex flex-col justify-end p-4">
              <span className="inline-flex self-start rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs bg-primary px-3 py-1 text-[10px] font-black uppercase tracking-[0.15em] text-white font-oswald shadow-xs mb-1.5">
                25+ Years Legacy
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-oswald uppercase text-white leading-tight drop-shadow-md">
                ENGINEERING EXCELLENCE
              </h3>
              <p className="text-xs font-libre text-white/90 font-medium leading-relaxed mt-0.5 line-clamp-2">
                NBA accredited, AICTE approved pathways on Chennai's OMR Siruseri IT Corridor.
              </p>
            </div>
          </div>

          {/* Mobile Snap Carousel of Key Highlights */}
          <div className="w-full space-y-2">
            <h4 className="text-xs font-bold font-oswald uppercase tracking-widest text-primary pl-1">
              Campus Showcase
            </h4>
            <div 
              ref={stripRef}
              className="flex snap-x snap-mandatory gap-3 overflow-x-auto scrollbar-none pb-2" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {[
                { src: "/images/placement/03interviewroom.jpg", fallback: "/images/eligibility_hero.jpg", tag: "Placements", title: "90%+ Placement Drives", desc: "TCS, Zoho, Cognizant & Infosys" },
                { src: "/images/placement/06LAB.jpg", fallback: "/images/eligibility_hero.jpg", tag: "Research", title: "AICTE IDEA Labs", desc: "Advanced CNC & Robotics Rigs" },
                { src: "/images/placement/05classroom.jpg", fallback: "/images/eligibility_hero.jpg", tag: "Training", title: "Career Skill Suites", desc: "Aptitude & Technical Prep" },
                { src: "/images/hero_dsc6419.jpg", fallback: "/DSC06419.JPG", tag: "Campus Life", title: "Vibrant Community", desc: "State-of-the-art Hostels & Sports" },
              ].map((item) => (
                <div
                  key={item.tag}
                  className="relative h-[160px] w-[78vw] max-w-[270px] shrink-0 snap-center overflow-hidden rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-border bg-white dark:bg-[#121214] shadow-md"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover brightness-[0.75]"
                    onError={(e) => {
                      if (item.fallback) {
                        (e.target as HTMLImageElement).src = item.fallback;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-3.5 flex flex-col justify-end">
                    <span className="inline-flex self-start rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs bg-primary px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-white font-oswald mb-1">
                      {item.tag}
                    </span>
                    <h5 className="text-xs font-bold font-oswald uppercase text-white leading-tight">
                      {item.title}
                    </h5>
                    <p className="text-[10.5px] font-libre text-white/80 font-medium leading-tight mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Liquid Ocean Wave Mobile Navigation Buttons */}
          <div className="flex flex-col gap-2.5 pt-1">
            {heroLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                search={{} as any}
                className="group relative overflow-hidden flex items-center justify-between border border-stone-300 dark:border-neutral-700 bg-stone-200/90 dark:bg-neutral-800 px-4 py-3 text-xs font-bold uppercase tracking-wider text-foreground dark:text-white font-oswald shadow-xs transition-colors rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs w-full"
              >
                {/* Liquid Ocean Wave Fill Overlay */}
                <span className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
                  <span className="absolute inset-x-0 top-0 h-[140%] bg-[#9E2339] translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    {/* Ocean Wave Crest SVG (Primary) */}
                    <span className="absolute -top-3.5 left-0 w-[200%] h-4 pointer-events-none block">
                      <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,-20 1200,40 L1200,120 L0,120 Z" />
                      </svg>
                    </span>
                    {/* Secondary Depth Layer Wave */}
                    <span className="absolute -top-4 left-0 w-[200%] h-5 opacity-40 pointer-events-none block">
                      <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave-reverse" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,30 C200,-30 400,90 600,10 C800,-40 1000,70 1200,20 L1200,120 L0,120 Z" />
                      </svg>
                    </span>
                  </span>
                </span>

                <span className="relative z-10 flex items-center gap-1.5 text-foreground dark:text-white group-hover:text-white transition-colors duration-300">
                  {item.label}
                </span>
                <span className="relative z-10 text-primary group-hover:text-white transition-colors duration-300">
                  &raquo;
                </span>
              </Link>
            ))}
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
