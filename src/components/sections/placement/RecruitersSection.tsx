import React from 'react';
import { 
  GraduationCap, 
  Users, 
  Briefcase, 
  Laptop, 
  Building2, 
  Building 
} from 'lucide-react';

interface RecruitersSectionProps {
  onNavigate?: (sectionId: string) => void;
}

export const RecruitersSection: React.FC<RecruitersSectionProps> = () => {
  const ecosystemItems = [
    {
      label: 'MSAJCE Talent Core',
      sub: 'Rigorous Curriculum & Labs',
      desc: 'Aspiring engineers grounded in Anna University curricula and outcome-based laboratory training.',
      icon: GraduationCap,
    },
    {
      label: 'Expert Dialogues',
      sub: 'Guest Lectures & Seminars',
      desc: 'Direct interaction with visiting industry leaders, corporate technologists, and subject matter experts.',
      icon: Users,
    },
    {
      label: 'Campus Recruitment',
      sub: 'On & Off-Campus Drives',
      desc: 'Structured placement drives hosting visiting organisations for technical evaluations and HR rounds.',
      icon: Briefcase,
    },
    {
      label: 'In-Plant Internships',
      sub: 'Practical Industry Immersion',
      desc: 'Mandatory summer and winter semester internships offering capstone projects and pre-placement offers.',
      icon: Laptop,
    },
    {
      label: 'Industrial Visits',
      sub: 'Manufacturing & Data Plants',
      desc: 'On-site visits allowing students to observe live automated production pipelines and enterprise servers.',
      icon: Building2,
    },
    {
      label: 'Corporate MoUs',
      sub: 'Institutional Alliances',
      desc: '65+ active corporate MoUs across core, automotive, software, and electronics sectors.',
      icon: Building,
    }
  ];

  const pathwayStages = [
    { num: '01', word: 'FOUNDATION', desc: 'Academic coursework and laboratory skills mastery.' },
    { num: '02', word: 'SKILLING', desc: 'Aptitude drills, coding bootcamps, and communication.' },
    { num: '03', word: 'ASSESSMENT', desc: 'Online diagnostic tests and proctored coding evaluations.' },
    { num: '04', word: 'INTERVIEW', desc: 'Technical panels, GD rounds, and executive HR interviews.' },
    { num: '05', word: 'PLACEMENT', desc: 'Formal offer letters and corporate onboarding.' },
  ];

  const majorRecruiters = [
    { name: 'Tata Consultancy Services', category: 'IT & Consulting' },
    { name: 'Infosys', category: 'Enterprise Tech' },
    { name: 'Cognizant', category: 'Digital Solutions' },
    { name: 'Wipro', category: 'Cloud & Services' },
    { name: 'Zoho Corporation', category: 'Product SaaS' },
    { name: 'Capgemini', category: 'Global Consulting' },
    { name: 'HCL Technologies', category: 'Engineering R&D' },
    { name: 'Tech Mahindra', category: 'Telecom & IT' },
    { name: 'Virtusa', category: 'Digital Engineering' },
    { name: 'Hexaware', category: 'Automation & AI' },
    { name: 'LTIMindtree', category: 'Technology' },
    { name: 'Sutherland Global', category: 'Enterprise Services' },
    { name: 'TVS Group', category: 'Automotive & Core' },
    { name: 'Ashok Leyland', category: 'Commercial Vehicles' },
    { name: 'Saint-Gobain', category: 'Materials Engineering' },
    { name: 'Bosch', category: 'Automotive & Mobility' },
    { name: 'Hyundai Mobis', category: 'Automotive Tech' },
    { name: 'L&T Infotech', category: 'Infrastructure Tech' }
  ];

  const matrixDimensions = [
    { dimension: 'Industry Domain', represents: 'Operating sector and business domain of the recruiting enterprise' },
    { dimension: 'Functional Role', represents: 'Specific engineering or technological role being recruited for' },
    { dimension: 'Skill Competencies', represents: 'Technical coding, problem solving, and professional verbal readiness' },
    { dimension: 'Selection Evaluation', represents: 'Computer-based assessments, technical panels, and executive HR interviews' },
    { dimension: 'Practical Exposure', represents: 'Prior internships, in-plant training, and verified project portfolios' }
  ];

  return (
    <div className="w-full">
      {/* SECTION 1: Canvas A (White / #121214) — Corporate Ecosystem Framework */}
      <section className="pt-10 sm:pt-14 md:pt-16 lg:pt-20 pb-6 sm:pb-8 md:pb-10 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            CORPORATE ECOSYSTEM &amp; RECRUITMENT ARCHITECTURE
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {ecosystemItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 flex items-start gap-3.5 sm:gap-4 hover:bg-foreground/[0.015] transition-colors"
                >
                  <span className="shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs sm:text-sm mt-0.5 border border-foreground/20">
                    <Icon className="w-4 h-4 text-primary" />
                  </span>
                  <div className="space-y-1 flex-1">
                    <span className="text-[10px] font-black font-oswald uppercase text-primary tracking-wider block">
                      {item.sub}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-oswald uppercase tracking-tight text-foreground">
                      {item.label}
                    </h3>
                    <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
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

      {/* SECTION 2: Canvas B (#F3F3F2 / #18181B) — 5-Stage Selection Pathway */}
      <section className="py-6 sm:py-8 md:py-10 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            CAMPUS RECRUITMENT PATHWAY
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {pathwayStages.map((stage) => (
              <div
                key={stage.num}
                className="p-3.5 sm:p-4 space-y-2 hover:bg-foreground/[0.015] transition-colors flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs border border-foreground/20">
                    {stage.num}
                  </span>
                  <h3 className="font-oswald font-bold uppercase text-base sm:text-lg text-foreground pt-1">
                    {stage.word}
                  </h3>
                  <p className="text-sm text-foreground font-libre font-medium leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
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

      {/* SECTION 3: Canvas A (White / #121214) — Major Recruiters Grid */}
      <section className="py-6 sm:py-8 md:py-10 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            MAJOR RECRUITERS &amp; CORPORATE PARTNERS
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {majorRecruiters.map((rec, idx) => (
              <div 
                key={idx}
                className="p-3 sm:p-3.5 hover:bg-foreground/[0.02] transition-colors flex flex-col justify-between min-h-[75px]"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary mb-1.5" />
                <div>
                  <h3 className="text-xs sm:text-sm font-bold font-oswald uppercase text-foreground leading-snug">
                    {rec.name}
                  </h3>
                  <p className="text-[10px] text-foreground/70 font-libre mt-0.5">
                    {rec.category}
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

      {/* SECTION 4: Canvas B (#F3F3F2 / #18181B) — Selection Dimensions Matrix Table */}
      <section className="py-6 sm:py-8 md:py-10 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors pb-12 sm:pb-16">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-5 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            RECRUITMENT EVALUATION PARAMETERS
          </h2>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[560px]">
              <thead>
                <tr className="border-b border-border/60">
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 sm:px-6 py-3.5 sm:py-4 w-16 sm:w-20">
                    S.No
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 sm:px-6 py-3.5 sm:py-4 w-48">
                    Dimension
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 sm:px-6 py-3.5 sm:py-4">
                    Assessment Focus
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {matrixDimensions.map((dim, idx) => (
                  <tr key={idx} className="hover:bg-muted/30 transition-colors">
                    <td className="px-4 sm:px-6 py-3.5 sm:py-4 font-oswald font-bold text-primary text-sm sm:text-base align-middle whitespace-nowrap">
                      {String(idx + 1).padStart(2, "0")}
                    </td>
                    <td className="px-4 sm:px-6 py-3.5 sm:py-4 font-oswald font-bold text-foreground text-sm sm:text-base align-middle whitespace-nowrap">
                      {dim.dimension}
                    </td>
                    <td className="px-4 sm:px-6 py-3.5 sm:py-4 font-libre font-medium text-xs sm:text-sm text-foreground align-middle leading-relaxed">
                      {dim.represents}
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
