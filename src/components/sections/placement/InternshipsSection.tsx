import React, { useState } from 'react';
import { 
  Search,
  Building2,
  Calendar,
  CheckCircle2,
  TrendingUp,
  Award,
  Compass,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { INTERNSHIP_RECORDS } from '@/lib/placementData';
import { FeaturedAchievement } from '@/types/placement';

interface InternshipsSectionProps {
  onOpenStory?: (story: FeaturedAchievement) => void;
}

const MatteArchPhotoFrame: React.FC<{
  src: string;
  alt: string;
  className?: string;
  accentColor?: 'teal' | 'navy' | 'blue';
}> = ({ src, alt, className = '', accentColor = 'teal' }) => {
  const getBorders = () => {
    switch (accentColor) {
      case 'navy':
        return { outer: '#082B5C', inner: '#0A3B7B' };
      case 'blue':
        return { outer: '#0284C7', inner: '#38BDF8' };
      case 'teal':
      default:
        return { outer: '#059669', inner: '#10B981' };
    }
  };

  const borders = getBorders();

  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      <div 
        className="relative p-2.5 sm:p-3 rounded-t-[140px] sm:rounded-t-[170px] bg-card border-2 shadow-xl"
        style={{ borderColor: borders.outer }}
      >
        <div 
          className="p-2 rounded-t-[125px] sm:rounded-t-[150px] border"
          style={{ borderColor: borders.inner }}
        >
          <div className="w-full h-full overflow-hidden rounded-t-[110px] sm:rounded-t-[135px] bg-muted relative">
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ElongatedArchPhotoFrame: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className = '' }) => {
  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      <div className="relative w-full max-w-[380px] sm:max-w-[420px] h-[500px] sm:h-[580px] p-3 rounded-t-[220px] sm:rounded-t-[260px] bg-card border-4 border-[#059669] shadow-2xl">
        <div className="w-full h-full p-2.5 rounded-t-[195px] sm:rounded-t-[235px] border-2 border-primary">
          <div className="w-full h-full p-2 rounded-t-[175px] sm:rounded-t-[215px] border border-sky-300">
            <div className="w-full h-full overflow-hidden rounded-t-[160px] sm:rounded-t-[200px] bg-slate-900 relative group">
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover object-center brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-4 right-4 text-center">
                <span className="inline-block px-3.5 py-1 text-[10px] font-black uppercase tracking-widest bg-[#059669] text-white shadow-xs">
                  CIVIL & INFRASTRUCTURE EXCELLENCE
                </span>
                <p className="text-xs font-bold text-white mt-1.5 font-['Outfit',sans-serif]">
                  Green Valleys Shelters Pvt. Ltd. Placement Cohort
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const COHORT_CARDS = [
  {
    id: 'lenovo',
    title: 'Lenovo (India) Pvt. Ltd.',
    category: 'HARDWARE QA & ADVANCED MANUFACTURING',
    metric: '75 Students',
    badge: 'TIER-1 MANUFACTURING',
    color: '#082B5C',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80',
    description: 'Students deployed at high-precision electronics manufacturing and systems QA facilities in Sriperumbudur, mastering board-level testing, automated assembly and surface-mount production.'
  },
  {
    id: 'zoho',
    title: "Zoho Tech's Cloud Suite",
    category: 'ENTERPRISE SAAS & UI/UX ARCHITECTURE',
    metric: '51 Students',
    badge: 'PRODUCT ENGINEERING',
    color: '#059669',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80',
    description: 'Full-stack software engineering internships working on live Zoho CRM and SaaS modules, distributed database caching, API pipelines, and real-time frontend frameworks.'
  },
  {
    id: 'greenvalleys',
    title: 'Green Valleys Shelters Pvt. Ltd.',
    category: 'INFRASTRUCTURE & STRUCTURAL ENGINEERING',
    metric: '45 Students',
    badge: 'CIVIL EXCELLENCE',
    color: '#047857',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?w=800&auto=format&fit=crop&q=80',
    description: 'Civil and structural engineering students conducting on-site surveying, foundation quality assurance, BIM coordination, and concrete durability analysis.'
  },
  {
    id: 'tvs',
    title: 'TVS Motor Company & Auto R&D',
    category: 'AUTOMOTIVE POWERTRAIN & THERMAL SYSTEMS',
    metric: '38 Students',
    badge: 'MOBILITY TECH',
    color: '#0284C7',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80',
    description: 'Mechanical and electrical engineers working on electric two-wheeler battery thermal management, chassis CAD/CAM modeling, and endurance dyno testing.'
  }
];

export const InternshipsSection: React.FC<InternshipsSectionProps> = () => {
  const [selectedYear, setSelectedYear] = useState<string>('2022-23');
  const [searchFilter, setSearchFilter] = useState<string>('');

  const currentRecords = INTERNSHIP_RECORDS[selectedYear] || [];
  const filteredRecords = currentRecords.filter(r => 
    r.organisation.toLowerCase().includes(searchFilter.toLowerCase()) ||
    r.domain.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="relative w-full bg-page-bg text-foreground font-sans">
      <div className="relative z-10">
        <section className="relative w-full pt-12 sm:pt-16 pb-16 px-4 sm:px-8 lg:px-14 bg-page-bg border-b border-border">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-mono font-bold text-[#059669] tracking-widest uppercase bg-muted px-3 py-1 inline-block border border-border rounded-md">
                PRACTICAL IMMERSION & INDUSTRY PIPELINE
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-primary uppercase tracking-tight font-['Outfit',sans-serif]">
                FROM CLASSROOM TO WORKPLACE
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground font-normal">
                Where academic engineering principles transform directly into verified industry competence.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-4 flex justify-center lg:justify-start">
                <div className="w-full max-w-[280px] sm:max-w-[320px]">
                  <MatteArchPhotoFrame
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80"
                    alt="Engineering Innovation Lab"
                    accentColor="teal"
                    className="w-full drop-shadow-lg"
                  />
                  <div className="mt-4 p-3 bg-muted border-l-3 border-[#059669]">
                    <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                      LABORATORY IMMERSION
                    </p>
                    <p className="text-xs font-bold text-foreground">
                      Hands-on technical engineering & research pods
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted border border-border text-xs font-mono font-bold text-[#059669] uppercase tracking-wider">
                  <Compass className="w-3.5 h-3.5" />
                  <span>EXPERIENTIAL LEARNING FRAMEWORK</span>
                </div>

                <div className="p-4 bg-muted border-l-4 border-primary text-left">
                  <p className="text-sm sm:text-base font-serif italic text-foreground/90">
                    "Experience begins where theoretical knowledge integrates with real-world enterprise engineering."
                  </p>
                </div>

                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-normal">
                  Internships, in-plant industrial training, and live technical site visits equip students with deep professional acumen.
                </p>

                <div className="pt-2 flex flex-wrap gap-2 justify-center lg:justify-start">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-mono font-bold uppercase tracking-wider">
                    42+ Listed Corporate Partners
                  </span>
                  <span className="px-3 py-1 bg-[#059669] text-white text-xs font-mono font-bold uppercase tracking-wider">
                    Continuous PPO Conversion
                  </span>
                </div>
              </div>

              <div className="lg:col-span-3 flex flex-col items-center lg:items-end gap-4">
                <div className="w-full max-w-[260px] sm:max-w-[280px]">
                  <div className="p-2 bg-card border border-border shadow-md">
                    <div className="overflow-hidden bg-slate-900">
                      <img
                        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&auto=format&fit=crop&q=80"
                        alt="Corporate Technical Standup"
                        className="w-full h-52 object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-2.5 bg-card border-t border-border">
                      <p className="text-[10px] font-mono text-[#059669] font-bold uppercase">
                        INDUSTRY MENTORSHIP
                      </p>
                      <p className="text-xs font-bold text-foreground">
                        Direct corporate technical sprints & standups
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'INTERNSHIPS', num: '01', sub: 'Practical Exposure' },
                { label: 'IN-PLANT TRAINING', num: '02', sub: 'Site Experience' },
                { label: 'INDUSTRY INTERACTION', num: '03', sub: 'Expert Lectures' },
                { label: 'PPO PIPELINES', num: '04', sub: 'Pre-Placement Offers' }
              ].map((nav, i) => (
                <div key={i} className="p-3 bg-card border-l-2 border-[#059669]">
                  <div className="text-[10px] font-mono text-[#059669] font-bold tracking-widest">
                    [{nav.num}]
                  </div>
                  <div className="text-xs sm:text-sm font-black tracking-wider text-foreground uppercase mt-0.5 font-['Outfit',sans-serif]">
                    {nav.label}
                  </div>
                  <div className="text-[11px] text-muted-foreground font-medium">
                    {nav.sub}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        <section className="w-full py-16 px-4 sm:px-8 lg:px-14 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono font-bold text-[#059669] tracking-widest uppercase bg-muted px-3 py-1 inline-block border border-border">
                PROVEN COHORT DEPLOYMENTS
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-foreground font-['Outfit',sans-serif] uppercase tracking-tight">
                WHERE STUDENTS STEPPED INTO INDUSTRY
              </h2>
              <p className="text-sm text-muted-foreground font-normal">
                Key corporate partner cohorts across manufacturing, software product engineering, and mobility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {COHORT_CARDS.map((card) => (
                <div 
                  key={card.id}
                  className="bg-card border border-border shadow-xs flex flex-col justify-between overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3">
                      <span 
                        className="text-[10px] font-black uppercase tracking-wider px-2 py-1 text-white shadow-xs"
                        style={{ backgroundColor: card.color }}
                      >
                        {card.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/70 px-2.5 py-1 text-xs font-mono font-bold text-[#059669] backdrop-blur-xs">
                      {card.metric}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1">
                      <div className="text-[10px] font-mono font-bold text-[#059669] uppercase">
                        {card.category}
                      </div>
                      <h3 className="text-base font-bold text-foreground font-['Outfit',sans-serif]">
                        {card.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed font-normal">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-16 px-4 sm:px-8 lg:px-14 bg-muted/40 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs font-mono font-bold text-[#059669] tracking-widest uppercase bg-card px-3 py-1 inline-block border border-border">
                  FEATURED COHORT HIGHLIGHT
                </span>

                <div className="flex items-baseline gap-3">
                  <div className="text-[80px] sm:text-[120px] font-black text-foreground leading-[0.85] tracking-tighter font-['Outfit',sans-serif]">
                    45
                  </div>
                  <div className="space-y-1">
                    <span className="text-lg sm:text-2xl font-black tracking-widest text-[#059669] uppercase font-['Outfit',sans-serif] block">
                      STUDENTS
                    </span>
                    <span className="text-xs font-mono text-muted-foreground uppercase block">
                      COHORT 2022–23
                    </span>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t-2 border-primary">
                  <div className="text-2xl sm:text-3xl font-black text-foreground font-['Outfit',sans-serif] uppercase tracking-tight">
                    GREEN VALLEYS SHELTERS PVT. LTD.
                  </div>
                  <div className="inline-block px-2.5 py-0.5 bg-emerald-100 dark:bg-emerald-950 text-[#059669] font-mono text-xs font-bold uppercase">
                    CIVIL INFRASTRUCTURE & CONSTRUCTION PROJECT MANAGEMENT
                  </div>
                </div>

                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-normal pt-2">
                  <strong className="font-bold text-foreground">45 civil and structural engineering students</strong> performed on-site project analysis, structural detailing, project estimation, and construction management.
                </p>

                <div className="p-4 bg-card border border-border flex items-center gap-3">
                  <Building2 className="w-6 h-6 text-[#059669] shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-foreground">
                    Full on-site surveying, BIM coordination, and geotechnical quality testing
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <ElongatedArchPhotoFrame
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186156a?w=1000&auto=format&fit=crop&q=85"
                  alt="Green Valleys Shelters Infrastructure Project"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 px-4 sm:px-8 lg:px-14 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-8 space-y-2">
              <span className="text-xs font-mono font-bold text-[#059669] tracking-widest uppercase bg-muted px-3 py-1 inline-block border border-border">
                OFFICIAL REPOSITORY
              </span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-foreground font-['Outfit',sans-serif] uppercase">
                THE INTERNSHIP LANDSCAPE
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed font-normal">
                Published placement and internship records document student deployments across corporate partners.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-6 border-b-2 border-primary">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-wider">
                {[
                  { id: '2022-23', label: '2022–23 (42 entries)' },
                  { id: '2021-22', label: '2021–22 (5 entries)' },
                  { id: '2020-21', label: '2020–21 (15 entries)' },
                  { id: '2023-24', label: '2023–24' },
                  { id: '2024-25', label: '2024–25' },
                ].map((yr) => (
                  <button
                    key={yr.id}
                    onClick={() => setSelectedYear(yr.id)}
                    className={`px-3 py-1.5 transition-all cursor-pointer font-bold ${
                      selectedYear === yr.id
                        ? 'bg-primary text-primary-foreground shadow-xs'
                        : 'bg-card text-foreground hover:bg-accent border border-border'
                    }`}
                  >
                    {yr.label}
                  </button>
                ))}
              </div>

              <div className="relative w-full sm:w-72">
                <input
                  type="text"
                  placeholder="Filter company or domain..."
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  className="w-full py-2 pl-3 pr-8 bg-card border border-border text-xs focus:outline-none focus:border-primary placeholder:text-muted-foreground text-foreground"
                />
                <Search className="w-4 h-4 absolute right-2.5 top-2.5 text-muted-foreground" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 bg-card border border-border shadow-xs">
                <div className="grid grid-cols-12 p-3.5 bg-primary text-primary-foreground text-xs font-mono font-bold tracking-widest uppercase">
                  <div className="col-span-7 sm:col-span-8">ORGANISATION & FOCUS DOMAIN</div>
                  <div className="col-span-5 sm:col-span-4 text-right">STUDENTS HOSTED</div>
                </div>

                <div className="divide-y divide-border max-h-[550px] overflow-y-auto">
                  {filteredRecords.map((entry, index) => (
                    <div
                      key={entry.id || index}
                      className="grid grid-cols-12 p-3.5 items-center hover:bg-muted/50 transition-colors"
                    >
                      <div className="col-span-7 sm:col-span-8 pr-4">
                        <div className="text-sm font-bold text-foreground font-['Outfit',sans-serif]">
                          {entry.organisation}
                        </div>
                        <div className="text-xs text-[#059669] font-mono mt-0.5 font-bold">
                          {entry.domain}
                        </div>
                      </div>
                      <div className="col-span-5 sm:col-span-4 text-right">
                        <span className="text-xl font-black text-foreground font-['Outfit',sans-serif]">
                          {entry.students}
                        </span>
                        <span className="text-[10px] font-mono text-muted-foreground block uppercase">
                          STUDENTS
                        </span>
                      </div>
                    </div>
                  ))}

                  {filteredRecords.length === 0 && (
                    <div className="py-12 text-center text-xs font-mono text-muted-foreground">
                      No records match "{searchFilter}".
                    </div>
                  )}
                </div>
              </div>

              <div className="lg:col-span-4 space-y-4">
                <div className="p-5 bg-muted/40 border border-border space-y-4">
                  <h3 className="text-sm font-black text-foreground font-['Outfit',sans-serif] uppercase tracking-wider pb-2 border-b border-border">
                    HISTORIC SUMMARY
                  </h3>

                  <div className="space-y-3">
                    <div className="p-3 bg-card border-l-4 border-primary">
                      <div className="text-[10px] font-mono text-muted-foreground uppercase">
                        ACADEMIC YEAR 2022–23
                      </div>
                      <div className="text-2xl font-black text-foreground font-['Outfit',sans-serif]">
                        42 Entries
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Lenovo, Zoho Tech's, Green Valleys Shelters
                      </div>
                    </div>

                    <div className="p-3 bg-card border-l-4 border-[#059669]">
                      <div className="text-[10px] font-mono text-muted-foreground uppercase">
                        ACADEMIC YEAR 2021–22
                      </div>
                      <div className="text-2xl font-black text-[#059669] font-['Outfit',sans-serif]">
                        5 Entries
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Focused technical partner deployments
                      </div>
                    </div>

                    <div className="p-3 bg-card border-l-4 border-[#0284C7]">
                      <div className="text-[10px] font-mono text-muted-foreground uppercase">
                        ACADEMIC YEAR 2020–21
                      </div>
                      <div className="text-2xl font-black text-[#0284C7] font-['Outfit',sans-serif]">
                        15 Entries
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Virtual and on-site engineering cohorts
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </section>

      </div>

    </div>
  );
};
