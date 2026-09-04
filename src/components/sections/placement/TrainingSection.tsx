import React, { useState } from 'react';
import { 
  BrainCircuit, 
  MessageSquareText, 
  Code2, 
  GraduationCap, 
  Building2, 
  Microscope, 
  Users, 
  Laptop, 
  Briefcase, 
  CheckCircle, 
  ArrowRight, 
  Compass, 
  Layers, 
  Sparkles, 
  ExternalLink, 
  ChevronRight, 
  Shield, 
  Activity, 
  Cpu, 
  Bot, 
  Plane, 
  Flame, 
  Zap, 
  Box, 
  Binary, 
  Globe 
} from 'lucide-react';
import { Facility } from '@/types/placement';

interface TrainingSectionProps {
  onOpenFacility?: (facility: Facility) => void;
  onNavigate?: (sectionId: string) => void;
}

export const TrainingSection: React.FC<TrainingSectionProps> = ({ onOpenFacility, onNavigate }) => {
  const [activeMindNode, setActiveMindNode] = useState<string>('aptitude');
  const [activeBeltIdx, setActiveBeltIdx] = useState<number>(0);
  const [activeHotspotId, setActiveHotspotId] = useState<string>('lab');
  const [selectedTechDomain, setSelectedTechDomain] = useState<'ALL' | 'MECH_CIVIL' | 'ECE_EEE' | 'CSE_IT'>('ALL');

  const heroFloatingPhotos = [
    {
      id: 'h-scat-1',
      label: 'APTITUDE',
      title: 'Speed Math & Logic',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=80',
      pos: 'top-[8%] left-[6%]',
      size: 'w-28 sm:w-36 lg:w-44 h-36 sm:h-44 lg:h-52',
      rotate: '-rotate-4',
      color: 'bg-primary'
    },
    {
      id: 'h-scat-2',
      label: 'TECHNICAL',
      title: 'Full-Stack Coding Lab',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop&q=80',
      pos: 'top-[36%] left-[12%]',
      size: 'w-30 sm:w-40 lg:w-48 h-38 sm:h-48 lg:h-56',
      rotate: 'rotate-3',
      color: 'bg-primary'
    },
    {
      id: 'h-scat-3',
      label: 'ONLINE CBT LAB',
      title: '600+ Testing Terminals',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&auto=format&fit=crop&q=80',
      pos: 'bottom-[14%] left-[4%]',
      size: 'w-28 sm:w-36 lg:w-42 h-34 sm:h-42 lg:h-48',
      rotate: '-rotate-3',
      color: 'bg-primary'
    },
    {
      id: 'h-scat-4',
      label: 'INDUSTRY CONCLAVE',
      title: 'Corporate Expert Series',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=80',
      pos: 'bottom-[4%] left-[20%]',
      size: 'w-26 sm:w-34 lg:w-40 h-32 sm:h-40 lg:h-46',
      rotate: 'rotate-2',
      color: 'bg-primary'
    },
    {
      id: 'h-scat-5',
      label: 'REASONING',
      title: 'Speed Math Drills',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&auto=format&fit=crop&q=80',
      pos: 'top-[16%] left-[22%]',
      size: 'w-20 sm:w-26 lg:w-30 h-24 sm:h-30 lg:h-36',
      rotate: 'rotate-6',
      color: 'bg-primary'
    },
    {
      id: 'h-scat-6',
      label: 'ALGORITHMS',
      title: 'Coding Sandbox',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&auto=format&fit=crop&q=80',
      pos: 'top-[60%] left-[6%]',
      size: 'w-20 sm:w-24 lg:w-28 h-22 sm:h-28 lg:h-34',
      rotate: '-rotate-6',
      color: 'bg-primary'
    },
    {
      id: 'h-scat-7',
      label: 'FOUNDATION',
      title: 'Diagnostic Test',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&auto=format&fit=crop&q=80',
      pos: 'top-[78%] left-[16%]',
      size: 'w-18 sm:w-22 lg:w-26 h-20 sm:h-26 lg:h-30',
      rotate: 'rotate-4',
      color: 'bg-primary'
    },

    {
      id: 'h-scat-8',
      label: 'MOCK INTERVIEW',
      title: 'STAR Behavioral Panel',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=80',
      pos: 'top-[8%] right-[6%]',
      size: 'w-28 sm:w-36 lg:w-44 h-36 sm:h-44 lg:h-52',
      rotate: 'rotate-4',
      color: 'bg-primary'
    },
    {
      id: 'h-scat-9',
      label: 'GROUP DISCUSSION',
      title: 'Acoustic GD Suite',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80',
      pos: 'top-[36%] right-[12%]',
      size: 'w-30 sm:w-40 lg:w-48 h-38 sm:h-48 lg:h-56',
      rotate: '-rotate-3',
      color: 'bg-primary'
    },
    {
      id: 'h-scat-10',
      label: 'CAREER GUIDANCE',
      title: '1-on-1 Faculty Mentoring',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&auto=format&fit=crop&q=80',
      pos: 'bottom-[14%] right-[4%]',
      size: 'w-28 sm:w-36 lg:w-42 h-34 sm:h-42 lg:h-48',
      rotate: 'rotate-3',
      color: 'bg-primary'
    },
    {
      id: 'h-scat-11',
      label: 'CAMPUS DRIVE',
      title: 'Recruiter Interaction',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=80',
      pos: 'bottom-[4%] right-[20%]',
      size: 'w-26 sm:w-34 lg:w-40 h-32 sm:h-40 lg:h-46',
      rotate: '-rotate-2',
      color: 'bg-primary'
    },
    {
      id: 'h-scat-12',
      label: 'HR SELECTION',
      title: 'Executive Panel',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=80',
      pos: 'top-[16%] right-[22%]',
      size: 'w-20 sm:w-26 lg:w-30 h-24 sm:h-30 lg:h-36',
      rotate: '-rotate-6',
      color: 'bg-primary'
    },
    {
      id: 'h-scat-13',
      label: 'ORATORY',
      title: 'Verbal Articulation',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&auto=format&fit=crop&q=80',
      pos: 'top-[60%] right-[6%]',
      size: 'w-20 sm:w-24 lg:w-28 h-22 sm:h-28 lg:h-34',
      rotate: 'rotate-5',
      color: 'bg-primary'
    },
    {
      id: 'h-scat-14',
      label: 'GRADUATION',
      title: 'Placement Success',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&auto=format&fit=crop&q=80',
      pos: 'top-[78%] right-[16%]',
      size: 'w-18 sm:w-22 lg:w-26 h-20 sm:h-26 lg:h-30',
      rotate: '-rotate-4',
      color: 'bg-primary'
    }
  ];

  const studentClubs = [
    {
      name: 'PHOTOGRAPHY CLUB',
      tag: 'VISUAL ARTS & MEDIA',
      desc: 'Campus documentation, visual storytelling, portraiture and high-speed photography.',
      image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&auto=format&fit=crop&q=80'
    },
    {
      name: 'STARTUP CLUB',
      tag: 'ENTREPRENEURSHIP',
      desc: 'Incubation, business ideation, investor pitching, MVP design and market validation.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&auto=format&fit=crop&q=80'
    },
    {
      name: 'TRADING CLUB',
      tag: 'FINANCIAL MARKETS',
      desc: 'Stock market dynamics, technical charting, algorithmic trading and financial literacy.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=80'
    },
    {
      name: 'LITERARY CLUB',
      tag: 'DEBATING & ORATORY',
      desc: 'Parliamentary debates, MUN simulations, creative writing, elocution and speechcraft.',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=80'
    },
    {
      name: 'ROBOTICS & TECH CLUB',
      tag: 'INNOVATION & CODE',
      desc: 'Autonomous bot building, IoT fabrication, hackathons and drone design sprints.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=80'
    }
  ];

  const mindMapNodes = [
    {
      id: 'aptitude',
      name: 'APTITUDE',
      category: 'Foundation',
      pos: 'top',
      desc: 'Logical thinking, quantitative ability and reasoning preparation.',
      details: [
        'Speed mathematics, mental arithmetic, and data interpretation',
        'Logical reasoning puzzles, syllogisms, and critical analysis',
        'Timed online diagnostic tests mirroring national recruiter patterns'
      ],
      icon: BrainCircuit,
    },
    {
      id: 'communication',
      name: 'COMMUNICATION',
      category: 'Soft Skills',
      pos: 'left',
      desc: 'Building confidence in professional communication and interaction.',
      details: [
        'Corporate verbal proficiency and business presentation articulation',
        'Active listening, email etiquette, and workplace interaction',
        'Accent neutralization and conversational clarity'
      ],
      icon: MessageSquareText,
    },
    {
      id: 'technical',
      name: 'TECHNICAL',
      category: 'Core Competency',
      pos: 'right',
      desc: 'Developing domain-specific and technical competencies.',
      details: [
        'Data structures, algorithms, and computational problem solving',
        'Full stack web/mobile development, cloud deployment, and APIs',
        'Core branch technologies: VLSI, Embedded Systems, CAD/CAM, Robotics'
      ],
      icon: Code2,
    },
    {
      id: 'certification',
      name: 'CERTIFICATION',
      category: 'Value-Add',
      pos: 'bottom',
      desc: 'Gaining additional knowledge through value-added certification courses.',
      details: [
        'Industry credentials from AWS, Cisco, Oracle, RedHat, and NPTEL',
        'Modular credit courses aligned with latest industry standards',
        'Hands-on capstone project verification and credentialing'
      ],
      icon: Microscope,
    },
    {
      id: 'interview',
      name: 'INTERVIEW',
      category: 'Selection Prep',
      pos: 'bottom-left',
      desc: 'Practising professional interview situations.',
      details: [
        'Technical rounds simulation with alumni & corporate panel members',
        'STAR method behavioral responses & HR personality evaluations',
        'Personalized video feedback and resume articulation drills'
      ],
      icon: Users,
    },
    {
      id: 'group-discussion',
      name: 'GROUP DISCUSSION',
      category: 'Collaborative',
      pos: 'bottom-right',
      desc: 'Developing confidence in discussion and collaborative communication.',
      details: [
        'Case-study discussions, abstract topics, and current affairs',
        'Constructive intervention, team leadership, and moderation tactics',
        'Overcoming public speaking anxiety in air-conditioned GD suites'
      ],
      icon: Laptop,
    }
  ];

  const activeNodeData = mindMapNodes.find(n => n.id === activeMindNode) ?? mindMapNodes[0]!;

  const trainingBeltItems = [
    {
      title: 'APTITUDE',
      tagline: 'Prepare your reasoning and problem-solving abilities.',
      metric: '120+ Hours',
      focus: 'Quantitative & Logical Puzzles'
    },
    {
      title: 'COMMUNICATION',
      tagline: 'Build confidence for professional interaction.',
      metric: '80+ Hours',
      focus: 'Business English & Articulation'
    },
    {
      title: 'TECHNICAL SKILLS',
      tagline: 'Strengthen domain-specific capabilities.',
      metric: '150+ Hours',
      focus: 'DSA, Cloud, Web & Embedded'
    },
    {
      title: 'VALUE-ADDED COURSES',
      tagline: 'Expand knowledge beyond the core curriculum.',
      metric: '25+ Modules',
      focus: 'AWS, Cisco, Oracle & CAD'
    },
    {
      title: 'MOCK APTITUDE',
      tagline: 'Simulate timed test patterns and diagnostic assessments.',
      metric: '50+ Tests',
      focus: 'Recruiter Pattern Online Drills'
    },
    {
      title: 'MOCK INTERVIEW',
      tagline: 'Practise before facing the actual selection process.',
      metric: '3+ Rounds/Student',
      focus: 'HR & Technical Expert Panels'
    },
    {
      title: 'MOCK GD',
      tagline: 'Develop confidence in group interaction.',
      metric: '10+ Sessions',
      focus: 'Moderation, Arguments & Leadership'
    },
    {
      title: 'INDUSTRIAL WORKSHOP',
      tagline: 'Understand emerging technologies through expert interaction.',
      metric: '35+ Conclaves',
      focus: 'Hands-on Hardware & Software'
    },
    {
      title: 'RECRUITMENT',
      tagline: 'Step into campus and corporate hiring with absolute readiness.',
      metric: '100% Support',
      focus: 'Day 1 & Product Core Drives'
    }
  ];

  const facilityHotspots = [
    {
      id: 'lab',
      num: '01',
      name: 'COMPUTER LABS',
      sub: 'Online Training & Examinations',
      desc: 'Established high-capacity computer laboratories equipped with 600+ network workstations, dedicated gigabit optical fiber lines, and proctored testing infrastructure for national recruitment assessments.',
      specs: ['600+ High-end Workstations', '1 Gbps Dedicated Leased Line', 'Uninterrupted Power Backup', 'Air-Conditioned CBT Suites'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&auto=format&fit=crop&q=85',
      pos: 'top-[28%] left-[22%]'
    },
    {
      id: 'interview',
      num: '02',
      name: 'INTERVIEW ROOMS',
      sub: 'Written Tests & Face-to-Face Interviews',
      desc: 'Well-furnished, acoustic-treated air-conditioned interview cabins designed for corporate recruiters to conduct one-on-one technical evaluations and executive HR panels in complete privacy.',
      specs: ['12 Dedicated Interview Cabins', 'Corporate Hospitality Lounges', 'High-definition Video Conferencing', 'Acoustic Soundproofing'],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&auto=format&fit=crop&q=85',
      pos: 'top-[36%] right-[26%]'
    },
    {
      id: 'gd',
      num: '03',
      name: 'GROUP DISCUSSION ROOMS',
      sub: 'Dedicated Spaces for GD Assessment',
      desc: 'Circular discussion chambers equipped with conference audio arrays and moderator seating where students practise and undergo real placement group interactions.',
      specs: ['Circular Interaction Layout', 'Moderator & Observer Consoles', 'Audio-Visual Capture System', 'Comfortable Executive Seating'],
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=85',
      pos: 'bottom-[30%] left-[34%]'
    },
    {
      id: 'seminar',
      num: '04',
      name: 'SEMINAR & MEETING HALLS',
      sub: 'Workshops & Professional Interactions',
      desc: 'Fully air-conditioned auditoriums and seminar halls with 450+ seating capacity, line-array audio systems, and laser projection setups for Pre-Placement Talks (PPT) and guest lectures.',
      specs: ['450+ Seating Capacity', 'Laser Projection & Line-Array Audio', 'Dual Green Rooms', 'Centralized Climate Control'],
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1000&auto=format&fit=crop&q=85',
      pos: 'bottom-[25%] right-[22%]'
    }
  ];

  const activeHotspot = facilityHotspots.find(h => h.id === activeHotspotId) ?? facilityHotspots[0]!;

  const galleryRow1 = [
    { title: 'COMPUTER LABORATORY', tag: 'ACADEMIC', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop&q=80' },
    { title: 'INDUSTRIAL VISIT', tag: 'INDUSTRY', img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500&auto=format&fit=crop&q=80' },
    { title: 'PLACEMENT TRAINING', tag: 'PLACEMENT', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&auto=format&fit=crop&q=80' },
    { title: 'TECHNICAL WORKSHOP', tag: 'WORKSHOP', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=80' },
    { title: 'MOCK INTERVIEW', tag: 'SELECTION', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=80' },
    { title: 'STUDENT PROJECT', tag: 'INNOVATION', img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&auto=format&fit=crop&q=80' },
    { title: 'INDUSTRY EXPERT SESSION', tag: 'CONCLAVE', img: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=500&auto=format&fit=crop&q=80' },
    { title: 'ROBOTICS ACTIVITY', tag: 'TECH CENTRE', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&auto=format&fit=crop&q=80' },
    { title: 'GROUP DISCUSSION', tag: 'COMMUNICATION', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80' },
    { title: 'SEMINAR AUDITORIUM', tag: 'CAMPUS', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&auto=format&fit=crop&q=80' }
  ];

  const galleryRow2 = [
    { title: 'ENGINEERING LABORATORY', tag: 'ACADEMIC', img: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=500&auto=format&fit=crop&q=80' },
    { title: 'INTERNSHIP EXPOSURE', tag: 'PROFESSIONAL', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=80' },
    { title: 'CODING HACKATHON', tag: 'TECHNICAL', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&auto=format&fit=crop&q=80' },
    { title: 'AR/VR DEMO', tag: 'TECH CENTRE', img: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=500&auto=format&fit=crop&q=80' },
    { title: 'APTITUDE SESSION', tag: 'FOUNDATION', img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop&q=80' },
    { title: 'RECRUITMENT DRIVE', tag: 'PLACEMENT', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=80' },
    { title: 'DRONE FLIGHT TEST', tag: 'INNOVATION', img: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=500&auto=format&fit=crop&q=80' },
    { title: 'STUDENT COLLABORATION', tag: 'CAMPUS', img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&auto=format&fit=crop&q=80' },
    { title: 'INDUSTRY INTERACTION', tag: 'CONCLAVE', img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&auto=format&fit=crop&q=80' }
  ];

  const galleryRow3 = [
    { title: 'CISCO NETWORKING LAB', tag: 'TECH CENTRE', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&auto=format&fit=crop&q=80' },
    { title: 'CAREER MENTORING', tag: 'GUIDANCE', img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&auto=format&fit=crop&q=80' },
    { title: '3D PRINTING PROTOTYPE', tag: 'WORKSHOP', img: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=500&auto=format&fit=crop&q=80' },
    { title: 'EXECUTIVE GD SUITE', tag: 'PLACEMENT', img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&auto=format&fit=crop&q=80' },
    { title: 'IOT HARDWARE RIG', tag: 'ACADEMIC', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&auto=format&fit=crop&q=80' },
    { title: 'PRE-PLACEMENT TALK', tag: 'CORPORATE', img: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500&auto=format&fit=crop&q=80' },
    { title: 'TECHNICAL COMPETITION', tag: 'STUDENT EVENT', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&auto=format&fit=crop&q=80' },
    { title: 'CAMPUS LIFE & STUDY', tag: 'CAMPUS', img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=500&auto=format&fit=crop&q=80' }
  ];

  const galleryRow4 = [
    { title: 'AUTOMOTIVE EV TEST RIG', tag: 'TECH CENTRE', img: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=500&auto=format&fit=crop&q=80' },
    { title: 'HR INTERACTION PANEL', tag: 'PLACEMENT', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop&q=80' },
    { title: 'CAMPUS CONVOCATION', tag: 'SUCCESS', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop&q=80' },
    { title: 'AI MODEL TRAINING', tag: 'INNOVATION', img: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&auto=format&fit=crop&q=80' },
    { title: 'PROJECT PRESENTATION', tag: 'ACADEMIC', img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop&q=80' },
    { title: 'CORPORATE CONCLAVE', tag: 'INDUSTRY', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&auto=format&fit=crop&q=80' },
    { title: 'ENGINEERING GRADUATE', tag: 'READINESS', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80' }
  ];

  return (
    <div className="w-full bg-page-bg text-foreground overflow-hidden font-sans">
      
      {/* BUILDING THE SKILLS INDUSTRY EXPECTS */}
      <section className="w-full py-20 sm:py-28 bg-page-bg border-b border-border" id="mind-map-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 text-foreground text-xs font-extrabold tracking-widest uppercase mb-2">
              <BrainCircuit className="w-3.5 h-3.5 text-primary" />
              <span>COMPREHENSIVE SKILL ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-primary tracking-tight font-oswald leading-tight">
              BUILDING THE SKILLS INDUSTRY EXPECTS
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-normal pt-1">
              MSAJCE's training approach focuses on developing employability skills alongside academic learning. The Placement Cell provides training in aptitude, communication and technical skills.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-stretch">
            
            <div className="lg:col-span-3 hidden lg:block overflow-hidden shadow-xl">
              <div className="relative w-full h-full min-h-[560px]">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=85" 
                  alt="Students in Technical Lab" 
                  className="w-full h-full object-cover brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-5 right-5 text-white space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#3E5D7C] block">
                    TECHNICAL LABS
                  </span>
                  <p className="text-sm font-bold font-oswald leading-snug">
                    Hands-on coding, simulation and advanced terminal problem-solving.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-between bg-card border border-border p-6 sm:p-8 shadow-xl rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs">
              <div className="text-center mb-6">
                <span className="text-[11px] font-black uppercase tracking-widest text-primary inline-block font-oswald mb-2">
                  INTERCONNECTED DEVELOPMENT PILLARS
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {mindMapNodes.map((node) => {
                  const NodeIcon = node.icon;
                  const isSelected = activeMindNode === node.id;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setActiveMindNode(node.id)}
                      className={`p-4 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs flex flex-col items-center justify-center text-center transition-all duration-200 cursor-pointer border ${
                        isSelected 
                          ? 'bg-primary text-white border-primary shadow-md' 
                          : 'bg-page-bg text-foreground border-border hover:border-primary/40'
                      }`}
                    >
                      <NodeIcon className={`w-5 h-5 mb-2.5 ${isSelected ? 'text-white' : 'text-primary'}`} />
                      <span className="text-[11px] font-black uppercase font-oswald leading-tight block">
                        {node.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 pt-5 border-t border-border bg-muted/30 p-4 sm:p-5 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="inline-flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                    <span className="text-xs font-black uppercase tracking-widest text-foreground font-oswald">{(activeNodeData ?? mindMapNodes[0]!).category}</span>
                  </div>
                  <span className="text-[10px] font-black uppercase text-white bg-primary px-2.5 py-0.5 font-oswald rounded-sm">
                    {(activeNodeData ?? mindMapNodes[0]!).name}
                  </span>
                </div>
                <p className="text-xs font-bold text-foreground mb-3 font-sans">
                  {(activeNodeData ?? mindMapNodes[0]!).desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(activeNodeData ?? mindMapNodes[0]!).details.map((detail: string, dIdx: number) => (
                    <div key={dIdx} className="p-2.5 bg-card border border-border flex items-start gap-2 text-[11px] text-foreground/80 font-medium font-sans rounded-sm">
                      <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 hidden lg:block overflow-hidden shadow-xl rounded-md border border-border">
              <div className="relative w-full h-full min-h-[560px]">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=85" 
                  alt="Students in Discussion" 
                  className="w-full h-full object-cover brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-5 right-5 text-white space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary font-oswald block">
                    SELECTION SIMULATIONS
                  </span>
                  <p className="text-sm font-bold font-oswald leading-snug">
                    Mock interviews, STAR behavioural panels & collaborative GD sessions.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* LEARN. PRACTISE. PERFORM. */}
      <section className="w-full py-20 sm:py-28 bg-page-bg text-foreground border-b border-border overflow-hidden" id="training-belt-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 text-foreground text-xs font-extrabold tracking-widest uppercase font-oswald mb-2">
              <Activity className="w-3.5 h-3.5 text-primary" />
              <span>CONTINUOUS PRACTICE PIPELINE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-primary tracking-tight font-oswald leading-tight">
              LEARN. PRACTISE. PERFORM.
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-normal pt-1 font-sans">
              Skill development becomes meaningful when students have opportunities to practise what they learn. MSAJCE combines employability training with mock assessments.
            </p>
          </div>

          <div className="mt-8 max-w-4xl mx-auto bg-card border border-border p-6 sm:p-8 shadow-xl text-card-foreground rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs">
          {(() => {
            const activeBelt = trainingBeltItems[activeBeltIdx] ?? trainingBeltItems[0]!;
            return (
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-8 space-y-2">
                  <span className="text-xs font-black uppercase tracking-widest text-primary font-oswald">
                    PIPELINE STAGE {activeBeltIdx + 1} OF {trainingBeltItems.length}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-primary font-oswald">
                    {activeBelt.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground font-medium font-sans">
                    {activeBelt.tagline}
                  </p>
                </div>
                <div className="sm:col-span-4 flex flex-col items-start sm:items-end justify-center border-t sm:border-t-0 sm:border-l border-border pt-4 sm:pt-0 sm:pl-6 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground font-oswald">CURRICULUM VOLUME</span>
                  <span className="text-xl sm:text-2xl font-black text-primary font-oswald">
                    {activeBelt.metric}
                  </span>
                  <span className="text-xs text-primary font-bold font-oswald">
                    {activeBelt.focus}
                  </span>
              </div>
            );
          })()}
          </div>

          <div className="mt-20 pt-12 border-t border-border">
            <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
              <span className="text-primary text-[11px] font-black uppercase tracking-widest inline-block font-oswald mb-2">
                STUDENT CLUBS & ACTIVE PRACTICE
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-primary font-oswald uppercase">
                CLUBS EMPOWERING EVERYDAY PRACTICE
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
              {studentClubs.map((club, cIdx) => (
                <div key={cIdx} className="bg-card border border-border rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs hover:border-primary/40 transition-all duration-200 overflow-hidden shadow-xs p-4 flex flex-col justify-between text-center group">
                  <div className="relative w-full h-36 mb-4 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs overflow-hidden border border-border">
                    <img 
                      src={club.image} 
                      alt={club.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-wider text-primary block font-oswald">
                      {club.tag}
                    </span>
                    <h4 className="text-sm font-black text-foreground font-oswald tracking-tight uppercase">
                      {club.name}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-snug font-normal pt-1 font-sans">
                      {club.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* SPACES DESIGNED FOR PREPARATION */}
      <section className="w-full py-20 sm:py-28 bg-background border-b border-border" id="spaces-designed-for-preparation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 text-foreground text-xs font-extrabold tracking-widest uppercase font-oswald mb-2">
              <Building2 className="w-3.5 h-3.5 text-primary" />
              <span>DEDICATED PLACEMENT INFRASTRUCTURE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-primary tracking-tight font-oswald leading-tight uppercase">
              SPACES DESIGNED FOR PREPARATION
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-normal pt-1 font-sans">
              The Placement Cell provides dedicated facilities to support different stages of student preparation and recruitment.
            </p>
          </div>

          <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[580px] bg-card border border-border overflow-hidden shadow-2xl rounded-md">
            <img 
              src={activeHotspot.image} 
              alt={activeHotspot.name} 
              className="w-full h-full object-cover brightness-[0.7] contrast-105 transition-all duration-700" 
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40" />

            <div className="absolute inset-0 p-4 sm:p-8">
              {facilityHotspots.map((hotspot) => {
                const isSelected = activeHotspotId === hotspot.id;
                
                return (
                  <button
                    key={hotspot.id}
                    onClick={() => setActiveHotspotId(hotspot.id)}
                    className={`absolute ${hotspot.pos} cursor-pointer transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 px-3.5 py-1.5 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs shadow-2xl backdrop-blur-md border ${
                      isSelected
                        ? 'bg-primary text-white border-white/50 z-30'
                        : 'bg-background/80 text-foreground border-border hover:bg-background z-20'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-sm flex items-center justify-center text-[10px] font-black font-oswald ${
                      isSelected ? 'bg-white text-primary' : 'bg-primary text-white'
                    }`}>
                      {hotspot.num}
                    </span>
                    <span className="text-xs font-black tracking-tight font-oswald whitespace-nowrap uppercase">
                      {hotspot.name}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 bg-card/95 backdrop-blur-md p-6 sm:p-8 shadow-2xl text-foreground border-l-4 border-primary rounded-r-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8 space-y-2">
                  <div className="inline-flex items-center gap-2">
                    <span className="text-xs font-black text-primary uppercase tracking-widest font-oswald">
                      FACILITY {(activeHotspot ?? facilityHotspots[0]!).num}
                    </span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs font-bold text-muted-foreground uppercase font-sans">
                      {(activeHotspot ?? facilityHotspots[0]!).sub}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-black text-foreground font-oswald uppercase">
                    {(activeHotspot ?? facilityHotspots[0]!).name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-medium">
                    {activeHotspot.desc}
                  </p>
                </div>

                <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-border pt-4 lg:pt-0 lg:pl-6 space-y-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">
                    KEY EQUIPMENT & SPECIFICATIONS:
                  </span>
                  <div className="grid grid-cols-1 gap-1.5">
                    {activeHotspot.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-foreground font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* LEARNING THE TECHNOLOGIES OF TOMORROW */}
      <section className="w-full py-20 sm:py-28 bg-background border-b border-border" id="technology-centres">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 text-foreground text-xs font-extrabold tracking-widest uppercase mb-2">
              <Cpu className="w-3.5 h-3.5 text-primary" />
              <span>SPECIALISED ADVANCED HUBS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-primary tracking-tight font-oswald leading-tight">
              LEARNING THE TECHNOLOGIES OF TOMORROW
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-normal pt-1">
              MSAJCE has established Technology and Skill Development Centres to educate, train and up-skill students in emerging industrial technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            
            <div className="space-y-6">
              <div className="pb-3 border-b-2 border-primary">
                <span className="text-[11px] font-black uppercase tracking-wider text-primary block">
                  COE & INDUSTRY LABS
                </span>
                <h3 className="text-xl font-black text-foreground font-oswald">
                  Mechanical & Civil Tech
                </h3>
              </div>

              <ul className="space-y-3.5">
                {[
                  { title: '3D Printing & Additive Manufacturing', sub: 'Central Prototyping Facility' },
                  { title: 'Bosch Industry Institute Collaboration', sub: 'Automotive Electronics Lab' },
                  { title: 'Godrej Disha Skill Development Centre', sub: 'Refrigeration & Industrial Automation' },
                  { title: 'UAV / Drone Technology Centre', sub: 'Autonomous Flight Testing Cell' },
                  { title: 'E-Mobility & Electric Powertrain', sub: 'EV Battery & Drive Testing' },
                  { title: 'Building Information Modelling (BIM)', sub: 'Smart Infrastructure Suite' },
                  { title: 'CAE & Computational Design', sub: 'Ansys & SolidWorks Lab' },
                  { title: 'Industrial Robotics & Mechatronics', sub: 'Robotics Assembly Unit' },
                  { title: 'NDT & Quality Testing Lab', sub: 'Materials Testing Cell' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary font-black text-lg leading-none mt-0.5">•</span>
                    <div>
                      <span className="text-sm font-bold text-foreground block font-oswald">
                        {item.title}
                      </span>
                      <span className="text-xs text-muted-foreground font-medium block">
                        {item.sub}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="pb-3 border-b-2 border-[#3E5D7C]">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#3E5D7C] block">
                  EMERGING HARDWARE
                </span>
                <h3 className="text-xl font-black text-foreground font-oswald">
                  ECE & EEE Systems
                </h3>
              </div>

              <ul className="space-y-3.5">
                {[
                  { title: 'Embedded Systems & IoT Innovation Hub', sub: 'Texas Instruments & ARM Lab' },
                  { title: 'APJ Abdul Kalam Innovation Centre', sub: 'Interdisciplinary Incubator' },
                  { title: 'Power Electronics & Smart Grid Lab', sub: 'High Voltage & Microgrid Testing' },
                  { title: 'Renewable Energy & Solar Grid Hub', sub: 'Clean Tech Laboratory' },
                  { title: 'Industrial Automation & PLC Suite', sub: 'SCADA & Industrial Control Systems' },
                  { title: 'Advanced Signal Processing Centre', sub: 'Digital Signal & Image Analysis' },
                  { title: 'Sensor Interfacing & Hardware Lab', sub: 'Embedded Firmware Testing Rig' },
                  { title: 'Wireless Sensor Networks & RF', sub: 'High-Frequency Antenna Research' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#3E5D7C] font-black text-lg leading-none mt-0.5">•</span>
                    <div>
                      <span className="text-sm font-bold text-foreground block font-oswald">
                        {item.title}
                      </span>
                      <span className="text-xs text-muted-foreground font-medium block">
                        {item.sub}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="pb-3 border-b-2 border-primary">
                <span className="text-[11px] font-black uppercase tracking-wider text-primary block">
                  COMPUTATION & CLOUD
                </span>
                <h3 className="text-xl font-black text-foreground font-oswald">
                  CSE & IT Digital Hubs
                </h3>
              </div>

              <ul className="space-y-3.5">
                {[
                  { title: 'Artificial Intelligence & Machine Learning', sub: 'NVIDIA AI Computing Node' },
                  { title: 'Bot Lab & RPA Automation', sub: 'UiPath & Automation Anywhere Lab' },
                  { title: 'Cisco Networking Academy', sub: 'CCNA / CCNP Routing & Switching' },
                  { title: 'Gaming & AR/VR Immersive Studio', sub: 'Unity / Unreal Engine Suite' },
                  { title: 'CodeTantra Coding Learning Centre', sub: 'Interactive Algorithmic Sandbox' },
                  { title: 'Cloud Computing & DevOps Center', sub: 'AWS & Azure Cloud Virtualization' },
                  { title: 'Blockchain & Distributed Ledger Centre', sub: 'Web3 & Smart Contracts Lab' },
                  { title: 'Cyber Security & Ethical Hacking', sub: 'Threat Intelligence Simulation Rig' },
                  { title: 'Mobile & Web Application Development', sub: 'Cross-Platform Full-Stack Studio' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary font-black text-lg leading-none mt-0.5">•</span>
                    <div>
                      <span className="text-sm font-bold text-foreground block font-oswald">
                        {item.title}
                      </span>
                      <span className="text-xs text-muted-foreground font-medium block">
                        {item.sub}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* CAREER DIRECTION STARTS WITH GUIDANCE */}
      <section className="w-full py-20 sm:py-28 bg-page-bg text-foreground border-b border-border" id="career-counselling-guidance">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#9E2339] text-white text-xs font-extrabold tracking-widest uppercase shadow-sm">
              <Compass className="w-3.5 h-3.5 text-blue-300" />
              <span>INDIVIDUAL MENTORING & PATHWAYS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight font-oswald leading-tight">
              CAREER DIRECTION STARTS WITH GUIDANCE
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-medium pt-1">
              Career counselling is available on the MSAJCE campus to help students identify pathways that meet their individual requirements.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-transparent p-4 sm:p-6">
            <div className="flex justify-center mb-8">
              <div className="px-10 py-3.5 bg-[#9E2339] text-white shadow-xl text-center">
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">STARTING POINT</span>
                <h4 className="text-xl sm:text-2xl font-black font-oswald">STUDENT</h4>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              <div className="bg-white p-7 shadow-xl space-y-3 text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#9E2339]/10 text-primary flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="text-xs font-extrabold text-primary uppercase tracking-wider block">PATHWAY 01</span>
                <h4 className="text-lg font-black text-[#9E2339] font-oswald">JOB & EMPLOYMENT</h4>
                <div className="py-1 text-[#9E2339]/40 font-bold text-xs">↓</div>
                <div className="p-3 bg-[#9E2339]/5 text-xs font-bold text-[#9E2339]">
                  INDUSTRY PLACEMENT
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  On-campus drives, product companies, core engineering firms & IT consulting.
                </p>
              </div>

              <div className="bg-white p-7 shadow-xl space-y-3 text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#9E2339]/10 text-[#3E5D7C] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-xs font-extrabold text-[#3E5D7C] uppercase tracking-wider block">PATHWAY 02</span>
                <h4 className="text-lg font-black text-[#9E2339] font-oswald">HIGHER STUDIES</h4>
                <div className="py-1 text-[#9E2339]/40 font-bold text-xs">↓</div>
                <div className="p-3 bg-[#9E2339]/5 text-xs font-bold text-[#9E2339]">
                  RESEARCH & GLOBAL MASTERS
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  GATE, GRE, TOEFL guidance via the Higher Education Cell for premier universities.
                </p>
              </div>

              <div className="bg-white p-7 shadow-xl space-y-3 text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#9E2339]/10 text-[#9E2339] flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-xs font-extrabold text-[#9E2339] uppercase tracking-wider block">PATHWAY 03</span>
                <h4 className="text-lg font-black text-[#9E2339] font-oswald">OTHER PATHS</h4>
                <div className="py-1 text-[#9E2339]/40 font-bold text-xs">↓</div>
                <div className="p-3 bg-[#9E2339]/5 text-xs font-bold text-[#9E2339]">
                  ENTREPRENEURSHIP & STARTUPS
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  Incubation support, MSME grants, and seed funding assistance through innovation cells.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* LEARNING BEYOND THE CLASSROOM */}
      <section className="w-full py-20 sm:py-28 bg-muted/30" id="learning-beyond-classroom">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex flex-col items-center justify-center text-center space-y-2 mb-6">
            <div className="px-4 py-1.5 bg-primary text-primary-foreground text-xs font-black tracking-widest uppercase shadow-md">
              MSAJCE
            </div>
            <span className="text-[11px] font-extrabold text-primary tracking-widest uppercase">
              LEARN • EXPERIENCE • GROW
            </span>
          </div>

          <div className="text-center mb-14 space-y-2">
            <h2 className="text-3xl sm:text-5xl font-black text-foreground tracking-tight font-oswald leading-tight">
              LEARNING BEYOND THE CLASSROOM
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground font-medium">
              Where experience becomes part of learning.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2 sm:gap-2.5">
              {galleryRow1.map((photo, pIdx) => (
                <div 
                  key={pIdx}
                  className="relative aspect-4/3 rounded-xs overflow-hidden group cursor-pointer shadow-xs transition-all duration-300"
                >
                  <img 
                    src={photo.img} 
                    alt={photo.title} 
                    className="w-full h-full object-cover brightness-95" 
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-white bg-primary px-1.5 py-0.5 shadow-xs">
                      {photo.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-2 sm:gap-2.5 max-w-[95%] mx-auto">
              {galleryRow2.map((photo, pIdx) => (
                <div 
                  key={pIdx}
                  className="relative aspect-4/3 rounded-xs overflow-hidden group cursor-pointer shadow-xs transition-all duration-300"
                >
                  <img 
                    src={photo.img} 
                    alt={photo.title} 
                    className="w-full h-full object-cover brightness-95" 
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-white bg-[#059669] px-1.5 py-0.5 shadow-xs">
                      {photo.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-2.5 max-w-[88%] mx-auto">
              {galleryRow3.map((photo, pIdx) => (
                <div 
                  key={pIdx}
                  className="relative aspect-4/3 rounded-xs overflow-hidden group cursor-pointer shadow-xs transition-all duration-300"
                >
                  <img 
                    src={photo.img} 
                    alt={photo.title} 
                    className="w-full h-full object-cover brightness-95" 
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-white bg-primary px-1.5 py-0.5 shadow-xs">
                      {photo.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-2.5 max-w-[78%] mx-auto">
              {galleryRow4.map((photo, pIdx) => (
                <div 
                  key={pIdx}
                  className="relative aspect-4/3 rounded-xs overflow-hidden group cursor-pointer shadow-xs transition-all duration-300"
                >
                  <img 
                    src={photo.img} 
                    alt={photo.title} 
                    className="w-full h-full object-cover brightness-95" 
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-white bg-[#059669] px-1.5 py-0.5 shadow-xs">
                      {photo.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-border text-center space-y-3">
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-foreground font-oswald tracking-tight">
              LEARNING DOESN'T STOP <br className="hidden sm:inline" />WHEN THE CLASSROOM ENDS.
            </h3>
            <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#059669]">
              TRAINING • TECHNOLOGY • INDUSTRY • EXPERIENCE
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
