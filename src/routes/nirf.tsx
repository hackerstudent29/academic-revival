import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
import { DataGridContainer } from "@/components/ui/data-grid-table";
import nirfDocs from "@/data/nirf-documents.json";

const title = "NIRF — National Institutional Ranking Framework | MSAJCE";
const description =
  "Official National Institutional Ranking Framework (NIRF) ranking submissions and annual reports for Mohamed Sathak A.J. College of Engineering (MSAJCE).";

export const Route = createFileRoute("/nirf")({
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
  component: NIRF,
});

function ActionDownloadButton({ href, label = "Download PDF" }: { href: string; label?: string }) {
  const fullUrl = href.startsWith("http") ? href : `https://www.msajce-edu.in/${href.replace(/^\//, "")}`;
  return (
    <a
      href={fullUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-stone-300 dark:border-neutral-700 bg-stone-200/90 dark:bg-neutral-800 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider font-oswald text-foreground dark:text-white transition-all duration-300 shadow-2xs hover:text-white cursor-pointer select-none shrink-0"
    >
      <span className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
        <span className="absolute inset-x-0 top-0 h-[140%] bg-[#9E2339] translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <span className="absolute -top-3.5 left-0 w-[200%] h-4 pointer-events-none block">
            <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,-20 1200,40 L1200,120 L0,120 Z" />
            </svg>
          </span>
          <span className="absolute -top-4 left-0 w-[200%] h-5 opacity-40 pointer-events-none block">
            <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave-reverse" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,30 C200,-30 400,90 600,10 C800,-40 1000,70 1200,20 L1200,120 L0,120 Z" />
            </svg>
          </span>
        </span>
      </span>
      <span className="relative z-10 flex items-center justify-center gap-1.5 group-hover:text-white transition-colors duration-300">
        <span>{label}</span>
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </a>
  );
}

function WaveDividerAB() {
  return (
    <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
      <svg
        viewBox="0 0 1440 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-8 sm:h-12 md:h-14 block preserve-3d"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
          className="fill-[#F3F3F2] dark:fill-[#18181B]"
        />
      </svg>
    </div>
  );
}

const nirfParameters = [
  "Teaching, Learning & Resources (TLR)",
  "Research and Professional Practice (RP)",
  "Graduation Outcomes (GO)",
  "Outreach and Inclusivity (OI) & Peer Perception",
];

const filterOptions = [
  { id: "all", label: "All Documents" },
  { id: "2026", label: "NIRF 2026" },
  { id: "2025", label: "NIRF 2025" },
  { id: "2024", label: "NIRF 2024" },
  { id: "2023", label: "NIRF 2023" },
  { id: "annual", label: "Annual Reports" },
];

function NIRF() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredDocs = useMemo(() => {
    if (selectedFilter === "all") return nirfDocs;
    if (selectedFilter === "annual") {
      return nirfDocs.filter((doc) => doc.title.toLowerCase().includes("annual report"));
    }
    return nirfDocs.filter((doc) => doc.title.includes(selectedFilter));
  }, [selectedFilter]);

  return (
    <main className="bg-white dark:bg-[#121214] text-foreground font-libre antialiased min-h-screen flex flex-col selection:bg-primary selection:text-white">
      <div className="flex-1 pt-0 md:pt-1">
        {/* ========================================================================= */}
        {/* 1. HERO BANNER: Standard Bottom-Docked Theme-Adaptive Frame Banner        */}
        {/* ========================================================================= */}
        <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/accreditations_campus.jpg"
              alt="MSAJCE NIRF"
              className="w-full h-full object-cover object-center brightness-[0.75] filter contrast-105 select-none pointer-events-none rounded-none"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/images/eligibility_hero.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
          </div>

          <div className="relative z-10 mx-auto max-w-[1440px] w-full px-3.5 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 md:pt-24 pb-0">
            <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 shadow-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-t border-r border-border dark:border-white/15">
              <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none">
                NIRF
              </h1>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. SECTION A: NIRF Overview & Core Parameters (White / #121214 Canvas)   */}
        {/* ========================================================================= */}
        <section className="w-full bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
          <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                NATIONAL INSTITUTIONAL RANKING FRAMEWORK
              </h2>
            </div>

            {/* Full-Length Editorial Academic Narrative */}
            <div className="w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
              <p>
                The National Institutional Ranking Framework (NIRF) was approved by the Ministry of Education (formerly MHRD) to outline a standardized methodology to rank higher educational institutions across India. Mohamed Sathak A.J. College of Engineering (MSAJCE) participates consistently in annual NIRF ranking cycles, demonstrating our steadfast dedication to academic rigor, state-of-the-art facilities, impactful research publications, and exceptional student graduation outcomes.
              </p>
            </div>

            {/* Core Ranking Parameters: Readiness Point Design */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                CORE RANKING PARAMETERS
              </h3>
              <div className="divide-y divide-border/40 font-libre">
                {nirfParameters.map((param, idx) => (
                  <div
                    key={idx}
                    className="py-3 sm:py-3.5 px-1 sm:px-2 flex items-start gap-3.5 sm:gap-4 hover:bg-primary/[0.03] transition-colors"
                  >
                    <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                      {idx + 1}
                    </span>
                    <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed flex-1 pt-0.5 sm:pt-1">
                      {param}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Wave Divider A -> B (White -> #F3F3F2 / #18181B) */}
        <WaveDividerAB />

        {/* ========================================================================= */}
        {/* 3. SECTION B: NIRF Submissions & Documents (#F3F3F2 / #18181B Canvas)    */}
        {/* ========================================================================= */}
        <section className="w-full bg-[#F3F3F2] dark:bg-[#18181B] py-8 sm:py-12 md:py-14 transition-colors">
          <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                  NIRF SUBMISSIONS & ANNUAL REPORTS
                </h2>
              </div>
              <span className="font-mono text-xs font-bold text-muted-foreground">
                Showing {filteredDocs.length} of {nirfDocs.length} Documents
              </span>
            </div>

            {/* Asymmetrical Filter Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {filterOptions.map((f) => {
                const isActive = selectedFilter === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => setSelectedFilter(f.id)}
                    className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider font-oswald rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border transition-all cursor-pointer select-none ${
                      isActive
                        ? "bg-primary text-white border-primary shadow-xs"
                        : "border-stone-300 dark:border-neutral-700 bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-200 hover:text-primary hover:border-primary/50"
                    }`}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>

            {/* Publications DataGrid Table */}
            <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
              <div className="overflow-x-auto bg-transparent">
                <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                  <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                    <tr>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16 text-center">
                        S.No
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                        Document / Submission Title
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-right w-44">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40 font-libre">
                    {filteredDocs && filteredDocs.length > 0 ? (
                      filteredDocs.map((doc, idx) => (
                        <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                          <td className="py-3.5 px-4 text-center font-mono font-bold text-muted-foreground text-xs whitespace-nowrap">
                            {String(idx + 1).padStart(2, "0")}
                          </td>
                          <td className="py-3.5 px-4">
                            <p className="font-libre text-xs sm:text-sm text-foreground font-medium leading-relaxed">
                              {doc.title}
                            </p>
                          </td>
                          <td className="py-3.5 px-4 text-right whitespace-nowrap">
                            <ActionDownloadButton href={doc.url} label="Download PDF" />
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={3} className="py-8 text-center text-muted-foreground font-libre text-sm">
                          No documents matching the selected filter.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </DataGridContainer>
          </div>
        </section>
      </div>
    </main>
  );
}
