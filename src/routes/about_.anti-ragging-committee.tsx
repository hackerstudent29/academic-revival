import { createFileRoute } from "@tanstack/react-router";
import { DataGridContainer } from "@/components/ui/data-grid-table";

const title = "Anti-Ragging Committee — M.S.A.J. College of Engineering, Chennai";
const description =
  "Strict zero-tolerance anti-ragging policy, UGC definitions, committee members, and punishments at Mohamed Sathak A.J. College of Engineering.";

export const Route = createFileRoute("/about_/anti-ragging-committee")({
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
  component: AntiRaggingCommitteePage,
});

interface CommitteeMember {
  sno: number;
  name: string;
  designation: string;
  category: string;
  contactDetails: string;
}

const antiRaggingMembers: CommitteeMember[] = [
  {
    sno: 1,
    name: "Dr. K.S. Srinivasan",
    designation: "Principal MSAJCE, Chennai",
    category: "Chairman",
    contactDetails: "9444300499",
  },
  {
    sno: 2,
    name: "Dr. S. Devikala",
    designation: "Head – Student Affairs, MSAJCE, Chennai",
    category: "Convener",
    contactDetails: "9789047410",
  },
  {
    sno: 3,
    name: "Dr. A. Balakrishnan",
    designation: "Head - Admin, MSAJCE, Chennai",
    category: "Member",
    contactDetails: "9843131725",
  },
  {
    sno: 4,
    name: "Mr. V. Vigneshwaran",
    designation: "Head – Placement, MSAJCE, Chennai",
    category: "Member",
    contactDetails: "7904117425",
  },
  {
    sno: 5,
    name: "Dr. K.P. Santhosh Nathan",
    designation: "PED, MSAJCE, Chennai",
    category: "Member",
    contactDetails: "9840886992",
  },
  {
    sno: 6,
    name: "Mr. A. Abdul Gafoor",
    designation: "Admission Officer, MSAJCE, Chennai",
    category: "Member",
    contactDetails: "9940319629",
  },
  {
    sno: 7,
    name: "Dr. R. Someswaran",
    designation: "Asst.Prof/Civil, MSAJCE, Chennai",
    category: "Member",
    contactDetails: "9706572154",
  },
  {
    sno: 8,
    name: "Dr. S. Prasath",
    designation: "Asst.Prof/Mech, MSAJCE, Chennai",
    category: "Member",
    contactDetails: "8248083360",
  },
  {
    sno: 9,
    name: "Mr. C. Venkatesh",
    designation: "AP / EEE, MSAJCE, Chennai",
    category: "Member",
    contactDetails: "8978090678",
  },
  {
    sno: 10,
    name: "Mrs. Jebamalar",
    designation: "AP / CSE, MSAJCE, Chennai",
    category: "Member",
    contactDetails: "9489188556",
  },
  {
    sno: 11,
    name: "Mrs. P. Anusuya",
    designation: "AP/ ECE, MSAJCE, Chennai",
    category: "Member",
    contactDetails: "9080547313",
  },
  {
    sno: 12,
    name: "Mrs. V. Shobana",
    designation: "AP / Physics MSAJCE, Chennai",
    category: "Member",
    contactDetails: "7449018960",
  },
  {
    sno: 13,
    name: "Student Representatives",
    designation: "-",
    category: "Member",
    contactDetails: "-",
  },
];

const raggingConstituents = [
  "Teasing, verbal abuse, or rude conduct towards freshers or fellow students.",
  "Indisciplinary activities causing hardship, annoyance, or physical and psychological harm.",
  "Forcing students to perform acts causing shame, torment, or personal humiliation.",
  "Disrupting or disturbing regular academic lectures, practicals, or campus activities.",
  "Financial extortion, forced expenditure, or exploiting freshers for academic work.",
  "Physical, verbal, or online abuse including obscene gestures, harassment, or threats.",
  "Any action undermining the self-confidence or mental health of a student.",
];

const raggingPunishments = [
  "Suspension from attending classes and academic privileges.",
  "Withholding or withdrawing scholarships, fellowships, and other benefits.",
  "Debarring from appearing in tests, examinations, or evaluation processes.",
  "Withholding academic results and official transcripts.",
  "Debarring from representing the institution in sports, meets, or youth festivals.",
  "Suspension or immediate expulsion from campus hostel facilities.",
  "Cancellation of college admission and rustication (1 to 4 semesters).",
  "Expulsion from the institution and debarring from admission to other institutions.",
  "Filing of First Information Report (FIR) with police within 24 hours of incident report.",
];

export function AntiRaggingCommitteePage() {
  return (
    <main className="bg-white dark:bg-[#121214] text-foreground font-libre antialiased selection:bg-primary selection:text-white min-h-screen pt-0 md:pt-1">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER: Title Docked Flush with Hero Section End                  */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/procedure_hero.jpg"
            alt="Anti-Ragging MSAJCE"
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
              Anti-Ragging Committee
            </h1>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION A: Preamble & What Constitutes Ragging                         */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-18 lg:py-20 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-6 w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-3">
              Anti-Ragging Policy &amp; Mandate
            </h2>
            <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full">
              Ragging in any form is totally prohibited in and outside the campus of Mohamed Sathak AJ College of Engineering. It is the objective of every member of MSAJCE community consisting of Management, Faculty, Staff, and Students to make the College a 'Ragging Free' Institution and ensure a safe, conducive environment for freshers.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-6 sm:mb-8">
              What Constitutes Ragging
            </h2>

            {/* Premium Open List Layout with Number Badges & Dividers */}
            <div className="divide-y divide-border/60 border-y border-border/60">
              {raggingConstituents.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 sm:gap-6 py-4 sm:py-5 transition-colors hover:bg-foreground/[0.01]"
                >
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-rose-100/90 dark:bg-rose-950/50 text-primary border border-primary/30 flex items-center justify-center font-oswald font-black text-xs sm:text-sm shrink-0 shadow-xs">
                    {idx + 1}
                  </span>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                    {item}
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
      {/* 3. SECTION B: Punishments Awarded for Ragging                            */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-18 lg:py-20 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-6 sm:mb-8">
              Punishments Awarded for Ragging
            </h2>

            {/* Premium Open List Layout with Number Badges & Dividers */}
            <div className="divide-y divide-border/60 border-y border-border/60 mb-6">
              {raggingPunishments.map((punishment, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 sm:gap-6 py-4 sm:py-5 transition-colors hover:bg-foreground/[0.01]"
                >
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-rose-100/90 dark:bg-rose-950/50 text-primary border border-primary/30 flex items-center justify-center font-oswald font-black text-xs sm:text-sm shrink-0 shadow-xs">
                    {idx + 1}
                  </span>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                    {punishment}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed mb-2">
              Where the persons committing or abetting the act of ragging are not identified, the college will resort to collective punishment.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground font-libre italic">
              (As per UGC Regulations, an appeal against the order of punishment by the Anti-Ragging Committee of MSAJCE lies with the Vice-Chancellor of Anna University, Chennai)
            </p>
          </div>
        </div>
      </section>

      {/* Wave Divider B -> A */}
      <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 sm:h-14 md:h-16 lg:h-20 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-white dark:fill-[#121214]"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 4. SECTION C: Anti-Ragging Committee & Squad Members Table                 */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-18 lg:py-20 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Anti-Ragging Committee &amp; Squad Members
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
                      Designation
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
                  {antiRaggingMembers.map((member) => (
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
                        {member.category}
                      </td>
                      <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground">
                        {member.contactDetails}
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
