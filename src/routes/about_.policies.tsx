import { createFileRoute } from "@tanstack/react-router";
import { FileDown, ArrowUpRight } from "lucide-react";

const title = "MSAJCE Policies — M.S.A.J. College of Engineering, Chennai";
const description =
  "Official institutional policies, code of conduct, governance frameworks, and statutory policies of Mohamed Sathak A.J. College of Engineering.";

export const Route = createFileRoute("/about_/policies")({
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
  component: InstitutionalPoliciesPage,
});

const policiesList = [
  {
    id: "01",
    title: "E-Governance Policy",
    pdfUrl: "https://www.msajce-edu.in/images/msajcepolicies/e-governance-policy.pdf",
  },
  {
    id: "02",
    title: "Feedback Policy",
    pdfUrl: "https://www.msajce-edu.in/images/msajcepolicies/feeback-policy.pdf",
  },
  {
    id: "03",
    title: "HR Policy",
    pdfUrl: "https://www.msajce-edu.in/images/msajcepolicies/hr-policy.pdf",
  },
  {
    id: "04",
    title: "Performance Appraisal Policy",
    pdfUrl: "https://www.msajce-edu.in/images/msajcepolicies/performance-appraisal-policy.pdf",
  },
  {
    id: "05",
    title: "Research Policy",
    pdfUrl: "https://www.msajce-edu.in/images/msajcepolicies/research-policy.pdf",
  },
  {
    id: "06",
    title: "Roles and Responsibility",
    pdfUrl: "https://www.msajce-edu.in/images/msajcepolicies/roles-and-responsibility.pdf",
  },
  {
    id: "07",
    title: "Scholarship Policy",
    pdfUrl: "https://www.msajce-edu.in/images/msajcepolicies/scholarship-policy.pdf",
  },
  {
    id: "08",
    title: "Slow Learner & Advanced Learner Policy",
    pdfUrl: "https://www.msajce-edu.in/images/msajcepolicies/SL&AL-policy.pdf",
  },
  {
    id: "09",
    title: "ANTI RAGGING POLICY",
    pdfUrl: "https://www.msajce-edu.in/images/msajcepolicies/anti-ragging-policy.pdf",
  },
  {
    id: "10",
    title: "DIVYANGJAN POLICY",
    pdfUrl: "https://www.msajce-edu.in/images/msajcepolicies/divyangjan-policy.pdf",
  },
  {
    id: "11",
    title: "Institutional Green Policy",
    pdfUrl: "https://www.msajce-edu.in/images/msajcepolicies/InstitutionalGreen-policy.pdf",
  },
];

export function InstitutionalPoliciesPage() {
  return (
    <main className="bg-white dark:bg-[#121214] text-foreground min-h-screen pt-0 md:pt-1 font-sans selection:bg-primary selection:text-white">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER: Standard MSAJCE Hero (Title Docked Flush at Bottom)       */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[260px] sm:min-h-[300px] md:min-h-[360px] flex flex-col justify-end">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/procedure_hero.jpg"
            alt="MSAJCE Policies"
            className="w-full h-full object-cover object-center brightness-[0.65] filter contrast-105 select-none pointer-events-none rounded-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        </div>

        {/* Title Container: Docked Flush at Bottom of Hero */}
        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-4 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 pb-0">
          <div className="inline-block border-l-4 border-primary bg-white/95 dark:bg-[#121214]/95 text-foreground px-4 sm:px-6 md:px-8 py-3 sm:py-4 backdrop-blur-md shadow-2xl border-t border-r border-border dark:border-white/15">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-oswald uppercase text-foreground tracking-tight leading-none">
              MSAJCE POLICIES
            </h1>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. POLICIES DIRECTORY: Minimal Editorial List (Strictly Zero Cards)       */}
      {/* ========================================================================= */}
      <section className="w-full bg-white dark:bg-[#121214] py-10 sm:py-16 transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          {/* Direct Editorial List (divide-y) */}
          <div className="border-t border-b border-border divide-y divide-border">
            {policiesList.map((policy) => (
              <div
                key={policy.id}
                className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-foreground/[0.02] transition-colors px-2"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm sm:text-base font-mono font-bold text-primary shrink-0">
                    #{policy.id}
                  </span>
                  <h2 className="text-base sm:text-lg md:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                    {policy.title}
                  </h2>
                </div>

                {/* Boxy Asymmetrical Button with Liquid Ocean Wave Fill Effect */}
                <a
                  href={policy.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border border-primary/30 dark:border-primary/50 bg-background/80 dark:bg-[#18181B] px-4 py-2 text-xs sm:text-sm font-oswald font-bold uppercase tracking-wider text-foreground transition-all duration-300 hover:border-primary hover:text-white shrink-0 self-start sm:self-auto"
                >
                  {/* Liquid Ocean Wave Layers */}
                  <span className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
                    <span className="absolute inset-x-0 top-0 h-[140%] bg-primary translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <span className="absolute -top-3.5 left-0 w-[200%] h-4 pointer-events-none block">
                        <svg
                          className="w-full h-full fill-primary animate-ocean-wave"
                          viewBox="0 0 1200 120"
                          preserveAspectRatio="none"
                        >
                          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,-20 1200,40 L1200,120 L0,120 Z" />
                        </svg>
                      </span>
                      <span className="absolute -top-4 left-0 w-[200%] h-5 opacity-40 pointer-events-none block">
                        <svg
                          className="w-full h-full fill-primary animate-ocean-wave-reverse"
                          viewBox="0 0 1200 120"
                          preserveAspectRatio="none"
                        >
                          <path d="M0,30 C200,-30 400,90 600,10 C800,-40 1000,70 1200,20 L1200,120 L0,120 Z" />
                        </svg>
                      </span>
                    </span>
                  </span>

                  <FileDown className="relative z-10 w-4 h-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5" />
                  <span className="relative z-10">DOWNLOAD PDF</span>
                  <ArrowUpRight className="relative z-10 w-3.5 h-3.5 opacity-70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
