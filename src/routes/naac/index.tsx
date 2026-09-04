import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Target, Award, Download, CheckCircle2, ChevronRight, FileText } from "lucide-react";
import { Reveal } from "@/components/motion";

// We will import data, but for now we'll mock the top-level criteria if data isn't perfectly clean
import naacData from "@/data/naac.json";

export const Route = createFileRoute("/naac/")({
  component: NaacPortal,
});

function NaacPortal() {
  const navigate = useNavigate();

  // The first 7 criteria are the main ones
  const mainCriteria = naacData.criteria.slice(0, 7);

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F5] dark:bg-[#121214]">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/accreditations_campus.jpg" 
            alt="MSAJCE Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
        </div>

        {/* Hero Content Panel */}
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-12 w-full pt-16">
          <Reveal variant="rise">
            <div className="max-w-2xl bg-background/95 backdrop-blur-md p-8 md:p-12 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs border-l-4 border-primary shadow-2xl">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block font-mono">
                Quality & Accreditation
              </span>
              <h1 className="text-5xl md:text-7xl font-black font-oswald text-foreground mb-2">
                NAAC
              </h1>
              <h2 className="text-xl md:text-3xl font-oswald text-foreground/80 mb-6">
                National Assessment & Accreditation Council
              </h2>
              <p className="text-base md:text-lg text-muted-foreground font-sans mb-8">
                Academic quality. Continuous improvement. Institutional excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#criteria" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-sm font-bold text-sm uppercase tracking-wide hover:bg-primary/90 transition-colors">
                  Explore Criteria
                </a>
                <a href="#resources" className="inline-flex items-center justify-center bg-transparent border-2 border-primary text-primary px-6 py-3 rounded-sm font-bold text-sm uppercase tracking-wide hover:bg-primary hover:text-primary-foreground transition-colors">
                  NAAC Resources
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. NAAC HIGHLIGHTS */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-12 py-16 md:py-24 w-full">
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[2px] w-12 bg-primary"></div>
            <h2 className="text-2xl md:text-3xl font-black font-oswald uppercase text-foreground">NAAC Highlights</h2>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "NAAC Framework", desc: "Explore the seven criteria of assessment.", icon: Target },
            { title: "Quality Assurance", desc: "Continuous internal quality enhancement.", icon: CheckCircle2 },
            { title: "Institutional Excellence", desc: "Showcasing distinctiveness and best practices.", icon: Award }
          ].map((block, idx) => (
            <Reveal key={idx} variant="rise" delay={idx * 0.1}>
              <div className="group relative bg-card border border-border rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs p-8 transition-all hover:shadow-lg hover:border-primary/50 flex flex-col h-full">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-sm flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                  <block.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-oswald text-foreground uppercase mb-3">{block.title}</h3>
                <p className="text-muted-foreground font-sans mb-8 flex-1">{block.desc}</p>
                <div className="flex items-center text-primary font-bold text-sm uppercase tracking-wide">
                  Explore <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
                <a href="#criteria" className="absolute inset-0 z-10"><span className="sr-only">Explore {block.title}</span></a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. NAAC OVERVIEW */}
      <section className="bg-background py-16 md:py-24 border-y border-border">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 w-full">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-black font-oswald uppercase text-foreground mb-12 max-w-4xl">
              National Assessment & <span className="text-primary">Accreditation Council</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 text-base md:text-[17px] text-foreground font-sans leading-relaxed text-justify">
            <Reveal variant="blur">
              <p className="mb-6">
                India has one of the largest and diverse education systems in the world. Privatization, widespread expansion, increased autonomy and introduction of Programmes in new and emerging areas have improved access to higher education. At the same time, it has also led to widespread concern on the quality and relevance of the higher education.
              </p>
              <p>
                To address these concerns, the National Policy on Education (NPE, 1986) and the Programme of Action (PoA, 1992) spelt out strategic plans for the policies, advocated the establishment of an independent National accreditation agency. Consequently, the National Assessment and Accreditation Council (NAAC) was established in 1994 as an autonomous institution of the University Grants Commission (UGC) with its Head Quarter in Bengaluru.
              </p>
            </Reveal>
            <Reveal variant="blur" delay={0.2}>
              <p className="mb-6">
                The mandate of NAAC as reflected in its vision statement is in making quality assurance an integral part of the functioning of Higher Education Institutions (HEIs).
              </p>
              <p>
                The NAAC functions through its General Council (GC) and Executive Committee (EC) comprising educational administrators, policy makers and senior academicians from a cross-section of Indian higher education system. The Chairperson of the UGC is the President of the GC of the NAAC, the Chairperson of the EC is an eminent academician nominated by the President of GC (NAAC). The Director is the academic and administrative head of NAAC and is the member secretary of both the GC and the EC.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. NAAC CRITERIA */}
      <section id="criteria" className="mx-auto max-w-[1440px] px-6 md:px-12 py-16 md:py-24 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <Reveal>
            <div className="flex flex-col gap-2">
              <span className="text-primary font-bold uppercase tracking-widest text-sm font-mono">Dimensions of Institutional Quality</span>
              <h2 className="text-4xl md:text-6xl font-black font-oswald uppercase text-foreground">NAAC Criteria</h2>
            </div>
          </Reveal>
        </div>

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

      {/* 6. QUALITY JOURNEY */}
      <section className="bg-primary text-primary-foreground py-20 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 relative z-10 text-center">
          <Reveal>
            <h2 className="text-sm font-bold uppercase tracking-widest font-mono mb-12 text-primary-foreground/80">The Quality Journey</h2>
          </Reveal>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 font-black font-oswald text-3xl md:text-5xl lg:text-7xl uppercase">
            <Reveal delay={0.1}><span>Assess</span></Reveal>
            <Reveal delay={0.2}><ChevronRight className="w-8 h-8 md:w-12 md:h-12 hidden md:block opacity-50" /></Reveal>
            <Reveal delay={0.3}><span>Analyse</span></Reveal>
            <Reveal delay={0.4}><ChevronRight className="w-8 h-8 md:w-12 md:h-12 hidden md:block opacity-50" /></Reveal>
            <Reveal delay={0.5}><span>Improve</span></Reveal>
            <Reveal delay={0.6}><ChevronRight className="w-8 h-8 md:w-12 md:h-12 hidden md:block opacity-50" /></Reveal>
            <Reveal delay={0.7}><span>Review</span></Reveal>
          </div>
          <Reveal delay={0.8}>
            <p className="mt-12 text-lg md:text-xl font-sans text-primary-foreground/90 max-w-2xl mx-auto">
              Quality is a continuous journey. At MSAJCE, we are committed to institutional excellence through rigorous assessment and continuous improvement.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 7. NAAC DOCUMENT CENTRE */}
      <section id="resources" className="mx-auto max-w-[1440px] px-6 md:px-12 py-16 md:py-24 w-full">
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[2px] w-12 bg-primary"></div>
            <h2 className="text-2xl md:text-3xl font-black font-oswald uppercase text-foreground">NAAC Document Centre</h2>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: "Accreditation", link: "#" },
            { title: "DVV Clarification", link: "/naac/dvv" },
            { title: "Extended Profile", link: "/naac/extended-profile" },
            { title: "Best Practices", link: "/naac/best-practices" },
            { title: "Institutional Distinctiveness", link: "/naac/distinctiveness" },
            { title: "Code of Conduct", link: "/naac/code-of-conduct" },
            { title: "Disabled Friendly Campus", link: "#" },
            { title: "Environmental Activities", link: "#" },
            { title: "Annual Reports", link: "#" },
            { title: "Capacity Building", link: "#" },
            { title: "Stakeholder Feedback", link: "#" },
            { title: "IQAC", link: "/naac/iqac" },
          ].map((doc, idx) => (
            <Reveal key={idx} variant="rise" delay={idx * 0.03}>
              <Link to={doc.link} className="flex items-center gap-3 p-4 bg-card border border-border rounded-sm hover:border-primary hover:bg-primary/5 transition-colors group">
                <FileText className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="font-sans font-medium text-sm md:text-base text-foreground group-hover:text-primary transition-colors">{doc.title}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      
    </div>
  );
}
