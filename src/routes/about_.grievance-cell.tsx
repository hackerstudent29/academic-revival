import { createFileRoute } from "@tanstack/react-router";
import { Mail, ShieldCheck, FileCheck, Scale } from "lucide-react";
import { DataGridContainer } from "@/components/ui/data-grid-table";

const title = "Complaints / Grievance Redressal / Disciplinary / Vishaka Committee / POSH Cell — M.S.A.J. College of Engineering, Chennai";
const description =
  "Official Complaints, Grievance Redressal, Disciplinary, Vishaka Committee, and POSH Cell members and contact details at Mohamed Sathak A.J. College of Engineering.";

export const Route = createFileRoute("/about_/grievance-cell")({
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
  component: GrievanceCellPage,
});

interface GrievanceMember {
  sno: number;
  name: string;
  category: string;
  contactDetails: string;
}

const grievanceCommitteeMembers: GrievanceMember[] = [
  {
    sno: 1,
    name: "Ms. S. Usha (AP / English, MSAJCE, Chennai)",
    category: "Convener",
    contactDetails: "sh.usha@msajce-edu.in",
  },
  {
    sno: 2,
    name: "Principal (MSAJCE, Chennai)",
    category: "Co – Convener",
    contactDetails: "Principal@msajce-edu.in",
  },
  {
    sno: 3,
    name: "Mrs. Adhilakshmi Logamurthy (Advocate & Legal Consultant)",
    category: "External Member",
    contactDetails: "-",
  },
  {
    sno: 4,
    name: "Mr. Hussain Basha (NGO-1, MasterMind Consultraining, Chennai)",
    category: "External Member",
    contactDetails: "info@hussainbasha.com",
  },
  {
    sno: 5,
    name: "Dr. Ushaa Eswaran (NGO-2)",
    category: "External Member",
    contactDetails: "drushaaeswaran@gmail.com",
  },
  {
    sno: 6,
    name: "Mr. K. Sivaraman (Advocate)",
    category: "External Member",
    contactDetails: "-",
  },
  {
    sno: 7,
    name: "Mr. Chandrasekaran (Sub Inspector of Police)",
    category: "External Member",
    contactDetails: "-",
  },
  {
    sno: 8,
    name: "Dr. O.S. Ayisha (Vice Principal, MSCAS, Chennai)",
    category: "External Member",
    contactDetails: "-",
  },
  {
    sno: 9,
    name: "Head - Academics (MSAJCE, Chennai)",
    category: "Member",
    contactDetails: "ac@msajce-edu.in",
  },
  {
    sno: 10,
    name: "Head – Administration (MSAJCE, Chennai)",
    category: "Member",
    contactDetails: "headadmin@msajce-edu.in",
  },
  {
    sno: 11,
    name: "Dr. K.P. Santhoshnathan (PED, MSAJCE, Chennai)",
    category: "Member",
    contactDetails: "ped.santhosh@msajce-edu.in",
  },
  {
    sno: 12,
    name: "Mr. Abdul Gafoor (Manager, Student Affairs)",
    category: "Member",
    contactDetails: "abdulgafoor@msajce-edu.in",
  },
  {
    sno: 13,
    name: "Parent Representative",
    category: "Member",
    contactDetails: "-",
  },
  {
    sno: 14,
    name: "Parent Representative",
    category: "Member",
    contactDetails: "-",
  },
  {
    sno: 15,
    name: "Students Representatives: Mr. S. Salman (IV Mech), Mr. Poo. Satheeshkumar (IV ECE), Ms. W. Karishma (III CSE), Ms. V. Abinaya (III ECE)",
    category: "Member",
    contactDetails: "-",
  },
];

export function GrievanceCellPage() {
  return (
    <main className="bg-white dark:bg-[#121214] text-foreground font-libre antialiased selection:bg-primary selection:text-white min-h-screen pt-0 md:pt-1">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER: Title Docked Flush with Hero Section End                  */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/procedure_hero.jpg"
            alt="Grievance Redressal MSAJCE"
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
              Grievance Redressal Cell
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
              Institutional Overview &amp; Redressal Framework
            </h2>
            <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full mb-4">
              The Grievance Redressal Cell at Mohamed Sathak A.J. College of Engineering functions as a paramount statutory portal ensuring transparency, equity, and fair hearings for all student and staff concerns. Established under the mandate of AICTE and UGC regulations, the cell provides a structured framework to examine and resolve academic, administrative, and interpersonal grievances without prejudice. Operating under strict confidentiality, the committee ensures prompt inquiry, impartial investigation, and definitive corrective measures to foster a supportive and harmonious academic ecosystem.
            </p>
          </div>

          {/* Objectives */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-6 sm:mb-8">
              Objectives &amp; Operational Scope
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 border border-border/80 bg-white dark:bg-[#18181B] rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
                <ShieldCheck className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-bold font-oswald uppercase text-foreground mb-2">Impartial Investigation</h3>
                <p className="text-xs sm:text-sm text-foreground font-libre font-medium leading-relaxed">
                  Conducting fair, unbiased, and objective inquiries into all reported academic, administrative, or environmental complaints.
                </p>
              </div>

              <div className="p-6 border border-border/80 bg-white dark:bg-[#18181B] rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
                <FileCheck className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-bold font-oswald uppercase text-foreground mb-2">Confidential Reporting</h3>
                <p className="text-xs sm:text-sm text-foreground font-libre font-medium leading-relaxed">
                  Protecting complainant identity and providing secure physical drop boxes alongside dedicated official email channels.
                </p>
              </div>

              <div className="p-6 border border-border/80 bg-white dark:bg-[#18181B] rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
                <Scale className="w-8 h-8 text-primary mb-3" />
                <h3 className="text-lg font-bold font-oswald uppercase text-foreground mb-2">POSH &amp; Vishaka Cell Integration</h3>
                <p className="text-xs sm:text-sm text-foreground font-libre font-medium leading-relaxed">
                  Overseeing compliance with gender sensitivity statutes and the Prevention of Sexual Harassment (POSH) legal framework.
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-2">
              Complaints / Grievance Redressal / Disciplinary / Vishaka Committee / POSH Cell
            </h2>
            <div className="flex items-center gap-2 text-sm sm:text-base font-libre font-semibold text-foreground">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground font-normal">Official Grievance Email:</span>{" "}
              <a href="mailto:grievance@msajce-edu.in" className="text-primary hover:underline">
                grievance@msajce-edu.in
              </a>
            </div>
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
                      Name &amp; Role
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
                  {grievanceCommitteeMembers.map((member) => (
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
