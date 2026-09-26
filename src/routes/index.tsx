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
        {/* 1. BRAND NEW MOBILE-ONLY HERO SECTION (< lg screens)                      */}
        {/* ========================================================================= */}
        <div className="block lg:hidden relative w-full bg-[#121214] text-white overflow-hidden py-6 px-4 sm:px-6 flex flex-col justify-between">
          {/* Ambient Background Glow & Photography Vignette */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <img
              src="/images/hero_dsc6410.jpg"
              alt="MSAJCE Campus"
              className="w-full h-full object-cover opacity-20 filter contrast-125 select-none"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/images/eligibility_hero.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#121214]/90 via-[#121214]/70 to-[#121214]" />
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/25 rounded-full filter blur-3xl pointer-events-none" />
          </div>

          <div className="relative z-10 space-y-4">
            {/* Top Badge Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary/20 border border-primary/40 text-primary-foreground font-oswald text-[11px] font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
              <span>Engineering Excellence · Chennai OMR</span>
            </div>

            {/* Logo showcase */}
            <div className="w-full max-w-[320px] sm:max-w-[380px] py-1">
              <img
                src="/logos/college-name-only-logo.png"
                alt="Mohamed Sathak A.J. College of Engineering"
                className="w-full h-auto object-contain brightness-200 filter"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/logos/college%20name%20only%20logo.PNG";
                }}
              />
            </div>

            <p className="text-xs sm:text-sm font-libre text-neutral-300 font-medium leading-relaxed max-w-sm">
              Empowering future engineering leaders through industry-aligned B.E, B.Tech, M.E & Ph.D degrees on Chennai's Siruseri IT Corridor.
            </p>

            {/* Mobile Touch Carousel of Key Highlights */}
            <div className="pt-2">
              <div 
                ref={stripRef}
                className="flex snap-x snap-mandatory gap-3 overflow-x-auto scrollbar-none pb-2" 
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {[
                  { src: "/images/placement/03interviewroom.jpg", fallback: "/images/eligibility_hero.jpg", tag: "Placements", title: "90%+ Placement Record", desc: "TCS, Zoho, Cognizant & Infosys" },
                  { src: "/images/placement/06LAB.jpg", fallback: "/images/eligibility_hero.jpg", tag: "Research", title: "AICTE IDEA Labs", desc: "Advanced CNC & Robotics Rigs" },
                  { src: "/images/placement/05classroom.jpg", fallback: "/images/eligibility_hero.jpg", tag: "Training", title: "Career Skill Suites", desc: "Aptitude & Technical Prep" },
                  { src: "/images/hero_dsc6410.jpg", fallback: "/DSC06410.JPG", tag: "Heritage", title: "25+ Years Legacy", desc: "Established in 2001" },
                ].map((item) => (
                  <div
                    key={item.tag}
                    className="relative h-[170px] w-[78vw] max-w-[270px] shrink-0 snap-center overflow-hidden rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-white/15 bg-neutral-900/90 shadow-lg"
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover brightness-[0.7]"
                      onError={(e) => {
                        if (item.fallback) {
                          (e.target as HTMLImageElement).src = item.fallback;
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3.5 flex flex-col justify-end">
                      <span className="inline-flex self-start rounded-xs bg-primary px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-white font-oswald mb-1">
                        {item.tag}
                      </span>
                      <h3 className="text-sm font-bold font-oswald uppercase text-white leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-[11px] font-libre text-neutral-300 font-medium leading-tight">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile CTA Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Link
                to="/admissions"
                className="group relative overflow-hidden inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-5 py-3 text-xs font-bold uppercase tracking-widest font-oswald shadow-md rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs w-full text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-1.5">
                  Apply for Admission &raquo;
                </span>
              </Link>
              <Link
                to="/academics"
                className="group relative overflow-hidden inline-flex items-center justify-center bg-white/10 hover:bg-white/15 border border-white/20 text-white px-5 py-3 text-xs font-bold uppercase tracking-widest font-oswald shadow-md rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs w-full text-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-1.5">
                  Explore Branches &raquo;
                </span>
              </Link>
            </div>

            {/* Fast Nav Ribbon */}
            <div className="flex flex-wrap items-center justify-between gap-1.5 pt-3 border-t border-white/10 text-[11px] font-bold font-oswald uppercase tracking-wider text-neutral-300">
              <Link to="/admissions" className="hover:text-primary transition-colors">Admissions</Link>
              <span>•</span>
              <Link to="/academics" className="hover:text-primary transition-colors">Courses</Link>
              <span>•</span>
              <Link to="/placements" className="hover:text-primary transition-colors">Placements</Link>
              <span>•</span>
              <Link to="/research" className="hover:text-primary transition-colors">Research</Link>
              <span>•</span>
              <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </div>
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
