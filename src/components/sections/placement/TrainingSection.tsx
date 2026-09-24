import React from 'react';
import { 
  BrainCircuit, 
  MessageSquareText, 
  Code2, 
  Microscope 
} from 'lucide-react';
import { Facility } from '@/types/placement';

interface TrainingSectionProps {
  onOpenFacility?: (facility: Facility) => void;
  onNavigate?: (sectionId: string) => void;
}

export const TrainingSection: React.FC<TrainingSectionProps> = () => {
  const skillPillars = [
    {
      name: 'Quantitative Aptitude & Logic',
      category: 'Foundation',
      desc: 'Speed mathematics, logical reasoning, and recruiter diagnostic test formats.',
      icon: BrainCircuit,
    },
    {
      name: 'Corporate Communication',
      category: 'Soft Skills',
      desc: 'Verbal articulation, workplace presentation clarity, and executive email etiquette.',
      icon: MessageSquareText,
    },
    {
      name: 'Full-Stack Technical Skills',
      category: 'Core Competency',
      desc: 'Data structures, algorithms, cloud computing, and core domain engineering.',
      icon: Code2,
    },
    {
      name: 'Industry Certifications',
      category: 'Value-Add',
      desc: 'Hands-on credentials for AWS Academy, Cisco CCNA, Oracle Java, and RedHat.',
      icon: Microscope,
    },
  ];

  const trainingProgression = [
    {
      num: '01',
      semester: 'Semesters 1–2',
      title: 'Foundation & English Drills',
      desc: 'Diagnostic assessments, verbal communication, and foundational reasoning.',
    },
    {
      num: '02',
      semester: 'Semesters 3–4',
      title: 'Data Structures & Core Tech',
      desc: 'Hands-on coding, branch technology labs, and certified value-added courses.',
    },
    {
      num: '03',
      semester: 'Semesters 5–6',
      title: 'Advanced Aptitude & Internships',
      desc: 'Timed online CBT tests, mandatory summer internships, and STAR prep.',
    },
    {
      num: '04',
      semester: 'Semesters 7–8',
      title: 'Campus Hiring & PPOs',
      desc: 'Executive mock panels, Day-1 campus hiring drives, and PPO confirmations.',
    },
  ];

  const infrastructure = [
    {
      id: 'lab',
      name: 'Computer Labs (CBT)',
      capacity: '600+ Workstations',
      desc: 'Gigabit network workstations and proctored online testing suites for recruitment drives.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 'interview',
      name: 'Interview Cabins',
      capacity: '12 Cabins',
      desc: 'Acoustic-treated air-conditioned suites for one-on-one technical and HR interviews.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 'gd',
      name: 'Group Discussion Suites',
      capacity: '4 Chambers',
      desc: 'Circular discussion chambers equipped with audio-visual capture and moderator seating.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 'seminar',
      name: 'Seminar Auditoriums',
      capacity: '450+ Seats',
      desc: 'Air-conditioned auditoriums with 4K laser projection for Pre-Placement Talks (PPT).',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div className="w-full">
      {/* SECTION 1: Canvas A (White / #121214) — Skill Architecture */}
      <section className="pt-8 sm:pt-12 md:pt-14 pb-8 sm:pb-12 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            SKILLS TRAINING &amp; READINESS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="space-y-2 py-1">
                  <div className="flex items-center gap-3">
                    <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs border border-foreground/20">
                      <Icon className="w-4 h-4 text-primary" />
                    </span>
                    <span className="text-[10px] font-black font-oswald uppercase text-primary tracking-wider">
                      {pillar.category}
                    </span>
                  </div>
                  <h3 className="text-base font-bold font-oswald uppercase text-foreground leading-snug">
                    {pillar.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/80 font-libre font-medium leading-relaxed">
                    {pillar.desc}
                  </p>
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
          className="w-full h-8 sm:h-12 md:h-14 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-[#F3F3F2] dark:fill-[#18181B]"
          />
        </svg>
      </div>

      {/* SECTION 2: Canvas B (#F3F3F2 / #18181B) — Semester Progression */}
      <section className="pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-14 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            SEMESTER TRAINING PROGRESSION
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingProgression.map((prog) => (
              <div key={prog.num} className="space-y-2 py-1">
                <div className="flex items-center gap-3">
                  <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs border border-primary/20">
                    {prog.num}
                  </span>
                  <span className="text-xs font-black font-oswald uppercase text-primary">
                    {prog.semester}
                  </span>
                </div>
                <h3 className="text-base font-bold font-oswald uppercase text-foreground leading-snug">
                  {prog.title}
                </h3>
                <p className="text-xs sm:text-sm text-foreground/80 font-libre font-medium leading-relaxed">
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
          className="w-full h-8 sm:h-12 md:h-14 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-white dark:fill-[#121214]"
          />
        </svg>
      </div>

      {/* SECTION 3: Canvas A (White / #121214) — Placement Infrastructure */}
      <section className="pt-8 sm:pt-10 md:pt-12 pb-14 sm:pb-18 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            PLACEMENT TRAINING INFRASTRUCTURE
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {infrastructure.map((fac) => (
              <div key={fac.id} className="space-y-3 group py-1">
                <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-muted border border-border/30">
                  <img
                    src={fac.image}
                    alt={fac.name}
                    className="w-full h-full object-cover select-none pointer-events-none"
                  />
                  <span className="absolute top-2.5 right-2.5 bg-primary text-white text-[10px] font-bold font-oswald uppercase tracking-wider px-2 py-0.5 rounded-sm shadow-sm">
                    {fac.capacity}
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold font-oswald uppercase text-foreground leading-snug">
                    {fac.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/80 font-libre font-medium leading-relaxed">
                    {fac.desc}
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
