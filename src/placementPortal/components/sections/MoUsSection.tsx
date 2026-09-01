import React, { useState, useRef } from 'react';
import { 
  Search,
  Calendar,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  MapPin,
  GraduationCap,
  X,
  ExternalLink,
  Building2
} from 'lucide-react';
import { MOU_PARTNERS } from '../../data/placementData';
import { MouPartner } from '../../types';

interface MoUsSectionProps {
  onOpenMou: (mou: MouPartner) => void;
}

// ---------------------------------------------------------------------------
// 01. DECONSTRUCTED MOSAIC PHOTO FRAME (From User's Attached Screenshot 192633)
// Fractures a single high-resolution image into an asymmetrical grid of offset tiles
// ---------------------------------------------------------------------------
const DeconstructedMosaicFrame: React.FC<{
  imageUrl: string;
  altText: string;
  className?: string;
}> = ({ imageUrl, altText, className = '' }) => {
  return (
    <div className={`relative w-full max-w-[420px] sm:max-w-[480px] aspect-[4/5] bg-[#121820] p-3 sm:p-5 shadow-2xl overflow-hidden ${className}`}>
      
      {/* Subtle background texture / dark luxury tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#18202A] to-[#0A0D12] pointer-events-none" />

      {/* Grid of fractured tiles */}
      <div className="relative w-full h-full">
        
        {/* Tile 1: Top-Left Header Bar */}
        <div 
          className="absolute left-[16%] top-[8%] w-[33%] h-[16%] overflow-hidden bg-slate-800 shadow-md border border-white/5 transition-transform duration-500 hover:scale-[1.03] hover:z-20"
        >
          <img
            src={imageUrl}
            alt={altText}
            className="absolute max-w-none w-[303%] h-[625%] -left-[48%] -top-[50%] object-cover filter contrast-105"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Tile 2: Top-Center Tall Vertical Column */}
        <div 
          className="absolute left-[51%] top-[2%] w-[28%] h-[42%] overflow-hidden bg-slate-800 shadow-lg border border-white/5 transition-transform duration-500 hover:scale-[1.03] hover:z-20"
        >
          <img
            src={imageUrl}
            alt={altText}
            className="absolute max-w-none w-[357%] h-[238%] -left-[182%] -top-[5%] object-cover filter contrast-105"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Tile 3: Far-Right Upper Small Accent Square */}
        <div 
          className="absolute left-[81%] top-[15%] w-[11%] h-[10%] overflow-hidden bg-slate-800 shadow-sm border border-white/5 transition-transform duration-500 hover:scale-[1.05] hover:z-20"
        >
          <img
            src={imageUrl}
            alt={altText}
            className="absolute max-w-none w-[909%] h-[1000%] -left-[736%] -top-[150%] object-cover filter contrast-105"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Tile 4: Far-Right Medium Square */}
        <div 
          className="absolute left-[81%] top-[27%] w-[18%] h-[18%] overflow-hidden bg-slate-800 shadow-md border border-white/5 transition-transform duration-500 hover:scale-[1.03] hover:z-20"
        >
          <img
            src={imageUrl}
            alt={altText}
            className="absolute max-w-none w-[555%] h-[555%] -left-[450%] -top-[150%] object-cover filter contrast-105"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Tile 5: Mid-Left Wide Dominant Rectangle */}
        <div 
          className="absolute left-[2%] top-[26%] w-[47%] h-[38%] overflow-hidden bg-slate-800 shadow-xl border border-white/5 transition-transform duration-500 hover:scale-[1.02] hover:z-20"
        >
          <img
            src={imageUrl}
            alt={altText}
            className="absolute max-w-none w-[212%] h-[263%] -left-[4%] -top-[68%] object-cover filter contrast-105"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Tile 6: Mid-Right Horizontal Strip */}
        <div 
          className="absolute left-[51%] top-[46%] w-[35%] h-[18%] overflow-hidden bg-slate-800 shadow-md border border-white/5 transition-transform duration-500 hover:scale-[1.03] hover:z-20"
        >
          <img
            src={imageUrl}
            alt={altText}
            className="absolute max-w-none w-[285%] h-[555%] -left-[145%] -top-[255%] object-cover filter contrast-105"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Tile 7: Bottom-Left Vertical Column */}
        <div 
          className="absolute left-[16%] top-[66%] w-[33%] h-[32%] overflow-hidden bg-slate-800 shadow-lg border border-white/5 transition-transform duration-500 hover:scale-[1.03] hover:z-20"
        >
          <img
            src={imageUrl}
            alt={altText}
            className="absolute max-w-none w-[303%] h-[312%] -left-[48%] -top-[206%] object-cover filter contrast-105"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Tile 8: Bottom-Center Tall Column */}
        <div 
          className="absolute left-[51%] top-[66%] w-[24%] h-[32%] overflow-hidden bg-slate-800 shadow-lg border border-white/5 transition-transform duration-500 hover:scale-[1.03] hover:z-20"
        >
          <img
            src={imageUrl}
            alt={altText}
            className="absolute max-w-none w-[416%] h-[312%] -left-[212%] -top-[206%] object-cover filter contrast-105"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Tile 9: Bottom-Right Square */}
        <div 
          className="absolute left-[77%] top-[66%] w-[22%] h-[19%] overflow-hidden bg-slate-800 shadow-md border border-white/5 transition-transform duration-500 hover:scale-[1.03] hover:z-20"
        >
          <img
            src={imageUrl}
            alt={altText}
            className="absolute max-w-none w-[454%] h-[526%] -left-[350%] -top-[347%] object-cover filter contrast-105"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Tile 10: Bottom Corner Tiny Accent Square */}
        <div 
          className="absolute left-[81%] top-[87%] w-[9%] h-[7%] overflow-hidden bg-slate-800 shadow-xs border border-white/5 transition-transform duration-500 hover:scale-[1.08] hover:z-20"
        >
          <img
            src={imageUrl}
            alt={altText}
            className="absolute max-w-none w-[1111%] h-[1428%] -left-[900%] -top-[1242%] object-cover filter contrast-105"
            referrerPolicy="no-referrer"
          />
        </div>

      </div>

    </div>
  );
};


// ---------------------------------------------------------------------------
// 02. MINIMALIST LINE-ART SVG ICONS (From User's Attached Screenshot 193155)
// ---------------------------------------------------------------------------
const OrigamiPlaneIcon = () => (
  <svg viewBox="0 0 100 120" className="w-24 h-24 mx-auto text-[#0F172A]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    {/* Outer airplane triangle */}
    <polygon points="50 15, 12 82, 50 68, 88 82" />
    {/* Center vertical keel */}
    <line x1="50" y1="15" x2="50" y2="68" />
    {/* Crease fold lines */}
    <line x1="50" y1="38" x2="26" y2="76" strokeDasharray="3 3" strokeWidth="1.8" />
    <line x1="50" y1="38" x2="74" y2="76" strokeDasharray="3 3" strokeWidth="1.8" />
    {/* Bottom inner fold */}
    <line x1="50" y1="68" x2="40" y2="82" />
    <line x1="50" y1="68" x2="60" y2="82" />
    {/* 3 Vertical velocity thrust lines */}
    <line x1="42" y1="90" x2="42" y2="108" strokeWidth="2.8" />
    <line x1="50" y1="88" x2="50" y2="114" strokeWidth="2.8" />
    <line x1="58" y1="90" x2="58" y2="108" strokeWidth="2.8" />
  </svg>
);

const BlueprintPencilIcon = () => (
  <svg viewBox="0 0 120 120" className="w-24 h-24 mx-auto text-[#0F172A]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    {/* Drafting Pencil on left */}
    <circle cx="28" cy="20" r="6.5" />
    <line x1="24.5" y1="20" x2="31.5" y2="20" />
    <line x1="24.5" y1="20" x2="24.5" y2="76" />
    <line x1="31.5" y1="20" x2="31.5" y2="76" />
    <polygon points="24.5 76, 31.5 76, 28 96" />
    <polygon points="26.5 88, 29.5 88, 28 96" fill="currentColor" />

    {/* Blueprint Sheet with Architectural Cross Grid Lines */}
    <line x1="42" y1="28" x2="108" y2="28" />
    <line x1="42" y1="90" x2="108" y2="90" />
    <line x1="50" y1="18" x2="50" y2="100" />
    <line x1="100" y1="18" x2="100" y2="100" />

    {/* Inner blueprint square and layout bars */}
    <rect x="56" y="34" width="20" height="20" />
    <line x1="56" y1="34" x2="76" y2="54" />
    <line x1="56" y1="62" x2="94" y2="62" strokeWidth="3" />
    <line x1="56" y1="71" x2="94" y2="71" strokeWidth="3" />
    <line x1="56" y1="80" x2="84" y2="80" strokeWidth="3" />
  </svg>
);

const IndustryLiaisonIcon = () => (
  <svg viewBox="0 0 120 120" className="w-24 h-24 mx-auto text-[#0F172A]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    {/* Left Concentric Medallion */}
    <circle cx="34" cy="28" r="14" />
    <circle cx="34" cy="28" r="7" />
    
    {/* Right Concentric Medallion */}
    <circle cx="86" cy="28" r="14" />
    <circle cx="86" cy="28" r="7" />

    {/* Horizontal Dotted Bridge Link */}
    <line x1="52" y1="28" x2="68" y2="28" strokeDasharray="3 3" strokeWidth="3" />

    {/* Left Shield Body */}
    <path d="M 22 44 L 22 75 C 22 88, 34 95, 34 95 C 34 95, 46 88, 46 75 L 46 44 Z" />
    <path d="M 22 44 L 34 56 L 46 44" />
    <line x1="22" y1="58" x2="46" y2="82" />

    {/* Right Shield Body */}
    <path d="M 74 44 L 74 75 C 74 88, 86 95, 86 95 C 86 95, 98 88, 98 75 L 98 44 Z" />
    <path d="M 74 44 L 86 56 L 98 44" />
    <line x1="74" y1="58" x2="98" y2="82" />
  </svg>
);

// ---------------------------------------------------------------------------
// 10 PHOTOGRAPHS FOR THE MOU SIGNING CEREMONIES & MOMENTS CAROUSEL
// ---------------------------------------------------------------------------
const MOU_MOMENTS = [
  {
    id: 1,
    title: 'AWS Academy Strategic Accord',
    partner: 'Amazon Web Services',
    date: 'February 2024',
    scope: 'Cloud Architecture & GenAI Center of Excellence Pact',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'Cisco Networking Lab Accreditation',
    partner: 'Cisco Systems Inc.',
    date: 'November 2023',
    scope: 'Cybersecurity Sandbox & CCNA Certification Covenant',
    imageUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1000&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    title: 'TVS Automotive EV Innovation Center',
    partner: 'TVS Training Services',
    date: 'April 2024',
    scope: 'Electric Vehicle Powertrain & In-Plant Immersion MoA',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1000&auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    title: 'Infosys Springboard Skilling Alliance',
    partner: 'Infosys Limited',
    date: 'August 2023',
    scope: 'Enterprise Full Stack & Digital Skilling Direct Track',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1000&auto=format&fit=crop&q=80'
  },
  {
    id: 5,
    title: 'L&T EduTech BIM Research Facility',
    partner: 'Larsen & Toubro Ltd.',
    date: 'December 2023',
    scope: 'Building Information Modeling & Smart Structural QA',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?w=1000&auto=format&fit=crop&q=80'
  },
  {
    id: 6,
    title: 'Red Hat Open Hybrid Cloud Academy',
    partner: 'Red Hat Enterprise',
    date: 'January 2024',
    scope: 'Linux Kernel & Kubernetes Microservices Laboratory',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&auto=format&fit=crop&q=80'
  },
  {
    id: 7,
    title: 'IBM Enterprise AI Collaborative Pact',
    partner: 'IBM Academic Initiative',
    date: 'March 2024',
    scope: 'Data Engineering & Quantum Computing Rig Protocol',
    imageUrl: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&auto=format&fit=crop&q=80'
  },
  {
    id: 8,
    title: 'Oracle Academy Cloud Database Accord',
    partner: 'Oracle Corporation',
    date: 'October 2023',
    scope: 'Autonomous Database & Java SE Certification Track',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1000&auto=format&fit=crop&q=80'
  },
  {
    id: 9,
    title: 'MSME Technology Center Precision Labs',
    partner: 'Ministry of MSME, Govt. of India',
    date: 'September 2023',
    scope: 'CNC Tooling, Robotics & Mechatronics Apprenticeships',
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=1000&auto=format&fit=crop&q=80'
  },
  {
    id: 10,
    title: 'Cambridge Assessment English Accord',
    partner: 'Cambridge University Press & Assessment',
    date: 'July 2023',
    scope: 'Business English Certificate (BEC) Campus Testing Centre',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&auto=format&fit=crop&q=80'
  }
];


export const MoUsSection: React.FC<MoUsSectionProps> = ({ onOpenMou }) => {
  const [selectedYear, setSelectedYear] = useState<string>('2024-25');
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [activeModalPillar, setActiveModalPillar] = useState<'transfer' | 'partnership' | 'liaison' | null>(null);

  // Carousel ref & state for MoU Moments
  const momentsContainerRef = useRef<HTMLDivElement>(null);
  const [momentIndex, setMomentIndex] = useState<number>(0);

  const scrollMoments = (direction: 'left' | 'right') => {
    if (!momentsContainerRef.current) return;
    const scrollAmount = 360;
    if (direction === 'left') {
      momentsContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      setMomentIndex(prev => Math.max(0, prev - 1));
    } else {
      momentsContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setMomentIndex(prev => Math.min(MOU_MOMENTS.length - 1, prev + 1));
    }
  };

  const filteredMous = MOU_PARTNERS.filter(m => {
    const matchesYear = selectedYear === 'ALL' || m.year === selectedYear;
    const matchesSearch = m.partnerName.toLowerCase().includes(searchFilter.toLowerCase()) ||
                          m.domain.toLowerCase().includes(searchFilter.toLowerCase()) ||
                          m.purpose.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesYear && matchesSearch;
  });

  // Moving circular MoU partners
  const circularPartners = [
    { name: 'AWS Academy', category: 'Cloud Computing', bg: '#232F3E', text: '#FF9900', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop&q=80' },
    { name: 'Cisco Networking', category: 'Cybersecurity', bg: '#049FD9', text: '#FFFFFF', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&auto=format&fit=crop&q=80' },
    { name: 'Infosys Springboard', category: 'Digital Skilling', bg: '#007CC3', text: '#FFFFFF', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&auto=format&fit=crop&q=80' },
    { name: 'L&T EduTech', category: 'Core Engineering', bg: '#002E6E', text: '#FFFFFF', img: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=400&auto=format&fit=crop&q=80' },
    { name: 'TVS Training Services', category: 'Automotive & EV', bg: '#E21A22', text: '#FFFFFF', img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&auto=format&fit=crop&q=80' },
    { name: 'Red Hat Academy', category: 'Linux Open Hybrid', bg: '#EE0000', text: '#FFFFFF', img: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400&auto=format&fit=crop&q=80' },
    { name: 'Oracle Academy', category: 'Java & Cloud DB', bg: '#F80000', text: '#FFFFFF', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&auto=format&fit=crop&q=80' },
    { name: 'IBM Academic Alliance', category: 'Enterprise AI', bg: '#052FAD', text: '#FFFFFF', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&auto=format&fit=crop&q=80' },
  ];

  // MoU Comprehensive Table Data
  const mouTableData = [
    {
      partner: 'AWS Academy (Amazon Web Services)',
      domain: 'Cloud Computing, DevOps & Generative AI',
      duration: '3 Years (2024–2027)',
      depts: 'CSE, IT, AI&DS',
      scope: 'AWS Cloud Practitioner, Solutions Architect labs, 600+ cloud exam vouchers',
      outcome: '92 Certified Students'
    },
    {
      partner: 'Cisco Networking Academy',
      domain: 'Cybersecurity, Routing & Switching',
      duration: '3 Years (2023–2026)',
      depts: 'ECE, EEE, CSE, IT',
      scope: 'CCNA Routing, Network Security labs, Enterprise Packet Tracer sandboxes',
      outcome: '120 CCNA Badges'
    },
    {
      partner: 'Infosys Springboard',
      domain: 'Enterprise Full Stack & Agile Engineering',
      duration: '5 Years (2022–2027)',
      depts: 'All Engineering Streams',
      scope: 'Curated 1000+ digital learning modules, direct GenC pooled recruitment track',
      outcome: '450 Active Learners'
    },
    {
      partner: 'TVS Training Services',
      domain: 'Automotive Mechatronics & EV Powertrains',
      duration: '3 Years (2024–2027)',
      depts: 'MECH, EEE, ECE',
      scope: 'In-plant EV powertrain training, CAD modeling rigs, guaranteed in-plant internships',
      outcome: '48 In-Plant Interns'
    },
    {
      partner: 'L&T EduTech',
      domain: 'Virtual Infrastructure & Structural BIM',
      duration: '3 Years (2023–2026)',
      depts: 'CIVIL, MECH',
      scope: 'Building Information Modeling, smart site execution, structural QA design',
      outcome: '35 PPOs / Internships'
    },
    {
      partner: 'Red Hat Academy',
      domain: 'Enterprise Linux & Open Hybrid Cloud',
      duration: '2 Years (2024–2026)',
      depts: 'CSE, IT',
      scope: 'RHCSA preparation, Ansible automation, enterprise containerization clusters',
      outcome: '65 Certified Students'
    }
  ];

  return (
    <div className="relative w-full bg-white text-[#0F172A] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-cyan-200 selection:text-[#041E42] overflow-hidden">
      <section className="relative w-full h-[250px] sm:h-[310px] lg:h-[360px] overflow-hidden bg-[#082B5C]">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=80"
          alt="MoU and industry alliances banner"
          className="absolute inset-0 h-full w-full object-cover object-center brightness-55 contrast-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#082B5C]/90 via-[#082B5C]/70 to-[#082B5C]/40" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-8 lg:px-14">
          <div className="max-w-2xl text-white">
            <div className="mb-3 inline-flex items-center gap-2 border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-white/90 backdrop-blur-sm">
              <Building2 className="h-3.5 w-3.5 text-cyan-300" />
              Industry alliances
            </div>
            <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl font-['Outfit',sans-serif]">
              Strategic Industry Partnerships
            </h1>
            <p className="mt-3 max-w-xl text-sm text-blue-100 sm:text-base">
              Long-term collaborations with leading institutions, technology leaders, and industrial partners to strengthen learning and placement outcomes.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content Layer */}
      <div className="relative z-10 bg-white">

        {/* ========================================================================= */}
        {/* HERO SECTION — INDUSTRY ALLIANCES & STRATEGIC COVENANTS                   */}
        {/* ========================================================================= */}
        <section className="relative w-full border-b border-slate-200/60 bg-white px-4 py-12 sm:px-8 lg:px-14 lg:py-16">
          <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="space-y-5 lg:col-span-7">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-600">
                Official bilateral engagements
              </div>
              <h1 className="text-4xl font-black leading-tight tracking-[0.01em] text-[#111827] sm:text-5xl lg:text-6xl">
                Industry Alliances<br />
                <span className="text-slate-700">& Memorandums</span>
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base">
                Through strategic academic and industrial partnerships, MSAJCE bridges classroom learning with enterprise exposure, project-based learning, and stronger recruitment outcomes for students across disciplines.
              </p>
              <div className="grid max-w-lg grid-cols-3 gap-4 border-t border-slate-200 pt-5">
                <div>
                  <div className="text-3xl font-black text-[#111827]">40+</div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Active MoUs</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#111827]">8+</div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Corporate CoEs</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#111827]">100%</div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Dept Coverage</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
                  alt="Campus and institutional partnership banner"
                  className="h-[320px] w-full object-cover sm:h-[380px]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 02 — 3-COLUMN ARCHITECTURAL LINE-ART PILLARS                      */}
        {/* (Exact match to User's Attached Screenshot 193155)                        */}
        {/* 1. Technology Transfer | 2. Industry Partnerships | 3. Industry Liaison   */}
        {/* ========================================================================= */}
        <section className="w-full py-24 px-4 sm:px-8 lg:px-14 border-b border-slate-200/60">
          <div className="max-w-7xl mx-auto">
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start text-center">
              
              {/* PILLAR 1: Technology Transfer */}
              <div className="flex flex-col items-center justify-between space-y-6 group h-full">
                <div className="space-y-6 flex flex-col items-center">
                  {/* Origami Paper Airplane SVG Line Art */}
                  <div className="transition-transform duration-500 group-hover:-translate-y-2">
                    <OrigamiPlaneIcon />
                  </div>

                  {/* Serif Heading */}
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F172A] tracking-tight">
                    Technology Transfer
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-700 max-w-xs font-normal leading-relaxed">
                    The process of moving research out of the laboratory and into society.
                  </p>
                </div>

                {/* Clean Rectangular Outline Button */}
                <div className="pt-4 w-full flex justify-center">
                  <button
                    onClick={() => setActiveModalPillar('transfer')}
                    className="w-full max-w-[290px] py-2.5 px-4 bg-transparent hover:bg-[#0F172A] text-[#0F172A] hover:text-white border border-[#0F172A] text-xs sm:text-sm font-normal tracking-tight transition-all duration-300 cursor-pointer shadow-xs"
                  >
                    Learn about the technology transfer process
                  </button>
                </div>
              </div>

              {/* PILLAR 2: Industry Partnerships */}
              <div className="flex flex-col items-center justify-between space-y-6 group h-full">
                <div className="space-y-6 flex flex-col items-center">
                  {/* Blueprint & Pencil SVG Line Art */}
                  <div className="transition-transform duration-500 group-hover:-translate-y-2">
                    <BlueprintPencilIcon />
                  </div>

                  {/* Serif Heading */}
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F172A] tracking-tight">
                    Industry Partnerships
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-700 max-w-xs font-normal leading-relaxed">
                    Our team has years of experience working with businesses.
                  </p>
                </div>

                {/* Clean Rectangular Outline Button */}
                <div className="pt-4 w-full flex justify-center">
                  <button
                    onClick={() => setActiveModalPillar('partnership')}
                    className="w-full max-w-[290px] py-2.5 px-4 bg-transparent hover:bg-[#0F172A] text-[#0F172A] hover:text-white border border-[#0F172A] text-xs sm:text-sm font-normal tracking-tight transition-all duration-300 cursor-pointer shadow-xs"
                  >
                    Explore how to work with industry
                  </button>
                </div>
              </div>

              {/* PILLAR 3: Industry Liaison */}
              <div className="flex flex-col items-center justify-between space-y-6 group h-full">
                <div className="space-y-6 flex flex-col items-center">
                  {/* Interconnected Liaison Medallions SVG Line Art */}
                  <div className="transition-transform duration-500 group-hover:-translate-y-2">
                    <IndustryLiaisonIcon />
                  </div>

                  {/* Serif Heading */}
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F172A] tracking-tight">
                    Industry Liaison
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-700 max-w-xs font-normal leading-relaxed">
                    Fostering collaborations between industry partners and academic researchers
                  </p>
                </div>

                {/* Clean Rectangular Outline Button */}
                <div className="pt-4 w-full flex justify-center">
                  <button
                    onClick={() => setActiveModalPillar('liaison')}
                    className="w-full max-w-[290px] py-2.5 px-4 bg-transparent hover:bg-[#0F172A] text-[#0F172A] hover:text-white border border-[#0F172A] text-xs sm:text-sm font-normal tracking-tight transition-all duration-300 cursor-pointer shadow-xs"
                  >
                    Learn about Industry Liaison
                  </button>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 03 — MOVING PARTNER CIRCULAR TICKER                               */}
        {/* ========================================================================= */}
        <section className="w-full py-12 border-b border-slate-200/60 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 mb-6 flex items-center justify-between">
            <div className="text-xs font-mono tracking-widest text-[#0369A1] font-bold uppercase">
              GLOBAL ACADEMY ALLIANCES & COE CENTERS
            </div>
            <div className="text-xs font-mono text-slate-500 uppercase hidden sm:inline">
              40+ LIVE BILATERAL PACTS
            </div>
          </div>

          {/* Continuous Moving Ticker */}
          <div className="relative w-full overflow-hidden">
            <div className="flex items-center gap-6 whitespace-nowrap animate-marquee">
              {[...circularPartners, ...circularPartners].map((partner, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 px-5 py-2.5 bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all shrink-0 group cursor-default"
                >
                  {/* Circular Frame Logo / Image */}
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-300 ring-2 ring-sky-100 shadow-xs shrink-0">
                    <img
                      src={partner.img}
                      alt={partner.name}
                      className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div 
                      className="absolute inset-0 opacity-75 flex items-center justify-center font-black text-[10px]"
                      style={{ backgroundColor: partner.bg, color: partner.text }}
                    >
                      {partner.name.substring(0, 2).toUpperCase()}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0F172A] font-['Outfit',sans-serif] group-hover:text-[#0369A1] transition-colors">
                      {partner.name}
                    </h4>
                    <p className="text-[10px] font-mono text-slate-500">
                      {partner.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 04 — STRATEGIC MOU SCOPE & DELIVERY MATRIX (DATA ARCHIVE)         */}
        {/* ========================================================================= */}
        <section className="w-full py-24 px-4 sm:px-8 lg:px-14 border-b border-slate-200/60">
          <div className="max-w-7xl mx-auto">
            
            {/* Header */}
            <div className="max-w-3xl mb-12 space-y-4">
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0F172A] font-['Outfit',sans-serif] uppercase">
                INSTITUTIONAL MOU MATRIX
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Comprehensive audit of agreement duration, participating departments, certification tracks, and validated student training outcomes.
              </p>
            </div>

            {/* Academic Year Tabs & Search Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 mb-8 border-b-2 border-[#0F172A]">
              
              {/* Year Selector Tabs */}
              <div className="flex flex-wrap items-center gap-6 text-sm font-mono uppercase tracking-wider">
                {[
                  { id: '2024-25', label: '2024–25 (Active)' },
                  { id: '2023-24', label: '2023–24' },
                  { id: '2022-23', label: '2022–23' },
                  { id: 'ALL', label: 'All Covenants' },
                ].map((yr) => (
                  <button
                    key={yr.id}
                    onClick={() => setSelectedYear(yr.id)}
                    className={`pb-2 transition-all cursor-pointer font-bold ${
                      selectedYear === yr.id
                        ? 'text-[#0369A1] border-b-2 border-[#0369A1]'
                        : 'text-slate-500 hover:text-[#0F172A] border-b-2 border-transparent'
                    }`}
                  >
                    {yr.label}
                  </button>
                ))}
              </div>

              {/* Quick Search */}
              <div className="relative w-full sm:w-64">
                <input
                  type="text"
                  placeholder="Filter MoU partner or domain..."
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  className="w-full py-1.5 px-3 bg-transparent border-b border-slate-400 text-xs focus:outline-none focus:border-[#0369A1] placeholder:text-slate-400 text-[#0F172A]"
                />
                <Search className="w-3.5 h-3.5 absolute right-2 top-2 text-slate-500" />
              </div>

            </div>

            {/* Data Table: Borderless, High-Contrast Editorial Design */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b-2 border-[#0F172A] text-slate-900 uppercase font-mono font-bold text-[11px]">
                    <th className="py-4 px-4">PARTNER ORGANISATION</th>
                    <th className="py-4 px-4">DOMAIN FOCUS</th>
                    <th className="py-4 px-4">VALIDITY</th>
                    <th className="py-4 px-4">DEPARTMENTS</th>
                    <th className="py-4 px-4">KEY DELIVERABLES & SCOPE</th>
                    <th className="py-4 px-4 text-right">STUDENT OUTCOME</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {mouTableData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-sky-50/50 transition-colors">
                      <td className="py-4 px-4 font-bold text-[#0F172A] text-sm font-['Outfit',sans-serif]">
                        {row.partner}
                      </td>
                      <td className="py-4 px-4 text-slate-700 font-semibold">{row.domain}</td>
                      <td className="py-4 px-4 text-slate-500 font-mono text-[11px]">{row.duration}</td>
                      <td className="py-4 px-4">
                        <span className="px-2 py-0.5 bg-slate-200/80 text-slate-800 text-[10px] font-mono font-bold">
                          {row.depts}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-slate-600 max-w-sm leading-relaxed">{row.scope}</td>
                      <td className="py-4 px-4 font-black text-[#0369A1] text-right font-['Outfit',sans-serif] text-sm">
                        {row.outcome}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 05 — ACTIVE AGREEMENTS DOSSIER (PURE WORDS — NO CARDS / NO BORDER) */}
        {/* ========================================================================= */}
        <section className="w-full py-24 px-4 sm:px-8 lg:px-14 border-b border-slate-200/60">
          <div className="max-w-7xl mx-auto">
            
            {/* Header */}
            <div className="mb-14">
              <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] font-['Outfit',sans-serif] uppercase">
                ACTIVE AGREEMENTS DOSSIER
              </h2>
              <p className="text-xs sm:text-sm font-mono text-slate-500 mt-1 uppercase tracking-widest">
                EXPLORE OFFICIAL BILATERAL PROTOCOLS, LAB RIGS & SYLLABUS INTEGRATION
              </p>
            </div>

            {/* PURE TYPOGRAPHY LIST (NO CARDS, NO BOX BACKGROUNDS, NO BORDER ENCLOSURES) */}
            <div className="divide-y divide-slate-300/80">
              {filteredMous.map((mou) => (
                <div
                  key={mou.id}
                  onClick={() => onOpenMou(mou)}
                  className="py-8 sm:py-10 group cursor-pointer transition-all duration-300 hover:pl-2"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline">
                    
                    {/* Left Column: Partner Name & Category Metadata */}
                    <div className="lg:col-span-4 space-y-1">
                      <div className="flex items-center gap-3 text-xs font-mono text-[#0369A1] font-bold uppercase tracking-wider">
                        <span>{mou.domain}</span>
                        <span className="text-slate-400">•</span>
                        <span className="text-slate-500 font-normal">{mou.duration}</span>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] font-['Outfit',sans-serif] group-hover:text-[#0369A1] transition-colors leading-tight">
                        {mou.partnerName}
                      </h3>
                      
                      <div className="text-xs font-mono text-slate-500 flex items-center gap-1.5 pt-1">
                        <Calendar className="w-3.5 h-3.5 text-[#0369A1]" />
                        Signed Date: {mou.date}
                      </div>
                    </div>

                    {/* Middle Column: Purpose & Deliverables Description */}
                    <div className="lg:col-span-6">
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                        {mou.purpose}
                      </p>
                    </div>

                    {/* Right Column: Clean Text Action Trigger */}
                    <div className="lg:col-span-2 flex lg:justify-end items-center pt-2 lg:pt-0">
                      <span className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#0369A1] group-hover:translate-x-1.5 transition-transform">
                        <span>VIEW DETAILS</span>
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {filteredMous.length === 0 && (
              <div className="py-16 text-center text-sm font-mono text-slate-500">
                No active agreements found for the selected filter.
              </div>
            )}

          </div>
        </section>


        {/* ========================================================================= */}
        {/* SECTION 06 — MOU MOMENTS (HORIZONTAL CAROUSEL OF 10 CEREMONY PHOTOS)      */}
        {/* (With Previous & Next controls, smooth slide, and rich ceremony details)  */}
        {/* ========================================================================= */}
        <section className="w-full py-24 px-4 sm:px-8 lg:px-14 border-b border-slate-200/60 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            
            {/* Header with Carousel Navigation Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div className="space-y-2">
                <div className="text-xs font-mono tracking-widest text-[#0369A1] font-bold uppercase">
                  ARCHIVAL CEREMONY RECORD
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] font-['Outfit',sans-serif] uppercase tracking-tight">
                  MOU SIGNING CEREMONIES & MOMENTS
                </h2>
                <p className="text-xs sm:text-sm font-mono text-slate-500 uppercase tracking-wider">
                  10 HISTORIC BILATERAL RATIFICATIONS, LAB INAUGURATIONS & ACADEMIC ALLIANCES
                </p>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => scrollMoments('left')}
                  className="w-12 h-12 rounded-full border-2 border-[#0F172A] hover:bg-[#0F172A] hover:text-white text-[#0F172A] flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xs active:scale-95"
                  aria-label="Previous Ceremony Moment"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => scrollMoments('right')}
                  className="w-12 h-12 rounded-full border-2 border-[#0F172A] hover:bg-[#0F172A] hover:text-white text-[#0F172A] flex items-center justify-center transition-all duration-300 cursor-pointer shadow-xs active:scale-95"
                  aria-label="Next Ceremony Moment"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Horizontal Scrollable Strip of 10 Photographs */}
            <div 
              ref={momentsContainerRef}
              className="flex items-stretch gap-6 sm:gap-8 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory"
              style={{ scrollBehavior: 'smooth' }}
            >
              {MOU_MOMENTS.map((moment, idx) => (
                <div
                  key={moment.id}
                  className="w-[300px] sm:w-[360px] lg:w-[400px] shrink-0 snap-start flex flex-col space-y-4 group cursor-default"
                >
                  {/* Photo Container */}
                  <div className="w-full aspect-[4/3] overflow-hidden shadow-lg border border-slate-300/80 bg-slate-900 relative">
                    <img
                      src={moment.imageUrl}
                      alt={moment.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Index Number Watermark */}
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs text-white text-[11px] font-mono px-2.5 py-1 font-bold">
                      MOMENT [{String(idx + 1).padStart(2, '0')} / 10]
                    </div>

                    {/* Signed Date Pill */}
                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-[#0F172A] text-[11px] font-mono px-2.5 py-1 font-bold shadow-xs">
                      {moment.date}
                    </div>
                  </div>

                  {/* Photo Metadata (Words without card container) */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-xs font-mono font-bold text-[#0369A1] uppercase tracking-wider">
                      {moment.partner}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] font-['Outfit',sans-serif] group-hover:text-[#0369A1] transition-colors leading-snug">
                      {moment.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {moment.scope}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Progression Indicator */}
            <div className="mt-14 pt-10 border-t border-slate-300/50 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-mono font-bold text-[#0F172A] tracking-widest uppercase">
                <span>BILATERAL PACT</span>
                <span className="text-cyan-600">→</span>
                <span>CURRICULUM ALIGNMENT</span>
                <span className="text-cyan-600">→</span>
                <span>CENTERS OF EXCELLENCE</span>
                <span className="text-cyan-600">→</span>
                <span className="text-[#0369A1]">FAST-TRACK HIRING</span>
              </div>

              <div className="text-xs font-mono text-slate-500 uppercase">
                OFFICE OF STRATEGIC ALLIANCES & NSDC ADVISORY
              </div>
            </div>

          </div>
        </section>

      </div>


      {/* ========================================================================= */}
      {/* MODAL / DRAWER FOR THE 3 ARCHITECTURAL PILLARS                            */}
      {/* ========================================================================= */}
      {activeModalPillar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white max-w-2xl w-full p-8 sm:p-10 border border-slate-300 shadow-2xl relative space-y-6">
            
            <button
              onClick={() => setActiveModalPillar(null)}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content for Technology Transfer */}
            {activeModalPillar === 'transfer' && (
              <div className="space-y-4">
                <div className="w-16 h-16 flex items-center justify-center mb-2">
                  <OrigamiPlaneIcon />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F172A]">
                  Technology Transfer Office (TTO)
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The Technology Transfer Office facilitates the commercialization and social deployment of research inventions generated by MSAJCE faculty and students.
                </p>
                <div className="space-y-3 pt-2 text-xs text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <span className="font-mono font-bold text-[#0369A1]">01.</span>
                    <span><strong>Invention Disclosure & IP Protection:</strong> Systematic patent filing and copyright registration through the Institute Innovation Council (IIC).</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="font-mono font-bold text-[#0369A1]">02.</span>
                    <span><strong>Licensing & Tech Commercialization:</strong> Connecting laboratory prototypes with corporate manufacturers for licensed commercial rollout.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="font-mono font-bold text-[#0369A1]">03.</span>
                    <span><strong>Startup Incubation & Seed Grants:</strong> Incubation support and Tamil Nadu MSME seed funding for student-founded ventures.</span>
                  </div>
                </div>
              </div>
            )}

            {/* Content for Industry Partnerships */}
            {activeModalPillar === 'partnership' && (
              <div className="space-y-4">
                <div className="w-16 h-16 flex items-center justify-center mb-2">
                  <BlueprintPencilIcon />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F172A]">
                  Industry Partnership Framework
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our strategic partnership division works closely with corporate enterprises to build symbiotic ecosystems tailored to industry needs.
                </p>
                <div className="space-y-3 pt-2 text-xs text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <span className="font-mono font-bold text-[#0369A1]">01.</span>
                    <span><strong>Curriculum Co-Design:</strong> Direct integration of proprietary technology stacks (AWS, Red Hat, Cisco) into university credit syllabi.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="font-mono font-bold text-[#0369A1]">02.</span>
                    <span><strong>Sponsored Capstone Projects:</strong> Industry mentors assign and evaluate real enterprise challenges as final-year projects.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="font-mono font-bold text-[#0369A1]">03.</span>
                    <span><strong>Dedicated CoE Rigs:</strong> On-campus specialized laboratories equipped with industry-grade software licenses and hardware benches.</span>
                  </div>
                </div>
              </div>
            )}

            {/* Content for Industry Liaison */}
            {activeModalPillar === 'liaison' && (
              <div className="space-y-4">
                <div className="w-16 h-16 flex items-center justify-center mb-2">
                  <IndustryLiaisonIcon />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F172A]">
                  Industry Liaison Office
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The Industry Liaison Cell acts as the primary contact point connecting faculty researchers and students with corporate R&D teams.
                </p>
                <div className="space-y-3 pt-2 text-xs text-slate-700">
                  <div className="flex items-start gap-2.5">
                    <span className="font-mono font-bold text-[#0369A1]">01.</span>
                    <span><strong>Executive Guest Lecture Series:</strong> Weekly expert talks on emerging technology trends, AI advances, and supply-chain logistics.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="font-mono font-bold text-[#0369A1]">02.</span>
                    <span><strong>In-Plant Visits & Field Days:</strong> Structured technical observational tours of manufacturing assembly lines and IT parks.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="font-mono font-bold text-[#0369A1]">03.</span>
                    <span><strong>Joint Research & Consultancy:</strong> Collaborative consultancy projects addressing specific industrial operational pain points.</span>
                  </div>
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setActiveModalPillar(null)}
                className="py-2 px-6 bg-[#0F172A] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#0369A1] transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
