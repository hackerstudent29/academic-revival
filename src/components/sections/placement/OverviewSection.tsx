import React from 'react';
import { ChevronRight } from 'lucide-react';

interface OverviewSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({ onNavigate }) => {
  const readinessPoints = [
    "Anna University syllabus mastery and NBA accredited engineering laboratories delivering compelling academic foundation.",
    "Hands-on programming, full-stack software development, cloud computing, and branch-specific core technology stacks.",
    "Weekly quantitative aptitude, speed mathematics, logical deduction, and STAR method situational behavioral interview drills.",
    "65+ corporate partner MoUs facilitating live industry projects, summer internships, and direct PPO offer conversions.",
    "Executive guest lectures, industry conclaves, corporate tech talks, and strategic campus recruitment partnerships.",
    "Continuous 1-on-1 guidance by dedicated faculty mentors and global alumni mentors across all four academic years.",
  ];

  const destinationPathways = [
    {
      num: '01',
      title: 'Corporate Career',
      desc: 'Campus recruitment with 120+ visiting recruiters and Fortune 500 MNCs.',
      tag: 'PLACEMENT',
      nav: 'recruiters',
    },
    {
      num: '02',
      title: 'Entrepreneurship',
      desc: 'Incubation support, patent filing assistance, and proof-of-concept seed validation.',
      tag: 'INNOVATION',
      nav: 'pathways',
    },
    {
      num: '03',
      title: 'Higher Studies',
      desc: 'Preparation for GATE, GRE, TOEFL, and admissions into premier global universities.',
      tag: 'GLOBAL TRACK',
      nav: 'pathways',
    },
    {
      num: '04',
      title: 'Research & R&D',
      desc: 'Interdisciplinary lab projects, funded grants, and peer-reviewed paper publications.',
      tag: 'RESEARCH',
      nav: 'training',
    },
    {
      num: '05',
      title: 'Professional Certifications',
      desc: 'Industry credentials from AWS, Cisco, Oracle, RedHat, and NPTEL.',
      tag: 'VALUE-ADD',
      nav: 'training',
    },
  ];

  return (
    <div className="w-full">
      {/* ========================================================================= */}
      {/* 1. SECTION A (White / #121214): FROM CAMPUS TO CAREER                     */}
      {/* ========================================================================= */}
      <section className="pt-8 sm:pt-12 md:pt-14 pb-10 sm:pb-14 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            OVERVIEW
          </h2>

          <div className="space-y-4 w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
            <p>
              At Mohamed Sathak A.J. College of Engineering (MSAJCE), career readiness is an engineered journey that begins on your very first day on campus. Strategically situated inside the premier SIPCOT IT Park at Siruseri, Chennai—surrounded by over 100 leading multinational technology corporations—our institution bridges the gap between academic theory and real-world industrial practice. The Training and Placement Cell functions as a dedicated career launchpad, equipping students with the technical competencies, problem-solving agility, and professional mindset required by top global recruiters.
            </p>
            <p>
              Our autonomous academic framework empowers us to continuously update curricula in direct response to evolving global tech trends. Supported by 65+ active corporate MoUs, state-of-the-art industry-partnered laboratories, and mandatory in-plant internships, MSAJCE students gain hands-on exposure to live industrial projects. This immersion fosters early talent identification, resulting in high rates of Pre-Placement Offers (PPOs) and sustained campus recruitment partnerships with Tier-1 IT services, product SaaS leaders, and core engineering conglomerates.
            </p>
            <p>
              We take a comprehensive, 360-degree approach to student readiness—combining intensive full-stack coding bootcamps, quantitative reasoning, and domain-specific technical certifications (AWS, Cisco, Oracle, RedHat) with STAR-method behavioral interview conditioning and executive mock panels. Guided by experienced faculty mentors and an international alumni network, every MSAJCE graduate steps out with the confidence, ethical leadership, and professional excellence to thrive in competitive global career tracks.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WAVE DIVIDER: Section A (White) -> Section B (#F3F3F2)                  */}
      {/* ========================================================================= */}
      <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 md:h-14 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-[#F3F3F2] dark:fill-[#18181B]"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 3. SECTION B (#F3F3F2 / #18181B): AN ECOSYSTEM BUILT AROUND READINESS      */}
      {/* ========================================================================= */}
      <section className="pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-14 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            AN ECOSYSTEM BUILT AROUND READINESS
          </h2>

          <div className="divide-y divide-border/40 font-libre">
            {readinessPoints.map((point, idx) => (
              <div
                key={idx}
                className="py-3.5 sm:py-4 px-1 sm:px-3 flex items-start gap-3.5 sm:gap-4 hover:bg-primary/[0.03] transition-colors"
              >
                <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                  {idx + 1}
                </span>
                <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed flex-1 pt-0.5 sm:pt-1">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WAVE DIVIDER: Section B (#F3F3F2) -> Section A (White)                  */}
      {/* ========================================================================= */}
      <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 md:h-14 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-white dark:fill-[#121214]"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 5. SECTION A (White / #121214): WHERE YOUR JOURNEY CAN TAKE YOU           */}
      {/* ========================================================================= */}
      <section className="pt-8 sm:pt-10 md:pt-12 pb-14 sm:pb-18 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            WHERE YOUR JOURNEY CAN TAKE YOU
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {destinationPathways.map((path, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate(path.nav)}
                className="cursor-pointer flex flex-col justify-between space-y-3 group p-4 sm:p-5 rounded-xl border border-border/40 hover:border-primary/40 hover:bg-primary/[0.02] transition-all shadow-2xs"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-black font-oswald uppercase tracking-wider text-primary">
                    {path.tag}
                  </span>
                  <h3 className="text-base font-bold font-oswald uppercase text-foreground group-hover:text-primary transition-colors leading-snug">
                    {path.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/80 font-libre font-medium leading-relaxed">
                    {path.desc}
                  </p>
                </div>
                <div className="pt-2 flex items-center gap-1 text-xs font-bold font-oswald uppercase text-primary border-t border-border/30">
                  <span>Explore Track</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
