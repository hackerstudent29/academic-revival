import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, HeartHandshake, Award } from "lucide-react";
import { DataGridContainer } from "@/components/ui/data-grid-table";
import { AboutSubNav } from "@/components/layout/AboutSubNav";

const title = "Committees & Cells — M.S.A.J. College of Engineering, Chennai";
const description =
  "Overview of statutory committees, student welfare cells, academic advisory bodies, and grievance redressal mechanisms at Mohamed Sathak A.J. College of Engineering.";

export const Route = createFileRoute("/about_/committees")({
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
  component: CommitteesOverviewPage,
});

interface CommitteeOverviewItem {
  sno: number;
  name: string;
  category: string;
  convenor: string;
  email: string;
  link: string;
}

const committeeList: CommitteeOverviewItem[] = [
  {
    sno: 1,
    name: "Academic Advisory Committee",
    category: "Academic & Governance",
    convenor: "Head - Academics",
    email: "academics@msajce.edu.in",
    link: "/about/academic-advisory-committee",
  },
  {
    sno: 2,
    name: "Grievance Redressal Cell",
    category: "Student Welfare & Compliance",
    convenor: "Principal & Senior Faculty Panel",
    email: "grievance@msajce.edu.in",
    link: "/about/grievance-cell",
  },
  {
    sno: 3,
    name: "Anti-Ragging Committee",
    category: "Statutory & Safety",
    convenor: "Nodal Officer / Principal",
    email: "antiragging@msajce.edu.in",
    link: "/about/anti-ragging-committee",
  },
  {
    sno: 4,
    name: "Women's Empowerment Cell (WEC)",
    category: "Gender Equity & Welfare",
    convenor: "Convener - WEC",
    email: "wec@msajce.edu.in",
    link: "/about/womens-empowerment-cell",
  },
  {
    sno: 5,
    name: "Internal Quality Assurance Cell (IQAC)",
    category: "Quality Governance",
    convenor: "Head - IQAC",
    email: "iqac@msajce.edu.in",
    link: "/naac/iqac",
  },
  {
    sno: 6,
    name: "Institution's Innovation Council (IIC)",
    category: "Research & Innovation",
    convenor: "Head - Research & IIC",
    email: "iic@msajce.edu.in",
    link: "/research",
  },
  {
    sno: 7,
    name: "Equal Opportunity Cell (EOC)",
    category: "Student Welfare & Equity",
    convenor: "Nodal Officer - EOC",
    email: "eoc@msajce.edu.in",
    link: "/about/committees",
  },
  {
    sno: 8,
    name: "SC / ST Protection Cell",
    category: "Statutory Compliance",
    convenor: "Nodal Officer",
    email: "scstcell@msajce.edu.in",
    link: "/about/committees",
  },
  {
    sno: 9,
    name: "Library Advisory Committee",
    category: "Academic Support",
    convenor: "Librarian / Convener",
    email: "library@msajce.edu.in",
    link: "/library",
  },
  {
    sno: 10,
    name: "Disciplinary Committee",
    category: "Student Conduct & Discipline",
    convenor: "Head - Administration",
    email: "discipline@msajce.edu.in",
    link: "/about/committees",
  },
];

export function CommitteesOverviewPage() {
  return (
    <main className="bg-white dark:bg-[#121214] text-foreground font-libre antialiased selection:bg-primary selection:text-white min-h-screen pt-0 md:pt-1">
      {/* Sticky Secondary About Sub-Nav */}
      <AboutSubNav />

      {/* ========================================================================= */}
      {/* 1. HERO BANNER: Title Docked Flush with Hero Section End                  */}
      {/* ========================================================================= */}
      <section className="relative w-full overflow-hidden bg-[#18181B] min-h-[300px] sm:min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/procedure_hero.jpg"
            alt="Mohamed Sathak A.J. College of Engineering Campus Committees"
            className="w-full h-full object-cover object-center brightness-[0.75] filter contrast-105 select-none pointer-events-none rounded-none"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-4 sm:px-6 md:px-8 xl:px-12 pt-16 sm:pt-20 pb-0">
          <div className="inline-block bg-white/95 dark:bg-[#121214]/95 backdrop-blur-md border-l-4 border-primary px-5 py-4 sm:px-8 sm:py-5 md:px-10 md:py-6 shadow-2xl max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl border-t border-r border-border dark:border-white/15">
            <h1 className="font-oswald text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-foreground tracking-tight leading-none">
              Committees & Cells
            </h1>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SECTION A: Overview & Directory Table                                  */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-18 lg:py-20 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-8 w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-4">
              Institutional Committees & Statutory Bodies
            </h2>
            <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full">
              Mohamed Sathak A.J. College of Engineering has established structured committees and specialized cells to oversee academic excellence, student welfare, campus safety, anti-ragging mandates, gender equity, and institutional quality assurances in full alignment with UGC, AICTE, and Anna University regulations.
            </p>
          </div>

          {/* Official Publications Standard DataGrid Table */}
          <DataGridContainer className="bg-white dark:bg-[#121214] shadow-xs">
            <div className="overflow-x-auto bg-transparent">
              <table className="w-full text-left border-collapse min-w-[650px] text-xs sm:text-sm">
                <thead className="bg-stone-200/90 dark:bg-neutral-800 text-foreground dark:text-neutral-100 uppercase text-[12px] font-bold font-oswald tracking-wider border-b border-stone-300 dark:border-neutral-700">
                  <tr>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap w-16">
                      S.No
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap">
                      Committee / Cell Name
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap">
                      Category
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap">
                      Convenor / Lead
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap">
                      Official Contact
                    </th>
                    <th className="py-3.5 px-4 font-oswald font-black uppercase text-xs tracking-wider whitespace-nowrap text-right">
                      View Details
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40 font-libre">
                  {committeeList.map((item) => (
                    <tr key={item.sno} className="hover:bg-foreground/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-oswald font-bold text-primary text-xs sm:text-sm whitespace-nowrap">
                        {item.sno}
                      </td>
                      <td className="py-3.5 px-4 font-libre font-bold text-foreground text-xs sm:text-sm">
                        {item.name}
                      </td>
                      <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-foreground">
                        {item.category}
                      </td>
                      <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-muted-foreground">
                        {item.convenor}
                      </td>
                      <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-primary">
                        <a href={`mailto:${item.email}`} className="hover:underline">
                          {item.email}
                        </a>
                      </td>
                      <td className="py-3.5 px-4 font-libre text-xs sm:text-sm text-right whitespace-nowrap">
                        <Link
                          to={item.link}
                          className="inline-flex items-center gap-1 font-oswald font-bold uppercase text-primary hover:underline text-xs tracking-wider"
                        >
                          Explore <ArrowUpRight size={14} />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </DataGridContainer>
        </div>
      </section>

      {/* Wave Divider A -> B */}
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
      {/* 3. SECTION B: Core Governing Framework & Objectives                      */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-18 lg:py-20 bg-[#F3F3F2] dark:bg-[#18181B] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="mb-8 w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-4">
              Institutional Governance Objectives
            </h2>
            <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full">
              Our committees work collaboratively across department boundaries to guarantee institutional integrity, student well-being, and structured administrative decision-making.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-border pt-4">
            <div className="pt-6 md:pt-0 md:pr-6">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="text-primary w-6 h-6 shrink-0" />
                <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                  Safety & Compliance
                </h3>
              </div>
              <p className="text-sm text-foreground font-libre font-medium leading-relaxed">
                Enforcing strict anti-ragging measures, campus safety protocols, and regulatory compliance guidelines mandated by university and government statutory authorities.
              </p>
            </div>

            <div className="pt-6 md:pt-0 md:px-6">
              <div className="flex items-center gap-3 mb-3">
                <HeartHandshake className="text-primary w-6 h-6 shrink-0" />
                <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                  Student Support & Equity
                </h3>
              </div>
              <p className="text-sm text-foreground font-libre font-medium leading-relaxed">
                Providing confidential redressal channels, equal opportunity initiatives, and women empowerment programs to foster an inclusive and supportive campus environment.
              </p>
            </div>

            <div className="pt-6 md:pt-0 md:pl-6">
              <div className="flex items-center gap-3 mb-3">
                <Award className="text-primary w-6 h-6 shrink-0" />
                <h3 className="text-lg sm:text-xl font-bold font-oswald uppercase tracking-tight text-foreground">
                  Academic Quality
                </h3>
              </div>
              <p className="text-sm text-foreground font-libre font-medium leading-relaxed">
                Guiding curriculum enrichment, industry-aligned learning pathways, and continuous internal quality improvements through academic advisory supervision.
              </p>
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
      {/* 4. SECTION C: Contact & Enquiries                                         */}
      {/* ========================================================================= */}
      <section className="py-10 sm:py-14 md:py-18 lg:py-20 bg-white dark:bg-[#121214] transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="border border-border rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs p-6 sm:p-8 md:p-10 bg-white dark:bg-[#121214]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black font-oswald uppercase tracking-wide text-primary mb-3">
              Committee Nodal Secretariat
            </h2>
            <p className="text-sm sm:text-base text-foreground font-libre font-medium leading-relaxed w-full mb-6">
              For administrative inquiries, formal representations, or committee-related queries, please contact the Principal's Secretariat or the respective committee convenor.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-sm font-libre font-semibold text-foreground">
              <div>
                <span className="text-muted-foreground font-normal">Campus Location:</span> Main Administrative Block, MSAJCE
              </div>
              <div>
                <span className="text-muted-foreground font-normal">Nodal Desk Email:</span>{" "}
                <a href="mailto:principal@msajce.edu.in" className="text-primary hover:underline">
                  principal@msajce.edu.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
