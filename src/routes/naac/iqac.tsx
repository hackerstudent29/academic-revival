import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/motion";
import { FileText, Users, Info, ChevronRight, Download } from "lucide-react";
import iqacMembers from "@/data/iqac-members.json";
import { useState } from "react";
import { motion } from "framer-motion";
import { useHeader } from "@/context/HeaderContext";

export const Route = createFileRoute("/naac/iqac")({
  component: IQAC,
});

function IQAC() {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeYear, setActiveYear] = useState("2022-2023");

  const tabs = [
    { id: "overview", label: "Overview", icon: Info },
    { id: "members", label: "Members", icon: Users },
    { id: "aqar-report", label: "AQAR Report", icon: FileText },
    { id: "minutes", label: "Minutes of Meeting", icon: FileText },
    { id: "feedback", label: "Feedback Forms", icon: FileText },
  ];

  const { isHeaderHidden, isScrolled } = useHeader();
  const shouldShiftDown = !isHeaderHidden && isScrolled;
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const shiftAmount = isMobile ? 57 : 65;

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F5] dark:bg-[#121214]">
      {/* SECONDARY HORIZONTAL NAV */}
      <motion.div
        initial={false}
        animate={{ y: shouldShiftDown ? shiftAmount : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-xl border-b border-foreground/10 shadow-sm"
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 h-14 flex items-center overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-6 md:gap-8 min-w-max">
            <span className="font-oswald font-black text-primary tracking-wider uppercase text-sm md:text-base border-r-[3px] border-primary/20 pr-6 mr-2 transition-opacity">
              IQAC
            </span>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-xs md:text-sm font-oswald uppercase tracking-wider whitespace-nowrap transition-colors hover:text-primary ${
                  activeTab === tab.id ? "text-primary font-black" : "text-foreground/80 font-bold"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
      {/* HEADER SECTION */}
      <section className="relative pt-12 pb-8 bg-background border-b border-border">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 w-full">
          <Reveal>
            <div className="flex flex-col max-w-4xl">
              <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2">Quality Assurance</span>
              <h1 className="text-4xl md:text-6xl font-black font-oswald uppercase text-foreground">IQAC</h1>
              <p className="mt-4 text-muted-foreground font-sans text-base md:text-lg max-w-2xl">
                Internal Quality Assurance Cell
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-12 py-12 w-full flex-grow flex flex-col gap-8 lg:gap-12">
        {/* MAIN CONTENT AREA */}
        <div className="w-full">
          <Reveal key={activeTab} variant="blur">
            <div className="space-y-12">
              
              {/* OVERVIEW TAB */}
              {activeTab === "overview" && (
                <div className="space-y-12">
                  <div>
                    <h2 className="text-3xl font-black font-oswald uppercase text-foreground mb-6">Overview</h2>
                    <p className="text-foreground/80 mb-6 font-sans leading-relaxed text-justify">
                      In pursuance of the National Action Plan of the National Assessment and Accreditation Council (NAAC), Bangalore, for performance evaluation, assessment and accreditation and quality up gradation of institutions of higher education, the NAAC proposes that every accredited institution should establish an Internal Quality Assurance Cell (IQAC) as a post-accreditation quality sustenance measure. Since quality enhancement is a continuous process, the IQAC will become a part of an institution’s system and work towards realizing the goals of quality enhancement and sustenance. The prime task of the IQAC is to develop a system for conscious, consistent and catalytic improvement in the performance of institutions. The IQAC will make a significant and meaningful contribution in the post-accreditation phase of institutions. During the post-accreditation period, the IQAC will channelise the efforts and measures of an institution towards academic excellence.
                    </p>
                    <p className="text-foreground/80 mb-6 font-sans leading-relaxed text-justify">
                      The guidelines provided will facilitate the institution in the creation and operation of the Internal Quality Assurance Cell (IQAC). The work of the IQAC is the first step towards the internalization and institutionalization of quality enhancement. Its success depends upon the sense of belongingness and participation it can inculcate in all the constituents of the institution. It will not be yet another hierarchical structure or recordkeeping exercise in the institution; it will be a facilitative and participative voluntary system/unit/organ of the institution. The IQAC has the potential to become a vehicle for ushering in quality by working out intervention strategies to remove deficiencies and enhance quality. Quality circles in industries operate on similar lines.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-2xl font-black font-oswald uppercase text-primary mb-6">Objective of IQAC</h2>
                    <ul className="space-y-3 list-disc list-inside text-foreground/80 font-sans">
                      <li>To develop a system for conscious, consistent and catalytic action to improve the acedemic and administrative performance of the Institution.</li>
                      <li>To promote measures for the institutional functioning towards quality enhancement through internalization of quality culture and institutionalization of best practices.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-black font-oswald uppercase text-primary mb-6">Strategies</h2>
                    <p className="font-bold text-foreground mb-4">IQAC shall evolve mechanisms and procedures for:</p>
                    <ul className="space-y-3 list-disc list-inside text-foreground/80 font-sans">
                      <li>Ensuring timely, efficient and progressive performance of academic, administrative and financial tasks</li>
                      <li>The relevance and quality of academic and research programmes</li>
                      <li>Equitable access to and affordability of academic programmes for various sections of society</li>
                      <li>Optimization and integration of modern methods of teaching and learning</li>
                      <li>The credibility of evaluation procedures</li>
                      <li>Ensuring the adequacy, maintenance and functioning of the support structure and services</li>
                      <li>Research sharing and networking with other institutions in India and abroad.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-black font-oswald uppercase text-primary mb-6">Functions</h2>
                    <ul className="space-y-3 list-disc list-inside text-foreground/80 font-sans">
                      <li>Development and application of quality benchmarks/parameters for the various academic and administrative activities of the institution</li>
                      <li>Dissemination of information on the various quality parameters of higher education</li>
                      <li>Organization of workshops, seminars on quality related themes and promotion of quality circles</li>
                      <li>Documentation of the various programmes / activities leading to quality improvement</li>
                      <li>Acting as a nodal agency of the institution for quality-related activities</li>
                      <li>Preparation of the Annual Quality Assurance Report (AQAR) to be submitted to NAAC based on the quality parameters.</li>
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-black font-oswald uppercase text-primary mb-6">Benefits</h2>
                    <p className="font-bold text-foreground mb-4">IQAC will facilitate / contribute:</p>
                    <ul className="space-y-3 list-disc list-inside text-foreground/80 font-sans">
                      <li>To a heightened level of clarity and focus in institutional functioning towards quality enhancement and facilitate internalization of the quality culture NAAC for Quality and Excellence in Higher Education</li>
                      <li>To the enhancement and integration among the various activities of the institution and institutionalize many good practices</li>
                      <li>To provide a sound basis for decision making to improve institutional functioning</li>
                      <li>To act as a change agent in the institution</li>
                      <li>To better internal communication.</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* MEMBERS TAB */}
              {activeTab === "members" && (
                <div>
                  <h2 className="text-3xl font-black font-oswald uppercase text-foreground mb-6">IQAC Members</h2>
                  
                  {/* Year Selection */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {Object.keys(iqacMembers).map((year) => (
                      <button
                        key={year}
                        onClick={() => setActiveYear(year)}
                        className={`px-6 py-2 rounded-sm font-oswald font-bold uppercase tracking-wider text-sm transition-colors border ${
                          activeYear === year 
                            ? "bg-primary text-primary-foreground border-primary" 
                            : "bg-background text-foreground hover:bg-muted border-border"
                        }`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>

                  {/* Members Table */}
                  <div className="overflow-x-auto rounded-sm border border-border">
                    <table className="w-full text-left font-sans text-sm md:text-base">
                      <thead className="bg-primary text-primary-foreground font-oswald uppercase tracking-wider text-sm">
                        <tr>
                          <th className="p-4 font-bold">Name</th>
                          <th className="p-4 font-bold">Designation</th>
                          <th className="p-4 font-bold">Composition As Per NAAC</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {iqacMembers[activeYear as keyof typeof iqacMembers].map((member, idx) => (
                          <tr key={idx} className="hover:bg-muted/50 transition-colors">
                            <td className="p-4 text-foreground">{member.Name}</td>
                            <td className="p-4 text-muted-foreground">{member.Designation}</td>
                            <td className="p-4 text-muted-foreground">{member.Composition}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* AQAR REPORT TAB */}
              {activeTab === "aqar-report" && (
                <div>
                  <h2 className="text-3xl font-black font-oswald uppercase text-foreground mb-6">AQAR Report</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <a 
                      href="https://www.msajce-edu.in/uploads/naac/AQAR-PDF-2022-23.pdf" 
                      target="_blank" 
                      rel="noreferrer"
                      className="group flex flex-col items-center bg-card border border-border rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs p-8 transition-all hover:shadow-md hover:-translate-y-1 hover:border-primary/50 text-center gap-4"
                    >
                      <div className="w-16 h-16 shrink-0 bg-primary/10 text-primary rounded-sm flex items-center justify-center mb-2">
                        <FileText className="w-8 h-8 group-hover:scale-110 transition-transform" />
                      </div>
                      <h3 className="font-bold text-lg font-oswald uppercase text-foreground group-hover:text-primary transition-colors">
                        AQAR 2022-2023
                      </h3>
                      <span className="text-sm font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Report <ChevronRight className="w-4 h-4" />
                      </span>
                    </a>
                  </div>
                </div>
              )}

              {/* MINUTES TAB */}
              {activeTab === "minutes" && (
                <div>
                  <h2 className="text-3xl font-black font-oswald uppercase text-foreground mb-6">Minutes of Meeting</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <a 
                      href="https://www.msajce-edu.in/uploads/iqac/IQAC-MoM-2023-2024.pdf" 
                      target="_blank" 
                      rel="noreferrer"
                      className="group flex flex-col items-center bg-background border border-border rounded-sm p-8 transition-all hover:shadow-md hover:border-primary text-center gap-4"
                    >
                      <div className="w-16 h-16 shrink-0 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-2">
                        <Users className="w-8 h-8 group-hover:scale-110 transition-transform" />
                      </div>
                      <h3 className="font-bold text-lg font-oswald uppercase text-foreground group-hover:text-primary transition-colors">
                        2023 - 2024
                      </h3>
                      <span className="text-sm font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Minutes <ChevronRight className="w-4 h-4" />
                      </span>
                    </a>
                  </div>
                </div>
              )}

              {/* FEEDBACK TAB */}
              {activeTab === "feedback" && (
                <div>
                  <h2 className="text-3xl font-black font-oswald uppercase text-foreground mb-6">Stake Holders Feedback Forms</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {[
                      { title: "Students Feedback", url: "https://forms.gle/oxdZFbPsBTFKDKTY8" },
                      { title: "Faculty Feedback", url: "https://docs.google.com/forms/d/13Q9AcCiqDfGdk2mrWn_11ozXoC7ROxrwcLkYEy2C8QA/edit?ts=6630864f&pli=1" },
                      { title: "Alumni Feedback", url: "https://docs.google.com/forms/d/1oTQjEnbQnbRnBAct8-N-zG-Wk4I69v0R5s2H31KUr_8/edit?ts=6630866d" },
                      { title: "Employer Feedback", url: "https://docs.google.com/forms/d/1Xj_FHninA55U6DWlWVvTzKl6wQdXOoUCr2-VjhufM7c/edit?ts=66308691" },
                    ].map((item, idx) => (
                      <a 
                        key={idx} 
                        href={item.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="group flex flex-row items-center bg-card border border-border rounded-sm p-4 transition-all hover:shadow-sm hover:border-primary/50 gap-4"
                      >
                        <div className="w-12 h-12 shrink-0 bg-primary/10 text-primary rounded-sm flex items-center justify-center">
                          <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold font-oswald text-lg uppercase tracking-wide text-foreground group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors group-hover:translate-x-1" />
                      </a>
                    ))}
                  </div>

                  <h3 className="text-2xl font-black font-oswald uppercase text-primary mb-6">Action Taken Reports</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a 
                      href="https://www.msajce-edu.in/uploads/aqar/2022/1.4.1/1.4.1ActiontakenReport.pdf" 
                      target="_blank" 
                      rel="noreferrer"
                      className="group flex flex-row items-center bg-card border border-border rounded-sm p-4 transition-all hover:shadow-sm hover:border-primary/50 gap-4"
                    >
                      <div className="w-12 h-12 shrink-0 bg-primary/10 text-primary rounded-sm flex items-center justify-center">
                        <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                          Action Taken Report (2022)
                        </h3>
                      </div>
                    </a>
                    <a 
                      href="http://msajce-edu.in/uploads/naac/1.4.2/Action.pdf" 
                      target="_blank" 
                      rel="noreferrer"
                      className="group flex flex-row items-center py-4 transition-all hover:translate-x-2 gap-4"
                    >
                      <div className="w-12 h-12 shrink-0 bg-primary/10 text-primary rounded-sm flex items-center justify-center">
                        <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                          Action Taken Report (Alternative)
                        </h3>
                      </div>
                    </a>
                  </div>
                </div>
              )}
              
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
