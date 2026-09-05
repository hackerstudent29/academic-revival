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
              <p className="text-base md:text-lg text-muted-foreground font-sans">
                Academic quality. Continuous improvement. Institutional excellence.
              </p>
              

            </div>
          </Reveal>
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




      {/* 5. NAAC DOCUMENT CENTRE */}
      <section className="bg-[#F7F7F5] dark:bg-[#121214] py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 w-full">
          <Reveal>
            <div className="flex flex-col mb-12">
              <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block font-mono">
                Downloads & Reports
              </span>
              <h2 className="text-3xl md:text-5xl font-black font-oswald uppercase text-foreground">
                NAAC Document Centre
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <Reveal variant="slide-up" delay={0.1}>
              <Link to="/naac/dvv" className="group flex flex-col bg-card border border-border rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs p-6 transition-all hover:shadow-lg hover:border-primary/50">
                <h3 className="font-bold text-lg md:text-xl font-oswald uppercase text-foreground mb-2 group-hover:text-primary transition-colors">
                  DVV Clarification
                </h3>
                <span className="text-sm text-primary flex items-center gap-1 font-bold">
                  View Documents <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Reveal>
            <Reveal variant="slide-up" delay={0.2}>
              <Link to="/naac/extended-profile" className="group flex flex-col bg-card border border-border rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs p-6 transition-all hover:shadow-lg hover:border-primary/50">
                <h3 className="font-bold text-lg md:text-xl font-oswald uppercase text-foreground mb-2 group-hover:text-primary transition-colors">
                  Extended Profile
                </h3>
                <span className="text-sm text-primary flex items-center gap-1 font-bold">
                  View Documents <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Reveal>
            <Reveal variant="slide-up" delay={0.3}>
              <Link to="/naac/best-practices" className="group flex flex-col bg-card border border-border rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs p-6 transition-all hover:shadow-lg hover:border-primary/50">
                <h3 className="font-bold text-lg md:text-xl font-oswald uppercase text-foreground mb-2 group-hover:text-primary transition-colors">
                  Best Practices
                </h3>
                <span className="text-sm text-primary flex items-center gap-1 font-bold">
                  View Guidelines <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Reveal>
            <Reveal variant="slide-up" delay={0.4}>
              <Link to="/naac/distinctiveness" className="group flex flex-col bg-card border border-border rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs p-6 transition-all hover:shadow-lg hover:border-primary/50">
                <h3 className="font-bold text-lg md:text-xl font-oswald uppercase text-foreground mb-2 group-hover:text-primary transition-colors">
                  Institutional Distinctiveness
                </h3>
                <span className="text-sm text-primary flex items-center gap-1 font-bold">
                  View Documents <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Reveal>
            <Reveal variant="slide-up" delay={0.5}>
              <Link to="/naac/code-of-conduct" className="group flex flex-col bg-card border border-border rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs p-6 transition-all hover:shadow-lg hover:border-primary/50">
                <h3 className="font-bold text-lg md:text-xl font-oswald uppercase text-foreground mb-2 group-hover:text-primary transition-colors">
                  Code of Conduct
                </h3>
                <span className="text-sm text-primary flex items-center gap-1 font-bold">
                  View Guidelines <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Reveal>
          </div>

          <Reveal>
            <h3 className="text-2xl font-bold font-oswald uppercase text-foreground mb-6">Additional Reports & Initiatives</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <a href="https://www.msajce-edu.in/uploads/naac/DisabledFriendlyCampus.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-card border border-border rounded-sm hover:border-primary/50 transition-colors group">
                <FileText className="text-primary w-5 h-5 shrink-0" />
                <span className="font-bold text-sm group-hover:text-primary transition-colors">Disabled Friendly Campus</span>
              </a>
              <a href="https://www.msajce-edu.in/uploads/naac/Environmentalpromotionalactivitiesbeyondthecampus.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-card border border-border rounded-sm hover:border-primary/50 transition-colors group">
                <FileText className="text-primary w-5 h-5 shrink-0" />
                <span className="font-bold text-sm group-hover:text-primary transition-colors">Environmental Promotional Activities</span>
              </a>
              <a href="https://www.msajce-edu.in/uploads/naac/AnnualReport20-21.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-4 bg-card border border-border rounded-sm hover:border-primary/50 transition-colors group">
                <FileText className="text-primary w-5 h-5 shrink-0" />
                <span className="font-bold text-sm group-hover:text-primary transition-colors">Annual Report (Latest)</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
