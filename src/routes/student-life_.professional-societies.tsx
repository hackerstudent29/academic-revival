import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  Sparkles,
  ArrowRight,
  Cpu,
  GraduationCap,
  Terminal,
  Wrench,
  CheckCircle2,
  ShieldCheck,
  Award,
  BookOpen
} from "lucide-react";
import { professionalSocieties } from "@/data/studentLife";

const title = "Professional Societies | Student Life | MSAJCE";
const description =
  "Explore IEEE, ISTE, CSI, and SAE India professional body chapters at Mohamed Sathak A.J. College of Engineering. Industry standards, research papers, hackathons, and certifications.";

export const Route = createFileRoute("/student-life_/professional-societies")({
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
  component: ProfessionalSocietiesPage,
});

function ProfessionalSocietiesPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background text-foreground pt-0 md:pt-1">
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#9E2339] via-[#861E30] to-[#671422] text-white pt-10 pb-16 px-4 sm:px-6 md:px-12 border-b border-primary/20">
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-sm text-xs font-bold font-oswald uppercase tracking-wider text-white border border-white/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Global Engineering Standards
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-oswald uppercase tracking-tight leading-[1.05]">
              International &amp; National Professional Chapters
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/90 font-sans leading-relaxed">
              Connecting MSAJCE engineering students directly with global industry standards, research networks, professional certifications, and technical body chapters.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/15">
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-oswald text-white">8 Chapters</span>
              <span className="text-xs sm:text-sm font-sans font-semibold text-white/80">Active Professional Bodies</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-oswald text-white">STB99214</span>
              <span className="text-xs sm:text-sm font-sans font-semibold text-white/80">IEEE Student Branch Code</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-oswald text-white">BAJA SAE</span>
              <span className="text-xs sm:text-sm font-sans font-semibold text-white/80">ATV &amp; Go-Kart Racing</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-oswald text-white">100% Industry</span>
              <span className="text-xs sm:text-sm font-sans font-semibold text-white/80">Aligned Certification</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 py-10 space-y-8">
        <div className="border-b border-foreground/10 pb-4">
          <h2 className="text-2xl sm:text-3xl font-black font-oswald uppercase text-foreground">
            Professional Chapters Directory
          </h2>
          <p className="text-sm text-muted-foreground font-sans mt-1">
            Detailed objectives, student benefits, and flagship conventions for each body chapter.
          </p>
        </div>

        {/* Professional Chapters Grid */}
        <div className="space-y-8">
          {professionalSocieties.map((soc) => (
            <div
              key={soc.id}
              className="bg-card dark:bg-[#18181B] border border-foreground/10 rounded-sm p-6 sm:p-8 shadow-xs hover:border-primary/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-foreground/10 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-sm flex items-center justify-center text-primary shrink-0">
                    {soc.id === "ieee" && <Cpu className="w-6 h-6" />}
                    {soc.id === "iste" && <GraduationCap className="w-6 h-6" />}
                    {soc.id === "csi" && <Terminal className="w-6 h-6" />}
                    {soc.id === "sae" && <Wrench className="w-6 h-6" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-black font-oswald uppercase text-foreground">
                        {soc.name}
                      </h3>
                      <span className="text-xs font-bold font-oswald text-primary bg-primary/10 px-2 py-0.5 rounded-xs">
                        {soc.code}
                      </span>
                    </div>
                    <p className="text-xs font-sans text-muted-foreground mt-0.5">{soc.studentChairs}</p>
                  </div>
                </div>
              </div>

              <p className="text-sm font-sans text-foreground/90 leading-relaxed mb-6">
                {soc.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="bg-background/80 p-4 border border-foreground/10 rounded-sm">
                  <h4 className="text-xs font-bold font-oswald uppercase text-primary tracking-wider mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    Core Objectives:
                  </h4>
                  <ul className="space-y-2">
                    {soc.objectives.map((obj, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs font-sans text-foreground/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-background/80 p-4 border border-foreground/10 rounded-sm">
                  <h4 className="text-xs font-bold font-oswald uppercase text-primary tracking-wider mb-3 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    Membership &amp; Student Benefits:
                  </h4>
                  <ul className="space-y-2">
                    {soc.membershipBenefits.map((ben, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs font-sans text-foreground/80">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Banner */}
        <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 p-6 rounded-sm flex items-center justify-between gap-4">
          <div>
            <h4 className="text-lg font-black font-oswald uppercase text-foreground">Explore Our TEDx Chapter</h4>
            <p className="text-xs text-muted-foreground font-sans">TEDxMSAJCE talks, featured speakers, and license details.</p>
          </div>
          <button
            type="button"
            onClick={() => navigate({ to: "/student-life/tedx" })}
            className="relative group overflow-hidden rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs bg-stone-200 dark:bg-neutral-800 text-foreground dark:text-white border border-stone-300 dark:border-neutral-700 px-5 py-2.5 font-bold font-oswald text-xs uppercase tracking-wider shrink-0 cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
              TEDx Chapter <ArrowRight className="w-3.5 h-3.5" />
            </span>
            <span className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
              <span className="absolute inset-x-0 top-0 h-[140%] bg-[#9E2339] translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </span>
          </button>
        </div>
      </div>
    </main>
  );
}
