import React from 'react';
import { 
  BookOpen, 
  Compass, 
  Users, 
  Award,
  Globe
} from 'lucide-react';
import { PlacementPulseEvent } from '@/types/placement';

interface JourneySectionProps {
  onOpenEvent?: (event: PlacementPulseEvent) => void;
  onOpenBrochure?: () => void;
  onOpenContact?: () => void;
}

const GLOBAL_JOURNEY_STEPS = [
  {
    num: '01',
    stage: 'YEARS 1–3',
    title: 'Undergraduate Foundation',
    desc: 'Rigorous engineering coursework, laboratory projects, and faculty research mentorship establishing strong academic transcripts.',
    icon: BookOpen
  },
  {
    num: '02',
    stage: 'SEMESTER 5',
    title: 'Higher Studies Orientation',
    desc: 'Comprehensive seminars on global Master’s/Ph.D. options, international scholarships, and application timelines.',
    icon: Compass
  },
  {
    num: '03',
    stage: 'SEMESTER 6',
    title: 'Standardised Test Prep',
    desc: 'Dedicated coaching and mock tests for GRE, IELTS/TOEFL English proficiency, and GATE for premier Indian institutions.',
    icon: Award
  },
  {
    num: '04',
    stage: 'SEMESTER 7',
    title: 'SOP & Profile Review',
    desc: '1-on-1 statement of purpose refinement, faculty letter of recommendation coordination, and tailored university shortlisting.',
    icon: Users
  },
  {
    num: '05',
    stage: 'SEMESTER 8',
    title: 'Global University Admissions',
    desc: 'Final offer letter acceptance, visa document vetting, and pre-departure briefings for international student success.',
    icon: Globe
  }
];

export const JourneySection: React.FC<JourneySectionProps> = () => {
  const examTableData = [
    {
      exam: 'GRE',
      fullName: 'Graduate Record Examinations',
      pathway: 'Overseas higher education (US, Germany, Singapore & Global)',
      support: 'Diagnostic testing & quantitative drills'
    },
    {
      exam: 'TOEFL',
      fullName: 'Test of English as a Foreign Language',
      pathway: 'English proficiency for overseas university admissions',
      support: 'Language lab training & mock exams'
    },
    {
      exam: 'IELTS',
      fullName: 'International English Language Testing System',
      pathway: 'Overseas education & migration (UK, Canada, Europe, Australia)',
      support: 'Structured speaking & listening modules'
    },
    {
      exam: 'CAT',
      fullName: 'Common Admission Test',
      pathway: 'Management postgraduate pathways (IIMs & Premier Indian B-Schools)',
      support: 'Data interpretation & aptitude workshops'
    },
    {
      exam: 'GATE',
      fullName: 'Graduate Aptitude Test in Engineering',
      pathway: 'M.Tech / Ph.D. in IITs, IISc, NITs and PSU career recruitment',
      support: 'Core technical syllabus coaching'
    },
  ];

  return (
    <div className="w-full">
      {/* SECTION 1: Canvas A (White / #121214) — Higher Education Overview */}
      <section className="pt-10 sm:pt-14 md:pt-16 lg:pt-20 pb-6 sm:pb-8 md:pb-10 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            HIGHER STUDIES &amp; GLOBAL FELLOWSHIPS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: 'Research Specialization',
                desc: 'Transitioning from foundational engineering to specialized research in AI, Robotics, VLSI, and Renewable Energy.',
              },
              {
                title: 'International Scholarships',
                desc: 'Comprehensive guidance on institutional fellowships, government grants, and tuition fee waivers across global universities.',
              },
              {
                title: 'Global Career Mobility',
                desc: 'Alumni pursuing postgraduate studies and global engineering careers in the USA, Germany, UK, Singapore, and Australia.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-3.5 sm:p-4 space-y-2 hover:bg-foreground/[0.015] transition-colors">
                <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs border border-foreground/20">
                  0{idx + 1}
                </span>
                <h3 className="text-base sm:text-lg font-bold font-oswald uppercase tracking-tight text-foreground pt-1">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground font-libre font-medium leading-relaxed">
                  {item.desc}
                </p>
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

      {/* SECTION 2: Canvas B (#F3F3F2 / #18181B) — 5-Stage Graduate Roadmap */}
      <section className="py-6 sm:py-8 md:py-10 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            THE 5-STAGE GLOBAL GRADUATE ROADMAP
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {GLOBAL_JOURNEY_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.num}
                  className="p-3.5 sm:p-4 space-y-2 hover:bg-foreground/[0.015] transition-colors flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs border border-foreground/20">
                        {step.num}
                      </span>
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-xs font-black font-oswald uppercase text-primary block pt-1">
                      {step.stage}
                    </span>
                    <h3 className="font-oswald font-bold uppercase text-base sm:text-lg text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-foreground font-libre font-medium leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
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

      {/* SECTION 3: Canvas A (White / #121214) — Standardised Exam Support Table */}
      <section className="py-6 sm:py-8 md:py-10 bg-white dark:bg-[#121214] transition-colors pb-12 sm:pb-16">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-5 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            STANDARDISED EXAM SUPPORT MATRIX
          </h2>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="border-b border-border/60">
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 sm:px-6 py-3.5 sm:py-4 w-28">
                    Exam
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 sm:px-6 py-3.5 sm:py-4 w-52">
                    Full Name
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 sm:px-6 py-3.5 sm:py-4">
                    Primary Academic Pathway
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 sm:px-6 py-3.5 sm:py-4 w-52">
                    Institutional Support
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {examTableData.map((item, idx) => (
                  <tr key={idx} className="hover:bg-muted/30 transition-colors">
                    <td className="px-4 sm:px-6 py-3.5 sm:py-4 font-oswald font-black text-primary text-sm sm:text-base align-middle whitespace-nowrap">
                      {item.exam}
                    </td>
                    <td className="px-4 sm:px-6 py-3.5 sm:py-4 font-libre font-bold text-foreground text-xs sm:text-sm align-middle whitespace-nowrap">
                      {item.fullName}
                    </td>
                    <td className="px-4 sm:px-6 py-3.5 sm:py-4 font-libre font-medium text-xs sm:text-sm text-foreground align-middle leading-relaxed">
                      {item.pathway}
                    </td>
                    <td className="px-4 sm:px-6 py-3.5 sm:py-4 font-libre font-semibold text-xs sm:text-sm text-foreground/80 align-middle">
                      {item.support}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
