import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Facility } from '@/types/placement';
import { ImageAutoSlider } from '@/components/ui/image-auto-slider';
import { CustomDropdown } from '@/components/ui/custom-dropdown';
import { INTERNSHIP_RECORDS } from '@/lib/placementData';

interface TrainingSectionProps {
  onOpenFacility?: (facility: Facility) => void;
  onNavigate?: (sectionId: string) => void;
}


const TRAINING_INTERNSHIP_ACTIVITIES = [
  {
    activity: 'Student Training Program',
    ay25: 'https://www.msajce-edu.in/uploads/placement/training/Training2025-26.pdf',
    ay24: 'https://www.msajce-edu.in/uploads/placement/training/Training2024-25.pdf',
    ay23: 'https://www.msajce-edu.in/uploads/placement/training/Training2023-24.pdf',
    ay22: 'https://www.msajce-edu.in/uploads/placement/training/Training2022-23.pdf',
  },
  {
    activity: 'Industrial Internships',
    ay25: 'https://www.msajce-edu.in/uploads/placement/colloboration/INTERNSHIP/.pdf',
    ay24: 'https://www.msajce-edu.in/uploads/placement/colloboration/INTERNSHIP/Internship2024-25.pdf',
    ay23: 'https://www.msajce-edu.in/uploads/placement/colloboration/INTERNSHIP/Internship2023-24.pdf',
    ay22: 'https://www.msajce-edu.in/uploads/placement/colloboration/INTERNSHIP/Internship2022-23.pdf',
  },
  {
    activity: 'Industrial Visits (IV)',
    ay25: 'https://www.msajce-edu.in/uploads/placement/colloboration/INDUSTRY-VISIT/IV25-26.pdf',
    ay24: 'https://www.msajce-edu.in/uploads/placement/colloboration/INDUSTRY-VISIT/IV24-25.pdf',
    ay23: 'https://www.msajce-edu.in/uploads/placement/colloboration/INDUSTRY-VISIT/IV23-24.pdf',
    ay22: 'https://www.msajce-edu.in/uploads/placement/colloboration/INDUSTRY-VISIT/IV22-23.pdf',
  },
];

export const TrainingSection: React.FC<TrainingSectionProps> = () => {
  const [selectedYear, setSelectedYear] = useState<string>('2022-23');

  const currentRecords = INTERNSHIP_RECORDS[selectedYear] || [];

  return (
    <div className="w-full">
      {/* SECTION 1: Canvas A (White / #121214) — Skill Architecture & Career Counselling */}
      <section className="pt-8 sm:pt-12 md:pt-14 pb-10 sm:pb-14 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            SKILL TRAINING
          </h2>
          <div className="space-y-4 w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
            <p>
              At Mohamed Sathak A.J. College of Engineering (MSAJCE), student skilling and experiential learning work in close synergy. The Training &amp; Placement Cell provides on-campus career counselling, domain skill labs, and quantitative reasoning from early semesters, while facilitating mandatory summer and winter industrial internships with premier technology and core engineering corporations.
            </p>
            <p>
              Students are directed by dedicated faculty mentors who handle individual learning requirements, conduct diagnostic skill mapping, and maintain focus toward specific recruitment targets throughout their academic tenure.
            </p>
            <p>
              Foundation skilling in Quantitative Aptitude &amp; Logic focuses on speed mathematics, logical reasoning, and recruiter diagnostic test formats. Soft Skills development in Corporate Communication enhances verbal articulation, workplace presentation clarity, and executive email etiquette. Core Competency skilling in Full-Stack Technical Skills encompasses data structures, algorithms, cloud computing, and core domain engineering. Experiential learning delivers Industry Certifications &amp; Internships, offering hands-on credentials for AWS, Cisco, and mandatory summer and winter in-plant internships.
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

      {/* SECTION 2: Canvas B (#F3F3F2 / #18181B) — Training & Placement Infrastructure */}
      <section className="pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-14 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            TRAINING &amp; PLACEMENT INFRASTRUCTURE
          </h2>

          <ImageAutoSlider />
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

      {/* SECTION 3: Canvas A (White / #121214) — Annual Training & Internship Reports */}
      <section className="pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-14 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            ANNUAL TRAINING &amp; INTERNSHIP REPORTS
          </h2>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-border/60">
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5">
                    Training &amp; Internship Activity / Domain
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
                {TRAINING_INTERNSHIP_ACTIVITIES.map((row, idx) => (
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

      {/* SECTION 4: Canvas B (#F3F3F2 / #18181B) — Company-wise Internship Distribution Directory */}
      <section className="pt-8 sm:pt-10 md:pt-12 pb-14 sm:pb-18 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              COMPANY-WISE INTERNSHIP DISTRIBUTION DIRECTORY
            </h2>

            {/* Academic Year Custom Dropdown Select */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs font-bold font-oswald uppercase tracking-wider text-foreground/70 hidden sm:inline">
                Academic Year:
              </span>
              <CustomDropdown
                options={[
                  { value: '2022-23', label: '2022-23 Academic Year' },
                  { value: '2021-22', label: '2021-22 Academic Year' },
                  { value: '2020-21', label: '2020-21 Academic Year' },
                ]}
                value={selectedYear}
                onChange={(val) => setSelectedYear(val)}
              />
            </div>
          </div>

          {/* Clean Records Table (NO Search Input or Search Button) */}
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-border/60">
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3 w-16">
                    S.No
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3">
                    Company / Organisation
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3">
                    Domain / Technology Focus
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3 w-28">
                    Students
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3 w-32">
                    Mode
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {currentRecords.map((rec, idx) => (
                  <tr key={rec.id || idx} className="hover:bg-foreground/[0.02] transition-colors">
                    <td className="px-4 py-3 font-oswald font-bold text-primary text-sm whitespace-nowrap">
                      {String(idx + 1).padStart(2, "0")}
                    </td>
                    <td className="px-4 py-3 font-libre font-bold text-foreground text-sm">
                      {rec.organisation}
                    </td>
                    <td className="px-4 py-3 font-libre font-medium text-xs sm:text-sm text-foreground/90">
                      {rec.domain}
                    </td>
                    <td className="px-4 py-3 font-oswald font-bold text-primary text-sm whitespace-nowrap">
                      {rec.students} Students
                    </td>
                    <td className="px-4 py-3 font-libre font-medium text-xs sm:text-sm text-foreground/75 whitespace-nowrap">
                      {rec.mode}
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
