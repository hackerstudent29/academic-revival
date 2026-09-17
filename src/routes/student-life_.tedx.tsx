import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Sparkles, Video, ArrowRight } from "lucide-react";
import { tedxData } from "@/data/studentLife";

const title = "Our TEDx Chapter | TEDxMSAJCE | Student Life | MSAJCE";
const description =
  "Official TEDxMSAJCE chapter at Mohamed Sathak A.J. College of Engineering. Featuring talks by ISRO scientists, AI researchers, Masterchefs, and clean energy innovators.";

export const Route = createFileRoute("/student-life_/tedx")({
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
  component: TedxChapterPage,
});

function TedxChapterPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-background text-foreground pt-0 md:pt-1">
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#9E2339] via-[#861E30] to-[#671422] text-white pt-10 pb-16 px-4 sm:px-6 md:px-12 border-b border-primary/20">
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-sm text-xs font-bold font-oswald uppercase tracking-wider text-white border border-white/20 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Officially Licensed TED Event
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-oswald uppercase tracking-tight leading-[1.05]">
              Our TEDx Chapter (TEDxMSAJCE)
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/90 font-sans leading-relaxed">
              TEDxMSAJCE is an independently organized event under official license from TED, bringing visionary thinkers, researchers, artists, and innovators together on one stage.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/15">
            {tedxData.stats.map((st, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black font-oswald text-white">{st.value}</span>
                <span className="text-xs sm:text-sm font-sans font-semibold text-white/80">{st.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 py-10 space-y-12">
        {/* Header Box */}
        <div className="bg-card dark:bg-[#18181B] border border-foreground/10 rounded-sm p-6 sm:p-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E62B1E]/10 border border-[#E62B1E]/30 rounded-xs text-xs font-black font-oswald uppercase text-[#E62B1E] mb-3">
                <span>TEDx Licensee Chapter</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-oswald uppercase text-foreground tracking-tight">
                TEDxMSAJCE
              </h2>
              <p className="text-lg font-bold font-oswald text-primary uppercase mt-1">
                "{tedxData.theme}"
              </p>
              <p className="text-sm font-sans text-muted-foreground mt-3 max-w-3xl leading-relaxed">
                {tedxData.description}
              </p>
            </div>
          </div>
        </div>

        {/* Speakers Section */}
        <div>
          <h3 className="text-2xl font-black font-oswald uppercase text-foreground mb-6 flex items-center gap-2">
            <Video className="w-5 h-5 text-primary" />
            Featured TEDx Speakers &amp; Talks
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tedxData.speakers.map((spk) => (
              <div
                key={spk.id}
                className="group bg-card dark:bg-[#18181B] border border-foreground/10 rounded-sm overflow-hidden flex flex-col sm:flex-row hover:border-primary/50 transition-colors shadow-xs"
              >
                <div className="sm:w-2/5 relative aspect-[4/3] sm:aspect-auto overflow-hidden bg-muted">
                  <img
                    src={spk.image}
                    alt={spk.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  {spk.videoDuration && (
                    <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-bold font-oswald uppercase px-2 py-0.5 rounded-xs">
                      {spk.videoDuration}
                    </span>
                  )}
                </div>
                <div className="sm:w-3/5 p-5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold font-oswald uppercase text-primary tracking-wider">
                      TEDx Talk
                    </span>
                    <h4 className="text-lg font-black font-oswald uppercase text-foreground leading-snug group-hover:text-primary transition-colors">
                      "{spk.talkTitle}"
                    </h4>
                    <h5 className="text-xs font-bold font-sans text-foreground mt-2">
                      {spk.name}
                    </h5>
                    <p className="text-[11px] font-sans text-muted-foreground">
                      {spk.designation}
                    </p>
                    <p className="text-xs font-sans text-foreground/80 mt-3 leading-relaxed">
                      {spk.summary}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TED Integrity Statement & Call to Action */}
        <div className="border-t border-foreground/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="text-sm font-bold font-oswald uppercase text-foreground tracking-wider">
              TEDx Community Guidelines
            </h4>
            <ul className="mt-2 space-y-1 text-xs text-muted-foreground font-sans">
              {tedxData.rules.map((rule, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            onClick={() => navigate({ to: "/student-life/student-hub" })}
            className="relative group overflow-hidden rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs bg-stone-200 dark:bg-neutral-800 text-foreground dark:text-white border border-stone-300 dark:border-neutral-700 px-6 py-3 font-bold font-oswald text-xs uppercase tracking-wider shrink-0 cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
              Return to Student Hub <ArrowRight className="w-4 h-4" />
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
