import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowRight, FileText, Download, ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/motion";
import { SecondarySubNav } from "@/components/layout/SecondarySubNav";

import naacData from "@/data/naac.json";
import naacDocs from "@/data/naac-documents.json";
import cocData from "@/data/code-of-conduct.json";

export const Route = createFileRoute("/naac/")({
  component: NaacPortal,
});

function NaacPortal() {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeCriterion, setActiveCriterion] = useState<string | null>(null);
  const [cocActiveCategory, setCocActiveCategory] = useState(Object.keys(cocData)[0]);

  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "criteria", label: "Criteria 1–7" },
    { id: "dvv", label: "DVV Clarification" },
    { id: "extended-profile", label: "Extended Profile" },
    { id: "best-practices", label: "Best Practices" },
    { id: "distinctiveness", label: "Institutional Distinctiveness" },
    { id: "code-of-conduct", label: "Code of Conduct" },
  ];

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setActiveCriterion(null); // Reset detail view when switching tabs
    
    // Auto-scroll to content immediately
    setTimeout(() => {
      const contentContainer = document.getElementById('naac-tab-content');
      if (contentContainer) {
        const yOffset = -110; 
        const y = contentContainer.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 50);
  };
  
  // Make sure we scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mainCriteria = naacData.criteria.slice(0, 7);

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F5] dark:bg-[#121214]">
      
      {/* Secondary Sub Navigation */}
      <SecondarySubNav
        title="NAAC"
        tabs={navItems}
        activeTab={activeTab}
        onSelectTab={handleTabChange}
      />
      
      {/* HERO SECTION */}
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

      {/* CONTENT SECTION */}
      <div id="naac-tab-content" className="w-full">
        
        {/* OVERVIEW TAB */}
        {activeTab === "overview" && (
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
        )}

        {/* CRITERIA TAB */}
        {activeTab === "criteria" && (
          <section className="mx-auto max-w-[1440px] px-6 md:px-12 py-16 md:py-24 w-full">
            {!activeCriterion ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {mainCriteria.map((criterion, idx) => (
                  <button 
                    key={criterion.id}
                    onClick={() => {
                      setActiveCriterion(criterion.id);
                      const contentContainer = document.getElementById('naac-tab-content');
                      if (contentContainer) {
                        const yOffset = -110; 
                        const y = contentContainer.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }
                    }}
                    className="group flex flex-col justify-between bg-card border border-border rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs p-6 hover:shadow-lg hover:border-primary/50 transition-all hover:-translate-y-1 h-full text-left"
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
                    
                    <div className="mt-8 flex items-center justify-between border-t border-border pt-4 w-full">
                      <span className="text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors uppercase tracking-wide">
                        View Criteria
                      </span>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1" />
                    </div>
                  </button>
                ))}

              </div>
            ) : (
              // CRITERION DETAIL VIEW
              <div className="bg-card border border-border rounded-sm shadow-sm overflow-hidden">
                {(() => {
                  const criterion = naacData.criteria.find(c => c.id === activeCriterion);
                  if (!criterion) return null;

                  return (
                    <>
                      <div className="border-b border-border py-8 md:py-12 bg-muted/20">
                        <div className="px-6 md:px-12 w-full">
                          <button 
                            onClick={() => setActiveCriterion(null)} 
                            className="inline-flex items-center text-sm font-bold uppercase tracking-widest font-mono text-muted-foreground hover:text-primary transition-colors mb-8"
                          >
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Criteria
                          </button>
                          
                          <div className="flex items-start gap-6 md:gap-8">
                            <div className="hidden md:flex text-6xl md:text-8xl font-black font-oswald text-primary/20">
                              {criterion.number}
                            </div>
                            <div>
                              <h1 className="text-3xl md:text-5xl font-black font-oswald uppercase text-foreground mb-4 leading-tight">
                                {criterion.title}
                              </h1>
                              <div className="flex flex-wrap items-center gap-4 text-sm font-medium font-sans">
                                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-sm font-bold">
                                  Criterion {criterion.number}
                                </span>
                                <span className="border border-border bg-background px-4 py-2 rounded-sm">
                                  {criterion.score} Maximum Marks
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="px-6 md:px-12 py-12 md:py-16">
                        <div className="flex items-center gap-4 mb-12">
                          <div className="h-[2px] w-12 bg-primary"></div>
                          <h2 className="text-2xl md:text-3xl font-black font-oswald uppercase text-foreground">Metrics</h2>
                        </div>

                        <div className="space-y-6">
                          {criterion.metrics.map((metric, idx) => (
                            <div key={idx} className="bg-background border border-border p-6 md:p-8 rounded-sm hover:border-primary/50 transition-colors shadow-sm">
                              
                              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                                <div className="flex items-start gap-4">
                                  <span className="bg-primary/10 text-primary font-black font-oswald text-lg px-3 py-1 rounded-sm shrink-0">
                                    {metric.number}
                                  </span>
                                  <p className="text-base md:text-[17px] font-sans text-foreground leading-relaxed">
                                    {metric.description}
                                  </p>
                                </div>
                                {metric.score > 0 && (
                                  <span className="shrink-0 font-mono text-sm font-bold text-muted-foreground bg-muted border border-border px-3 py-1 rounded-sm">
                                    Score: {metric.score}
                                  </span>
                                )}
                              </div>

                              {metric.links.length > 0 && (
                                <div className="mt-6 pt-6 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-3">
                                  {metric.links.map((link, lIdx) => (
                                    <a 
                                      key={lIdx}
                                      href={link.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="group flex items-start gap-3 p-3 rounded-sm bg-card border border-border hover:border-primary transition-colors"
                                    >
                                      <FileText className="w-5 h-5 text-muted-foreground group-hover:text-primary shrink-0 transition-colors mt-0.5" />
                                      <span className="text-sm font-sans font-medium text-foreground group-hover:text-primary transition-colors flex-1 line-clamp-2">
                                        {link.title || "View Document"}
                                      </span>
                                      <Download className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
                                    </a>
                                  ))}
                                </div>
                              )}

                            </div>
                          ))}

                          {criterion.metrics.length === 0 && (
                            <div className="text-center py-12 text-muted-foreground font-sans bg-muted/30 border border-dashed border-border rounded-sm">
                              No metrics available for this criterion.
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>
            )}
          </section>
        )}

        {/* DVV CLARIFICATION TAB */}
        {activeTab === "dvv" && (
          <section className="mx-auto max-w-[1440px] px-6 md:px-12 py-16 md:py-24 w-full flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {naacDocs["DVV Clarification"].map((doc, idx) => (
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
          </section>
        )}

        {/* EXTENDED PROFILE TAB */}
        {activeTab === "extended-profile" && (
          <section className="mx-auto max-w-[1440px] px-6 md:px-12 py-16 md:py-24 w-full flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {naacDocs["DVV Extended Profile"].map((doc, idx) => (
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
          </section>
        )}

        {/* BEST PRACTICES TAB */}
        {activeTab === "best-practices" && (
          <section className="mx-auto max-w-[1440px] px-6 md:px-12 py-16 md:py-24 w-full flex-grow">
            <div className="space-y-12">
              {/* BEST PRACTICE 1 */}
              <div>
                <div className="flex flex-col gap-2 mb-6 border-b border-border pb-4">
                  <span className="text-primary font-bold uppercase tracking-wider text-sm">Best Practice - 1</span>
                  <h2 className="text-3xl font-black font-oswald uppercase text-foreground">Title: Technology Centres</h2>
                </div>
                
                <p className="text-foreground/80 mb-6 font-sans leading-relaxed text-justify">
                  Mohamed Sathak A.J. College of Engineering (MSAJCE) was established with the ambition to become an eminent institute for higher education and research through innovative teaching- learning and sustainable practices to meet the industrial and societal needs. To fulfil this vision, we provide holistic, multi-disciplinary skill-based education in the latest cutting edge technologies and also inculcate innovation and entrepreneurial abilities, so that the students are well groomed to face the challenges in the industry and the society through our technology centres.
                </p>
                <p className="text-foreground/80 mb-6 font-sans leading-relaxed text-justify">
                  To have a focussed and stress-free involvement of students both in academics and training, the activities are split into two separate sessions such as Forenoon – Academics only and Afternoon – Training & Practices, within the college regular working hours. MSAJCE encourages students towards research and innovation practices by involving them in various hackathons and consultancy works.
                </p>

                <div className="mt-8">
                  <h4 className="text-xl font-bold font-oswald uppercase text-primary mb-4">Objectives</h4>
                  <ul className="space-y-2 list-disc list-inside text-foreground/80 font-sans">
                    <li>To provide hands-on training through experiential learning</li>
                    <li>To enable them to get certification from appropriate training agencies in the cutting edge technologies</li>
                  </ul>
                </div>
                <div className="mt-8">
                  <h4 className="text-xl font-bold font-oswald uppercase text-primary mb-4">Context</h4>
                  <ul className="space-y-2 list-disc list-inside text-foreground/80 font-sans">
                    <li>To make the students deployable, they are trained in multi-disciplinary skills apart from their core domain through our technology centres within regular college hours as per their interest</li>
                    <li>The students appearing for placement selection were earlier found to lag in skills required and expected by the employer in their domain</li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h4 className="text-xl font-bold font-oswald uppercase text-primary mb-4">Practice</h4>
                  <ul className="space-y-2 list-disc list-inside text-foreground/80 font-sans">
                    <li>All students are given training as per the schedule prepared at the beginning of the academic year</li>
                    <li>All these trainings are given in the afternoon sessions without affecting the regular academic schedule</li>
                    <li>Trainers are our own faculty members who had already been certified by different certification agencies and hence freely accessible to students at any time</li>
                    <li>Students are free to choose courses of their wish apart from the one given in the training schedule at the beginning</li>
                    <li>All these centres will be kept open beyond college working hours and hence they can learn as per their interest</li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h4 className="text-xl font-bold font-oswald uppercase text-primary mb-4">Evidence of Success</h4>
                  <ul className="space-y-2 list-disc list-inside text-foreground/80 font-sans">
                    <li>The students are certified by different agencies like CISCO, Altair, and Automation anywhere etc.</li>
                    <li>They are now found to be not only employable but also deployable directly into the job by the recruited companies</li>
                    <li>They found to have learned through hands on experience and hence they will acquire the lifelong learning skills</li>
                    <li>Students are found to have developed knowledge not only in cognitive domain but also in the psychomotor domain also, because they undergo experiential learning</li>
                    <li>Some of these courses are included as audit courses under Anna University (affiliating university) and the course name will be included in their mark sheets</li>
                    <li>The syllabus contents of two such courses taught at our technology centres have been recognised by Anna University and the syllabus set by us will be followed by other affiliating colleges</li>
                  </ul>
                </div>
              </div>

              {/* BEST PRACTICE 2 */}
              <div className="pt-12 border-t border-border">
                <div className="flex flex-col gap-2 mb-6 border-b border-border pb-4">
                  <span className="text-primary font-bold uppercase tracking-wider text-sm">Best Practice - 2</span>
                  <h2 className="text-3xl font-black font-oswald uppercase text-foreground">Title: Afternoon Laboratory Classes</h2>
                </div>

                <div className="mt-8">
                  <h4 className="text-xl font-bold font-oswald uppercase text-primary mb-4">Objectives</h4>
                  <ul className="space-y-2 list-disc list-inside text-foreground/80 font-sans">
                    <li>To become an eminent institute for higher education through innovative teaching- learning and sustainable practices to meet the industrial and societal needs by offering all practical courses in the afternoon session to learn by experience</li>
                    <li>To provide problem solving and critical thinking skills and inculcate innovation and entrepreneurial abilities, so that the students are well groomed to face the challenges in the industry and the society</li>
                  </ul>
                </div>
                <div className="mt-8">
                  <h4 className="text-xl font-bold font-oswald uppercase text-primary mb-4">Context</h4>
                  <ul className="space-y-2 list-disc list-inside text-foreground/80 font-sans">
                    <li>If practical courses are offered in between theory courses, students may feel fatigued and may not be able to concentrate on theory classes</li>
                    <li>To teach content beyond the syllabus theory classes may not be sufficient, but these afternoon sessions will be utilised for this purpose</li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h4 className="text-xl font-bold font-oswald uppercase text-primary mb-4">Practice</h4>
                  <ul className="space-y-2 list-disc list-inside text-foreground/80 font-sans">
                    <li>All the laboratory classes are scheduled only in the afternoon while preparing the time-table</li>
                    <li>The experts from industries are invited in the afternoon sessions to talk about practices followed in industry so that students are aware of the practices in industry</li>
                    <li>New technologies which are not covered in the regular syllabus are taught in these afternoon sessions</li>
                    <li>Students will have freedom to listen to MOOC lectures at library in the afternoon session</li>
                    <li>Most of Institution’s Innovation Council activities are conducted in the afternoon</li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h4 className="text-xl font-bold font-oswald uppercase text-primary mb-4">Evidence of Success</h4>
                  <ul className="space-y-2 list-disc list-inside text-foreground/80 font-sans">
                    <li>Students are getting involved in industry consultancy projects because they had gained practical knowledge expected by the industry</li>
                    <li>Students are getting certified by Coursera, Udemy and NPTEL etc.</li>
                    <li>Students had participated in many competitions and hackathons and had also secured mentoring support and funding</li>
                    <li>Students have designed and developed innovative products with the skills gained from these trainings</li>
                    <li>Some of these courses are included as audit courses under Anna University (affiliating university) and the course name will be included in their mark sheets</li>
                    <li>The syllabus contents of two such courses taught at our technology centres have been recognised by Anna University and the syllabus set by us will be followed by other affiliating colleges</li>
                  </ul>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-xl font-bold font-oswald uppercase text-primary mb-4">Problems Encountered & Resources Required</h4>
                  <ul className="space-y-2 list-disc list-inside text-foreground/80 font-sans">
                    <li>Difficulty arises in preparation of time table to accommodate all practical classes only in the afternoon</li>
                    <li>Accommodating all students for practical courses in one slot is a challenging task</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* DISTINCTIVENESS TAB */}
        {activeTab === "distinctiveness" && (
          <section className="mx-auto max-w-[1440px] px-6 md:px-12 py-16 md:py-24 w-full flex-grow">
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
          </section>
        )}

        {/* CODE OF CONDUCT TAB */}
        {activeTab === "code-of-conduct" && (
          <section className="mx-auto max-w-[1440px] px-6 md:px-12 py-16 md:py-24 w-full flex-grow">
            <div className="space-y-12">
              <p className="text-foreground/80 mb-8 font-sans leading-relaxed text-justify">
                This code of conduct specifies the responsibilities expected from each employee in carrying out their day-to-day duties as well as general ethical and moral behaviors. Employees must adhere to this code of conduct with utmost integrity. This code serves as a reference and guideline for all employees whether full-time, part-time or contract basis. Employees must work with public authorities established by the law and uphold our country’s constitution. Employees must strive to attain institutions goals.
              </p>

              <div className="flex flex-wrap gap-2 mb-8 border-b border-border pb-4">
                {Object.keys(cocData).map((category, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCocActiveCategory(category)}
                    className={`px-6 py-2.5 font-oswald font-bold uppercase tracking-wider text-sm md:text-base rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs transition-all ${
                      cocActiveCategory === category 
                        ? "bg-primary text-primary-foreground shadow-md" 
                        : "bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h3 className="text-2xl font-black font-oswald uppercase text-primary mb-6 border-b-2 border-primary/20 pb-2 inline-block">
                  For {cocActiveCategory}
                </h3>
                <ul className="space-y-4">
                  {cocData[cocActiveCategory as keyof typeof cocData]?.map((rule, idx) => (
                    <li key={idx} className="flex gap-4 items-start">
                      <div className="mt-1 shrink-0 w-6 h-6 rounded-sm bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                        {idx + 1}
                      </div>
                      <p className="text-foreground font-sans leading-relaxed">
                        {rule}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
