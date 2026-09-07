import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion";
import naacData from "@/data/naac.json";

export const Route = createFileRoute("/naac/criteria/")({
  component: NaacCriteria,
});

function NaacCriteria() {
  // The first 7 criteria are the main ones
  const mainCriteria = naacData.criteria.slice(0, 7);

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F5] dark:bg-[#121214]">
      {/* HEADER SECTION */}
      <section 
        className="pt-16 md:pt-32 pb-16 px-6 md:px-12 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="mx-auto max-w-[1440px] relative z-10">
          <Reveal>
            <div className="flex flex-col gap-3 max-w-3xl">
              <span className="text-white/90 font-bold uppercase tracking-widest text-sm font-mono border-l-2 border-primary pl-3 drop-shadow-sm">Dimensions of Institutional Quality</span>
              <h1 className="text-4xl md:text-6xl font-black font-oswald uppercase text-white drop-shadow-md">NAAC Criteria</h1>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-12 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainCriteria.map((criterion, idx) => (
            <Reveal key={criterion.id} variant="rise" delay={idx * 0.05}>
              <Link 
                to={`/naac/criteria/$id`}
                params={{ id: criterion.id }}
                className="group flex flex-col justify-between bg-card border border-border p-8 rounded-sm hover:border-primary transition-colors h-full"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-4xl font-black font-oswald text-muted-foreground/30 group-hover:text-primary/20 transition-colors">
                      {criterion.number}
                    </span>
                    <span className="bg-primary/10 text-primary font-bold font-mono px-3 py-1 rounded-sm text-sm">
                      {criterion.score} Marks
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black font-oswald uppercase text-foreground mb-4 line-clamp-2">
                    {criterion.title}
                  </h3>
                </div>
                
                <div className="mt-8 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors uppercase tracking-wide">
                    View Criteria
                  </span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
