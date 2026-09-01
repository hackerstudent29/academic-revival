import React, { useState, useEffect } from 'react';
import { 
  Briefcase, 
  BookOpen, 
  GraduationCap, 
  Send, 
  CheckCircle, 
  Users, 
  Building2, 
  Microscope, 
  Laptop, 
  ChevronRight, 
  ArrowRight,
  Handshake, 
  Target,
  Check,
  Building
} from 'lucide-react';

interface RecruitersSectionProps {
  onNavigate?: (sectionId: string) => void;
}

export const RecruitersSection: React.FC<RecruitersSectionProps> = ({ onNavigate }) => {
  const [activeEcosystemId, setActiveEcosystemId] = useState<string>('talent');
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStageIdx((prev) => (prev + 1) % 7);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const ecosystemItems = [
    {
      id: 'talent',
      label: 'MSAJCE TALENT',
      sub: 'Engineering Core & Competence',
      icon: GraduationCap,
      color: '#0052CC',
      heading: 'MSAJCE Engineering Talent Core',
      desc: 'The central core of MSAJCE: aspiring engineers grounded in rigorous Anna University curricula, outcome-based laboratory training, and ethical professional readiness.',
      points: [
        'Anna University accredited engineering curriculum with continuous evaluation',
        'Strong fundamentals in analytical math, engineering design, and modern computing',
        'Student-led technical clubs, hackathons, and national symposiums'
      ]
    },
    {
      id: 'expert-interactions',
      label: 'EXPERT INTERACTIONS',
      sub: 'Guest Lectures & Seminars',
      icon: Users,
      color: '#082B5C',
      heading: 'Executive & Expert Interactions',
      desc: 'Direct interaction with visiting industry leaders, corporate technologists, and subject matter experts providing perspectives on emerging domains.',
      points: [
        'Regular guest lectures by senior technical leaders & domain specialists',
        'Interactive tech seminars on AI, Cloud, IoT, and Cyber Systems',
        'Guidance on shifting workforce trends and corporate role expectations'
      ]
    },
    {
      id: 'recruitment',
      label: 'RECRUITMENT DRIVES',
      sub: 'On & Off-Campus Hiring',
      icon: Briefcase,
      color: '#0052CC',
      heading: 'On & Off-Campus Recruitment',
      desc: 'Structured placement drives hosting visiting organisations for on-campus assessments, technical evaluations, and HR hiring rounds.',
      points: [
        'Dedicated placement infrastructure with computer-based test labs & interview halls',
        'Coordinated campus drives for Tier-1 IT, Product, and Core engineering companies',
        'Pre-placement talks and transparent selection lifecycle support'
      ]
    },
    {
      id: 'internships',
      label: 'INTERNSHIPS & IN-PLANT',
      sub: 'Practical Industry Exposure',
      icon: Laptop,
      color: '#0D9488',
      heading: 'In-Plant Training & Internships',
      desc: 'Mandatory summer and winter semester internships offering real-world capstone projects and pre-placement offer (PPO) opportunities.',
      points: [
        'Credit-bearing industrial internships during semester breaks',
        'Live problem-solving exposure in manufacturing, automotive, and IT environments',
        'High conversion rates to full-time Pre-Placement Offers (PPOs)'
      ]
    },
    {
      id: 'industrial-visits',
      label: 'INDUSTRIAL VISITS',
      sub: 'Manufacturing & Tech Plants',
      icon: Building2,
      color: '#0D9488',
      heading: 'On-Site Industrial Visits',
      desc: 'Curated on-site plant and data center visits allowing students to observe live production pipelines, automation systems, and enterprise operations.',
      points: [
        'Hands-on observation of automated assembly lines, power grids, and enterprise servers',
        'Bridging textbook theoretical concepts with industrial scale machinery',
        'Direct Q&A with on-ground plant managers and operational engineers'
      ]
    },
    {
      id: 'training-certifications',
      label: 'TRAINING & CERTIFICATIONS',
      sub: 'Aptitude & Technical Value-Add',
      icon: Target,
      color: '#082B5C',
      heading: 'Aptitude, Verbal & Technical Certifications',
      desc: 'Comprehensive training in quantitative aptitude, communication, STAR behavioral interviewing, and industry-certified technical courses.',
      points: [
        'Structured quantitative aptitude, logical reasoning, and coding bootcamps',
        'STAR method behavioral interview training and mock group discussions',
        'Industry certifications from AWS, Oracle, Cisco, RedHat, and NPTEL'
      ]
    },
    {
      id: 'industry-interaction',
      label: 'INDUSTRY INTERACTION',
      sub: 'Collaborative Exchange',
      icon: Handshake,
      color: '#0052CC',
      heading: 'Industry–Institute Interaction Cell',
      desc: 'Continuous dialogue between academic departments and corporate organizations to align coursework with shifting technological demands.',
      points: [
        'Curriculum enhancement inputs from corporate advisory boards',
        'Joint faculty-industry research and technology transfer initiatives',
        'Conclaves and symposiums fostering active employer-student rapport'
      ]
    },
    {
      id: 'workshops-coes',
      label: 'WORKSHOPS & CoEs',
      sub: 'Centres of Excellence',
      icon: Microscope,
      color: '#0D9488',
      heading: 'Centres of Excellence & Applied Labs',
      desc: 'Advanced industry-oriented laboratories and Centres of Excellence focusing on AI, Cloud, Robotics, and Renewable Energy systems.',
      points: [
        'Dedicated CoEs equipped with modern hardware, GPUs, and development kits',
        'Hands-on technical workshops led by certified corporate practitioners',
        'Incubation space for prototyping student innovations and patent filings'
      ]
    },
    {
      id: 'mous-partnerships',
      label: 'MoUs & PARTNERSHIPS',
      sub: 'Institutional Alliances',
      icon: Building,
      color: '#082B5C',
      heading: 'Corporate Memorandums of Understanding (MoUs)',
      desc: 'Formal Memorandums of Understanding with corporate leaders facilitating student internships, joint research, and prioritized recruitment.',
      points: [
        '65+ active corporate MoUs across core, automotive, software, and electronics sectors',
        'Prioritized talent acquisition and annual campus engagement pledges',
        'Sponsorship of student hackathons, awards, and technical competitions'
      ]
    }
  ];

  const activeEcosystem = ecosystemItems.find(item => item.id === activeEcosystemId) || ecosystemItems[0];

  const pathwayStages = [
    {
      num: '01',
      word: 'STUDENT',
      title: 'Academic Foundation',
      text: 'Starting with academic knowledge and personal aspirations.',
      icon: GraduationCap
    },
    {
      num: '02',
      word: 'PREPARE',
      title: 'Skill Development',
      text: 'Building aptitude, communication and technical skills.',
      icon: BookOpen
    },
    {
      num: '03',
      word: 'APPLY',
      title: 'Opportunity Participation',
      text: 'Exploring and participating in relevant recruitment opportunities.',
      icon: Send
    },
    {
      num: '04',
      word: 'ASSESS',
      title: 'Capabilities Evaluation',
      text: 'Demonstrating capabilities through recruitment assessments and selection processes.',
      icon: Laptop
    },
    {
      num: '05',
      word: 'INTERACT',
      title: 'Professional Dialogue',
      text: 'Participating in interviews, group discussions and professional interactions.',
      icon: Users
    },
    {
      num: '06',
      word: 'SELECT',
      title: 'Recruitment Progression',
      text: "Progressing through the organisation's recruitment process.",
      icon: CheckCircle
    },
    {
      num: '07',
      word: 'CAREER',
      title: 'Professional Growth',
      text: 'Beginning the next stage of professional growth.',
      icon: Briefcase
    }
  ];

  const majorRecruiters = [
    { name: 'Tata Consultancy Services', category: 'IT & Consulting' },
    { name: 'Infosys', category: 'Enterprise Tech' },
    { name: 'Cognizant', category: 'Digital Solutions' },
    { name: 'Wipro', category: 'Cloud & Services' },
    { name: 'Zoho Corporation', category: 'Product SaaS' },
    { name: 'Capgemini', category: 'Global Consulting' },
    { name: 'HCL Technologies', category: 'Engineering R&D' },
    { name: 'Tech Mahindra', category: 'Telecom & IT' },
    { name: 'Virtusa', category: 'Digital Engineering' },
    { name: 'Hexaware', category: 'Automation & AI' },
    { name: 'Mindtree / LTIMindtree', category: 'Technology' },
    { name: 'Sutherland Global', category: 'Enterprise Services' },
    { name: 'TVS Group', category: 'Automotive & Core' },
    { name: 'Ashok Leyland', category: 'Commercial Vehicles' },
    { name: 'Saint-Gobain', category: 'Materials Engineering' },
    { name: 'Bosch', category: 'Automotive & Mobility' },
    { name: 'Hyundai Mobis', category: 'Automotive Tech' },
    { name: 'L&T Infotech', category: 'Infrastructure Tech' }
  ];

  const matrixDimensions = [
    {
      dimension: 'Industry',
      represents: 'The domain in which an organisation operates',
      perspective: 'Understand where the role fits'
    },
    {
      dimension: 'Role',
      represents: 'The professional function being recruited for',
      perspective: 'Match opportunity with skills'
    },
    {
      dimension: 'Skill Requirement',
      represents: 'Technical and professional capabilities expected',
      perspective: 'Identify areas for preparation'
    },
    {
      dimension: 'Selection Process',
      represents: 'Assessments, interviews and interaction stages',
      perspective: 'Prepare for recruitment'
    },
    {
      dimension: 'Industry Exposure',
      represents: 'Interaction, internship or professional experience',
      perspective: 'Understand workplace expectations'
    }
  ];

  const visualStoryImages = [
    {
      step: '01',
      title: 'CAMPUS',
      quote: 'Every professional journey begins with an academic foundation.',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1000&auto=format&fit=crop&q=85',
      alt: 'Indian engineering college campus with students walking between academic buildings'
    },
    {
      step: '02',
      title: 'PREPARATION',
      quote: 'Skills, practice and guidance help students approach professional opportunities with confidence.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&auto=format&fit=crop&q=85',
      alt: 'Indian engineering students preparing for assessments in computer laboratory'
    },
    {
      step: '03',
      title: 'INDUSTRY',
      quote: 'Industry interaction brings professional expectations, experience and current practices closer to students.',
      image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1000&auto=format&fit=crop&q=85',
      alt: 'Industry professionals interacting with engineering students in expert seminar'
    },
    {
      step: '04',
      title: 'OPPORTUNITY',
      quote: "Every recruitment interaction can become a step towards the student's next professional chapter.",
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=85',
      alt: 'Indian engineering student standing in professional attire after campus recruitment'
    }
  ];

  return (
    <div className="w-full bg-page-bg text-foreground overflow-hidden font-sans">

      {/* 1. WHERE INDUSTRY MEETS TALENT */}
      <section className="w-full py-12 sm:py-16 bg-page-bg border-b border-border" id="where-industry-meets-talent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[480px] h-[440px] sm:h-[480px]">
                
                <div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-48 sm:w-56 h-52 sm:h-60 overflow-hidden shadow-lg"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=85" 
                    alt="Professional discussion and tech interaction"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div 
                  className="absolute bottom-4 left-0 sm:left-2 w-44 sm:w-52 h-48 sm:h-56 overflow-hidden shadow-lg"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=85" 
                    alt="Engineering team collaboration and laptops"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div 
                  className="absolute bottom-4 right-0 sm:right-2 w-44 sm:w-52 h-48 sm:h-56 overflow-hidden shadow-lg"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=85" 
                    alt="Campus recruiter interview session"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div 
                  className="absolute top-12 right-2 sm:right-6 w-16 sm:w-20 h-18 sm:h-22 bg-primary opacity-90 shadow-md pointer-events-none"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                />

                <div 
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-14 sm:w-16 h-16 sm:h-18 bg-sky-200 opacity-95 shadow-xs pointer-events-none"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                />

              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight font-['Outfit',sans-serif] leading-tight">
                  WHERE INDUSTRY MEETS TALENT
                </h2>
              </div>

              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-normal pt-2">
                MSAJCE creates opportunities for students to connect with organisations through campus recruitment, industry interaction and professional exposure. The Placement Cell works towards providing employment opportunities through on-campus and off-campus recruitment drives while helping students develop the skills and confidence required to approach professional opportunities.
              </p>

              <div className="pt-4 pb-2">
                <div className="p-4 sm:p-5 bg-muted/40 border border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                  
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs sm:text-sm font-black tracking-wider text-foreground font-['Outfit',sans-serif]">
                      TALENT
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[#059669]">
                    <span className="h-0.5 w-6 sm:w-10 bg-[#059669]/50" />
                    <span className="text-xs font-bold animate-pulse">↔</span>
                    <span className="h-0.5 w-6 sm:w-10 bg-[#059669]/50" />
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#059669] animate-pulse" />
                    <span className="text-xs sm:text-sm font-black tracking-wider text-foreground font-['Outfit',sans-serif]">
                      INDUSTRY
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[#059669]">
                    <span className="h-0.5 w-6 sm:w-10 bg-[#059669]/50" />
                    <span className="text-xs font-bold animate-pulse">↔</span>
                    <span className="h-0.5 w-6 sm:w-10 bg-[#059669]/50" />
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs sm:text-sm font-black tracking-wider text-foreground font-['Outfit',sans-serif]">
                      OPPORTUNITY
                    </span>
                  </div>

                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#the-recruiter-ecosystem"
                  className="px-6 py-3.5 rounded-none border border-border bg-card hover:bg-primary hover:text-primary-foreground text-foreground text-xs font-extrabold tracking-wider uppercase transition-all duration-200 shadow-xs cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Explore Recruiter Ecosystem</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#from-campus-to-company"
                  className="px-6 py-3.5 rounded-none border border-border bg-card hover:bg-primary hover:text-primary-foreground text-foreground text-xs font-extrabold tracking-wider uppercase transition-all duration-200 shadow-xs cursor-pointer inline-flex items-center gap-2"
                >
                  <span>View Recruitment Pathway</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 2. THE RECRUITER ECOSYSTEM */}
      <section className="w-full py-20 sm:py-28 bg-muted/30 border-b border-border" id="the-recruiter-ecosystem">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-card border border-border p-6 sm:p-10 shadow-xs">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-muted text-foreground text-xs font-extrabold tracking-widest uppercase">
                <span>INDUSTRY PARTNERSHIPS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight font-['Outfit',sans-serif] leading-tight">
                THE RECRUITER ECOSYSTEM
              </h2>
              <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-primary uppercase pt-1">
                <Building2 className="w-4 h-4 text-[#059669]" />
                CAMPUS TO CAREER OPPORTUNITIES
              </div>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-normal pt-1">
                MSAJCE's Industry–Institute Interaction Cell strengthens collaboration between academia and industry through internships, industrial visits, expert interactions, industry-oriented training and placement activities.
              </p>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] h-[360px] sm:h-[400px] bg-muted p-2 overflow-hidden shadow-md">
                <div 
                  className="absolute top-2 left-2 w-[46%] h-[46%] overflow-hidden rounded-tl-2xl group"
                  style={{ clipPath: 'polygon(0% 0%, 100% 0%, 82% 100%, 0% 88%)' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80" 
                    alt="Corporate recruiter mentorship"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div 
                  className="absolute top-2 right-2 w-[50%] h-[48%] overflow-hidden rounded-tr-2xl group"
                  style={{ clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 92%)' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=80" 
                    alt="Engineering team collaboration"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div 
                  className="absolute top-[40%] left-[22%] w-[56%] h-[35%] overflow-hidden group z-10"
                  style={{ clipPath: 'polygon(15% 0%, 100% 8%, 85% 100%, 0% 92%)' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1577495508048-b635879837f1?w=600&auto=format&fit=crop&q=80" 
                    alt="Industry seminar and expert address"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div 
                  className="absolute bottom-2 left-2 w-[48%] h-[46%] overflow-hidden rounded-bl-2xl group"
                  style={{ clipPath: 'polygon(0% 12%, 88% 0%, 100% 100%, 0% 100%)' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80" 
                    alt="Student placement presentation"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div 
                  className="absolute bottom-2 right-2 w-[48%] h-[44%] overflow-hidden rounded-br-2xl group"
                  style={{ clipPath: 'polygon(8% 0%, 100% 8%, 100% 100%, 0% 100%)' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80" 
                    alt="Campus career readiness"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {ecosystemItems.map((item) => {
                const ItemIcon = item.icon;
                const isSelected = activeEcosystemId === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveEcosystemId(item.id)}
                    className={`p-4.5 rounded-none text-left transition-all duration-200 cursor-pointer flex items-center justify-between shadow-xs ${
                      isSelected 
                        ? 'bg-primary text-primary-foreground shadow-md font-bold' 
                        : 'bg-card text-foreground border border-border hover:bg-muted'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-8 h-8 flex items-center justify-center ${
                        isSelected ? 'text-primary-foreground' : 'text-primary'
                      }`}>
                        <ItemIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold tracking-tight font-['Outfit',sans-serif]">
                          {item.label}
                        </h4>
                        <p className={`text-[11px] leading-tight mt-0.5 line-clamp-1 ${
                          isSelected ? 'text-primary-foreground/80' : 'text-muted-foreground'
                        }`}>
                          {item.sub}
                        </p>
                      </div>
                    </div>

                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-primary-foreground translate-x-1' : 'text-muted-foreground'
                    }`} />
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-5">
              <div className="bg-card border border-border p-6 sm:p-8 rounded-none shadow-md space-y-5">
                
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center shadow-xs">
                      {React.createElement(activeEcosystem.icon, { className: 'w-5 h-5' })}
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#059669]">
                        KEY FOCUS AREA
                      </span>
                      <h4 className="text-lg sm:text-xl font-bold text-foreground font-['Outfit',sans-serif] leading-snug">
                        {activeEcosystem.label}
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h5 className="text-sm font-bold text-primary">
                    {activeEcosystem.heading}
                  </h5>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {activeEcosystem.desc}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-muted-foreground">
                    CORE HIGHLIGHTS:
                  </p>
                  {activeEcosystem.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950 text-[#059669] flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-xs text-foreground/90 font-medium leading-relaxed">{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <button
                    onClick={() => onNavigate && onNavigate('training')}
                    className="w-full px-5 py-3 rounded-none border border-border bg-card hover:bg-primary hover:text-primary-foreground text-foreground text-xs font-extrabold tracking-wider uppercase transition-all duration-200 shadow-xs cursor-pointer inline-flex items-center justify-center gap-2"
                  >
                    <span>View Placement Support Cell</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>

          </div>

          <div className="mt-14 pt-8 border-t border-border text-center">
            <p className="text-xs sm:text-sm font-extrabold tracking-widest text-foreground font-['Outfit',sans-serif] uppercase flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              <span>ACADEMIA</span>
              <span className="text-[#059669]">→</span>
              <span>INDUSTRY</span>
              <span className="text-[#059669]">→</span>
              <span>EXPERIENCE</span>
              <span className="text-[#059669]">→</span>
              <span className="text-primary font-bold">EMPLOYABILITY</span>
            </p>
          </div>

        </div>
      </section>

      {/* 3. FROM CAMPUS TO COMPANY */}
      <section className="w-full py-20 sm:py-28 bg-background border-b border-border" id="from-campus-to-company">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-3xl sm:text-5xl font-black text-amber-600 tracking-tight font-['Outfit',sans-serif] leading-tight">
                FROM CAMPUS TO COMPANY
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-normal pt-2">
                Recruitment at MSAJCE is supported by structured preparation designed to help students approach selection processes with greater confidence. The Placement Cell conducts mock aptitude assessments, mock interviews and mock group discussions.
              </p>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-80 sm:w-96 h-80 sm:h-96">
                <div className="absolute top-0 left-2 sm:left-4 w-44 sm:w-52 h-44 sm:h-52 rounded-full overflow-hidden shadow-xl z-20 group">
                  <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=85" 
                    alt="Campus study and preparation"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-amber-400/20 mix-blend-multiply pointer-events-none" />
                </div>

                <div className="absolute top-4 right-0 sm:right-2 w-44 sm:w-52 h-44 sm:h-52 rounded-full overflow-hidden shadow-xl z-10 group">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=85" 
                    alt="Interview and assessment"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-purple-600/20 mix-blend-multiply pointer-events-none" />
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 sm:w-56 h-48 sm:h-56 rounded-full overflow-hidden shadow-2xl z-30 group">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=85" 
                    alt="Career success and opportunity"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-pink-500/20 mix-blend-multiply pointer-events-none" />
                </div>
              </div>
            </div>

          </div>

          <div className="relative py-6 bg-card border border-border p-4">
            <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-0.5 bg-border z-0" />
            <div 
              className="hidden lg:block absolute top-[28px] left-[5%] h-0.5 bg-amber-500 transition-all duration-500 z-0"
              style={{ width: `${(activeStageIdx / (pathwayStages.length - 1)) * 90}%` }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 relative z-10">
              {pathwayStages.map((stage, idx) => {
                const isActive = activeStageIdx === idx;

                return (
                  <div
                    key={stage.num}
                    onClick={() => setActiveStageIdx(idx)}
                    className={`cursor-pointer transition-all duration-300 flex flex-col items-center text-center p-3 ${
                      isActive ? 'opacity-100 font-bold' : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-extrabold text-xs mb-2 transition-all duration-200 ${
                      isActive 
                        ? 'bg-amber-500 text-white shadow-xs ring-4 ring-amber-100 dark:ring-amber-950' 
                        : 'bg-muted text-muted-foreground hover:bg-accent'
                    }`}>
                      {stage.num}
                    </div>

                    <h4 className={`text-sm font-black font-['Outfit',sans-serif] tracking-tight uppercase mt-1 ${
                      isActive ? 'text-amber-600' : 'text-foreground'
                    }`}>
                      {stage.word}
                    </h4>

                    <span className="text-[11px] font-bold text-muted-foreground mt-0.5">
                      {stage.title}
                    </span>

                    <p className="text-xs text-muted-foreground leading-normal mt-2">
                      {stage.text}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

          <div className="mt-8 p-6 bg-card border border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                STAGE {(pathwayStages[activeStageIdx] || pathwayStages[0]).num} — {(pathwayStages[activeStageIdx] || pathwayStages[0]).word} ({(pathwayStages[activeStageIdx] || pathwayStages[0]).title})
              </span>
              <p className="text-sm font-medium text-foreground">
                {(pathwayStages[activeStageIdx] || pathwayStages[0]).text}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveStageIdx((prev) => (prev > 0 ? prev - 1 : 6))}
                className="px-4 py-2 rounded-none border border-border bg-muted hover:bg-amber-500 hover:text-white text-foreground text-xs font-bold transition-colors cursor-pointer"
              >
                Previous
              </button>
              <button
                onClick={() => setActiveStageIdx((prev) => (prev < 6 ? prev + 1 : 0))}
                className="px-4 py-2 rounded-none border border-border bg-muted hover:bg-amber-500 hover:text-white text-foreground text-xs font-bold transition-colors cursor-pointer"
              >
                Next Stage
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* OUR MAJOR RECRUITERS */}
      <section className="w-full py-16 bg-background border-b border-border overflow-hidden relative" id="our-major-recruiters">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted text-foreground text-xs font-extrabold tracking-widest uppercase">
            <span>OFFICIAL CAMPUS HIRING ALLIANCES</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight font-['Outfit',sans-serif]">
            Our Major Recruiters
          </h3>
          <p className="text-sm text-muted-foreground">
            Leading multinational and core technology enterprises engaging in on-campus recruitment drives.
          </p>
        </div>

        <div className="relative w-full h-[500px] overflow-hidden bg-background">
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
            preserveAspectRatio="none"
          >
            {[...Array(6)].map((_, i) => (
              <line 
                key={`h-${i}`}
                x1="0" 
                y1={`${(i + 1) * (100 / 6)}%`} 
                x2="100%" 
                y2={`${(i + 1) * (100 / 6)}%`} 
                stroke="currentColor" 
                strokeWidth="1" 
              />
            ))}
            {[...Array(8)].map((_, i) => (
              <line 
                key={`v-${i}`}
                x1={`${(i + 1) * (100 / 8)}%`} 
                y1="0" 
                x2={`${(i + 1) * (100 / 8)}%`} 
                y2="100%" 
                stroke="currentColor" 
                strokeWidth="1" 
              />
            ))}
          </svg>

          <div className="absolute inset-0 flex items-center">
            <div className="animate-scroll-right-to-left flex gap-8 px-8">
              {majorRecruiters.concat(majorRecruiters).map((rec, idx) => (
                <React.Fragment key={`rec-${idx}`}>
                  <div className="recruiter-item group cursor-pointer">
                    <span className="text-sm sm:text-base font-black text-foreground group-hover:text-primary transition-colors duration-300 font-['Outfit',sans-serif] text-center whitespace-normal line-clamp-2">
                      {rec.name}
                    </span>
                    <span className="text-[10px] text-[#059669] font-bold mt-2 uppercase tracking-wide">
                      {rec.category}
                    </span>
                  </div>

                  {idx % 3 === 0 && (
                    <div className="recruiter-item flex-col items-center justify-center h-full">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 bg-muted rounded-lg flex items-center justify-center group hover:bg-primary/20 transition-all duration-300">
                        <div className="text-center">
                          <div className="text-2xl sm:text-3xl font-black text-primary opacity-60 font-['Outfit',sans-serif]">
                            +
                          </div>
                          <span className="text-[10px] text-muted-foreground font-bold uppercase mt-1 block">
                            {idx % 2 === 0 ? 'Hiring' : 'Growth'}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. RECRUITER & OPPORTUNITY MATRIX */}
      <section className="w-full py-20 sm:py-28 bg-page-bg text-foreground border-b border-border" id="recruiter-opportunity-matrix">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-3.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#082B5C] text-white text-xs font-black tracking-widest uppercase shadow-xs">
              <span>STRUCTURAL PERSPECTIVE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight font-['Outfit',sans-serif] leading-tight">
              RECRUITER & OPPORTUNITY MATRIX
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-normal pt-2">
              Organisations engaging with students can differ in industry, role requirements and professional environment.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-card border border-border shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#082B5C] text-white border-b border-border">
                    <th className="py-4 px-6 text-xs font-black uppercase tracking-wider font-['Outfit',sans-serif]">
                      Dimension
                    </th>
                    <th className="py-4 px-6 text-xs font-black uppercase tracking-wider font-['Outfit',sans-serif]">
                      What It Represents
                    </th>
                    <th className="py-4 px-6 text-xs font-black uppercase tracking-wider font-['Outfit',sans-serif]">
                      Student Perspective
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-sm">
                  {matrixDimensions.map((row, idx) => (
                    <tr 
                      key={idx}
                      className="hover:bg-muted/60 transition-colors duration-150 group"
                    >
                      <td className="py-4.5 px-6 font-bold text-foreground whitespace-nowrap">
                        <span className="inline-flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-[#005DA6] shadow-xs" />
                          {row.dimension}
                        </span>
                      </td>
                      <td className="py-4.5 px-6 text-muted-foreground font-normal">
                        {row.represents}
                      </td>
                      <td className="py-4.5 px-6 text-foreground font-semibold">
                        {row.perspective}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MORE THAN A COMPANY LOGO */}
      <section className="w-full py-20 sm:py-28 bg-background border-b border-border" id="more-than-a-logo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight font-['Outfit',sans-serif] leading-tight">
              MORE THAN A COMPANY LOGO
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-normal pt-2">
              Every recruitment interaction is more than a corporate logo — it is the culmination of structured academic rigor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visualStoryImages.map((story) => (
              <div 
                key={story.step}
                className="group relative h-[420px] sm:h-[480px] overflow-hidden shadow-md flex flex-col justify-end p-6 cursor-pointer"
              >
                <img 
                  src={story.image} 
                  alt={story.alt}
                  className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.92]"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#082B5C]/90 via-[#082B5C]/40 to-transparent" />

                <div className="relative z-10 space-y-2 text-white">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-white/20 backdrop-blur-xs text-[11px] font-extrabold uppercase tracking-wider">
                    <span>IMAGE {story.step}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black tracking-tight font-['Outfit',sans-serif]">
                    {story.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-medium">
                    “{story.quote}”
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CLOSING */}
      <section className="w-full py-20 sm:py-28 bg-[#082B5C] text-white relative overflow-hidden" id="closing-statement">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-['Outfit',sans-serif] leading-tight text-white">
            <span className="block">THE RIGHT CONNECTION</span>
            <span className="text-emerald-400 block mt-1">
              CAN OPEN THE NEXT DOOR.
            </span>
          </h2>

          <p className="text-blue-100/90 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
            Through recruitment drives, industry interaction, professional preparation, internships and continued engagement with organisations.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate && onNavigate('training')}
              className="px-6 py-3.5 rounded-none border border-white bg-white hover:bg-slate-100 text-[#082B5C] text-xs font-black tracking-wider uppercase transition-all duration-200 shadow-md cursor-pointer inline-flex items-center gap-2"
            >
              <span>Explore Skill Training</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate && onNavigate('mous')}
              className="px-6 py-3.5 rounded-none border border-white/80 bg-transparent hover:bg-white text-white hover:text-[#082B5C] text-xs font-black tracking-wider uppercase transition-all duration-200 shadow-xs cursor-pointer inline-flex items-center gap-2"
            >
              <span>View Corporate MoUs</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
