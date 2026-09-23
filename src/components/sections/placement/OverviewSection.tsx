import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  ChevronRight
} from 'lucide-react';

interface OverviewSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({ onNavigate }) => {
  const [hasCounted, setHasCounted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const [counts, setCounts] = useState({
    rate: 0,
    offers: 0,
    companies: 0,
    highest: 0,
    average: 0,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !hasCounted) {
          setHasCounted(true);
          const duration = 1600;
          const steps = 50;
          const stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);

            setCounts({
              rate: Math.round(95.0 * easeOutQuart * 10) / 10,
              offers: Math.round(450 * easeOutQuart),
              companies: Math.round(120 * easeOutQuart),
              highest: Math.round(43.3 * easeOutQuart * 10) / 10,
              average: Math.round(5.8 * easeOutQuart * 10) / 10,
            });

            if (currentStep >= steps) {
              clearInterval(timer);
              setCounts({
                rate: 95.0,
                offers: 450,
                companies: 120,
                highest: 43.3,
                average: 5.8,
              });
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasCounted]);

  const readinessPillars = [
    {
      num: '01',
      title: 'Compelling Academics',
      desc: 'Anna University syllabus mastery and NBA accredited engineering laboratories.',
    },
    {
      num: '02',
      title: 'Technical Skills',
      desc: 'Hands-on programming, full-stack software development, and cloud computing.',
    },
    {
      num: '03',
      title: 'Aptitude & STAR Drills',
      desc: 'Weekly speed math, logical deduction, and situational behavioral interview rounds.',
    },
    {
      num: '04',
      title: 'In-Plant Internships',
      desc: '65+ corporate partner MoUs facilitating live industry projects and direct PPO conversions.',
    },
    {
      num: '05',
      title: 'Corporate MoUs',
      desc: 'Executive guest lectures, tech conclaves, and on-campus recruitment partnerships.',
    },
    {
      num: '06',
      title: '1-on-1 Mentorship',
      desc: 'Continuous guidance by faculty mentors and global alumni across all four years.',
    }
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
      nav: 'journey',
    },
    {
      num: '03',
      title: 'Higher Studies',
      desc: 'Preparation for GATE, GRE, TOEFL, and admissions into premier global universities.',
      tag: 'GLOBAL TRACK',
      nav: 'journey',
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
    }
  ];

  return (
    <div className="w-full">
      {/* SECTION 1: Canvas A (White / #121214) — Campus to Career (Generous Top Breathing Room) */}
      <section className="pt-10 sm:pt-14 md:pt-16 lg:pt-20 pb-6 sm:pb-8 md:pb-10 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            FROM CAMPUS TO CAREER
          </h2>

          <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed max-w-4xl">
            At Mohamed Sathak A.J. College of Engineering, professional development begins from Day 1. The Placement Cell aligns academic learning with corporate expectations through structured skill training, industry interaction, internships, and transparent campus recruitment.
          </p>

          <div className="space-y-3 sm:space-y-4">
            {[
              {
                title: 'Continuous Guidance',
                desc: '1-on-1 faculty mentoring and aptitude alignment starting from the first semester.',
              },
              {
                title: 'Industry Synergies',
                desc: '65+ active corporate MoUs ensuring live project exposure and pre-placement offers.',
              },
              {
                title: 'Holistic Readiness',
                desc: 'Balanced technical coding, verbal articulation, and STAR method behavioral conditioning.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-3 sm:p-4 flex items-start gap-3.5 sm:gap-4 hover:bg-foreground/[0.015] transition-colors">
                <span className="shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs sm:text-sm mt-0.5 border border-foreground/20 shadow-2xs">
                  {idx + 1}
                </span>
                <div className="space-y-1 flex-1">
                  <h3 className="text-base sm:text-lg font-bold font-oswald uppercase tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('recruiters')}
              className="px-5 py-2.5 bg-primary text-white text-xs sm:text-sm font-bold font-oswald uppercase tracking-wider rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs hover:bg-primary/90 transition-all flex items-center gap-2 shadow-md cursor-pointer"
            >
              <span>Explore Recruiters</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('training')}
              className="px-5 py-2.5 bg-foreground/5 hover:bg-foreground/10 text-foreground text-xs sm:text-sm font-bold font-oswald uppercase tracking-wider rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-foreground/20 transition-all cursor-pointer"
            >
              <span>Skill Training Hub</span>
            </button>
          </div>
        </div>
      </section>

      {/* Wave Divider A -> B */}
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

      {/* SECTION 2: Canvas B (#F3F3F2 / #18181B) — Key Placement Metrics */}
      <section ref={statsRef} className="py-6 sm:py-8 md:py-10 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            PLACEMENT TRACK RECORD
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 pt-2">
            <div className="space-y-1">
              <p className="text-3xl sm:text-5xl font-black font-oswald text-primary tracking-tight">
                {counts.rate}%
              </p>
              <p className="text-xs sm:text-sm font-bold font-oswald uppercase tracking-wider text-foreground">
                Placement Rate
              </p>
              <p className="text-xs text-foreground/70 font-libre font-medium">
                Eligible cohorts
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-3xl sm:text-5xl font-black font-oswald text-primary tracking-tight">
                {counts.offers}+
              </p>
              <p className="text-xs sm:text-sm font-bold font-oswald uppercase tracking-wider text-foreground">
                Offers Made
              </p>
              <p className="text-xs text-foreground/70 font-libre font-medium">
                Full-time &amp; PPOs
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-3xl sm:text-5xl font-black font-oswald text-primary tracking-tight">
                {counts.companies}+
              </p>
              <p className="text-xs sm:text-sm font-bold font-oswald uppercase tracking-wider text-foreground">
                Recruiters
              </p>
              <p className="text-xs text-foreground/70 font-libre font-medium">
                Tier-1 &amp; Core MNCs
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-3xl sm:text-5xl font-black font-oswald text-primary tracking-tight">
                ₹{counts.highest} <span className="text-base font-bold">LPA</span>
              </p>
              <p className="text-xs sm:text-sm font-bold font-oswald uppercase tracking-wider text-foreground">
                Highest Package
              </p>
              <p className="text-xs text-foreground/70 font-libre font-medium">
                Peak compensation
              </p>
            </div>

            <div className="space-y-1 col-span-2 md:col-span-1">
              <p className="text-3xl sm:text-5xl font-black font-oswald text-primary tracking-tight">
                ₹{counts.average} <span className="text-base font-bold">LPA</span>
              </p>
              <p className="text-xs sm:text-sm font-bold font-oswald uppercase tracking-wider text-foreground">
                Average Package
              </p>
              <p className="text-xs text-foreground/70 font-libre font-medium">
                Consolidated average
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider B -> A */}
      <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-8 md:h-10 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-white dark:fill-[#121214]"
          />
        </svg>
      </div>

      {/* SECTION 3: Canvas A (White / #121214) — Readiness Pillars */}
      <section className="py-6 sm:py-8 md:py-10 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            AN ECOSYSTEM BUILT AROUND READINESS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {readinessPillars.map((pillar) => (
              <div 
                key={pillar.num}
                className="p-3 sm:p-4 flex items-start gap-3.5 sm:gap-4 hover:bg-foreground/[0.015] transition-colors"
              >
                <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs mt-0.5 border border-foreground/20">
                  {pillar.num}
                </span>
                <div className="space-y-1 flex-1">
                  <h3 className="text-base font-bold font-oswald uppercase tracking-tight text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-foreground font-libre font-medium leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Divider A -> B */}
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

      {/* SECTION 4: Canvas B (#F3F3F2 / #18181B) — Career Destination Pathways */}
      <section className="py-6 sm:py-8 md:py-10 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors pb-12 sm:pb-16">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            WHERE YOUR JOURNEY CAN TAKE YOU
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
            {destinationPathways.map((path, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate(path.nav)}
                className="p-3.5 sm:p-4 hover:bg-foreground/[0.02] transition-all cursor-pointer flex flex-col justify-between space-y-2.5 group"
              >
                <div className="space-y-1.5">
                  <span className="text-[10px] font-black font-oswald uppercase tracking-wider text-primary">
                    {path.tag}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold font-oswald uppercase text-foreground group-hover:text-primary transition-colors leading-snug">
                    {path.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground font-libre font-medium leading-relaxed">
                    {path.desc}
                  </p>
                </div>
                <div className="pt-1 flex items-center gap-1 text-xs font-bold font-oswald uppercase text-primary">
                  <span>Explore Track</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
