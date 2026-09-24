import React from 'react';
import { 
  BrainCircuit, 
  MessageSquareText, 
  Code2, 
  Microscope,
  ExternalLink 
} from 'lucide-react';
import { Facility } from '@/types/placement';
import { ImageAutoSlider } from '@/components/ui/image-auto-slider';

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

  const infrastructureFeatures = [
    {
      id: 'cbt',
      num: '01',
      title: 'Computer Labs for Online Exams',
      desc: 'Well established Computer labs equipped for online skill training and proctored recruitment examinations.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 'interview',
      num: '02',
      title: 'Interview & Evaluation Cabins',
      desc: 'Well-furnished air-conditioned rooms designed for written tests, technical evaluations, and face-to-face HR interviews.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 'gd',
      num: '03',
      title: 'Dedicated AC Group Discussion Rooms',
      desc: 'Dedicated air-conditioned rooms for conducting group discussions, mock debates, and panel interactions.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    },
    {
      id: 'auditorium',
      num: '04',
      title: 'AC Auditoriums & Seminar Halls',
      desc: 'Air-conditioned Auditorium, Seminar Halls, and Meeting Halls for Pre-Placement Talks (PPT) and conclaves.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80',
    },
  ];

  const studentTrainingReports = [
    {
      year: 'AY 2025–26',
      title: 'Student Training Program Annual Schedule & Reports',
      url: 'https://www.msajce-edu.in/uploads/placement/training/Training2025-26.pdf',
    },
    {
      year: 'AY 2024–25',
      title: 'Student Training Program Annual Schedule & Reports',
      url: 'https://www.msajce-edu.in/uploads/placement/training/Training2024-25.pdf',
    },
    {
      year: 'AY 2023–24',
      title: 'Student Training Program Annual Schedule & Reports',
      url: 'https://www.msajce-edu.in/uploads/placement/training/Training2023-24.pdf',
    },
    {
      year: 'AY 2022–23',
      title: 'Student Training Program Annual Schedule & Reports',
      url: 'https://www.msajce-edu.in/uploads/placement/training/Training2022-23.pdf',
    },
  ];

  return (
    <div className="w-full">
      {/* SECTION 1: Canvas A (White / #121214) — Skill Architecture & Career Counselling */}
      <section className="pt-8 sm:pt-12 md:pt-14 pb-8 sm:pb-12 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            SKILLS TRAINING &amp; CAREER COUNSELLING
          </h2>

          <div className="space-y-4 w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
            <p>
              At Mohamed Sathak A.J. College of Engineering, comprehensive career counselling is available on campus directing students to choose the best possible academic and professional stream that meets their requirements in a unique way.
            </p>
            <p>
              Students are guided by dedicated faculty mentors who address individual learning needs, conduct diagnostic skill mapping, and keep them focused on achieving their specific placement targets throughout their academic tenure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
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

      {/* SECTION 2: Canvas B (#F3F3F2 / #18181B) — Training & Placement Infrastructure */}
      <section className="pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-14 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            TRAINING &amp; PLACEMENT INFRASTRUCTURE
          </h2>

          <ImageAutoSlider />
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

      {/* SECTION 3: Canvas A (White / #121214) — Student Training Program Annual Reports */}
      <section className="pt-8 sm:pt-10 md:pt-12 pb-14 sm:pb-18 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            STUDENT TRAINING PROGRAM REPORTS
          </h2>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-border/60">
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5 w-32">
                    Academic Year
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5">
                    Program Document / Schedule
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5 w-28 text-center">
                    Report Link
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {studentTrainingReports.map((row, idx) => (
                  <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                    <td className="px-4 py-3.5 font-oswald font-bold text-primary text-sm whitespace-nowrap">
                      {row.year}
                    </td>
                    <td className="px-4 py-3.5 font-libre font-bold text-foreground text-sm">
                      {row.title}
                    </td>
                    <td className="px-4 py-3.5 text-center align-middle whitespace-nowrap">
                      <a
                        href={row.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold font-oswald uppercase text-primary hover:underline"
                      >
                        <span>View PDF</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
