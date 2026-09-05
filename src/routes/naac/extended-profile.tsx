import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/motion";
import { FileText, Download } from "lucide-react";
import naacDocs from "@/data/naac-documents.json";

export const Route = createFileRoute("/naac/extended-profile")({
  component: ExtendedProfile,
});

function ExtendedProfile() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F5] dark:bg-[#121214]">
      {/* HEADER SECTION */}
      <section className="bg-primary pt-12 md:pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="mx-auto max-w-[1440px] relative z-10">
          <Reveal>
            <div className="flex flex-col gap-2">
              <span className="text-primary-foreground/80 font-bold uppercase tracking-widest text-sm font-mono">NAAC Document Centre</span>
              <h1 className="text-4xl md:text-6xl font-black font-oswald uppercase text-primary-foreground">Extended Profile</h1>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-12 py-16 md:py-24 w-full flex-grow">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {naacDocs["DVV Extended Profile"].map((doc, idx) => (
              <a 
                key={idx} 
                href={`https://www.msajce-edu.in/${doc.url}`} 
                target="_blank" 
                rel="noreferrer"
                className="group flex flex-col bg-card border border-border rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs p-6 transition-all hover:shadow-lg hover:border-primary/50"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 bg-primary/10 text-primary rounded-sm flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm md:text-base text-foreground line-clamp-3 mb-2 group-hover:text-primary transition-colors">
                      {doc.title}
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-wide text-primary flex items-center gap-1">
                      <Download className="w-3 h-3" /> Download
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
