import React, { useState, useEffect, useRef } from 'react';
import { 
  TrendingUp, 
  ArrowRight, 
  GraduationCap, 
  Briefcase, 
  Rocket, 
  BookOpen, 
  Microscope, 
  Award, 
  CheckCircle2, 
  ChevronRight,
  Laptop,
  Code2,
  Building,
  Target,
  Users,
  Check,
  Building2,
  Mail,
  Phone
} from 'lucide-react';

interface OverviewSectionProps {
  onNavigate: (sectionId: string) => void;
  onOpenBrochure?: () => void;
  onOpenContact?: () => void;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({ 
  onNavigate,
  onOpenBrochure,
  onOpenContact
}) => {
  const [hasCounted, setHasCounted] = useState(false);
  const [activeEcosystemPillar, setActiveEcosystemPillar] = useState<number>(0);
  const [activeDestination, setActiveDestination] = useState<number>(0);
  const statsRef = useRef<HTMLDivElement>(null);

  // Count up state
  const [counts, setCounts] = useState({
    rate: 0,
    offers: 0,
    companies: 0,
    highest: 0,
    average: 0,
  });

  // Intersection observer for count-up
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasCounted) {
          setHasCounted(true);
          const duration = 1800;
          const steps = 60;
          const stepTime = duration / steps;
          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);

            setCounts({
              rate: Math.round(95.0 * easeOutQuart * 10) / 10,
              offers: Math.round(450 * easeOutQuart),
              companies: Math.round(120 * easeOutQuart),
              highest: Math.round(43.3 * easeOutQuart * 10) / 10,
              average: Math.round(5.8 * easeOutQuart * 10) / 10,
            });

            if (currentStep >= steps) {
              clearInterval(timer);
              setCounts({
                rate: 95.0,
                offers: 450,
                companies: 120,
                highest: 43.3,
                average: 5.8,
              });
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasCounted]);

  // Section 1 Triptych Arched Images (Inspired by user screenshot: CIT Chennai arched trio)
  const archedTrioImages = [
    {
      url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=85',
      title: 'Global Career Ambition',
      role: 'International Recruiter Readiness'
    },
    {
      url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=85',
      title: 'Corporate Leadership',
      role: 'Engineering & Tech Strategy'
    },
    {
      url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=85',
      title: 'Innovation & Research',
      role: 'Global Tech Solutioning'
    }
  ];

  // 6 Essential Pillars of Career Readiness (Inspired by the Orange & Green Kanopi Studios Infographic Frame)
  const ecosystemPillars = [
    {
      id: 'academics',
      num: 1,
      title: 'Compelling Academics',
      subtitle: 'Rigorous Curriculum & Labs',
      description: 'Foundational engineering theory, Anna University syllabus mastery, and outcome-based laboratory training.',
      bulletins: [
        'Anna University curriculum aligned with global NBA accreditation guidelines',
        'Advanced computer and engineering hardware research facilities',
        'Continuous internal assessments and individual academic mentoring'
      ],
      icon: BookOpen,
      bgColor: 'bg-[#123E33]', // Dark Forest Green
      textColor: 'text-[#123E33]',
      lineColor: '#123E33'
    },
    {
      id: 'skills',
      num: 2,
      title: 'Technical Skills',
      subtitle: 'Hands-On Coding & Tools',
      description: 'Hands-on programming, full-stack software development, cloud computing, and robust data structures proficiency.',
      bulletins: [
        'Full-stack software engineering and data science bootcamps',
        'Industry-recognized certificates from AWS, Cisco, Oracle, and RedHat',
        'Open-source code repositories and real-world project portfolios'
      ],
      icon: Code2,
      bgColor: 'bg-[#8BB72A]', // Bright Lime / Green
      textColor: 'text-[#8BB72A]',
      lineColor: '#8BB72A'
    },
    {
      id: 'training',
      num: 3,
      title: 'Aptitude & STAR Training',
      subtitle: 'Quantitative & Interview Drills',
      description: 'Speed mathematics, logical deduction, corporate communication, and situational interview mastery.',
      bulletins: [
        'Weekly quantitative, logical reasoning, and verbal aptitude sessions',
        'STAR method behavioral interview training and resume workshops',
        'Simulated computer-based recruitment assessment environments'
      ],
      icon: Target,
      bgColor: 'bg-[#FF6A42]', // Vibrant Orange
      textColor: 'text-[#FF6A42]',
      lineColor: '#FF6A42'
    },
    {
      id: 'internships',
      num: 4,
      title: 'Live Internships',
      subtitle: 'Practical Industry Exposure',
      description: '65+ industrial partner MoUs offering real-world capstone projects and pre-placement offer conversions.',
      bulletins: [
        'Mandatory summer and winter semester in-plant internships',
        'Industrial projects with leading manufacturing & IT consulting firms',
        'High conversion rates to full-time Pre-Placement Offers (PPO)'
      ],
      icon: Laptop,
      bgColor: 'bg-[#FF6A42]', // Vibrant Orange
      textColor: 'text-[#FF6A42]',
      lineColor: '#FF6A42'
    },
    {
      id: 'industry',
      num: 5,
      title: 'Corporate MoUs',
      subtitle: 'Industry Ties & Conclaves',
      description: 'CXO guest lectures, in-plant visits, technical conclaves, and direct on-campus hiring partnerships.',
      bulletins: [
        'Regular guest lectures by senior enterprise technology leaders',
        'MoUs with top-tier product and global technology organizations',
        'Campus recruitment drives across Tier-1, Tier-2, and core sectors'
      ],
      icon: Building,
      bgColor: 'bg-[#8BB72A]', // Bright Lime / Green
      textColor: 'text-[#8BB72A]',
      lineColor: '#8BB72A'
    },
    {
      id: 'mentorship',
      num: 6,
      title: '1-on-1 Mentorship',
      subtitle: 'Personalized Career Guidance',
      description: 'Dedicated faculty advisors and distinguished alumni guiding students through every developmental phase.',
      bulletins: [
        'Assigned faculty mentors monitoring academic and career growth',
        'Active alumni mentorship network across India and abroad',
        'Personalized counseling for career dilemmas and higher studies'
      ],
      icon: Users,
      bgColor: 'bg-[#123E33]', // Dark Forest Green
      textColor: 'text-[#123E33]',
      lineColor: '#123E33'
    }
  ];

  // Destination nodes for Section 3
  const destinations = [
    {
      id: 'job',
      number: '01',
      badge: 'DESTINATION 1 — JOB',
      heading: 'BUILD A CAREER',
      paragraph: "Campus recruitment provides students with opportunities to begin professional careers across diverse industries and functional domains. The placement process helps students connect their academic capabilities and developed skills with organisational requirements and professional roles.",
      bulletins: [
        'Direct access to 120+ visiting recruiters and Fortune 500 MNCs',
        'Comprehensive multi-round recruitment preparation (online test to HR)',
        'Salary packages scaling up to ₹43.3 LPA with prominent core & tech firms'
      ],
      steps: ['Student', 'Interview', 'Organisation', 'Career'],
      icon: Briefcase,
      color: '#0052CC',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=85',
      imageCaption: 'Campus career recruitment and corporate placement pathways',
      navTarget: 'recruiters',
      btnLabel: 'Explore Recruitment & Tiers'
    },
    {
      id: 'entrepreneurship',
      number: '02',
      badge: 'DESTINATION 2 — ENTREPRENEURSHIP',
      heading: 'BUILD SOMETHING OF YOUR OWN',
      paragraph: "For students who aspire to create rather than simply join an organisation, entrepreneurship offers another path forward. The institution encourages students to explore entrepreneurial thinking, identify problems worth solving and transform ideas and skills into meaningful ventures.",
      bulletins: [
        'Incubation cell support for prototyping and proof-of-concept validation',
        'Patent filing assistance and intellectual property (IP) guidance',
        'Investor pitch sessions and startup alumni networking conclaves'
      ],
      steps: ['IDEA', 'PROBLEM', 'SOLUTION', 'PRODUCT', 'VENTURE'],
      icon: Rocket,
      color: '#D97706',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&auto=format&fit=crop&q=85',
      imageCaption: 'Incubating startup ventures and tech innovations',
      navTarget: 'journey',
      btnLabel: 'Innovation & Startup Pathways'
    },
    {
      id: 'higher-studies',
      number: '03',
      badge: 'DESTINATION 3 — HIGHER STUDIES',
      heading: 'GO DEEPER',
      paragraph: "Higher education provides students with an opportunity to specialise, expand their knowledge and prepare for advanced academic or professional pathways. Students can explore postgraduate education and opportunities in India and abroad based on their academic interests and long-term goals.",
      bulletins: [
        'Coaching and mock tests for GATE, GRE, TOEFL, IELTS, and CAT',
        'Guidance on statement of purpose (SOP) and letters of recommendation',
        'Alumni studying in premier Indian institutions (IITs, NITs) & abroad'
      ],
      steps: ['B.TECH', "MASTER'S", 'SPECIALISATION', 'EXPERTISE'],
      icon: GraduationCap,
      color: '#0D9488',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&auto=format&fit=crop&q=85',
      imageCaption: 'Postgraduate research & premier university admissions',
      navTarget: 'journey',
      btnLabel: 'Higher Studies & Exams'
    },
    {
      id: 'research',
      number: '04',
      badge: 'DESTINATION 4 — RESEARCH & INNOVATION',
      heading: "DISCOVER WHAT'S NEXT",
      paragraph: "Research provides a pathway for students who want to investigate unanswered questions, develop new knowledge and contribute to technological or academic advancement. Through projects, experimentation and deeper engagement with their disciplines, students can move from learning existing ideas to exploring new possibilities.",
      bulletins: [
        'Faculty-guided R&D projects funded by governmental and private bodies',
        'Paper publications in Scopus, IEEE, and SCI indexed journals',
        'Interdisciplinary lab access across AI, Robotics, and Renewable Energy'
      ],
      steps: ['QUESTION', 'EXPLORE', 'EXPERIMENT', 'DISCOVER', 'INNOVATE'],
      icon: Microscope,
      color: '#7C3AED',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&auto=format&fit=crop&q=85',
      imageCaption: 'Interdisciplinary R&D and funded technological labs',
      navTarget: 'training',
      btnLabel: 'R&D and Capstone Projects'
    },
    {
      id: 'certification',
      number: '05',
      badge: 'DESTINATION 5 — PROFESSIONAL CERTIFICATION',
      heading: 'KEEP LEARNING',
      paragraph: "The changing nature of technology and industry makes continuous learning an important part of professional growth. Certifications, specialised training and new technical competencies can help graduates adapt to evolving roles and build expertise throughout their careers.",
      bulletins: [
        'Sponsored access to NPTEL, Coursera, edX, and Swayam courses',
        'Industry certifications in DevOps, Cybersecurity, Cloud, and Data Analytics',
        'Lifelong upskilling resources for active students and alumni alike'
      ],
      steps: ['LEARN', 'CERTIFY', 'SPECIALISE', 'ADAPT'],
      icon: Award,
      color: '#082B5C',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&auto=format&fit=crop&q=85',
      imageCaption: 'Continuous professional learning and industry certifications',
      navTarget: 'training',
      btnLabel: 'View Skill Training Hub'
    }
  ];

  return (
    <div className="w-full bg-white text-[#10243E] overflow-hidden">
      {/* ========================================================= */}
      {/* HERO BANNER — LARGE CLEAN COLLEGE IMAGE (NO TEXT) */}
      {/* ========================================================= */}
      <section className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden bg-[#082B5C]">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2000&q=80"
          alt="MSAJCE campus building"
          className="absolute inset-0 h-full w-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Optional: Subtle overlay for depth */}
        <div className="absolute inset-0 bg-black/5" />
      </section>

      {/* ========================================================= */}
      {/* SECTION 1 — FROM CAMPUS TO CAREER (PARAGRAPH ON LEFT, LARGER TRIPTYCH ARCH FRAME ON RIGHT) */}
      {/* Inspired directly by User's Reference Screenshot: Three tall curved window arches */}
      {/* ========================================================= */}
      <section className="w-full py-20 sm:py-28 bg-white" id="campus-to-career-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT COLUMN: Narrative, Paragraph & Bulletins (Spacious layout, no cards) */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-5xl font-black text-[#082B5C] tracking-tight font-['Outfit',sans-serif] leading-tight">
                  FROM CAMPUS TO CAREER
                </h2>
              </div>

              {/* Main Paragraph with spacious margins and clear text */}
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal pt-2">
                At Mohamed Sathak A.J. College of Engineering, the journey towards professional success begins long before recruitment. The Placement Cell works towards developing students' employability through skill development, career guidance, industry interaction, internships and structured recruitment preparation. By connecting academic learning with professional expectations, students are encouraged to approach their future with knowledge, confidence and a clear sense of direction.
              </p>

              {/* Bulletins with generous spacing */}
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3.5">
                  <span className="mt-2 h-2 w-2 rounded-full bg-black shrink-0" aria-hidden="true" />
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                    <strong className="text-[#082B5C] font-bold">Continuous Guidance:</strong> Mentoring from Day 1 to align student aptitude with corporate roles.
                  </p>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="mt-2 h-2 w-2 rounded-full bg-black shrink-0" aria-hidden="true" />
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                    <strong className="text-[#082B5C] font-bold">Industry Synergies:</strong> 65+ MoUs ensuring live project exposure and pre-placement offers.
                  </p>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="mt-2 h-2 w-2 rounded-full bg-black shrink-0" aria-hidden="true" />
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                    <strong className="text-[#082B5C] font-bold">Holistic Readiness:</strong> Balanced technical mastery, verbal articulation, and psychometric conditioning.
                  </p>
                </div>
              </div>

              {/* Action Buttons: Rectangular shape, Light Blue border, Blue on hover */}
              <div className="pt-6 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('journey')}
                  className="px-6 py-3.5 rounded-none border border-sky-300 bg-white hover:bg-[#0052CC] text-[#082B5C] hover:text-white text-xs font-extrabold tracking-wider uppercase transition-all duration-200 shadow-xs cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Explore Career Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('training')}
                  className="px-6 py-3.5 rounded-none border border-sky-300 bg-white hover:bg-[#0052CC] text-[#082B5C] hover:text-white text-xs font-extrabold tracking-wider uppercase transition-all duration-200 shadow-xs cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Skill Training Modules</span>
                </button>
              </div>

            </div>

            {/* RIGHT COLUMN: LARGER TRIPTYCH ARCH WINDOW FRAME (Direct Inspiration from User's Screenshot) */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="w-full max-w-[560px] grid grid-cols-3 gap-3 sm:gap-4 items-end">
                
                {/* Arch 1: Left Pillar (Arched Top) */}
                <div className="relative h-[320px] sm:h-[400px] rounded-t-full overflow-hidden shadow-lg group">
                  <img 
                    src={archedTrioImages[0].url} 
                    alt={archedTrioImages[0].title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082B5C]/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-2 right-2 text-center text-white">
                    <p className="text-[11px] font-bold leading-tight font-['Outfit',sans-serif]">
                      {archedTrioImages[0].title}
                    </p>
                  </div>
                </div>

                {/* Arch 2: Center Pillar (Tallest Arched Top) */}
                <div className="relative h-[360px] sm:h-[450px] rounded-t-full overflow-hidden shadow-2xl group">
                  <img 
                    src={archedTrioImages[1].url} 
                    alt={archedTrioImages[1].title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082B5C]/85 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-2 right-2 text-center text-white">
                    <p className="text-xs font-black leading-tight font-['Outfit',sans-serif]">
                      {archedTrioImages[1].title}
                    </p>
                    <p className="text-[10px] text-teal-200 font-medium mt-0.5">
                      MSAJCE Excellence
                    </p>
                  </div>
                </div>

                {/* Arch 3: Right Pillar (Arched Top) */}
                <div className="relative h-[320px] sm:h-[400px] rounded-t-full overflow-hidden shadow-lg group">
                  <img 
                    src={archedTrioImages[2].url} 
                    alt={archedTrioImages[2].title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#082B5C]/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-2 right-2 text-center text-white">
                    <p className="text-[11px] font-bold leading-tight font-['Outfit',sans-serif]">
                      {archedTrioImages[2].title}
                    </p>
                  </div>
                </div>

              </div>
              
              <p className="text-center text-xs text-slate-500 font-medium mt-4 tracking-wide">
                Empowering engineering students for prestigious national and multinational career destinations.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* PROVEN TRACK RECORD OF CAREER EXCELLENCE (Impact Metrics) */}
      {/* Borderless clean structure with generous top & bottom spacing */}
      {/* ========================================================= */}
      <section 
        id="impact-statistics" 
        ref={statsRef}
        className="w-full bg-white py-12 sm:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold tracking-widest text-[#0052CC] uppercase">
              <TrendingUp className="w-4 h-4 text-[#0D9488]" />
              INSTITUTIONAL METRICS
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#082B5C] tracking-tight font-['Outfit',sans-serif]">
              Proven Track Record of Career Excellence
            </h2>
            <p className="text-base text-slate-600">
              Consistently high placement rates backed by industry-aligned engineering education.
            </p>
          </div>

          {/* Clean Metric Blocks Without Card Borders */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 bg-[#F8FAFC] p-8 rounded-none">
            <div className="text-center space-y-1.5">
              <p className="text-3xl sm:text-5xl font-extrabold text-[#082B5C] tracking-tight font-['Outfit',sans-serif]">
                {counts.rate}%
              </p>
              <p className="text-xs font-extrabold text-[#0052CC] uppercase tracking-wider">Placement Rate</p>
              <p className="text-xs text-slate-500">Across eligible cohorts</p>
            </div>

            <div className="text-center space-y-1.5">
              <p className="text-3xl sm:text-5xl font-extrabold text-[#082B5C] tracking-tight font-['Outfit',sans-serif]">
                {counts.offers}+
              </p>
              <p className="text-xs font-extrabold text-[#0052CC] uppercase tracking-wider">Offers Made</p>
              <p className="text-xs text-slate-500">Full-time & PPO roles</p>
            </div>

            <div className="text-center space-y-1.5">
              <p className="text-3xl sm:text-5xl font-extrabold text-[#082B5C] tracking-tight font-['Outfit',sans-serif]">
                {counts.companies}+
              </p>
              <p className="text-xs font-extrabold text-[#0052CC] uppercase tracking-wider">Recruiting Companies</p>
              <p className="text-xs text-slate-500">Tier-1 & Global MNCs</p>
            </div>

            <div className="text-center space-y-1.5">
              <p className="text-3xl sm:text-5xl font-extrabold text-[#082B5C] tracking-tight font-['Outfit',sans-serif]">
                ₹{counts.highest} <span className="text-lg font-bold text-slate-500">LPA</span>
              </p>
              <p className="text-xs font-extrabold text-[#0D9488] uppercase tracking-wider">Highest Package</p>
              <p className="text-xs text-slate-500">Peak compensation</p>
            </div>

            <div className="text-center space-y-1.5 col-span-2 md:col-span-1">
              <p className="text-3xl sm:text-5xl font-extrabold text-[#082B5C] tracking-tight font-['Outfit',sans-serif]">
                ₹{counts.average} <span className="text-lg font-bold text-slate-500">LPA</span>
              </p>
              <p className="text-xs font-extrabold text-[#0052CC] uppercase tracking-wider">Average Package</p>
              <p className="text-xs text-slate-500">Consolidated average</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2 — AN ECOSYSTEM BUILT AROUND READINESS (BRIGHT YELLOW BACKGROUND) */}
      {/* High-impact bright yellow background as requested */}
      {/* ========================================================= */}
      <section className="w-full py-20 sm:py-28 bg-[#FFE600] text-[#082B5C]" id="ecosystem-readiness-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT COLUMN: THE INSPIRATION FRAME (6 Essential Elements with Center Text) */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div className="relative w-full max-w-[620px] bg-transparent p-2 sm:p-4">
                
                {/* Central Diagram Structure */}
                <div className="grid grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-5 relative">
                  
                  {/* Center Floating Title Badge */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                    <div className="bg-[#082B5C] text-white px-4 py-3 shadow-xl text-center max-w-[170px] pointer-events-auto border-2 border-white">
                      <p className="text-xs font-serif font-bold text-white leading-snug">
                        6 Essential Pillars of Career Readiness
                      </p>
                      <div className="w-6 h-0.5 bg-[#FFE600] mx-auto mt-1" />
                    </div>
                  </div>

                  {/* Left Column of Pillars (1, 2, 3) */}
                  <div className="space-y-4">
                    {/* PILLAR 1: Dark Forest Green */}
                    <div 
                      onClick={() => setActiveEcosystemPillar(0)}
                      className={`p-4 sm:p-5 bg-[#123E33] text-white shadow-lg cursor-pointer transition-all duration-300 hover:scale-102 flex flex-col justify-between min-h-[115px] sm:min-h-[125px] relative ${
                        activeEcosystemPillar === 0 ? 'ring-4 ring-[#082B5C]' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <BookOpen className="w-5 h-5 text-emerald-200" />
                        <span className="w-6 h-6 rounded-full bg-white text-[#123E33] font-bold text-xs flex items-center justify-center shadow-xs">
                          1
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold tracking-tight font-['Outfit',sans-serif]">
                          Academics & Theory
                        </h4>
                        <p className="text-[11px] text-emerald-100/90 leading-tight mt-0.5">
                          Rigorous Anna Univ. syllabus
                        </p>
                      </div>
                    </div>

                    {/* PILLAR 2: Lime Green */}
                    <div 
                      onClick={() => setActiveEcosystemPillar(1)}
                      className={`p-4 sm:p-5 bg-[#8BB72A] text-white shadow-lg cursor-pointer transition-all duration-300 hover:scale-102 flex flex-col justify-between min-h-[115px] sm:min-h-[125px] relative ${
                        activeEcosystemPillar === 1 ? 'ring-4 ring-[#082B5C]' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <Code2 className="w-5 h-5 text-white" />
                        <span className="w-6 h-6 rounded-full bg-white text-[#8BB72A] font-bold text-xs flex items-center justify-center shadow-xs">
                          2
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold tracking-tight font-['Outfit',sans-serif]">
                          Technical Skills
                        </h4>
                        <p className="text-[11px] text-lime-50 leading-tight mt-0.5">
                          Full-stack & data bootcamps
                        </p>
                      </div>
                    </div>

                    {/* PILLAR 3: Orange */}
                    <div 
                      onClick={() => setActiveEcosystemPillar(2)}
                      className={`p-4 sm:p-5 bg-[#FF6A42] text-white shadow-lg cursor-pointer transition-all duration-300 hover:scale-102 flex flex-col justify-between min-h-[115px] sm:min-h-[125px] relative ${
                        activeEcosystemPillar === 2 ? 'ring-4 ring-[#082B5C]' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <Target className="w-5 h-5 text-orange-100" />
                        <span className="w-6 h-6 rounded-full bg-white text-[#FF6A42] font-bold text-xs flex items-center justify-center shadow-xs">
                          3
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold tracking-tight font-['Outfit',sans-serif]">
                          Training & Aptitude
                        </h4>
                        <p className="text-[11px] text-orange-50 leading-tight mt-0.5">
                          STAR method & quant drills
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column of Pillars (4, 5, 6) */}
                  <div className="space-y-4">
                    {/* PILLAR 4: Orange */}
                    <div 
                      onClick={() => setActiveEcosystemPillar(3)}
                      className={`p-4 sm:p-5 bg-[#FF6A42] text-white shadow-lg cursor-pointer transition-all duration-300 hover:scale-102 flex flex-col justify-between min-h-[115px] sm:min-h-[125px] relative ${
                        activeEcosystemPillar === 3 ? 'ring-4 ring-[#082B5C]' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <Laptop className="w-5 h-5 text-orange-100" />
                        <span className="w-6 h-6 rounded-full bg-white text-[#FF6A42] font-bold text-xs flex items-center justify-center shadow-xs">
                          4
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold tracking-tight font-['Outfit',sans-serif]">
                          Live Internships
                        </h4>
                        <p className="text-[11px] text-orange-50 leading-tight mt-0.5">
                          In-plant training & PPOs
                        </p>
                      </div>
                    </div>

                    {/* PILLAR 5: Lime Green */}
                    <div 
                      onClick={() => setActiveEcosystemPillar(4)}
                      className={`p-4 sm:p-5 bg-[#8BB72A] text-white shadow-lg cursor-pointer transition-all duration-300 hover:scale-102 flex flex-col justify-between min-h-[115px] sm:min-h-[125px] relative ${
                        activeEcosystemPillar === 4 ? 'ring-4 ring-[#082B5C]' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <Building className="w-5 h-5 text-white" />
                        <span className="w-6 h-6 rounded-full bg-white text-[#8BB72A] font-bold text-xs flex items-center justify-center shadow-xs">
                          5
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold tracking-tight font-['Outfit',sans-serif]">
                          Corporate MoUs
                        </h4>
                        <p className="text-[11px] text-lime-50 leading-tight mt-0.5">
                          65+ industry partnerships
                        </p>
                      </div>
                    </div>

                    {/* PILLAR 6: Dark Forest Green */}
                    <div 
                      onClick={() => setActiveEcosystemPillar(5)}
                      className={`p-4 sm:p-5 bg-[#123E33] text-white shadow-lg cursor-pointer transition-all duration-300 hover:scale-102 flex flex-col justify-between min-h-[115px] sm:min-h-[125px] relative ${
                        activeEcosystemPillar === 5 ? 'ring-4 ring-[#082B5C]' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <Users className="w-5 h-5 text-emerald-200" />
                        <span className="w-6 h-6 rounded-full bg-white text-[#123E33] font-bold text-xs flex items-center justify-center shadow-xs">
                          6
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold tracking-tight font-['Outfit',sans-serif]">
                          1-on-1 Mentorship
                        </h4>
                        <p className="text-[11px] text-emerald-100/90 leading-tight mt-0.5">
                          Alumni & faculty guidance
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Footer Brand note */}
                <div className="mt-5 pt-3 flex items-center justify-between text-xs text-[#082B5C] font-bold">
                  <span>MSAJCE Career Framework</span>
                  <span>Click any pillar to view detailed coverage</span>
                </div>

              </div>
            </div>

            {/* RIGHT COLUMN: Paragraph & Detailed Bulletins of Selected Pillar */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-5xl font-black text-[#082B5C] tracking-tight font-['Outfit',sans-serif] leading-tight">
                  AN ECOSYSTEM BUILT AROUND READINESS
                </h2>
              </div>

              {/* Main Paragraph with generous spacing */}
              <p className="text-slate-900 text-base sm:text-lg leading-relaxed font-medium pt-2">
                Career readiness is developed through multiple experiences rather than a single recruitment programme. Students are exposed to technical and aptitude training, communication development, mock assessments, interviews and group discussions, along with internships, industrial visits, expert workshops and industry interactions. These experiences are designed to strengthen both professional capability and confidence while helping students understand the expectations of the workplace.
              </p>

              {/* Active Pillar Bulletins & Details Card */}
              {(() => {
                const current = ecosystemPillars[activeEcosystemPillar];
                return (
                  <div className="space-y-4 pt-4 p-6 bg-white shadow-xl border-2 border-[#082B5C]">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-extrabold px-2.5 py-1 bg-[#082B5C] text-white">
                        Pillar {current.num}
                      </span>
                      <h3 className="text-base font-bold text-[#082B5C] font-['Outfit',sans-serif]">
                        {current.title} — {current.subtitle}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-700 leading-relaxed">
                      {current.description}
                    </p>

                    <div className="space-y-2.5 pt-1">
                      {current.bulletins.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#123E33] shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-800 font-medium">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3 — WHERE YOUR JOURNEY CAN TAKE YOU (IMAGE ON LEFT IN ELONGATED OVAL, CONTENT ON RIGHT) */}
      {/* Borderless clean layout with Rectangular Light Blue buttons */}
      {/* ========================================================= */}
      <section className="w-full py-20 sm:py-28 bg-white" id="where-journey-takes-you-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT COLUMN: ELONGATED OVAL IMAGE FRAME */}
            <div className="lg:col-span-5 flex justify-center items-center">
              {(() => {
                const current = destinations[activeDestination];
                const DestinationIcon = current.icon;
                return (
                  <div className="relative w-full max-w-[320px] sm:max-w-[360px] h-[480px] sm:h-[560px] rounded-[180px] sm:rounded-[210px] overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-900 group">
                    <img 
                      src={current.image} 
                      alt={current.heading} 
                      className="w-full h-full object-cover brightness-95 group-hover:scale-105 transition-transform duration-700" 
                    />
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#082B5C]/95 via-[#082B5C]/25 to-transparent" />
                    
                    {/* Floating Icon at Top of Oval */}
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center">
                      <DestinationIcon className="w-6 h-6" style={{ color: current.color }} />
                    </div>

                    {/* Bottom Caption & Badge in Oval */}
                    <div className="absolute bottom-8 left-5 right-5 text-center text-white space-y-2">
                      <span 
                        className="inline-block px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white shadow-xs"
                        style={{ backgroundColor: current.color }}
                      >
                        {current.badge}
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-white/95 leading-snug px-2 font-['Outfit',sans-serif]">
                        {current.imageCaption}
                      </p>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* RIGHT COLUMN: Heading, Paragraph, Destination Selector & Bulletins */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-5xl font-black text-[#082B5C] tracking-tight font-['Outfit',sans-serif] leading-tight">
                  WHERE YOUR JOURNEY CAN TAKE YOU
                </h2>
              </div>

              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal pt-1">
                Engineering education at Mohamed Sathak A.J. College of Engineering opens multi-dimensional pathways. Whether your aspiration is immediate corporate leadership, launching a tech venture, diving into global postgraduate research, or continuous specialization.
              </p>

              {/* Destination Selector: Rectangular Buttons */}
              <div className="space-y-2 pt-1">
                <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">
                  SELECT A DESTINATION PATHWAY:
                </p>
                <div className="flex flex-wrap gap-2">
                  {destinations.map((dest, idx) => {
                    const Icon = dest.icon;
                    const isActive = activeDestination === idx;
                    return (
                      <button
                        key={dest.id}
                        onClick={() => setActiveDestination(idx)}
                        className={`px-3.5 py-2 rounded-none border text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-xs ${
                          isActive
                            ? 'bg-[#0052CC] text-white border-[#0052CC]'
                            : 'bg-white text-slate-800 border-sky-300 hover:bg-[#0052CC] hover:text-white hover:border-[#0052CC]'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{dest.heading}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Destination Details & Bulletins */}
              {(() => {
                const current = destinations[activeDestination];
                return (
                  <div className="space-y-4 pt-2">
                    <div className="space-y-1 border-l-4 pl-4" style={{ borderColor: current.color }}>
                      <h3 className="text-xl sm:text-2xl font-black text-[#082B5C] font-['Outfit',sans-serif] tracking-tight">
                        {current.heading}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {current.paragraph}
                      </p>
                    </div>

                    {/* Bulletins */}
                    <div className="space-y-2 pt-2">
                      <p className="text-xs font-extrabold text-[#111827] uppercase tracking-wider">
                        Key Highlights for {current.heading}:
                      </p>
                      {current.bulletins.map((item, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-black shrink-0" aria-hidden="true" />
                          <p className="text-sm text-slate-700 font-medium">{item}</p>
                        </div>
                      ))}
                    </div>

                    {/* Process Visual Strip (Transformation Flow) */}
                    <div className="pt-2 flex flex-wrap items-center gap-2 font-['Outfit',sans-serif] text-xs font-black">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-1">
                        FLOW:
                      </span>
                      {current.steps.map((step, sIdx) => (
                        <React.Fragment key={sIdx}>
                          <span className="px-2.5 py-1 bg-[#F5FAFF] border border-slate-200 text-[#082B5C] shadow-xs">
                            {step}
                          </span>
                          {sIdx < current.steps.length - 1 && (
                            <span className="text-[#0D9488] font-bold">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {/* Rectangular Light-Blue Button (Blue on Hover) */}
              <div className="pt-2">
                <button
                  onClick={() => onNavigate(destinations[activeDestination].navTarget)}
                  className="px-6 py-3.5 rounded-none border border-sky-300 bg-white hover:bg-[#0052CC] text-[#082B5C] hover:text-white text-xs font-extrabold tracking-wider uppercase transition-all duration-200 shadow-xs cursor-pointer inline-flex items-center gap-2"
                >
                  <span>{destinations[activeDestination].btnLabel}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4 — THE JOURNEY DOESN'T END AT PLACEMENT */}
      {/* MATTE RED BACKGROUND + WHITE TEXT + LARGE PROMINENT CIRCULAR COLLEGE CAMPUS IMAGE FRAME */}
      {/* Rectangular Light-Blue Buttons that turn Blue on hover */}
      {/* ========================================================= */}
      <section className="w-full py-20 sm:py-28 bg-[#A63333] relative overflow-hidden" id="journey-continues-section">
        
        {/* Subtle Ambient Background Texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
        

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT COLUMN: LARGE PROMINENT Circular Halftone Dot Photo Frame with College Campus Building */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center">
              <div className="relative w-80 h-80 sm:w-[440px] sm:h-[440px] lg:w-[500px] lg:h-[500px] flex items-center justify-center">
                
                {/* Concentric Halftone Dot Ring Pattern */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-60">
                  <svg className="w-full h-full" viewBox="0 0 500 500" fill="none">
                    <defs>
                      <pattern id="halftone-section-4-pattern" x="0" y="0" width="22" height="22" patternUnits="userSpaceOnUse">
                        <circle cx="11" cy="11" r="3.6" fill="#0052CC" />
                      </pattern>
                    </defs>
                    <circle cx="250" cy="250" r="235" fill="url(#halftone-section-4-pattern)" />
                  </svg>
                </div>

                {/* Circular College Campus Image - SIGNIFICANTLY BIGGER & HIGH IMPACT */}
                <div className="relative z-10 w-72 h-72 sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] rounded-full overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1562774053-701939374585?w=1200&auto=format&fit=crop&q=90" 
                    alt="Mohamed Sathak A.J. College of Engineering Campus Building" 
                    className="w-full h-full object-cover object-center grayscale contrast-125 hover:grayscale-0 transition-all duration-700 scale-105"
                  />
                  {/* Subtle Inner Glow */}
                  <div className="absolute inset-0 rounded-full shadow-inner pointer-events-none" />
                </div>

                {/* Floating Badge */}
                <div className="absolute bottom-4 right-6 z-20 bg-white text-[#A63333] px-4 py-2 shadow-2xl border-2 border-white text-center">
                  <p className="text-xs font-black uppercase tracking-wider">
                    MSAJCE MAIN CAMPUS
                  </p>
                </div>

              </div>
            </div>

            {/* RIGHT COLUMN: Paragraph, Bulletins & Rectangular Buttons */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Outfit',sans-serif] leading-tight">
                  THE JOURNEY DOESN'T END AT PLACEMENT
                </h2>
              </div>

              {/* Main Paragraph as requested */}
              <p className="text-white/90 text-base sm:text-lg leading-relaxed font-normal pt-2">
                Placement is only the first step in a lifelong professional journey. The skills, habits and curiosity developed at Mohamed Sathak A.J. College of Engineering continue to guide graduates as they take on new challenges, adapt to changing industries and create meaningful impact in their careers.
              </p>

              {/* Bulletins with generous spacing */}
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3.5">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white shrink-0" aria-hidden="true" />
                  <p className="text-sm sm:text-base text-white/95 leading-normal">
                    <strong className="text-white font-bold">Lifelong Alumni Network:</strong> Strong alumni chapters spanning India, Singapore, Middle East, and USA.
                  </p>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white shrink-0" aria-hidden="true" />
                  <p className="text-sm sm:text-base text-white/95 leading-normal">
                    <strong className="text-white font-bold">Continuous Upskilling:</strong> Lifetime access to webinars, research publications, and career counseling.
                  </p>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white shrink-0" aria-hidden="true" />
                  <p className="text-sm sm:text-base text-white/95 leading-normal">
                    <strong className="text-white font-bold">Corporate Mentorship:</strong> Returning as recruiters and mentors to guide junior engineering cohorts.
                  </p>
                </div>
              </div>

              {/* Rectangular Action Buttons with White Borders (Turn Red on Hover) */}
              <div className="pt-6 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 rounded-none border border-white bg-transparent hover:bg-white text-white hover:text-[#A63333] text-xs font-extrabold tracking-wider uppercase transition-all duration-200 shadow-xs cursor-pointer inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Connect with Placement Cell</span>
                </button>
                <button
                  onClick={() => onNavigate('journey')}
                  className="px-6 py-3.5 rounded-none border border-white bg-transparent hover:bg-white text-white hover:text-[#A63333] text-xs font-extrabold tracking-wider uppercase transition-all duration-200 shadow-xs cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Student Career Pathways</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* QUICK FOOTER CTA BAR */}
      {/* ========================================================= */}
      <section className="w-full py-12 bg-[#082B5C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-['Outfit',sans-serif]">
              Ready to Hire Top Engineering Talent?
            </h3>
            <p className="text-xs sm:text-sm text-blue-200 mt-1">
              Invite Mohamed Sathak A J College of Engineering for on-campus & virtual recruitment drives.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('recruiters')}
              className="px-6 py-3 rounded-none border border-sky-300 bg-white hover:bg-[#0052CC] text-[#082B5C] hover:text-white text-xs font-extrabold tracking-wider uppercase transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
            >
              <Building2 className="w-4 h-4" />
              <span>For Recruiters</span>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-none border border-sky-300 bg-white hover:bg-[#0052CC] text-[#082B5C] hover:text-white text-xs font-extrabold tracking-wider uppercase transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Cell</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
