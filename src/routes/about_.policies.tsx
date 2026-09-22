import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldAlert,
  FileText,
  Scale,
  Leaf,
  Users,
  Lock,
  GraduationCap,
  Award,
  CheckCircle2,
  AlertTriangle,
  Mail,
  Phone,
} from "lucide-react";

const title = "Institutional Policies — M.S.A.J. College of Engineering, Chennai";
const description =
  "Official institutional policies, code of conduct, anti-ragging regulations, research ethics, and statutory compliance frameworks of Mohamed Sathak A.J. College of Engineering.";

export const Route = createFileRoute("/about_/policies")({
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
  component: InstitutionalPoliciesPage,
});

const policyItems = [
  {
    num: "01",
    title: "Code of Conduct & Professional Ethics",
    category: "Campus Integrity",
    summary:
      "Comprehensive behavioral standards and ethical guidelines governing all undergraduate and postgraduate students, faculty members, and administrative staff across academic, residential, and digital spaces.",
    directives: [
      "Mandatory minimum 75% attendance per semester as per Anna University regulations",
      "Strict compliance with professional dress code and visible ID card display at all times",
      "Uncompromising academic integrity during continuous internal assessments and examinations",
    ],
  },
  {
    num: "02",
    title: "Anti-Ragging & Campus Safety Regulations",
    category: "Zero Tolerance",
    summary:
      "Absolute zero-tolerance policy against any form of ragging, harassment, or intimidation, strictly complying with the Supreme Court of India directives, UGC regulations, and AICTE statutory norms.",
    directives: [
      "24/7 active Anti-Ragging Committee and mobile flying squads across campus and hostels",
      "Mandatory online anti-ragging affidavits submitted by all students and parents annually",
      "Immediate disciplinary and statutory police reporting for any reported violation",
    ],
  },
  {
    num: "03",
    title: "Internal Complaints Committee (ICC) & POSH Policy",
    category: "Gender Equity",
    summary:
      "Constituted under the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, ensuring a safe, respectful, and empowering environment for female students and employees.",
    directives: [
      "Confidential and time-bound inquiry procedures for all received representations",
      "Regular gender sensitization workshops and awareness symposia",
      "Empowered committee comprising senior female faculty, student nominees, and external legal experts",
    ],
  },
  {
    num: "04",
    title: "Research Ethics & Intellectual Property (IPR) Policy",
    category: "Applied R&D",
    summary:
      "Framework promoting high-impact research, sponsored industrial consultancy, and intellectual property creation while upholding international standards of research integrity and plagiarism prevention.",
    directives: [
      "Financial incentives and fee subsidies for faculty and students filing patents",
      "Mandatory similarity checks via licensed plagiarism detection tools prior to paper submission",
      "Incubation and seed grant support for student innovations transitioning into tech startups",
    ],
  },
  {
    num: "05",
    title: "Student Grievance Redressal Framework",
    category: "Welfare & Equity",
    summary:
      "Transparent multi-tier institutional grievance redressal system providing students with impartial, objective, and expeditious resolution of academic and administrative concerns.",
    directives: [
      "Digital online grievance portal accessible via student portal with tracking ID",
      "Departmental mentor-mentee grievance screening meetings conducted fortnightly",
      "Independent Ombudsman appointed as per AICTE Redressal of Grievance of Students Regulations",
    ],
  },
  {
    num: "06",
    title: "Green Campus, Environment & Sustainability Policy",
    category: "Eco-Stewardship",
    summary:
      "Actionable roadmap for environmental conservation across our 70-acre campus, emphasizing renewable solar energy, zero-plastic usage, rainwater harvesting, and responsible e-waste management.",
    directives: [
      "Rooftop solar photovoltaic power generation contributing clean energy to the grid",
      "Comprehensive rainwater harvesting percolation ponds across campus grounds",
      "Certified e-waste segregation and recycling through authorized state pollution control recyclers",
    ],
  },
  {
    num: "07",
    title: "Information Security & IT Acceptable Use Policy",
    category: "Digital Security",
    summary:
      "Standards governing the safe and ethical utilization of institutional computing resources, campus-wide fiber internet, Wi-Fi networks, and digital data storage.",
    directives: [
      "Prohibition of unauthorized network access, peer-to-peer torrenting, and copyright infringement",
      "Strict data privacy standards for student academic records and institutional research assets",
      "Multi-factor authentication required for institutional email and learning management portals",
    ],
  },
  {
    num: "08",
    title: "Examination Discipline & Evaluation Guidelines",
    category: "Academic Quality",
    summary:
      "Strict procedures governing the smooth conduct of internal assessments and Anna University semester examinations, ensuring total transparency and fairness.",
    directives: [
      "CCTV surveillance in all central examination halls and confidential exam cell sections",
      "Zero tolerance for examination malpractice with immediate debarment as per Anna University rules",
      "Audited centralized evaluation and student performance review mechanisms",
    ],
  },
];

export function InstitutionalPoliciesPage() {
  return (
    <main className="bg-white dark:bg-[#121214] text-foreground min-h-screen pt-0 md:pt-1 font-sans selection:bg-primary selection:text-white">
      {/* ========================================================================= */}
      {/* SECTION 1: Canvas A (White / #121214) — POLICIES & CODE OF CONDUCT HERO   */}
      {/* ========================================================================= */}
      <section className="w-full pt-2 md:pt-6 pb-12 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          {/* Header Bar */}
          <div className="border-b border-border pb-6 mb-8 sm:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-foreground font-oswald leading-[0.95]">
              Institutional Policies <br />
              <span className="text-primary font-oswald">&amp; Code of Conduct</span>
            </h1>
          </div>

          {/* Hero Broadsheet Grid (Strictly Zero Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="border-l-4 border-primary pl-4 sm:pl-6 py-2">
                <p className="text-lg sm:text-xl md:text-2xl font-bold font-oswald uppercase text-foreground leading-snug tracking-tight">
                  Mohamed Sathak A.J. College of Engineering operates under strict statutory
                  governance frameworks that ensure academic integrity, student safety, inclusive
                  welfare, and operational excellence.
                </p>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                <p>
                  Ratified by the Governing Council in full compliance with the All India Council
                  for Technical Education (AICTE), University Grants Commission (UGC), and Anna
                  University regulations, our policies govern all aspects of campus life.
                </p>
                <p>
                  From zero-tolerance anti-ragging mandates and confidential internal complaints
                  procedures to research ethics, green campus protocols, and digital security rules,
                  these charters maintain our reputation as a premier seat of learning.
                </p>
              </div>

              {/* 4 Core Statutory Badges (divide-x) */}
              <div className="pt-4 border-t border-border">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 divide-x divide-border">
                  <div className="first:pl-0 pl-4">
                    <span className="text-[10px] sm:text-xs font-mono uppercase text-muted-foreground block">
                      AICTE
                    </span>
                    <span className="text-lg sm:text-xl font-black text-primary font-oswald block mt-0.5">
                      COMPLIANT
                    </span>
                    <span className="text-[11px] text-foreground/70 font-sans block">
                      Statutory Norms
                    </span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[10px] sm:text-xs font-mono uppercase text-muted-foreground block">
                      Anti-Ragging
                    </span>
                    <span className="text-lg sm:text-xl font-black text-primary font-oswald block mt-0.5">
                      ZERO TOLERANCE
                    </span>
                    <span className="text-[11px] text-foreground/70 font-sans block">
                      Supreme Court Mandate
                    </span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[10px] sm:text-xs font-mono uppercase text-muted-foreground block">
                      Anna University
                    </span>
                    <span className="text-lg sm:text-xl font-black text-primary font-oswald block mt-0.5">
                      AFFILIATED
                    </span>
                    <span className="text-[11px] text-foreground/70 font-sans block">
                      Academic Regulations
                    </span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[10px] sm:text-xs font-mono uppercase text-muted-foreground block">
                      Quality Audit
                    </span>
                    <span className="text-lg sm:text-xl font-black text-primary font-oswald block mt-0.5">
                      ISO 9001:2015
                    </span>
                    <span className="text-[11px] text-foreground/70 font-sans block">
                      Certified Campus
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Signature Asymmetrical Campus Image */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="relative w-full rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs overflow-hidden border border-border shadow-md bg-muted aspect-[4/3]">
                <img
                  src="/images/accreditations_campus.jpg"
                  alt="MSAJCE Campus Statutory Compliance"
                  className="w-full h-full object-cover pointer-events-none select-none"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/eligibility_hero.jpg";
                  }}
                />
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-muted-foreground px-1 border-b border-border pb-2">
                <span className="uppercase tracking-wider">Statutory Code of Conduct</span>
                <span className="text-primary font-bold">Approved by Governing Council</span>
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
      {/* SECTION 2: Canvas B (#F3F3F2 / #18181B) — CORE INSTITUTIONAL POLICIES     */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#F3F3F2] dark:bg-[#18181B] py-10 sm:py-16 lg:py-20 transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="max-w-3xl mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Institutional Regulations
            </h2>
          </div>

          {/* Open Policy Grid (Strictly Zero Cards, divide-y) */}
          <div className="border-t border-b border-border divide-y divide-border">
            {policyItems.map((policy) => (
              <div
                key={policy.num}
                className="py-6 sm:py-8 flex flex-col lg:flex-row lg:items-start justify-between gap-4 lg:gap-8 hover:bg-foreground/[0.02] transition-colors"
              >
                <div className="lg:w-4/12">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-mono font-black text-primary">#{policy.num}</span>
                    <span className="text-[11px] font-mono uppercase px-2 py-0.5 bg-foreground/5 text-muted-foreground rounded-xs">
                      {policy.category}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-foreground font-oswald mt-1">
                    {policy.title}
                  </h3>
                </div>

                <div className="lg:w-8/12 space-y-3">
                  <p className="text-sm sm:text-base text-muted-foreground font-sans leading-relaxed">
                    {policy.summary}
                  </p>

                  <div className="border-t border-border/80 pt-3">
                    <span className="text-[11px] font-mono uppercase text-foreground font-bold block mb-1.5">
                      Key Directives & Enforcements:
                    </span>
                    <ul className="space-y-1">
                      {policy.directives.map((dir, idx) => (
                        <li
                          key={idx}
                          className="text-xs sm:text-sm text-muted-foreground font-sans flex items-start gap-2"
                        >
                          <span className="text-primary font-bold mt-0.5">•</span>
                          <span>{dir}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
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
      {/* SECTION 3: Canvas A (White / #121214) — STATUTORY OVERSIGHT & REPORTING   */}
      {/* ========================================================================= */}
      <section className="w-full bg-white dark:bg-[#121214] py-10 sm:py-16 lg:py-20 transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                Reporting &amp; Redressal
              </h2>
              <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
                Students, parents, and staff members may report grievances, policy violations, or
                seek confidential counsel through our dedicated statutory desks.
              </p>
            </div>

            <div className="lg:col-span-7 border-t border-b border-border divide-y divide-border">
              <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-base font-bold uppercase tracking-tight text-foreground font-oswald">
                    Anti-Ragging Squad Hotline
                  </h4>
                  <span className="text-xs text-muted-foreground font-sans">
                    Available 24/7 for campus and residential hostel assistance
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-primary">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span>044 - 2747 0021 / 23 / 24</span>
                </div>
              </div>

              <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-base font-bold uppercase tracking-tight text-foreground font-oswald">
                    Internal Complaints Committee (ICC)
                  </h4>
                  <span className="text-xs text-muted-foreground font-sans">
                    Confidential gender safety and POSH redressal
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-primary">
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>icc@msajce-edu.in</span>
                </div>
              </div>

              <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-base font-bold uppercase tracking-tight text-foreground font-oswald">
                    Student Grievance Redressal Cell
                  </h4>
                  <span className="text-xs text-muted-foreground font-sans">
                    Academic, evaluation, and administrative queries
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-primary">
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>grievance@msajce-edu.in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
