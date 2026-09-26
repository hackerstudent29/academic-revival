import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { INTERNSHIP_RECORDS } from '@/lib/placementData';
import { CustomDropdown } from '@/components/ui/custom-dropdown';
import { FeaturedAchievement } from '@/types/placement';

interface InternshipsSectionProps {
  onOpenStory?: (story: FeaturedAchievement) => void;
}

const INTERNSHIP_PARTNERS = [
  { name: 'Lenovo', category: 'Smart Infrastructure & QA', logo: '/logos/lenovo.svg' },
  { name: 'Zoho Corporation', category: 'Product SaaS & Cloud', logo: '/logos/zoho_new.svg' },
  { name: 'TVS Group', category: 'Automotive & Mechatronics R&D', logo: '/logos/tvs.svg' },
  { name: 'Amazon', category: 'Cloud & Distributed Systems', logo: '/logos/amazon.svg' },
  { name: 'Tata Consultancy Services', category: 'IT & Digital Engineering', logo: '/logos/tcs.svg' },
  { name: 'Infosys', category: 'Enterprise Tech & Agile', logo: '/logos/infosys.svg' },
  { name: 'Cognizant', category: 'Digital Solutions & Next-Gen', logo: '/logos/cognizant.svg' },
  { name: 'Wipro', category: 'Cloud Infrastructure & Systems', logo: '/logos/wipro.svg' },
  { name: 'IBM', category: 'Enterprise AI & Cloud Platforms', logo: '/logos/ibm.svg' },
  { name: 'Valeo', category: 'Automotive Powertrain & Embedded', logo: '/logos/valeo.svg' },
  { name: 'Hitachi', category: 'Industrial Systems & Automation', logo: '/logos/hitachi.svg' },
  { name: 'Aspire Systems', category: 'Software Architecture & QA', logo: '/logos/aspire.png' },
  { name: 'Movate', category: 'Customer Experience & Cloud', logo: '/logos/movate.png' },
  { name: 'QBurst', category: 'Product Development & Web', logo: '/logos/qburst.png' },
  { name: 'CustomerLabs', category: 'Data Platforms & Analytics', logo: '/logos/customerlabs.png' },
  { name: 'NLC India', category: 'Navratna PSU In-Plant Training', logo: '/logos/nlc.png' },
  { name: 'Openwave Computing', category: 'Digital Solutions & Telecom', logo: '/logos/openwave.png' },
];

const ANNUAL_INTERNSHIP_REPORTS = [
  {
    year: 'AY 2025–26',
    title: 'Annual Student Internship Report & Performance Summary',
    url: 'https://www.msajce-edu.in/uploads/placement/colloboration/INTERNSHIP/.pdf',
    status: 'Official Report',
  },
  {
    year: 'AY 2024–25',
    title: 'Annual Student Internship Report & Performance Summary',
    url: 'https://www.msajce-edu.in/uploads/placement/colloboration/INTERNSHIP/Internship2024-25.pdf',
    status: 'Official Report',
  },
  {
    year: 'AY 2023–24',
    title: 'Annual Student Internship Report & Performance Summary',
    url: 'https://www.msajce-edu.in/uploads/placement/colloboration/INTERNSHIP/Internship2023-24.pdf',
    status: 'Official Report',
  },
  {
    year: 'AY 2022–23',
    title: 'Annual Student Internship Report & Performance Summary',
    url: 'https://www.msajce-edu.in/uploads/placement/colloboration/INTERNSHIP/Internship2022-23.pdf',
    status: 'Official Report',
  },
];

export const InternshipsSection: React.FC<InternshipsSectionProps> = () => {
  const [selectedYear, setSelectedYear] = useState<string>('2022-23');

  const currentRecords = INTERNSHIP_RECORDS[selectedYear] || [];

  return (
    <div className="w-full">
      {/* SECTION 1: Canvas A (White / #121214) — Experiential Learning & Internship Overview */}
      <section className="pt-8 sm:pt-12 md:pt-14 pb-8 sm:pb-12 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            OVERVIEW
          </h2>

          <div className="space-y-4 w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
            <p>
              At Mohamed Sathak A.J. College of Engineering (MSAJCE), student internships form an integral component of experiential learning, bridging theoretical engineering education with industrial practices.
            </p>
            <p>
              Through established corporate alliances and the Industry–Institute Interaction (III) Cell, students undertake mandatory summer and winter internships across technology leaders, manufacturing facilities, and research centers. Under the close guidance of faculty mentors and industry supervisors, students engage in hands-on technical projects, building specialized competencies and workplace readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {[
              {
                num: '1',
                metric: '100% Eligible Students',
                title: 'Summer & Winter Internships',
                desc: 'Structured industrial internships during semester breaks across core engineering and modern digital sectors.',
              },
              {
                num: '2',
                metric: 'Faculty & Industry Mentors',
                title: 'Dedicated Mentorship',
                desc: 'Direct 1-on-1 guidance from corporate project leaders and departmental faculty coordinators.',
              },
              {
                num: '3',
                metric: 'Competitive Stipends',
                title: 'Stipend Opportunities',
                desc: 'Monthly stipend support provided to student interns during full-semester and corporate industry tracks.',
              },
              {
                num: '4',
                metric: '65+ Corporate MoUs',
                title: 'Live Capstone Projects',
                desc: 'Enterprise-sponsored final year projects solving active industrial and engineering production challenges.',
              },
            ].map((item) => (
              <div key={item.num} className="space-y-2 py-1">
                <div className="flex items-center gap-3">
                  <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs border border-primary/20">
                    {item.num}
                  </span>
                  <span className="text-[10px] font-black font-oswald uppercase text-primary tracking-wider">
                    {item.metric}
                  </span>
                </div>
                <h3 className="text-base font-bold font-oswald uppercase text-foreground leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-foreground/80 font-libre font-medium leading-relaxed">
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
          className="w-full h-8 sm:h-12 md:h-14 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-[#F3F3F2] dark:fill-[#18181B]"
          />
        </svg>
      </div>

      {/* SECTION 2: Canvas B (#F3F3F2 / #18181B) — Internship Partner Companies */}
      <section className="pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-14 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              INTERNSHIP PARTNER COMPANIES
            </h2>
            <p className="text-xs sm:text-sm text-foreground/80 font-libre font-medium mt-1">
              Leading corporate organizations and technology enterprises providing industrial internships, hands-on training, and project sponsorships for MSAJCE engineering students.
            </p>
          </div>

          {/* Clean Open Partner Logo Grid — Flat, Static, No Zoom Animations */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-10 items-center pt-2">
            {INTERNSHIP_PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center justify-center text-center p-2 group space-y-2"
              >
                <div className="h-12 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-10 max-w-[130px] w-auto object-contain select-none pointer-events-none filter contrast-105 opacity-90 group-hover:opacity-100 transition-opacity dark:brightness-150"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-xs sm:text-sm font-bold font-oswald uppercase text-foreground leading-tight">
                    {partner.name}
                  </h3>
                  <p className="text-[11px] text-foreground/70 font-libre font-medium leading-tight">
                    {partner.category}
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
          className="w-full h-8 sm:h-12 md:h-14 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-white dark:fill-[#121214]"
          />
        </svg>
      </div>

      {/* SECTION 3: Canvas A (White / #121214) — Annual Internship Reports & Year Directory */}
      <section className="pt-8 sm:pt-10 md:pt-12 pb-14 sm:pb-18 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-10">
          {/* Part 1: Official Annual Internship Reports */}
          <div className="space-y-4">
            <div className="border-b border-border/40 pb-3">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                ANNUAL INTERNSHIP REPORTS
              </h2>
              <p className="text-xs sm:text-sm text-foreground/80 font-libre font-medium mt-1">
                Official institutional reports detailing student industrial internships, domain breakdown, and corporate participation.
              </p>
            </div>

            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-border/60">
                    <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5 w-36">
                      Academic Year
                    </th>
                    <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5">
                      Official Internship Document / Schedule
                    </th>
                    <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5 w-32 text-center">
                      Action / Report
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {ANNUAL_INTERNSHIP_REPORTS.map((report, idx) => (
                    <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                      <td className="px-4 py-3.5 font-oswald font-bold text-primary text-sm whitespace-nowrap">
                        {report.year}
                      </td>
                      <td className="px-4 py-3.5 font-libre font-bold text-foreground text-sm">
                        {report.title}
                      </td>
                      <td className="px-4 py-3.5 text-center align-middle whitespace-nowrap">
                        <a
                          href={report.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold font-oswald uppercase text-primary hover:underline"
                        >
                          <span>View PDF</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Part 2: Year-wise Student Internship Distribution Directory with Dropdown (No Search Button) */}
          <div className="space-y-4 pt-4 border-t border-border/40">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/40 pb-3">
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                  COMPANY-WISE INTERNSHIP DISTRIBUTION DIRECTORY
                </h3>
                <p className="text-xs text-foreground/75 font-libre font-medium mt-0.5">
                  Select an academic year to review student engagement numbers, technology focus, and industrial training modes.
                </p>
              </div>

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
        </div>
      </section>
    </div>
  );
};
