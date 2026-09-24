import React from 'react';
import { ExternalLink } from 'lucide-react';
import { MouPartner } from '@/types/placement';

interface MoUsSectionProps {
  onOpenMou?: (mou: MouPartner) => void;
}

export const MoUsSection: React.FC<MoUsSectionProps> = () => {
  const iiiCellObjectives = [
    "Facilitate regular interactions with industry experts through guest lectures and sessions on current industrial practices.",
    "Support curriculum enhancement through industry participation, including value-added courses and specialized training.",
    "Provide students with exposure to industry through periodic industrial visits and ensure internship opportunities for all.",
    "Promote consultancy activities by faculty members in collaboration with corporate industries.",
    "Organize Faculty Development Programs (FDPs) to keep faculty updated with advancements in their respective domains.",
    "Coordinate and conduct placement drives to enhance employment opportunities for students.",
    "Establish industry-oriented laboratories and Centers of Excellence (CoEs) to support practical learning.",
    "Foster strong partnerships by signing Memoranda of Understanding (MoUs) with industries for mutual growth.",
    "Organize workshops, conferences, seminars, and guest lectures with active participation from academia and industry.",
    "Encourage and facilitate mandatory industrial training for faculty to upgrade technical knowledge and industry exposure.",
  ];

  const mouTableData = [
    {
      partner: 'AWS Academy (Amazon Web Services)',
      domain: 'Cloud Computing, DevOps & Generative AI',
      depts: 'CSE, IT, AI&DS',
      scope: 'AWS Cloud Practitioner, Solutions Architect labs, 600+ cloud exam vouchers',
      outcome: '92 Certified Students'
    },
    {
      partner: 'Cisco Networking Academy',
      domain: 'Cybersecurity, Routing & Switching',
      depts: 'ECE, EEE, CSE, IT',
      scope: 'CCNA Routing, Network Security labs, Enterprise Packet Tracer sandboxes',
      outcome: '120 CCNA Badges'
    },
    {
      partner: 'Infosys Springboard',
      domain: 'Enterprise Full Stack & Agile Engineering',
      depts: 'All Engineering Streams',
      scope: 'Curated 1000+ digital learning modules, direct GenC pooled recruitment track',
      outcome: '450 Active Learners'
    },
    {
      partner: 'TVS Training Services',
      domain: 'Automotive Mechatronics & EV Powertrains',
      depts: 'MECH, EEE, ECE',
      scope: 'In-plant EV powertrain training, CAD modeling rigs, guaranteed in-plant internships',
      outcome: '48 In-Plant Interns'
    },
    {
      partner: 'L&T EduTech',
      domain: 'Infrastructure, BIM & Smart Construction',
      depts: 'CIVIL, MECH',
      scope: '3D BIM structural modeling software suites, on-site construction live capstones',
      outcome: '35 BIM Trainees'
    },
    {
      partner: 'Red Hat Enterprise',
      domain: 'Linux Kernel & Open Hybrid Cloud',
      depts: 'CSE, IT',
      scope: 'RHCSA certification training, containerization with Podman and OpenShift',
      outcome: '42 RHCSA Certified'
    },
  ];

  const iiiCellActivities = [
    {
      activity: 'MoU (Bilateral Corporate Accords)',
      ay25: 'https://www.msajce-edu.in/uploads/placement/colloboration/MOU/MoU2025.pdf',
      ay24: 'https://www.msajce-edu.in/uploads/placement/colloboration/MOU/MoU2024.pdf',
      ay23: 'https://www.msajce-edu.in/uploads/placement/colloboration/MOU/MoU2023.pdf',
      ay22: 'https://www.msajce-edu.in/uploads/placement/colloboration/MOU/MoU2022.pdf',
    },
    {
      activity: 'Industrial Internships & PPOs',
      ay25: null,
      ay24: 'https://www.msajce-edu.in/uploads/placement/colloboration/INTERNSHIP/Internship2024-25.pdf',
      ay23: 'https://www.msajce-edu.in/uploads/placement/colloboration/INTERNSHIP/Internship2023-24.pdf',
      ay22: 'https://www.msajce-edu.in/uploads/placement/colloboration/INTERNSHIP/Internship2022-23.pdf',
    },
    {
      activity: 'Campus Placement Drives',
      ay25: 'https://www.msajce-edu.in/uploads/placement/colloboration/PLACEMENT/placementdetails2025-2026.pdf',
      ay24: 'https://www.msajce-edu.in/uploads/placement/colloboration/PLACEMENT/placementdetails2024-2025.pdf',
      ay23: 'https://www.msajce-edu.in/uploads/placement/colloboration/PLACEMENT/placementdetails2023-2024.pdf',
      ay22: 'https://www.msajce-edu.in/uploads/placement/colloboration/PLACEMENT/placementdetails2022-2023.pdf',
    },
    {
      activity: 'Industrial Visits (IV)',
      ay25: 'https://www.msajce-edu.in/uploads/placement/colloboration/INDUSTRY-VISIT/IV25-26.pdf',
      ay24: 'https://www.msajce-edu.in/uploads/placement/colloboration/INDUSTRY-VISIT/IV24-25.pdf',
      ay23: 'https://www.msajce-edu.in/uploads/placement/colloboration/INDUSTRY-VISIT/IV23-24.pdf',
      ay22: 'https://www.msajce-edu.in/uploads/placement/colloboration/INDUSTRY-VISIT/IV22-23.pdf',
    },
    {
      activity: 'Advisory Board Committee',
      ay25: 'https://www.msajce-edu.in/uploads/placement/colloboration/ADVISORY-BOARD/AY25-26COMMITTEE.pdf',
      ay24: 'https://www.msajce-edu.in/uploads/placement/colloboration/ADVISORY-BOARD/AY24-25COMMITTEE.pdf',
      ay23: 'https://www.msajce-edu.in/uploads/placement/colloboration/ADVISORY-BOARD/AY23-24COMMITTEE.pdf',
      ay22: null,
    },
  ];

  return (
    <div className="w-full">
      {/* SECTION 1: Canvas A (White / #121214) — Industry-Institute Interaction Cell (III Cell) */}
      <section className="pt-8 sm:pt-12 md:pt-14 pb-10 sm:pb-14 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            INDUSTRY–INSTITUTE INTERACTION CELL (III CELL)
          </h2>

          <div className="space-y-4 w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
            <p>
              Mohamed Sathak A.J. College of Engineering emphasizes strong collaboration between academia and industry through its Industry–Institute Interaction (III) Cell. The cell fosters strategic partnerships with corporate industries to enhance student learning, technological innovation, and employability.
            </p>
            <p>
              Serving as an active platform for students to understand current industrial expectations, identify emerging skill gaps, and upgrade technical competencies through internships, industrial visits, and expert interactions, the III Cell also supports faculty members in aligning academic practices with industry demands.
            </p>
          </div>

          <div className="pt-4 space-y-4">
            <h3 className="text-lg font-bold font-oswald uppercase text-foreground">
              Objectives of the III Cell
            </h3>
            <div className="divide-y divide-border/40 font-libre">
              {iiiCellObjectives.map((obj, idx) => (
                <div
                  key={idx}
                  className="py-3 px-1 sm:px-3 flex items-start gap-3 sm:gap-4 hover:bg-primary/[0.02] transition-colors"
                >
                  <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs mt-0.5 border border-primary/20 shadow-2xs">
                    {idx + 1}
                  </span>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed flex-1 pt-0.5">
                    {obj}
                  </p>
                </div>
              ))}
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
          className="w-full h-8 sm:h-12 md:h-14 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-[#F3F3F2] dark:fill-[#18181B]"
          />
        </svg>
      </div>

      {/* SECTION 2: Canvas B (#F3F3F2 / #18181B) — III Cell Annual Reports Table */}
      <section className="pt-8 sm:pt-10 md:pt-12 pb-10 sm:pb-14 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            INDUSTRY INSTITUTION INTERACTION CELL ACTIVITIES
          </h2>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-border/60">
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5">
                    III Cell Activity / Domain
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5 text-center w-28">
                    AY 2025–26
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5 text-center w-28">
                    AY 2024–25
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5 text-center w-28">
                    AY 2023–24
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5 text-center w-28">
                    AY 2022–23
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {iiiCellActivities.map((row, idx) => (
                  <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                    <td className="px-4 py-3.5 font-libre font-bold text-foreground text-sm">
                      {row.activity}
                    </td>
                    <td className="px-4 py-3.5 text-center align-middle">
                      {row.ay25 ? (
                        <a
                          href={row.ay25}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold font-oswald uppercase text-primary hover:underline"
                        >
                          <span>View</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-xs text-foreground/40 font-mono">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3.5 text-center align-middle">
                      {row.ay24 ? (
                        <a
                          href={row.ay24}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold font-oswald uppercase text-primary hover:underline"
                        >
                          <span>View</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-xs text-foreground/40 font-mono">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3.5 text-center align-middle">
                      {row.ay23 ? (
                        <a
                          href={row.ay23}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold font-oswald uppercase text-primary hover:underline"
                        >
                          <span>View</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-xs text-foreground/40 font-mono">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3.5 text-center align-middle">
                      {row.ay22 ? (
                        <a
                          href={row.ay22}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-bold font-oswald uppercase text-primary hover:underline"
                        >
                          <span>View</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="text-xs text-foreground/40 font-mono">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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

      {/* SECTION 3: Canvas A (White / #121214) — Corporate Accords Directory */}
      <section className="pt-8 sm:pt-10 md:pt-12 pb-14 sm:pb-18 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            ACTIVE CORPORATE &amp; TECHNOLOGY ACCORDS
          </h2>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-border/60">
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5 w-16">
                    S.No
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5 w-56">
                    Partner Organisation
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5">
                    Domain &amp; Technical Scope
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5 w-32">
                    Departments
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 py-3.5 w-44">
                    Verified Outcome
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {mouTableData.map((mou, idx) => (
                  <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                    <td className="px-4 py-3.5 font-oswald font-bold text-primary text-sm whitespace-nowrap">
                      {String(idx + 1).padStart(2, "0")}
                    </td>
                    <td className="px-4 py-3.5 font-libre font-bold text-foreground text-sm">
                      {mou.partner}
                    </td>
                    <td className="px-4 py-3.5 font-libre font-medium text-xs sm:text-sm text-foreground">
                      <p className="font-semibold text-foreground">{mou.domain}</p>
                      <p className="text-foreground/75 text-xs mt-0.5">{mou.scope}</p>
                    </td>
                    <td className="px-4 py-3.5 font-oswald font-bold text-foreground text-xs sm:text-sm whitespace-nowrap">
                      {mou.depts}
                    </td>
                    <td className="px-4 py-3.5 font-oswald font-bold text-primary text-xs sm:text-sm whitespace-nowrap">
                      {mou.outcome}
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
