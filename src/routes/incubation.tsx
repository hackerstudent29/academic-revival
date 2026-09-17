import { createFileRoute, Link } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Lightbulb, Rocket, ShieldCheck, TrendingUp, HandCoins, Microscope, ArrowRight } from "lucide-react";
import { SecondarySubNav } from "@/components/layout/SecondarySubNav";

const title = "Innovation & Incubation Cell — M.S.A.J. College of Engineering";
const description =
  "Build your startup prototype inside the MSAJCE Innovation & Incubation Cell with dedicated mentor support and seed grant funding.";

export const Route = createFileRoute("/incubation")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
    ],
  }),
  component: IncubationPage,
});

function SiifContent() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-foreground">
              Foundation Objectives
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-primary font-oswald">
              Sathak Innovation and Incubation Foundation
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground font-sans">
              The main objects to be pursued by the company upon its incorporation are:
            </p>
            <ul className="space-y-6 mt-2">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground/10 border border-foreground/20 text-foreground flex items-center justify-center font-bold font-oswald text-sm">A</span>
                <p className="text-base text-muted-foreground leading-relaxed font-sans pt-1">
                  To promote commerce, science, education and research by helping, establishing and incubating startups, individuals, teams with innovative ideas to make prototypes and to convert them into Products.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground/10 border border-foreground/20 text-foreground flex items-center justify-center font-bold font-oswald text-sm">B</span>
                <p className="text-base text-muted-foreground leading-relaxed font-sans pt-1">
                  To promote a culture of innovation driven entrepreneurship in the fields of science, engineering, technology, commerce, agriculture, health care, medicine, pharmacy, education, arts, sports and other various fields.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground/10 border border-foreground/20 text-foreground flex items-center justify-center font-bold font-oswald text-sm">C</span>
                <p className="text-base text-muted-foreground leading-relaxed font-sans pt-1">
                  To establish, help establish and or manage infrastructure, laboratories, to make and test prototypes/products, pilot plant production facilities, software development facilities, training and human resource development centre, propogate new scientific and technologies development and innovation from idea stage to full scale commercial production or any part of this chain. For the above purposes to assist, co-operate or collaborates with any establishment, laboratory, technology business incubators centre, organisation or institution in India or abroad.
                </p>
              </li>
            </ul>
          </div>
          <div className="relative rounded-lg overflow-hidden border border-border bg-muted shadow-xs aspect-[4/3] lg:aspect-auto lg:h-full">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop"
              alt="Incubation Workspace"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Incubation Cell Initiatives */}
      <section className="bg-card border-y border-border py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[11px] font-mono font-bold tracking-widest text-foreground uppercase block mb-2">
              Incubation Cell
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-primary font-oswald">
              Programs and Initiatives
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground font-sans mt-4">
              Various programs and initiatives to support aspiring entrepreneurs and early-stage startups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-page-bg border border-border p-8 rounded-md shadow-xs">
              <h3 className="text-lg font-bold text-primary mb-3 font-oswald uppercase">Incubation Services</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                Typically include 5000 sqft. physical office space, several 100, 400, 700 seater halls for conducting events in Entrepreneurship, infrastructure, and shared resources for startups.
              </p>
            </div>
            <div className="bg-page-bg border border-border p-8 rounded-md shadow-xs">
              <h3 className="text-lg font-bold text-primary mb-3 font-oswald uppercase">Funding Opportunities</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                Funding opportunities to startups through grants, seed funding, or connections to potential investors.
              </p>
            </div>
            <div className="bg-page-bg border border-border p-8 rounded-md shadow-xs">
              <h3 className="text-lg font-bold text-primary mb-3 font-oswald uppercase">Mentorship Programs</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                Mentorship programs where experienced professionals and industry experts provide guidance and support to entrepreneurs and startups.
              </p>
            </div>
            <div className="bg-page-bg border border-border p-8 rounded-md shadow-xs">
              <h3 className="text-lg font-bold text-primary mb-3 font-oswald uppercase">Investor Network</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                Access to a network of investors, venture capitalists, and angel investors who are interested in supporting innovative ideas and startups.
              </p>
            </div>
            <div className="bg-page-bg border border-border p-8 rounded-md shadow-xs">
              <h3 className="text-lg font-bold text-primary mb-3 font-oswald uppercase">Events & Workshops</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                Organizes events, workshops, and training programs to foster innovation, entrepreneurial skills, and knowledge sharing.
              </p>
            </div>
            <div className="bg-page-bg border border-border p-8 rounded-md shadow-xs">
              <h3 className="text-lg font-bold text-primary mb-3 font-oswald uppercase">Strategic Partnerships</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                Facilitates partnerships with academic institutions, industry bodies, and government agencies to create synergies and opportunities for startups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Incubation Lead */}
      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24">
        <div className="max-w-3xl">
          <span className="text-[11px] font-mono font-bold tracking-widest text-foreground uppercase block mb-4">Incubation Lead</span>
          <div className="border-l-4 border-primary pl-6">
            <h3 className="text-2xl md:text-3xl font-black tracking-tight text-primary font-oswald uppercase mb-1">
              Akshita K
            </h3>
            <div className="space-y-1 text-base text-muted-foreground font-sans mt-3">
              <p className="font-semibold text-foreground">SIIF, MSAJCE</p>
              <p>Mohamed Sathak A.J. College of Engineering</p>
              <p>Chennai- 603103</p>
              <p className="pt-2">
                <a href="mailto:info@siif.ventures" className="text-primary hover:underline font-semibold">
                  info@siif.ventures
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function NispContent() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-24">
      {/* Header & Vision/Mission */}
      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-foreground">
            Policy Framework
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-primary font-oswald mt-4">
            National Innovation and Startup Policy
          </h2>
        </div>
        <div className="flex flex-col gap-8 w-full">
          {/* Vision */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-black font-oswald uppercase text-primary text-center">Vision</h3>
            <div className="flex gap-3 items-start">
              <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-foreground/10 border border-foreground/20 font-oswald font-black text-sm text-foreground">V</span>
              <p className="text-base text-muted-foreground leading-relaxed font-sans">
                To cater the needs of student entrepreneurs with innovative ideas thereby introducing a culture of entrepreneurship inside campus which will strengthen our education system and thereby promoting the national economic and social growth.
              </p>
            </div>
          </div>
          {/* Mission */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-black font-oswald uppercase text-primary text-center">Mission</h3>
            <div className="flex gap-3 items-start">
              <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-foreground/10 border border-foreground/20 font-oswald font-black text-xs text-foreground">M1</span>
              <p className="text-base text-muted-foreground leading-relaxed font-sans">To develop an ecosystem with required infrastructure that can enable students and faculty to innovate and prototype their potential ideas with industrial standards and support from Government, industry and reputed academic institutions around the world and help them to realize their potentials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="bg-page-bg border-y border-border py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-black font-oswald uppercase text-primary mb-6">Short Term Objectives</h3>
            <ul className="space-y-4">
              {[
                "To help student groups to prototype their ideas.",
                "To improve innovation, creative and design thinking among student community.",
                "Incubation facility for faculty driven start-up and student/Alumni start-up.",
                "Organize FDP, seminars and workshops, distinguish talks for students, Faculty and Alumni and promote entrepreneurial culture.",
                "Strengthen institute industry interaction cell activity and effectively use the outcomes for achieving the mission."
              ].map((obj, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-muted-foreground leading-relaxed font-sans">{obj}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-black font-oswald uppercase text-primary mb-6">Long Term Objectives</h3>
            <ul className="space-y-4">
              {[
                "Associate with DST, CII, MSME and other academic institutions for transferring world class facility for MSAJCE IEDC activities.",
                "Improve quality of research work among students and to attain patent, which can be commercially used in production.",
                "Provide a platform for students to develop innovative products with global recognition and generate business opportunities.",
                "Generate revenues through consultancy work and student start-ups.",
                "Spread awareness to students and faculty regarding IPR related activities."
              ].map((obj, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-muted-foreground leading-relaxed font-sans">{obj}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Strategic Partnership & Thrust Areas */}
      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-black font-oswald uppercase text-primary mb-6">Strategic Partnership Linkage</h3>
            <ul className="space-y-4 bg-card border border-border p-8 rounded-none">
              <li className="flex gap-3 items-center text-muted-foreground font-sans">
                <div className="w-2 h-2 bg-primary shrink-0" />
                Entrepreneurship Development Institute of India (EDII), Chennai.
              </li>
              <li className="flex gap-3 items-center text-muted-foreground font-sans">
                <div className="w-2 h-2 bg-primary shrink-0" />
                National Innovation Foundation (NIF) of India to submit ideas and apply for schemes.
              </li>
              <li className="flex gap-3 items-center text-muted-foreground font-sans">
                <div className="w-2 h-2 bg-primary shrink-0" />
                Procure fund from AICTE for Entrepreneurship Development Cell.
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-black font-oswald uppercase text-primary mb-6">Thrust Areas</h3>
            <div className="overflow-x-auto border border-border rounded-none">
              <table className="w-full text-sm text-left">
                <thead className="bg-primary/10 text-primary font-oswald uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3 font-bold w-16">S.No</th>
                    <th className="px-4 py-3 font-bold">Plan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border font-sans text-muted-foreground">
                  {[
                    "To develop Strategies and governance for Promoting Innovation Entrepreneurship in the institute",
                    "Creating Innovation Pipeline and Pathways for Entrepreneurs and Startups.",
                    "Building Organizational Capacity, Human Resources and Incentive",
                    "Collaboration, Co-creation, Business Relationship and knowledge Exchange",
                    "Incubation & Pre-Incubation support at SIIF",
                    "IP Ownership Rights for Technologies Developed at MSAJCE and SIIF.",
                    "Pedagogy & Learning Interventions for Supporting Innovations & Start-ups",
                    "Entrepreneurial Performance Impact Assessment"
                  ].map((plan, idx) => (
                    <tr key={idx} className="hover:bg-muted/50 transition-colors">
                      <td className="px-4 py-3 font-medium text-foreground">{idx + 1}</td>
                      <td className="px-4 py-3">{plan}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Committee Members Table */}
      <section className="bg-page-bg border-y border-border py-16">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <h3 className="text-2xl font-black font-oswald uppercase text-primary mb-6 text-center">Committee Members</h3>
          <div className="overflow-x-auto border border-border rounded-none">
            <table className="w-full text-sm text-left">
              <thead className="bg-primary/10 text-primary font-oswald uppercase text-xs">
                <tr>
                  <th className="px-6 py-4 font-bold">S.No</th>
                  <th className="px-6 py-4 font-bold">Name & Designation</th>
                  <th className="px-6 py-4 font-bold">Position</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border font-sans text-muted-foreground">
                {[
                  { name: "Dr. K.S. Srinivasan\nPrincipal, Mohamed Sathak A.J. College of Engineering (MSAJCE), Chennai", pos: "President" },
                  { name: "Mr. Prakadesh Subramanian\nStrategic Partner, SIIF, Chennai.", pos: "Incubation Coordinator" },
                  { name: "Mr. Parvez Aalam\nCEO, Crescent Innovation Incubation Council, Chennai", pos: "Incubation Coordinator" },
                  { name: "Mr. Thiyagaraja Gupta\nDeputy Controller of Patents and Designs", pos: "Patent Expert" },
                  { name: "Ahamed Jamel\nAMT IT consultant, 4A technology", pos: "Alumni Entrepreneur" },
                  { name: "Abdur Rahim Salih\nDirector & CEO V5 Innovations Pvt,Ltd", pos: "Alumni Entrepreneur" },
                  { name: "Asim Ali. L\nCMO, Customer Labs", pos: "Alumni Entrepreneur" }
                ].map((member, idx) => (
                  <tr key={idx} className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground">{idx + 1}</td>
                    <td className="px-6 py-4 whitespace-pre-line">{member.name}</td>
                    <td className="px-6 py-4 font-semibold text-foreground">{member.pos}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* KPI Monitor & Evaluation Accordion */}
      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-12">
        <h3 className="text-2xl font-black font-oswald uppercase text-primary mb-6 text-center">KPI Monitor & Evaluation</h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="vision" className="border-b border-border">
            <AccordionTrigger className="text-xl font-bold text-primary hover:no-underline py-4 text-left">
              Vision
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-6 text-base font-sans text-muted-foreground flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-2">Key Performance Indicators (KPIs)</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Increase in Self-Employment Rate</li>
                  <li>5 Established Start-ups per year</li>
                </ul>
              </div>
              <div className="md:w-1/3">
                <h4 className="font-semibold text-foreground mb-2">Means and Verification</h4>
                <p>NIRF Rankings</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="goal" className="border-b border-border">
            <AccordionTrigger className="text-xl font-bold text-primary hover:no-underline py-4 text-left">
              Goal
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-6 text-base font-sans text-muted-foreground flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-2">Key Performance Indicators (KPIs)</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Establish the Environment with multiple level of support for innovation & Entrepreneurship and startups.</li>
                  <li>Students will choose Entrepreneurship as career</li>
                </ul>
              </div>
              <div className="md:w-1/3">
                <h4 className="font-semibold text-foreground mb-2">Means and Verification</h4>
                <p>ARIIA Rankings</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="outcomes" className="border-b border-border">
            <AccordionTrigger className="text-xl font-bold text-primary hover:no-underline py-4 text-left">
              Outcomes
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-6 text-base font-sans text-muted-foreground flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-2">Key Performance Indicators (KPIs)</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>All the student & faculty with entrepreneurship Orientation</li>
                  <li>Student & faculty motivated to start any entrepreneurial activity</li>
                  <li>5 IPR/Innovations developed ideas/year</li>
                  <li>5 Student/Early-Stage Start-ups to be formed/year.</li>
                  <li>In-house Expert Capacity facility available for Advisory Services</li>
                  <li>25% of Student & faculty mass exposed to awareness/orientation building programs</li>
                  <li>Students covered through entrepreneurship Education; MOOC, Class Room, Experiential Learning programs etc.</li>
                  <li>250 of beneficiaries are accessing the infrastructure & facilities per day, month & Year</li>
                  <li>25% innovators identified; 25 of awarded,/recognized; 25 of Supported</li>
                  <li>5% Student projects turn to (commercialize) Innovations</li>
                  <li>5 of IPR based product/services generated and registration filed</li>
                  <li>In-house trained professional developed for advisory services</li>
                  <li>5 of Research Studies on Entrepreneurship published</li>
                  <li>2 of Regional, National and International linkages established for the start-up & innovation</li>
                  <li>5% Representatives of experts & entrepreneurial students across Dept. & Disciplines.</li>
                  <li>5 of Beneficiaries Referred to Incubators/investors for further support through Start-up Cell</li>
                  <li>10 of Beneficiaries generated under various schemes and programs leveraged and converged at Start-up Cell</li>
                </ul>
              </div>
              <div className="md:w-1/3">
                <h4 className="font-semibold text-foreground mb-2">Means and Verification</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Quarterly News Letter</li>
                  <li>Biannual Survey</li>
                  <li>Monthly progress report</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="activities" className="border-b border-border">
            <AccordionTrigger className="text-xl font-bold text-primary hover:no-underline py-4 text-left">
              Activities
            </AccordionTrigger>
            <AccordionContent className="pt-2 pb-6 text-base font-sans text-muted-foreground flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-2">Key Performance Indicators (KPIs)</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>5 Education/Skill certification program on Entrepreneurship, IPR, Innovation etc.</li>
                  <li>25 of workshops, awareness, and market outreach events, orientation, advocacy meetings etc.</li>
                  <li>12 of networking event (Intra and Inter-institutional, enablers, stakeholders) organized</li>
                  <li>5 of skill and competency development training programs/FDPs/EDPs organized.</li>
                  <li>5 of research studies related to Entrepreneurship conducted</li>
                  <li>01 of national and regional award and campus Hackathon like events organized</li>
                  <li>Incentivizing Entrepreneurship and Innovation; services and facilities; Start-up Manual, policies, tool kits etc.</li>
                  <li>1% of total budget/year spend against total institution revenue for start-up</li>
                  <li>Budget allocation and Spend ratio for the start-up mandate in institute</li>
                </ul>
              </div>
              <div className="md:w-1/3">
                <h4 className="font-semibold text-foreground mb-2">Means and Verification</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Biannual Survey</li>
                  <li>Quarterly News Letter</li>
                  <li>Monthly progress report</li>
                  <li>Review Meetings</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-16 md:px-12">
        {/* Tentative plan for the next 5 years Table */}
        <h3 className="text-2xl font-black font-oswald uppercase text-primary mb-6 text-center">Tentative Plan for the Next 5 Years</h3>
        <div className="overflow-x-auto border border-border rounded-none">
          <table className="w-full text-sm text-left">
            <thead className="bg-primary/10 text-primary font-oswald uppercase text-xs">
              <tr>
                <th className="px-6 py-4 font-bold w-16">S.No</th>
                <th className="px-6 py-4 font-bold">Activity</th>
                <th className="px-6 py-4 font-bold whitespace-nowrap">Frequency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border font-sans text-muted-foreground">
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
                { act: "Short Term Training course on Innovation /Start-up & Entrepreneurship", freq: "One per Year" }
              ].map((item, idx) => (
                <tr key={idx} className="hover:bg-muted/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground">{idx + 1}</td>
                  <td className="px-6 py-4">{item.act}</td>
                  <td className="px-6 py-4 font-semibold text-foreground whitespace-nowrap">{item.freq}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function EdcContent() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-24">
      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-lg overflow-hidden border border-border bg-muted shadow-xs aspect-[4/3] lg:aspect-auto lg:h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop"
              alt="Entrepreneurship Development"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-foreground">
              Development Cell
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-primary font-oswald">
              Entrepreneurship Development Cell
            </h2>
            <div className="mt-4">
              <h3 className="text-xl font-bold font-oswald uppercase text-primary mb-4">Roles and Responsibilities</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground/10 border border-foreground/20 text-foreground flex items-center justify-center font-bold font-oswald text-sm">1</span>
                  <p className="text-base text-muted-foreground leading-relaxed font-sans pt-1">
                    Encourage the students to become entrepreneurs by organizing entrepreneurship development programs and make them to participate in the activities organized by the external agencies.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground/10 border border-foreground/20 text-foreground flex items-center justify-center font-bold font-oswald text-sm">2</span>
                  <p className="text-base text-muted-foreground leading-relaxed font-sans pt-1">
                    Organize the training for Startup / Incubator and arrange the mentoring to proceed further.
                  </p>
                </li>
                <li className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground/10 border border-foreground/20 text-foreground flex items-center justify-center font-bold font-oswald text-sm">3</span>
                  <p className="text-base text-muted-foreground leading-relaxed font-sans pt-1">
                    Coordinate with Strategy partner of Sathak Innovation Incubation Cell (SIIF) and execute various Activity.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Committee / Core Members */}
      <section className="bg-page-bg border-y border-border py-16">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-black font-oswald uppercase text-primary">Core Members</h3>
            <p className="text-muted-foreground font-sans mt-2">The dedicated team driving the Entrepreneurship Development Cell.</p>
          </div>
          
          <div className="overflow-x-auto border border-border rounded-none">
            <table className="w-full text-sm text-left">
              <thead className="bg-primary/10 text-primary font-oswald uppercase text-xs">
                <tr>
                  <th className="px-6 py-4 font-bold w-16">S.No</th>
                  <th className="px-6 py-4 font-bold">Name</th>
                  <th className="px-6 py-4 font-bold">Department</th>
                  <th className="px-6 py-4 font-bold">Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border font-sans text-muted-foreground">
                {[
                  { name: "Mr. S.V. Vinodh", role: "Head EDC & HEC", dept: "EEE" },
                  { name: "Mrs. N. Kavitha", role: "Member", dept: "MBA" },
                  { name: "Mr. Ajin Sijo John", role: "Member", dept: "MECH" },
                  { name: "Mrs. N. Selvi", role: "Member", dept: "Training" }
                ].map((member, idx) => (
                  <tr key={idx} className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground">{idx + 1}</td>
                    <td className="px-6 py-4 font-semibold text-foreground">{member.name}</td>
                    <td className="px-6 py-4">{member.dept}</td>
                    <td className="px-6 py-4">{member.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

function IicContent() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-24">
      {/* Hero Introduction */}
      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-foreground">
              Ministry of Education Initiative
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-primary font-oswald">
              Institution Innovation Council
            </h2>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-sm w-fit">
              IIC-MSAJCE
            </div>
            <p className="text-base text-muted-foreground leading-relaxed font-sans">
              Institution Innovation Council (IIC-MSAJCE) had been constituted in our college as per the guidelines of the Ministry of Human Resource Development Innovation Cell (MIC).
            </p>
            <div className="border-l-2 border-primary pl-6">
              <p className="text-base text-muted-foreground leading-relaxed font-sans">
                Ministry of Human Resource Development (MHRD), Govt. of India has established 'MHRD's Innovation Cell (MIC)' to systematically foster the culture of Innovation amongst all Higher Education Institutions (HEIs). The primary mandate of MIC is to encourage, inspire and nurture young students by supporting them to work with new ideas and transform them into prototypes while they are in their formative years.
              </p>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed font-sans">
              MIC has envisioned encouraging creation of 'Institution's Innovation Council (IICs)' across selected HEIs. A network of these IICs will be established to promote innovation in the Institution through multitudinous modes leading to an innovation promotion eco-system in the campuses.
            </p>
          </div>
          <div className="relative rounded-lg overflow-hidden border border-border bg-muted shadow-xs aspect-[4/3] lg:aspect-auto lg:h-[520px]">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop"
              alt="Institution Innovation Council"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Major Focus */}
      <section className="bg-card border-y border-border py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-mono font-bold tracking-widest text-foreground uppercase block mb-2">Key Priorities</span>
            <h3 className="text-3xl font-black font-oswald uppercase text-primary">Major Focus of IIC</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Local Innovation Ecosystem", desc: "Create a vibrant local innovation ecosystem within the campus." },
              { title: "Start-up Support Mechanism", desc: "Build a robust start-up supporting mechanism in Higher Education Institutions." },
              { title: "Atal Ranking Preparation", desc: "Prepare institute for Atal Ranking of Institutions on Innovation Achievements Framework." },
              { title: "Idea Pre-incubation", desc: "Establish Functional Ecosystem for Scouting Ideas and Pre-incubation of Ideas." },
              { title: "Cognitive Ability", desc: "Develop better Cognitive Ability for Technology Students through innovation challenges." },
            ].map((item, i) => (
              <div key={i} className="bg-page-bg border border-border p-6 rounded-none shadow-xs">
                <div className="w-8 h-8 rounded-none bg-primary/10 text-primary flex items-center justify-center font-bold font-oswald mb-4">{i + 1}</div>
                <h4 className="text-base font-bold text-primary font-oswald uppercase mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Functions + Vision & Mission */}
      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-black font-oswald uppercase text-primary mb-6">Functions of IICs</h3>
            <p className="text-base text-muted-foreground font-sans mb-6">
              To conduct various innovation and entrepreneurship-related activities prescribed by Ministry of Education's Innovation cell as and when announced by it.
            </p>
            <ul className="space-y-5">
              {[
                "Identify and reward innovations and share success stories",
                "Organize periodic workshops/ seminars/ interactions with entrepreneurs, investors, professionals and create a mentor pool for student innovators",
                "Network with peers and national entrepreneurship development organizations",
                "Create an Institution's Innovation portal to highlight innovative projects carried out by institution's faculty and students",
                "Organize Hackathons, idea competition, mini-challenges etc. with the involvement of industries",
              ].map((fn, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-muted-foreground leading-relaxed font-sans">{fn}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            {/* Vision */}
            <div>
              <h3 className="text-xl font-black font-oswald uppercase text-primary mb-3">Vision</h3>
              <div className="flex gap-3 items-start">
                <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-foreground/10 border border-foreground/20 font-oswald font-black text-sm text-foreground">V</span>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans pt-0.5">
                  To be a centre of excellence for transforming students into proficient Electrical and Electronics Engineers through sustainable practices.
                </p>
              </div>
            </div>
            {/* Mission */}
            <div>
              <h3 className="text-xl font-black font-oswald uppercase text-primary mb-3">Mission</h3>
              <ul className="space-y-4">
                {[
                  { badge: "M1", text: "Impart core fundamental knowledge and necessary skills in Electrical and Electronics Engineering through innovative teaching and learning methodology" },
                  { badge: "M2", text: "Inculcate critical thinking, ethics, lifelong learning and creativity needed for industry and society" },
                  { badge: "M3", text: "Cultivate the students with all-round competencies, for career, higher education and self-employability" },
                ].map((m) => (
                  <li key={m.badge} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-foreground/10 border border-foreground/20 font-oswald font-black text-xs text-foreground">{m.badge}</span>
                    <p className="text-sm text-muted-foreground leading-relaxed font-sans pt-0.5">{m.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* IIC Certificates Gallery */}
      <section className="bg-page-bg border-y border-border py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-mono font-bold tracking-widest text-foreground uppercase block mb-2">Recognitions</span>
            <h3 className="text-3xl font-black font-oswald uppercase text-primary">IIC Certificates</h3>
            <p className="text-muted-foreground font-sans mt-2">
              MSAJCE has been consistently recognized by the Ministry of Education's Innovation Cell for its activities in promoting innovation and startup culture.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/images/iic/cert-2023-24.jpg", year: "2023–24", stars: 3 },
              { src: "/images/iic/cert-2022-23.jpg", year: "2022–23", stars: 2 },
              { src: "/images/iic/cert-2020-21.jpg", year: "2020–21", stars: 2 },
              { src: "/images/iic/cert-2019-20-activity.png", year: "2019–20 (Activity)", stars: 1 },
              { src: "/images/iic/cert-2019-20-establishment.png", year: "2019–20 (Establishment)", stars: 5 },
              { src: "/images/iic/cert-nic-2020.png", year: "NIC 2020 — Finalist", stars: 4 },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-none overflow-hidden shadow-xs group">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={item.src}
                    alt={`IIC Certificate ${item.year}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <svg key={si} className={`w-4 h-4 ${si < item.stars ? "text-amber-400" : "text-muted-foreground/30"}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-black font-oswald uppercase text-primary">{item.year}</p>
                  <p className="text-[10px] uppercase tracking-widest text-primary font-bold mt-1">MoE Innovation Cell · Certificate No. 2467</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const INCUBATION_TABS = [
  { id: "siif", label: "Sathak Innovation and Incubation Foundation" },
  { id: "nisp", label: "National Innovation and Startup Policy" },
  { id: "edc", label: "Entrepreneurship Development Cell" },
  { id: "iic", label: "Institution Innovation Council" },
];

export function IncubationPage() {
  const [activeSection, setActiveSection] = useState("siif");

  const handleSelectSection = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="bg-page-bg text-foreground min-h-screen flex flex-col">
      <SecondarySubNav
        title="INCUBATION & STARTUP"
        tabs={INCUBATION_TABS}
        activeTab={activeSection}
        onSelectTab={handleSelectSection}
        onTitleClick={() => handleSelectSection("siif")}
      />
      <main className="flex-1">
        {/* Page Hero */}
      <section className="relative border-b border-border overflow-hidden py-16 md:py-24">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1800&auto=format&fit=crop"
          alt="Innovation & Incubation background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="flex flex-col gap-4 max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-white/70">
              Entrepreneurship // Startup Ecosystem
            </span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white font-oswald">
              Innovation &amp; Incubation Cell
            </h1>
            <p className="text-lg leading-relaxed text-white/80 mt-2 font-sans">
              {description}
            </p>
          </div>
        </div>
      </section>

      {activeSection === "siif" && <SiifContent />}
      {activeSection === "nisp" && <NispContent />}
      {activeSection === "edc" && <EdcContent />}
      {activeSection === "iic" && <IicContent />}

      {/* Next Navigation */}
      <section className="border-t border-border bg-page-bg py-12">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-semibold text-muted-foreground font-sans">
            Ready to kickstart your career?
          </span>
          <div className="flex gap-4">
            <Link
              to="/placements"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-xs font-bold uppercase tracking-widest rounded-md hover:bg-primary/90 transition-colors"
            >
              Explore Placements <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}
