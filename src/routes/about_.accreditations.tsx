import React, { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/motion";
import { Award, CheckCircle2, ShieldCheck, TrendingUp, BarChart } from "lucide-react";

const title = "Accreditation & Rankings — M.S.A.J. College of Engineering";
const description =
  "Explore the accreditations, quality assurance initiatives, and national rankings of Mohamed Sathak A.J. College of Engineering (MSAJCE).";

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
      "The NAAC functions through its General Council (GC) and Executive Committee (EC) comprising educational administrators, policy makers and senior academicians from a cross-section of Indian higher education system. The Chairperson of the UGC is the President of the GC of the NAAC, the Chairperson of the EC is an eminent academician nominated by the President of GC (NAAC). The Director is the academic and administrative head of NAAC and is the member secretary of both the GC and the EC. In addition to the statutory bodies that steer its policies and core staff to support its activities NAAC is advised by the advisory and consultative committees constituted from time to time.",
    ],
    highlights: [
      "Rigorous quality assessment of educational processes",
      "Continuous improvement in teaching-learning methodologies",
      "Focus on research, innovation, and extension activities",
      "Emphasis on student support and progression",
    ],
  },
  {
    id: "iqac",
    title: "IQAC",
    fullName: "Internal Quality Assurance Cell",
    icon: ShieldCheck,
    description:
      "As per National Assessment and Accreditation Council (NAAC) guidelines, every accredited institution should establish an Internal Quality Assurance Cell (IQAC) as a post-accreditation quality sustenance measure. Since quality enhancement is a continuous process, the IQAC at MSAJCE becomes a part of the institution's system and works towards realization of the goals of quality enhancement and sustenance.",
    highlights: [
      "Development and application of quality benchmarks",
      "Facilitating learner-centric environment conducive to quality education",
      "Arrangement for feedback response from students, parents and other stakeholders",
      "Organization of inter and intra institutional workshops, seminars on quality related themes",
    ],
  },
  {
    id: "nirf",
    title: "NIRF",
    fullName: "National Institutional Ranking Framework",
    icon: BarChart,
    description:
      "The National Institutional Ranking Framework (NIRF) was approved by the MHRD and outlines a methodology to rank institutions across the country. MSAJCE actively participates in the NIRF ranking process, reflecting our commitment to excellence in teaching, learning, and resources.",
    highlights: [
      "Teaching, Learning & Resources (TLR)",
      "Research and Professional Practice (RP)",
      "Graduation Outcomes (GO)",
      "Outreach and Inclusivity (OI) & Peer Perception",
    ],
  },
  {
    id: "ariia",
    title: "ARIIA",
    fullName: "Atal Ranking of Institutions on Innovation Achievements",
    icon: TrendingUp,
    description:
      "ARIIA is an initiative of Ministry of Education (MoE), Govt. of India to systematically rank all major higher educational institutions and universities in India on indicators related to 'Innovation and Entrepreneurship Development' amongst students and faculties.",
    highlights: [
      "Programs and Activities on IPR, Innovation, Start-up and Entrepreneurship",
      "Pre Incubation & Incubation Infrastructure & Facilities",
      "Annual Budget Spent on Innovation & Entrepreneurial Activities",
      "Successful Innovation and Start-ups Generated from HEI",
    ],
  },
];

export function AccreditationsPage() {
  const [activeTab, setActiveTab] = useState(accreditationsData[0]!.id);

  useEffect(() => {
    // Read the hash on mount
    const hash = window.location.hash.replace("#", "");
    if (hash && accreditationsData.some((a) => a.id === hash)) {
      setActiveTab(hash);
    }

    // Listen for hash changes if navigating from external link or same page
    const handleHashChange = () => {
      const newHash = window.location.hash.replace("#", "");
      if (newHash && accreditationsData.some((a) => a.id === newHash)) {
        setActiveTab(newHash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const activeData = (accreditationsData.find((a) => a.id === activeTab) || accreditationsData[0])!;
  const Icon = activeData.icon;

  return (
    <main className="bg-white dark:bg-[#121214] text-foreground min-h-screen font-libre antialiased pt-0 md:pt-1 transition-colors">
      {/* Integrated Header & Tabs */}
      <section className="relative border-b border-border bg-white dark:bg-[#121214] pt-4 md:pt-6 transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-12">
          <div className="flex flex-col mb-4 sm:mb-6">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground font-oswald">
              Accreditation &amp; Rankings
            </h1>
          </div>

          {/* Sub Heading Tabs */}
          <div className="flex items-center gap-5 sm:gap-8 md:gap-12 overflow-x-auto scrollbar-none">
            {accreditationsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  window.history.pushState(null, "", `#${tab.id}`);
                }}
                className={`text-xs sm:text-sm md:text-base font-black uppercase tracking-wider font-oswald transition-all whitespace-nowrap pb-3 sm:pb-4 border-b-[3px] cursor-pointer min-h-[44px] flex items-center ${
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
      <section className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-16">
        <Reveal key={activeData.id} variant="rise">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start min-h-[450px]">
            {/* Left Column: Title, Icon, and Image */}
            <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8">
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shadow-2xs">
                  <Icon size={28} className="sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                    {activeData.title}
                  </h2>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-muted-foreground mt-1.5 sm:mt-2 block font-mono">
                    {activeData.fullName}
                  </span>
                </div>
              </div>

              {/* Photo Section (Signature Asymmetric Corners) */}
              <div className="relative w-full aspect-[4/3] rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs overflow-hidden border border-border shadow-md hidden md:block bg-muted">
                <img
                  src="/images/accreditations_campus.jpg"
                  alt="MSAJCE Campus"
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </div>
            </div>

            {/* Right Column: Content Area (No Cards, Clean Editorial Layout) */}
            <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8 pt-1">
              <div className="pl-4 sm:pl-6 border-l-[3px] border-primary space-y-4 sm:space-y-5">
                {Array.isArray(activeData.description) ? (
                  activeData.description.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                    {activeData.description}
                  </p>
                )}
              </div>

              {/* Clean Editorial List (Zero Cards Rule Compliant) */}
              <div className="divide-y divide-border/40 border-y border-border/40 mt-2 sm:mt-4">
                {activeData.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 py-3 sm:py-3.5 px-1.5 sm:px-2 hover:bg-primary/[0.02] transition-colors"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-foreground font-medium font-libre leading-relaxed">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mobile Photo Section (Signature Asymmetric Corners) */}
              <div className="relative w-full aspect-[4/3] rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs overflow-hidden border border-border shadow-md block md:hidden mt-4 bg-muted">
                <img
                  src="/images/accreditations_campus.jpg"
                  alt="MSAJCE Campus"
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
