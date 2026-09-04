import { createFileRoute, Link } from "@tanstack/react-router";
import { AboutSubNav } from "@/components/layout/AboutSubNav";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { History, Award, Building, HeartHandshake, Quote, CheckCircle2 } from "lucide-react";

const title = "Mohamed Sathak Trust & Management History — MSAJCE";
const description =
  "Official history of Mohamed Sathak Trust (Est. 1973), managing 18 educational institutions across Tamil Nadu including Tamil Nadu's first self-financing engineering college.";

export const Route = createFileRoute("/about_/trust")({
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
  component: TrustHistoryPage,
});

export function TrustHistoryPage() {
  return (
    <main className="bg-page-bg text-foreground min-h-screen pt-0 md:pt-1">
      {/* Secondary Sticky Sub-Nav */}
      <AboutSubNav />

      {/* SFCM Hero Showcase Banner */}
      <section className="relative border-b border-border bg-gradient-to-b from-primary/10 via-background to-page-bg pt-8 pb-16 md:pt-12 md:pb-20">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="flex flex-col gap-4 max-w-4xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-foreground/10 border border-foreground/20 text-foreground text-xs font-mono font-bold uppercase rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs w-max">
              Philanthropic Heritage Since 1973
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-foreground font-oswald leading-none">
              Mohamed Sathak <span className="text-primary">Trust & Management</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground font-libre mt-2 max-w-3xl">
              Established on <strong>26th October 1973</strong> at Kilakarai by the philanthropic Mohamed Sathak family to empower deprived students from rural and financially challenged backgrounds through high-quality technical and professional education.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border pt-8">
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-black font-oswald text-primary">26 Oct 1973</span>
              <span className="text-xs font-bold font-oswald uppercase text-foreground mt-1">Founding Date</span>
              <span className="text-[11px] font-libre text-muted-foreground">Established in Kilakarai</span>
            </div>
            <div className="flex flex-col md:border-l md:border-border md:pl-6">
              <span className="text-3xl md:text-4xl font-black font-oswald text-primary">18</span>
              <span className="text-xs font-bold font-oswald uppercase text-foreground mt-1">Institutions</span>
              <span className="text-[11px] font-libre text-muted-foreground">Engineering, Arts, Nursing & Schools</span>
            </div>
            <div className="flex flex-col md:border-l md:border-border md:pl-6">
              <span className="text-3xl md:text-4xl font-black font-oswald text-primary">1984</span>
              <span className="text-xs font-bold font-oswald uppercase text-foreground mt-1">Pioneering Milestone</span>
              <span className="text-[11px] font-libre text-muted-foreground">1st Self-Financing Engg. College in TN</span>
            </div>
            <div className="flex flex-col md:border-l md:border-border md:pl-6">
              <span className="text-3xl md:text-4xl font-black font-oswald text-primary">50,000+</span>
              <span className="text-xs font-bold font-oswald uppercase text-foreground mt-1">Alumni Network</span>
              <span className="text-[11px] font-libre text-muted-foreground">Global Leaders & Engineers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Narrative & Philosophy */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-20 font-libre">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
              // Foundational Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground font-oswald">
              Educational Empowerment Without Bias
            </h2>

            <div className="p-6 bg-card border-l-4 border-primary border-y border-r border-border rounded-r-lg shadow-xs">
              <blockquote className="text-lg sm:text-xl font-bold font-oswald text-foreground leading-relaxed">
                "God will not change the condition of a people until they try to change themselves."
              </blockquote>
              <p className="text-xs font-libre text-muted-foreground mt-2">
                We focus on doing right things without any bias and with a charitable mind to build institutions of academic excellence and help build the nation.
              </p>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed">
              The first self-financing engineering college in the state was established by the Trust in 1984 at Kilakarai, and from that day onwards the Trust has been contributing to provide quality education with academic excellence to meet the requirements of industries at national and international levels.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              The trust has an impeccable track record of running quality educational institutions from higher secondary level to undergraduate and postgraduate levels across Engineering, Technology, Arts & Science, Architecture, Pharmacy, Physiotherapy, Nursing, and Medical Sciences.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/about/leadership"
                className="px-6 py-3 bg-primary text-primary-foreground text-xs font-oswald font-bold uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors"
              >
                Leadership Messages &raquo;
              </Link>
              <Link
                to="/about/group-institutions"
                className="px-6 py-3 border border-border bg-card text-foreground text-xs font-oswald font-bold uppercase tracking-wider rounded-sm hover:bg-muted transition-colors"
              >
                Group of Institutions &raquo;
              </Link>
            </div>
          </div>

          {/* Chairman Quote & Leadership Block */}
          <div className="lg:col-span-5 bg-card border border-border p-8 rounded-xl shadow-xs">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-3">
              Message from the Chairman
            </span>
            <blockquote className="text-base sm:text-lg font-libre font-semibold text-foreground leading-relaxed mb-6">
              "Choosing the right institute to pursue your higher studies is one of the most important decisions that you will ever make. It can be the key for the door of your lifelong opportunity for sustainable growth and service... I invite you to visit our magnificent campus and convince yourselves why so many bright students have made MSAJCE their choice."
            </blockquote>
            <div className="border-t border-border pt-4">
              <h3 className="text-lg font-oswald font-bold uppercase text-foreground">Alhaj S.M. Yousuf Sahib</h3>
              <p className="text-xs font-libre text-muted-foreground">Chairman, Mohamed Sathak Trust</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="border-t border-border bg-page-bg py-12">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-libre font-semibold text-muted-foreground">
            Explore Governing Council and 18 Group Institutions
          </span>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/about/governing-council"
              className="px-4 py-2 text-xs font-oswald font-bold uppercase tracking-wider border border-border rounded-sm hover:bg-muted transition-colors"
            >
              Governing Council &raquo;
            </Link>
            <Link
              to="/about/group-institutions"
              className="px-4 py-2 text-xs font-oswald font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors"
            >
              Group of Institutions &raquo;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
