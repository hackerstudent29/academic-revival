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
import { PlacementPulseEvent } from '@/types/placement';

interface JourneySectionProps {
  onOpenEvent?: (event: PlacementPulseEvent) => void;
  onOpenBrochure?: () => void;
  onOpenContact?: () => void;
}

const ConcentricArchPhotoFrame: React.FC<{
  src: string;
  alt: string;
  label: string;
}> = ({ src, alt, label }) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      <div className="relative p-2 rounded-md bg-card border border-border shadow-md w-full max-w-[280px] sm:max-w-[320px] h-[260px] sm:h-[300px]">
        <div className="w-full h-full overflow-hidden rounded-sm bg-muted relative group">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-3 left-2 right-2 text-center">
            <span className="inline-block px-2.5 py-1 bg-primary text-white font-oswald text-[10px] font-black uppercase tracking-wider shadow-sm rounded-sm">
              {label}
            </span>
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
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=80',
    description: 'Rigorous engineering coursework, laboratory projects, and faculty research mentorship establishing strong academic transcripts.'
  },
  {
    id: 'step2',
    title: 'Higher Studies Cell Orientation',
    category: 'SEMESTER 5',
    metric: 'Step 02',
    badge: 'ORIENTATION',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
    description: 'Comprehensive seminars on global Master’s/Ph.D. options, international scholarships, and application timelines.'
  },
  {
    id: 'step3',
    title: 'Standardised Test Roadmap',
    category: 'SEMESTER 6',
    metric: 'Step 03',
    badge: 'EXAM PREPARATION',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80',
    description: 'Dedicated coaching and mock tests for GRE, IELTS/TOEFL English proficiency, and GATE for premier Indian institutions.'
  },
  {
    id: 'step4',
    title: 'Profile Assessment & SOP Review',
    category: 'SEMESTER 7',
    metric: 'Step 04',
    badge: 'ADMISSIONS COUNSELLING',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80',
    description: '1-on-1 statement of purpose refinement, faculty letter of recommendation coordination, and tailored university shortlisting.'
  },
  {
    id: 'step5',
    title: 'International University Admissions',
    category: 'SEMESTER 8',
    metric: 'Step 05',
    badge: 'GLOBAL ADMISSIONS',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80',
    description: 'Final offer letter acceptance, visa document vetting, and pre-departure briefings for international student success.'
  }
];

export const JourneySection: React.FC<JourneySectionProps> = () => {
  const examTableData = [
    {
      exam: 'GRE',
      fullName: 'Graduate Record Examinations',
      pathway: 'Overseas higher education (US, Germany, Singapore & Global)',
      support: 'Awareness & guidance'
    },
    {
      exam: 'TOEFL',
      fullName: 'Test of English as a Foreign Language',
      pathway: 'English proficiency for overseas education',
      support: 'Awareness & guidance'
    },
    {
      exam: 'IELTS',
      fullName: 'International English Language Testing System',
      pathway: 'English proficiency for overseas education (UK, Canada, Europe, Australia)',
      support: 'Awareness / coaching where necessary'
    },
    {
      exam: 'CAT',
      fullName: 'Common Admission Test',
      pathway: 'Management / postgraduate pathways (IIMs & Premier Indian B-Schools)',
      support: 'Awareness & guidance'
    },
    {
      exam: 'GATE',
      fullName: 'Graduate Aptitude Test in Engineering',
      pathway: 'Higher studies in engineering & technology (IITs, IISc, NITs) & PSU careers',
      support: 'Awareness & guidance'
    },
  ];

  return (
    <div className="relative w-full bg-page-bg text-foreground font-sans">

      <section className="w-full pt-14 sm:pt-18 pb-16 px-4 sm:px-8 lg:px-14 bg-page-bg border-b border-border">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-10">
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 items-end justify-items-center">
            <ConcentricArchPhotoFrame
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=85"
              alt="International University Admissions"
              label="GLOBAL SCHOLARSHIPS"
            />

            <ConcentricArchPhotoFrame
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=85"
              alt="Advanced Research & Master's Studies"
              label="GRADUATE RESEARCH"
            />

            <ConcentricArchPhotoFrame
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&auto=format&fit=crop&q=85"
              alt="Premier University Fellowships"
              label="ACADEMIC EXCELLENCE"
            />
          </div>

          <div className="space-y-4 max-w-4xl pt-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-foreground uppercase tracking-widest font-oswald mb-2">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span>ACADEMIC EXPANSION & GLOBAL OPPORTUNITIES</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-primary font-oswald uppercase tracking-tight">
              IMPORTANCE OF HIGHER EDUCATION
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-5 items-start rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs border border-border bg-card p-5 sm:p-6 shadow-xs">
              <div className="space-y-3 text-muted-foreground text-sm sm:text-base leading-relaxed text-left font-sans">
                <p>
                  Higher education helps students move from a strong technical foundation to specialized expertise, research depth, and global academic exposure.
                </p>
                <p>
                  It opens pathways in advanced engineering, AI, sustainability, and interdisciplinary research while building confidence for international careers.
                </p>
              </div>

              <div className="space-y-2.5 text-left font-sans">
                <div className="flex items-start gap-2.5 border-b border-border pb-2">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" aria-hidden="true" />
                  <span className="text-xs font-bold text-foreground">Research-led specialization</span>
                </div>
                <div className="flex items-start gap-2.5 border-b border-border pb-2">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" aria-hidden="true" />
                  <span className="text-xs font-bold text-foreground">International scholarships and fellowships</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" aria-hidden="true" />
                  <span className="text-xs font-bold text-foreground">Global mobility and long-term career growth</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="w-full py-16 px-4 sm:px-8 lg:px-14 bg-page-bg border-b border-border">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold text-foreground tracking-widest uppercase inline-block font-oswald mb-2">
              HIGHER STUDIES PATHWAY
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-primary font-oswald uppercase">
              THE 5-STAGE GLOBAL GRADUATE JOURNEY
            </h2>
            <p className="text-sm text-muted-foreground font-normal font-sans">
              A structured roadmap guiding students from undergraduate research to overseas Master’s admission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GLOBAL_JOURNEY_STEPS.map((step) => (
              <div 
                key={step.id}
                className="bg-page-bg border border-border shadow-xs flex flex-col justify-between overflow-hidden group rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs hover:border-primary/40 transition-all duration-200"
              >
                <div className="relative h-44 overflow-hidden bg-page-bg">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 text-white bg-primary shadow-xs font-oswald rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs">
                      {step.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/75 px-2.5 py-1 text-xs font-bold text-white backdrop-blur-xs font-oswald rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs">
                    {step.metric}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <div className="text-[10px] font-bold text-primary uppercase font-oswald">
                      {step.category}
                    </div>
                    <h3 className="text-base font-bold text-foreground font-oswald">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-normal font-sans">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-4 sm:px-8 lg:px-14 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold text-foreground tracking-widest uppercase inline-block font-oswald mb-2">
              QUALIFYING EXAMINATIONS
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-primary font-oswald uppercase">
              STANDARDISED EXAM SUPPORT
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed font-normal font-sans">
              Structured diagnostic testing, quantitative drills, and analytical writing preparation.
            </p>
          </div>

          <div className="bg-card border border-border shadow-xs overflow-hidden rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs">
            <div className="grid grid-cols-12 p-4 bg-primary text-white text-xs font-oswald font-bold tracking-widest uppercase">
              <div className="col-span-3 sm:col-span-2">EXAM</div>
              <div className="col-span-5 sm:col-span-6">PRIMARY ACADEMIC PATHWAY</div>
              <div className="col-span-4 text-right">INSTITUTIONAL SUPPORT</div>
            </div>

            <div className="divide-y divide-border">
              {examTableData.map((item, idx) => (
                <div key={idx} className="grid grid-cols-12 p-4 items-center hover:bg-muted/50 transition-colors">
                  <div className="col-span-3 sm:col-span-2">
                    <span className="px-2.5 py-1 text-xs font-black font-oswald text-white bg-primary inline-block rounded-sm">
                      {item.exam}
                    </span>
                    <div className="text-[11px] text-muted-foreground mt-1 font-medium hidden sm:block font-sans">
                      {item.fullName}
                    </div>
                  </div>
                  <div className="col-span-5 sm:col-span-6 pr-4">
                    <p className="text-xs sm:text-sm font-bold text-foreground font-sans">
                      {item.pathway}
                    </p>
                  </div>
                  <div className="col-span-4 text-right">
                    <span className="text-xs font-oswald font-bold text-primary bg-primary/10 px-2.5 py-1 border border-primary/20 inline-block rounded-sm">
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
