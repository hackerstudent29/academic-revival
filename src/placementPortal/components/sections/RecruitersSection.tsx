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
  // State for active ecosystem button (pops out card on right)
  const [activeEcosystemId, setActiveEcosystemId] = useState<string>('talent');
  
  // State for active stage in Campus to Company
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);

  // Auto-advancing stage dot for Campus to Company
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStageIdx((prev) => (prev + 1) % 7);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // RECRUITER ECOSYSTEM BUTTONS & EXPANDABLE RECTANGULAR CARDS
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

  // SECTION 03: Pathway Stages for "FROM CAMPUS TO COMPANY"
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

  // OUR MAJOR RECRUITERS (Official & Reputed MSAJCE Recruiters)
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

  // SECTION 04: RED THEMED MATRIX TABLE (Matte Lipstick Red, Strictly official dimensions)
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

  // SECTION 05: Visual Story Images (EXACTLY 4 IMAGES)
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
    <div className="w-full bg-white text-[#10243E] overflow-hidden">
      
      {/* ========================================================= */}
      {/* TOP BANNER: Full-Width Cinematic Campus Banner Image      */}
      {/* ========================================================= */}
      <section className="relative w-full h-[280px] sm:h-[360px] lg:h-[400px] flex items-center justify-center bg-[#082B5C] text-white overflow-hidden" id="recruiters-hero-banner">
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
            <span>CAREER GUIDANCE & PLACEMENT CELL</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-['Outfit',sans-serif] drop-shadow-md">
            Recruiters & Tier Matrix
          </h1>
          <p className="text-sm sm:text-base text-blue-100/90 font-medium tracking-wide max-w-2xl mx-auto">
            Mohamed Sathak A J College of Engineering — Connecting Student Capabilities with Corporate Opportunities
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 1. WHERE INDUSTRY MEETS TALENT */}
      {/* Hexagon Photo Cluster (No borders/dots) + Heading + Text + Pulsing Arrow */}
      {/* ========================================================= */}
      <section className="w-full py-12 sm:py-16 bg-white" id="where-industry-meets-talent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* LEFT: Honeycomb Hexagon Photo Cluster (Directly inspired by uploaded reference, no borders, no dots) */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="relative w-full max-w-[480px] h-[440px] sm:h-[480px]">
                
                {/* Top Center Hexagon Photo */}
                <div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-48 sm:w-56 h-52 sm:h-60 overflow-hidden shadow-lg transition-transform duration-500 hover:scale-103"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=85" 
                    alt="Professional discussion and tech interaction"
                    className="w-full h-full object-cover object-center brightness-[0.98]"
                  />
                </div>

                {/* Bottom Left Hexagon Photo */}
                <div 
                  className="absolute bottom-4 left-0 sm:left-2 w-44 sm:w-52 h-48 sm:h-56 overflow-hidden shadow-lg transition-transform duration-500 hover:scale-103"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=85" 
                    alt="Engineering team collaboration and laptops"
                    className="w-full h-full object-cover object-center brightness-[0.98]"
                  />
                </div>

                {/* Bottom Right Hexagon Photo */}
                <div 
                  className="absolute bottom-4 right-0 sm:right-2 w-44 sm:w-52 h-48 sm:h-56 overflow-hidden shadow-lg transition-transform duration-500 hover:scale-103"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=85" 
                    alt="Campus recruiter interview session"
                    className="w-full h-full object-cover object-center brightness-[0.98]"
                  />
                </div>

                {/* Accent Solid Hexagon 1 (Top Right Teal/Blue Accent) */}
                <div 
                  className="absolute top-12 right-2 sm:right-6 w-16 sm:w-20 h-18 sm:h-22 bg-[#0052CC] opacity-90 shadow-md pointer-events-none"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                />

                {/* Accent Solid Hexagon 2 (Bottom Center Soft Blue Accent) */}
                <div 
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-14 sm:w-16 h-16 sm:h-18 bg-[#BAE6FD] opacity-95 shadow-xs pointer-events-none"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                />

              </div>
            </div>

            {/* RIGHT: Heading + Official MSAJCE Paragraph + Animated Connection */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-5xl font-black text-[#082B5C] tracking-tight font-['Outfit',sans-serif] leading-tight">
                  WHERE INDUSTRY MEETS TALENT
                </h2>
              </div>

              {/* Official MSAJCE Placement Text */}
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal pt-2">
                MSAJCE creates opportunities for students to connect with organisations through campus recruitment, industry interaction and professional exposure. The Placement Cell works towards providing employment opportunities through on-campus and off-campus recruitment drives while helping students develop the skills and confidence required to approach professional opportunities. Recruitment preparation is supported through aptitude, communication and technical skill development, along with mock assessments, interviews and group discussions.
              </p>

              {/* Animated Connection Element: TALENT ↔ INDUSTRY ↔ OPPORTUNITY */}
              <div className="pt-4 pb-2">
                <div className="p-4 sm:p-5 bg-[#F8FAFC] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                  
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0052CC] animate-pulse" />
                    <span className="text-xs sm:text-sm font-black tracking-wider text-[#082B5C] font-['Outfit',sans-serif]">
                      TALENT
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[#0D9488]">
                    <span className="h-0.5 w-6 sm:w-10 bg-[#0D9488]/50" />
                    <span className="text-xs font-bold animate-pulse">↔</span>
                    <span className="h-0.5 w-6 sm:w-10 bg-[#0D9488]/50" />
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0D9488] animate-pulse" />
                    <span className="text-xs sm:text-sm font-black tracking-wider text-[#082B5C] font-['Outfit',sans-serif]">
                      INDUSTRY
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[#0D9488]">
                    <span className="h-0.5 w-6 sm:w-10 bg-[#0D9488]/50" />
                    <span className="text-xs font-bold animate-pulse">↔</span>
                    <span className="h-0.5 w-6 sm:w-10 bg-[#0D9488]/50" />
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0052CC] animate-pulse" />
                    <span className="text-xs sm:text-sm font-black tracking-wider text-[#082B5C] font-['Outfit',sans-serif]">
                      OPPORTUNITY
                    </span>
                  </div>

                </div>
              </div>

              {/* Action Buttons: Rectangular shape, Light Blue border, Blue on hover */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#the-recruiter-ecosystem"
                  className="px-6 py-3.5 rounded-none border border-sky-300 bg-white hover:bg-[#0052CC] text-[#082B5C] hover:text-white text-xs font-extrabold tracking-wider uppercase transition-all duration-200 shadow-xs cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Explore Recruiter Ecosystem</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#from-campus-to-company"
                  className="px-6 py-3.5 rounded-none border border-sky-300 bg-white hover:bg-[#0052CC] text-[#082B5C] hover:text-white text-xs font-extrabold tracking-wider uppercase transition-all duration-200 shadow-xs cursor-pointer inline-flex items-center gap-2"
                >
                  <span>View Recruitment Pathway</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. THE RECRUITER ECOSYSTEM */}
      {/* Words at Left and Multi-Segmented Shard Photo Frame at Right */}
      {/* ========================================================= */}
      <section className="w-full py-20 sm:py-28 bg-[#F8FAFC]" id="the-recruiter-ecosystem">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Row: Words at LEFT and Picture at RIGHT */}
          <div className="mb-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-white p-6 sm:p-10 shadow-xs">
            
            {/* WORDS AT LEFT */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#DCEEFF] text-[#082B5C] text-xs font-extrabold tracking-widest uppercase">
                <span>INDUSTRY PARTNERSHIPS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-[#082B5C] tracking-tight font-['Outfit',sans-serif] leading-tight">
                THE RECRUITER ECOSYSTEM
              </h2>
              <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-[#0052CC] uppercase pt-1">
                <Building2 className="w-4 h-4 text-[#0D9488]" />
                CAMPUS TO CAREER OPPORTUNITIES
              </div>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal pt-1">
                MSAJCE's Industry–Institute Interaction Cell strengthens collaboration between academia and industry through internships, industrial visits, expert interactions, industry-oriented training and placement activities. The institution also promotes industry participation through value-added courses, specialised training, workshops, seminars, industry-oriented laboratories and Centres of Excellence, creating opportunities for students to understand current industry expectations and strengthen their competencies.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Through continuous interaction with corporate recruiters, applied Centres of Excellence, and credit-bearing in-plant internships, MSAJCE creates a holistic ecosystem supporting students from theoretical foundations to full-time career placement.
              </p>
            </div>

            {/* PICTURE AT RIGHT (Shard Mosaic Frame) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] h-[360px] sm:h-[400px] bg-[#F1F5F9] p-2 overflow-hidden shadow-md">
                
                {/* Top-Left Shard */}
                <div 
                  className="absolute top-2 left-2 w-[46%] h-[46%] overflow-hidden rounded-tl-2xl group transition-transform duration-500 hover:scale-102"
                  style={{ clipPath: 'polygon(0% 0%, 100% 0%, 82% 100%, 0% 88%)' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80" 
                    alt="Corporate recruiter mentorship"
                    className="w-full h-full object-cover object-center brightness-95 contrast-105"
                  />
                </div>

                {/* Top-Right Shard */}
                <div 
                  className="absolute top-2 right-2 w-[50%] h-[48%] overflow-hidden rounded-tr-2xl group transition-transform duration-500 hover:scale-102"
                  style={{ clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 92%)' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=80" 
                    alt="Engineering team collaboration"
                    className="w-full h-full object-cover object-center brightness-95 contrast-105"
                  />
                </div>

                {/* Center / Middle Shard */}
                <div 
                  className="absolute top-[40%] left-[22%] w-[56%] h-[35%] overflow-hidden group transition-transform duration-500 hover:scale-102 z-10"
                  style={{ clipPath: 'polygon(15% 0%, 100% 8%, 85% 100%, 0% 92%)' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1577495508048-b635879837f1?w=600&auto=format&fit=crop&q=80" 
                    alt="Industry seminar and expert address"
                    className="w-full h-full object-cover object-center brightness-95 contrast-105"
                  />
                </div>

                {/* Bottom-Left Shard */}
                <div 
                  className="absolute bottom-2 left-2 w-[48%] h-[46%] overflow-hidden rounded-bl-2xl group transition-transform duration-500 hover:scale-102"
                  style={{ clipPath: 'polygon(0% 12%, 88% 0%, 100% 100%, 0% 100%)' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80" 
                    alt="Student placement presentation"
                    className="w-full h-full object-cover object-center brightness-95 contrast-105"
                  />
                </div>

                {/* Bottom-Right Shard */}
                <div 
                  className="absolute bottom-2 right-2 w-[48%] h-[44%] overflow-hidden rounded-br-2xl group transition-transform duration-500 hover:scale-102"
                  style={{ clipPath: 'polygon(8% 0%, 100% 8%, 100% 100%, 0% 100%)' }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80" 
                    alt="Campus career readiness"
                    className="w-full h-full object-cover object-center brightness-95 contrast-105"
                  />
                </div>

              </div>
            </div>

          </div>

          {/* Ecosystem Interactive Architecture: Rectangular Buttons (No Borders) -> Pop-out Rectangular Card on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT: Rectangular Buttons with NO borders */}
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
                        ? 'bg-[#0052CC] text-white shadow-md' 
                        : 'bg-white text-[#082B5C] hover:bg-[#EEF4FF]'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-8 h-8 flex items-center justify-center ${
                        isSelected ? 'text-white' : 'text-[#0052CC]'
                      }`}>
                        <ItemIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs sm:text-sm font-bold tracking-tight font-['Outfit',sans-serif]">
                          {item.label}
                        </h4>
                        <p className={`text-[11px] leading-tight mt-0.5 line-clamp-1 ${
                          isSelected ? 'text-blue-100' : 'text-slate-500'
                        }`}>
                          {item.sub}
                        </p>
                      </div>
                    </div>

                    <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-white translate-x-1' : 'text-slate-400'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* RIGHT: Small Pop-out Card in Rectangle Shape */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 sm:p-8 rounded-none shadow-md space-y-5 transform transition-all duration-300">
                
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#0052CC] text-white flex items-center justify-center shadow-xs">
                      {React.createElement(activeEcosystem.icon, { className: 'w-5 h-5' })}
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0D9488]">
                        KEY FOCUS AREA
                      </span>
                      <h4 className="text-lg sm:text-xl font-bold text-[#082B5C] font-['Outfit',sans-serif] leading-snug">
                        {activeEcosystem.label}
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h5 className="text-sm font-bold text-[#0052CC]">
                    {activeEcosystem.heading}
                  </h5>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {activeEcosystem.desc}
                  </p>
                </div>

                {/* Key Bulletins */}
                <div className="space-y-2.5 pt-2">
                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                    CORE HIGHLIGHTS:
                  </p>
                  {activeEcosystem.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-[#0D9488] flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-xs text-slate-700 font-medium leading-relaxed">{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onNavigate && onNavigate('training')}
                    className="w-full px-5 py-3 rounded-none border border-sky-300 bg-white hover:bg-[#0052CC] text-[#082B5C] hover:text-white text-xs font-extrabold tracking-wider uppercase transition-all duration-200 shadow-xs cursor-pointer inline-flex items-center justify-center gap-2"
                  >
                    <span>View Placement Support Cell</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom Statement: ACADEMIA → INDUSTRY → EXPERIENCE → EMPLOYABILITY */}
          <div className="mt-14 pt-8 border-t border-slate-200 text-center">
            <p className="text-xs sm:text-sm font-extrabold tracking-widest text-[#082B5C] font-['Outfit',sans-serif] uppercase flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              <span>ACADEMIA</span>
              <span className="text-[#0D9488]">→</span>
              <span>INDUSTRY</span>
              <span className="text-[#0D9488]">→</span>
              <span>EXPERIENCE</span>
              <span className="text-[#0D9488]">→</span>
              <span className="text-[#0052CC]">EMPLOYABILITY</span>
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. FROM CAMPUS TO COMPANY */}
      {/* Narrative + BIGGER 3 Circles Together in Yellow, Purple & Pink (NO Borders) + 7-Stage Pathway */}
      {/* ========================================================= */}
      <section className="w-full py-20 sm:py-28 bg-white" id="from-campus-to-company">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            
            {/* LEFT: Narrative with Yellow Heading */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-3xl sm:text-5xl font-black text-[#D97706] sm:text-[#B45309] tracking-tight font-['Outfit',sans-serif] leading-tight drop-shadow-xs">
                FROM CAMPUS TO COMPANY
              </h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal pt-2">
                Recruitment at MSAJCE is supported by structured preparation designed to help students approach selection processes with greater confidence. The Placement Cell conducts mock aptitude assessments, mock interviews and mock group discussions, while training in aptitude, communication and technical skills helps students prepare for interactions with prospective employers.
              </p>
            </div>

            {/* RIGHT: BIGGER 3 Overlapping / Clustered Circular Photos in Yellow, Purple, Pink (NO BORDERS) */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-80 sm:w-96 h-80 sm:h-96">
                
                {/* Circle 1: Yellow Theme Accent (Top Left) - BIGGER, NO BORDER */}
                <div className="absolute top-0 left-2 sm:left-4 w-44 sm:w-52 h-44 sm:h-52 rounded-full overflow-hidden shadow-xl z-20 group">
                  <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=85" 
                    alt="Campus study and preparation"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle Yellow Tone Overlay without harsh border */}
                  <div className="absolute inset-0 bg-amber-400/20 mix-blend-multiply pointer-events-none" />
                </div>

                {/* Circle 2: Purple Theme Accent (Top Right) - BIGGER, NO BORDER */}
                <div className="absolute top-4 right-0 sm:right-2 w-44 sm:w-52 h-44 sm:h-52 rounded-full overflow-hidden shadow-xl z-10 group">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=85" 
                    alt="Interview and assessment"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle Purple Tone Overlay without harsh border */}
                  <div className="absolute inset-0 bg-purple-600/20 mix-blend-multiply pointer-events-none" />
                </div>

                {/* Circle 3: Pink Theme Accent (Bottom Center) - BIGGER, NO BORDER */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 sm:w-56 h-48 sm:h-56 rounded-full overflow-hidden shadow-2xl z-30 group">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=85" 
                    alt="Career success and opportunity"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle Pink Tone Overlay without harsh border */}
                  <div className="absolute inset-0 bg-pink-500/20 mix-blend-multiply pointer-events-none" />
                </div>

              </div>
            </div>

          </div>

          {/* Clean 7-Stage Pathway: Pure White Background, No Icons/Emojis */}
          <div className="relative py-6 bg-white">
            
            {/* Connecting Rail Line */}
            <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-0.5 bg-slate-200 z-0" />
            
            {/* Active Progress Line */}
            <div 
              className="hidden lg:block absolute top-[28px] left-[5%] h-0.5 bg-amber-500 transition-all duration-500 z-0"
              style={{ width: `${(activeStageIdx / (pathwayStages.length - 1)) * 90}%` }}
            />

            {/* 7 Horizontal Stages (Clean White, Text only, No Icons/Emojis) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 relative z-10">
              {pathwayStages.map((stage, idx) => {
                const isActive = activeStageIdx === idx;

                return (
                  <div
                    key={stage.num}
                    onClick={() => setActiveStageIdx(idx)}
                    className={`cursor-pointer transition-all duration-300 flex flex-col items-center text-center p-3 bg-white ${
                      isActive ? 'scale-105' : 'opacity-85 hover:opacity-100'
                    }`}
                  >
                    {/* Step Number Badge */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-extrabold text-xs mb-2 transition-all duration-200 ${
                      isActive 
                        ? 'bg-amber-500 text-white shadow-sm ring-4 ring-amber-100' 
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}>
                      {stage.num}
                    </div>

                    {/* Stage Name in clean typography */}
                    <h4 className={`text-sm font-black font-['Outfit',sans-serif] tracking-tight uppercase mt-1 ${
                      isActive ? 'text-[#B45309]' : 'text-[#082B5C]'
                    }`}>
                      {stage.word}
                    </h4>

                    {/* Stage Title */}
                    <span className="text-[11px] font-bold text-slate-500 mt-0.5">
                      {stage.title}
                    </span>

                    {/* Supporting Text */}
                    <p className="text-xs text-slate-600 leading-normal mt-2">
                      {stage.text}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Active Highlight Banner */}
          <div className="mt-8 p-6 bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold text-[#B45309] uppercase tracking-wider">
                STAGE {pathwayStages[activeStageIdx].num} — {pathwayStages[activeStageIdx].word} ({pathwayStages[activeStageIdx].title})
              </span>
              <p className="text-sm font-medium text-slate-800">
                {pathwayStages[activeStageIdx].text}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveStageIdx((prev) => (prev > 0 ? prev - 1 : 6))}
                className="px-4 py-2 rounded-none border border-amber-300 bg-white hover:bg-amber-500 text-[#082B5C] hover:text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Previous
              </button>
              <button
                onClick={() => setActiveStageIdx((prev) => (prev < 6 ? prev + 1 : 0))}
                className="px-4 py-2 rounded-none border border-amber-300 bg-white hover:bg-amber-500 text-[#082B5C] hover:text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Next Stage
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* OUR MAJOR RECRUITERS (Placed right below Campus to Company) */}
      {/* Animated Grid with Grid Lines - Content Moving Right to Left */}
      {/* NO borders, NO cards, NO background - Just Grid Lines and Text/Image */}
      {/* ========================================================= */}
      <section className="w-full py-16 bg-white overflow-hidden relative" id="our-major-recruiters">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#DCEEFF] text-[#082B5C] text-xs font-extrabold tracking-widest uppercase">
            <span>OFFICIAL CAMPUS HIRING ALLIANCES</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-[#082B5C] tracking-tight font-['Outfit',sans-serif]">
            Our Major Recruiters
          </h3>
          <p className="text-sm text-slate-600">
            Leading multinational and core technology enterprises engaging in on-campus recruitment drives.
          </p>
        </div>

        {/* ANIMATED GRID WITH GRID LINES - Right to Left Scroll */}
        <div className="relative w-full h-[500px] overflow-hidden bg-white">
          
          {/* SVG Grid Lines (Vertical & Horizontal) */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
            preserveAspectRatio="none"
          >
            {/* Horizontal Grid Lines */}
            {[...Array(6)].map((_, i) => (
              <line 
                key={`h-${i}`}
                x1="0" 
                y1={`${(i + 1) * (100 / 6)}%`} 
                x2="100%" 
                y2={`${(i + 1) * (100 / 6)}%`} 
                stroke="#0052CC" 
                strokeWidth="1" 
                opacity="0.3"
              />
            ))}
            {/* Vertical Grid Lines */}
            {[...Array(8)].map((_, i) => (
              <line 
                key={`v-${i}`}
                x1={`${(i + 1) * (100 / 8)}%`} 
                y1="0" 
                x2={`${(i + 1) * (100 / 8)}%`} 
                y2="100%" 
                stroke="#0052CC" 
                strokeWidth="1" 
                opacity="0.3"
              />
            ))}
          </svg>

          {/* Animated Content Container - Moving Right to Left */}
          <div className="absolute inset-0 flex items-center">
            <style>{`
              @keyframes scrollFromRightToLeft {
                0% {
                  transform: translateX(100%);
                }
                100% {
                  transform: translateX(-100%);
                }
              }
              
              @keyframes scrollFromRightToLeftLoop {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-100%);
                }
              }
              
              .animate-scroll-right-to-left {
                animation: scrollFromRightToLeft 60s linear infinite;
              }
              
              .recruiter-item {
                flex: 0 0 280px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 2rem 1.5rem;
                height: 100%;
              }
              
              .recruiter-item:nth-child(even) {
                padding: 3rem 1.5rem;
                justify-content: flex-start;
                padding-top: 5rem;
              }
            `}</style>

            {/* Scrolling Track with Recruiters + Alternating Images */}
            <div className="animate-scroll-right-to-left flex gap-8 px-8">
              {/* First Pass: Recruiters with Alternating Images */}
              {majorRecruiters.concat(majorRecruiters).map((rec, idx) => (
                <React.Fragment key={`rec-${idx}`}>
                  {/* Recruiter Name & Category */}
                  <div className="recruiter-item group cursor-pointer">
                    <span className="text-sm sm:text-base font-black text-[#082B5C] group-hover:text-[#0052CC] transition-colors duration-300 font-['Outfit',sans-serif] text-center whitespace-normal line-clamp-2">
                      {rec.name}
                    </span>
                    <span className="text-[10px] text-[#0D9488] font-bold mt-2 uppercase tracking-wide">
                      {rec.category}
                    </span>
                  </div>

                  {/* Alternating Image Placeholder - Decorative Grid Cell */}
                  {idx % 3 === 0 && (
                    <div className="recruiter-item flex-col items-center justify-center h-full">
                      <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#0052CC]/20 to-[#0D9488]/20 rounded-lg flex items-center justify-center group hover:from-[#0052CC]/40 hover:to-[#0D9488]/40 transition-all duration-300">
                        <div className="text-center">
                          <div className="text-2xl sm:text-3xl font-black text-[#0052CC] opacity-60 font-['Outfit',sans-serif]">
                            +
                          </div>
                          <span className="text-[10px] text-slate-500 font-bold uppercase mt-1 block">
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

          {/* Fade Overlay on Edges (Optional: Creates smooth entry/exit) */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
        </div>

        {/* Info Text Below */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm font-medium text-slate-600">
            <span className="text-[#0052CC] font-bold">Grid lines show recruitment landscape</span> — Continuous scroll represents ongoing opportunities
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. RECRUITER & OPPORTUNITY MATRIX (SOLID MATTE LIPSTICK RED) */}
      {/* Centered Small-Grid Table on Solid Matte Lipstick Red with White Typography */}
      {/* ========================================================= */}
      <section className="w-full py-20 sm:py-28 bg-[#800F2F] text-white" id="recruiter-opportunity-matrix">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-3.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white text-[#800F2F] text-xs font-black tracking-widest uppercase shadow-xs">
              <span>STRUCTURAL PERSPECTIVE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Outfit',sans-serif] leading-tight">
              RECRUITER & OPPORTUNITY MATRIX
            </h2>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed font-normal pt-2">
              Organisations engaging with students can differ in industry, role requirements and professional environment. Rather than reducing recruiters to a simple ranking, this matrix presents the different dimensions through which students may understand recruitment opportunities.
            </p>
          </div>

          {/* Solid Matte Lipstick Red Table Container with White Typography */}
          <div className="max-w-4xl mx-auto bg-[#590D22] border border-white/20 shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#440A1A] text-white border-b border-white/20">
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
                <tbody className="divide-y divide-white/15 text-sm">
                  {matrixDimensions.map((row, idx) => (
                    <tr 
                      key={idx}
                      className="hover:bg-[#6D102A] transition-colors duration-150 group"
                    >
                      <td className="py-4.5 px-6 font-bold text-white whitespace-nowrap">
                        <span className="inline-flex items-center gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-white shadow-xs" />
                          {row.dimension}
                        </span>
                      </td>
                      <td className="py-4.5 px-6 text-white/90 font-normal">
                        {row.represents}
                      </td>
                      <td className="py-4.5 px-6 text-white font-semibold">
                        {row.perspective}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Guiding Line Below Table (White text on Matte Lipstick Red) */}
          <div className="mt-12 text-center">
            <p className="text-xs sm:text-sm font-extrabold tracking-wider text-white font-['Outfit',sans-serif] uppercase flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <span>UNDERSTAND THE INDUSTRY</span>
              <span className="text-white/70">→</span>
              <span>UNDERSTAND THE ROLE</span>
              <span className="text-white/70">→</span>
              <span>PREPARE THE SKILL</span>
              <span className="text-white/70">→</span>
              <span className="text-white font-black underline underline-offset-4 decoration-white/40">PURSUE THE OPPORTUNITY</span>
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. MORE THAN A COMPANY LOGO */}
      {/* EXACTLY 4 Large Images Arranged Horizontally from Left to Right */}
      {/* ========================================================= */}
      <section className="w-full py-20 sm:py-28 bg-white" id="more-than-a-logo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 space-y-3">
            <h2 className="text-3xl sm:text-5xl font-black text-[#082B5C] tracking-tight font-['Outfit',sans-serif] leading-tight">
              MORE THAN A COMPANY LOGO
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal pt-2">
              Every recruitment interaction is more than a corporate logo — it is the culmination of structured academic rigor, deliberate skill mastery, active industry dialogue, and personal ambition.
            </p>
          </div>

          {/* 4 Large Images Arranged Horizontally [01] → [02] → [03] → [04] */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visualStoryImages.map((story) => (
              <div 
                key={story.step}
                className="group relative h-[420px] sm:h-[480px] overflow-hidden shadow-md flex flex-col justify-end p-6 cursor-pointer transition-all duration-500"
              >
                {/* Image Background (Gentle 1.04x Zoom on Hover) */}
                <img 
                  src={story.image} 
                  alt={story.alt}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 brightness-[0.92] contrast-[1.05]"
                />
                
                {/* Dark Translucent Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#082B5C]/90 via-[#082B5C]/40 to-transparent group-hover:from-[#082B5C]/95 transition-all duration-300" />

                {/* Floating Content */}
                <div className="relative z-10 space-y-2 text-white">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-white/20 backdrop-blur-xs text-[11px] font-extrabold uppercase tracking-wider">
                    <span>IMAGE {story.step}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black tracking-tight font-['Outfit',sans-serif]">
                    {story.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-medium group-hover:text-white transition-colors">
                    “{story.quote}”
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Connection Between All Four */}
          <div className="mt-12 pt-6 border-t border-slate-100 text-center">
            <p className="text-xs sm:text-sm font-extrabold tracking-widest text-[#082B5C] font-['Outfit',sans-serif] uppercase flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              <span>CAMPUS</span>
              <span className="text-[#0D9488]">→</span>
              <span>PREPARATION</span>
              <span className="text-[#0D9488]">→</span>
              <span>INDUSTRY</span>
              <span className="text-[#0D9488]">→</span>
              <span className="text-[#0052CC]">OPPORTUNITY</span>
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* FINAL CLOSING — MATTE RED BACKGROUND & CRISP WHITE WORDS */}
      {/* Matching the same matte red as Recruiter & Opportunity Matrix */}
      {/* ========================================================= */}
      <section className="w-full py-20 sm:py-28 bg-[#800F2F] text-white relative overflow-hidden" id="closing-statement">
        
        {/* Subtle Ambient Depth Lighting */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-rose-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          
          {/* Words with Clean High-Contrast White & Gold Accents */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-['Outfit',sans-serif] leading-tight text-white">
            <span className="block">THE RIGHT CONNECTION</span>
            <span className="text-[#FFD166] block mt-1">
              CAN OPEN THE NEXT DOOR.
            </span>
          </h2>

          <p className="text-rose-100/90 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
            Through recruitment drives, industry interaction, professional preparation, internships and continued engagement with organisations, MSAJCE aims to create meaningful connections between student potential and the evolving needs of the professional world.
          </p>

          {/* Rectangular Action Buttons: Crisp White on Matte Red */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate && onNavigate('training')}
              className="px-6 py-3.5 rounded-none border border-white bg-white hover:bg-[#FFD166] text-[#800F2F] hover:text-[#500015] text-xs font-black tracking-wider uppercase transition-all duration-200 shadow-md cursor-pointer inline-flex items-center gap-2"
            >
              <span>Explore Skill Training</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate && onNavigate('mous')}
              className="px-6 py-3.5 rounded-none border border-white/80 bg-transparent hover:bg-white text-white hover:text-[#800F2F] text-xs font-black tracking-wider uppercase transition-all duration-200 shadow-xs cursor-pointer inline-flex items-center gap-2"
            >
              <span>View Corporate MoUs</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
