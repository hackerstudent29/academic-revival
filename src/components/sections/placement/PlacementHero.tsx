import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface PlacementHeroProps {
  activeTab: string;
  onExploreClick: () => void;
  onSecondaryClick: () => void;
}

const HERO_CONFIG: Record<string, {
  badge: string;
  headingLine1: string;
  headingLine2: string;
  headingLine3: string;
  subtitle: string;
  primaryBtnText: string;
  secondaryBtnText: string;
  bgImage: string;
}> = {
  overview: {
    badge: 'MSAJCE PLACEMENT CELL',
    headingLine1: 'EXCELLENCE.',
    headingLine2: 'TRAINING.',
    headingLine3: 'CAREERS.',
    subtitle: "Consistently delivering high placement rates, premium corporate networks, and career launchpads for engineering graduates at Mohamed Sathak A.J. College of Engineering.",
    primaryBtnText: 'EXPLORE PLACEMENT MATRIX',
    secondaryBtnText: 'VIEW RECRUITERS',
    bgImage: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=90',
  },
  recruiters: {
    badge: 'MSAJCE CORPORATE ECOSYSTEM',
    headingLine1: 'RECRUITERS.',
    headingLine2: 'NETWORKS.',
    headingLine3: 'TIERS.',
    subtitle: "Over 120+ leading global IT corporations, Fortune 500 enterprises, and core engineering industries recruit top engineering talent from our Chennai campus.",
    primaryBtnText: 'EXPLORE RECRUITER TIERS',
    secondaryBtnText: 'SELECTION PATHWAY',
    bgImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=90',
  },
  training: {
    badge: 'MSAJCE PLACEMENT CELL',
    headingLine1: 'SKILLS. TRAINING.',
    headingLine2: 'READINESS.',
    headingLine3: '',
    subtitle: "In a competitive job market, professional readiness requires more than academic knowledge. MSAJCE's Placement Cell supports students in developing the skills, experience and confidence required to approach professional opportunities.",
    primaryBtnText: 'EXPLORE SKILL ECOSYSTEM',
    secondaryBtnText: 'TECHNOLOGY CENTRES',
    bgImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=90',
  },
  internships: {
    badge: 'MSAJCE INDUSTRY EXPERIENTIAL',
    headingLine1: 'INTERNSHIPS.',
    headingLine2: 'PPO ACHIEVEMENTS.',
    headingLine3: 'COHORTS.',
    subtitle: "Bridging campus learning with live corporate environments through paid stipends, industry projects, and pre-placement offer conversions.",
    primaryBtnText: 'VIEW INTERNSHIP RECORDS',
    secondaryBtnText: 'STUDENT SUCCESS STORIES',
    bgImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=90',
  },
  mous: {
    badge: 'MSAJCE BILATERAL COVENANTS',
    headingLine1: 'ALLIANCES.',
    headingLine2: 'MoUs.',
    headingLine3: 'PARTNERSHIPS.',
    subtitle: "Strategic bilateral memorandums of understanding with global technology leaders, corporate R&D centers, and government technology institutes.",
    primaryBtnText: 'VIEW ACTIVE AGREEMENTS',
    secondaryBtnText: 'CEREMONY ARCHIVES',
    bgImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1920&q=90',
  },
  journey: {
    badge: 'MSAJCE HIGHER EDUCATION CELL',
    headingLine1: 'GLOBAL TRACK.',
    headingLine2: 'HIGHER STUDIES.',
    headingLine3: 'FELLOWSHIPS.',
    subtitle: "Guiding engineering graduates toward Master's degrees, doctoral research, and standardized exam preparation (GRE, IELTS, GATE, CAT) for global universities.",
    primaryBtnText: 'THE 5-STAGE JOURNEY',
    secondaryBtnText: 'EXAM SUPPORT MATRIX',
    bgImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=90',
  },
};

export const PlacementHero: React.FC<PlacementHeroProps> = ({
  activeTab,
  onExploreClick,
  onSecondaryClick,
}) => {
  const config = HERO_CONFIG[activeTab] || HERO_CONFIG.overview;

  return (
    <section className="relative w-full min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#9E2339]">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={config.bgImage}
          alt="Mohamed Sathak A J College of Engineering Campus Building"
          className="w-full h-full object-cover object-center brightness-[0.42] contrast-[1.1] transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        {/* Soft Dark Vignette and Gradient Overlay fading into page background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-6 pt-10 pb-14 flex flex-col items-center">
        
        {/* Top Badge matching screenshot */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-primary/90 border border-white/20 rounded-sm text-[11px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md shadow-md font-oswald">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{config.badge}</span>
        </div>

        {/* 3-Line Big Bold Heading matching screenshot */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase leading-[1.05] font-oswald drop-shadow-lg">
          {config.headingLine1} {config.headingLine2}
          {config.headingLine3 && (
            <>
              <br />
              <span>{config.headingLine3}</span>
            </>
          )}
        </h1>

        {/* Action Buttons matching screenshot */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4 font-oswald">
          <button
            onClick={onExploreClick}
            className="px-6 py-3 bg-primary hover:bg-primary/90 text-white text-xs sm:text-sm font-bold tracking-wider uppercase rounded-md transition-all duration-200 shadow-lg flex items-center gap-2 cursor-pointer border border-white/20"
          >
            <span>{config.primaryBtnText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onSecondaryClick}
            className="px-6 py-3 bg-background/80 hover:bg-background text-foreground text-xs sm:text-sm font-bold tracking-wider uppercase rounded-md transition-all duration-200 shadow-lg flex items-center gap-2 cursor-pointer border border-border backdrop-blur-sm"
          >
            <span>{config.secondaryBtnText}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Thin Divider Line matching screenshot */}
        <div className="w-full max-w-lg border-t border-white/20 pt-2" />

        {/* Subtitle Paragraph matching screenshot */}
        <p className="max-w-2xl text-xs sm:text-sm lg:text-base text-white/90 font-medium leading-relaxed tracking-wide font-['Switzer',sans-serif]">
          {config.subtitle}
        </p>

      </div>
    </section>
  );
};
