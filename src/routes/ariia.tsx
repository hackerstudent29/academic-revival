import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/motion";
import { Download, FileText } from "lucide-react";
import ariiaDocs from "@/data/ariia-documents.json";

export const Route = createFileRoute("/ariia")({
  component: ARIIA,
});

function ARIIA() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F5] dark:bg-[#121214]">
      {/* HEADER SECTION */}
      <section className="relative pt-12 pb-8 bg-background border-b border-border">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 w-full">
          <Reveal>
            <div className="flex flex-col max-w-4xl">
              <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Rankings & Reports</span>
              <h1 className="text-4xl md:text-6xl font-black font-oswald uppercase text-foreground">ARIIA</h1>
              <p className="mt-4 text-muted-foreground font-sans text-base md:text-lg max-w-2xl">
                Atal Ranking of Institutions on Innovation Achievements
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-12 py-12 w-full flex-grow">
        <Reveal>
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-black font-oswald uppercase text-foreground mb-6">ARIIA Documents</h2>
              <p className="text-foreground/80 mb-8 font-sans">
                Browse our repository of ARIIA reports and certificates.
              </p>
              
              {ariiaDocs && ariiaDocs.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {ariiaDocs.map((doc, idx) => (
                    <a 
                      key={idx} 
                      href={doc.url.startsWith('http') ? doc.url : `https://www.msajce-edu.in/${doc.url}`} 
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
                      <span className="text-sm font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
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
    </div>
  );
}
