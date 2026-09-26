import { createFileRoute } from "@tanstack/react-router";
import { DataGridContainer } from "@/components/ui/data-grid-table";
import { RedirectButton } from "@/components/ui/redirect-button";
import { ShieldCheck, AlertTriangle, PhoneCall } from "lucide-react";

const title = "Anti-Ragging Committee & Squad — M.S.A.J. College of Engineering, Chennai";
const description =
  "Official Anti-Ragging Committee, Anti-Ragging Squad members, statutory regulations, zero-tolerance policy, and contact details at Mohamed Sathak A.J. College of Engineering.";

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
}

const antiRaggingCommitteeMembers: CommitteeMember[] = [
  { sno: 1, name: "Principal, MSAJCE", designation: "Chair-Person" },
  { sno: 2, name: "Dr. K. P. Santhosh Nathan, PED", designation: "Member" },
  { sno: 3, name: "Dr. Amudha S, HOD / Science", designation: "Member" },
  { sno: 4, name: "Mr. A. Abdul Gafoor, Admin Officer", designation: "Member" },
  { sno: 5, name: "Mr. Jagadeesn, Advocate", designation: "Member" },
  { sno: 6, name: "Sub Inspector of Police, Kelambakkam", designation: "Member" },
  { sno: 7, name: "Mr. Hussain Basha, NGO, Master Mind Consultant, Chennai.", designation: "Member" },
  { sno: 8, name: "Mr. Gowtham J : III Yr IT", designation: "Member" },
  { sno: 9, name: "Mr. Mohamed Farhan : II Yr EEE", designation: "Member" },
  { sno: 10, name: "Ms. M. Aaliyah : II Yr VLSI", designation: "Member" },
  { sno: 11, name: "Ms. Afrin Banu : III Yr CSBS", designation: "Member" },
];

const antiRaggingSquadMembers: CommitteeMember[] = [
  { sno: 1, name: "Dr. K. P. Santhosh Nathan, PED", designation: "Chair-Person" },
  { sno: 2, name: "Dr. S. Prashath, Head / CSCS", designation: "Member" },
  { sno: 3, name: "Mr. J. Rajesh, AP / IT", designation: "Member" },
  { sno: 4, name: "Mrs. I. S. Suganthi, AC - I", designation: "Member" },
  { sno: 5, name: "Mr. Rizha-Ur-Rahman, AC - II", designation: "Member" },
  { sno: 6, name: "Mr. Syed Abudhahir, AP / AIDS", designation: "Member" },
  { sno: 7, name: "Mrs. V. Shobana, AC - III", designation: "Member" },
  { sno: 8, name: "Mrs. S. Meenakshi, AP / Maths", designation: "Member" },
  { sno: 9, name: "Mrs. N. Angayarkanni, I Yr Coordinator", designation: "Member" },
  { sno: 10, name: "Mr. Ijas Ahamed, AP / Civil", designation: "Member" },
  { sno: 11, name: "Mr. S. Srinivasan, AP / EEE", designation: "Member" },
  { sno: 12, name: "Mr. R. Yuvaraj, AP / Mech", designation: "Member" },
  { sno: 13, name: "Ms. B. S. S. Gnana Betsy B S, AP / Arch", designation: "Member" },
];

const antiRaggingObjectives = [
  "Enforce total zero-tolerance against ragging across all academic blocks, laboratories, hostels, sports grounds, and transport routes.",
  "Maintain continuous anti-ragging squad patrols, surveillance, and surprise inspections in common areas, dining halls, and student residences.",
  "Operate 24/7 confidential grievance helplines and immediate inquiry procedures upon receiving any incident representation.",
  "Mandate statutory anti-ragging affidavits from senior students, freshers, and parents at the commencement of every academic year.",
  "Organize comprehensive orientation sessions and sensitization workshops to build a supportive, harmonious institutional culture.",
  "Initiate immediate statutory proceedings and police reporting (FIR) within 24 hours in case of any verified ragging violation.",
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
  "Filing of First Information Report (FIR) with local police within 24 hours of incident report.",
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
              Anti-Ragging Committee &amp; Squad
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
              Institutional Overview &amp; Statutory Mandate
            </h2>
            <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full mb-4">
              In accordance with the directives of the Supreme Court of India, University Grants Commission (UGC), and Anna University regulations, Mohamed Sathak A.J. College of Engineering maintains a strict zero-tolerance mandate against ragging in any form. The Anti-Ragging Committee and Squad function as apex statutory vigilance bodies tasked with maintaining an ethos of psychological safety, mutual dignity, and total campus security across all academic blocks, laboratories, hostels, and transport facilities. Through continuous surveillance, surprise inspections, and proactive orientation programs, the institution ensures that freshers transition seamlessly into college life within a nurturing, harmonious environment free from intimidation or fear.
            </p>
          </div>

          {/* Points Layout: Institutional Objectives */}
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-6 sm:mb-8">
              Objectives &amp; Core Directives
            </h2>

            <div className="divide-y divide-border/40 border-y border-border/40 font-libre w-full">
              {antiRaggingObjectives.map((obj, idx) => (
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

          {/* Points Layout: What Constitutes Ragging */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-6 sm:mb-8">
              Acts Constituting Ragging
            </h2>

            <div className="divide-y divide-border/40 border-y border-border/40 font-libre w-full">
              {raggingConstituents.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3.5 sm:py-4 px-2 sm:px-4 flex items-center gap-3.5 sm:gap-4 hover:bg-foreground/[0.015] transition-colors w-full"
                >
                  <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm border border-primary/20 shadow-2xs">
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
      {/* 3. SECTION B: Statutory Punishments & Legal Mandate                        */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-18 lg:py-20 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-6 sm:mb-8">
              Punishments Awarded for Ragging
            </h2>

            <div className="divide-y divide-border/40 border-y border-border/40 font-libre w-full mb-6">
              {raggingPunishments.map((punishment, idx) => (
                <div
                  key={idx}
                  className="py-3.5 sm:py-4 px-2 sm:px-4 flex items-center gap-3.5 sm:gap-4 hover:bg-foreground/[0.015] transition-colors w-full"
                >
                  <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm border border-primary/20 shadow-2xs">
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
      {/* 4. SECTION C: Anti-Ragging Committee & Squad Member Tables               */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-18 lg:py-20 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12 space-y-12">
          {/* Table 1: Anti-Ragging Committee */}
          <div>
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                Anti-Ragging Committee
              </h2>
            </div>

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
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-44">
                        Designation
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40 font-libre">
                    {antiRaggingCommitteeMembers.map((member) => (
                      <tr key={member.sno} className="hover:bg-foreground/[0.02] transition-colors">
                        <td className="py-3.5 px-4 font-oswald font-bold text-primary text-xs sm:text-sm whitespace-nowrap">
                          {member.sno}
                        </td>
                        <td className="py-3.5 px-4 font-libre font-bold text-foreground text-xs sm:text-sm">
                          {member.name}
                        </td>
                        <td className="py-3.5 px-4 font-libre font-semibold text-xs sm:text-sm text-foreground whitespace-nowrap">
                          {member.designation}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DataGridContainer>
          </div>

          {/* Table 2: Anti-Ragging Squad */}
          <div>
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                Anti-Ragging Squad
              </h2>
            </div>

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
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-44">
                        Designation
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40 font-libre">
                    {antiRaggingSquadMembers.map((member) => (
                      <tr key={member.sno} className="hover:bg-foreground/[0.02] transition-colors">
                        <td className="py-3.5 px-4 font-oswald font-bold text-primary text-xs sm:text-sm whitespace-nowrap">
                          {member.sno}
                        </td>
                        <td className="py-3.5 px-4 font-libre font-bold text-foreground text-xs sm:text-sm">
                          {member.name}
                        </td>
                        <td className="py-3.5 px-4 font-libre font-semibold text-xs sm:text-sm text-foreground whitespace-nowrap">
                          {member.designation}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DataGridContainer>

            {/* Ocean Wave Redirect Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <RedirectButton
                href="https://antiragging.in"
                label="National Anti-Ragging Portal"
                waveColor="#9E2339"
              />
              <RedirectButton
                href="mailto:antiragging@msajce-edu.in"
                label="Email Anti-Ragging Helpline"
                waveColor="#9E2339"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
