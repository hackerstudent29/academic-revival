import React, { useState, useMemo } from 'react';
import { 
  Search,
  Building2,
  Calendar,
  CheckCircle2,
  TrendingUp,
  Award,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Layers,
  Briefcase,
  Users,
  Sparkles,
  X,
  Filter,
  GraduationCap,
  ShieldCheck,
  Zap,
  Globe
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
}> = ({ src, alt, className = '' }) => {
  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      <div className="relative w-full max-w-[280px] sm:max-w-[320px] h-[260px] sm:h-[300px] rounded-md bg-card border border-border shadow-md overflow-hidden p-2">
        <div className="w-full h-full overflow-hidden rounded-sm bg-muted relative">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80";
            }}
          />
        </div>
      </div>
    </div>
  );
};

const ElongatedArchPhotoFrame: React.FC<{
  src: string;
  alt: string;
  title: string;
  badge: string;
  className?: string;
}> = ({ src, alt, title, badge, className = '' }) => {
  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      <div className="relative w-full max-w-[380px] sm:max-w-[420px] h-[360px] sm:h-[420px] p-2 rounded-md bg-card border border-border shadow-lg">
        <div className="w-full h-full overflow-hidden rounded-sm bg-card relative">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover object-center brightness-95"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541888946425-d0fbb186156a?w=1000&auto=format&fit=crop&q=85";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-6 left-4 right-4 text-center">
            <span className="inline-block px-3.5 py-1 text-[10px] font-black uppercase tracking-widest bg-primary text-white shadow-xs font-oswald rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs">
              {badge}
            </span>
            <p className="text-xs font-bold text-white mt-1.5 font-oswald tracking-wide">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

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
  const [selectedSector, setSelectedSector] = useState<string>('all');
  const [spotlightId, setSpotlightId] = useState<string>('greenvalleys');
  const [selectedMode, setSelectedMode] = useState<string>('all');

  const activeSpotlight = useMemo(() => {
    return (COHORT_CARDS.find(c => c.id === spotlightId) || COHORT_CARDS[0])!;
  }, [spotlightId]);

  const filteredCohorts = useMemo(() => {
    if (selectedSector === 'all') return COHORT_CARDS;
    return COHORT_CARDS.filter(c => c.sectorKey === selectedSector);
  }, [selectedSector]);

  const currentRecords = INTERNSHIP_RECORDS[selectedYear] || [];
  
  const filteredRecords = useMemo(() => {
    return currentRecords.filter(r => {
      const matchesSearch = 
        r.organisation.toLowerCase().includes(searchFilter.toLowerCase()) ||
        r.domain.toLowerCase().includes(searchFilter.toLowerCase());
      
      const matchesMode = 
        selectedMode === 'all' || 
        (r.mode && r.mode.toLowerCase() === selectedMode.toLowerCase());

      return matchesSearch && matchesMode;
    });
  }, [currentRecords, searchFilter, selectedMode]);

  return (
    <div className="relative w-full bg-page-bg text-foreground font-sans">
      <div className="relative z-10">
        
        {/* Top High-Impact Metrics Strip */}
        <div className="w-full bg-card border-b border-border py-4 px-4 sm:px-8 lg:px-14">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="flex items-center gap-3.5 p-2 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black font-oswald text-foreground leading-tight">480+</div>
                <div className="text-[11px] font-sans text-muted-foreground uppercase font-bold tracking-wider">Annual Internships</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-2 justify-center md:justify-start pt-3 md:pt-2">
              <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black font-oswald text-foreground leading-tight">42+</div>
                <div className="text-[11px] font-sans text-muted-foreground uppercase font-bold tracking-wider">Corporate Partners</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-2 justify-center md:justify-start pt-3 md:pt-2">
              <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black font-oswald text-primary leading-tight">89.5%</div>
                <div className="text-[11px] font-sans text-muted-foreground uppercase font-bold tracking-wider">PPO Yield Rate</div>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-2 justify-center md:justify-start pt-3 md:pt-2">
              <div className="w-10 h-10 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black font-oswald text-foreground leading-tight">100%</div>
                <div className="text-[11px] font-sans text-muted-foreground uppercase font-bold tracking-wider">Hands-on R&D Immersion</div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 1: HERO & PRACTICAL IMMERSION PIPELINE */}
        <section className="relative w-full pt-12 sm:pt-16 pb-16 px-4 sm:px-8 lg:px-14 bg-page-bg border-b border-border">
          <div className="max-w-7xl mx-auto space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold text-foreground tracking-widest uppercase inline-block font-oswald mb-2">
                PRACTICAL IMMERSION & INDUSTRY PIPELINE
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-primary uppercase tracking-tight font-oswald">
                FROM CLASSROOM TO WORKPLACE
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground font-normal font-sans leading-relaxed">
                Where academic engineering principles transform directly into verified industry competence through sustained corporate immersion.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-4 flex justify-center lg:justify-start">
                <div className="w-full max-w-[280px] sm:max-w-[320px]">
                  <MatteArchPhotoFrame
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80"
                    alt="Engineering Innovation Lab"
                    className="w-full drop-shadow-lg"
                  />
                  <div className="mt-4 p-3 bg-card border-l-3 border-primary rounded-r-sm border-y border-r border-border">
                    <p className="text-[11px] text-primary uppercase tracking-wider font-oswald font-bold">
                      LABORATORY IMMERSION
                    </p>
                    <p className="text-xs font-bold text-foreground font-sans mt-0.5">
                      Hands-on technical engineering & research pods
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-black text-foreground uppercase tracking-tight font-oswald">
                  INDUSTRY-READY CAREER PATHWAYS
                </h3>

                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-normal font-sans">
                  Internships, in-plant industrial training, and live technical site visits equip students with deep professional acumen, industry toolsets, and immediate employment readiness.
                </p>
              </div>

              <div className="lg:col-span-3 flex flex-col items-center lg:items-end gap-4">
                <div className="w-full max-w-[260px] sm:max-w-[280px]">
                  <div className="p-2 bg-card border border-border shadow-md rounded-md">
                    <div className="overflow-hidden bg-card rounded-sm h-52">
                      <img
                        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&auto=format&fit=crop&q=80"
                        alt="Corporate Technical Standup"
                        className="w-full h-full object-cover object-center"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&auto=format&fit=crop&q=80";
                        }}
                      />
                    </div>
                    <div className="p-3 bg-card border-t border-border">
                      <p className="text-[10px] text-primary font-bold uppercase font-oswald tracking-widest">
                        INDUSTRY MENTORSHIP
                      </p>
                      <p className="text-xs font-bold text-foreground font-sans mt-0.5">
                        Direct corporate technical sprints & standups
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Pillar Grid Banner */}
            <div className="pt-6 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'INTERNSHIPS', num: '01', sub: 'Practical Exposure' },
                { label: 'IN-PLANT TRAINING', num: '02', sub: 'Site Experience' },
                { label: 'INDUSTRY INTERACTION', num: '03', sub: 'Expert Lectures' },
                { label: 'PPO PIPELINES', num: '04', sub: 'Pre-Placement Offers' }
              ].map((nav, i) => (
                <div 
                  key={i} 
                  className="p-4 bg-card border-l-3 border-primary rounded-r-sm border-y border-r border-border hover:border-primary/60 transition-colors shadow-2xs"
                >
                  <div className="text-[11px] text-primary font-bold tracking-widest font-oswald">
                    [{nav.num}]
                  </div>
                  <div className="text-xs sm:text-sm font-black tracking-wider text-foreground uppercase mt-1 font-oswald">
                    {nav.label}
                  </div>
                  <div className="text-[11px] text-muted-foreground font-medium font-sans mt-0.5">
                    {nav.sub}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 2: PROVEN COHORT DEPLOYMENTS */}
        <section className="w-full py-16 px-4 sm:px-8 lg:px-14 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto space-y-10">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl space-y-2">
                <span className="text-xs font-bold text-foreground tracking-widest uppercase inline-block font-oswald mb-2">
                  PROVEN COHORT DEPLOYMENTS
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-primary font-oswald uppercase tracking-tight">
                  WHERE STUDENTS STEPPED INTO INDUSTRY
                </h2>
                <p className="text-sm text-muted-foreground font-normal font-sans">
                  Key corporate partner cohorts across manufacturing, software product engineering, civil infrastructure, and automotive mobility.
                </p>
              </div>

              {/* Sector Filter Tabs */}
              <div className="flex flex-wrap gap-2 text-xs font-oswald uppercase tracking-wider">
                {[
                  { id: 'all', label: 'All Sectors' },
                  { id: 'hardware', label: 'Hardware & QA' },
                  { id: 'saas', label: 'Enterprise SaaS' },
                  { id: 'civil', label: 'Civil Infrastructure' },
                  { id: 'mobility', label: 'Mobility Tech' },
                ].map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => setSelectedSector(sec.id)}
                    className={`px-3 py-1.5 transition-all cursor-pointer font-bold rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs ${
                      selectedSector === sec.id
                        ? 'bg-primary text-white shadow-xs'
                        : 'bg-card text-foreground hover:bg-muted border border-border'
                    }`}
                  >
                    {sec.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Cohort Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredCohorts.map((card) => (
                <div 
                  key={card.id}
                  className="bg-card border border-border shadow-xs flex flex-col justify-between overflow-hidden rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs hover:border-primary/50 transition-all duration-200"
                >
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80";
                      }}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 text-white bg-primary shadow-xs font-oswald rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs">
                        {card.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3 bg-black/80 border border-white/10 px-2.5 py-1 text-xs font-bold text-white font-oswald rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs shadow-xs">
                      {card.metric}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="text-[10px] font-bold text-primary uppercase font-oswald tracking-wider">
                        {card.category}
                      </div>
                      <h3 className="text-base font-bold text-foreground font-oswald leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed font-normal font-sans">
                        {card.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-border space-y-2">
                      <div className="text-[10px] font-bold text-foreground uppercase font-oswald tracking-widest">
                        DOMAINS & MENTORSHIP:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {card.tags.map((t, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-0.5 bg-page-bg border border-border text-[10px] text-foreground font-medium font-sans rounded-xs"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 3: FEATURED COHORT HIGHLIGHT / SPOTLIGHT */}
        <section className="w-full py-16 px-4 sm:px-8 lg:px-14 bg-page-bg border-b border-border">
          <div className="max-w-7xl mx-auto space-y-8">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs font-bold text-foreground tracking-widest uppercase inline-block font-oswald mb-2">
                FEATURED COHORT HIGHLIGHT
              </span>

              {/* Interactive Cohort Selector */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase font-oswald text-muted-foreground mr-1">Select Cohort:</span>
                {COHORT_CARDS.map((cohort) => (
                  <button
                    key={cohort.id}
                    onClick={() => setSpotlightId(cohort.id)}
                    className={`px-3 py-1 text-xs font-bold uppercase font-oswald rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs cursor-pointer transition-all ${
                      spotlightId === cohort.id
                        ? 'bg-primary text-white shadow-xs'
                        : 'bg-card border border-border text-foreground hover:bg-muted'
                    }`}
                  >
                    {cohort.title.split(' ')[0]} ({cohort.studentCount})
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-6 space-y-6">
                
                <div className="flex items-baseline gap-4">
                  <div className="text-[80px] sm:text-[120px] font-black text-foreground leading-[0.85] tracking-tighter font-oswald">
                    {activeSpotlight.studentCount}
                  </div>
                  <div className="space-y-1">
                    <span className="text-lg sm:text-2xl font-black tracking-widest text-primary uppercase font-oswald block">
                      STUDENTS DEPLOYED
                    </span>
                    <span className="text-xs text-muted-foreground uppercase block font-oswald font-bold tracking-wider">
                      COHORT 2022–23 | {activeSpotlight.badge}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t-2 border-primary">
                  <h3 className="text-2xl sm:text-3xl font-black text-foreground font-oswald uppercase tracking-tight">
                    {activeSpotlight.title}
                  </h3>
                  <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary font-oswald text-xs font-bold uppercase rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs">
                    {activeSpotlight.category}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-normal font-sans">
                  {activeSpotlight.description}
                </p>

                {/* Key Outcomes List */}
                <div className="space-y-2.5 pt-2">
                  <p className="text-xs font-bold uppercase font-oswald text-foreground tracking-wider">Key Cohort Achievements:</p>
                  {activeSpotlight.outcomes.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-sans text-foreground font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-card border border-border flex items-center gap-3 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs shadow-2xs">
                  <Building2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-foreground font-sans">
                    Structured industrial supervision with periodic technical milestone evaluations.
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <ElongatedArchPhotoFrame
                  src={activeSpotlight.image}
                  alt={activeSpotlight.title}
                  badge={activeSpotlight.badge}
                  title={`${activeSpotlight.title} — ${activeSpotlight.metric}`}
                  className="w-full"
                />
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 4: OFFICIAL INTERNSHIP REPOSITORY */}
        <section className="w-full py-16 px-4 sm:px-8 lg:px-14 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto space-y-8">
            
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold text-foreground tracking-widest uppercase inline-block font-oswald mb-2">
                OFFICIAL REPOSITORY
              </span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-primary font-oswald uppercase">
                THE INTERNSHIP LANDSCAPE
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed font-normal font-sans">
                Published placement and internship records document verified student deployments across corporate partners.
              </p>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 mb-2 border-b-2 border-primary">
              
              {/* Year Selector Tabs */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-oswald uppercase tracking-wider">
                {[
                  { id: '2022-23', label: '2022–23 (42 entries)' },
                  { id: '2024-25', label: '2024–25 (5 entries)' },
                  { id: '2023-24', label: '2023–24 (4 entries)' },
                  { id: '2021-22', label: '2021–22 (5 entries)' },
                  { id: '2020-21', label: '2020–21 (15 entries)' },
                ].map((yr) => (
                  <button
                    key={yr.id}
                    onClick={() => setSelectedYear(yr.id)}
                    className={`px-3 py-1.5 transition-all cursor-pointer font-bold rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs ${
                      selectedYear === yr.id
                        ? 'bg-primary text-white shadow-xs'
                        : 'bg-card text-foreground hover:bg-muted border border-border'
                    }`}
                  >
                    {yr.label}
                  </button>
                ))}
              </div>

              {/* Mode Filter Pills & Search */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="flex items-center gap-1 bg-card border border-border p-1 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs">
                  {['all', 'on-site', 'hybrid', 'remote'].map((m) => (
                    <button
                      key={m}
                      onClick={() => setSelectedMode(m)}
                      className={`px-2.5 py-1 text-[11px] font-bold font-oswald uppercase cursor-pointer rounded-xs transition-colors ${
                        selectedMode === m
                          ? 'bg-primary text-white'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {m === 'all' ? 'All Modes' : m}
                    </button>
                  ))}
                </div>

                <div className="relative w-full sm:w-72">
                  <input
                    type="text"
                    placeholder="Filter company or domain..."
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    className="w-full py-2 pl-3 pr-8 bg-card border border-border text-xs focus:outline-none focus:border-primary placeholder:text-muted-foreground text-foreground rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs font-sans"
                  />
                  {searchFilter ? (
                    <button 
                      onClick={() => setSearchFilter('')}
                      className="absolute right-2.5 top-2.5 text-muted-foreground hover:text-foreground cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  ) : (
                    <Search className="w-4 h-4 absolute right-2.5 top-2.5 text-muted-foreground" />
                  )}
                </div>
              </div>

            </div>

            {/* Results count indicator */}
            <div className="flex items-center justify-between text-xs font-oswald text-muted-foreground uppercase px-1">
              <span>Showing <strong className="text-foreground font-bold">{filteredRecords.length}</strong> of {currentRecords.length} partner records ({selectedYear})</span>
              {searchFilter && <span>Filtered by: "{searchFilter}"</span>}
            </div>

            {/* Main Table and Historic Summary Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Repository Table */}
              <div className="lg:col-span-8 bg-card border border-border shadow-xs rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs overflow-hidden">
                <div className="flex items-center justify-between p-3.5 bg-primary text-white text-xs font-oswald font-bold tracking-widest uppercase">
                  <div>ORGANISATION & FOCUS DOMAIN</div>
                  <div className="text-right">STUDENTS HOSTED</div>
                </div>

                <div className="divide-y divide-border max-h-[580px] overflow-y-auto">
                  {filteredRecords.map((entry, index) => {
                    const initials = entry.organisation.slice(0, 2).toUpperCase();
                    return (
                      <div
                        key={entry.id || index}
                        className="flex items-center justify-between p-3.5 hover:bg-muted/50 transition-colors gap-4"
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className="w-8 h-8 rounded-xs bg-primary/10 border border-primary/20 text-primary font-oswald font-bold text-xs flex items-center justify-center shrink-0">
                            {initials}
                          </div>
                          <div className="min-w-0">
                            <div className="text-sm font-bold text-foreground font-oswald flex items-center gap-2 flex-wrap">
                              <span className="truncate">{entry.organisation}</span>
                              {entry.mode && (
                                <span className={`text-[9px] px-1.5 py-0.2 uppercase font-oswald font-bold rounded-xs shrink-0 ${
                                  entry.mode.toLowerCase() === 'on-site'
                                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                                    : entry.mode.toLowerCase() === 'hybrid'
                                    ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20'
                                    : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20'
                                }`}>
                                  {entry.mode}
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-primary font-sans mt-0.5 font-bold truncate">
                              {entry.domain}
                            </div>
                          </div>
                        </div>

                        <div className="text-right flex items-center justify-end gap-3 shrink-0">
                          <div>
                            <span className="text-xl font-black text-foreground font-oswald">
                              {entry.students}
                            </span>
                            <span className="text-[10px] font-oswald text-muted-foreground block uppercase font-bold">
                              STUDENTS
                            </span>
                          </div>
                          {entry.convertedPPOs ? (
                            <span className="hidden sm:inline-block text-[10px] bg-primary/10 border border-primary/20 text-primary px-2 py-1 font-oswald font-bold uppercase rounded-xs">
                              {entry.convertedPPOs} PPOs
                            </span>
                          ) : null}
                        </div>
                      </div>
                    );
                  })}

                  {filteredRecords.length === 0 && (
                    <div className="py-16 text-center text-xs font-sans text-muted-foreground space-y-2">
                      <p className="font-bold text-sm text-foreground font-oswald uppercase">No Records Found</p>
                      <p>No corporate internship records match your filter criteria.</p>
                      <button 
                        onClick={() => { setSearchFilter(''); setSelectedMode('all'); }}
                        className="px-3 py-1.5 bg-primary text-white font-oswald text-xs font-bold uppercase rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs cursor-pointer"
                      >
                        Reset Search Filters
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Historic Summary Side Card */}
              <div className="lg:col-span-4 space-y-4">
                <div className="p-5 bg-card border border-border space-y-5 rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs shadow-xs">
                  <h3 className="text-sm font-black text-foreground font-oswald uppercase tracking-wider pb-2.5 border-b border-border flex items-center justify-between">
                    <span>HISTORIC SUMMARY</span>
                    <ShieldCheck className="w-4 h-4 text-primary" />
                  </h3>

                  <div className="space-y-3">
                    <div className="p-3.5 bg-page-bg border-l-4 border-primary rounded-r-sm border-y border-r border-border">
                      <div className="text-[10px] font-oswald text-muted-foreground uppercase font-bold tracking-wider">
                        ACADEMIC YEAR 2022–23
                      </div>
                      <div className="text-2xl font-black text-foreground font-oswald">
                        42 Entries (388+ Offers)
                      </div>
                      <div className="text-xs text-muted-foreground font-sans mt-0.5">
                        Lenovo, Zoho Tech's, Green Valleys Shelters, Thermodyn
                      </div>
                    </div>

                    <div className="p-3.5 bg-page-bg border-l-4 border-primary/70 rounded-r-sm border-y border-r border-border">
                      <div className="text-[10px] font-oswald text-muted-foreground uppercase font-bold tracking-wider">
                        ACADEMIC YEAR 2021–22
                      </div>
                      <div className="text-2xl font-black text-primary font-oswald">
                        5 Primary Cohorts
                      </div>
                      <div className="text-xs text-muted-foreground font-sans mt-0.5">
                        Cognizant (38), TCS (25), Zoho (18), TVS (15)
                      </div>
                    </div>

                    <div className="p-3.5 bg-page-bg border-l-4 border-primary/40 rounded-r-sm border-y border-r border-border">
                      <div className="text-[10px] font-oswald text-muted-foreground uppercase font-bold tracking-wider">
                        ACADEMIC YEAR 2020–21
                      </div>
                      <div className="text-2xl font-black text-primary font-oswald">
                        15 Enterprise Track Recruiter Partners
                      </div>
                      <div className="text-xs text-muted-foreground font-sans mt-0.5">
                        Infosys Springboard (48), Cognizant (30), Wipro (22)
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-border space-y-2">
                    <div className="text-xs font-bold uppercase font-oswald text-foreground">SECTOR DISTRIBUTION</div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2 py-1 bg-page-bg border border-border text-[10px] font-bold font-oswald text-foreground rounded-xs">
                        IT & SAAS: 45%
                      </span>
                      <span className="px-2 py-1 bg-page-bg border border-border text-[10px] font-bold font-oswald text-foreground rounded-xs">
                        MANUFACTURING: 30%
                      </span>
                      <span className="px-2 py-1 bg-page-bg border border-border text-[10px] font-bold font-oswald text-foreground rounded-xs">
                        CIVIL INFRA: 15%
                      </span>
                      <span className="px-2 py-1 bg-page-bg border border-border text-[10px] font-bold font-oswald text-foreground rounded-xs">
                        MOBILITY: 10%
                      </span>
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
