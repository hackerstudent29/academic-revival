import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";

const title = "Academic Advisory Committee — M.S.A.J. College of Engineering, Chennai";
const description =
  "Official Academic Advisory Committee members, curriculum governance, and academic leadership at Mohamed Sathak A.J. College of Engineering.";

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
      {/* 2. MAIN SECTION: Advisory Board Table                                     */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-18 lg:py-20 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Academic Advisory Committee Members
            </h2>
          </div>

          {/* Open Transparent Data Table */}
          <div className="w-full overflow-x-auto border border-border rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs bg-white dark:bg-[#121214]">
            <table className="w-full text-left border-collapse min-w-[750px]">
              <thead>
                <tr className="bg-foreground/[0.03] border-b border-border">
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 sm:px-6 py-3.5 sm:py-4 w-16 sm:w-20">
                    S.No
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 sm:px-6 py-3.5 sm:py-4">
                    Name
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 sm:px-6 py-3.5 sm:py-4">
                    Designation & Institution / Organization
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 sm:px-6 py-3.5 sm:py-4 w-44">
                    Role
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {advisoryMembers.map((member) => (
                  <tr key={member.sno} className="hover:bg-foreground/[0.02] transition-colors">
                    <td className="px-4 sm:px-6 py-4 font-oswald font-bold text-primary text-sm sm:text-base align-middle whitespace-nowrap">
                      {member.sno}
                    </td>
                    <td className="px-4 sm:px-6 py-4 font-libre font-bold text-foreground text-sm sm:text-base align-middle">
                      {member.name}
                    </td>
                    <td className="px-4 sm:px-6 py-4 font-libre font-medium text-xs sm:text-sm text-foreground align-middle">
                      {member.designation}
                    </td>
                    <td className="px-4 sm:px-6 py-4 font-libre font-semibold text-xs sm:text-sm text-foreground align-middle whitespace-nowrap">
                      {member.role}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
