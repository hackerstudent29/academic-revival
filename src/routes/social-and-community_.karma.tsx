import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { SecondarySubNav } from "@/components/layout/SecondarySubNav";
import { DataGridContainer } from "@/components/ui/data-grid-table";
import { ExternalLink } from "lucide-react";
import { socialCommunityTabs } from "./social-and-community_.nss";

const title = "AICTE KARMA Mission | Social & Community | MSAJCE";
const description =
  "Kaushal Augmentation and Restructuring Mission of AICTE (KARMA) at Mohamed Sathak A.J. College of Engineering. Delivering NSQF-aligned skill training, domain-specific engineering certifications, and youth vocational empowerment.";

export const Route = createFileRoute("/social-and-community_/karma")({
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
  component: KARMAPage,
});

/* Wave Divider Component: Section A -> Section B */
function WaveDividerAB() {
  return (
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
  );
}

interface KarmaCourse {
  sNo: number;
  courseTitle: string;
  model: string;
  targetAudience: string;
  status: string;
}

const karmaCourses: KarmaCourse[] = [
  {
    sNo: 1,
    courseTitle: "AI - Machine Learning Developer",
    model: "Model 2 (Advance Level)",
    targetAudience: "Technical Students (Sem 4–7)",
    status: "In Process / Approved",
  },
  {
    sNo: 2,
    courseTitle: "Refrigeration and Air Conditioning Technician",
    model: "Model 2 (Advance Level)",
    targetAudience: "Technical Students (Sem 4–7)",
    status: "In Process / Approved",
  },
  {
    sNo: 3,
    courseTitle: "Additive Manufacturing Technician (3D Printing) (CTS)",
    model: "Model 2 (Advance Level)",
    targetAudience: "Technical Students (Sem 4–7)",
    status: "In Process / Approved",
  },
  {
    sNo: 4,
    courseTitle:
      "Certificate Course in Embedded System Design using ARM / Cortex Microcontroller",
    model: "Model 2 (Advance Level)",
    targetAudience: "Technical Students (Sem 4–7)",
    status: "In Process / Approved",
  },
  {
    sNo: 5,
    courseTitle:
      "Architectural Drafting and Basic 3D Design with Autodesk Revit (MES)",
    model: "Model 2 (Advance Level)",
    targetAudience: "Technical Students (Sem 4–7)",
    status: "In Process / Approved",
  },
  {
    sNo: 6,
    courseTitle: "Computer Hardware Network Maintenance",
    model: "Model 1 (School Dropouts)",
    targetAudience: "Class 10th Pass / ITI Candidates (30 Intake)",
    status: "Approved by AICTE",
  },
  {
    sNo: 7,
    courseTitle: "Refrigeration and Air Conditioning Technician",
    model: "Model 1 (School Dropouts)",
    targetAudience: "Class 10th Pass / ITI Candidates (30 Intake)",
    status: "Approved by AICTE",
  },
];

interface ApprovalDoc {
  sNo: number;
  details: string;
  category: string;
  weblink: string;
  linkText: string;
}

const approvalDocs: ApprovalDoc[] = [
  {
    sNo: 1,
    details: "Approval Letter – Model 1",
    category: "AICTE Approval Mandate",
    weblink:
      "https://facilities.aicte-india.org/KARMA/letter_r_karma_model1.php?app_id=MS05NzU2MzUx&model=model1",
    linkText: "View Model 1 Letter",
  },
  {
    sNo: 2,
    details: "Approval Letter – Model 2",
    category: "AICTE Approval Mandate",
    weblink:
      "https://facilities.aicte-india.org/KARMA/letter_r_karma_model2.php?app_id=MS05NzU2MzUx&model=model2",
    linkText: "View Model 2 Letter",
  },
  {
    sNo: 3,
    details: "Course Registration Details",
    category: "Official AICTE Registry",
    weblink:
      "https://facilities.aicte-india.org/KARMA/review_data.php?app_id=MS05NzU2MzUx",
    linkText: "Review Data Portal",
  },
];

const karmaObjectives = [
  {
    code: "O1",
    title: "Global Skills Capital & Certified Workforce",
    desc: "Strategically planned skill initiatives to create a skilled and certified workforce who not only contribute towards the growth of India but also drive the country into becoming the global skills capital.",
  },
  {
    code: "O2",
    title: "Off-Hour Higher Education Infrastructure Utilization",
    desc: "Encourage institutions to make the best use of available infrastructure of the higher education system during off-hours for skill training by re-aligning existing infrastructure, training aids, syllabus, and curriculum as per NSQF-aligned qualifications.",
  },
  {
    code: "O3",
    title: "Inclusive Eligibility Framework",
    desc: "This scheme is open and applicable to candidates who have passed at least 10th standard or ITIs, creating equitable access to modern vocational career pathways.",
  },
  {
    code: "O4",
    title: "Employment-Led Core Engineering Training",
    desc: "The training under the Scheme delivers domain-specific, demand-led skill training activity preferably in core engineering sectors directly leading to sustainable employment.",
  },
];

const skillingModels = [
  {
    code: "M1",
    title: "Model 1: Targeting School Dropouts",
    desc: "Targeting school dropouts after class 10th pass (both long back and recent). Re-engaging youth back into certified technical vocations to ensure livelihood security.",
  },
  {
    code: "M2",
    title: "Model 2: Advance Level Skilling for Technical Students",
    desc: "Targeting advance level skilling of students already studying in AICTE-approved technical institutions. Offered during 4th to 7th semesters for skill upgradation to make scholars industry-ready.",
  },
  {
    code: "M3",
    title: "Model 3: Hub & Spoke School Integration",
    desc: "Integrating school education with higher education for skilling students. Shifting from corrective to connective education by conducting once-a-week skill-based training for nearby school students.",
  },
];

function KARMAPage() {
  const navigate = useNavigate();

  const handleSelectTab = (tabId: string) => {
    if (tabId === "karma") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    navigate({ to: `/social-and-community/${tabId}` });
  };

  return (
    <main className="min-h-screen bg-background text-foreground pt-0 md:pt-1">
      {/* SECONDARY SUB-NAV HEADER */}
      <SecondarySubNav
        title="SOCIAL & COMMUNITY"
        tabs={socialCommunityTabs}
        activeTab="karma"
        onSelectTab={handleSelectTab}
        onTitleClick={() => handleSelectTab("karma")}
      />

      {/* ========================================================================= */}
      {/* 1. HERO BANNER: Standard MSAJCE Hero (Docked Flush at Bottom)             */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero_dsc6402.jpg"
            alt="AICTE KARMA Mission at Mohamed Sathak A.J. College of Engineering"
            className="w-full h-full object-cover object-center brightness-[0.70] filter contrast-105 select-none pointer-events-none rounded-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-3.5 sm:px-6 md:px-8 xl:px-12 pt-14 sm:pt-18 md:pt-20 pb-0">
          <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-4 py-3 sm:px-8 sm:py-5 md:px-10 md:py-6 shadow-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-t border-r border-border dark:border-white/15">
            <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none">
              AICTE KARMA Mission
            </h1>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION A: Primary Canvas (White / #121214) — Overview & Objectives   */}
      {/* ========================================================================= */}
      <section className="pt-10 sm:pt-14 md:pt-16 pb-8 sm:pb-12 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Kaushal Augmentation and Restructuring Mission of AICTE
            </h2>
          </div>

          {/* Full-Length Editorial Text Layout */}
          <div className="w-full space-y-4 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
            <p>
              AICTE is initiating “Kaushal Augmentation and Restructuring Mission of AICTE” (KARMA) for all AICTE approved institutions in the country to overcome the dual challenge of scarcity of skilled manpower in jobs and low skill level of those who are presently in jobs.
            </p>
          </div>

          {/* Strategic Objectives */}
          <div className="space-y-3 pt-2">
            <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
              Objectives of KARMA
            </h3>
            <div className="divide-y divide-border/40 font-libre">
              {karmaObjectives.map((obj) => (
                <div
                  key={obj.code}
                  className="py-3.5 sm:py-4 px-1 sm:px-2 flex items-start gap-3.5 sm:gap-4 hover:bg-foreground/[0.015] transition-colors"
                >
                  <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-foreground/10 text-foreground font-oswald font-black text-xs sm:text-sm mt-0.5 border border-foreground/20 shadow-2xs">
                    {obj.code}
                  </span>
                  <div className="space-y-1 flex-1">
                    <h4 className="font-oswald font-bold text-sm sm:text-base text-foreground uppercase tracking-tight">
                      {obj.title}
                    </h4>
                    <p className="w-full text-xs sm:text-sm text-foreground/80 font-libre leading-relaxed">
                      {obj.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Three Skilling Models Under Karma */}
          <div className="space-y-3 pt-4">
            <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
              Three Skilling Models Under KARMA
            </h3>
            <p className="w-full text-xs sm:text-sm text-foreground/85 font-libre leading-relaxed">
              AICTE has proposed three Models for Skilling of In-school students/ school dropouts, students pursuing Technical Education:
            </p>
            <div className="divide-y divide-border/40 font-libre">
              {skillingModels.map((m) => (
                <div
                  key={m.code}
                  className="py-3.5 sm:py-4 px-1 sm:px-2 flex items-start gap-3.5 sm:gap-4 hover:bg-foreground/[0.015] transition-colors"
                >
                  <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-oswald font-black text-xs sm:text-sm mt-0.5 border border-primary/20 shadow-2xs">
                    {m.code}
                  </span>
                  <div className="space-y-1 flex-1">
                    <h4 className="font-oswald font-bold text-sm sm:text-base text-foreground uppercase tracking-tight">
                      {m.title}
                    </h4>
                    <p className="w-full text-xs sm:text-sm text-foreground/80 font-libre leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wave Divider A -> B */}
      <WaveDividerAB />

      {/* ========================================================================= */}
      {/* 3. SECTION B: Secondary Canvas (#F3F3F2 / #18181B) — Approved Courses & Letters */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#F3F3F2] dark:bg-[#18181B] py-8 sm:py-12 md:py-14 transition-colors">
        <div className="mx-auto max-w-[1440px] px-3.5 sm:px-6 md:px-8 xl:px-12 space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              Approved Courses &amp; Institutional Sanction
            </h2>
          </div>

          <div className="w-full space-y-3 text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed">
            <p>
              The Mohamed Sathak A J College of Engineering was approved by AICTE to conduct 5 courses in Model 2 with an approved intake in: 1) AI -Machine learning Developer, 2) Refrigeration and Air Conditioning Technician, 3) Additive Manufacturing Technician (3D Printing), 4) Certificate Course in Embedded System Design using ARM/ Cortex Microcontroller and 5) Architectural Drafting and Basic 3D Design with Autodesk Revit (MES).
            </p>
            <p>
              In Model 1 the Institute was approved by AICTE to conduct 2 courses with an approved intake of 30 students namely: 1) Computer Hardware Network Maintenance and 2) Refrigeration And Air Conditioning Technician with 30 students intake.
            </p>
            <p className="font-semibold text-foreground">
              The Institute has registered the 5 courses in Model 2 and currently the courses are in process.
            </p>
          </div>

          {/* Approved Courses Table */}
          <div className="space-y-3 pt-2">
            <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
              Registered &amp; Approved Skill Courses
            </h3>
            <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
              <div className="overflow-x-auto bg-transparent">
                <table className="w-full text-left border-collapse min-w-[700px] text-xs sm:text-sm">
                  <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                    <tr>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16 text-center">
                        S.No
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                        Course Title
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                        KARMA Model
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                        Target / Approved Intake
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-right">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40 font-libre">
                    {karmaCourses.map((c) => (
                      <tr
                        key={c.sNo}
                        className="hover:bg-foreground/[0.02] transition-colors"
                      >
                        <td className="py-3.5 px-4 text-center font-mono font-bold text-muted-foreground text-xs whitespace-nowrap">
                          {String(c.sNo).padStart(2, "0")}
                        </td>
                        <td className="py-3.5 px-4">
                          <p className="font-libre text-xs sm:text-sm text-foreground font-semibold leading-relaxed">
                            {c.courseTitle}
                          </p>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="text-[11px] font-bold font-oswald uppercase tracking-wider px-2 py-0.5 rounded-tl-md rounded-br-md rounded-tr-2xs rounded-bl-2xs bg-primary/10 text-primary border border-primary/20">
                            {c.model}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-xs text-foreground/80">
                          {c.targetAudience}
                        </td>
                        <td className="py-3.5 px-4 text-right whitespace-nowrap font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                          {c.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DataGridContainer>
          </div>

          {/* AICTE Official Approval Documentation Table */}
          <div className="space-y-3 pt-6">
            <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
              AICTE Official Approval Documentation
            </h3>
            <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
              <div className="overflow-x-auto bg-transparent">
                <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                  <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                    <tr>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-20 text-center">
                        S.No.
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                        Details / Document
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider">
                        Category
                      </th>
                      <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-right w-44">
                        Weblink
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40 font-libre">
                    {approvalDocs.map((doc) => (
                      <tr
                        key={doc.sNo}
                        className="hover:bg-foreground/[0.02] transition-colors"
                      >
                        <td className="py-4 px-4 text-center font-mono font-bold text-muted-foreground text-xs whitespace-nowrap">
                          {String(doc.sNo).padStart(2, "0")}
                        </td>
                        <td className="py-4 px-4">
                          <p className="font-libre text-xs sm:text-sm text-foreground font-semibold leading-relaxed">
                            {doc.details}
                          </p>
                        </td>
                        <td className="py-4 px-4">
                          <p className="font-libre text-xs text-foreground/80 leading-relaxed">
                            {doc.category}
                          </p>
                        </td>
                        <td className="py-4 px-4 text-right whitespace-nowrap">
                          <a
                            href={doc.weblink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold font-oswald uppercase tracking-wider rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs bg-primary text-white hover:bg-primary/90 transition-colors shadow-2xs"
                          >
                            <span>{doc.linkText}</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
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
    </main>
  );
}
