import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

import { motion, useScroll, useMotionValueEvent, AnimatePresence, useTransform } from "framer-motion";
import { WhyJoinSection } from "@/components/sections/home/WhyJoinSection";
import { AcademicProgrammesSection } from "@/components/sections/home/AcademicProgrammesSection";
import { AboutBannerSection } from "@/components/sections/about/AboutBannerSection";
import { DynamicText } from "@/components/typography/DynamicText";
import { HeroReel } from "@/components/widgets/HeroReel";
import { RecruiterMarquee } from "@/components/widgets/RecruiterMarquee";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { RotatingWord } from "@/components/typography/RotatingWord";
import { TestimonialSection } from "@/components/sections/home/TestimonialSection";
import { NewsAndEventsSection } from "@/components/sections/home/NewsAndEventsSection";
import { ContactSection } from "@/components/sections/contact/ContactSection";
import { CampusVideoReveal } from "@/components/widgets/CampusVideoReveal";
import { ChatbotWidget } from "@/components/widgets/ChatbotWidget";

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
  const { scrollY } = useScroll();
  const logoOpacity = useTransform(scrollY, [0, 80], [1, 0]);
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
      className="relative z-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <section
        className="relative border-b border-foreground/12 min-h-[calc(100svh-53px)] h-auto lg:h-[calc(100svh-65px)] overflow-x-hidden lg:overflow-hidden bg-background flex flex-col"
        id="hero"
      >
        <div className="grid flex-1 items-stretch lg:grid-cols-[47%_53%]">
          <div className="flex h-full flex-col justify-start px-6 pt-6 pb-8 md:px-8 md:pt-8 md:pb-10 lg:px-12 lg:pt-10">
            <DynamicText />
            <div className="mt-6 mb-6 flex items-center justify-start min-h-[40px] sm:min-h-[50px] md:min-h-[70px] lg:min-h-[100px]">
                <motion.img
                  layoutId="msajce-logo"
                  src="/logos/clg-logo.png"
                  alt="Mohamed Sathak A.J. College of Engineering"
                  className="w-[90%] max-w-[340px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[850px] h-auto object-contain object-left origin-top-left"
                  style={{ opacity: logoOpacity }}
                />
            </div>

            <Stagger gap={0.07} delay={0.25} className="mt-8 border-t border-foreground/12 md:mt-10">
              {heroLinks.map((item) => (
                <StaggerItem key={item.to} variant="mask">
                <Link
                  to={item.to}
                  className="group flex items-center justify-between border-b border-foreground/12 py-5 text-[12px] font-semibold uppercase tracking-[0.12em] text-foreground/70 transition-colors hover:text-primary active:text-primary md:py-4 lg:py-5"
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
            {/* Mobile: horizontal snap strip */}
            <div 
              ref={stripRef}
              className="flex snap-x snap-mandatory gap-3 overflow-x-auto scrollbar-none px-6 pb-4 lg:hidden" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {[
                { src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=400&h=300&q=80", label: "Research" },
                { src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=400&h=300&q=80", label: "Heritage" },
                { src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=400&h=300&q=80", label: "Affiliation" },
                { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&h=300&q=80", label: "Placements" },
                { src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=400&h=300&q=80", label: "Campus Life" },
              ].map((item, idx) => (
                <div
                  key={item.label}
                  className={`relative h-[200px] w-[75vw] max-w-[280px] shrink-0 snap-center overflow-hidden rounded-md ${idx === 0 ? '' : ''}`}
                >
                  <img src={item.src} alt={item.label} loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-sm font-bold uppercase tracking-widest text-white">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Top recruiters marquee ── */}
      <section className="bg-[#EAEAEA] dark:bg-[#111915] border-b border-foreground/12 flex flex-col justify-center py-6" id="top-recruiters">
        <Reveal variant="blur">
          <h2 className="px-6 text-center text-[11px] font-bold uppercase tracking-[0.32em] text-foreground/50 md:px-12">
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

      <AboutBannerSection />

      <CampusVideoReveal />

      <TestimonialSection />

      <ContactSection />
      <ChatbotWidget />
    </motion.main>
  );
}
