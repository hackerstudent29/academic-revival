import { createFileRoute } from "@tanstack/react-router";

const title = "Women's Empowerment Cell — M.S.A.J. College of Engineering, Chennai";
const description =
  "Official Women's Empowerment Cell (WEC) committee members, coordinators, and contact details at Mohamed Sathak A.J. College of Engineering.";

export const Route = createFileRoute("/about_/womens-empowerment-cell")({
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
  component: WomensEmpowermentCellPage,
});

interface CellMember {
  sno: number;
  name: string;
  category: string;
  contactDetails: string;
}

const cellMembers: CellMember[] = [
  {
    sno: 1,
    name: "Mrs. S. Sudha (AP/Maths, MSAJCE, Chennai)",
    category: "Coordinator",
    contactDetails: "sh.sudha@msajce-edu.in",
  },
  {
    sno: 2,
    name: "Mrs. Janaki (AP/Civil, MSAJCE, Chennai)",
    category: "Member",
    contactDetails: "civil.janaki@msajce-edu.in",
  },
  {
    sno: 3,
    name: "Ms. S. Usha (AP/English, MSAJCE, Chennai)",
    category: "Member",
    contactDetails: "sh.usha@msajce-edu.in",
  },
  {
    sno: 4,
    name: "Mrs. S. Abida Begam (AP/ECE, MSAJCE, Chennai)",
    category: "Member",
    contactDetails: "ece.abida@msajce-edu.in",
  },
  {
    sno: 5,
    name: "Mrs. Muthu Pandeeswari (AP/CSE, MSAJCE, Chennai)",
    category: "Member",
    contactDetails: "cse.muthupandeeswari@msajce-edu.in",
  },
  {
    sno: 6,
    name: "Mrs. N. Sathya (AP/Maths, MSAJCE, Chennai)",
    category: "Member",
    contactDetails: "sh.sathya@msajce-edu.in",
  },
  {
    sno: 7,
    name: "Ms. Gayathri (AP/EEE, MSAJCE, Chennai)",
    category: "Member",
    contactDetails: "eee.gayathri@msajce-edu.in",
  },
  {
    sno: 8,
    name: "Ms. Abinaya Bharathi (IV/CSE, MSAJCE, Chennai)",
    category: "Student",
    contactDetails: "-",
  },
  {
    sno: 9,
    name: "Ms. Abinaya (III/ECE, MSAJCE, Chennai)",
    category: "Student",
    contactDetails: "-",
  },
];

export function WomensEmpowermentCellPage() {
  return (
    <main className="bg-white dark:bg-[#121214] text-foreground font-libre antialiased selection:bg-primary selection:text-white min-h-screen pt-0 md:pt-1">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER: Title Docked Flush with Hero Section End                  */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/procedure_hero.jpg"
            alt="Women's Empowerment Cell MSAJCE"
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
              Women's Empowerment Cell
            </h1>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MAIN SECTION: Committee Member Table                                   */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-18 lg:py-20 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Women's Empowerment Cell
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
                    Name & Designation
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 sm:px-6 py-3.5 sm:py-4 w-44">
                    Category
                  </th>
                  <th className="font-oswald font-black uppercase text-xs sm:text-sm tracking-wider text-foreground whitespace-nowrap px-4 sm:px-6 py-3.5 sm:py-4">
                    Contact Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {cellMembers.map((member) => (
                  <tr key={member.sno} className="hover:bg-foreground/[0.02] transition-colors">
                    <td className="px-4 sm:px-6 py-4 font-oswald font-bold text-primary text-sm sm:text-base align-middle whitespace-nowrap">
                      {member.sno}
                    </td>
                    <td className="px-4 sm:px-6 py-4 font-libre font-bold text-foreground text-sm sm:text-base align-middle">
                      {member.name}
                    </td>
                    <td className="px-4 sm:px-6 py-4 font-libre font-semibold text-xs sm:text-sm text-foreground align-middle whitespace-nowrap">
                      {member.category}
                    </td>
                    <td className="px-4 sm:px-6 py-4 font-libre font-medium text-xs sm:text-sm text-foreground align-middle">
                      {member.contactDetails.includes("@") ? (
                        <a href={`mailto:${member.contactDetails}`} className="text-primary hover:underline">
                          {member.contactDetails}
                        </a>
                      ) : (
                        member.contactDetails
                      )}
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
