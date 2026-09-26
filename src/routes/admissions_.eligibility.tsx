import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { DataGridContainer } from "@/components/ui/data-grid-table";
import { CheckCircle2, ArrowRight } from "lucide-react";

const title = "Admission Eligibility — M.S.A.J. College of Engineering, Chennai";
const description =
  "Official UG, PG, and Ph.D. eligibility criteria, community-wise cut-off marks, and document verification guidelines at Mohamed Sathak A.J. College of Engineering.";

export const Route = createFileRoute("/admissions_/eligibility")({
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
  component: AdmissionsEligibilityPage,
});

const hscAcademicCutoffs = [
  { community: "General Category (OC)", percent: "45.00%", subjects: "Mathematics, Physics & Chemistry (PCM)" },
  { community: "Backward Class (including BCM)", percent: "40.00%", subjects: "Mathematics, Physics & Chemistry (PCM)" },
  { community: "Most Backward Class (MBC & DNC)", percent: "40.00%", subjects: "Mathematics, Physics & Chemistry (PCM)" },
  { community: "Scheduled Caste / SCA / ST", percent: "40.00%", subjects: "Mathematics, Physics & Chemistry (PCM)" },
];

const hscVocationalCutoffs = [
  { community: "General Category (OC)", percent: "45.00%", subjects: "Vocational Theory, Practicals & Related Subjects" },
  { community: "Backward Class (including BCM)", percent: "40.00%", subjects: "Vocational Theory, Practicals & Related Subjects" },
  { community: "Most Backward Class (MBC & DNC)", percent: "40.00%", subjects: "Vocational Theory, Practicals & Related Subjects" },
  { community: "Scheduled Caste / SCA / ST", percent: "40.00%", subjects: "Vocational Theory, Practicals & Related Subjects" },
];

const lateralEntryCutoffs = [
  { community: "General Category (OC)", percent: "45.00%", criteria: "Aggregate in qualifying Diploma / B.Sc." },
  { community: "Backward Class (including BCM)", percent: "40.00%", criteria: "Aggregate in qualifying Diploma / B.Sc." },
  { community: "Most Backward Class (MBC & DNC)", percent: "40.00%", criteria: "Aggregate in qualifying Diploma / B.Sc." },
  { community: "Scheduled Caste / SCA / ST", percent: "40.00%", criteria: "Aggregate in qualifying Diploma / B.Sc." },
];

const pgEligibility = [
  {
    programme: "M.E. Computer Science and Engineering",
    duration: "2 Years",
    intake: "18 Seats",
    entryDegree: "B.E. / B.Tech. in CSE, IT, EEE, ECE, or M.C.A. / M.Sc. (CSE/IT)",
  },
  {
    programme: "M.E. Structural Engineering",
    duration: "2 Years",
    intake: "18 Seats",
    entryDegree: "B.E. Degree in Civil Engineering",
  },
  {
    programme: "Master of Business Administration (MBA)",
    duration: "2 Years",
    intake: "60 Seats",
    entryDegree: "Any recognized Bachelor's Degree (10+2+3/4 pattern) with 50% aggregate (45% for SC/ST)",
  },
  {
    programme: "Master of Computer Applications (MCA)",
    duration: "2 Years",
    intake: "60 Seats",
    entryDegree: "BCA / B.Sc. (CS/IT) or Bachelor's Degree with Mathematics at 10+2 or Graduation level",
  },
];

const documentChecklist = [
  "1. TNEA / TANCET / CEETA-PG Allotment Order and Fee Payment Receipts.",
  "2. 10th Standard (SSLC) Original Mark Sheet.",
  "3. 11th Standard Original Mark Sheet.",
  "4. 12th Standard (HSC) Original Mark Sheet or Consolidated Diploma Mark Sheets.",
  "5. Transfer Certificate (TC) and Conduct Certificate from previous institution.",
  "6. Permanent Community Certificate (Card/E-Certificate for BC/BCM/MBC/SC/SCA/ST).",
  "7. Nativity Certificate (if applicable for outstation/other state candidates).",
  "8. First Graduate Certificate & Joint Declaration (if claiming First Graduate Fee Concession).",
  "9. Income Certificate issued by Revenue Department (for Post-Matric Scholarship candidates).",
  "10. Aadhar Card copy, Migration Certificate (for CBSE/ICSE), and Passport Size Photographs (6 copies).",
];

export function AdmissionsEligibilityPage() {
  const [activeTab, setActiveTab] = useState<"ug" | "lateral" | "pg" | "documents">("ug");

  return (
    <main className="bg-white dark:bg-[#121214] text-foreground font-libre antialiased selection:bg-primary selection:text-white min-h-screen pt-0 md:pt-1">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER: Title Docked Flush with Hero Section End                  */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/procedure_hero.jpg"
            alt="Admission Eligibility MSAJCE"
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
              Admission Eligibility
            </h1>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION A: Institutional Overview & Cutoff Tables                      */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-18 lg:py-20 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          {/* Overview */}
          <div className="mb-10 w-full">
            <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary font-oswald font-bold text-xs uppercase tracking-wider mb-3">
              TNEA Counseling Code: 1301
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-4">
              Academic Eligibility &amp; Community Cut-off Criteria
            </h2>
            <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full mb-4">
              Candidate eligibility at Mohamed Sathak A.J. College of Engineering is governed by Anna University regulations, AICTE norms, and Tamil Nadu State Directorate of Technical Education (DOTE) mandates. Review the category-wise cut-off percentage requirements across Higher Secondary academic streams, vocational streams, diploma lateral entry, and postgraduate degrees below.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            <button
              onClick={() => setActiveTab("ug")}
              className={`px-4 py-3 border text-xs sm:text-sm font-oswald font-bold uppercase tracking-wider transition-colors rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs cursor-pointer ${
                activeTab === "ug"
                  ? "bg-primary text-white border-primary shadow-xs"
                  : "bg-white dark:bg-[#18181B] border-border/80 text-foreground hover:border-primary"
              }`}
            >
              1st Year B.E. / B.Tech
            </button>
            <button
              onClick={() => setActiveTab("lateral")}
              className={`px-4 py-3 border text-xs sm:text-sm font-oswald font-bold uppercase tracking-wider transition-colors rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs cursor-pointer ${
                activeTab === "lateral"
                  ? "bg-primary text-white border-primary shadow-xs"
                  : "bg-white dark:bg-[#18181B] border-border/80 text-foreground hover:border-primary"
              }`}
            >
              Lateral Entry (2nd Year)
            </button>
            <button
              onClick={() => setActiveTab("pg")}
              className={`px-4 py-3 border text-xs sm:text-sm font-oswald font-bold uppercase tracking-wider transition-colors rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs cursor-pointer ${
                activeTab === "pg"
                  ? "bg-primary text-white border-primary shadow-xs"
                  : "bg-white dark:bg-[#18181B] border-border/80 text-foreground hover:border-primary"
              }`}
            >
              Postgraduate (M.E./MBA/MCA)
            </button>
            <button
              onClick={() => setActiveTab("documents")}
              className={`px-4 py-3 border text-xs sm:text-sm font-oswald font-bold uppercase tracking-wider transition-colors rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs cursor-pointer ${
                activeTab === "documents"
                  ? "bg-primary text-white border-primary shadow-xs"
                  : "bg-white dark:bg-[#18181B] border-border/80 text-foreground hover:border-primary"
              }`}
            >
              Verification Documents
            </button>
          </div>

          {/* Content Tables Based on Tab */}
          {activeTab === "ug" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase text-foreground mb-4">
                  HSC Academic Stream — Minimum PCM Cut-off Percentage
                </h3>
                <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                  <div className="overflow-x-auto bg-transparent">
                    <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                      <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                        <tr>
                          <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                            Community / Category
                          </th>
                          <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                            Minimum Aggregate Marks in PCM
                          </th>
                          <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                            Mandatory Qualifying Subjects
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/40 font-libre">
                        {hscAcademicCutoffs.map((item, idx) => (
                          <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                            <td className="py-3.5 px-4 font-libre font-bold text-foreground">
                              {item.community}
                            </td>
                            <td className="py-3.5 px-4 font-oswald font-bold text-primary">
                              {item.percent}
                            </td>
                            <td className="py-3.5 px-4 font-libre text-foreground">
                              {item.subjects}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </DataGridContainer>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase text-foreground mb-4">
                  HSC Vocational Stream — Minimum Cut-off Percentage
                </h3>
                <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                  <div className="overflow-x-auto bg-transparent">
                    <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                      <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                        <tr>
                          <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                            Community / Category
                          </th>
                          <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                            Minimum Aggregate Marks
                          </th>
                          <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                            Qualifying Subjects
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/40 font-libre">
                        {hscVocationalCutoffs.map((item, idx) => (
                          <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                            <td className="py-3.5 px-4 font-libre font-bold text-foreground">
                              {item.community}
                            </td>
                            <td className="py-3.5 px-4 font-oswald font-bold text-primary">
                              {item.percent}
                            </td>
                            <td className="py-3.5 px-4 font-libre text-foreground">
                              {item.subjects}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </DataGridContainer>
              </div>
            </div>
          )}

          {activeTab === "lateral" && (
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase text-foreground mb-4">
                Direct 2nd Year Lateral Entry (Diploma &amp; B.Sc. Graduates)
              </h3>
              <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                <div className="overflow-x-auto bg-transparent">
                  <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                    <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                      <tr>
                        <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                          Community / Category
                        </th>
                        <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                          Minimum Aggregate Marks
                        </th>
                        <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                          Qualifying Diploma / Degree Criteria
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40 font-libre">
                      {lateralEntryCutoffs.map((item, idx) => (
                        <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                          <td className="py-3.5 px-4 font-libre font-bold text-foreground">
                            {item.community}
                          </td>
                          <td className="py-3.5 px-4 font-oswald font-bold text-primary">
                            {item.percent}
                          </td>
                          <td className="py-3.5 px-4 font-libre text-foreground">
                            {item.criteria}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </DataGridContainer>
            </div>
          )}

          {activeTab === "pg" && (
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase text-foreground mb-4">
                Postgraduate Degree Eligibility (M.E. / MBA / MCA)
              </h3>
              <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
                <div className="overflow-x-auto bg-transparent">
                  <table className="w-full text-left border-collapse min-w-[700px] text-xs sm:text-sm">
                    <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                      <tr>
                        <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                          Degree Programme
                        </th>
                        <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider w-24">
                          Duration
                        </th>
                        <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider w-24">
                          Intake
                        </th>
                        <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                          Qualifying Entry Degrees &amp; TANCET / CEETA Requirement
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40 font-libre">
                      {pgEligibility.map((item, idx) => (
                        <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                          <td className="py-3.5 px-4 font-libre font-bold text-foreground">
                            {item.programme}
                          </td>
                          <td className="py-3.5 px-4 font-libre text-foreground whitespace-nowrap">
                            {item.duration}
                          </td>
                          <td className="py-3.5 px-4 font-oswald font-bold text-primary whitespace-nowrap">
                            {item.intake}
                          </td>
                          <td className="py-3.5 px-4 font-libre text-foreground">
                            {item.entryDegree}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </DataGridContainer>
            </div>
          )}

          {activeTab === "documents" && (
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase text-foreground mb-4">
                Required Verification Certificates Checklist
              </h3>
              <div className="divide-y divide-border/40 border-y border-border/40 font-libre w-full">
                {documentChecklist.map((docText, idx) => (
                  <div
                    key={idx}
                    className="py-3.5 sm:py-4 px-2 sm:px-4 flex items-center gap-3.5 sm:gap-4 hover:bg-foreground/[0.015] transition-colors w-full"
                  >
                    <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm border border-primary/20 shadow-2xs">
                      {idx + 1}
                    </span>
                    <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                      {docText.replace(/^\d+\.\s*/, "")}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
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
      {/* 3. SECTION B: Original Verification Checklist (Points Layout)             */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-18 lg:py-20 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-2">
              Mandatory Admission Reporting Checklist
            </h2>
            <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed max-w-3xl">
              All candidates admitted under TNEA counseling or Management Quota must submit the following original certificates at the time of college admission reporting.
            </p>
          </div>

          <div className="divide-y divide-border/40 border-y border-border/40 font-libre w-full">
            {documentChecklist.map((docText, idx) => (
              <div
                key={idx}
                className="py-3.5 sm:py-4 px-2 sm:px-4 flex items-center gap-3.5 sm:gap-4 hover:bg-foreground/[0.015] transition-colors w-full"
              >
                <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm border border-primary/20 shadow-2xs">
                  {idx + 1}
                </span>
                <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                  {docText.replace(/^\d+\.\s*/, "")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
