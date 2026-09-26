import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Plus } from "lucide-react";
import { SecondarySubNav } from "@/components/layout/SecondarySubNav";
import { DataGridContainer } from "@/components/ui/data-grid-table";
import { cn } from "@/lib/utils";

// Standard Apple/luxury cubic-bezier ease-out curve for buttery smooth animations
const smoothEase = [0.16, 1, 0.3, 1] as const;

const title = "Innovation & Incubation Cell — M.S.A.J. College of Engineering, Chennai";
const description =
  "Official Innovation & Incubation Ecosystem at Mohamed Sathak A.J. College of Engineering, featuring Sathak Innovation and Incubation Foundation (SIIF), NISP startup policy, EDC cell, and MoE Institution's Innovation Council (IIC).";

export const Route = createFileRoute("/incubation")({
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
  component: IncubationPage,
});

/* ========================================================================= */
/* TAB 1: SIIF — Sathak Innovation and Incubation Foundation                 */
/* ========================================================================= */
function SiifContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: smoothEase }}
      className="w-full"
    >
      {/* SECTION 1: Canvas A (White / #121214) — Overview & Objectives */}
      <section className="pt-8 sm:pt-12 md:pt-14 pb-8 sm:pb-12 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              OVERVIEW
            </h2>
          </div>

          {/* Rich Professional Institutional Overview Narrative */}
          <div className="w-full space-y-4 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
            <p className="w-full">
              The Sathak Innovation and Incubation Foundation (SIIF) serves as the flagship startup incubator at Mohamed Sathak A.J. College of Engineering. Founded to empower visionary student innovators, researchers, and faculty entrepreneurs, SIIF bridges the gap between academic research and commercial market success.
            </p>
            <p className="w-full">
              By offering state-of-the-art prototype development suites, dedicated seed funding pathways, and active mentorship from global technology leaders, the foundation cultivates a thriving culture of high-impact technology ventures across Chennai's OMR IT corridor.
            </p>
          </div>

          {/* Subheading for Foundation Objectives */}
          <div className="pt-4 border-t border-border/40 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
              FOUNDATION OBJECTIVES
            </h3>

            {/* Single Column Editorial List with Circular Badges */}
            <div className="space-y-3 sm:space-y-4">
              {/* Object A */}
              <div className="p-3.5 sm:p-4 flex items-start gap-3.5 sm:gap-4 hover:bg-foreground/[0.015] transition-colors">
                <span className="shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                  A
                </span>
                <div className="space-y-1 flex-1">
                  <h4 className="text-base sm:text-lg font-bold font-oswald uppercase tracking-tight text-foreground">
                    Prototype &amp; Product Incubation
                  </h4>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                    To promote commerce, science, education and research by helping, establishing and incubating startups, individuals, teams with innovative ideas to make prototypes and to convert them into Products.
                  </p>
                </div>
              </div>

              {/* Object B */}
              <div className="p-3.5 sm:p-4 flex items-start gap-3.5 sm:gap-4 hover:bg-foreground/[0.015] transition-colors">
                <span className="shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                  B
                </span>
                <div className="space-y-1 flex-1">
                  <h4 className="text-base sm:text-lg font-bold font-oswald uppercase tracking-tight text-foreground">
                    Cross-Disciplinary Innovation Culture
                  </h4>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                    To promote a culture of innovation driven entrepreneurship in the fields of science, engineering, technology, commerce, agriculture, health care, medicine, pharmacy, education, arts, sports and other various fields.
                  </p>
                </div>
              </div>

              {/* Object C */}
              <div className="p-3.5 sm:p-4 flex items-start gap-3.5 sm:gap-4 hover:bg-foreground/[0.015] transition-colors">
                <span className="shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                  C
                </span>
                <div className="space-y-1 flex-1">
                  <h4 className="text-base sm:text-lg font-bold font-oswald uppercase tracking-tight text-foreground">
                    Advanced Infrastructure &amp; Global Collaboration
                  </h4>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                    To establish, help establish and or manage infrastructure, laboratories, to make and test prototypes/products, pilot plant production facilities, software development facilities, training and human resource development centre, propogate new scientific and technologies development and innovation from idea stage to full scale commercial production or any part of this chain. For the above purposes to assist, co-operate or collaborates with any establishment, laboratory, technology business incubators centre, organisation or institution in India or abroad.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Two Images Showcase */}
          <div className="w-full pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <div className="relative rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs overflow-hidden shadow-md bg-muted aspect-[16/10] max-h-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop"
                  alt="MSAJCE Incubation Facility"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
                  }}
                />
              </div>
              <div className="relative rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs overflow-hidden shadow-md bg-muted aspect-[16/10] max-h-[300px]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                  alt="Student Innovation and Startup Ecosystem"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider A -> B */}
      <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-8 md:h-10 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-[#F3F3F2] dark:fill-[#18181B]"
          />
        </svg>
      </div>

      {/* SECTION 2: Canvas B (#F3F3F2 / #18181B) — Programs and Initiatives */}
      <section className="py-8 sm:py-12 md:py-14 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            PROGRAMS AND INITIATIVES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 lg:gap-8">
            {[
              {
                idx: "1",
                title: "Incubation Services",
                desc: "Typically include 5000 sqft. physical office space, several 100, 400, 700 seater halls for conducting events in Entrepreneurship, infrastructure, and shared resources for startups.",
              },
              {
                idx: "2",
                title: "Funding Opportunities",
                desc: "Funding opportunities to startups through grants, seed funding, or connections to potential investors.",
              },
              {
                idx: "3",
                title: "Mentorship Programs",
                desc: "Mentorship programs where experienced professionals and industry experts provide guidance and support to entrepreneurs and startups.",
              },
              {
                idx: "4",
                title: "Investor Network",
                desc: "Access to a network of investors, venture capitalists, and angel investors who are interested in supporting innovative ideas and startups.",
              },
              {
                idx: "5",
                title: "Events & Workshops",
                desc: "Organizes events, workshops, and training programs to foster innovation, entrepreneurial skills, and knowledge sharing.",
              },
              {
                idx: "6",
                title: "Strategic Partnerships",
                desc: "Facilitates partnerships with academic institutions, industry bodies, and government agencies to create synergies and opportunities for startups.",
              },
            ].map((item) => (
              <div
                key={item.idx}
                className="group space-y-2 p-3.5 sm:p-4 rounded-xl hover:bg-foreground/[0.02] transition-colors"
              >
                <div className="font-oswald font-black text-3xl sm:text-4xl text-primary/40 group-hover:text-primary transition-colors leading-none select-none">
                  {item.idx}
                </div>
                <h3 className="text-base sm:text-lg font-bold font-oswald uppercase text-foreground group-hover:text-primary transition-colors tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Divider B -> A */}
      <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-8 md:h-10 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-white dark:fill-[#121214]"
          />
        </svg>
      </div>

      {/* SECTION 3: Canvas A (White / #121214) — Incubation Lead */}
      <section className="py-8 sm:py-12 md:py-14 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            INCUBATION LEAD
          </h2>
          <div className="border-l-4 border-primary pl-4 sm:pl-6 space-y-3 py-1">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black font-oswald uppercase text-foreground tracking-tight">
                Akshita K
              </h3>
              <p className="text-sm sm:text-base text-primary font-bold font-oswald uppercase tracking-wider pt-0.5">
                Incubation Coordinator · SIIF
              </p>
            </div>
            <div className="text-sm sm:text-base text-foreground font-libre font-medium space-y-0.5">
              <p className="font-bold">Mohamed Sathak A.J. College of Engineering</p>
              <p className="text-foreground/80">Chennai - 603103</p>
            </div>
            <div className="pt-2">
              <a
                href="mailto:info@siif.ventures"
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-tl-lg rounded-br-lg rounded-tr-xs rounded-bl-xs bg-primary text-white hover:bg-primary/90 font-oswald font-bold uppercase text-xs sm:text-sm tracking-wider transition-all shadow-md"
              >
                <Mail className="w-4 h-4" />
                <span>info@siif.ventures</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

/* ========================================================================= */
/* TAB 2: NISP — National Innovation and Startup Policy                      */
/* ========================================================================= */
function NispContent() {
  const [openKpi, setOpenKpi] = useState<string | null>("vision");

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: smoothEase }}
      className="w-full"
    >
      {/* SECTION 1: Canvas A (White / #121214) — Overview & Vision/Mission */}
      <section className="pt-8 sm:pt-12 md:pt-14 pb-8 sm:pb-12 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              OVERVIEW
            </h2>
          </div>

          {/* Rich Professional Institutional Overview Narrative */}
          <div className="w-full space-y-4 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
            <p className="w-full">
              The National Innovation and Startup Policy (NISP) framework at Mohamed Sathak A.J. College of Engineering provides a structured roadmap for students and faculty to actively engage in technology commercialization, intellectual property creation, and startup founding. Built in strict alignment with Ministry of Education guidelines, NISP enables pre-incubation support, academic credit flexibility for startup work, and transparent licensing mechanisms.
            </p>
            <p className="w-full">
              Through robust institutional governance and cross-industry collaboration, NISP strengthens the national economic landscape by nurturing student enterprise, protecting patent ownership, and facilitating technology transfer from academic laboratories to global markets.
            </p>
          </div>

          {/* Subheading for Vision & Mission */}
          <div className="pt-4 border-t border-border/40 space-y-5 sm:space-y-6">
            {/* Vision */}
            <div className="space-y-2.5">
              <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                Vision
              </h3>
              <div className="p-3.5 sm:p-4 flex items-start gap-3.5 sm:gap-4 hover:bg-foreground/[0.015] transition-colors">
                <span className="shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                  V
                </span>
                <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed flex-1 pt-0.5 sm:pt-1">
                  To cater the needs of student entrepreneurs with innovative ideas thereby introducing a culture of entrepreneurship inside campus which will strengthen our education system and thereby promoting the national economic and social growth.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="space-y-2.5">
              <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                Mission
              </h3>
              <div className="p-3.5 sm:p-4 flex items-start gap-3.5 sm:gap-4 hover:bg-foreground/[0.015] transition-colors">
                <span className="shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                  M1
                </span>
                <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed flex-1 pt-0.5 sm:pt-1">
                  To develop an ecosystem with required infrastructure that can enable students and faculty to innovate and prototype their potential ideas with industrial standards and support from Government, industry and reputed academic institutions around the world and help them to realize their potentials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider A -> B */}
      <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-8 md:h-10 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-[#F3F3F2] dark:fill-[#18181B]"
          />
        </svg>
      </div>

      {/* SECTION 2: Canvas B (#F3F3F2 / #18181B) — Objectives */}
      <section className="py-8 sm:py-12 md:py-14 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-7 sm:space-y-8">
          {/* Short Term */}
          <div className="space-y-3.5">
            <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-primary">
              SHORT TERM OBJECTIVES
            </h3>
            <div className="space-y-1.5">
              {[
                "To help student groups to prototype their ideas.",
                "To improve innovation, creative and design thinking among student community.",
                "Incubation facility for faculty driven start-up and student/Alumni start-up.",
                "Organize FDP, seminars and workshops, distinguish talks for students, Faculty and Alumni and promote entrepreneurial culture.",
                "Strengthen institute industry interaction cell activity and effectively use the outcomes for achieving the mission.",
              ].map((obj, i) => (
                <div key={i} className="p-2.5 sm:p-3 flex gap-3.5 items-start hover:bg-foreground/[0.015] transition-colors">
                  <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-bold text-xs mt-0.5 border border-primary/20">
                    {i + 1}
                  </span>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed pt-0.5 sm:pt-1">
                    {obj}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Long Term */}
          <div className="space-y-3.5 pt-2">
            <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-primary">
              LONG TERM OBJECTIVES
            </h3>
            <div className="space-y-1.5">
              {[
                "Associate with DST, CII, MSME and other academic institutions for transferring world class facility for MSAJCE IEDC activities.",
                "Improve quality of research work among students and to attain patent, which can be commercially used in production.",
                "Provide a platform for students to develop innovative products with global recognition and generate business opportunities.",
                "Generate revenues through consultancy work and student start-ups.",
                "Spread awareness to students and faculty regarding IPR related activities.",
              ].map((obj, i) => (
                <div key={i} className="p-2.5 sm:p-3 flex gap-3.5 items-start hover:bg-foreground/[0.015] transition-colors">
                  <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-bold text-xs mt-0.5 border border-primary/20">
                    {i + 1}
                  </span>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed pt-0.5 sm:pt-1">
                    {obj}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider B -> A */}
      <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-8 md:h-10 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-white dark:fill-[#121214]"
          />
        </svg>
      </div>

      {/* SECTION 3: Canvas A (White / #121214) — Strategic Partnership & Thrust Areas */}
      <section className="py-8 sm:py-12 md:py-14 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-7 sm:space-y-8">
          {/* Strategic Partnership */}
          <div className="space-y-3.5">
            <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-primary">
              STRATEGIC PARTNERSHIP LINKAGE
            </h3>
            <div className="space-y-2 pt-1">
              {[
                "Entrepreneurship Development Institute of India (EDII), Chennai.",
                "National Innovation Foundation (NIF) of India to submit ideas and apply for schemes.",
                "Procure fund from AICTE for Entrepreneurship Development Cell.",
              ].map((linkage, idx) => (
                <div key={idx} className="p-2.5 sm:p-3 flex gap-3.5 items-center text-sm sm:text-base text-foreground font-libre font-medium hover:bg-foreground/[0.015] transition-colors">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
                  <span className="leading-relaxed">{linkage}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Thrust Areas Table */}
          <div className="space-y-3.5 pt-2">
            <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-primary">
              THRUST AREAS
            </h3>
            <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
              <div className="overflow-x-auto bg-transparent">
                <table className="w-full text-left border-collapse min-w-[580px] text-xs sm:text-sm">
                  <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                    <tr>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16 text-center">
                        S.No
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap">
                        Thrust Area &amp; Focus Plan
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40 font-libre">
                    {[
                      "To develop Strategies and governance for Promoting Innovation Entrepreneurship in the institute",
                      "Creating Innovation Pipeline and Pathways for Entrepreneurs and Startups.",
                      "Building Organizational Capacity, Human Resources and Incentive",
                      "Collaboration, Co-creation, Business Relationship and knowledge Exchange",
                      "Incubation & Pre-Incubation support at SIIF",
                      "IP Ownership Rights for Technologies Developed at MSAJCE and SIIF.",
                      "Pedagogy & Learning Interventions for Supporting Innovations & Start-ups",
                      "Entrepreneurial Performance Impact Assessment",
                    ].map((plan, idx) => (
                      <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                        <td className="px-4 py-3.5 font-oswald font-bold text-primary text-sm whitespace-nowrap text-center align-middle w-16">
                          {String(idx + 1).padStart(2, "0")}
                        </td>
                        <td className="px-4 py-3.5 font-libre font-medium text-xs sm:text-sm text-foreground align-middle leading-relaxed">
                          {plan}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DataGridContainer>
          </div>
        </div>
      </section>

      {/* Wave Divider A -> B */}
      <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-8 md:h-10 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-[#F3F3F2] dark:fill-[#18181B]"
          />
        </svg>
      </div>

      {/* SECTION 4: Canvas B (#F3F3F2 / #18181B) — Committee Members */}
      <section className="py-8 sm:py-12 md:py-14 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-4 sm:space-y-5">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            COMMITTEE MEMBERS
          </h3>
          <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
            <div className="overflow-x-auto bg-transparent">
              <table className="w-full text-left border-collapse min-w-[680px] text-xs sm:text-sm">
                <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                  <tr>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16 text-center">
                      S.No
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[180px]">
                      Name
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap">
                      Designation / Organization
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-44 text-right">
                      Position
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40 font-libre">
                  {[
                    { name: "Dr. K.S. Srinivasan", desig: "Principal, Mohamed Sathak A.J. College of Engineering (MSAJCE), Chennai", pos: "President" },
                    { name: "Mr. Prakadesh Subramanian", desig: "Strategic Partner, SIIF, Chennai", pos: "Incubation Coordinator" },
                    { name: "Mr. Parvez Aalam", desig: "CEO, Crescent Innovation Incubation Council, Chennai", pos: "Incubation Coordinator" },
                    { name: "Mr. Thiyagaraja Gupta", desig: "Deputy Controller of Patents and Designs", pos: "Patent Expert" },
                    { name: "Ahamed Jamel", desig: "AMT IT consultant, 4A technology", pos: "Alumni Entrepreneur" },
                    { name: "Abdur Rahim Salih", desig: "Director & CEO V5 Innovations Pvt,Ltd", pos: "Alumni Entrepreneur" },
                    { name: "Asim Ali. L", desig: "CMO, Customer Labs", pos: "Alumni Entrepreneur" },
                  ].map((member, idx) => (
                    <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                      <td className="px-4 py-3.5 font-oswald font-bold text-primary text-sm whitespace-nowrap text-center align-middle w-16">
                        {String(idx + 1).padStart(2, "0")}
                      </td>
                      <td className="px-4 py-3.5 font-libre font-bold text-foreground text-sm whitespace-nowrap align-middle">
                        {member.name}
                      </td>
                      <td className="px-4 py-3.5 font-libre font-medium text-xs sm:text-sm text-foreground align-middle">
                        {member.desig}
                      </td>
                      <td className="px-4 py-3.5 font-libre font-semibold text-xs sm:text-sm text-primary align-middle whitespace-nowrap text-right">
                        {member.pos}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </DataGridContainer>
        </div>
      </section>

      {/* Wave Divider B -> A */}
      <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-8 md:h-10 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-white dark:fill-[#121214]"
          />
        </svg>
      </div>

      {/* SECTION 5: Canvas A (White / #121214) — KPI Monitor & Evaluation */}
      <section className="py-8 sm:py-12 md:py-14 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-4 sm:space-y-5">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            KPI MONITOR &amp; EVALUATION
          </h3>

          <div className="w-full space-y-1.5">
            {[
              {
                id: "vision",
                title: "Vision",
                kpis: ["Increase in Self-Employment Rate", "5 Established Start-ups per year"],
                verification: ["NIRF Rankings"],
              },
              {
                id: "goal",
                title: "Goal",
                kpis: [
                  "Establish the Environment with multiple level of support for innovation & Entrepreneurship and startups.",
                  "Students will choose Entrepreneurship as career",
                ],
                verification: ["ARIIA Rankings"],
              },
              {
                id: "outcomes",
                title: "Outcomes",
                kpis: [
                  "All the student & faculty with entrepreneurship Orientation",
                  "Student & faculty motivated to start any entrepreneurial activity",
                  "5 IPR/Innovations developed ideas/year",
                  "5 Student/Early-Stage Start-ups to be formed/year.",
                  "In-house Expert Capacity facility available for Advisory Services",
                  "25% of Student & faculty mass exposed to awareness/orientation building programs",
                  "Students covered through entrepreneurship Education; MOOC, Class Room, Experiential Learning programs etc.",
                  "250 of beneficiaries are accessing the infrastructure & facilities per day, month & Year",
                  "25% innovators identified; 25 of awarded,/recognized; 25 of Supported",
                  "5% Student projects turn to (commercialize) Innovations",
                  "5 of IPR based product/services generated and registration filed",
                  "In-house trained professional developed for advisory services",
                  "5 of Research Studies on Entrepreneurship published",
                  "2 of Regional, National and International linkages established for the start-up & innovation",
                  "5% Representatives of experts & entrepreneurial students across Dept. & Disciplines.",
                  "5 of Beneficiaries Referred to Incubators/investors for further support through Start-up Cell",
                  "10 of Beneficiaries generated under various schemes and programs leveraged and converged at Start-up Cell",
                ],
                verification: ["Quarterly News Letter", "Biannual Survey", "Monthly progress report"],
              },
              {
                id: "activities",
                title: "Activities",
                kpis: [
                  "5 Education/Skill certification program on Entrepreneurship, IPR, Innovation etc.",
                  "25 of workshops, awareness, and market outreach events, orientation, advocacy meetings etc.",
                  "12 of networking event (Intra and Inter-institutional, enablers, stakeholders) organized",
                  "5 of skill and competency development training programs/FDPs/EDPs organized.",
                  "5 of research studies related to Entrepreneurship conducted",
                  "01 of national and regional award and campus Hackathon like events organized",
                  "Incentivizing Entrepreneurship and Innovation; services and facilities; Start-up Manual, policies, tool kits etc.",
                  "1% of total budget/year spend against total institution revenue for start-up",
                  "Budget allocation and Spend ratio for the start-up mandate in institute",
                ],
                verification: ["Biannual Survey", "Quarterly News Letter", "Monthly progress report", "Review Meetings"],
              },
            ].map((kpiItem) => {
              const isOpen = openKpi === kpiItem.id;
              return (
                <div key={kpiItem.id} className="overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenKpi(isOpen ? null : kpiItem.id)}
                    className="w-full flex items-center justify-between py-3 px-3.5 sm:px-4 rounded-xl hover:bg-foreground/[0.02] text-left transition-colors cursor-pointer group select-none"
                  >
                    <span className="text-base sm:text-lg font-bold font-oswald uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">
                      {kpiItem.title}
                    </span>
                    <span className="shrink-0 ml-4 flex items-center justify-center w-7 h-7 rounded-full bg-foreground/5 text-foreground/70 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                      <Plus
                        className={cn(
                          "w-4 h-4 transition-transform duration-300 ease-out",
                          isOpen && "rotate-45 text-primary"
                        )}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: smoothEase }}
                        className="overflow-hidden"
                      >
                        <div className="pt-2 pb-5 px-3.5 sm:px-4 text-sm sm:text-base font-libre text-foreground flex flex-col md:flex-row gap-6">
                          <div className="flex-1 space-y-2">
                            <h4 className="font-bold font-oswald uppercase text-primary">
                              Key Performance Indicators (KPIs)
                            </h4>
                            <ul className="list-disc pl-5 space-y-1.5 text-foreground/90">
                              {kpiItem.kpis.map((kpiText, ki) => (
                                <li key={ki} className="leading-relaxed">
                                  {kpiText}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="md:w-1/3 space-y-2">
                            <h4 className="font-bold font-oswald uppercase text-primary">
                              Means and Verification
                            </h4>
                            <ul className="list-disc pl-5 space-y-1 text-foreground/90">
                              {kpiItem.verification.map((vText, vi) => (
                                <li key={vi} className="leading-relaxed">
                                  {vText}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wave Divider A -> B */}
      <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-8 md:h-10 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-[#F3F3F2] dark:fill-[#18181B]"
          />
        </svg>
      </div>

      {/* SECTION 6: Canvas B (#F3F3F2 / #18181B) — Tentative Plan for Next 5 Years */}
      <section className="py-8 sm:py-12 md:py-14 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-4 sm:space-y-5">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            TENTATIVE PLAN FOR THE NEXT 5 YEARS
          </h3>
          <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
            <div className="overflow-x-auto bg-transparent">
              <table className="w-full text-left border-collapse min-w-[680px] text-xs sm:text-sm">
                <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                  <tr>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16 text-center">
                      S.No
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap">
                      Activity &amp; Focus Initiative
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-44 text-right">
                      Frequency
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40 font-libre">
                  {[
                    { act: "One Day Workshop on “Entrepreneurship and Innovation as Career Opportunity”", freq: "One per Year" },
                    { act: "One Day Workshop on Problem Solving/Design Thinking/Ideation Workshop/ Campus Hackathon etc", freq: "One per Year" },
                    { act: "Field/Exposure Visit to Village/Society /School/Industry/Market – Identity real Life Problem", freq: "One per Year" },
                    { act: "Special Talk on My Story - Entrepreneur’s Life & Crossroad – Motivational Speak - To be Share by Entrepreneurs", freq: "Two per year" },
                    { act: "Product Development Phases - Story Telling - (Innovators in Campus)", freq: "Two per year" },
                    { act: "National Conference/workshop on Start-up/Social Innovation & Entrepreneurship", freq: "One per Year" },
                    { act: "Demo Day – Exhibition Cum Demo for PoCs & Mentorship Session for Innovators (or) Student Entrepreneurs", freq: "Two per year" },
                    { act: "Internship at Innovation & Start-up Centre/Startups/Incubation Unit etc. during Semester Break", freq: "One per Year" },
                    { act: "Field/Exposure Visit to Incubation Unit/Patent Facilitation Centre/Technology Transfer Centre", freq: "One per Year" },
                    { act: "Business Plan Contest", freq: "One per Year" },
                    { act: "One Day Awareness/Mentoring Session on IPR & IP Management for Innovation and Start-ups", freq: "One per Year" },
                    { act: "Field/Exposure Visit to Design Centre/Makers’ Space/Fab Lab/Prototype Lab/Tinkering Lab etc.", freq: "One per Year" },
                    { act: "Seminar on Accelerator/Incubation - Opportunity for Student Faculty - Early-Stage Entrepreneurs", freq: "One per Year" },
                    { act: "Seminar on Understanding Angel and Venture Capital Funding - What is there for Early-Stage Innovator & Entrepreneurs", freq: "One per Year" },
                    { act: "Boot camp for Innovation product development", freq: "One per Year" },
                    { act: "Innovation Day Celebrations", freq: "One per Year" },
                    { act: "National Science Day", freq: "One per Year" },
                    { act: "Workshop Funding Opportunities for Innovation and Entrepreneurship Development", freq: "One per Year" },
                    { act: "SATHAKATHON-A National Level 24Hrs - Hackathon", freq: "One per Year" },
                    { act: "Short Term Training course on Innovation /Start-up & Entrepreneurship", freq: "One per Year" },
                  ].map((item, idx) => (
                    <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                      <td className="px-4 py-3.5 font-oswald font-bold text-primary text-sm whitespace-nowrap text-center align-middle w-16">
                        {String(idx + 1).padStart(2, "0")}
                      </td>
                      <td className="px-4 py-3.5 font-libre font-medium text-xs sm:text-sm text-foreground align-middle leading-relaxed">
                        {item.act}
                      </td>
                      <td className="px-4 py-3.5 font-libre font-semibold text-xs sm:text-sm text-primary align-middle whitespace-nowrap text-right">
                        {item.freq}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </DataGridContainer>
        </div>
      </section>
    </motion.div>
  );
}

/* ========================================================================= */
/* TAB 3: EDC — Entrepreneurship Development Cell                           */
/* ========================================================================= */
function EdcContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: smoothEase }}
      className="w-full"
    >
      {/* SECTION 1: Canvas A (White / #121214) — Overview & Roles/Responsibilities */}
      <section className="pt-8 sm:pt-12 md:pt-14 pb-8 sm:pb-12 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              OVERVIEW
            </h2>
          </div>

          {/* Rich Professional Institutional Overview Narrative */}
          <div className="w-full space-y-4 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
            <p className="w-full">
              The Entrepreneurship Development Cell (EDC) at Mohamed Sathak A.J. College of Engineering is dedicated to inspiring, nurturing, and guiding aspiring student entrepreneurs across all engineering branches. By organizing bootcamps, hackathons, leadership masterclasses, and direct interactions with successful founders, EDC instills business acumen and creative problem-solving capabilities.
            </p>
            <p className="w-full">
              The cell acts as a vital campus catalyst, encouraging students to transform engineering concepts into viable commercial products while building strong corporate linkages with industrial bodies, venture capitalists, and regional startup hubs.
            </p>
          </div>

          {/* Subheading for Roles & Responsibilities */}
          <div className="pt-4 border-t border-border/40 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
              ROLES AND RESPONSIBILITIES
            </h3>

            {/* Single Column Editorial List with Circular Badges */}
            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  num: "1",
                  title: "Entrepreneurship Programs & Engagement",
                  text: "Encourage the students to become entrepreneurs by organizing entrepreneurship development programs and make them to participate in the activities organized by the external agencies.",
                },
                {
                  num: "2",
                  title: "Startup Training & Mentorship",
                  text: "Organize the training for Startup / Incubator and arrange the mentoring to proceed further.",
                },
                {
                  num: "3",
                  title: "SIIF Strategic Coordination",
                  text: "Coordinate with Strategy partner of Sathak Innovation Incubation Cell (SIIF) and execute various Activity.",
                },
              ].map((role) => (
                <div key={role.num} className="p-3.5 sm:p-4 flex items-start gap-3.5 sm:gap-4 hover:bg-foreground/[0.015] transition-colors">
                  <span className="shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                    {role.num}
                  </span>
                  <div className="space-y-1 flex-1">
                    <h4 className="text-base sm:text-lg font-bold font-oswald uppercase tracking-tight text-foreground">
                      {role.title}
                    </h4>
                    <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                      {role.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider A -> B */}
      <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-8 md:h-10 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-[#F3F3F2] dark:fill-[#18181B]"
          />
        </svg>
      </div>

      {/* SECTION 2: Canvas B (#F3F3F2 / #18181B) — Core Members */}
      <section className="py-8 sm:py-12 md:py-14 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-4 sm:space-y-5">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            CORE MEMBERS
          </h3>

          <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
            <div className="overflow-x-auto bg-transparent">
              <table className="w-full text-left border-collapse min-w-[580px] text-xs sm:text-sm">
                <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                  <tr>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16 text-center">
                      S.No
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[180px]">
                      Faculty Name
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap">
                      Department
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-44 text-right">
                      Role
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40 font-libre">
                  {[
                    { name: "Mr. S.V. Vinodh", role: "Head EDC & HEC", dept: "EEE" },
                    { name: "Mrs. N. Kavitha", role: "Member", dept: "MBA" },
                    { name: "Mr. Ajin Sijo John", role: "Member", dept: "MECH" },
                    { name: "Mrs. N. Selvi", role: "Member", dept: "Training" },
                  ].map((member, idx) => (
                    <tr key={idx} className="hover:bg-foreground/[0.02] transition-colors">
                      <td className="px-4 py-3.5 font-oswald font-bold text-primary text-sm whitespace-nowrap text-center align-middle w-16">
                        {idx + 1}
                      </td>
                      <td className="px-4 py-3.5 font-libre font-bold text-foreground text-sm whitespace-nowrap align-middle">
                        {member.name}
                      </td>
                      <td className="px-4 py-3.5 font-libre font-medium text-xs sm:text-sm text-foreground align-middle">
                        {member.dept}
                      </td>
                      <td className="px-4 py-3.5 font-libre font-semibold text-xs sm:text-sm text-primary align-middle whitespace-nowrap text-right">
                        {member.role}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </DataGridContainer>
        </div>
      </section>
    </motion.div>
  );
}

/* ========================================================================= */
/* TAB 4: IIC — Institution Innovation Council                               */
/* ========================================================================= */
function IicContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: smoothEase }}
      className="w-full"
    >
      {/* SECTION 1: Canvas A (White / #121214) — Council Introduction */}
      <section className="pt-8 sm:pt-12 md:pt-14 pb-8 sm:pb-12 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              OVERVIEW
            </h2>
          </div>

          <div className="w-full space-y-4 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
            <p className="w-full">
              Institution Innovation Council (IIC-MSAJCE) was established in our college in accordance with the mandates of the Ministry of Education's Innovation Cell (MIC), Government of India. The council acts as the central engine for fostering systematic innovation, design thinking, and intellectual property creation among engineering students.
            </p>
            <div className="w-full border-l-4 border-primary pl-4 sm:pl-6 py-3 sm:py-3.5 bg-foreground/[0.02] dark:bg-white/[0.02] rounded-r-lg">
              <p className="text-foreground/90 font-libre font-medium leading-relaxed">
                Ministry of Human Resource Development (MHRD), Govt. of India has established 'MHRD's Innovation Cell (MIC)' to systematically foster the culture of Innovation amongst all Higher Education Institutions (HEIs). The primary mandate of MIC is to encourage, inspire and nurture young students by supporting them to work with new ideas and transform them into prototypes while they are in their formative years.
              </p>
            </div>
            <p className="w-full">
              MIC has envisioned encouraging creation of 'Institution's Innovation Council (IICs)' across selected HEIs. A network of these IICs will be established to promote innovation in the Institution through multitudinous modes leading to an innovation promotion eco-system in the campuses.
            </p>
          </div>
        </div>
      </section>

      {/* Wave Divider A -> B */}
      <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-8 md:h-10 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-[#F3F3F2] dark:fill-[#18181B]"
          />
        </svg>
      </div>

      {/* SECTION 2: Canvas B (#F3F3F2 / #18181B) — Major Focus of IIC */}
      <section className="py-8 sm:py-12 md:py-14 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            MAJOR FOCUS OF IIC
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 lg:gap-8">
            {[
              { idx: "1", title: "Local Innovation Ecosystem", desc: "Create a vibrant local innovation ecosystem within the campus." },
              { idx: "2", title: "Start-up Support Mechanism", desc: "Build a robust start-up supporting mechanism in Higher Education Institutions." },
              { idx: "3", title: "Atal Ranking Preparation", desc: "Prepare institute for Atal Ranking of Institutions on Innovation Achievements Framework." },
              { idx: "4", title: "Idea Pre-incubation", desc: "Establish Functional Ecosystem for Scouting Ideas and Pre-incubation of Ideas." },
              { idx: "5", title: "Cognitive Ability", desc: "Develop better Cognitive Ability for Technology Students through innovation challenges." },
            ].map((item) => (
              <div
                key={item.idx}
                className="group space-y-2 p-3.5 sm:p-4 rounded-xl hover:bg-foreground/[0.02] transition-colors"
              >
                <div className="font-oswald font-black text-3xl sm:text-4xl text-primary/40 group-hover:text-primary transition-colors leading-none select-none">
                  {item.idx}
                </div>
                <h4 className="text-base sm:text-lg font-bold font-oswald uppercase tracking-tight text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Divider B -> A */}
      <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-8 md:h-10 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-white dark:fill-[#121214]"
          />
        </svg>
      </div>

      {/* SECTION 3: Canvas A (White / #121214) — Functions of IIC */}
      <section className="py-8 sm:py-12 md:py-14 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-4 sm:space-y-6">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            FUNCTIONS OF IIC
          </h3>

          <div className="space-y-1.5 pt-1">
            {[
              "Identify and reward innovations and share success stories",
              "Organize periodic workshops/ seminars/ interactions with entrepreneurs, investors, professionals and create a mentor pool for student innovators",
              "Network with peers and national entrepreneurship development organizations",
              "Create an Institution's Innovation portal to highlight innovative projects carried out by institution's faculty and students",
              "Organize Hackathons, idea competition, mini-challenges etc. with the involvement of industries",
            ].map((fn, i) => (
              <div key={i} className="p-2.5 sm:p-3 flex gap-3.5 items-start hover:bg-foreground/[0.015] transition-colors">
                <span className="shrink-0 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 text-primary font-oswald font-bold text-xs mt-0.5 border border-primary/20">
                  {i + 1}
                </span>
                <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed pt-0.5 sm:pt-1">
                  {fn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Divider A -> B */}
      <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-8 md:h-10 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-[#F3F3F2] dark:fill-[#18181B]"
          />
        </svg>
      </div>

      {/* SECTION 4: Canvas B (#F3F3F2 / #18181B) — Vision & Mission */}
      <section className="py-8 sm:py-12 md:py-14 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          {/* Vision */}
          <div className="space-y-2.5">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Vision
            </h3>
            <div className="p-3.5 sm:p-4 flex items-start gap-3.5 sm:gap-4 hover:bg-foreground/[0.015] transition-colors">
              <span className="shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                V
              </span>
              <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed flex-1 pt-0.5 sm:pt-1">
                To be a centre of excellence for transforming students into proficient Electrical and Electronics Engineers through sustainable practices.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="space-y-2.5 pt-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Mission
            </h3>
            <div className="space-y-2">
              {[
                { badge: "M1", text: "Impart core fundamental knowledge and necessary skills in Electrical and Electronics Engineering through innovative teaching and learning methodology" },
                { badge: "M2", text: "Inculcate critical thinking, ethics, lifelong learning and creativity needed for industry and society" },
                { badge: "M3", text: "Cultivate the students with all-round competencies, for career, higher education and self-employability" },
              ].map((m) => (
                <div key={m.badge} className="p-3.5 sm:p-4 flex gap-3.5 sm:gap-4 items-start hover:bg-foreground/[0.015] transition-colors">
                  <span className="shrink-0 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                    {m.badge}
                  </span>
                  <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed flex-1 pt-0.5 sm:pt-1">
                    {m.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider B -> A */}
      <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-6 sm:h-8 md:h-10 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-white dark:fill-[#121214]"
          />
        </svg>
      </div>

      {/* SECTION 5: Canvas A (White / #121214) — IIC Certificates */}
      <section className="py-8 sm:py-12 md:py-14 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
            IIC CERTIFICATES
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { src: "/images/iic/cert-2023-24.jpg", year: "2023–24", stars: 3 },
              { src: "/images/iic/cert-2022-23.jpg", year: "2022–23", stars: 2 },
              { src: "/images/iic/cert-2020-21.jpg", year: "2020–21", stars: 2 },
            ].map((item, i) => (
              <div
                key={i}
                className="space-y-2.5 group"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs shadow-md">
                  <img
                    src={item.src}
                    alt={`IIC Certificate ${item.year}`}
                    className="w-full h-full object-cover select-none pointer-events-none"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
                    }}
                  />
                </div>
                <div className="space-y-1 px-1">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <svg
                        key={si}
                        className={`w-3.5 h-3.5 ${si < item.stars ? "text-amber-500 fill-amber-500" : "text-muted-foreground/30 fill-muted-foreground/30"}`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-bold font-oswald uppercase text-foreground text-base sm:text-lg group-hover:text-primary transition-colors">
                    {item.year}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-primary font-mono font-bold">
                    MoE Innovation Cell · Certificate No. 2467
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

/* ========================================================================= */
/* CONCISE ALTERNATIVE TAB LABELS                                            */
/* ========================================================================= */
const INCUBATION_TABS = [
  { id: "siif", label: "SIIF Foundation" },
  { id: "nisp", label: "Startup Policy (NISP)" },
  { id: "edc", label: "Entrepreneurship (EDC)" },
  { id: "iic", label: "Innovation Council (IIC)" },
];

export function IncubationPage() {
  const [activeSection, setActiveSection] = useState("siif");

  // Scroll to top on initial page mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Smooth scroll to content starting point when switching tabs (matching department pages)
  const scrollToContent = () => {
    const el = document.getElementById("incubation-main-content");
    if (el) {
      const headerOffset = typeof window !== "undefined" && window.innerWidth < 768 ? 44 : 52;
      const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: Math.max(0, elementTop - headerOffset),
        behavior: "smooth",
      });
    }
  };

  const handleTabChange = (tabId: string) => {
    setActiveSection(tabId);
    if (tabId === "siif") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setTimeout(() => {
        scrollToContent();
      }, 40);
    }
  };

  const handleTitleClick = () => {
    setActiveSection("siif");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="bg-white dark:bg-[#121214] text-foreground font-libre antialiased min-h-screen flex flex-col selection:bg-primary selection:text-white">
      {/* Sticky Secondary Navigation */}
      <SecondarySubNav
        title="INCUBATION & STARTUP"
        tabs={INCUBATION_TABS}
        activeTab={activeSection}
        onSelectTab={handleTabChange}
        onTitleClick={handleTitleClick}
      />

      <div className="flex-1 pt-0 md:pt-1">
        {/* ================================================================= */}
        {/* HERO BANNER: Standard MSAJCE Hero (Title Docked Flush at Bottom) */}
        {/* ================================================================= */}
        <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[260px] sm:min-h-[320px] md:min-h-[380px] flex flex-col justify-end">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/procedure_hero.jpg"
              alt="MSAJCE Innovation & Incubation Ecosystem"
              className="w-full h-full object-cover object-center brightness-[0.75] filter contrast-105 select-none pointer-events-none rounded-none"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
              }}
            />
            {/* Subtle gradient overlay for depth and title legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
          </div>

          {/* Title Container: Docked Flush at Bottom of Hero */}
          <div className="relative z-10 mx-auto max-w-[1440px] w-full px-3.5 sm:px-6 md:px-8 xl:px-12 pt-14 sm:pt-18 md:pt-20 pb-0">
            <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-4 py-3 sm:px-8 sm:py-5 md:px-10 md:py-6 shadow-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-t border-r border-border dark:border-white/15">
              <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none">
                Innovation &amp; Incubation
              </h1>
            </div>
          </div>
        </section>

        {/* Tab Content Target Anchor */}
        <div id="incubation-main-content" className="scroll-mt-32">
          {/* Dynamic Tab Views */}
          <AnimatePresence mode="wait">
            {activeSection === "siif" && <SiifContent key="siif" />}
            {activeSection === "nisp" && <NispContent key="nisp" />}
            {activeSection === "edc" && <EdcContent key="edc" />}
            {activeSection === "iic" && <IicContent key="iic" />}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
