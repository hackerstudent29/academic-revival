import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/motion";
import { FileText, Download } from "lucide-react";
import naacDocs from "@/data/naac-documents.json";

export const Route = createFileRoute("/naac/distinctiveness")({
  component: InstitutionalDistinctiveness,
});

function InstitutionalDistinctiveness() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F5] dark:bg-[#121214]">
      {/* HEADER SECTION */}
      <section 
        className="pt-16 md:pt-32 pb-16 px-6 md:px-12 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523580494112-071d16940863?q=80&w=2070&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="mx-auto max-w-[1440px] relative z-10">
          <Reveal>
            <div className="flex flex-col gap-3 max-w-3xl">
              <span className="text-white/90 font-bold uppercase tracking-widest text-sm font-mono border-l-2 border-primary pl-3 drop-shadow-sm">NAAC Document Centre</span>
              <h1 className="text-4xl md:text-6xl font-black font-oswald uppercase text-white drop-shadow-md">Institutional Distinctiveness</h1>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-12 py-16 md:py-24 w-full flex-grow">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {naacDocs["Institutional Distinctiveness"].map((doc, idx) => (
                <a 
                  key={idx} 
                  href={`https://www.msajce-edu.in/${doc.url}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="group flex flex-col bg-card border border-border rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs p-6 transition-all hover:shadow-lg hover:-translate-y-1 hover:border-primary/50"
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
