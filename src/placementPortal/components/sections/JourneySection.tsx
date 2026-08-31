import React from 'react';
import { 
  Globe, 
  Plane, 
  ArrowRight, 
  ChevronRight, 
  GraduationCap, 
  BookOpen, 
  Compass, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  MapPin, 
  BookCheck, 
  Award, 
  ArrowUpRight, 
  Navigation, 
  FileText,
  School,
  Library
} from 'lucide-react';
import { PlacementPulseEvent } from '../../types';

interface JourneySectionProps {
  onOpenEvent?: (event: PlacementPulseEvent) => void;
  onOpenBrochure?: () => void;
  onOpenContact?: () => void;
}

// Concentric Triple-Arch Photo Frame matching user reference screenshot
const ConcentricArchPhotoFrame: React.FC<{
  src: string;
  alt: string;
  label: string;
  accentTheme?: 'gold' | 'crimson' | 'rose';
}> = ({ src, alt, label, accentTheme = 'gold' }) => {
  // Theme color maps matching the screenshot reference
  const themeStyles = {
    gold: {
      outer: 'border-[#B45309]',   // Rich deep gold/amber
      middle: 'border-[#D97706]',  // Vibrant warm gold
      inner: 'border-[#F59E0B]',   // Radiant amber
      badgeBg: 'bg-[#B45309]',
      glow: 'shadow-amber-100'
    },
    crimson: {
      outer: 'border-[#BE123C]',
      middle: 'border-[#E11D48]',
      inner: 'border-[#FB7185]',
      badgeBg: 'bg-[#BE123C]',
      glow: 'shadow-rose-100'
    },
    rose: {
      outer: 'border-[#FDA4AF]',
      middle: 'border-[#FB7185]',
      inner: 'border-[#FECDD3]',
      badgeBg: 'bg-[#E11D48]',
      glow: 'shadow-pink-50'
    }
  };

  const style = themeStyles[accentTheme];

  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      {/* Outer Arch Layer */}
      <div 
        className={`relative p-2.5 sm:p-3 rounded-t-[120px] sm:rounded-t-[150px] bg-white border-2 sm:border-[2.5px] ${style.outer} shadow-lg ${style.glow} w-full max-w-[280px] sm:max-w-[320px]`}
      >
        {/* Middle Concentric Arch Layer */}
        <div 
          className={`p-2 sm:p-2.5 rounded-t-[105px] sm:rounded-t-[130px] bg-white border-2 ${style.middle}`}
        >
          {/* Inner Concentric Arch Layer */}
          <div 
            className={`p-1.5 sm:p-2 rounded-t-[90px] sm:rounded-t-[115px] bg-white border-2 ${style.inner}`}
          >
            {/* Image Viewport with Arched Top and Flat Bottom */}
            <div className="w-full h-[260px] sm:h-[320px] lg:h-[360px] overflow-hidden rounded-t-[80px] sm:rounded-t-[100px] bg-slate-900 relative shadow-inner group">
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Refined gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#082B5C]/85 via-[#082B5C]/15 to-transparent pointer-events-none" />
              
              {/* Bottom Caption Pill */}
              <div className="absolute bottom-3 left-2 right-2 text-center">
                <span className="inline-block px-2.5 py-0.5 bg-white/95 text-[#082B5C] font-mono text-[9px] sm:text-[10px] font-black uppercase tracking-wider shadow-sm">
                  {label}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const GLOBAL_JOURNEY_STEPS = [
  {
    id: 'step1',
    title: 'MSAJCE Undergraduate Foundation',
    category: 'YEARS 1–3',
    metric: 'Step 01',
    badge: 'CORE FOUNDATION',
    color: '#082B5C',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=80',
    description: 'Rigorous engineering coursework, laboratory projects, and faculty research mentorship establishing strong academic transcripts and GPA credentials.'
  },
  {
    id: 'step2',
    title: 'Higher Studies Cell Orientation',
    category: 'SEMESTER 5',
    metric: 'Step 02',
    badge: 'ORIENTATION',
    color: '#0D9488',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
    description: 'Comprehensive seminars on global Master’s/Ph.D. options, international scholarships (DAAD, Fulbright, Erasmus), and application timelines.'
  },
  {
    id: 'step3',
    title: 'Standardised Test Roadmap',
    category: 'SEMESTER 6',
    metric: 'Step 03',
    badge: 'EXAM PREPARATION',
    color: '#0284C7',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80',
    description: 'Dedicated coaching and mock tests for GRE (Quantitative & Verbal), IELTS/TOEFL English proficiency, and GATE for premier Indian institutions.'
  },
  {
    id: 'step4',
    title: 'Profile Assessment & SOP Review',
    category: 'SEMESTER 7',
    metric: 'Step 04',
    badge: 'ADMISSIONS COUNSELLING',
    color: '#D97706',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80',
    description: '1-on-1 statement of purpose refinement, faculty letter of recommendation coordination, and tailored university shortlisting.'
  },
  {
    id: 'step5',
    title: 'International University Admissions',
    category: 'SEMESTER 8',
    metric: 'Step 05',
    badge: 'GLOBAL ADMISSIONS',
    color: '#047857',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80',
    description: 'Final offer letter acceptance, visa document vetting, and pre-departure briefings for international student success.'
  }
];

export const JourneySection: React.FC<JourneySectionProps> = ({
  onOpenEvent,
  onOpenBrochure,
  onOpenContact,
}) => {
  const examTableData = [
    {
      exam: 'GRE',
      fullName: 'Graduate Record Examinations',
      pathway: 'Overseas higher education (US, Germany, Singapore & Global)',
      support: 'Awareness & guidance',
      color: '#082B5C'
    },
    {
      exam: 'TOEFL',
      fullName: 'Test of English as a Foreign Language',
      pathway: 'English proficiency for overseas education',
      support: 'Awareness & guidance',
      color: '#0052CC'
    },
    {
      exam: 'IELTS',
      fullName: 'International English Language Testing System',
      pathway: 'English proficiency for overseas education (UK, Canada, Europe, Australia)',
      support: 'Awareness / coaching where necessary',
      color: '#0D9488'
    },
    {
      exam: 'CAT',
      fullName: 'Common Admission Test',
      pathway: 'Management / postgraduate pathways (IIMs & Premier Indian B-Schools)',
      support: 'Awareness & guidance',
      color: '#D97706'
    },
    {
      exam: 'GATE',
      fullName: 'Graduate Aptitude Test in Engineering',
      pathway: 'Higher studies in engineering & technology (IITs, IISc, NITs) & PSU careers',
      support: 'Awareness & guidance',
      color: '#16A34A'
    },
  ];

  return (
    <div className="relative w-full bg-white text-[#0F172A] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#0D9488] selection:text-white">

      {/* ========================================================= */}
      {/* TOP BANNER: Full-Width Cinematic Campus Banner Image      */}
      {/* ========================================================= */}
      <section className="relative w-full h-[280px] sm:h-[360px] lg:h-[400px] flex items-center justify-center bg-[#082B5C] text-white overflow-hidden" id="journey-hero-banner">
        {/* Full-Bleed College Campus Image Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&auto=format&fit=crop&q=90" 
            alt="Mohamed Sathak A J College of Engineering Campus" 
            className="w-full h-full object-cover object-center brightness-[0.45] contrast-[1.1]"
            referrerPolicy="no-referrer"
          />
          {/* Subtle gradient overlay for clean contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#082B5C]/95 via-transparent to-[#082B5C]/60" />
        </div>

        {/* Center Overlay Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/15 backdrop-blur-xs text-blue-100 text-xs font-extrabold tracking-widest uppercase shadow-xs">
            <GraduationCap className="w-4 h-4 text-amber-300" />
            <span>HIGHER EDUCATION & GLOBAL CELL</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-['Outfit',sans-serif] drop-shadow-md">
            Higher Studies & Global Track
          </h1>
          <p className="text-sm sm:text-base text-blue-100/90 font-medium tracking-wide max-w-2xl mx-auto">
            Mohamed Sathak A.J. College of Engineering — Pathways to Master's, Doctoral Research & International Fellowships
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 01 — 3 HORIZONTAL ELONGATED ARCH FRAMES & IMPORTANCE OF HIGHER ED */}
      {/* ========================================================================= */}
      <section className="w-full pt-14 sm:pt-18 pb-16 px-4 sm:px-8 lg:px-14 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-10">
          
          {/* THREE ELONGATED SEMICIRCLE / ARCH FRAMES PLACED HORIZONTALLY (Rose, Crimson, Gold) */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 items-end justify-items-center">
            
            {/* 1. Left Frame: Rose / Pink Semicircle Arch */}
            <ConcentricArchPhotoFrame
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=85"
              alt="International University Admissions"
              label="GLOBAL SCHOLARSHIPS"
              accentTheme="rose"
            />

            {/* 2. Center Frame: Deep Crimson / Red Semicircle Arch */}
            <ConcentricArchPhotoFrame
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=85"
              alt="Advanced Research & Master's Studies"
              label="GRADUATE RESEARCH"
              accentTheme="crimson"
            />

            {/* 3. Right Frame: Warm Gold / Amber Semicircle Arch */}
            <ConcentricArchPhotoFrame
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=85"
              alt="Premier University Fellowships"
              label="ACADEMIC EXCELLENCE"
              accentTheme="gold"
            />

          </div>

          {/* Words Part: Importance of Higher Education Header & 6-Line Paragraph */}
          <div className="space-y-4 max-w-4xl pt-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-amber-50 border border-amber-200 text-xs font-mono font-bold text-amber-800 uppercase tracking-widest">
              <GraduationCap className="w-4 h-4 text-amber-700" />
              <span>ACADEMIC EXPANSION & GLOBAL OPPORTUNITIES</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-[#082B5C] font-['Outfit',sans-serif] uppercase tracking-tight">
              IMPORTANCE OF HIGHER EDUCATION
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-5 items-start rounded-none border border-slate-200 bg-[#F4F8FC] p-5 sm:p-6">
              <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Higher education helps students move from a strong technical foundation to specialized expertise, research depth, and global academic exposure.
                </p>
                <p>
                  It opens pathways in advanced engineering, AI, sustainability, and interdisciplinary research while building confidence for international careers and leadership roles.
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5 border-b border-slate-200 pb-2">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-black shrink-0" aria-hidden="true" />
                  <span className="text-xs font-bold text-[#082B5C]">Research-led specialization</span>
                </div>
                <div className="flex items-start gap-2.5 border-b border-slate-200 pb-2">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-black shrink-0" aria-hidden="true" />
                  <span className="text-xs font-bold text-[#082B5C]">International scholarships and fellowships</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-black shrink-0" aria-hidden="true" />
                  <span className="text-xs font-bold text-[#082B5C]">Global mobility and long-term career growth</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 02 — THE 5-STAGE GLOBAL GRADUATE JOURNEY (CLEAN GRID)            */}
      {/* ========================================================================= */}
      <section className="w-full py-16 px-4 sm:px-8 lg:px-14 bg-[#F4F8FC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono font-bold text-[#0D9488] tracking-widest uppercase bg-white px-3 py-1 inline-block border border-slate-200">
              HIGHER STUDIES PATHWAY
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#082B5C] font-['Outfit',sans-serif] uppercase">
              THE 5-STAGE GLOBAL GRADUATE JOURNEY
            </h2>
            <p className="text-sm text-slate-600 font-normal">
              A structured roadmap guiding students from undergraduate research to overseas Master’s admission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GLOBAL_JOURNEY_STEPS.map((step) => (
              <div 
                key={step.id}
                className="bg-white border border-slate-200 shadow-xs flex flex-col justify-between overflow-hidden hover:shadow-md transition-shadow group"
              >
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3">
                    <span 
                      className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 text-white shadow-xs"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/75 px-2.5 py-1 text-xs font-mono font-bold text-[#14B8A6] backdrop-blur-xs">
                    {step.metric}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <div className="text-[10px] font-mono font-bold text-[#0D9488] uppercase">
                      {step.category}
                    </div>
                    <h3 className="text-base font-bold text-[#082B5C] font-['Outfit',sans-serif]">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03 — STANDARDISED EXAM SUPPORT MATRIX                             */}
      {/* ========================================================================= */}
      <section className="w-full py-16 px-4 sm:px-8 lg:px-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-mono font-bold text-[#0D9488] tracking-widest uppercase bg-[#F4F8FC] px-3 py-1 inline-block border border-slate-200">
              QUALIFYING EXAMINATIONS
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#082B5C] font-['Outfit',sans-serif] uppercase">
              STANDARDISED EXAM SUPPORT
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Structured diagnostic testing, quantitative drills, and analytical writing preparation for national and international qualifying exams.
            </p>
          </div>

          {/* Exams Table */}
          <div className="bg-white border border-slate-200 shadow-xs overflow-hidden">
            <div className="grid grid-cols-12 p-4 bg-[#082B5C] text-white text-xs font-mono font-bold tracking-widest uppercase">
              <div className="col-span-3 sm:col-span-2">EXAM</div>
              <div className="col-span-5 sm:col-span-6">PRIMARY ACADEMIC PATHWAY</div>
              <div className="col-span-4 text-right">INSTITUTIONAL SUPPORT</div>
            </div>

            <div className="divide-y divide-slate-100">
              {examTableData.map((item, idx) => (
                <div key={idx} className="grid grid-cols-12 p-4 items-center hover:bg-[#F4F8FC] transition-colors">
                  <div className="col-span-3 sm:col-span-2">
                    <span 
                      className="px-2.5 py-1 text-xs font-black font-mono text-white inline-block shadow-2xs"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.exam}
                    </span>
                    <div className="text-[11px] text-slate-500 mt-1 font-medium hidden sm:block">
                      {item.fullName}
                    </div>
                  </div>
                  <div className="col-span-5 sm:col-span-6 pr-4">
                    <p className="text-xs sm:text-sm font-bold text-[#082B5C]">
                      {item.pathway}
                    </p>
                  </div>
                  <div className="col-span-4 text-right">
                    <span className="text-xs font-mono font-bold text-[#0D9488] bg-teal-50 px-2.5 py-1 border border-teal-200 inline-block">
                      {item.support}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
