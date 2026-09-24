import React, { useState, useMemo } from 'react';
import { 
  Search,
  CheckCircle2
} from 'lucide-react';
import { INTERNSHIP_RECORDS } from '@/lib/placementData';
import { FeaturedAchievement } from '@/types/placement';

interface InternshipsSectionProps {
  onOpenStory?: (story: FeaturedAchievement) => void;
}

interface CohortItem {
  id: string;
  title: string;
  category: string;
  sectorKey: 'hardware' | 'saas' | 'civil' | 'mobility';
  metric: string;
  studentCount: number;
  badge: string;
  image: string;
  description: string;
  tags: string[];
  outcomes: string[];
}

const COHORT_CARDS: CohortItem[] = [
  {
    id: 'lenovo',
    title: 'Lenovo (India) Pvt. Ltd.',
    category: 'HARDWARE QA & ADVANCED MANUFACTURING',
    sectorKey: 'hardware',
    metric: '75 Students',
    studentCount: 75,
    badge: 'TIER-1 MANUFACTURING',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80',
    description: 'Students deployed at high-precision electronics manufacturing and systems QA facilities in Sriperumbudur, mastering board-level testing, automated assembly and surface-mount production.',
    tags: ['Board-Level QA', 'SMT Production', 'Systems Automation', 'Sriperumbudur Hub'],
    outcomes: [
      'Mastered SMT assembly line automated inspection routines',
      'Engineered automated board diagnostic toolkits',
      'Converted 42 direct Pre-Placement Offers (PPOs)'
    ]
  },
  {
    id: 'zoho',
    title: "Zoho Tech's Cloud Suite",
    category: 'ENTERPRISE SAAS & UI/UX ARCHITECTURE',
    sectorKey: 'saas',
    metric: '51 Students',
    studentCount: 51,
    badge: 'PRODUCT ENGINEERING',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80',
    description: 'Full-stack software engineering internships working on live Zoho CRM and SaaS modules, distributed database caching, API pipelines, and real-time frontend frameworks.',
    tags: ['Full-Stack SaaS', 'Redis & Postgres', 'React / TS', 'Estancia IT Corridor'],
    outcomes: [
      'Shipped production code to live Zoho enterprise CRM apps',
      'Optimized backend query latency by 35% across API gateways',
      'Converted 36 full-time software engineering offers'
    ]
  },
  {
    id: 'greenvalleys',
    title: 'Green Valleys Shelters Pvt. Ltd.',
    category: 'INFRASTRUCTURE & STRUCTURAL ENGINEERING',
    sectorKey: 'civil',
    metric: '45 Students',
    studentCount: 45,
    badge: 'CIVIL EXCELLENCE',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?w=800&auto=format&fit=crop&q=80',
    description: 'Civil and structural engineering students conducting on-site surveying, foundation quality assurance, BIM coordination, and concrete durability analysis.',
    tags: ['Structural BIM', 'Concrete Testing', 'On-Site Surveying', 'Project Management'],
    outcomes: [
      'Led 3D BIM structural modeling for multi-story residential towers',
      'Performed soil load-bearing and ultrasonic concrete testing',
      'Converted 22 structural project management placements'
    ]
  },
  {
    id: 'tvs',
    title: 'TVS Motor Company & Auto R&D',
    category: 'AUTOMOTIVE POWERTRAIN & THERMAL SYSTEMS',
    sectorKey: 'mobility',
    metric: '38 Students',
    studentCount: 38,
    badge: 'MOBILITY TECH',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80',
    description: 'Mechanical and electrical engineers working on electric two-wheeler battery thermal management, chassis CAD/CAM modeling, and endurance dyno testing.',
    tags: ['EV Powertrain', 'CAD/CAM SolidWorks', 'Dyno Testing', 'Hosur R&D Plant'],
    outcomes: [
      'Simulated EV battery thermal dissipation for next-gen scooters',
      'Executed chassis endurance strain tests under simulated stress',
      'Converted 18 R&D Graduate Engineer Trainee roles'
    ]
  }
];

export const InternshipsSection: React.FC<InternshipsSectionProps> = () => {
  const [selectedYear, setSelectedYear] = useState<string>('2022-23');
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [spotlightId, setSpotlightId] = useState<string>('lenovo');

  const activeSpotlight = useMemo(() => {
    return (COHORT_CARDS.find(c => c.id === spotlightId) || COHORT_CARDS[0])!;
  }, [spotlightId]);

  const currentRecords = INTERNSHIP_RECORDS[selectedYear] || [];
  
  const filteredRecords = useMemo(() => {
    return currentRecords.filter(r => {
      const matchesSearch = 
        r.organisation.toLowerCase().includes(searchFilter.toLowerCase()) ||
        r.domain.toLowerCase().includes(searchFilter.toLowerCase());
      return matchesSearch;
    });
  }, [currentRecords, searchFilter]);

  return (
    <div className="w-full">
      {/* SECTION 1: Canvas A (White / #121214) — Experiential Learning Overview */}
      <section className="pt-10 sm:pt-14 md:pt-16 lg:pt-20 pb-6 sm:pb-8 md:pb-10 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            EXPERIENTIAL LEARNING &amp; IN-PLANT INTERNSHIPS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: 'Summer & Winter Internships',
                desc: 'Mandatory industrial training during semester breaks with leading Chennai and national IT/manufacturing corridors.',
                metric: '100% Eligible Students'
              },
              {
                title: 'PPO Conversion Pipeline',
                desc: 'High-performing student interns directly converting practical project performance into full-time employment offers.',
                metric: '65% Conversion Rate'
              },
              {
                title: 'Stipend Support',
                desc: 'Students earning competitive monthly stipends scaling up to ₹25,000/month during full-semester internships.',
                metric: 'Up to ₹25,000 / mo'
              },
              {
                title: 'Live Capstone Projects',
                desc: 'Industry-sponsored final year projects addressing real production bottlenecks and enterprise software needs.',
                metric: '65+ Corporate MoUs'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-3.5 sm:p-4 space-y-2 hover:bg-foreground/[0.015] transition-colors">
                <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs border border-foreground/20">
                  0{idx + 1}
                </span>
                <span className="text-xs font-black font-oswald uppercase text-primary block pt-1">
                  {item.metric}
                </span>
                <h3 className="text-base sm:text-lg font-bold font-oswald uppercase tracking-tight text-foreground leading-snug">
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

      {/* SECTION 2: Canvas B (#F3F3F2 / #18181B) — Major Industry Cohorts */}
      <section className="py-6 sm:py-8 md:py-10 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            FEATURED INDUSTRY COHORTS &amp; PPO ACHIEVEMENTS
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Cohort Selector Buttons */}
            <div className="lg:col-span-5 space-y-2.5">
              {COHORT_CARDS.map((cohort) => {
                const isSelected = spotlightId === cohort.id;
                return (
                  <button
                    key={cohort.id}
                    onClick={() => setSpotlightId(cohort.id)}
                    className={`w-full p-3.5 sm:p-4 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs text-left transition-all cursor-pointer border flex items-center justify-between ${
                      isSelected
                        ? 'bg-primary text-white border-primary shadow-md'
                        : 'bg-foreground/[0.02] text-foreground border-border/80 dark:border-white/10 hover:border-primary/50'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-black font-oswald uppercase tracking-wider block opacity-80">
                        {cohort.badge}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold font-oswald uppercase tracking-tight">
                        {cohort.title}
                      </h3>
                      <p className={`text-xs font-libre mt-0.5 ${
                        isSelected ? 'text-white/90' : 'text-foreground/70'
                      }`}>
                        {cohort.metric}
                      </p>
                    </div>
                    <span className={`text-xs font-bold font-oswald uppercase px-2.5 py-1 rounded-sm ${
                      isSelected ? 'bg-white text-primary' : 'bg-foreground/5 text-foreground'
                    }`}>
                      {cohort.studentCount} Students
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Cohort Showcase */}
            <div className="lg:col-span-7 space-y-4">
              <div className="aspect-[16/9] rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs overflow-hidden bg-muted shadow-sm">
                <img 
                  src={activeSpotlight.image} 
                  alt={activeSpotlight.title} 
                  className="w-full h-full object-cover select-none pointer-events-none" 
                />
              </div>

              <div className="space-y-2">
                <div>
                  <span className="text-xs font-black font-oswald uppercase tracking-wider text-primary">
                    {activeSpotlight.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase text-foreground">
                    {activeSpotlight.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                  {activeSpotlight.description}
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold font-oswald uppercase tracking-wider text-primary">
                  Verified Outcomes &amp; PPO Results:
                </h4>
                {activeSpotlight.outcomes.map((out, oIdx) => (
                  <div key={oIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground font-libre font-medium">{out}</p>
                  </div>
                ))}
              </div>
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

      {/* SECTION 3: Canvas A (White / #121214) — Filterable Internship Records Directory */}
      <section className="py-6 sm:py-8 md:py-10 bg-white dark:bg-[#121214] transition-colors pb-12 sm:pb-16">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-5 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              INTERNSHIP PLACEMENT RECORDS
            </h2>

            {/* Year Toggle */}
            <div className="flex items-center gap-2">
              {['2022-23', '2021-22', '2020-21'].map((yr) => (
                <button
                  key={yr}
                  onClick={() => setSelectedYear(yr)}
                  className={`px-3 py-1.5 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs text-xs font-bold font-oswald uppercase tracking-wider transition-all cursor-pointer ${
                    selectedYear === yr
                      ? 'bg-primary text-white shadow-xs'
                      : 'bg-foreground/[0.04] text-foreground border border-border/80 dark:border-white/10 hover:border-primary/50'
                  }`}
                >
                  {yr}
                </button>
              ))}
            </div>
          </div>

          {/* Search Input */}
          <div className="relative max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder="Search company or domain..."
              className="w-full pl-10 pr-4 py-2 bg-foreground/[0.02] border border-border/80 dark:border-white/10 rounded-tl-lg rounded-br-lg rounded-tr-xs rounded-bl-xs text-xs sm:text-sm font-libre focus:outline-none focus:border-primary"
            />
          </div>

          {/* Records Table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="border-b border-border/60">
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 sm:px-6 py-3.5 sm:py-4 w-16 sm:w-20">
                    S.No
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 sm:px-6 py-3.5 sm:py-4">
                    Company / Organisation
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 sm:px-6 py-3.5 sm:py-4">
                    Domain / Technology
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 sm:px-6 py-3.5 sm:py-4 w-32">
                    Students
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 sm:px-6 py-3.5 sm:py-4 w-36">
                    Mode
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {filteredRecords.map((rec, idx) => (
                  <tr key={idx} className="hover:bg-muted/30 transition-colors">
                    <td className="px-4 sm:px-6 py-3.5 sm:py-4 font-oswald font-bold text-primary text-sm sm:text-base align-middle whitespace-nowrap">
                      {String(idx + 1).padStart(2, "0")}
                    </td>
                    <td className="px-4 sm:px-6 py-3.5 sm:py-4 font-libre font-bold text-foreground text-sm sm:text-base align-middle">
                      {rec.organisation}
                    </td>
                    <td className="px-4 sm:px-6 py-3.5 sm:py-4 font-libre font-medium text-xs sm:text-sm text-foreground align-middle">
                      {rec.domain}
                    </td>
                    <td className="px-4 sm:px-6 py-3.5 sm:py-4 font-oswald font-bold text-primary text-sm align-middle whitespace-nowrap">
                      {rec.students} Students
                    </td>
                    <td className="px-4 sm:px-6 py-3.5 sm:py-4 font-libre font-medium text-xs sm:text-sm text-foreground/80 align-middle whitespace-nowrap">
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
