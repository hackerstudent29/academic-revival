import React, { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/motion";
import { Award, CheckCircle2, ShieldCheck, TrendingUp, BarChart } from "lucide-react";

const title = "Accreditation & Rankings — M.S.A.J. College of Engineering";
const description = "Explore the accreditations, quality assurance initiatives, and national rankings of Mohamed Sathak A.J. College of Engineering (MSAJCE).";

export const Route = createFileRoute("/about_/accreditations")({
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
  component: AccreditationsPage,
});

const accreditationsData = [
  {
    id: "naac",
    title: "NAAC",
    fullName: "National Assessment and Accreditation Council (NAAC)",
    icon: Award,
    description: [
      "India has one of the largest and diverse education systems in the world. Privatization, widespread expansion, increased autonomy and introduction of Programmes in new and emerging areas have improved access to higher education. At the same time, it has also led to widespread concern on the quality and relevance of the higher education. To address these concerns, the National Policy on Education (NPE, 1986) and the Programme of Action (PoA, 1992) spelt out strategic plans for the policies, advocated the establishment of an independent National accreditation agency. Consequently, the National Assessment and Accreditation Council (NAAC) was established in 1994 as an autonomous institution of the University Grants Commission (UGC) with its Head Quarter in Bengaluru. The mandate of NAAC as reflected in its vision statement is in making quality assurance an integral part of the functioning of Higher Education Institutions (HEIs).",
      "The NAAC functions through its General Council (GC) and Executive Committee (EC) comprising educational administrators, policy makers and senior academicians from a cross-section of Indian higher education system. The Chairperson of the UGC is the President of the GC of the NAAC, the Chairperson of the EC is an eminent academician nominated by the President of GC (NAAC). The Director is the academic and administrative head of NAAC and is the member secretary of both the GC and the EC. In addition to the statutory bodies that steer its policies and core staff to support its activities NAAC is advised by the advisory and consultative committees constituted from time to time."
    ],
    highlights: [
      "Rigorous quality assessment of educational processes",
      "Continuous improvement in teaching-learning methodologies",
      "Focus on research, innovation, and extension activities",
      "Emphasis on student support and progression"
    ]
  },
  {
    id: "iqac",
    title: "IQAC",
    fullName: "Internal Quality Assurance Cell",
    icon: ShieldCheck,
    description: "As per National Assessment and Accreditation Council (NAAC) guidelines, every accredited institution should establish an Internal Quality Assurance Cell (IQAC) as a post-accreditation quality sustenance measure. Since quality enhancement is a continuous process, the IQAC at MSAJCE becomes a part of the institution's system and works towards realization of the goals of quality enhancement and sustenance.",
    highlights: [
      "Development and application of quality benchmarks",
      "Facilitating learner-centric environment conducive to quality education",
      "Arrangement for feedback response from students, parents and other stakeholders",
      "Organization of inter and intra institutional workshops, seminars on quality related themes"
    ]
  },
  {
    id: "nirf",
    title: "NIRF",
    fullName: "National Institutional Ranking Framework",
    icon: BarChart,
    description: "The National Institutional Ranking Framework (NIRF) was approved by the MHRD and outlines a methodology to rank institutions across the country. MSAJCE actively participates in the NIRF ranking process, reflecting our commitment to excellence in teaching, learning, and resources.",
    highlights: [
      "Teaching, Learning & Resources (TLR)",
      "Research and Professional Practice (RP)",
      "Graduation Outcomes (GO)",
      "Outreach and Inclusivity (OI) & Peer Perception"
    ]
  },
  {
    id: "ariia",
    title: "ARIIA",
    fullName: "Atal Ranking of Institutions on Innovation Achievements",
    icon: TrendingUp,
    description: "ARIIA is an initiative of Ministry of Education (MoE), Govt. of India to systematically rank all major higher educational institutions and universities in India on indicators related to 'Innovation and Entrepreneurship Development' amongst students and faculties.",
    highlights: [
      "Programs and Activities on IPR, Innovation, Start-up and Entrepreneurship",
      "Pre Incubation & Incubation Infrastructure & Facilities",
      "Annual Budget Spent on Innovation & Entrepreneurial Activities",
      "Successful Innovation and Start-ups Generated from HEI"
    ]
  }
];

export function AccreditationsPage() {
  const [activeTab, setActiveTab] = useState(accreditationsData[0]!.id);

  useEffect(() => {
    // Read the hash on mount
    const hash = window.location.hash.replace('#', '');
    if (hash && accreditationsData.some(a => a.id === hash)) {
      setActiveTab(hash);
    }
    
    // Listen for hash changes if navigating from external link or same page
    const handleHashChange = () => {
      const newHash = window.location.hash.replace('#', '');
      if (newHash && accreditationsData.some(a => a.id === newHash)) {
        setActiveTab(newHash);
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const activeData = (accreditationsData.find(a => a.id === activeTab) || accreditationsData[0])!;
  const Icon = activeData.icon;

  return (
    <main className="bg-page-bg text-foreground min-h-screen pt-0 md:pt-1">
      {/* Integrated Header & Tabs */}
      <section className="relative border-b border-border bg-page-bg pt-4 md:pt-6">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          
          <div className="flex flex-col mb-6">
            <span className="text-sm sm:text-base md:text-lg xl:text-xl font-black font-oswald uppercase text-primary tracking-wider mb-2">
              ABOUT MSAJCE // QUALITY ASSURANCE
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground font-oswald">
              Accreditation & Rankings
            </h1>
          </div>

          {/* Sub Heading Tabs */}
          <div className="flex items-center gap-8 md:gap-12 overflow-x-auto scrollbar-none">
            {accreditationsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  window.history.pushState(null, '', `#${tab.id}`);
                }}
                className={`text-sm md:text-lg font-black uppercase tracking-wider font-oswald transition-all whitespace-nowrap pb-4 border-b-[3px] cursor-pointer ${
                  activeTab === tab.id
                    ? "text-primary border-primary"
                    : "text-muted-foreground border-transparent hover:text-foreground hover:border-border"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Main Content Sections */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-20">
        <Reveal key={activeData.id} variant="rise">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start min-h-[500px]">
            
            {/* Left Column: Title, Icon, and Image */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <div className="w-16 h-16 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs bg-primary/10 text-primary flex items-center justify-center mb-2">
                  <Icon size={32} />
                </div>
                <div>
                  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight font-oswald text-primary">
                    {activeData.title}
                  </h2>
                  <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground mt-2 block font-mono">
                    {activeData.fullName}
                  </span>
                </div>
              </div>
              
              {/* Photo Section */}
              <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden border border-border shadow-md hidden md:block">
                <img 
                  src="/images/accreditations_campus.jpg" 
                  alt="MSAJCE Campus" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column: Content Area */}
            <div className="lg:col-span-7 flex flex-col gap-8 pt-2">
              <div className="pl-6 border-l-[3px] border-primary space-y-5">
                {Array.isArray(activeData.description) ? (
                  activeData.description.map((paragraph, idx) => (
                    <p key={idx} className="text-base md:text-[17px] leading-relaxed text-foreground font-sans text-justify">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-base md:text-[17px] leading-relaxed text-foreground font-sans text-justify">
                    {activeData.description}
                  </p>
                )}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {activeData.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-5 border border-border bg-card rounded-sm shadow-xs transition-colors hover:border-primary/50">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-sm md:text-base text-foreground font-medium font-sans">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Mobile Photo Section */}
              <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden border border-border shadow-md block md:hidden mt-4">
                <img 
                  src="/images/accreditations_campus.jpg" 
                  alt="MSAJCE Campus" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </Reveal>
      </section>
    </main>
  );
}

