import { createFileRoute } from "@tanstack/react-router";
import { DataGridContainer } from "@/components/ui/data-grid-table";
import { Heart, Award, Sparkles } from "lucide-react";

const title = "Women's Empowerment Cell — M.S.A.J. College of Engineering, Chennai";
const description =
  "Official Women's Empowerment Cell (WEC) committee members, coordinators, objectives, and contact details at Mohamed Sathak A.J. College of Engineering.";

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
      {/* 2. SECTION A: Institutional Overview & Objectives                         */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-18 lg:py-20 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-10 w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-4">
              Institutional Overview &amp; Gender Equity Mandate
            </h2>
            <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full mb-4">
              The Women's Empowerment Cell (WEC) at Mohamed Sathak A.J. College of Engineering is dedicated to nurturing an equitable, inspiring, and secure institutional climate for female students, scholars, and staff members. Operating in accordance with Anna University and UGC gender equity mandates, the cell champions gender sensitization, leadership development, professional mentorship, and health awareness across all engineering streams. Through interactive symposia, legal literacy workshops, and entrepreneurial support, WEC empowers female engineers to excel in technical domains while safeguarding their rights, dignity, and personal growth.
            </p>
          </div>

          {/* Core Objectives */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-6 sm:mb-8">
              Objectives &amp; Key Initiatives
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 border border-border/80 bg-white dark:bg-[#18181B] rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
                <Award className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-bold font-oswald uppercase text-foreground mb-2">Leadership &amp; Technical Growth</h3>
                <p className="text-xs sm:text-sm text-foreground font-libre font-medium leading-relaxed">
                  Organizing skill development sessions, technical workshops, and career mentoring to accelerate women leadership in STEM.
                </p>
              </div>

              <div className="p-6 border border-border/80 bg-white dark:bg-[#18181B] rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
                <Heart className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-bold font-oswald uppercase text-foreground mb-2">Health &amp; Wellness Advocacy</h3>
                <p className="text-xs sm:text-sm text-foreground font-libre font-medium leading-relaxed">
                  Hosting health screening camps, mental wellness seminars, and personal hygiene awareness drives led by medical experts.
                </p>
              </div>

              <div className="p-6 border border-border/80 bg-white dark:bg-[#18181B] rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
                <Sparkles className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-bold font-oswald uppercase text-foreground mb-2">Rights &amp; Legal Literacy</h3>
                <p className="text-xs sm:text-sm text-foreground font-libre font-medium leading-relaxed">
                  Conducting awareness campaigns on statutory rights, gender sensitization, POSH guidelines, and personal safety.
                </p>
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
      {/* 3. SECTION B: Committee Member Table                                      */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-18 lg:py-20 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Women's Empowerment Cell Members
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
                      Name &amp; Designation
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-44">
                      Category
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap">
                      Contact Details
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40 font-libre">
                  {cellMembers.map((member) => (
                    <tr key={member.sno} className="hover:bg-foreground/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-oswald font-bold text-primary text-xs sm:text-sm whitespace-nowrap">
                        {member.sno}
                      </td>
                      <td className="py-3.5 px-4 font-libre font-bold text-foreground text-xs sm:text-sm">
                        {member.name}
                      </td>
                      <td className="py-3.5 px-4 font-libre font-semibold text-xs sm:text-sm text-foreground whitespace-nowrap">
                        {member.category}
                      </td>
                      <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground">
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
          </DataGridContainer>
        </div>
      </section>
    </main>
  );
}
