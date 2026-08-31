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
import { Facility } from '../../types';

interface TrainingSectionProps {
  onOpenFacility?: (facility: Facility) => void;
  onNavigate?: (sectionId: string) => void;
}

export const TrainingSection: React.FC<TrainingSectionProps> = ({ onOpenFacility, onNavigate }) => {
  // State for Mind Map active node
  const [activeMindNode, setActiveMindNode] = useState<string>('aptitude');
  
  // State for active item in Training Belt
  const [activeBeltIdx, setActiveBeltIdx] = useState<number>(0);

  // State for Active Facility Hotspot
  const [activeHotspotId, setActiveHotspotId] = useState<string>('lab');

  // State for Technology Centre category filter
  const [selectedTechDomain, setSelectedTechDomain] = useState<'ALL' | 'MECH_CIVIL' | 'ECE_EEE' | 'CSE_IT'>('ALL');

  // -------------------------------------------------------------
  // 01. HERO FLOATING PHOTOS (14 Scattered Photos: 8 Big + 6 Small across canvas)
  // -------------------------------------------------------------
  const heroFloatingPhotos = [
    // Left & Left-Center Scattered (4 Big + 3 Small)
    {
      id: 'h-scat-1',
      label: 'APTITUDE',
      title: 'Speed Math & Logic',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&auto=format&fit=crop&q=80',
      pos: 'top-[8%] left-[6%]',
      size: 'w-28 sm:w-36 lg:w-44 h-36 sm:h-44 lg:h-52',
      rotate: '-rotate-4',
      color: 'bg-[#0052CC]'
    },
    {
      id: 'h-scat-2',
      label: 'TECHNICAL',
      title: 'Full-Stack Coding Lab',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop&q=80',
      pos: 'top-[36%] left-[12%]',
      size: 'w-30 sm:w-40 lg:w-48 h-38 sm:h-48 lg:h-56',
      rotate: 'rotate-3',
      color: 'bg-[#0D9488]'
    },
    {
      id: 'h-scat-3',
      label: 'ONLINE CBT LAB',
      title: '600+ Testing Terminals',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&auto=format&fit=crop&q=80',
      pos: 'bottom-[14%] left-[4%]',
      size: 'w-28 sm:w-36 lg:w-42 h-34 sm:h-42 lg:h-48',
      rotate: '-rotate-3',
      color: 'bg-[#0052CC]'
    },
    {
      id: 'h-scat-4',
      label: 'INDUSTRY CONCLAVE',
      title: 'Corporate Expert Series',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&auto=format&fit=crop&q=80',
      pos: 'bottom-[4%] left-[20%]',
      size: 'w-26 sm:w-34 lg:w-40 h-32 sm:h-40 lg:h-46',
      rotate: 'rotate-2',
      color: 'bg-[#0D9488]'
    },
    {
      id: 'h-scat-5',
      label: 'REASONING',
      title: 'Speed Math Drills',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&auto=format&fit=crop&q=80',
      pos: 'top-[16%] left-[22%]',
      size: 'w-20 sm:w-26 lg:w-30 h-24 sm:h-30 lg:h-36',
      rotate: 'rotate-6',
      color: 'bg-[#0052CC]'
    },
    {
      id: 'h-scat-6',
      label: 'ALGORITHMS',
      title: 'Coding Sandbox',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&auto=format&fit=crop&q=80',
      pos: 'top-[60%] left-[6%]',
      size: 'w-20 sm:w-24 lg:w-28 h-22 sm:h-28 lg:h-34',
      rotate: '-rotate-6',
      color: 'bg-[#0D9488]'
    },
    {
      id: 'h-scat-7',
      label: 'FOUNDATION',
      title: 'Diagnostic Test',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&auto=format&fit=crop&q=80',
      pos: 'top-[78%] left-[16%]',
      size: 'w-18 sm:w-22 lg:w-26 h-20 sm:h-26 lg:h-30',
      rotate: 'rotate-4',
      color: 'bg-[#0052CC]'
    },

    // Right & Right-Center Scattered (4 Big + 3 Small)
    {
      id: 'h-scat-8',
      label: 'MOCK INTERVIEW',
      title: 'STAR Behavioral Panel',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=80',
      pos: 'top-[8%] right-[6%]',
      size: 'w-28 sm:w-36 lg:w-44 h-36 sm:h-44 lg:h-52',
      rotate: 'rotate-4',
      color: 'bg-[#0D9488]'
    },
    {
      id: 'h-scat-9',
      label: 'GROUP DISCUSSION',
      title: 'Acoustic GD Suite',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80',
      pos: 'top-[36%] right-[12%]',
      size: 'w-30 sm:w-40 lg:w-48 h-38 sm:h-48 lg:h-56',
      rotate: '-rotate-3',
      color: 'bg-[#0052CC]'
    },
    {
      id: 'h-scat-10',
      label: 'CAREER GUIDANCE',
      title: '1-on-1 Faculty Mentoring',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&auto=format&fit=crop&q=80',
      pos: 'bottom-[14%] right-[4%]',
      size: 'w-28 sm:w-36 lg:w-42 h-34 sm:h-42 lg:h-48',
      rotate: 'rotate-3',
      color: 'bg-[#0D9488]'
    },
    {
      id: 'h-scat-11',
      label: 'CAMPUS DRIVE',
      title: 'Recruiter Interaction',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=80',
      pos: 'bottom-[4%] right-[20%]',
      size: 'w-26 sm:w-34 lg:w-40 h-32 sm:h-40 lg:h-46',
      rotate: '-rotate-2',
      color: 'bg-[#0052CC]'
    },
    {
      id: 'h-scat-12',
      label: 'HR SELECTION',
      title: 'Executive Panel',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=80',
      pos: 'top-[16%] right-[22%]',
      size: 'w-20 sm:w-26 lg:w-30 h-24 sm:h-30 lg:h-36',
      rotate: '-rotate-6',
      color: 'bg-[#0D9488]'
    },
    {
      id: 'h-scat-13',
      label: 'ORATORY',
      title: 'Verbal Articulation',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&auto=format&fit=crop&q=80',
      pos: 'top-[60%] right-[6%]',
      size: 'w-20 sm:w-24 lg:w-28 h-22 sm:h-28 lg:h-34',
      rotate: 'rotate-5',
      color: 'bg-[#0052CC]'
    },
    {
      id: 'h-scat-14',
      label: 'GRADUATION',
      title: 'Placement Success',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&auto=format&fit=crop&q=80',
      pos: 'top-[78%] right-[16%]',
      size: 'w-18 sm:w-22 lg:w-26 h-20 sm:h-26 lg:h-30',
      rotate: '-rotate-4',
      color: 'bg-[#0D9488]'
    }
  ];

  // -------------------------------------------------------------
  // 03B. STUDENT CLUBS WITH TRIANGLE PHOTOGRAPHS (NO BORDERS)
  // -------------------------------------------------------------
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

  // -------------------------------------------------------------
  // 02. MIND MAP NODES
  // -------------------------------------------------------------
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
      color: '#0052CC'
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
      color: '#0D9488'
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
      color: '#0052CC'
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
      color: '#0D9488'
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
      color: '#0052CC'
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
      color: '#0D9488'
    }
  ];

  const activeNodeData = mindMapNodes.find(n => n.id === activeMindNode) || mindMapNodes[0];

  // -------------------------------------------------------------
  // 03. TRAINING BELT ITEMS
  // -------------------------------------------------------------
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

  // -------------------------------------------------------------
  // 04. SPACES DESIGNED FOR PREPARATION (HOTSPOTS)
  // -------------------------------------------------------------
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

  const activeHotspot = facilityHotspots.find(h => h.id === activeHotspotId) || facilityHotspots[0];

  // -------------------------------------------------------------
  // 05. TECHNOLOGY CENTRES (OFFICIAL MSAJCE HUBS)
  // -------------------------------------------------------------
  const techCentres = [
    // Mechanical & Civil
    { name: '3D Printing & Additive Manufacturing', domain: 'MECH_CIVIL', lab: 'Central Prototyping Facility', icon: Box },
    { name: 'CAE & Computational Design', domain: 'MECH_CIVIL', lab: 'Ansys & SolidWorks Lab', icon: Cpu },
    { name: 'Industrial Robotics & Mechatronics', domain: 'MECH_CIVIL', lab: 'Robotics Assembly Unit', icon: Bot },
    { name: 'NDT & Quality Testing Lab', domain: 'MECH_CIVIL', lab: 'Materials Testing Cell', icon: Microscope },
    { name: 'Building Information Modelling (BIM)', domain: 'MECH_CIVIL', lab: 'Smart Infrastructure Suite', icon: Building2 },

    // ECE & EEE
    { name: 'Embedded Systems & IoT Innovation Hub', domain: 'ECE_EEE', lab: 'Texas Instruments & ARM Lab', icon: Cpu },
    { name: 'UAV / Drone Technology Centre', domain: 'ECE_EEE', lab: 'Autonomous Flight Testing Cell', icon: Plane },
    { name: 'Godrej Disha Skill Development Centre', domain: 'ECE_EEE', lab: 'Refrigeration & Industrial Automation', icon: Zap },
    { name: 'Bosch Industry Institute Collaboration', domain: 'ECE_EEE', lab: 'Automotive Electronics Lab', icon: Activity },
    { name: 'E-Mobility & Electric Powertrain', domain: 'ECE_EEE', lab: 'EV Battery & Drive Testing', icon: Zap },
    { name: 'Renewable Energy & Solar Grid Hub', domain: 'ECE_EEE', lab: 'Clean Tech Laboratory', icon: Flame },
    { name: 'APJ Abdul Kalam Innovation Centre', domain: 'ECE_EEE', lab: 'Interdisciplinary Incubator', icon: Sparkles },

    // CSE & IT
    { name: 'Bot Lab & Robotics Process Automation (RPA)', domain: 'CSE_IT', lab: 'UiPath & Automation Anywhere Lab', icon: Bot },
    { name: 'Cisco Networking Academy', domain: 'CSE_IT', lab: 'CCNA / CCNP Routing & Switching', icon: Globe },
    { name: 'CodeTantra Coding Learning Centre', domain: 'CSE_IT', lab: 'Interactive Algorithmic Sandbox', icon: Code2 },
    { name: 'Gaming & AR/VR Studio', domain: 'CSE_IT', lab: 'Unity / Unreal Immersive Studio', icon: Laptop },
    { name: 'Artificial Intelligence & Machine Learning', domain: 'CSE_IT', lab: 'NVIDIA AI Computing Node', icon: BrainCircuit },
    { name: 'Blockchain & Distributed Ledger Centre', domain: 'CSE_IT', lab: 'Web3 & Smart Contracts Lab', icon: Binary },
    { name: 'Mobile & Web Application Development', domain: 'CSE_IT', lab: 'Cross-Platform App Studio', icon: Laptop }
  ];

  const filteredTechCentres = selectedTechDomain === 'ALL' 
    ? techCentres 
    : techCentres.filter(t => t.domain === selectedTechDomain);

  // Row 1 & Row 2 items for bidirectional marquee
  const row1Tech = techCentres.slice(0, 10);
  const row2Tech = techCentres.slice(10);

  // -------------------------------------------------------------
  // 07. MASSIVE 10 -> 9 -> 8 -> 7 PHOTO GALLERY (EXACTLY 34 REALISTIC PHOTOS)
  // -------------------------------------------------------------
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
    <div className="w-full bg-white text-[#10243E] overflow-hidden selection:bg-[#0052CC] selection:text-white">
      
      {/* ========================================================================= */}
      {/* SECTION 01 — CREATIVE HERO: SKILLS. TRAINING. READINESS. */}
      {/* 2% Translucent blue over clearly visible college background, scattered photos, elegant typography */}
      {/* ========================================================================= */}
      <section 
        className="relative w-full min-h-[680px] lg:min-h-[760px] flex items-center justify-center bg-slate-900 text-white overflow-hidden py-16 sm:py-20" 
        id="skills-hero-banner"
      >
        {/* CLEARLY VISIBLE COLLEGE CAMPUS BACKGROUND WITH ~2% TRANSLUCENT BLUE TINT */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=1600&auto=format&fit=crop&q=90" 
            alt="College Campus Infrastructure" 
            className="w-full h-full object-cover opacity-90 brightness-95 contrast-105"
          />
          {/* ~2% Translucent blue tone overlay */}
          <div className="absolute inset-0 bg-[#082B5C]/20 backdrop-blur-[0.5px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/50" />
        </div>
        
        {/* Subtle Atmosphere Light */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#0052CC]/15 rounded-full blur-3xl pointer-events-none z-0" />

        {/* SCATTERED FLOATING PHOTOGRAPHS (Not sticking strictly to extreme edges) */}
        <div className="absolute inset-0 pointer-events-none z-10 hidden lg:block overflow-hidden">
          {heroFloatingPhotos.map((card) => (
            <div
              key={card.id}
              className={`absolute ${card.pos} ${card.size} ${card.rotate} transition-all duration-700 hover:scale-105 hover:z-30 pointer-events-auto group`}
            >
              <div className="w-full h-full bg-white/20 p-1.5 shadow-2xl backdrop-blur-xs rounded-sm overflow-hidden flex flex-col border border-white/40">
                <div className="relative w-full flex-1 overflow-hidden rounded-xs">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover brightness-95 group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                  
                  {/* Floating Tag */}
                  <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between">
                    <span className={`px-2 py-0.5 text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-white ${card.color} shadow-xs`}>
                      {card.label}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CENTER HERO CONTENT */}
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto space-y-4">
          
          {/* Small Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-black/40 backdrop-blur-md border border-white/30 text-blue-100 text-[11px] font-black tracking-widest uppercase shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#0D9488] animate-pulse" />
            <span>MSAJCE PLACEMENT CELL</span>
          </div>

          {/* Main Heading — Small, Refined & Elegant */}
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-['Outfit',sans-serif] leading-snug drop-shadow-md">
              <span className="inline-block px-1">SKILLS.</span>
              <span className="inline-block px-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-sky-100 to-teal-200">
                TRAINING.
              </span>
              <span className="inline-block px-1">READINESS.</span>
            </h1>
          </div>

          {/* Action Navigation Pill */}
          <div className="pt-1 flex flex-wrap items-center justify-center gap-3">
            <a 
              href="#mind-map-section"
              className="px-5 py-2.5 bg-[#0052CC] hover:bg-[#003d99] text-white text-xs font-black tracking-widest uppercase transition-all duration-200 shadow-lg cursor-pointer inline-flex items-center gap-2"
            >
              <span>Explore Skill Ecosystem</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a 
              href="#technology-centres"
              className="px-5 py-2.5 bg-black/40 hover:bg-black/60 text-white text-xs font-black tracking-widest uppercase transition-all duration-200 border border-white/30 cursor-pointer inline-flex items-center gap-2 backdrop-blur-md"
            >
              <span>Technology Centres</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Hero Paragraph (Placed Down at Bottom of Hero Block) */}
          <div className="pt-4 border-t border-white/20">
            <p className="text-xs sm:text-sm text-white/95 font-medium leading-relaxed max-w-xl mx-auto drop-shadow-sm">
              In a competitive job market, professional readiness requires more than academic knowledge. MSAJCE's Placement Cell supports students in developing the skills, experience and confidence required to approach professional opportunities through structured training, certification, industry exposure and recruitment preparation.
            </p>
          </div>

        </div>

      </section>

      {/* ========================================================================= */}
      {/* SECTION 02 — BUILDING THE SKILLS INDUSTRY EXPECTS (LEFT & RIGHT IMAGES + CENTER HEXAGONS) */}
      {/* Elongated left & right images (no border), Center Hexagons in Matte Green & Dark Green text (no border) */}
      {/* ========================================================================= */}
      <section className="w-full py-20 sm:py-28 bg-[#F8FAFC]" id="mind-map-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#DCEEFF] text-[#082B5C] text-xs font-extrabold tracking-widest uppercase">
              <BrainCircuit className="w-3.5 h-3.5 text-[#0052CC]" />
              <span>COMPREHENSIVE SKILL ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#082B5C] tracking-tight font-['Outfit',sans-serif] leading-tight">
              BUILDING THE SKILLS INDUSTRY EXPECTS
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal pt-1">
              MSAJCE's training approach focuses on developing employability skills alongside academic learning. The Placement Cell provides training in aptitude, communication and technical skills, while value-added certification courses help students gain domain-specific knowledge. The institution also conducts mock aptitude tests, mock interviews and mock group discussions to help students approach recruitment processes with greater confidence.
            </p>
          </div>

          {/* THREE-PART SECTION: LEFT ELONGATED IMAGE | CENTER HEXAGON MIND MAP | RIGHT ELONGATED IMAGE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-stretch">
            
            {/* LEFT ELONGATED RECTANGLE IMAGE (STRICTLY NO BORDER) */}
            <div className="lg:col-span-3 hidden lg:block overflow-hidden shadow-xl">
              <div className="relative w-full h-full min-h-[560px]">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=85" 
                  alt="Students in Technical Lab" 
                  className="w-full h-full object-cover brightness-95 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082B5C]/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-5 right-5 text-white space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#86EFAC] block">
                    TECHNICAL LABS
                  </span>
                  <p className="text-sm font-bold font-['Outfit',sans-serif] leading-snug">
                    Hands-on coding, simulation and advanced terminal problem-solving.
                  </p>
                </div>
              </div>
            </div>

            {/* CENTER: HEXAGON ECOSYSTEM CANVAS (DEEP ROYAL MATTE GREEN WITH DARK YELLOW & WHITE LETTERS) */}
            <div className="lg:col-span-6 flex flex-col justify-between bg-white p-6 sm:p-8 shadow-xl">
              
              {/* Top central indicator */}
              <div className="text-center mb-6">
                <span className="text-[11px] font-black uppercase tracking-widest text-[#F59E0B] bg-[#0B3B2B] px-4 py-1.5 inline-block shadow-xs">
                  INTERCONNECTED DEVELOPMENT PILLARS
                </span>
              </div>

              {/* HEXAGON NODES GRID */}
              <div className="space-y-4">
                
                {/* ROW 1: TOP 2 HEXAGONS */}
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                  {/* Hexagon 1: APTITUDE */}
                  <button
                    onClick={() => setActiveMindNode('aptitude')}
                    className={`relative w-32 sm:w-36 h-36 sm:h-40 flex flex-col items-center justify-center p-3 text-center transition-transform duration-300 hover:scale-105 cursor-pointer shadow-lg ${
                      activeMindNode === 'aptitude' ? 'bg-[#06281C] ring-4 ring-[#F59E0B] scale-105' : 'bg-[#0B3B2B] hover:bg-[#0F4E3A]'
                    }`}
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                  >
                    <BrainCircuit className="w-5 h-5 text-[#F59E0B] mb-1 shrink-0" />
                    <span className="text-[11px] sm:text-xs font-black text-[#F59E0B] uppercase font-['Outfit',sans-serif] leading-tight block">
                      APTITUDE
                    </span>
                    <span className="text-[9px] text-white font-bold leading-tight mt-0.5 hidden sm:block">
                      Speed & Logic
                    </span>
                  </button>

                  {/* Hexagon 2: COMMUNICATION */}
                  <button
                    onClick={() => setActiveMindNode('communication')}
                    className={`relative w-32 sm:w-36 h-36 sm:h-40 flex flex-col items-center justify-center p-3 text-center transition-transform duration-300 hover:scale-105 cursor-pointer shadow-lg ${
                      activeMindNode === 'communication' ? 'bg-[#06281C] ring-4 ring-[#F59E0B] scale-105' : 'bg-[#0B3B2B] hover:bg-[#0F4E3A]'
                    }`}
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                  >
                    <MessageSquareText className="w-5 h-5 text-[#F59E0B] mb-1 shrink-0" />
                    <span className="text-[11px] sm:text-xs font-black text-[#F59E0B] uppercase font-['Outfit',sans-serif] leading-tight block">
                      COMMUNICATION
                    </span>
                    <span className="text-[9px] text-white font-bold leading-tight mt-0.5 hidden sm:block">
                      Verbal Mastery
                    </span>
                  </button>
                </div>

                {/* ROW 2: CENTER ROW (TECHNICAL - STUDENT CORE - CERTIFICATION) */}
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
                  
                  {/* Hexagon 3: TECHNICAL */}
                  <button
                    onClick={() => setActiveMindNode('technical')}
                    className={`relative w-30 sm:w-34 h-34 sm:h-38 flex flex-col items-center justify-center p-3 text-center transition-transform duration-300 hover:scale-105 cursor-pointer shadow-lg ${
                      activeMindNode === 'technical' ? 'bg-[#06281C] ring-4 ring-[#F59E0B] scale-105' : 'bg-[#0B3B2B] hover:bg-[#0F4E3A]'
                    }`}
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                  >
                    <Code2 className="w-5 h-5 text-[#F59E0B] mb-1 shrink-0" />
                    <span className="text-[11px] sm:text-xs font-black text-[#F59E0B] uppercase font-['Outfit',sans-serif] leading-tight block">
                      TECHNICAL
                    </span>
                    <span className="text-[9px] text-white font-bold leading-tight mt-0.5 hidden sm:block">
                      Core Domain
                    </span>
                  </button>

                  {/* CENTER CORE: STUDENTS HEXAGON (DEEP ROYAL MATTE GREEN, DARK YELLOW & WHITE) */}
                  <div
                    className="relative w-36 sm:w-44 h-40 sm:h-48 bg-[#06281E] flex flex-col items-center justify-center p-3 text-center shadow-2xl z-10 border-none"
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                  >
                    <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-[#F59E0B] mb-1 animate-pulse" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/90 block">
                      CENTRAL CORE
                    </span>
                    <h3 className="text-base sm:text-xl font-black text-[#F59E0B] tracking-tight font-['Outfit',sans-serif]">
                      STUDENT
                    </h3>
                  </div>

                  {/* Hexagon 4: CERTIFICATION */}
                  <button
                    onClick={() => setActiveMindNode('certification')}
                    className={`relative w-30 sm:w-34 h-34 sm:h-38 flex flex-col items-center justify-center p-3 text-center transition-transform duration-300 hover:scale-105 cursor-pointer shadow-lg ${
                      activeMindNode === 'certification' ? 'bg-[#06281C] ring-4 ring-[#F59E0B] scale-105' : 'bg-[#0B3B2B] hover:bg-[#0F4E3A]'
                    }`}
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                  >
                    <Microscope className="w-5 h-5 text-[#F59E0B] mb-1 shrink-0" />
                    <span className="text-[10px] sm:text-xs font-black text-[#F59E0B] uppercase font-['Outfit',sans-serif] leading-tight block">
                      CERTIFICATION
                    </span>
                    <span className="text-[9px] text-white font-bold leading-tight mt-0.5 hidden sm:block">
                      Value Add
                    </span>
                  </button>

                </div>

                {/* ROW 3: BOTTOM 2 HEXAGONS (INTERVIEW - GROUP DISCUSSION) */}
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                  
                  {/* Hexagon 5: INTERVIEW */}
                  <button
                    onClick={() => setActiveMindNode('interview')}
                    className={`relative w-32 sm:w-36 h-36 sm:h-40 flex flex-col items-center justify-center p-3 text-center transition-transform duration-300 hover:scale-105 cursor-pointer shadow-lg ${
                      activeMindNode === 'interview' ? 'bg-[#06281C] ring-4 ring-[#F59E0B] scale-105' : 'bg-[#0B3B2B] hover:bg-[#0F4E3A]'
                    }`}
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                  >
                    <Users className="w-5 h-5 text-[#F59E0B] mb-1 shrink-0" />
                    <span className="text-[11px] sm:text-xs font-black text-[#F59E0B] uppercase font-['Outfit',sans-serif] leading-tight block">
                      INTERVIEW
                    </span>
                    <span className="text-[9px] text-white font-bold leading-tight mt-0.5 hidden sm:block">
                      Mock Panels
                    </span>
                  </button>

                  {/* Hexagon 6: GROUP DISCUSSION */}
                  <button
                    onClick={() => setActiveMindNode('group-discussion')}
                    className={`relative w-32 sm:w-36 h-36 sm:h-40 flex flex-col items-center justify-center p-3 text-center transition-transform duration-300 hover:scale-105 cursor-pointer shadow-lg ${
                      activeMindNode === 'group-discussion' ? 'bg-[#06281C] ring-4 ring-[#F59E0B] scale-105' : 'bg-[#0B3B2B] hover:bg-[#0F4E3A]'
                    }`}
                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                  >
                    <Laptop className="w-5 h-5 text-[#F59E0B] mb-1 shrink-0" />
                    <span className="text-[10px] sm:text-xs font-black text-[#F59E0B] uppercase font-['Outfit',sans-serif] leading-tight block">
                      GROUP DISCUSSION
                    </span>
                    <span className="text-[9px] text-white font-bold leading-tight mt-0.5 hidden sm:block">
                      Discourse
                    </span>
                  </button>

                </div>

              </div>

              {/* Active Node Detail Card below Hexagon Constellation */}
              <div className="mt-8 pt-5 border-t border-slate-100 bg-[#F8FAFC] p-4 sm:p-5">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="inline-flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0B3B2B]" />
                    <span className="text-xs font-black uppercase tracking-widest text-[#0B3B2B]">{activeNodeData.category}</span>
                  </div>
                  <span className="text-[10px] font-black uppercase text-[#F59E0B] bg-[#0B3B2B] px-2.5 py-0.5">
                    {activeNodeData.name}
                  </span>
                </div>
                <p className="text-xs font-bold text-[#082B5C] mb-3">
                  {activeNodeData.desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {activeNodeData.details.map((detail, dIdx) => (
                    <div key={dIdx} className="p-2.5 bg-white shadow-xs flex items-start gap-2 text-[11px] text-slate-700 font-medium">
                      <CheckCircle className="w-3.5 h-3.5 text-[#0B3B2B] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT ELONGATED RECTANGLE IMAGE (STRICTLY NO BORDER) */}
            <div className="lg:col-span-3 hidden lg:block overflow-hidden shadow-xl">
              <div className="relative w-full h-full min-h-[560px]">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=85" 
                  alt="Students in Discussion and Interview Panel" 
                  className="w-full h-full object-cover brightness-95 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#082B5C]/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-5 right-5 text-white space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#86EFAC] block">
                    SELECTION SIMULATIONS
                  </span>
                  <p className="text-sm font-bold font-['Outfit',sans-serif] leading-snug">
                    Mock interviews, STAR behavioural panels & collaborative GD sessions.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 03 — LEARN. PRACTISE. PERFORM. (YELLOW BACKGROUND + 5 TRIANGLES) */}
      {/* ========================================================================= */}
      <section className="w-full py-20 sm:py-28 bg-[#FACC15] text-[#082B5C] overflow-hidden" id="training-belt-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#082B5C] text-white text-xs font-extrabold tracking-widest uppercase shadow-sm">
              <Activity className="w-3.5 h-3.5 text-[#FACC15]" />
              <span>CONTINUOUS PRACTICE PIPELINE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#082B5C] tracking-tight font-['Outfit',sans-serif] leading-tight">
              LEARN. PRACTISE. PERFORM.
            </h2>
            <p className="text-[#082B5C]/90 text-base sm:text-lg leading-relaxed font-medium pt-1">
              Skill development becomes meaningful when students have opportunities to practise what they learn. MSAJCE combines employability training with mock assessments, interviews, group discussions and workshops conducted by industrial experts. These activities help students become familiar with professional expectations while gaining exposure to current technological developments.
            </p>
          </div>

          {/* GIANT HORIZONTAL MOVING STRIP */}
          <div className="relative w-full overflow-hidden py-4 my-6 bg-[#082B5C]/10 border-y border-[#082B5C]/20">
            <div className="flex shrink-0 animate-marquee items-center gap-8 whitespace-nowrap">
              {[...trainingBeltItems, ...trainingBeltItems].map((item, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveBeltIdx(idx % trainingBeltItems.length)}
                  className={`px-6 py-3 cursor-pointer transition-all duration-200 flex items-center gap-4 ${
                    activeBeltIdx === (idx % trainingBeltItems.length)
                      ? 'bg-[#082B5C] text-white shadow-md'
                      : 'hover:bg-[#082B5C]/15 text-[#082B5C]'
                  }`}
                >
                  <span className="text-base sm:text-lg font-black tracking-wider font-['Outfit',sans-serif]">
                    {item.title}
                  </span>
                  <span className="text-[#0052CC] font-bold text-sm">→</span>
                </div>
              ))}
            </div>
          </div>

          {/* ACTIVE BELT DETAIL SHOWCASE */}
          <div className="mt-8 max-w-4xl mx-auto bg-white p-6 sm:p-8 shadow-xl text-[#082B5C]">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-8 space-y-2">
                <span className="text-xs font-black uppercase tracking-widest text-[#0052CC]">
                  PIPELINE STAGE {activeBeltIdx + 1} OF {trainingBeltItems.length}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#082B5C] font-['Outfit',sans-serif]">
                  {trainingBeltItems[activeBeltIdx].title}
                </h3>
                <p className="text-sm sm:text-base text-slate-700 font-medium">
                  {trainingBeltItems[activeBeltIdx].tagline}
                </p>
              </div>
              <div className="sm:col-span-4 flex flex-col items-start sm:items-end justify-center border-t sm:border-t-0 sm:border-l border-slate-200 pt-4 sm:pt-0 sm:pl-6 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">CURRICULUM VOLUME</span>
                <span className="text-xl sm:text-2xl font-black text-[#082B5C] font-['Outfit',sans-serif]">
                  {trainingBeltItems[activeBeltIdx].metric}
                </span>
                <span className="text-xs text-[#0D9488] font-bold">
                  {trainingBeltItems[activeBeltIdx].focus}
                </span>
              </div>
            </div>
          </div>

          {/* 5 TRIANGLE STUDENT CLUBS SECTION (NO BORDERS) */}
          <div className="mt-20 pt-12 border-t border-[#082B5C]/20">
            <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
              <span className="px-3 py-1 bg-[#082B5C] text-white text-[11px] font-black uppercase tracking-widest inline-block">
                STUDENT CLUBS & ACTIVE PRACTICE
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-[#082B5C] font-['Outfit',sans-serif]">
                CLUBS EMPOWERING EVERYDAY PRACTICE
              </h3>
              <p className="text-[#082B5C]/85 text-sm sm:text-base font-medium">
                Hands-on creative, technological and leadership forums where theory translates into everyday mastery.
              </p>
            </div>

            {/* 5 TRIANGLE CARDS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 items-start">
              {studentClubs.map((club, cIdx) => (
                <div key={cIdx} className="text-center group flex flex-col items-center">
                  
                  {/* Triangle Image Container (Strictly NO BORDER) */}
                  <div className="relative w-40 h-40 sm:w-44 sm:h-44 mb-4 flex items-center justify-center">
                    <div 
                      className="w-full h-full overflow-hidden transition-transform duration-500 group-hover:scale-105 shadow-md"
                      style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
                    >
                      <img 
                        src={club.image} 
                        alt={club.name} 
                        className="w-full h-full object-cover brightness-95 group-hover:scale-110 transition-transform duration-700" 
                      />
                    </div>
                  </div>

                  {/* Club Details */}
                  <div className="space-y-1 max-w-[200px]">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#0052CC] block">
                      {club.tag}
                    </span>
                    <h4 className="text-sm font-black text-[#082B5C] font-['Outfit',sans-serif] tracking-tight">
                      {club.name}
                    </h4>
                    <p className="text-xs text-[#082B5C]/80 leading-snug font-medium pt-1">
                      {club.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 04 — SPACES DESIGNED FOR PREPARATION (FACILITIES WITH HOTSPOTS) */}
      {/* Large Training Environment Photo with 4 Interactive Hotspots (No simple 4 cards) */}
      {/* ========================================================================= */}
      <section className="w-full py-20 sm:py-28 bg-white" id="spaces-designed-for-preparation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#DCEEFF] text-[#082B5C] text-xs font-extrabold tracking-widest uppercase">
              <Building2 className="w-3.5 h-3.5 text-[#0052CC]" />
              <span>DEDICATED PLACEMENT INFRASTRUCTURE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#082B5C] tracking-tight font-['Outfit',sans-serif] leading-tight">
              SPACES DESIGNED FOR PREPARATION
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal pt-1">
              The Placement Cell provides dedicated facilities to support different stages of student preparation and recruitment. These include well-furnished air-conditioned rooms for written tests, group discussions and face-to-face interviews, established computer laboratories for online training and examinations, air-conditioned auditoriums, seminar and meeting halls, and dedicated rooms for group discussions. Career counselling and mentoring are also available to help students identify suitable pathways and remain focused on their goals.
            </p>
          </div>

          {/* LARGE PHOTO ENVIRONMENT WITH 4 HOTSPOTS */}
          <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[580px] bg-slate-900 overflow-hidden shadow-2xl">
            
            {/* Dynamic Environment Photo */}
            <img 
              src={activeHotspot.image} 
              alt={activeHotspot.name} 
              className="w-full h-full object-cover brightness-[0.7] contrast-105 transition-all duration-700" 
            />
            
            {/* Subtle Gradient Shadow for Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40" />

            {/* 4 Interactive Hotspot Badges Overlaid on Photograph */}
            <div className="absolute inset-0 p-4 sm:p-8">
              {facilityHotspots.map((hotspot) => {
                const isSelected = activeHotspotId === hotspot.id;
                
                return (
                  <button
                    key={hotspot.id}
                    onClick={() => setActiveHotspotId(hotspot.id)}
                    className={`absolute ${hotspot.pos} cursor-pointer transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full shadow-2xl backdrop-blur-md ${
                      isSelected
                        ? 'bg-[#0052CC] text-white ring-4 ring-white/50 scale-110 z-30'
                        : 'bg-white/80 hover:bg-white text-[#082B5C] hover:scale-105 z-20'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                      isSelected ? 'bg-white text-[#0052CC]' : 'bg-[#082B5C] text-white'
                    }`}>
                      {hotspot.num}
                    </span>
                    <span className="text-xs font-black tracking-tight font-['Outfit',sans-serif] whitespace-nowrap">
                      {hotspot.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Active Facility Info Drawer */}
            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 bg-white/95 backdrop-blur-md p-6 sm:p-8 shadow-2xl text-[#082B5C] border-l-4 border-[#0052CC]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8 space-y-2">
                  <div className="inline-flex items-center gap-2">
                    <span className="text-xs font-black text-[#0D9488] uppercase tracking-widest">
                      FACILITY {activeHotspot.num}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs font-bold text-slate-600 uppercase">
                      {activeHotspot.sub}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-black text-[#082B5C] font-['Outfit',sans-serif]">
                    {activeHotspot.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {activeHotspot.desc}
                  </p>
                </div>

                <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-slate-200 pt-4 lg:pt-0 lg:pl-6 space-y-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                    KEY EQUIPMENT & SPECIFICATIONS:
                  </span>
                  <div className="grid grid-cols-1 gap-1.5">
                    {activeHotspot.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-800 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0052CC]" />
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

      {/* ========================================================================= */}
      {/* SECTION 05 — LEARNING THE TECHNOLOGIES OF TOMORROW (3 BULLETED COLUMNS) */}
      {/* Strictly NO borders, NO background containers, NO images anywhere */}
      {/* ========================================================================= */}
      <section className="w-full py-20 sm:py-28 bg-white" id="technology-centres">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#DCEEFF] text-[#082B5C] text-xs font-extrabold tracking-widest uppercase">
              <Cpu className="w-3.5 h-3.5 text-[#0052CC]" />
              <span>SPECIALISED ADVANCED HUBS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#082B5C] tracking-tight font-['Outfit',sans-serif] leading-tight">
              LEARNING THE TECHNOLOGIES OF TOMORROW
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal pt-1">
              MSAJCE has established Technology and Skill Development Centres to educate, train and up-skill students in emerging industrial technologies. The centres are designed to provide an environment for learning, research and innovation, with industry and government collaborations supporting certifications, projects and internships.
            </p>
          </div>

          {/* THREE CLEAN BULLETED COLUMNS (NO BORDER, NO BACKGROUND, NO IMAGES) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
            
            {/* COLUMN 1: MECHANICAL, CIVIL & MANUFACTURING */}
            <div className="space-y-6">
              <div className="pb-3 border-b-2 border-[#0052CC]">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#0052CC] block">
                  COE & INDUSTRY LABS
                </span>
                <h3 className="text-xl font-black text-[#082B5C] font-['Outfit',sans-serif]">
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
                    <span className="text-[#0052CC] font-black text-lg leading-none mt-0.5">•</span>
                    <div>
                      <span className="text-sm font-bold text-[#082B5C] block font-['Outfit',sans-serif]">
                        {item.title}
                      </span>
                      <span className="text-xs text-slate-500 font-medium block">
                        {item.sub}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 2: ELECTRICAL & ELECTRONICS INNOVATIONS */}
            <div className="space-y-6">
              <div className="pb-3 border-b-2 border-[#0D9488]">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#0D9488] block">
                  EMERGING HARDWARE
                </span>
                <h3 className="text-xl font-black text-[#082B5C] font-['Outfit',sans-serif]">
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
                    <span className="text-[#0D9488] font-black text-lg leading-none mt-0.5">•</span>
                    <div>
                      <span className="text-sm font-bold text-[#082B5C] block font-['Outfit',sans-serif]">
                        {item.title}
                      </span>
                      <span className="text-xs text-slate-500 font-medium block">
                        {item.sub}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 3: COMPUTER SCIENCE, AI & DIGITAL */}
            <div className="space-y-6">
              <div className="pb-3 border-b-2 border-[#082B5C]">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#082B5C] block">
                  COMPUTATION & CLOUD
                </span>
                <h3 className="text-xl font-black text-[#082B5C] font-['Outfit',sans-serif]">
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
                    <span className="text-[#082B5C] font-black text-lg leading-none mt-0.5">•</span>
                    <div>
                      <span className="text-sm font-bold text-[#082B5C] block font-['Outfit',sans-serif]">
                        {item.title}
                      </span>
                      <span className="text-xs text-slate-500 font-medium block">
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

      {/* ========================================================================= */}
      {/* SECTION 06 — CAREER DIRECTION STARTS WITH GUIDANCE (CAREER COUNSELLING) */}
      {/* Yellow background, clean white borderless cards, no emojis */}
      {/* ========================================================================= */}
      <section className="w-full py-20 sm:py-28 bg-[#FACC15] text-[#082B5C]" id="career-counselling-guidance">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#082B5C] text-white text-xs font-extrabold tracking-widest uppercase shadow-sm">
              <Compass className="w-3.5 h-3.5 text-[#FACC15]" />
              <span>INDIVIDUAL MENTORING & PATHWAYS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#082B5C] tracking-tight font-['Outfit',sans-serif] leading-tight">
              CAREER DIRECTION STARTS WITH GUIDANCE
            </h2>
            <p className="text-[#082B5C]/90 text-base sm:text-lg leading-relaxed font-medium pt-1">
              Career counselling is available on the MSAJCE campus to help students identify pathways that meet their individual requirements and aspirations. Students are also supported by mentors who help them address challenges, remain focused on their targets and make informed decisions about their future direction.
            </p>
          </div>

          {/* BRANCHING PATHWAY DIAGRAM */}
          <div className="max-w-4xl mx-auto bg-transparent p-4 sm:p-6">
            
            {/* Top Node: STUDENT */}
            <div className="flex justify-center mb-8">
              <div className="px-10 py-3.5 bg-[#082B5C] text-white shadow-xl text-center">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#FACC15]">STARTING POINT</span>
                <h4 className="text-xl sm:text-2xl font-black font-['Outfit',sans-serif]">STUDENT</h4>
              </div>
            </div>

            {/* 3 Primary Pathways (Pure White, No Border, No Emojis) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              
              {/* Pathway 1: JOB / INDUSTRY */}
              <div className="bg-white p-7 shadow-xl space-y-3 text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#082B5C]/10 text-[#0052CC] flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="text-xs font-extrabold text-[#0052CC] uppercase tracking-wider block">PATHWAY 01</span>
                <h4 className="text-lg font-black text-[#082B5C] font-['Outfit',sans-serif]">JOB & EMPLOYMENT</h4>
                <div className="py-1 text-[#082B5C]/40 font-bold text-xs">↓</div>
                <div className="p-3 bg-[#082B5C]/5 text-xs font-bold text-[#082B5C]">
                  INDUSTRY PLACEMENT
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  On-campus drives, product companies, core engineering firms & IT consulting.
                </p>
              </div>

              {/* Pathway 2: HIGHER STUDIES / RESEARCH */}
              <div className="bg-white p-7 shadow-xl space-y-3 text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#082B5C]/10 text-[#0D9488] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-xs font-extrabold text-[#0D9488] uppercase tracking-wider block">PATHWAY 02</span>
                <h4 className="text-lg font-black text-[#082B5C] font-['Outfit',sans-serif]">HIGHER STUDIES</h4>
                <div className="py-1 text-[#082B5C]/40 font-bold text-xs">↓</div>
                <div className="p-3 bg-[#082B5C]/5 text-xs font-bold text-[#082B5C]">
                  RESEARCH & GLOBAL MASTERS
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  GATE, GRE, TOEFL guidance via the Higher Education Cell for premier universities.
                </p>
              </div>

              {/* Pathway 3: OTHER PATHS / INNOVATION */}
              <div className="bg-white p-7 shadow-xl space-y-3 text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#082B5C]/10 text-[#082B5C] flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-xs font-extrabold text-[#082B5C] uppercase tracking-wider block">PATHWAY 03</span>
                <h4 className="text-lg font-black text-[#082B5C] font-['Outfit',sans-serif]">OTHER PATHS</h4>
                <div className="py-1 text-[#082B5C]/40 font-bold text-xs">↓</div>
                <div className="p-3 bg-[#082B5C]/5 text-xs font-bold text-[#082B5C]">
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

      {/* ========================================================================= */}
      {/* SECTION 07 — LEARNING BEYOND THE CLASSROOM (MASSIVE 10 -> 9 -> 8 -> 7 GALLERY) */}
      {/* 34 Curated Photos in Descending Pyramid + Clean Minimalist Hover Labels */}
      {/* ========================================================================= */}
      <section className="w-full py-20 sm:py-28 bg-[#F8FAFC]" id="learning-beyond-classroom">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          
          {/* TOP BADGE / STICKER */}
          <div className="flex flex-col items-center justify-center text-center space-y-2 mb-6">
            <div className="px-4 py-1.5 bg-[#082B5C] text-white text-xs font-black tracking-widest uppercase shadow-md">
              MSAJCE
            </div>
            <span className="text-[11px] font-extrabold text-[#0052CC] tracking-widest uppercase">
              LEARN • EXPERIENCE • GROW
            </span>
          </div>

          {/* HEADING & SMALL LINE ONLY (NO LONG TEXT) */}
          <div className="text-center mb-14 space-y-2">
            <h2 className="text-3xl sm:text-5xl font-black text-[#082B5C] tracking-tight font-['Outfit',sans-serif] leading-tight">
              LEARNING BEYOND THE CLASSROOM
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Where experience becomes part of learning.
            </p>
          </div>

          {/* THE 10 -> 9 -> 8 -> 7 DESCENDING PHOTOGRAPHIC PYRAMID */}
          <div className="space-y-3 sm:space-y-4">
            
            {/* ROW 01: 10 IMAGES */}
            <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2 sm:gap-2.5">
              {galleryRow1.map((photo, pIdx) => (
                <div 
                  key={pIdx}
                  className="relative aspect-4/3 rounded-xs overflow-hidden group cursor-pointer shadow-xs transition-all duration-300"
                >
                  <img 
                    src={photo.img} 
                    alt={photo.title} 
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 brightness-95" 
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-white bg-[#0052CC] px-1.5 py-0.5 shadow-xs">
                      {photo.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* ROW 02: 9 IMAGES (Centered with margin) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-2 sm:gap-2.5 max-w-[95%] mx-auto">
              {galleryRow2.map((photo, pIdx) => (
                <div 
                  key={pIdx}
                  className="relative aspect-4/3 rounded-xs overflow-hidden group cursor-pointer shadow-xs transition-all duration-300"
                >
                  <img 
                    src={photo.img} 
                    alt={photo.title} 
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 brightness-95" 
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-white bg-[#0D9488] px-1.5 py-0.5 shadow-xs">
                      {photo.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* ROW 03: 8 IMAGES (Centered with margin) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-2.5 max-w-[88%] mx-auto">
              {galleryRow3.map((photo, pIdx) => (
                <div 
                  key={pIdx}
                  className="relative aspect-4/3 rounded-xs overflow-hidden group cursor-pointer shadow-xs transition-all duration-300"
                >
                  <img 
                    src={photo.img} 
                    alt={photo.title} 
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 brightness-95" 
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-white bg-[#0052CC] px-1.5 py-0.5 shadow-xs">
                      {photo.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* ROW 04: 7 IMAGES (Centered with margin) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 sm:gap-2.5 max-w-[78%] mx-auto">
              {galleryRow4.map((photo, pIdx) => (
                <div 
                  key={pIdx}
                  className="relative aspect-4/3 rounded-xs overflow-hidden group cursor-pointer shadow-xs transition-all duration-300"
                >
                  <img 
                    src={photo.img} 
                    alt={photo.title} 
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 brightness-95" 
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-white bg-[#0D9488] px-1.5 py-0.5 shadow-xs">
                      {photo.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* FINAL LINE AFTER GALLERY */}
          <div className="mt-20 pt-10 border-t border-slate-200 text-center space-y-3">
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#082B5C] font-['Outfit',sans-serif] tracking-tight">
              LEARNING DOESN'T STOP <br className="hidden sm:inline" />WHEN THE CLASSROOM ENDS.
            </h3>
            <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#0D9488]">
              TRAINING • TECHNOLOGY • INDUSTRY • EXPERIENCE
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};
