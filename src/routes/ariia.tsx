import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { DataGridContainer } from "@/components/ui/data-grid-table";
import ariiaDocs from "@/data/ariia-documents.json";

const title = "ARIIA — Atal Ranking of Institutions on Innovation Achievements | MSAJCE";
const description =
  "Official Atal Ranking of Institutions on Innovation Achievements (ARIIA) reports and certifications for Mohamed Sathak A.J. College of Engineering (MSAJCE).";

export const Route = createFileRoute("/ariia")({
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
  component: ARIIA,
});

function ActionDownloadButton({ href, label = "View Document" }: { href: string; label?: string }) {
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

const ariiaParameters = [
  "Programs and Activities on IPR, Innovation, Start-up and Entrepreneurship",
  "Pre-Incubation & Incubation Infrastructure & Facilities",
  "Annual Budget Spent on Innovation & Entrepreneurial Activities",
  "Successful Innovation and Start-ups Generated from HEI",
];

function ARIIA() {
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
              alt="MSAJCE ARIIA"
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
                ARIIA
              </h1>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. SECTION A: ARIIA Overview & Key Focus Areas (White / #121214 Canvas)   */}
        {/* ========================================================================= */}
        <section className="w-full bg-white dark:bg-[#121214] py-8 sm:py-12 md:py-14 transition-colors">
          <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                ATAL RANKING OF INSTITUTIONS ON INNOVATION ACHIEVEMENTS
              </h2>
            </div>

            {/* Full-Length Editorial Academic Narrative */}
            <div className="w-full text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
              <p>
                Atal Ranking of Institutions on Innovation Achievements (ARIIA) is an initiative of the Ministry of Education (MoE), Government of India to systematically rank major higher educational institutions and universities in India on indicators related to innovation and entrepreneurship development amongst students and faculty. Mohamed Sathak A.J. College of Engineering (MSAJCE) actively promotes innovation-driven engineering education, pre-incubation facilities, and research-backed entrepreneurship.
              </p>
            </div>

            {/* Key Focus Parameters: Readiness Point Design */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                KEY EVALUATION PARAMETERS
              </h3>
              <div className="divide-y divide-border/40 font-libre">
                {ariiaParameters.map((param, idx) => (
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
        {/* 3. SECTION B: ARIIA Certifications & Documents (#F3F3F2 / #18181B Canvas) */}
        {/* ========================================================================= */}
        <section className="w-full bg-[#F3F3F2] dark:bg-[#18181B] py-8 sm:py-12 md:py-14 transition-colors">
          <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                ARIIA CERTIFICATIONS & REPORTS
              </h2>
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
                        Document Title
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-right w-44">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40 font-libre">
                    {ariiaDocs && ariiaDocs.length > 0 ? (
                      ariiaDocs.map((doc, idx) => (
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
                            <ActionDownloadButton href={doc.url} label="View Document" />
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={3} className="py-8 text-center text-muted-foreground font-libre text-sm">
                          Documents are currently being compiled.
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
