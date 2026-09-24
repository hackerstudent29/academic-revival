import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface RecruitersSectionProps {
  onNavigate?: (sectionId: string) => void;
}

const PATHWAY_STAGES = [
  {
    num: '01',
    word: 'FOUNDATION',
    desc: 'Core academic engineering coursework, mathematical rigor, and hands-on laboratory mastery.',
  },
  {
    num: '02',
    word: 'SKILLING',
    desc: 'Quantitative aptitude drills, competitive coding bootcamps, and executive communication training.',
  },
  {
    num: '03',
    word: 'ASSESSMENT',
    desc: 'Online diagnostic evaluations, timed coding challenges, and mock technical assessments.',
  },
  {
    num: '04',
    word: 'INTERVIEW',
    desc: 'Domain-specific technical panels, group discussion rounds, and corporate HR interviews.',
  },
  {
    num: '05',
    word: 'PLACEMENT',
    desc: 'Formal offer letters, pre-placement offers (PPOs), and corporate onboarding.',
  },
];

const RECRUITER_LOGOS = [
  { name: 'Amazon', category: 'Cloud & E-Commerce', logo: '/logos/amazon.svg' },
  { name: 'Tata Consultancy Services', category: 'IT & Global Consulting', logo: '/logos/tcs.svg' },
  { name: 'Infosys', category: 'Enterprise Tech', logo: '/logos/infosys.svg' },
  { name: 'Cognizant', category: 'Digital Solutions', logo: '/logos/cognizant.svg' },
  { name: 'Wipro', category: 'Cloud & IT Services', logo: '/logos/wipro.svg' },
  { name: 'Zoho Corporation', category: 'Product SaaS', logo: '/logos/zoho_new.svg' },
  { name: 'IBM', category: 'Enterprise Cloud & AI', logo: '/logos/ibm.svg' },
  { name: 'Hitachi', category: 'Industrial Systems', logo: '/logos/hitachi.svg' },
  { name: 'Atos', category: 'Digital Services', logo: '/logos/atos.svg' },
  { name: 'Lenovo', category: 'Smart Infrastructure', logo: '/logos/lenovo.svg' },
  { name: 'Valeo', category: 'Automotive Tech', logo: '/logos/valeo.svg' },
  { name: 'TVS Group', category: 'Automotive & Core', logo: '/logos/tvs.svg' },
  { name: 'Aspire Systems', category: 'Software Engineering', logo: '/logos/aspire.png' },
  { name: 'Movate', category: 'Customer Experience', logo: '/logos/movate.png' },
  { name: 'QBurst', category: 'Product Development', logo: '/logos/qburst.png' },
  { name: 'CustomerLabs', category: 'Data Platforms', logo: '/logos/customerlabs.png' },
  { name: 'NLC India', category: 'Public Sector Navratna', logo: '/logos/nlc.png' },
  { name: 'Openwave Computing', category: 'Digital Solutions', logo: '/logos/openwave.png' },
];

const ADDITIONAL_PARTNERS = [
  'Capgemini',
  'HCL Technologies',
  'Tech Mahindra',
  'Virtusa',
  'Hexaware Technologies',
  'LTIMindtree',
  'Sutherland Global',
  'Ashok Leyland',
  'Saint-Gobain',
  'Bosch',
  'Hyundai Mobis',
  'L&T Infotech',
  'Sopra Steria',
  'TATA Elxsi',
  'TVS Sundaram Fasteners',
];

export const RecruitersSection: React.FC<RecruitersSectionProps> = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 85%', 'center 45%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  // 4 sequential segment animations connecting the 5 stages
  const seg1Progress = useTransform(smoothProgress, [0.0, 0.25], [0, 1]);
  const seg2Progress = useTransform(smoothProgress, [0.25, 0.50], [0, 1]);
  const seg3Progress = useTransform(smoothProgress, [0.50, 0.75], [0, 1]);
  const seg4Progress = useTransform(smoothProgress, [0.75, 1.00], [0, 1]);

  const segmentProgressList = [seg1Progress, seg2Progress, seg3Progress, seg4Progress];

  // Arrowhead fade-ins as each stroke segment finishes
  const arrow1Opacity = useTransform(smoothProgress, [0.20, 0.25], [0, 1]);
  const arrow2Opacity = useTransform(smoothProgress, [0.45, 0.50], [0, 1]);
  const arrow3Opacity = useTransform(smoothProgress, [0.70, 0.75], [0, 1]);
  const arrow4Opacity = useTransform(smoothProgress, [0.95, 1.00], [0, 1]);

  const arrowOpacityList = [arrow1Opacity, arrow2Opacity, arrow3Opacity, arrow4Opacity];

  return (
    <div className="w-full">
      {/* ========================================================================= */}
      {/* 1. SECTION A (White / #121214): CAMPUS RECRUITMENT PATHWAY                 */}
      {/* ========================================================================= */}
      <section
        ref={sectionRef}
        className="pt-8 sm:pt-12 md:pt-14 pb-8 sm:pb-12 bg-white dark:bg-[#121214] transition-colors"
      >
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          {/* Section Title (No Underline, Clean Minimal Direct Header) */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            CAMPUS RECRUITMENT PATHWAY
          </h2>

          {/* 5-Stage Selection Pathway with Smooth Animated Connecting Stroke Lines */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {PATHWAY_STAGES.map((stage, idx) => {
              const segmentProgress = segmentProgressList[idx] ?? seg1Progress;
              const arrowOpacity = arrowOpacityList[idx] ?? arrow1Opacity;
              const hasNext = idx < PATHWAY_STAGES.length - 1;

              return (
                <div
                  key={stage.num}
                  className="relative flex items-start gap-4 lg:block lg:space-y-3"
                >
                  {/* Left (Mobile) / Top (Desktop): Badge & Connectors */}
                  <div className="relative flex flex-col items-center shrink-0 w-8 self-stretch">
                    <span className="relative z-10 inline-flex items-center justify-center w-8 h-8 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs border border-foreground/20 shadow-2xs">
                      {stage.num}
                    </span>

                    {/* Mobile Vertical Connector Line (between stage idx and idx + 1) */}
                    {hasNext && (
                      <div
                        className="lg:hidden absolute top-8 bottom-[-2rem] left-1/2 -translate-x-1/2 w-[2px] bg-stone-200 dark:bg-neutral-800 pointer-events-none z-0 overflow-hidden"
                        aria-hidden="true"
                      >
                        <motion.div
                          className="w-full bg-primary origin-top"
                          style={{
                            scaleY: segmentProgress,
                            height: '100%',
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Desktop Horizontal Connector Line (between stage idx and idx + 1) */}
                  {hasNext && (
                    <div
                      className="hidden lg:flex items-center absolute left-8 right-[-2rem] top-4 -translate-y-1/2 h-4 pointer-events-none z-0 overflow-visible"
                      aria-hidden="true"
                    >
                      {/* Background subtle guide track */}
                      <div className="w-full h-[2px] bg-stone-200 dark:bg-neutral-800 relative overflow-hidden">
                        {/* Animated stroke line following scroll */}
                        <motion.div
                          className="absolute inset-y-0 left-0 bg-primary origin-left w-full h-full"
                          style={{
                            scaleX: segmentProgress,
                          }}
                        />
                      </div>

                      {/* Forward direction arrow head */}
                      <motion.div
                        className="shrink-0 -ml-0.5 text-primary flex items-center"
                        style={{
                          opacity: arrowOpacity,
                        }}
                      >
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
                          <path
                            d="M1 1.5L5.5 6L1 10.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  )}

                  {/* Stage Text Content */}
                  <div className="space-y-1.5 lg:space-y-3 pt-0.5 lg:pt-0">
                    <h3 className="font-oswald font-bold uppercase text-base sm:text-lg text-foreground tracking-tight leading-tight">
                      {stage.word}
                    </h3>
                    <p className="text-sm text-foreground font-libre font-medium leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WAVE DIVIDER: Section A -> Section B                                   */}
      {/* ========================================================================= */}
      <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-8 md:h-10 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-[#F3F3F2] dark:fill-[#18181B]"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 3. SECTION B (Canvas B: #F3F3F2 / #18181B): MAJOR RECRUITERS & PARTNERS    */}
      {/* ========================================================================= */}
      <section className="pt-6 sm:pt-8 md:pt-10 pb-12 sm:pb-16 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          {/* Section Title (No Underline, Clean Minimal Direct Header) */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            MAJOR RECRUITERS &amp; CORPORATE PARTNERS
          </h2>

          {/* Clean Open Minimal Logo Showcase — No Cards, Pure Floating Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-10 sm:gap-x-12 sm:gap-y-12 items-center">
            {RECRUITER_LOGOS.map((rec) => (
              <div
                key={rec.name}
                className="flex items-center justify-center p-2 group"
              >
                <img
                  src={rec.logo}
                  alt={rec.name}
                  className="max-h-10 sm:max-h-12 max-w-[140px] w-auto object-contain select-none pointer-events-none filter contrast-105 opacity-90 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Additional Corporate Partners & Industry Alliances (Open Editorial List) */}
          <div className="pt-8 space-y-3">
            <span className="text-xs font-bold font-oswald uppercase text-muted-foreground tracking-wider block">
              Additional Corporate Hiring Partners &amp; Industry Alliances
            </span>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-libre font-medium text-foreground">
              {ADDITIONAL_PARTNERS.map((partner, idx) => (
                <span key={partner} className="flex items-center gap-4">
                  <span>{partner}</span>
                  {idx < ADDITIONAL_PARTNERS.length - 1 && (
                    <span className="text-muted-foreground/40 select-none">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
