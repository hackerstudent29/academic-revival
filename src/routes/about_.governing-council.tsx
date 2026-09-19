import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  Award,
  Building2,
  Users,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Scale,
} from "lucide-react";

const title = "Governing Council — M.S.A.J. College of Engineering, Chennai";
const description =
  "Official Governing Council members, university nominees, industry leaders, and statutory governance of Mohamed Sathak A.J. College of Engineering.";

export const Route = createFileRoute("/about_/governing-council")({
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
  component: GoverningCouncilPage,
});

const members = [
  { sno: "01", name: "Alhaj. S.M. Yousuf Sahib", role: "Chairman", category: "trust", designation: "Chairman, Mohamed Sathak Trust, Chennai" },
  { sno: "02", name: "Janaba. S.M.H. Sharmila", role: "Member", category: "trust", designation: "Secretary, Mohamed Sathak Trust, Chennai" },
  { sno: "03", name: "Janab. P.R.L. Hamid Ibrahim", role: "Member", category: "trust", designation: "Executive Director, Mohamed Sathak Trust, Chennai" },
  { sno: "04", name: "Mr. S.M.Y. Mohamed Sathak", role: "Member", category: "trust", designation: "Campus Director, Mohamed Sathak Trust, Chennai" },
  { sno: "05", name: "Dr. T.V. Gopal", role: "University Nominee", category: "gov", designation: "Professor / Department of CSE, Anna University, Chennai" },
  { sno: "06", name: "Dr. S. Murugavel", role: "DOTE Nominee", category: "gov", designation: "Professor / TPGIT, Directorate of Technical Education, Vellore" },
  { sno: "07", name: "Dr. B. Anbu Thambi", role: "Industry Partner", category: "industry", designation: "Head - Strategy & Partnerships, L&T EduTech, Chennai" },
  { sno: "08", name: "Mr. Arul Rajkumar", role: "Industry Partner", category: "industry", designation: "Vice President - IT Operations, Ford Motors Pvt. Ltd., Chennai" },
  { sno: "09", name: "Dr. R. Subramani", role: "Industry Partner", category: "industry", designation: "Director, IBM India Systems Development Lab, Chennai" },
  { sno: "10", name: "Dr. G. Kulanthaivelu", role: "Academic Expert", category: "academic", designation: "Professor & Head - ECE, NITTTR, Government of India, Chennai" },
  { sno: "11", name: "Dr. K.S. Srinivasan", role: "Member Secretary", category: "academic", designation: "Principal, Mohamed Sathak A.J. College of Engineering, Chennai" },
  { sno: "12", name: "Head - Administration", role: "Administrative Member", category: "academic", designation: "MSAJCE, Siruseri OMR, Chennai" },
  { sno: "13", name: "Head - Academics", role: "Senior Faculty Member", category: "academic", designation: "MSAJCE, Siruseri OMR, Chennai" },
  { sno: "14", name: "Head - IQAC", role: "Senior Faculty Member", category: "academic", designation: "MSAJCE, Siruseri OMR, Chennai" },
  { sno: "15", name: "Head - Admission", role: "Senior Faculty Member", category: "academic", designation: "MSAJCE, Siruseri OMR, Chennai" },
  { sno: "16", name: "Head – Student Affairs", role: "Senior Faculty Member", category: "academic", designation: "MSAJCE, Siruseri OMR, Chennai" },
  { sno: "17", name: "Head - Research", role: "Senior Faculty Member", category: "academic", designation: "MSAJCE, Siruseri OMR, Chennai" },
  { sno: "18", name: "Head - Examcell", role: "Member", category: "academic", designation: "MSAJCE, Siruseri OMR, Chennai" },
];

const quorumCategories = [
  { id: "all", label: "All 18 Members" },
  { id: "trust", label: "Trust Management" },
  { id: "gov", label: "Govt & Anna Univ" },
  { id: "industry", label: "Industry Corporate" },
  { id: "academic", label: "Academic Leadership" },
];

export function GoverningCouncilPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredMembers = members.filter((m) => {
    if (selectedCategory === "all") return true;
    return m.category === selectedCategory;
  });

  return (
    <main className="bg-white dark:bg-[#121214] text-foreground min-h-screen pt-0 md:pt-1 font-sans selection:bg-primary selection:text-white">
      {/* ========================================================================= */}
      {/* SECTION 1: Canvas A (White / #121214) — STATUTORY GOVERNANCE HERO         */}
      {/* ========================================================================= */}
      <section className="w-full pt-2 md:pt-6 pb-12 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          {/* Header Bar */}
          <div className="border-b border-border pb-6 mb-8 sm:mb-12">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-primary uppercase block mb-2">
              ABOUT MSAJCE // STATUTORY GOVERNANCE
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-foreground font-oswald leading-[0.95]">
              Governing Council <br />
              <span className="text-primary font-oswald">& Statutory Body</span>
            </h1>
          </div>

          {/* Hero Broadsheet Grid (Strictly Zero Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="border-l-4 border-primary pl-4 sm:pl-6 py-2">
                <p className="text-lg sm:text-xl md:text-2xl font-bold font-oswald uppercase text-foreground leading-snug tracking-tight">
                  The Governing Council of Mohamed Sathak A.J. College of Engineering is the apex statutory authority responsible for institutional governance, academic policies, infrastructure development, and strategic compliance.
                </p>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-muted-foreground font-sans leading-relaxed">
                <p>
                  Composed in strict adherence to AICTE guidelines and Anna University statutes, the council convenes educational administrators, industry leaders from Ford Motors, IBM, and L&T EduTech, senior university nominees, and institutional executive trustees.
                </p>
                <p>
                  The council provides strategic oversight, reviews annual budgets and audit reports, sanctions new academic programmes, approves research expenditure, and ensures the college fulfills its philanthropic mandate.
                </p>
              </div>

              {/* 4 Core Governance Pillars (divide-x) */}
              <div className="pt-4 border-t border-border">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 divide-x divide-border">
                  <div className="first:pl-0 pl-4">
                    <span className="text-[10px] sm:text-xs font-mono uppercase text-muted-foreground block">
                      Total Body
                    </span>
                    <span className="text-lg sm:text-xl font-black text-primary font-oswald block mt-0.5">
                      18 MEMBERS
                    </span>
                    <span className="text-[11px] text-foreground/70 font-sans block">
                      Statutory Quorum
                    </span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[10px] sm:text-xs font-mono uppercase text-muted-foreground block">
                      University
                    </span>
                    <span className="text-lg sm:text-xl font-black text-primary font-oswald block mt-0.5">
                      ANNA UNIV
                    </span>
                    <span className="text-[11px] text-foreground/70 font-sans block">
                      Official Nominee
                    </span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[10px] sm:text-xs font-mono uppercase text-muted-foreground block">
                      State Govt
                    </span>
                    <span className="text-lg sm:text-xl font-black text-primary font-oswald block mt-0.5">
                      DOTE NOMINEE
                    </span>
                    <span className="text-[11px] text-foreground/70 font-sans block">
                      Govt. of Tamil Nadu
                    </span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[10px] sm:text-xs font-mono uppercase text-muted-foreground block">
                      Industry
                    </span>
                    <span className="text-lg sm:text-xl font-black text-primary font-oswald block mt-0.5">
                      FORD · IBM · L&T
                    </span>
                    <span className="text-[11px] text-foreground/70 font-sans block">
                      Corporate Partners
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Signature Asymmetrical Campus Administrative Image */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="relative w-full rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs overflow-hidden border border-border shadow-md bg-muted aspect-[4/3]">
                <img
                  src="/images/accreditations_campus.jpg"
                  alt="MSAJCE Boardroom Campus"
                  className="w-full h-full object-cover pointer-events-none select-none"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/eligibility_hero.jpg";
                  }}
                />
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-muted-foreground px-1 border-b border-border pb-2">
                <span className="uppercase tracking-wider">Apex Boardroom Authority</span>
                <span className="text-primary font-bold">Anna Univ & AICTE Affiliated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* WAVE DIVIDER 1: Canvas A (White / #121214) -> Canvas B (#F3F3F2 / #18181B) */}
      {/* ========================================================================= */}
      <div className="w-full overflow-hidden leading-none select-none bg-white dark:bg-[#121214]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 sm:h-14 md:h-16 lg:h-20 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-[#F3F3F2] dark:fill-[#18181B]"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 2: Canvas B (#F3F3F2 / #18181B) — STATUTORY MANDATE & POWERS      */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#F3F3F2] dark:bg-[#18181B] py-10 sm:py-16 lg:py-20 transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="max-w-3xl mb-8 sm:mb-12">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-primary uppercase block mb-2">
              STATUTORY RESPONSIBILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-foreground font-oswald leading-none">
              Powers & Functions of the Council
            </h2>
          </div>

          {/* 4 Open Functional Columns (Strictly Zero Cards, divide-y) */}
          <div className="border-t border-b border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
              <div className="py-6 sm:py-8 md:px-6 first:md:pl-0 last:md:pr-0">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary block mb-2">
                  01 // Strategy
                </span>
                <h3 className="text-lg font-bold uppercase tracking-tight text-foreground font-oswald mb-2">
                  Institutional Policy
                </h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  Formulates strategic long-term development plans, institutional vision, and operational policies in accordance with Anna University and AICTE norms.
                </p>
              </div>

              <div className="py-6 sm:py-8 md:px-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary block mb-2">
                  02 // Finance
                </span>
                <h3 className="text-lg font-bold uppercase tracking-tight text-foreground font-oswald mb-2">
                  Budgetary Approvals
                </h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  Scrutinizes and sanctions the annual operating budget, capital expenditures for research facilities, and audited financial balance sheets.
                </p>
              </div>

              <div className="py-6 sm:py-8 md:px-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary block mb-2">
                  03 // Academics
                </span>
                <h3 className="text-lg font-bold uppercase tracking-tight text-foreground font-oswald mb-2">
                  Programme Sanctions
                </h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  Approves recommendations of the Academic Council regarding new UG/PG engineering branches, research centers, and intake capacity adjustments.
                </p>
              </div>

              <div className="py-6 sm:py-8 md:px-6 last:md:pr-0">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary block mb-2">
                  04 // Governance
                </span>
                <h3 className="text-lg font-bold uppercase tracking-tight text-foreground font-oswald mb-2">
                  Appointments & Ethics
                </h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  Oversees faculty appointment standards, code of conduct compliance, student grievance cells, and institutional quality benchmarks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* WAVE DIVIDER 2: Canvas B (#F3F3F2 / #18181B) -> Canvas A (White / #121214) */}
      {/* ========================================================================= */}
      <div className="w-full overflow-hidden leading-none select-none bg-[#F3F3F2] dark:bg-[#18181B]">
        <svg
          viewBox="0 0 1440 72"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 sm:h-14 md:h-16 lg:h-20 block preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M 0,28 C 360,28 420,62 720,62 C 1020,62 1100,14 1440,26 L 1440,72 L 0,72 Z"
            className="fill-white dark:fill-[#121214]"
          />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 3: Canvas A (White / #121214) — 18-MEMBER OFFICIAL COUNCIL ROSTER */}
      {/* ========================================================================= */}
      <section className="w-full bg-white dark:bg-[#121214] py-10 sm:py-16 lg:py-20 transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          {/* Header & Filter Switcher */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 sm:mb-12">
            <div>
              <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-primary uppercase block mb-2">
                OFFICIAL STATUTORY ROSTER
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-foreground font-oswald leading-none">
                Governing Council Registry
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 border border-border p-1 rounded-tl-lg rounded-br-lg rounded-tr-xs rounded-bl-xs bg-foreground/[0.02]">
              {quorumCategories.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-3 py-1.5 text-xs font-oswald font-bold uppercase tracking-wider transition-all cursor-pointer rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs ${
                    selectedCategory === tab.id
                      ? "bg-primary text-white"
                      : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Open Transparent Data Grid (Zero Cards, divide-y) */}
          <div className="border-t border-b border-border divide-y divide-border">
            {filteredMembers.map((m) => (
              <div
                key={m.sno}
                className="py-4 sm:py-5 flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-6 hover:bg-foreground/[0.02] transition-colors"
              >
                <div className="flex items-center gap-4 md:w-5/12 min-w-0">
                  <span className="text-base sm:text-lg font-mono font-black text-primary shrink-0">
                    {m.sno}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-foreground font-oswald truncate">
                      {m.name}
                    </h3>
                    <span className="text-xs text-primary font-mono font-bold uppercase block sm:hidden">
                      {m.role}
                    </span>
                  </div>
                </div>

                <div className="hidden sm:block md:w-3/12">
                  <span className="inline-block text-xs font-mono uppercase px-2.5 py-0.5 bg-foreground/5 text-foreground border border-foreground/15 rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs">
                    {m.role}
                  </span>
                </div>

                <div className="md:w-4/12 text-left md:text-right">
                  <p className="text-xs sm:text-sm text-muted-foreground font-sans">
                    {m.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
