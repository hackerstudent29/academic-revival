import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/motion";
import { Download, FileText } from "lucide-react";
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
    ],
  }),
  component: ARIIA,
});

function ARIIA() {
  return (
    <main className="flex flex-col min-h-screen bg-[#F7F7F5] dark:bg-[#121214] pt-0 md:pt-1">
      {/* HEADER SECTION (Matching IQAC Sub-Header Design) */}
      <section className="pt-16 md:pt-24 pb-12 md:pb-16 px-6 md:px-12 relative overflow-hidden bg-cover bg-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/accreditations_campus.jpg"
            alt="MSAJCE Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
        </div>
        <div className="mx-auto max-w-[1440px] relative z-10 pt-4">
          <Reveal>
            <div className="flex flex-col gap-2 max-w-3xl">
              <span className="text-white/90 font-bold uppercase tracking-widest text-xs sm:text-sm font-mono border-l-2 border-primary pl-3 drop-shadow-sm">
                Rankings & Reports // ARIIA
              </span>
              <h1 className="text-4xl md:text-6xl font-black font-oswald uppercase text-white drop-shadow-md">
                ARIIA
              </h1>
              <p className="text-white/80 font-sans text-sm md:text-base max-w-2xl mt-1">
                Atal Ranking of Institutions on Innovation Achievements
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-12 py-10 md:py-14 w-full flex-grow">
        <Reveal>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-black font-oswald uppercase text-foreground mb-3">
                ARIIA Documents
              </h2>
              <p className="text-foreground/80 mb-8 font-sans max-w-2xl">
                Browse our repository of ARIIA reports and certifications.
              </p>

              {ariiaDocs && ariiaDocs.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {ariiaDocs.map((doc, idx) => (
                    <a
                      key={idx}
                      href={doc.url.startsWith("http") ? doc.url : `https://www.msajce-edu.in/${doc.url}`}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex flex-col items-center bg-card border border-border rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs p-6 transition-all hover:shadow-lg hover:-translate-y-1 hover:border-primary/50 text-center gap-4"
                    >
                      <div className="w-16 h-16 shrink-0 bg-primary/10 text-primary rounded-sm flex items-center justify-center mb-2">
                        <FileText className="w-8 h-8 group-hover:text-primary transition-colors" />
                      </div>
                      <h3 className="font-bold text-lg font-oswald uppercase text-foreground group-hover:text-primary transition-colors">
                        {doc.title}
                      </h3>
                      <span className="text-sm font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all font-oswald uppercase">
                        View Document <Download className="w-4 h-4 ml-1" />
                      </span>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="bg-background border border-border p-12 text-center rounded-sm">
                  <p className="text-muted-foreground font-sans">Documents are currently being compiled.</p>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
