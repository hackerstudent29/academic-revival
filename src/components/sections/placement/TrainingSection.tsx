import React, { useState } from 'react';
import { 
  BrainCircuit, 
  MessageSquareText, 
  Code2, 
  Microscope, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Facility } from '@/types/placement';

interface TrainingSectionProps {
  onOpenFacility?: (facility: Facility) => void;
  onNavigate?: (sectionId: string) => void;
}

export const TrainingSection: React.FC<TrainingSectionProps> = ({ onOpenFacility }) => {
  const [activeHotspotId, setActiveHotspotId] = useState<string>('lab');

  const skillPillars = [
    {
      name: 'Quantitative Aptitude & Logic',
      category: 'Foundation',
      desc: 'Speed mathematics, logical deduction, and online diagnostic assessments mirroring national recruiter test formats.',
      icon: BrainCircuit,
    },
    {
      name: 'Corporate Communication',
      category: 'Soft Skills',
      desc: 'Workplace presentation clarity, professional verbal articulation, active listening, and business email etiquette.',
      icon: MessageSquareText,
    },
    {
      name: 'Full-Stack Technical Skills',
      category: 'Core Competency',
      desc: 'Data structures, algorithms, cloud computing, and core domain engineering (VLSI, Embedded, CAD/CAM, Robotics).',
      icon: Code2,
    },
    {
      name: 'Industry Certifications',
      category: 'Value-Add',
      desc: 'Hands-on training and exam vouchers for AWS Academy, Cisco CCNA, Oracle Java, RedHat Linux, and NPTEL.',
      icon: Microscope,
    }
  ];

  const trainingProgression = [
    {
      semester: 'Semesters 1–2',
      title: 'Foundation & English Proficiency',
      desc: 'Diagnostic assessments, communication drills, and foundational math reasoning.'
    },
    {
      semester: 'Semesters 3–4',
      title: 'Data Structures & Core Engineering',
      desc: 'Hands-on coding, branch-specific technology laboratories, and value-added courses.'
    },
    {
      semester: 'Semesters 5–6',
      title: 'Advanced Aptitude & In-Plant Training',
      desc: 'Timed online CBT tests, mandatory summer internships, and STAR interview prep.'
    },
    {
      semester: 'Semesters 7–8',
      title: 'Campus Recruitment & Onboarding',
      desc: 'Executive mock panels, Day-1 campus hiring drives, and PPO offer confirmations.'
    }
  ];

  const facilityHotspots: (Facility & { specs: string[]; num: string; sub: string })[] = [
    {
      id: 'lab',
      num: '01',
      name: 'COMPUTER LABS (CBT)',
      category: 'Computing Infrastructure',
      capacity: '600+ Terminals',
      sub: 'Online Training & Examinations',
      description: 'Established high-capacity computer laboratories equipped with 600+ network workstations, dedicated gigabit optical fiber lines, and proctored testing infrastructure for national recruitment assessments.',
      specs: ['600+ High-end Workstations', '1 Gbps Dedicated Leased Line', 'Uninterrupted Power Backup', 'Air-Conditioned CBT Suites'],
      equipment: ['600+ Dell & HP Desktops', 'Gigabit CISCO Switches', 'Online Proctoring Software'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&auto=format&fit=crop&q=85',
    },
    {
      id: 'interview',
      num: '02',
      name: 'INTERVIEW CABINS',
      category: 'Recruitment Suites',
      capacity: '12 Cabins',
      sub: 'One-on-One Technical & HR Evaluations',
      description: 'Well-furnished, acoustic-treated air-conditioned interview cabins designed for corporate recruiters to conduct one-on-one technical evaluations and executive HR panels in complete privacy.',
      specs: ['12 Dedicated Interview Cabins', 'Corporate Hospitality Lounges', 'High-definition Video Conferencing', 'Acoustic Soundproofing'],
      equipment: ['Video Conferencing Sets', 'Acoustic Wall Paneling', 'Executive Seating'],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&auto=format&fit=crop&q=85',
    },
    {
      id: 'gd',
      num: '03',
      name: 'GROUP DISCUSSION SUITES',
      category: 'Discussion Chambers',
      capacity: '4 Chambers',
      sub: 'Dedicated Chambers for GD Assessment',
      description: 'Circular discussion chambers equipped with conference audio arrays and moderator seating where students practise and undergo real placement group interactions.',
      specs: ['Circular Interaction Layout', 'Moderator & Observer Consoles', 'Audio-Visual Capture System', 'Comfortable Executive Seating'],
      equipment: ['Conference Microphones', 'Overhead HD Cameras', 'Circular Oak Table'],
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=85',
    },
    {
      id: 'seminar',
      num: '04',
      name: 'SEMINAR AUDITORIUMS',
      category: 'Auditoriums',
      capacity: '450+ Seats',
      sub: 'Pre-Placement Talks & Conclaves',
      description: 'Fully air-conditioned auditoriums and seminar halls with 450+ seating capacity, line-array audio systems, and laser projection setups for Pre-Placement Talks (PPT) and guest lectures.',
      specs: ['450+ Seating Capacity', 'Laser Projection & Line-Array Audio', 'Dual Green Rooms', 'Centralized Climate Control'],
      equipment: ['4K Laser Projectors', 'JBL Line Array Acoustics', 'Motorized Screens'],
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1000&auto=format&fit=crop&q=85',
    }
  ];

  const activeHotspot = facilityHotspots.find(h => h.id === activeHotspotId) ?? facilityHotspots[0]!;

  const studentClubs = [
    {
      name: 'Photography & Media Club',
      tag: 'VISUAL ARTS',
      desc: 'Campus visual storytelling, portraiture, and high-speed photography.',
      image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&auto=format&fit=crop&q=80'
    },
    {
      name: 'Startup & Incubation Club',
      tag: 'ENTREPRENEURSHIP',
      desc: 'Business ideation, investor pitching, MVP design, and patent validation.',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&auto=format&fit=crop&q=80'
    },
    {
      name: 'Trading & Finance Club',
      tag: 'MARKETS',
      desc: 'Stock market dynamics, technical charting, and financial literacy.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&auto=format&fit=crop&q=80'
    },
    {
      name: 'Literary & Debating Club',
      tag: 'ORATORY',
      desc: 'Parliamentary debates, MUN simulations, and corporate speechcraft.',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=80'
    },
    {
      name: 'Robotics & Tech Club',
      tag: 'INNOVATION',
      desc: 'Autonomous bot building, IoT fabrication, and drone design sprints.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="w-full">
      {/* SECTION 1: Canvas A (White / #121214) — Skill Architecture */}
      <section className="pt-10 sm:pt-14 md:pt-16 lg:pt-20 pb-6 sm:pb-8 md:pb-10 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            SKILLS TRAINING &amp; READINESS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {skillPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 flex items-start gap-3.5 sm:gap-4 hover:bg-foreground/[0.015] transition-colors"
                >
                  <span className="shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs sm:text-sm mt-0.5 border border-foreground/20">
                    <Icon className="w-4 h-4 text-primary" />
                  </span>
                  <div className="space-y-1 flex-1">
                    <span className="text-[10px] font-black font-oswald uppercase text-primary tracking-wider block">
                      {pillar.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-oswald uppercase tracking-tight text-foreground leading-snug">
                      {pillar.name}
                    </h3>
                    <p className="text-sm text-foreground font-libre font-medium leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wave Divider A -> B */}
      <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-8 md:h-10 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-[#F3F3F2] dark:fill-[#18181B]"
          />
        </svg>
      </div>

      {/* SECTION 2: Canvas B (#F3F3F2 / #18181B) — Training Progression Timeline */}
      <section className="py-6 sm:py-8 md:py-10 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            SEMESTER TRAINING PROGRESSION
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {trainingProgression.map((prog, idx) => (
              <div
                key={idx}
                className="p-3.5 sm:p-4 space-y-2 hover:bg-foreground/[0.015] transition-colors"
              >
                <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs border border-foreground/20">
                  0{idx + 1}
                </span>
                <span className="text-xs font-black font-oswald uppercase text-primary block pt-1">
                  {prog.semester}
                </span>
                <h3 className="text-base sm:text-lg font-bold font-oswald uppercase tracking-tight text-foreground leading-snug">
                  {prog.title}
                </h3>
                <p className="text-sm text-foreground font-libre font-medium leading-relaxed">
                  {prog.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Divider B -> A */}
      <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-8 md:h-10 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-white dark:fill-[#121214]"
          />
        </svg>
      </div>

      {/* SECTION 3: Canvas A (White / #121214) — Training Facilities */}
      <section className="py-6 sm:py-8 md:py-10 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            PLACEMENT TRAINING INFRASTRUCTURE
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Facility Selector Buttons */}
            <div className="lg:col-span-5 space-y-2.5">
              {facilityHotspots.map((fac) => {
                const isSelected = activeHotspotId === fac.id;
                return (
                  <button
                    key={fac.id}
                    onClick={() => setActiveHotspotId(fac.id)}
                    className={`w-full p-3.5 sm:p-4 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs text-left transition-all cursor-pointer border flex items-center justify-between ${
                      isSelected
                        ? 'bg-primary text-white border-primary shadow-md'
                        : 'bg-foreground/[0.02] text-foreground border-border/80 dark:border-white/10 hover:border-primary/50'
                    }`}
                  >
                    <div>
                      <h3 className="text-sm sm:text-base font-bold font-oswald uppercase tracking-tight">
                        {fac.name}
                      </h3>
                      <p className={`text-xs font-libre mt-0.5 ${
                        isSelected ? 'text-white/90' : 'text-foreground/70'
                      }`}>
                        {fac.sub}
                      </p>
                    </div>
                    <ChevronRight className={`w-4 h-4 shrink-0 ${isSelected ? 'text-white' : 'text-primary'}`} />
                  </button>
                );
              })}
            </div>

            {/* Active Facility View */}
            <div className="lg:col-span-7 space-y-4">
              <div className="aspect-[16/9] rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs overflow-hidden bg-muted shadow-sm">
                <img 
                  src={activeHotspot.image} 
                  alt={activeHotspot.name} 
                  className="w-full h-full object-cover select-none pointer-events-none" 
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-base sm:text-lg font-bold font-oswald uppercase text-primary">
                    {activeHotspot.name}
                  </h3>
                  {onOpenFacility && (
                    <button
                      onClick={() => onOpenFacility(activeHotspot)}
                      className="px-3 py-1 bg-primary/10 hover:bg-primary text-primary hover:text-white rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs text-xs font-bold font-oswald uppercase tracking-wider transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <span>Gallery</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  )}
                </div>
                <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                  {activeHotspot.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                {activeHotspot.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                    <span className="text-xs sm:text-sm text-foreground font-libre font-medium">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider A -> B */}
      <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-8 md:h-10 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-[#F3F3F2] dark:fill-[#18181B]"
          />
        </svg>
      </div>

      {/* SECTION 4: Canvas B (#F3F3F2 / #18181B) — Student Clubs */}
      <section className="py-6 sm:py-8 md:py-10 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors pb-12 sm:pb-16">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            STUDENT TECHNICAL &amp; PROFESSIONAL CLUBS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
            {studentClubs.map((club, cIdx) => (
              <div 
                key={cIdx}
                className="space-y-2 hover:bg-foreground/[0.015] p-2 transition-colors"
              >
                <div className="aspect-[4/3] rounded-tl-lg rounded-br-lg rounded-tr-xs rounded-bl-xs overflow-hidden bg-muted shadow-xs">
                  <img 
                    src={club.image} 
                    alt={club.name} 
                    className="w-full h-full object-cover select-none pointer-events-none" 
                  />
                </div>
                <div>
                  <span className="text-[10px] font-black font-oswald uppercase tracking-wider text-primary">
                    {club.tag}
                  </span>
                  <h3 className="text-sm font-bold font-oswald uppercase text-foreground leading-snug">
                    {club.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/80 font-libre mt-0.5 leading-relaxed">
                    {club.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
