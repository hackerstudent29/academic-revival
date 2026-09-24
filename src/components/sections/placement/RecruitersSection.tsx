import React from 'react';
import { ExternalLink } from 'lucide-react';

interface RecruitersSectionProps {
  onNavigate?: (sectionId: string) => void;
}

const PLACEMENT_DRIVE_DATA = [
  {
    activity: 'Campus Placement Drives',
    ay25: 'https://www.msajce-edu.in/uploads/placement/colloboration/PLACEMENT/placementdetails2025-2026.pdf',
    ay24: 'https://www.msajce-edu.in/uploads/placement/colloboration/PLACEMENT/placementdetails2024-2025.pdf',
    ay23: 'https://www.msajce-edu.in/uploads/placement/colloboration/PLACEMENT/placementdetails2023-2024.pdf',
    ay22: 'https://www.msajce-edu.in/uploads/placement/colloboration/PLACEMENT/placementdetails2022-2023.pdf',
  },
];

const PATHWAY_STAGES = [
  {
    num: 1,
    word: 'Foundation',
    desc: 'Core academic engineering coursework, mathematical rigor, and hands-on laboratory mastery.',
  },
  {
    num: 2,
    word: 'Skilling',
    desc: 'Quantitative aptitude drills, competitive coding bootcamps, and executive communication training.',
  },
  {
    num: 3,
    word: 'Assessment',
    desc: 'Online diagnostic evaluations, timed coding challenges, and mock technical assessments.',
  },
  {
    num: 4,
    word: 'Interview',
    desc: 'Domain-specific technical panels, group discussion rounds, and corporate HR interviews.',
  },
  {
    num: 5,
    word: 'Placement',
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

export const RecruitersSection: React.FC<RecruitersSectionProps> = () => {
  return (
    <div className="w-full">
      {/* ========================================================================= */}
      {/* 1. SECTION A (White / #121214): PLACEMENT OVERVIEW                        */}
      {/* ========================================================================= */}
      <section className="pt-8 sm:pt-12 md:pt-14 pb-10 sm:pb-14 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            PLACEMENT OVERVIEW
          </h2>
          <div className="space-y-4 w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
            <p>
              Mohamed Sathak A.J. College of Engineering (MSAJCE) maintains a dynamic campus placement ecosystem connecting graduates with leading multinational corporations, global consultancies, and innovative engineering enterprises. The Training &amp; Placement Cell coordinates structured recruitment drives, pre-placement interactions, technical assessments, and interview panels to match students with high-value career roles.
            </p>
            <p>
              Supported by enduring corporate partnerships across Fortune 500 enterprises and Tier-1 recruiters, our graduates consistently achieve high placement conversion rates, pre-placement offers (PPOs), and direct corporate onboarding.
            </p>
          </div>
        </div>
      </section>

      {/* Wave Divider A -> B */}
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
      {/* 2. SECTION B (#F3F3F2 / #18181B): CAMPUS PLACEMENT DRIVES                 */}
      {/* ========================================================================= */}
      <section className="pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-14 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            CAMPUS PLACEMENT DRIVES
          </h2>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-border/60">
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5">
                    Placement Activity / Domain
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5 text-center w-28">
                    AY 2025–26
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5 text-center w-28">
                    AY 2024–25
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5 text-center w-28">
                    AY 2023–24
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5 text-center w-28">
                    AY 2022–23
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {PLACEMENT_DRIVE_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                    <td className="px-4 py-3.5 font-libre font-bold text-foreground text-sm">
                      {row.activity}
                    </td>
                    <td className="px-4 py-3.5 text-center align-middle">
                      {row.ay25 ? (
                        <a
                          href={row.ay25}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold font-oswald uppercase text-primary hover:underline"
                        >
                          <span>VIEW</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-xs text-foreground/40 font-mono">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3.5 text-center align-middle">
                      {row.ay24 ? (
                        <a
                          href={row.ay24}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold font-oswald uppercase text-primary hover:underline"
                        >
                          <span>VIEW</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-xs text-foreground/40 font-mono">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3.5 text-center align-middle">
                      {row.ay23 ? (
                        <a
                          href={row.ay23}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold font-oswald uppercase text-primary hover:underline"
                        >
                          <span>VIEW</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-xs text-foreground/40 font-mono">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3.5 text-center align-middle">
                      {row.ay22 ? (
                        <a
                          href={row.ay22}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold font-oswald uppercase text-primary hover:underline"
                        >
                          <span>VIEW</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-xs text-foreground/40 font-mono">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Wave Divider B -> A */}
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
      {/* 3. SECTION A (White / #121214): CAMPUS RECRUITMENT PATHWAY (POINTS)       */}
      {/* ========================================================================= */}
      <section className="pt-8 sm:pt-12 md:pt-14 pb-10 sm:pb-14 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            CAMPUS RECRUITMENT PATHWAY
          </h2>

          <div className="divide-y divide-border/40 font-libre">
            {PATHWAY_STAGES.map((stage) => (
              <div
                key={stage.num}
                className="py-3.5 sm:py-4 px-1 sm:px-3 flex items-start gap-3.5 sm:gap-4 hover:bg-primary/[0.02] transition-colors"
              >
                <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                  {stage.num}
                </span>
                <div className="flex-1 pt-0.5 space-y-1">
                  <h3 className="font-oswald font-bold uppercase text-base sm:text-lg text-foreground tracking-tight leading-tight">
                    {stage.word}
                  </h3>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                    {stage.desc}
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
      {/* 4. SECTION B (Canvas B: #F3F3F2 / #18181B): MAJOR RECRUITERS & PARTNERS    */}
      {/* ========================================================================= */}
      <section className="pt-8 sm:pt-10 md:pt-12 pb-14 sm:pb-18 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            MAJOR RECRUITERS &amp; CORPORATE PARTNERS
          </h2>

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
        </div>
      </section>
    </div>
  );
};
