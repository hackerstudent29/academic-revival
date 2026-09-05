import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/motion";
import { FileText, Users, Info, ChevronRight, Download } from "lucide-react";
import iqacDocs from "@/data/iqac-documents.json";
import iqacMembers from "@/data/iqac-members.json";
import { useState } from "react";

export const Route = createFileRoute("/naac/iqac")({
  component: IQAC,
});

function IQAC() {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeYear, setActiveYear] = useState("2022-2023");

  const tabs = [
    { id: "overview", label: "Overview", icon: Info },
    { id: "members", label: "Members", icon: Users },
    { id: "documents", label: "Documents", icon: FileText },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F5] dark:bg-[#121214]">
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
      <section className="mx-auto max-w-[1440px] px-6 md:px-12 py-12 w-full flex-grow flex flex-col md:flex-row gap-8 lg:gap-12">
        {/* SIDEBAR TABS */}
        <div className="w-full md:w-64 shrink-0">
          <div className="sticky top-24 bg-card border border-border rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs p-2 shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center justify-between p-4 rounded-sm transition-all font-oswald uppercase tracking-wide font-bold text-sm md:text-base ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-foreground hover:bg-muted hover:text-primary"
                }`}
              >
                <div className="flex items-center gap-3">
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === tab.id ? "translate-x-1" : "opacity-0 -translate-x-2"}`} />
              </button>
            ))}
          </div>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 min-w-0">
          <Reveal key={activeTab} variant="blur">
            <div className="bg-card border border-border p-8 md:p-12 rounded-sm shadow-sm space-y-12">
              
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

              {/* DOCUMENTS TAB */}
              {activeTab === "documents" && (
                <div>
                  <h2 className="text-3xl font-black font-oswald uppercase text-foreground mb-6">IQAC Documents & Reports</h2>
                  <p className="text-foreground/80 mb-8 font-sans">
                    Browse our comprehensive repository of AQAR reports, Meeting Minutes, Feedback forms, and various audits.
                  </p>
                  
                  {iqacDocs && iqacDocs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {iqacDocs.map((doc, idx) => (
                        <a 
                          key={idx} 
                          href={doc.url.startsWith('http') ? doc.url : `https://www.msajce-edu.in/${doc.url}`} 
                          target="_blank" 
                          rel="noreferrer"
                          className="group flex flex-row items-center bg-background border border-border rounded-sm p-4 transition-all hover:shadow-md hover:border-primary/50 gap-3"
                        >
                          <div className="w-10 h-10 shrink-0 bg-primary/10 text-primary rounded-sm flex items-center justify-center">
                            <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                              {doc.title}
                            </h3>
                          </div>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-background border border-border p-12 text-center rounded-sm">
                      <p className="text-muted-foreground font-sans">Documents are currently being compiled.</p>
                    </div>
                  )}
                </div>
              )}
              
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
