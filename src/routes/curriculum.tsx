import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink, FileText, Download, X, ArrowRight, Search } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { DataGridContainer } from "@/components/ui/data-grid-table";

const title = "Curriculum & Syllabus | MSAJCE";
const description =
  "Official autonomous and Anna University regulation curricula, R-2024, R-2021, and R-2017 syllabi across undergraduate and postgraduate engineering departments at MSAJCE.";

export const Route = createFileRoute("/curriculum")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: CurriculumPage,
});

// Interactive PDF Viewer Dialog Component with Liquid Ocean Wave Fill
function PdfViewerModal({
  triggerLabel,
  pdfUrl,
  title,
  departmentName,
}: {
  triggerLabel: string;
  pdfUrl: string;
  title: string;
  departmentName: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="group relative overflow-hidden inline-flex items-center justify-center gap-1.5 h-8 px-3 text-[11px] font-bold uppercase tracking-wider font-oswald cursor-pointer transition-all duration-300 select-none rounded-tl-lg rounded-br-lg rounded-tr-2xs rounded-bl-2xs border border-stone-300 dark:border-neutral-700 bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-white hover:text-white shadow-2xs"
        >
          {/* Liquid Ocean Wave Fill Overlay */}
          <span className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-tl-lg rounded-br-lg rounded-tr-2xs rounded-bl-2xs">
            <span className="absolute inset-x-0 top-0 h-[140%] bg-[#9E2339] translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <span className="absolute -top-3.5 left-0 w-[200%] h-4 pointer-events-none block">
                <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,-20 1200,40 L1200,120 L0,120 Z" />
                </svg>
              </span>
              <span className="absolute -top-4 left-0 w-[200%] h-5 opacity-40 pointer-events-none block">
                <svg className="w-full h-full fill-[#9E2339] animate-ocean-wave-reverse" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M0,30 C200,-30 400,90 600,10 C800,-40 1000,70 1200,20 L1200,120 L0,120 Z" />
                </svg>
              </span>
            </span>
          </span>

          <span className="relative z-10 flex items-center gap-1">
            <FileText className="w-3.5 h-3.5 shrink-0" />
            {triggerLabel}
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-[95vw] h-[92vh] p-0 flex flex-col overflow-hidden bg-background border border-border shadow-2xl [&>button]:hidden rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
        {/* Header */}
        <div className="flex items-center justify-between bg-foreground/5 px-5 py-3.5 border-b border-border">
          <div className="flex flex-col">
            <h2 className="text-lg font-black uppercase tracking-tight leading-none text-primary font-oswald">
              {departmentName}
            </h2>
            <p className="text-[11px] font-bold uppercase tracking-widest text-foreground font-oswald mt-1">
              {title} Document
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold font-oswald uppercase tracking-wider bg-primary text-white rounded-tl-lg rounded-br-lg rounded-tr-2xs rounded-bl-2xs hover:bg-primary/90 transition-colors"
            >
              <Download className="w-3.5 h-3.5" /> Download PDF
            </a>
            <DialogClose asChild>
              <button
                type="button"
                className="p-1.5 text-foreground/70 hover:text-foreground hover:bg-foreground/10 transition-colors rounded-tl-lg rounded-br-lg rounded-tr-2xs rounded-bl-2xs cursor-pointer"
              >
                <X className="w-5 h-5" />
                <span className="sr-only">Close</span>
              </button>
            </DialogClose>
          </div>
        </div>

        {/* Mobile View Notice */}
        <div className="sm:hidden flex items-center justify-between px-4 py-2 bg-foreground/10 text-foreground border-b border-border font-oswald">
          <span className="text-xs font-bold uppercase tracking-wide">Official Syllabus PDF</span>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-black uppercase text-primary border-b border-primary pb-0.5"
          >
            Open File <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* PDF Iframe */}
        <div className="flex-1 w-full relative bg-muted/20">
          <iframe
            src={`${pdfUrl}#toolbar=0`}
            className="absolute inset-0 w-full h-full border-none"
            title={`${title} - ${departmentName}`}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Organic Wave Divider: Canvas A -> Canvas B
function WaveAB() {
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

interface DepartmentCurriculum {
  name: string;
  degree: string;
  code: string;
  slug: string;
  pdf2024: string;
  pdf2021: string;
  pdf2017: string;
}

const ugDepartments: DepartmentCurriculum[] = [
  {
    name: "Civil Engineering",
    degree: "B.E.",
    code: "CIVIL",
    slug: "civil-engineering",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/101CIVIL24-25.pdf",
    pdf2021: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2017: "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf",
  },
  {
    name: "Computer Science & Engineering",
    degree: "B.E.",
    code: "CSE",
    slug: "computer-science-and-engineering",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/102CSE24-25.pdf",
    pdf2021: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2017: "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf",
  },
  {
    name: "CSE (AI & Machine Learning)",
    degree: "B.E.",
    code: "AIML",
    slug: "cse-aiml",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/103AIML24-25.pdf",
    pdf2021: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2017: "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf",
  },
  {
    name: "CSE (Cyber Security)",
    degree: "B.E.",
    code: "CSCS",
    slug: "cse-cyber-security",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/104CSCS24-25.pdf",
    pdf2021: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2017: "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf",
  },
  {
    name: "Electrical & Electronics Engineering",
    degree: "B.E.",
    code: "EEE",
    slug: "electrical-and-electronics-engineering",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/105EEE24-25.pdf",
    pdf2021: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2017: "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf",
  },
  {
    name: "Electronics & Communication Engineering",
    degree: "B.E.",
    code: "ECE",
    slug: "electronics-and-communication-engineering",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/106ECE24-25.pdf",
    pdf2021: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2017: "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf",
  },
  {
    name: "Mechanical Engineering",
    degree: "B.E.",
    code: "MECH",
    slug: "mechanical-engineering",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/107MECH24-25.pdf",
    pdf2021: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2017: "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf",
  },
  {
    name: "Artificial Intelligence & Data Science",
    degree: "B.Tech",
    code: "AI&DS",
    slug: "artificial-intelligence-and-data-science",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/201AIDS24-25.pdf",
    pdf2021: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2017: "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf",
  },
  {
    name: "Computer Science & Business Systems",
    degree: "B.Tech",
    code: "CSBS",
    slug: "computer-science-and-business-systems",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/202CSBS24-25.pdf",
    pdf2021: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2017: "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf",
  },
  {
    name: "Advanced Communication Technology",
    degree: "B.Tech",
    code: "ACT",
    slug: "ece-advanced-communication",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/203ACT24-25.pdf",
    pdf2021: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2017: "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf",
  },
  {
    name: "Information Technology",
    degree: "B.Tech",
    code: "IT",
    slug: "information-technology",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/205IT24-25.pdf",
    pdf2021: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2017: "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf",
  },
];

const pgDepartments: DepartmentCurriculum[] = [
  {
    name: "Computer Science & Engineering",
    degree: "M.E.",
    code: "M.E. CSE",
    slug: "pg-me-cse",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/MECSE24-25.pdf",
    pdf2021: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2017: "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf",
  },
  {
    name: "Structural Engineering",
    degree: "M.E.",
    code: "M.E. STRUCTURAL",
    slug: "pg-me-structural-engineering",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/MECIVIL24-25.pdf",
    pdf2021: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2017: "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf",
  },
  {
    name: "VLSI Design",
    degree: "M.E.",
    code: "M.E. VLSI",
    slug: "pg-me-vlsi-design",
    pdf2024: "https://www.msajce-edu.in/uploads/autonomous/204VLSI24-25.pdf",
    pdf2021: "https://www.msajce-edu.in/uploads/academics/2021Regulation.pdf",
    pdf2017: "https://www.msajce-edu.in/uploads/academics/2017Regulation.pdf",
  },
];

export function CurriculumPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUG = ugDepartments.filter(
    (dept) =>
      dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dept.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dept.degree.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPG = pgDepartments.filter(
    (dept) =>
      dept.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dept.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dept.degree.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="bg-white dark:bg-[#121214] text-foreground font-libre antialiased min-h-screen flex flex-col selection:bg-primary selection:text-white">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER: Vision & Mission Style with Bottom-Docked Title Container */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/procedure_hero.jpg"
            alt="Mohamed Sathak A.J. College of Engineering Campus"
            className="w-full h-full object-cover object-center brightness-[0.75] filter contrast-105 select-none pointer-events-none rounded-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        </div>

        {/* Title Container: Docked Flush at Bottom of Hero */}
        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-3.5 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 pb-0">
          <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-5 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 shadow-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-t border-r border-border dark:border-white/15">
            <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none">
              CURRICULUM &amp; SYLLABUS
            </h1>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION A: UNDERGRADUATE PROGRAMMES (Canvas A: White / #121214)         */}
      {/* ========================================================================= */}
      <section className="bg-white dark:bg-[#121214] py-10 sm:py-14 md:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          {/* Section Header with Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-6 sm:mb-8 pb-3 border-b border-border/80">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
                UNDERGRADUATE PROGRAMMES (UG)
              </h2>
              <p className="text-xs sm:text-sm font-libre text-foreground/80 font-medium pt-1">
                Autonomous R-2024 regulations alongside Anna University R-2021 &amp; R-2017 schemes
              </p>
            </div>

            {/* Quick Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search department or degree..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-background dark:bg-[#18181B] border border-border rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs text-xs sm:text-sm font-medium font-libre focus:outline-none focus:border-primary transition-colors text-foreground"
              />
            </div>
          </div>

          {/* UG Table Component */}
          <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
            <div className="overflow-x-auto bg-transparent">
              <table className="w-full text-left border-collapse min-w-[760px] text-xs sm:text-sm">
                <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                  <tr>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16 text-center">
                      S.No
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[280px]">
                      Department / Programme
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-36 text-center">
                      Regulation 2024
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-36 text-center">
                      Regulation 2021
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-36 text-center">
                      Regulation 2017
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-36 text-right">
                      Department Page
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40 font-libre">
                  {filteredUG.map((dept, index) => (
                    <tr key={dept.code} className="hover:bg-foreground/[0.02] transition-colors">
                      <td className="px-4 py-3.5 font-oswald font-bold text-primary text-sm whitespace-nowrap text-center align-middle w-16">
                        {index + 1}
                      </td>
                      <td className="px-4 py-3.5 align-middle min-w-[280px]">
                        <div>
                          <span className="font-libre font-bold text-foreground text-sm block">
                            {dept.name}
                          </span>
                          <span className="text-xs font-libre font-semibold text-primary">
                            {dept.degree}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3.5 text-center align-middle whitespace-nowrap w-36">
                        <PdfViewerModal
                          triggerLabel="R-2024 PDF"
                          pdfUrl={dept.pdf2024}
                          title="Autonomous R-2024 Syllabus"
                          departmentName={dept.name}
                        />
                      </td>
                      <td className="px-4 py-3.5 text-center align-middle whitespace-nowrap w-36">
                        <PdfViewerModal
                          triggerLabel="R-2021 PDF"
                          pdfUrl={dept.pdf2021}
                          title="Anna University R-2021 Syllabus"
                          departmentName={dept.name}
                        />
                      </td>
                      <td className="px-4 py-3.5 text-center align-middle whitespace-nowrap w-36">
                        <PdfViewerModal
                          triggerLabel="R-2017 PDF"
                          pdfUrl={dept.pdf2017}
                          title="Anna University R-2017 Syllabus"
                          departmentName={dept.name}
                        />
                      </td>
                      <td className="px-4 py-3.5 text-right align-middle whitespace-nowrap w-36">
                        <Link
                          to="/programmes/$courseId"
                          params={{ courseId: dept.slug }}
                          className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary font-oswald hover:underline"
                        >
                          View Dept <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                  {filteredUG.length === 0 && (
                    <tr>
                      <td colSpan={6} className="px-4 py-8 text-center text-foreground/60 font-libre text-sm">
                        No undergraduate departments match "{searchTerm}".
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </DataGridContainer>
        </div>
      </section>

      {/* Wave Transition A -> B */}
      <WaveAB />

      {/* ========================================================================= */}
      {/* 3. SECTION B: POSTGRADUATE PROGRAMMES (Canvas B: #F3F3F2 / #18181B)       */}
      {/* ========================================================================= */}
      <section className="bg-[#F3F3F2] dark:bg-[#18181B] py-10 sm:py-14 md:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 xl:px-12">
          {/* Section Header */}
          <div className="mb-6 sm:mb-8 pb-3 border-b border-border/80">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary">
              POSTGRADUATE PROGRAMMES (PG)
            </h2>
            <p className="text-xs sm:text-sm font-libre text-foreground/80 font-medium pt-1">
              Advanced Master of Engineering autonomous regulations and university syllabi schemes
            </p>
          </div>

          {/* PG Table Component */}
          <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
            <div className="overflow-x-auto bg-transparent">
              <table className="w-full text-left border-collapse min-w-[760px] text-xs sm:text-sm">
                <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                  <tr>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16 text-center">
                      S.No
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap min-w-[280px]">
                      Department / Programme
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-36 text-center">
                      Regulation 2024
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-36 text-center">
                      Regulation 2021
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-36 text-center">
                      Regulation 2017
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-36 text-right">
                      Department Page
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40 font-libre">
                  {filteredPG.map((dept, index) => (
                    <tr key={dept.code} className="hover:bg-foreground/[0.02] transition-colors">
                      <td className="px-4 py-3.5 font-oswald font-bold text-primary text-sm whitespace-nowrap text-center align-middle w-16">
                        {index + 1}
                      </td>
                      <td className="px-4 py-3.5 align-middle min-w-[280px]">
                        <div>
                          <span className="font-libre font-bold text-foreground text-sm block">
                            {dept.name}
                          </span>
                          <span className="text-xs font-libre font-semibold text-primary">
                            {dept.degree}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3.5 text-center align-middle whitespace-nowrap w-36">
                        <PdfViewerModal
                          triggerLabel="R-2024 PDF"
                          pdfUrl={dept.pdf2024}
                          title="Autonomous R-2024 Syllabus"
                          departmentName={dept.name}
                        />
                      </td>
                      <td className="px-4 py-3.5 text-center align-middle whitespace-nowrap w-36">
                        <PdfViewerModal
                          triggerLabel="R-2021 PDF"
                          pdfUrl={dept.pdf2021}
                          title="Anna University R-2021 Syllabus"
                          departmentName={dept.name}
                        />
                      </td>
                      <td className="px-4 py-3.5 text-center align-middle whitespace-nowrap w-36">
                        <PdfViewerModal
                          triggerLabel="R-2017 PDF"
                          pdfUrl={dept.pdf2017}
                          title="Anna University R-2017 Syllabus"
                          departmentName={dept.name}
                        />
                      </td>
                      <td className="px-4 py-3.5 text-right align-middle whitespace-nowrap w-36">
                        <Link
                          to="/programmes/$courseId"
                          params={{ courseId: dept.slug }}
                          className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary font-oswald hover:underline"
                        >
                          View Dept <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                  {filteredPG.length === 0 && (
                    <tr>
                      <td colSpan={6} className="px-4 py-8 text-center text-foreground/60 font-libre text-sm">
                        No postgraduate departments match "{searchTerm}".
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </DataGridContainer>
        </div>
      </section>
    </main>
  );
}
