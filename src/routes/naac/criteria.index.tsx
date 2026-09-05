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
      <section className="bg-primary pt-12 md:pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="mx-auto max-w-[1440px] relative z-10">
          <Reveal>
            <div className="flex flex-col gap-2">
              <span className="text-primary-foreground/80 font-bold uppercase tracking-widest text-sm font-mono">Dimensions of Institutional Quality</span>
              <h1 className="text-4xl md:text-6xl font-black font-oswald uppercase text-primary-foreground">NAAC Criteria</h1>
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
