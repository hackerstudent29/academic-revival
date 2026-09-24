import React, { useState } from 'react';
import { INTERNSHIP_RECORDS } from '@/lib/placementData';
import { FeaturedAchievement } from '@/types/placement';
import { CustomDropdown } from '@/components/ui/custom-dropdown';

interface InternshipsSectionProps {
  onOpenStory?: (story: FeaturedAchievement) => void;
}

export const InternshipsSection: React.FC<InternshipsSectionProps> = () => {
  const [selectedYear, setSelectedYear] = useState<string>('2022-23');

  const cohortHighlights = [
    {
      id: 'lenovo',
      title: 'Lenovo (India)',
      badge: 'Hardware QA',
      metric: '75 Students',
      desc: 'Electronics assembly, automated board QA diagnostics, and systems testing in Sriperumbudur.',
      ppos: '42 Direct PPOs',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 'zoho',
      title: "Zoho Tech's Cloud Suite",
      badge: 'Product SaaS',
      metric: '51 Students',
      desc: 'Full-stack software engineering on live Zoho CRM modules, APIs, and microservices.',
      ppos: '36 Direct PPOs',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 'greenvalleys',
      title: 'Green Valleys Shelters',
      badge: 'Structural Civil',
      metric: '45 Students',
      desc: 'On-site structural surveying, 3D BIM coordination, and concrete durability testing.',
      ppos: '22 Direct PPOs',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 'tvs',
      title: 'TVS Motor & Auto R&D',
      badge: 'Mobility Tech',
      metric: '38 Students',
      desc: 'EV battery thermal simulation, CAD/CAM modeling, and dyno stress testing in Hosur.',
      ppos: '18 Direct PPOs',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80',
    },
  ];

  const currentRecords = INTERNSHIP_RECORDS[selectedYear] || [];

  return (
    <div className="w-full">
      {/* SECTION 1: Canvas A (White / #121214) — Experiential Learning Overview */}
      <section className="pt-8 sm:pt-12 md:pt-14 pb-8 sm:pb-12 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            EXPERIENTIAL LEARNING &amp; INTERNSHIPS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                metric: '100% Eligible Students',
                title: 'Summer & Winter Internships',
                desc: 'Mandatory industrial training during semester breaks with top tech and core hubs.',
              },
              {
                num: '02',
                metric: '65% Conversion Rate',
                title: 'PPO Conversion Pipeline',
                desc: 'Student interns converting practical project performance directly into full-time offers.',
              },
              {
                num: '03',
                metric: 'Up to ₹25,000 / mo',
                title: 'Stipend Support',
                desc: 'Competitive monthly stipends offered to students during full-semester industry tracks.',
              },
              {
                num: '04',
                metric: '65+ Corporate MoUs',
                title: 'Live Capstone Projects',
                desc: 'Industry-sponsored final year projects solving active enterprise production challenges.',
              },
            ].map((item) => (
              <div key={item.num} className="space-y-2 py-1">
                <div className="flex items-center gap-3">
                  <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs border border-foreground/20">
                    {item.num}
                  </span>
                  <span className="text-xs font-black font-oswald uppercase text-primary">
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

      {/* SECTION 2: Canvas B (#F3F3F2 / #18181B) — Featured Industry Cohorts */}
      <section className="pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-14 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            FEATURED INDUSTRY COHORTS &amp; PPOs
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cohortHighlights.map((cohort) => (
              <div key={cohort.id} className="space-y-3 group py-1">
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-muted border border-border/30">
                  <img
                    src={cohort.image}
                    alt={cohort.title}
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                  <span className="absolute top-2.5 right-2.5 bg-primary text-white text-[10px] font-bold font-oswald uppercase tracking-wider px-2 py-0.5 rounded-sm shadow-sm">
                    {cohort.metric}
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black font-oswald uppercase text-primary tracking-wider">
                      {cohort.badge}
                    </span>
                    <span className="text-[11px] font-bold font-oswald uppercase text-foreground/70">
                      {cohort.ppos}
                    </span>
                  </div>
                  <h3 className="text-base font-bold font-oswald uppercase text-foreground leading-snug">
                    {cohort.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/80 font-libre font-medium leading-relaxed">
                    {cohort.desc}
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

      {/* SECTION 3: Canvas A (White / #121214) — Dropdown Style Internship Records Directory */}
      <section className="pt-8 sm:pt-10 md:pt-12 pb-14 sm:pb-18 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
          {/* Section Header with Academic Year Dropdown Selector */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/40 pb-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              INTERNSHIP PLACEMENT RECORDS
            </h2>

            {/* Academic Year Custom Dropdown Select */}
            <div className="flex items-center gap-2">
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

          {/* Clean Records Table (No Search Input or Search Button) */}
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
