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
  onNavigate
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
        if (entries[0]?.isIntersecting && !hasCounted) {
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
    }
  ];

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
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&auto=format&fit=crop&q=85',
      imageCaption: 'Continuous professional learning and industry certifications',
      navTarget: 'training',
      btnLabel: 'View Skill Training Hub'
    }
  ];

  return (
    <div className="w-full bg-page-bg text-foreground overflow-hidden font-sans">

      {/* SECTION 1 — FROM CAMPUS TO CAREER */}
      <section className="w-full py-20 sm:py-28 bg-page-bg border-b border-border" id="campus-to-career-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-5xl font-black text-primary tracking-tight leading-tight">
                  FROM CAMPUS TO CAREER
                </h2>
              </div>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-normal pt-2">
                At Mohamed Sathak A.J. College of Engineering, the journey towards professional success begins long before recruitment. The Placement Cell works towards developing students' employability through skill development, career guidance, industry interaction, internships and structured recruitment preparation. By connecting academic learning with professional expectations, students are encouraged to approach their future with knowledge, confidence and a clear sense of direction.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3.5">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" aria-hidden="true" />
                  <p className="text-sm sm:text-base text-foreground leading-relaxed">
                    <strong className="text-primary font-bold">Continuous Guidance:</strong> Mentoring from Day 1 to align student aptitude with corporate roles.
                  </p>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" aria-hidden="true" />
                  <p className="text-sm sm:text-base text-foreground leading-relaxed">
                    <strong className="text-primary font-bold">Industry Synergies:</strong> 65+ MoUs ensuring live project exposure and pre-placement offers.
                  </p>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" aria-hidden="true" />
                  <p className="text-sm sm:text-base text-foreground leading-relaxed">
                    <strong className="text-primary font-bold">Holistic Readiness:</strong> Balanced technical mastery, verbal articulation, and psychometric conditioning.
                  </p>
                </div>
              </div>

              <div className="pt-6 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('journey')}
                  className="px-6 py-3.5 rounded-md border border-border bg-card hover:bg-primary hover:text-primary-foreground text-foreground text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-xs cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Explore Career Journey</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('training')}
                  className="px-6 py-3.5 rounded-md border border-border bg-card hover:bg-primary hover:text-primary-foreground text-foreground text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-xs cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Skill Training Modules</span>
                </button>
              </div>

            </div>

            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="w-full max-w-[560px] grid grid-cols-3 gap-3 sm:gap-4 items-center">
                
                <div className="relative h-[280px] sm:h-[340px] rounded-md overflow-hidden shadow-md border border-border group">
                  <img 
                    src={archedTrioImages[0].url} 
                    alt={archedTrioImages[0].title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-2 right-2 text-center text-white">
                    <p className="text-[11px] font-bold leading-tight font-oswald">
                      {archedTrioImages[0].title}
                    </p>
                  </div>
                </div>

                <div className="relative h-[320px] sm:h-[380px] rounded-md overflow-hidden shadow-lg border border-primary/40 group">
                  <img 
                    src={archedTrioImages[1].url} 
                    alt={archedTrioImages[1].title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-2 right-2 text-center text-white">
                    <p className="text-xs font-black leading-tight font-oswald">
                      {archedTrioImages[1].title}
                    </p>
                    <p className="text-[10px] text-white/80 font-medium mt-0.5 font-sans">
                      MSAJCE Excellence
                    </p>
                  </div>
                </div>

                <div className="relative h-[280px] sm:h-[340px] rounded-md overflow-hidden shadow-md border border-border group">
                  <img 
                    src={archedTrioImages[2].url} 
                    alt={archedTrioImages[2].title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-2 right-2 text-center text-white">
                    <p className="text-[11px] font-bold leading-tight font-oswald">
                      {archedTrioImages[2].title}
                    </p>
                  </div>
                </div>

              </div>
              
              <p className="text-center text-xs text-muted-foreground font-medium mt-4 tracking-wide font-sans">
                Empowering engineering students for prestigious national and multinational career destinations.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* PROVEN TRACK RECORD */}
      <section 
        id="impact-statistics" 
        ref={statsRef}
        className="w-full bg-background py-12 sm:py-16 border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold tracking-widest text-foreground uppercase font-oswald">
              <TrendingUp className="w-4 h-4 text-foreground" />
              INSTITUTIONAL METRICS
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-primary tracking-tight font-oswald uppercase">
              Proven Track Record of Career Excellence
            </h2>
            <p className="text-base text-muted-foreground font-sans">
              Consistently high placement rates backed by industry-aligned engineering education.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 bg-card p-8 rounded-md border border-border shadow-xs">
            <div className="text-center space-y-1.5">
              <p className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight font-oswald">
                {counts.rate}%
              </p>
              <p className="text-xs font-extrabold text-primary uppercase tracking-wider font-oswald">Placement Rate</p>
              <p className="text-xs text-muted-foreground font-sans">Across eligible cohorts</p>
            </div>

            <div className="text-center space-y-1.5">
              <p className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight font-oswald">
                {counts.offers}+
              </p>
              <p className="text-xs font-extrabold text-primary uppercase tracking-wider font-oswald">Offers Made</p>
              <p className="text-xs text-muted-foreground font-sans">Full-time & PPO roles</p>
            </div>

            <div className="text-center space-y-1.5">
              <p className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight font-oswald">
                {counts.companies}+
              </p>
              <p className="text-xs font-extrabold text-primary uppercase tracking-wider font-oswald">Recruiting Companies</p>
              <p className="text-xs text-muted-foreground font-sans">Tier-1 & Global MNCs</p>
            </div>

            <div className="text-center space-y-1.5">
              <p className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight font-oswald">
                ₹{counts.highest} <span className="text-lg font-bold text-muted-foreground font-sans">LPA</span>
              </p>
              <p className="text-xs font-extrabold text-primary uppercase tracking-wider font-oswald">Highest Package</p>
              <p className="text-xs text-muted-foreground font-sans">Peak compensation</p>
            </div>

            <div className="text-center space-y-1.5 col-span-2 md:col-span-1">
              <p className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight font-oswald">
                ₹{counts.average} <span className="text-lg font-bold text-muted-foreground font-sans">LPA</span>
              </p>
              <p className="text-xs font-extrabold text-primary uppercase tracking-wider font-oswald">Average Package</p>
              <p className="text-xs text-muted-foreground font-sans">Consolidated average</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — AN ECOSYSTEM BUILT AROUND READINESS */}
      <section className="w-full py-20 sm:py-28 bg-page-bg text-foreground border-b border-border" id="ecosystem-readiness-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 flex flex-col items-center">
              <div className="relative w-full max-w-[620px] bg-transparent p-2 sm:p-4">
                
                <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-4 relative">
                  
                  {ecosystemPillars.map((pillar, pIdx) => {
                    const PillarIcon = pillar.icon;
                    const isSelected = activeEcosystemPillar === pIdx;
                    return (
                      <div 
                        key={pillar.id}
                        onClick={() => setActiveEcosystemPillar(pIdx)}
                        className={`p-4 sm:p-5 rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs cursor-pointer transition-all duration-200 flex flex-col justify-between min-h-[115px] sm:min-h-[125px] border ${
                          isSelected 
                            ? 'bg-primary text-white border-primary shadow-md' 
                            : 'bg-page-bg text-foreground border-border hover:border-primary/40'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <PillarIcon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-primary'}`} />
                          <span className={`w-6 h-6 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs font-bold text-xs flex items-center justify-center font-oswald ${
                            isSelected ? 'bg-white text-primary' : 'bg-primary text-white'
                          }`}>
                            {pillar.num}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold tracking-tight font-oswald">
                            {pillar.title}
                          </h4>
                          <p className={`text-[11px] leading-tight mt-0.5 font-sans ${
                            isSelected ? 'text-white/90' : 'text-muted-foreground'
                          }`}>
                            {pillar.subtitle}
                          </p>
                        </div>
                      </div>
                    );
                  })}

                </div>

                <div className="mt-5 pt-3 flex items-center justify-between text-xs text-primary font-bold font-oswald uppercase">
                  <span>MSAJCE Career Framework</span>
                  <span>Select any pillar to view coverage</span>
                </div>

              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-5xl font-black text-primary tracking-tight font-oswald leading-tight">
                  AN ECOSYSTEM BUILT AROUND READINESS
                </h2>
              </div>

              <p className="text-foreground text-base sm:text-lg leading-relaxed font-normal pt-2 font-sans">
                Career readiness is developed through multiple experiences rather than a single recruitment programme. Students are exposed to technical and aptitude training, communication development, mock assessments, interviews and group discussions, along with internships, industrial visits, expert workshops and industry interactions.
              </p>

              {(() => {
                const current = ecosystemPillars[activeEcosystemPillar] || ecosystemPillars[0];
                return (
                  <div className="space-y-4 pt-4 p-6 bg-page-bg shadow-sm border border-primary/30 rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-extrabold px-2.5 py-1 bg-primary text-white rounded-tl-lg rounded-br-lg rounded-tr-xs rounded-bl-xs font-oswald uppercase">
                        Pillar {current.num}
                      </span>
                      <h3 className="text-base font-bold text-primary font-oswald">
                        {current.title} — {current.subtitle}
                      </h3>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                      {current.description}
                    </p>

                    <div className="space-y-2.5 pt-1">
                      {current.bulletins.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground font-medium font-sans">{b}</span>
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

      {/* SECTION 3 — WHERE YOUR JOURNEY CAN TAKE YOU */}
      <section className="w-full py-20 sm:py-28 bg-page-bg border-b border-border" id="where-journey-takes-you-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 flex justify-center items-center">
              {(() => {
                const current = destinations[activeDestination] || destinations[0];
                const DestinationIcon = current.icon;
                return (
                  <div className="relative w-full max-w-[340px] sm:max-w-[380px] h-[440px] sm:h-[500px] rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs overflow-hidden shadow-xl border border-border bg-card group">
                    <img 
                      src={current.image} 
                      alt={current.heading} 
                      className="w-full h-full object-cover brightness-90" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    
                    <div className="absolute top-6 left-6 w-12 h-12 rounded-md bg-primary text-white shadow-lg flex items-center justify-center border border-white/20">
                      <DestinationIcon className="w-6 h-6 text-white" />
                    </div>

                    <div className="absolute bottom-6 left-5 right-5 text-center text-white space-y-2">
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary inline-block font-oswald mb-1">
                        {current.badge}
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-white/95 leading-snug px-2 font-oswald">
                        {current.imageCaption}
                      </p>
                    </div>
                  </div>
                );
              })()}
            </div>

            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-5xl font-black text-primary tracking-tight font-oswald leading-tight">
                  WHERE YOUR JOURNEY CAN TAKE YOU
                </h2>
              </div>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-normal pt-1 font-sans">
                Engineering education at Mohamed Sathak A.J. College of Engineering opens multi-dimensional pathways. Whether your aspiration is immediate corporate leadership, launching a tech venture, diving into global postgraduate research, or continuous specialization.
              </p>

              <div className="space-y-2 pt-1">
                <p className="text-[11px] font-extrabold text-muted-foreground uppercase tracking-wider font-oswald">
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
                        className={`px-3.5 py-2 rounded-sm border text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-xs font-oswald ${
                          isActive
                            ? 'bg-primary text-white border-primary'
                            : 'bg-card text-foreground border-border hover:bg-primary hover:text-white'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{dest.heading}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {(() => {
                const current = destinations[activeDestination] || destinations[0];
                return (
                  <div className="space-y-4 pt-2">
                    <div className="space-y-1 border-l-4 border-primary pl-4">
                      <h3 className="text-xl sm:text-2xl font-black text-foreground font-oswald tracking-tight">
                        {current.heading}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                        {current.paragraph}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2">
                      <p className="text-xs font-extrabold text-foreground uppercase tracking-wider font-oswald">
                        Key Highlights for {current.heading}:
                      </p>
                      {current.bulletins.map((item, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-3">
                          <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" aria-hidden="true" />
                          <p className="text-sm text-foreground/80 font-medium font-sans">{item}</p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-2 font-oswald text-xs font-black">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mr-1">
                        FLOW:
                      </span>
                      {current.steps.map((step, sIdx) => (
                        <React.Fragment key={sIdx}>
                          <span className="px-2.5 py-1 bg-muted border border-border text-foreground shadow-xs rounded-sm">
                            {step}
                          </span>
                          {sIdx < current.steps.length - 1 && (
                            <span className="text-primary font-bold">→</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                );
              })()}

              <div className="pt-2">
                <button
                  onClick={() => onNavigate((destinations[activeDestination] || destinations[0]).navTarget)}
                  className="px-6 py-3.5 rounded-sm border border-border bg-card hover:bg-primary hover:text-white text-foreground text-xs font-extrabold tracking-wider uppercase transition-all duration-200 shadow-xs cursor-pointer inline-flex items-center gap-2 font-oswald"
                >
                  <span>{(destinations[activeDestination] || destinations[0]).btnLabel}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4 — THE JOURNEY DOESN'T END AT PLACEMENT */}
      <section className="w-full py-20 sm:py-28 bg-primary text-white relative overflow-hidden" id="journey-continues-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[480px] h-[340px] sm:h-[400px] rounded-md overflow-hidden shadow-2xl border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1562774053-701939374585?w=1200&auto=format&fit=crop&q=90" 
                  alt="Mohamed Sathak A.J. College of Engineering Campus Building" 
                  className="w-full h-full object-cover object-center"
                />
                
                <div className="absolute bottom-4 right-6 z-20 bg-background text-foreground px-4 py-2 shadow-2xl border border-border text-center rounded-sm">
                  <p className="text-xs font-black uppercase tracking-wider font-oswald">
                    MSAJCE MAIN CAMPUS
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-oswald leading-tight">
                  THE JOURNEY DOESN'T END AT PLACEMENT
                </h2>
              </div>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed font-normal pt-2 font-sans">
                Placement is only the first step in a lifelong professional journey. The skills, habits and curiosity developed at Mohamed Sathak A.J. College of Engineering continue to guide graduates as they take on new challenges, adapt to changing industries and create meaningful impact in their careers.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3.5">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white shrink-0" aria-hidden="true" />
                  <p className="text-sm sm:text-base text-white/95 leading-normal font-sans">
                    <strong className="text-white font-bold">Lifelong Alumni Network:</strong> Strong alumni chapters spanning India, Singapore, Middle East, and USA.
                  </p>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white shrink-0" aria-hidden="true" />
                  <p className="text-sm sm:text-base text-white/95 leading-normal font-sans">
                    <strong className="text-white font-bold">Continuous Upskilling:</strong> Lifetime access to webinars, research publications, and career counseling.
                  </p>
                </div>

                <div className="flex items-start gap-3.5">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white shrink-0" aria-hidden="true" />
                  <p className="text-sm sm:text-base text-white/95 leading-normal font-sans">
                    <strong className="text-white font-bold">Corporate Mentorship:</strong> Returning as recruiters and mentors to guide junior engineering cohorts.
                  </p>
                </div>
              </div>

              <div className="pt-6 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 rounded-sm border border-white bg-transparent hover:bg-white text-white hover:text-primary text-xs font-extrabold tracking-wider uppercase transition-all duration-200 shadow-xs cursor-pointer inline-flex items-center gap-2 font-oswald"
                >
                  <Mail className="w-4 h-4" />
                  <span>Connect with Placement Cell</span>
                </button>
                <button
                  onClick={() => onNavigate('journey')}
                  className="px-6 py-3.5 rounded-sm border border-white bg-transparent hover:bg-white text-white hover:text-primary text-xs font-extrabold tracking-wider uppercase transition-all duration-200 shadow-xs cursor-pointer inline-flex items-center gap-2 font-oswald"
                >
                  <span>Student Career Pathways</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* QUICK FOOTER CTA BAR */}
      <section className="w-full py-12 bg-card border-t border-border text-card-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-oswald uppercase text-foreground">
              Ready to Hire Top Engineering Talent?
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 font-sans">
              Invite Mohamed Sathak A J College of Engineering for on-campus & virtual recruitment drives.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('recruiters')}
              className="px-6 py-3 rounded-sm border border-border bg-primary text-white hover:bg-primary/90 text-xs font-extrabold tracking-wider uppercase transition-all duration-200 cursor-pointer inline-flex items-center gap-2 font-oswald"
            >
              <Building2 className="w-4 h-4" />
              <span>For Recruiters</span>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-sm border border-border bg-background text-foreground hover:bg-muted text-xs font-extrabold tracking-wider uppercase transition-all duration-200 cursor-pointer inline-flex items-center gap-2 font-oswald"
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
