import React, { useState, useRef, useEffect, useMemo } from 'react';
import { 
  Search,
  Calendar,
  ArrowRight,
  ShieldCheck,
  MapPin,
  GraduationCap,
  X,
  ExternalLink,
  Building2,
  Share2,
  Handshake,
  Network,
  Cpu,
  Workflow,
  FileText,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Award,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { MOU_PARTNERS } from '@/lib/placementData';
import { MouPartner } from '@/types/placement';

interface MoUsSectionProps {
  onOpenMou: (mou: MouPartner) => void;
}

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
    date: 'January 2024',
    scope: 'Advanced Infrastructure & Smart Built Sandbox MoU',
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
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1000&auto=format&fit=crop&q=80'
  },
  {
    id: 9,
    title: 'Autodesk Center of Digital Design',
    partner: 'Autodesk India',
    date: 'May 2024',
    scope: 'Generative Design & Digital Twin Engineering Center',
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=1000&auto=format&fit=crop&q=80'
  },
  {
    id: 10,
    title: 'Cambridge Business English Centre',
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

  const momentsContainerRef = useRef<HTMLDivElement>(null);

  const scrollMoments = (direction: 'left' | 'right') => {
    if (!momentsContainerRef.current) return;
    const scrollAmount = 360;
    momentsContainerRef.current.scrollBy({ 
      left: direction === 'left' ? -scrollAmount : scrollAmount, 
      behavior: 'smooth' 
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!momentsContainerRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = momentsContainerRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 15) {
        momentsContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        momentsContainerRef.current.scrollBy({ left: 360, behavior: 'smooth' });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const filteredMous = useMemo(() => {
    return MOU_PARTNERS.filter(m => {
      const matchesYear = selectedYear === 'ALL' || m.year === selectedYear;
      const matchesSearch = 
        m.partnerName.toLowerCase().includes(searchFilter.toLowerCase()) ||
        m.domain.toLowerCase().includes(searchFilter.toLowerCase()) ||
        m.purpose.toLowerCase().includes(searchFilter.toLowerCase());
      return matchesYear && matchesSearch;
    });
  }, [selectedYear, searchFilter]);

  const circularPartners = [
    { name: 'AWS Academy', category: 'Cloud Computing', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format&fit=crop&q=80' },
    { name: 'Cisco Networking', category: 'Cybersecurity', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&auto=format&fit=crop&q=80' },
    { name: 'Infosys Springboard', category: 'Digital Skilling', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&auto=format&fit=crop&q=80' },
    { name: 'L&T EduTech', category: 'Core Engineering', img: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=400&auto=format&fit=crop&q=80' },
    { name: 'TVS Training Services', category: 'Automotive & EV', img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&auto=format&fit=crop&q=80' },
    { name: 'Red Hat Academy', category: 'Linux Open Hybrid', img: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400&auto=format&fit=crop&q=80' },
    { name: 'Oracle Academy', category: 'Java & Cloud DB', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&auto=format&fit=crop&q=80' },
    { name: 'IBM Academic Alliance', category: 'Enterprise AI', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&auto=format&fit=crop&q=80' },
  ];

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
    <div className="relative w-full bg-page-bg text-foreground font-sans overflow-hidden">
      <div className="relative z-10 bg-page-bg text-foreground">
        
        {/* SECTION 1: HERO & INSTITUTIONAL METRICS */}
        <section className="relative w-full border-b border-border bg-page-bg px-4 py-12 sm:px-8 lg:px-14 lg:py-16">
          <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="space-y-6 lg:col-span-7">
              <span className="text-xs font-bold text-primary tracking-widest uppercase bg-card px-3.5 py-1 inline-block border border-border rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs font-oswald shadow-2xs">
                OFFICIAL BILATERAL ENGAGEMENTS
              </span>
              
              <h1 className="text-4xl font-black leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl font-oswald uppercase">
                INDUSTRY ALLIANCES & MEMORANDUMS
              </h1>
              
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base font-sans font-normal">
                Through strategic academic and industrial partnerships, MSAJCE bridges classroom learning with enterprise R&D, establishing specialized Centers of Excellence and fast-track career pipelines.
              </p>
              
              <div className="grid max-w-xl grid-cols-3 gap-4 border-t border-border pt-6">
                <div className="p-3 bg-card border border-border rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs shadow-2xs">
                  <div className="text-2xl sm:text-3xl font-black text-primary font-oswald">40+</div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground font-oswald mt-0.5">Active MoUs</div>
                </div>
                <div className="p-3 bg-card border border-border rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs shadow-2xs">
                  <div className="text-2xl sm:text-3xl font-black text-foreground font-oswald">8+</div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground font-oswald mt-0.5">Corporate CoEs</div>
                </div>
                <div className="p-3 bg-card border border-border rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs shadow-2xs">
                  <div className="text-2xl sm:text-3xl font-black text-foreground font-oswald">100%</div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground font-oswald mt-0.5">Dept Coverage</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs border border-border bg-card shadow-lg p-2">
                <div className="w-full h-[320px] sm:h-[380px] overflow-hidden rounded-sm bg-muted relative">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
                    alt="Campus and institutional partnership banner"
                    className="h-full w-full object-cover object-center"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&auto=format&fit=crop&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <span className="inline-block px-3 py-1 text-[10px] font-black uppercase tracking-wider bg-primary text-white font-oswald rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs">
                      CORPORATE CO-INNOVATION
                    </span>
                    <p className="text-xs font-bold text-white mt-1 font-oswald">
                      Joint R&D Labs & Academic Excellence Centers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: EXECUTIVE ENGAGEMENT PILLARS */}
        <section className="w-full py-16 sm:py-20 px-4 sm:px-8 lg:px-14 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-bold text-primary tracking-widest uppercase bg-card px-3.5 py-1 inline-block border border-border font-oswald rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs">
                ENGAGEMENT FRAMEWORK
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-foreground font-oswald uppercase tracking-tight">
                THREE PILLARS OF INDUSTRY INTEGRATION
              </h2>
              <p className="text-sm text-muted-foreground font-normal font-sans">
                Connecting academic research, corporate technology transfer, and institutional alliances.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              
              {/* Pillar 1: Technology Transfer */}
              <div className="flex flex-col justify-between space-y-6 bg-card border border-border p-6 rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs hover:border-primary/50 transition-all duration-200 shadow-xs">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                    <Share2 className="w-7 h-7" />
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-primary uppercase font-oswald tracking-widest">
                      PILLAR 01
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tight font-oswald uppercase">
                      Technology Transfer
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground font-normal leading-relaxed font-sans">
                    Accelerating research commercialization, patent filing, and laboratory prototype scale-up into social enterprise applications.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-border">
                    <div className="flex items-center gap-2 text-xs font-medium font-sans text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Intellectual Property (IP) Licensing</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium font-sans text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Incubation & Prototype Scale-up</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setActiveModalPillar('transfer')}
                    className="w-full py-2.5 px-4 bg-page-bg hover:bg-primary hover:text-white text-foreground border border-border text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-xs font-oswald rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs flex items-center justify-center gap-2"
                  >
                    <span>Learn Technology Transfer</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Pillar 2: Industry Partnerships */}
              <div className="flex flex-col justify-between space-y-6 bg-card border border-border p-6 rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs hover:border-primary/50 transition-all duration-200 shadow-xs">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                    <Handshake className="w-7 h-7" />
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-primary uppercase font-oswald tracking-widest">
                      PILLAR 02
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tight font-oswald uppercase">
                      Industry Partnerships
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground font-normal leading-relaxed font-sans">
                    Co-creating specialized corporate R&D sandboxes, subsidized certification vouchers, and joint curriculum Advisory boards.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-border">
                    <div className="flex items-center gap-2 text-xs font-medium font-sans text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Corporate Center of Excellence (CoE)</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium font-sans text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>100% Subsidized Certification Tracks</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setActiveModalPillar('partnership')}
                    className="w-full py-2.5 px-4 bg-page-bg hover:bg-primary hover:text-white text-foreground border border-border text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-xs font-oswald rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs flex items-center justify-center gap-2"
                  >
                    <span>Explore Partnerships</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Pillar 3: Industry Liaison */}
              <div className="flex flex-col justify-between space-y-6 bg-card border border-border p-6 rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs hover:border-primary/50 transition-all duration-200 shadow-xs">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                    <Workflow className="w-7 h-7" />
                  </div>
                  
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-primary uppercase font-oswald tracking-widest">
                      PILLAR 03
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tight font-oswald uppercase">
                      Industry Liaison Cell
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground font-normal leading-relaxed font-sans">
                    Connecting faculty researchers with enterprise CTO offices, sabbatical industry projects, and direct recruitment pipelines.
                  </p>

                  <div className="space-y-2 pt-2 border-t border-border">
                    <div className="flex items-center gap-2 text-xs font-medium font-sans text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Faculty Corporate Sabbaticals</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium font-sans text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>Direct Campus Recruitment Sprints</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setActiveModalPillar('liaison')}
                    className="w-full py-2.5 px-4 bg-page-bg hover:bg-primary hover:text-white text-foreground border border-border text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-xs font-oswald rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs flex items-center justify-center gap-2"
                  >
                    <span>Learn Industry Liaison</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 3: MARQUEE ALLIANCES STRIP */}
        <section className="w-full py-10 bg-page-bg border-b border-border overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14 mb-5 flex items-center justify-between">
            <div className="text-xs font-oswald tracking-widest text-primary font-bold uppercase">
              GLOBAL ACADEMY ALLIANCES & COE CENTERS
            </div>
            <div className="text-xs font-oswald text-muted-foreground uppercase hidden sm:inline font-bold">
              40+ LIVE BILATERAL PACTS
            </div>
          </div>

          <div className="relative w-full overflow-hidden">
            <div className="flex items-center gap-6 whitespace-nowrap animate-marquee">
              {[...circularPartners, ...circularPartners].map((partner, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 px-5 py-3 bg-card border border-border shadow-xs hover:border-primary/40 transition-all shrink-0 group cursor-default rounded-tl-lg rounded-br-lg rounded-tr-xs rounded-bl-xs"
                >
                  <div className="relative w-10 h-10 rounded-sm overflow-hidden border border-border shadow-xs shrink-0 bg-muted">
                    <img
                      src={partner.img}
                      alt={partner.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&auto=format&fit=crop&q=80";
                      }}
                    />
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-foreground font-oswald uppercase group-hover:text-primary transition-colors">
                      {partner.name}
                    </h4>
                    <p className="text-[10px] text-muted-foreground font-sans font-medium">
                      {partner.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: INSTITUTIONAL MOU MATRIX TABLE */}
        <section className="w-full py-16 sm:py-20 px-4 sm:px-8 lg:px-14 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto space-y-8">
            
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold text-primary tracking-widest uppercase bg-card px-3.5 py-1 inline-block border border-border font-oswald rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs">
                OFFICIAL REGISTRY
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground font-oswald uppercase">
                INSTITUTIONAL MOU MATRIX
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed font-normal font-sans">
                Comprehensive audit of agreement validity, participating departments, key deliverables, and validated student outcomes.
              </p>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-2 border-b-2 border-primary">
              <div className="flex flex-wrap items-center gap-2 text-xs font-oswald uppercase tracking-wider">
                {[
                  { id: '2024-25', label: '2024–25 (Active)' },
                  { id: '2023-24', label: '2023–24' },
                  { id: '2022-23', label: '2022–23' },
                  { id: 'ALL', label: 'All Covenants' },
                ].map((yr) => (
                  <button
                    key={yr.id}
                    onClick={() => setSelectedYear(yr.id)}
                    className={`px-3 py-1.5 transition-all cursor-pointer font-bold rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs ${
                      selectedYear === yr.id
                        ? 'bg-primary text-white shadow-xs'
                        : 'bg-card text-foreground hover:bg-muted border border-border'
                    }`}
                  >
                    {yr.label}
                  </button>
                ))}
              </div>

              <div className="relative w-full sm:w-72">
                <input
                  type="text"
                  placeholder="Filter MoU partner or domain..."
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  className="w-full py-2 pl-3 pr-8 bg-card border border-border text-xs focus:outline-none focus:border-primary placeholder:text-muted-foreground text-foreground rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs font-sans"
                />
                {searchFilter ? (
                  <button 
                    onClick={() => setSearchFilter('')}
                    className="absolute right-2.5 top-2.5 text-muted-foreground hover:text-foreground cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                ) : (
                  <Search className="w-4 h-4 absolute right-2.5 top-2.5 text-muted-foreground" />
                )}
              </div>
            </div>

            {/* Matrix Data Table Container */}
            <div className="bg-card border border-border shadow-xs rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-primary text-white font-oswald font-bold text-xs tracking-wider uppercase">
                      <th className="py-3.5 px-4">PARTNER ORGANISATION</th>
                      <th className="py-3.5 px-4">DOMAIN FOCUS</th>
                      <th className="py-3.5 px-4">VALIDITY</th>
                      <th className="py-3.5 px-4">DEPARTMENTS</th>
                      <th className="py-3.5 px-4">KEY DELIVERABLES & SCOPE</th>
                      <th className="py-3.5 px-4 text-right">STUDENT OUTCOME</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {mouTableData.map((row, idx) => {
                      const initials = row.partner.slice(0, 3).toUpperCase();
                      return (
                        <tr key={idx} className="hover:bg-muted/50 transition-colors">
                          <td className="py-4 px-4 font-bold text-foreground text-sm font-oswald">
                            <div className="flex items-center gap-2.5">
                              <div className="w-7 h-7 rounded-xs bg-primary/10 border border-primary/20 text-primary font-oswald font-bold text-[11px] flex items-center justify-center shrink-0">
                                {initials}
                              </div>
                              <span>{row.partner}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-primary font-sans font-bold">{row.domain}</td>
                          <td className="py-4 px-4 text-muted-foreground font-sans font-medium text-xs whitespace-nowrap">{row.duration}</td>
                          <td className="py-4 px-4">
                            <span className="px-2 py-0.5 bg-page-bg border border-border text-foreground text-[10px] font-oswald font-bold rounded-xs">
                              {row.depts}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-muted-foreground max-w-sm leading-relaxed font-sans">{row.scope}</td>
                          <td className="py-4 px-4 font-black text-foreground text-right font-oswald text-sm whitespace-nowrap">
                            <span className="px-2.5 py-1 bg-primary/10 border border-primary/20 text-primary rounded-xs">
                              {row.outcome}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 5: ACTIVE AGREEMENTS DOSSIER */}
        <section className="w-full py-16 sm:py-20 px-4 sm:px-8 lg:px-14 bg-page-bg border-b border-border">
          <div className="max-w-7xl mx-auto space-y-8">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border pb-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-primary tracking-widest uppercase bg-card px-3.5 py-1 inline-block border border-border font-oswald rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs">
                  EXECUTIVE DOSSIER
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-foreground font-oswald uppercase tracking-tight">
                  ACTIVE AGREEMENTS DOSSIER
                </h2>
              </div>
              <p className="text-xs font-oswald text-muted-foreground uppercase font-bold tracking-wider">
                EXPLORE BILATERAL PROTOCOLS, LAB RIGS & SYLLABUS INTEGRATION
              </p>
            </div>

            <div className="divide-y divide-border border-b border-border">
              {filteredMous.map((mou) => (
                <div
                  key={mou.id}
                  onClick={() => onOpenMou(mou)}
                  className="py-6 sm:py-8 group cursor-pointer transition-all duration-200 hover:bg-muted/30 px-3 rounded-md"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
                    <div className="lg:col-span-4 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-oswald text-primary font-bold uppercase tracking-wider">
                        <span>{mou.domain}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-muted-foreground font-medium">{mou.duration}</span>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl font-black text-foreground font-oswald group-hover:text-primary transition-colors leading-tight">
                        {mou.partnerName}
                      </h3>
                      
                      <div className="text-xs font-sans text-muted-foreground flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-primary shrink-0" />
                        Signed Date: {mou.date}
                      </div>
                    </div>

                    <div className="lg:col-span-6">
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-sans font-normal">
                        {mou.purpose}
                      </p>
                    </div>

                    <div className="lg:col-span-2 flex lg:justify-end items-center pt-2 lg:pt-0">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-card border border-border text-xs font-oswald font-bold text-primary group-hover:bg-primary group-hover:text-white transition-all rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs shadow-2xs">
                        <span>VIEW DETAILS</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredMous.length === 0 && (
              <div className="py-16 text-center text-xs font-sans text-muted-foreground space-y-2">
                <p className="font-bold text-sm text-foreground font-oswald uppercase">No Active Agreements Found</p>
                <p>No bilateral agreements match your selected filter parameters.</p>
                <button 
                  onClick={() => { setSearchFilter(''); setSelectedYear('ALL'); }}
                  className="px-3 py-1.5 bg-primary text-white font-oswald text-xs font-bold uppercase rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs cursor-pointer"
                >
                  Reset Filter Parameters
                </button>
              </div>
            )}

          </div>
        </section>

        {/* SECTION 6: CEREMONIES & MOMENTS CAROUSEL */}
        <section className="w-full py-16 sm:py-20 px-4 sm:px-8 lg:px-14 bg-background border-b border-border overflow-hidden">
          <div className="max-w-7xl mx-auto space-y-8">
            
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-primary tracking-widest uppercase bg-card px-3.5 py-1 inline-block border border-border font-oswald rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs">
                  ARCHIVAL CEREMONY RECORD
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-foreground font-oswald uppercase tracking-tight">
                  MOU SIGNING CEREMONIES & MOMENTS
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => scrollMoments('left')}
                  className="p-2 bg-card border border-border text-foreground hover:bg-primary hover:text-white transition-colors cursor-pointer rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs shadow-2xs"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollMoments('right')}
                  className="p-2 bg-card border border-border text-foreground hover:bg-primary hover:text-white transition-colors cursor-pointer rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs shadow-2xs"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div 
              ref={momentsContainerRef}
              className="flex items-stretch gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory"
              style={{ scrollBehavior: 'smooth' }}
            >
              {MOU_MOMENTS.map((moment, idx) => (
                <div
                  key={moment.id}
                  className="w-[300px] sm:w-[360px] lg:w-[400px] shrink-0 snap-start flex flex-col space-y-4 bg-card border border-border p-3.5 rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs shadow-xs"
                >
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-sm bg-muted relative">
                    <img
                      src={moment.imageUrl}
                      alt={moment.title}
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000&auto=format&fit=crop&q=80";
                      }}
                    />
                    
                    <div className="absolute top-3 left-3 bg-black/80 text-white text-[10px] font-oswald px-2.5 py-1 font-bold rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs shadow-xs">
                      MOMENT [{String(idx + 1).padStart(2, '0')} / 10]
                    </div>

                    <div className="absolute bottom-3 right-3 bg-black/80 text-white text-[10px] font-oswald px-2.5 py-1 font-bold rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs shadow-xs">
                      {moment.date}
                    </div>
                  </div>

                  <div className="space-y-1.5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] font-bold text-primary uppercase font-oswald tracking-wider">
                        {moment.partner}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-foreground font-oswald leading-snug mt-0.5">
                        {moment.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed font-sans mt-1">
                        {moment.scope}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </div>

      {/* INTERACTIVE MODAL DIALOG */}
      {activeModalPillar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in">
          <div className="bg-card text-foreground max-w-2xl w-full p-6 sm:p-8 border border-border shadow-2xl relative space-y-6 rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs">
            
            <button
              onClick={() => setActiveModalPillar(null)}
              className="absolute top-5 right-5 p-1.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer rounded-xs"
            >
              <X className="w-5 h-5" />
            </button>

            {activeModalPillar === 'transfer' && (
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                  <Share2 className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-primary uppercase font-oswald tracking-widest">
                    OFFICIAL ENGAGEMENT CELL
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-foreground font-oswald uppercase">
                    Technology Transfer Office (TTO)
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                  The Technology Transfer Office facilitates the commercialization and social deployment of research inventions generated by MSAJCE faculty and students.
                </p>
                <div className="space-y-2 pt-2 border-t border-border">
                  <div className="flex items-center gap-2 text-xs font-bold font-sans text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Comprehensive patent drafting, filing, and prior art search assistance</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold font-sans text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Incubation funding for TRL-5 and above laboratory hardware prototypes</span>
                  </div>
                </div>
              </div>
            )}

            {activeModalPillar === 'partnership' && (
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                  <Handshake className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-primary uppercase font-oswald tracking-widest">
                    OFFICIAL ENGAGEMENT CELL
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-foreground font-oswald uppercase">
                    Industry Partnership Division
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                  Our strategic partnership division works closely with corporate enterprises to build symbiotic ecosystems tailored to modern engineering needs.
                </p>
                <div className="space-y-2 pt-2 border-t border-border">
                  <div className="flex items-center gap-2 text-xs font-bold font-sans text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Co-funded Centers of Excellence with enterprise technology leaders</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold font-sans text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Curriculum advisory panels with direct corporate CTO representation</span>
                  </div>
                </div>
              </div>
            )}

            {activeModalPillar === 'liaison' && (
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                  <Workflow className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-primary uppercase font-oswald tracking-widest">
                    OFFICIAL ENGAGEMENT CELL
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-foreground font-oswald uppercase">
                    Industry Liaison Office
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                  The Industry Liaison Cell acts as the primary contact point connecting faculty researchers and students with corporate engineering leadership.
                </p>
                <div className="space-y-2 pt-2 border-t border-border">
                  <div className="flex items-center gap-2 text-xs font-bold font-sans text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Faculty sabbatical immersion inside enterprise engineering R&D hubs</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold font-sans text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Fast-track recruitment drives for high-performing student project cohorts</span>
                  </div>
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-border flex justify-end">
              <button
                onClick={() => setActiveModalPillar(null)}
                className="py-2 px-6 bg-primary text-white font-oswald text-xs font-bold uppercase tracking-wider rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs hover:bg-primary/90 transition-colors cursor-pointer"
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
