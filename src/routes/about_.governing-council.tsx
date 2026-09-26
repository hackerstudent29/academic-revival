import { createFileRoute } from "@tanstack/react-router";
import { DataGridContainer } from "@/components/ui/data-grid-table";
import { AboutSubNav } from "@/components/layout/AboutSubNav";

const title = "Governing Council — M.S.A.J. College of Engineering, Chennai";
const description =
  "Official Governing Council members and statutory governance of Mohamed Sathak A.J. College of Engineering, Chennai.";

export const Route = createFileRoute("/about_/governing-council")({
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
  component: GoverningCouncilPage,
});

interface CouncilMember {
  sno: number;
  name: string;
  position: string;
  organization: string;
  councilDesignation: string;
}

const governingCouncilMembers: CouncilMember[] = [
  {
    sno: 1,
    name: "Alhaj. S.M. Yousuf Sahib",
    position: "Chairman",
    organization: "Mohamed Sathak Trust, Chennai",
    councilDesignation: "Chairman",
  },
  {
    sno: 2,
    name: "Janaba. S.M.H. Sharmila",
    position: "Secretary",
    organization: "Mohamed Sathak Trust, Chennai",
    councilDesignation: "Member",
  },
  {
    sno: 3,
    name: "Janab. P.R.L. Hamid Ibrahim",
    position: "Executive Director",
    organization: "Mohamed Sathak Trust, Chennai",
    councilDesignation: "Member",
  },
  {
    sno: 4,
    name: "Mr. S.M.Y. Mohamed Sathak",
    position: "Campus Director",
    organization: "Mohamed Sathak Trust, Chennai",
    councilDesignation: "Member",
  },
  {
    sno: 5,
    name: "Dr. T.V. Gopal",
    position: "Prof / CSE",
    organization: "Anna University, Chennai",
    councilDesignation: "University Nominee",
  },
  {
    sno: 6,
    name: "Dr. S. Murugavel",
    position: "Prof / TPGIT",
    organization: "Vellore",
    councilDesignation: "DOTE Nominee",
  },
  {
    sno: 7,
    name: "Dr. B. Anbu Thambi",
    position: "Head, Strategy & Partnerships",
    organization: "L & T EduTech, Chennai / Former VP, ICT Academy",
    councilDesignation: "Member",
  },
  {
    sno: 8,
    name: "Mr. Arul Rajkumar",
    position: "VP IT Operations",
    organization: "Ford Motors Pvt. Ltd.",
    councilDesignation: "Member",
  },
  {
    sno: 9,
    name: "Dr. R. Subramani",
    position: "Director",
    organization: "IBM, Chennai",
    councilDesignation: "Member",
  },
  {
    sno: 10,
    name: "Dr. G. Kulanthaivelu",
    position: "Prof / Head - ECE",
    organization: "NITTTR, Chennai",
    councilDesignation: "Member",
  },
  {
    sno: 11,
    name: "Principal",
    position: "Principal",
    organization: "MSAJCE, Chennai",
    councilDesignation: "Member Secretary",
  },
  {
    sno: 12,
    name: "Head - Administration",
    position: "Head - Administration",
    organization: "MSAJCE, Chennai",
    councilDesignation: "Member",
  },
  {
    sno: 13,
    name: "Head - Academics",
    position: "Head - Academics",
    organization: "MSAJCE, Chennai",
    councilDesignation: "Senior Faculty Member",
  },
  {
    sno: 14,
    name: "Head - IQAC",
    position: "Head - IQAC",
    organization: "MSAJCE, Chennai",
    councilDesignation: "Senior Faculty Member",
  },
  {
    sno: 15,
    name: "Head - Admission",
    position: "Head - Admission",
    organization: "MSAJCE, Chennai",
    councilDesignation: "Senior Faculty Member",
  },
  {
    sno: 16,
    name: "Head – Student Affairs",
    position: "Head – Student Affairs",
    organization: "MSAJCE, Chennai",
    councilDesignation: "Senior Faculty Member",
  },
  {
    sno: 17,
    name: "Head - Research",
    position: "Head - Research",
    organization: "MSAJCE, Chennai",
    councilDesignation: "Senior Faculty Member",
  },
  {
    sno: 18,
    name: "Head - Examcell",
    position: "Head - Examcell",
    organization: "MSAJCE, Chennai",
    councilDesignation: "Member",
  },
];

export function GoverningCouncilPage() {
  return (
    <main className="bg-white dark:bg-[#121214] text-foreground font-libre antialiased selection:bg-primary selection:text-white min-h-screen pt-0 md:pt-1">
      {/* Sticky Secondary About Sub-Nav */}
      <AboutSubNav />

      {/* ========================================================================= */}
      {/* 1. HERO BANNER: Title Docked Flush with Hero Section End                  */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/procedure_hero.jpg"
            alt="Mohamed Sathak A.J. College of Engineering Campus Architecture"
            className="w-full h-full object-cover object-center brightness-[0.75] filter contrast-105 select-none pointer-events-none rounded-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
            }}
          />
          {/* Subtle gradient overlay for depth and title legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        </div>

        {/* Title Container: Docked Flush at Bottom of Hero */}
        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-4 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 pb-0">
          <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-5 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 shadow-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-t border-r border-border dark:border-white/15">
            <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none">
              Governing Council
            </h1>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MAIN SECTION: 5-Column Transparent Editorial Data Table (Ascending)     */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-18 lg:py-20 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Governing Council
            </h2>
          </div>

          {/* Open Transparent 5-Column Table (Strict Zero Cards Rule Compliant) */}
          <div className="w-full overflow-x-auto border border-border rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs bg-white dark:bg-[#121214]">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-foreground/[0.03] border-b border-border">
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 sm:px-6 py-3.5 sm:py-4 w-16 sm:w-20">
                    S.No
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 sm:px-6 py-3.5 sm:py-4">
                    Name
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 sm:px-6 py-3.5 sm:py-4">
                    Position / Role
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 sm:px-6 py-3.5 sm:py-4">
                    Organization / Institution
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 sm:px-6 py-3.5 sm:py-4 w-48 sm:w-56">
                    Council Designation
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {governingCouncilMembers.map((member) => (
                  <tr
                    key={member.sno}
                    className="hover:bg-foreground/[0.02] transition-colors"
                  >
                    <td className="px-4 sm:px-6 py-4 font-oswald font-bold text-primary text-sm sm:text-base align-middle whitespace-nowrap">
                      {member.sno}
                    </td>
                    <td className="px-4 sm:px-6 py-4 font-libre font-bold text-foreground text-sm sm:text-base align-middle">
                      {member.name}
                    </td>
                    <td className="px-4 sm:px-6 py-4 font-libre font-medium text-xs sm:text-sm text-foreground align-middle">
                      {member.position}
                    </td>
                    <td className="px-4 sm:px-6 py-4 font-libre font-normal text-xs sm:text-sm text-muted-foreground align-middle">
                      {member.organization}
                    </td>
                    <td className="px-4 sm:px-6 py-4 font-libre font-semibold text-xs sm:text-sm text-foreground align-middle whitespace-nowrap">
                      {member.councilDesignation}
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
