import { createFileRoute } from "@tanstack/react-router";
import { DataGridContainer } from "@/components/ui/data-grid-table";

const title = "Academic Advisory Committee — M.S.A.J. College of Engineering, Chennai";
const description =
  "Official Academic Advisory Committee members, curriculum governance, objectives, and academic leadership at Mohamed Sathak A.J. College of Engineering.";

export const Route = createFileRoute("/about_/academic-advisory-committee")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AcademicAdvisoryCommitteePage,
});

interface AdvisoryMember {
  sno: number;
  name: string;
  designation: string;
  role: string;
}

const advisoryMembers: AdvisoryMember[] = [
  {
    sno: 1,
    name: "Dr. K.S. Srinivasan",
    designation: "Principal, MSAJCE, Chennai",
    role: "Chairman",
  },
  {
    sno: 2,
    name: "Dr. K. Malathi",
    designation: "Professor / ECE, Anna University, Chennai",
    role: "Advisor",
  },
  {
    sno: 3,
    name: "Dr. N. Parthiban",
    designation: "Professor / CSE, SRM University, Chennai",
    role: "Advisor",
  },
  {
    sno: 4,
    name: "Dr. N. Kulasekaran",
    designation: "Head - Research, Valeo India Pvt. Ltd, Chennai",
    role: "Advisor",
  },
  {
    sno: 5,
    name: "Mr. P. Parthasarathy",
    designation: "Senior Manager, Godrej & Boyce Manufacturing Co. Ltd., Chennai",
    role: "Advisor",
  },
  {
    sno: 6,
    name: "Dr. S. Thenmozhi",
    designation: "Professor / CIVIL, St. Joseph College of Engineering, Chennai",
    role: "Advisor",
  },
  {
    sno: 7,
    name: "Mr. Ahamed Jameel A M T",
    designation: "Alumni & Technical Consultant, HCL, Chennai",
    role: "Advisor",
  },
  {
    sno: 8,
    name: "Mr. N. Feroz Khan",
    designation: "Alumni & General Manager, Maersk, Chennai",
    role: "Advisor",
  },
  {
    sno: 9,
    name: "Head - Administration",
    designation: "MSAJCE, Chennai",
    role: "Member",
  },
  {
    sno: 10,
    name: "Head - Academics",
    designation: "MSAJCE, Chennai",
    role: "Member",
  },
  {
    sno: 11,
    name: "Head - Research",
    designation: "MSAJCE, Chennai",
    role: "Member",
  },
  {
    sno: 12,
    name: "Head - IQAC",
    designation: "MSAJCE, Chennai",
    role: "Member",
  },
  {
    sno: 13,
    name: "Head - Student Affairs",
    designation: "MSAJCE, Chennai",
    role: "Member",
  },
  {
    sno: 14,
    name: "Head - Exam Cell",
    designation: "MSAJCE, Chennai",
    role: "Member",
  },
  {
    sno: 15,
    name: "Head - All the Departments",
    designation: "MSAJCE, Chennai",
    role: "Member",
  },
  {
    sno: 16,
    name: "Head - Placement",
    designation: "MSAJCE, Chennai",
    role: "Member",
  },
  {
    sno: 17,
    name: "Head - Admission",
    designation: "MSAJCE, Chennai",
    role: "Member",
  },
];

const academicObjectives = [
  "Evaluate academic calendars, course delivery strategies, continuous internal assessments, and Outcome-Based Education (OBE) attainment metrics.",
  "Integrate industrial advisory feedback into value-added skill courses, industrial visits, expert guest lectures, and corporate MoUs.",
  "Promote faculty research publications, student project funding (TNSCST/MSME), patent filings, and doctoral research guidance.",
  "Ensure strict alignment with Anna University curriculum standards, NBA accreditation criteria, and AICTE quality directives.",
  "Formulate strategies for modern laboratory infrastructure development and digital learning tool integration across all engineering departments.",
];

export function AcademicAdvisoryCommitteePage() {
  return (
    <main className="bg-white dark:bg-[#121214] text-foreground font-libre antialiased selection:bg-primary selection:text-white min-h-screen pt-0 md:pt-1">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER: Title Docked Flush with Hero Section End                  */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/procedure_hero.jpg"
            alt="Academic Advisory Governance MSAJCE"
            className="w-full h-full object-cover object-center brightness-[0.75] filter contrast-105 select-none pointer-events-none rounded-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-4 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 pb-0">
          <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-5 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 shadow-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-t border-r border-border dark:border-white/15">
            <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none">
              Academic Advisory Committee
            </h1>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION A: Institutional Overview & Core Objectives                    */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-18 lg:py-20 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-10 w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-4">
              Institutional Overview &amp; Governance Mandate
            </h2>
            <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full mb-4">
              The Academic Advisory Committee at Mohamed Sathak A.J. College of Engineering serves as the apex academic governing council responsible for maintaining pedagogical standards, curriculum enrichment, and outcome-based education (OBE) frameworks. Comprising distinguished academic leaders, industrial experts, renowned research supervisors, and internal department heads, the committee reviews teaching-learning methodologies, value-added skill courses, and research initiatives aligned with Anna University and NBA benchmarks. By facilitating industry-academia integration and emerging technology adoption, the board ensures that graduates possess competitive technical mastery and holistic professional competence.
            </p>
          </div>

          {/* Points Layout: Objectives */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-6 sm:mb-8">
              Objectives &amp; Academic Governance Directives
            </h2>

            <div className="divide-y divide-border/40 border-y border-border/40 font-libre w-full">
              {academicObjectives.map((obj, idx) => (
                <div
                  key={idx}
                  className="py-3.5 sm:py-4 px-2 sm:px-4 flex items-center gap-3.5 sm:gap-4 hover:bg-foreground/[0.015] transition-colors w-full"
                >
                  <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm border border-primary/20 shadow-2xs">
                    {idx + 1}
                  </span>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
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
          className="w-full h-10 sm:h-14 md:h-16 lg:h-20 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-[#F3F3F2] dark:fill-[#18181B]"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 3. SECTION B: Advisory Board Table                                        */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-18 lg:py-20 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Academic Advisory Committee Members
            </h2>
          </div>

          {/* Official Publications Standard DataGrid Table */}
          <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
            <div className="overflow-x-auto bg-transparent">
              <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                  <tr>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16 sm:w-20">
                      S.No
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap">
                      Name
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap">
                      Designation &amp; Institution / Organization
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-44">
                      Role
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40 font-libre">
                  {advisoryMembers.map((member) => (
                    <tr key={member.sno} className="hover:bg-foreground/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-oswald font-bold text-primary text-xs sm:text-sm whitespace-nowrap">
                        {member.sno}
                      </td>
                      <td className="py-3.5 px-4 font-libre font-bold text-foreground text-xs sm:text-sm">
                        {member.name}
                      </td>
                      <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground">
                        {member.designation}
                      </td>
                      <td className="py-3.5 px-4 font-libre font-semibold text-xs sm:text-sm text-foreground whitespace-nowrap">
                        {member.role}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </DataGridContainer>
        </div>
      </section>
    </main>
  );
}
