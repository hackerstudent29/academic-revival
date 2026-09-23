import React, { useState, useMemo } from 'react';
import { 
  Search,
  ExternalLink
} from 'lucide-react';
import { MOU_PARTNERS } from '@/lib/placementData';
import { MouPartner } from '@/types/placement';

interface MoUsSectionProps {
  onOpenMou: (mou: MouPartner) => void;
}

export const MoUsSection: React.FC<MoUsSectionProps> = ({ onOpenMou }) => {
  const [selectedYear, setSelectedYear] = useState<string>('ALL');
  const [searchFilter, setSearchFilter] = useState<string>('');

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
      domain: 'Infrastructure, BIM & Smart Construction',
      duration: '3 Years (2024–2027)',
      depts: 'CIVIL, MECH',
      scope: '3D BIM structural modeling software suites, on-site construction live capstones',
      outcome: '35 BIM Trainees'
    },
    {
      partner: 'Red Hat Enterprise',
      domain: 'Linux Kernel & Open Hybrid Cloud',
      duration: '3 Years (2024–2027)',
      depts: 'CSE, IT',
      scope: 'RHCSA certification training, containerization with Podman and OpenShift',
      outcome: '42 RHCSA Certified'
    },
    {
      partner: 'IBM Academic Initiative',
      domain: 'Enterprise AI & Data Science',
      duration: '3 Years (2024–2027)',
      depts: 'CSE, IT, AI&DS',
      scope: 'IBM Watson Studio, cloud predictive modeling, quantum computing sandboxes',
      outcome: '65 AI Specializations'
    },
    {
      partner: 'Oracle Academy',
      domain: 'Autonomous Database & Java SE',
      duration: '3 Years (2023–2026)',
      depts: 'CSE, IT',
      scope: 'Autonomous database architecture, PL/SQL developer curricula, Java certifications',
      outcome: '78 Database Certified'
    }
  ];

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

  return (
    <div className="w-full">
      {/* SECTION 1: Canvas A (White / #121214) — MoUs Overview */}
      <section className="pt-10 sm:pt-14 md:pt-16 lg:pt-20 pb-6 sm:pb-8 md:pb-10 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            BILATERAL CORPORATE ALLIANCES &amp; MoUs
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: 'Curriculum Co-Creation',
                desc: 'Corporate advisory boards reviewing and enriching syllabus topics with current enterprise engineering practices.',
                stat: '65+ Corporate MoUs'
              },
              {
                title: 'Centres of Excellence',
                desc: 'Specialized lab setups powered by AWS, Cisco, RedHat, and TVS with dedicated hardware testbeds.',
                stat: '8 Technology CoEs'
              },
              {
                title: 'Global Certification Vouchers',
                desc: 'Subsidized certification tracks in Cloud, Cybersecurity, Linux, and Java directly validating student skills.',
                stat: '500+ Annual Badges'
              },
              {
                title: 'Prioritized Recruitment',
                desc: 'Corporate partners guaranteeing annual placement quotas and dedicated pre-placement talks on campus.',
                stat: '100% Placement Support'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-3.5 sm:p-4 space-y-2 hover:bg-foreground/[0.015] transition-colors">
                <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs border border-foreground/20">
                  0{idx + 1}
                </span>
                <span className="text-xs font-black font-oswald uppercase text-primary block pt-1">
                  {item.stat}
                </span>
                <h3 className="text-base sm:text-lg font-bold font-oswald uppercase tracking-tight text-foreground leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground font-libre font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
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

      {/* SECTION 2: Canvas B (#F3F3F2 / #18181B) — Active Alliances Directory Table */}
      <section className="py-6 sm:py-8 md:py-10 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-5 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            ACTIVE TECHNOLOGY &amp; CORE ENGINEERING ACCORDS
          </h2>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[720px]">
              <thead>
                <tr className="border-b border-border/60">
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 sm:px-6 py-3.5 sm:py-4 w-16 sm:w-20">
                    S.No
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 sm:px-6 py-3.5 sm:py-4 w-60">
                    Partner Organisation
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 sm:px-6 py-3.5 sm:py-4">
                    Domain &amp; Focus Area
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 sm:px-6 py-3.5 sm:py-4 w-32">
                    Departments
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 sm:px-6 py-3.5 sm:py-4 w-44">
                    Verified Outcome
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {mouTableData.map((mou, idx) => (
                  <tr key={idx} className="hover:bg-muted/30 transition-colors">
                    <td className="px-4 sm:px-6 py-3.5 sm:py-4 font-oswald font-bold text-primary text-sm sm:text-base align-middle whitespace-nowrap">
                      {String(idx + 1).padStart(2, "0")}
                    </td>
                    <td className="px-4 sm:px-6 py-3.5 sm:py-4 font-libre font-bold text-foreground text-sm sm:text-base align-middle">
                      {mou.partner}
                    </td>
                    <td className="px-4 sm:px-6 py-3.5 sm:py-4 font-libre font-medium text-xs sm:text-sm text-foreground align-middle">
                      <div>
                        <p className="font-semibold text-foreground">{mou.domain}</p>
                        <p className="text-foreground/70 text-xs mt-0.5">{mou.scope}</p>
                      </div>
                    </td>
                    <td className="px-4 sm:px-6 py-3.5 sm:py-4 font-oswald font-bold text-foreground text-xs sm:text-sm align-middle whitespace-nowrap">
                      {mou.depts}
                    </td>
                    <td className="px-4 sm:px-6 py-3.5 sm:py-4 font-oswald font-bold text-primary text-xs sm:text-sm align-middle whitespace-nowrap">
                      {mou.outcome}
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
          className="w-full h-6 sm:h-8 md:h-10 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-white dark:fill-[#121214]"
          />
        </svg>
      </div>

      {/* SECTION 3: Canvas A (White / #121214) — Filterable Partner Directory */}
      <section className="py-6 sm:py-8 md:py-10 bg-white dark:bg-[#121214] transition-colors pb-12 sm:pb-16">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-5 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              CORPORATE MoUs DIRECTORY
            </h2>

            {/* Search Input */}
            <div className="relative max-w-xs w-full">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Search partner or domain..."
                className="w-full pl-10 pr-4 py-2 bg-foreground/[0.02] border border-border/80 dark:border-white/10 rounded-tl-lg rounded-br-lg rounded-tr-xs rounded-bl-xs text-xs sm:text-sm font-libre focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredMous.slice(0, 9).map((mou) => (
              <div 
                key={mou.id}
                className="p-3.5 sm:p-4 space-y-2 hover:bg-foreground/[0.015] transition-colors flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black font-oswald uppercase tracking-wider text-primary">
                      {mou.year} Accord
                    </span>
                    <span className="text-[10px] font-mono text-foreground/70 uppercase">
                      {mou.status}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-oswald uppercase text-foreground leading-snug">
                    {mou.partnerName}
                  </h3>
                  <p className="text-sm text-foreground font-libre font-medium leading-relaxed">
                    {mou.purpose}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs font-libre font-semibold text-foreground/80">
                    {mou.domain}
                  </span>
                  <button
                    onClick={() => onOpenMou(mou)}
                    className="text-xs font-bold font-oswald uppercase tracking-wider text-primary hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Details</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
