import { createFileRoute, Link } from "@tanstack/react-router";
import { AboutSubNav } from "@/components/layout/AboutSubNav";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { ShieldCheck, Users, Building2, Award, FileText } from "lucide-react";

const title = "Statutory Body & Governing Council — M.S.A.J. College of Engineering";
const description =
  "Official Governing Council members, University Nominees, DOTE Representatives, and Industry Leadership of Mohamed Sathak A.J. College of Engineering (MSAJCE).";

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

const governingCouncilMembers = [
  { sno: 1, name: "Alhaj. S.M. Yousuf Sahib", role: "Chairman", designation: "Chairman, Mohamed Sathak Trust, Chennai" },
  { sno: 2, name: "Janaba. S.M.H. Sharmila", role: "Member", designation: "Secretary, Mohamed Sathak Trust, Chennai" },
  { sno: 3, name: "Janab. P.R.L. Hamid Ibrahim", role: "Member", designation: "Executive Director, Mohamed Sathak Trust, Chennai" },
  { sno: 4, name: "Mr. S.M.Y. Mohamed Sathak", role: "Member", designation: "Campus Director, Mohamed Sathak Trust, Chennai" },
  { sno: 5, name: "Dr. T.V. Gopal", role: "University Nominee", designation: "Professor / CSE, Anna University, Chennai" },
  { sno: 6, name: "Dr. S. Murugavel", role: "DOTE Nominee", designation: "Professor / TPGIT, Vellore" },
  { sno: 7, name: "Dr. B. Anbu Thambi", role: "Member (Industry Leader)", designation: "Head, Strategy & Partnerships, L&T EduTech / Former VP, ICT Academy" },
  { sno: 8, name: "Mr. Arul Rajkumar", role: "Member (Industry Leader)", designation: "Vice President - IT Operations, Ford Motors Pvt. Ltd." },
  { sno: 9, name: "Dr. R. Subramani", role: "Member (Industry Leader)", designation: "Director, IBM Chennai" },
  { sno: 10, name: "Dr. G. Kulanthaivelu", role: "Member (Academic Expert)", designation: "Professor & Head - ECE, NITTTR Chennai" },
  { sno: 11, name: "Dr. K.S. Srinivasan", role: "Member Secretary", designation: "Principal, MSAJCE, Chennai" },
  { sno: 12, name: "Head - Administration", role: "Member", designation: "MSAJCE, Chennai" },
  { sno: 13, name: "Head - Academics", role: "Senior Faculty Member", designation: "MSAJCE, Chennai" },
  { sno: 14, name: "Head - IQAC", role: "Senior Faculty Member", designation: "MSAJCE, Chennai" },
  { sno: 15, name: "Head - Admission", role: "Senior Faculty Member", designation: "MSAJCE, Chennai" },
  { sno: 16, name: "Head – Student Affairs", role: "Senior Faculty Member", designation: "MSAJCE, Chennai" },
  { sno: 17, name: "Head - Research", role: "Senior Faculty Member", designation: "MSAJCE, Chennai" },
  { sno: 18, name: "Head - Examcell", role: "Member", designation: "MSAJCE, Chennai" },
];

export function GoverningCouncilPage() {
  return (
    <main className="bg-page-bg text-foreground min-h-screen pt-0 md:pt-1">
      {/* Secondary Sticky Sub-Nav */}
      <AboutSubNav />

      {/* Hero Showcase Section — SFCM Style Full-Bleed Editorial */}
      <section className="relative border-b border-border bg-gradient-to-b from-primary/10 via-background to-page-bg pt-8 pb-16 md:pt-12 md:pb-20">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="flex flex-col gap-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-foreground/10 border border-foreground/20 text-foreground text-xs font-mono font-bold uppercase rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs">
              <ShieldCheck className="w-4 h-4 text-primary" />
              Statutory Governance & Compliance
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-foreground font-oswald leading-none">
              Statutory Body & <span className="text-primary">Governing Council</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground font-libre mt-2 max-w-3xl">
              The Governing Council of Mohamed Sathak A.J. College of Engineering guides the institution's strategic vision, quality policy, academic standards, and statutory regulatory compliance with AICTE, Anna University, and Government of Tamil Nadu guidelines.
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border pt-8">
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-black font-oswald text-primary">18</span>
              <span className="text-xs font-bold font-oswald uppercase text-foreground mt-1">Council Members</span>
              <span className="text-[11px] font-libre text-muted-foreground">Trustees, Nominees & Leaders</span>
            </div>
            <div className="flex flex-col md:border-l md:border-border md:pl-6">
              <span className="text-3xl md:text-4xl font-black font-oswald text-primary">Anna Univ</span>
              <span className="text-xs font-bold font-oswald uppercase text-foreground mt-1">University Representative</span>
              <span className="text-[11px] font-libre text-muted-foreground">Prof / CSE Nominee</span>
            </div>
            <div className="flex flex-col md:border-l md:border-border md:pl-6">
              <span className="text-3xl md:text-4xl font-black font-oswald text-primary">DOTE</span>
              <span className="text-xs font-bold font-oswald uppercase text-foreground mt-1">Government Nominee</span>
              <span className="text-[11px] font-libre text-muted-foreground">Directorate of Technical Education</span>
            </div>
            <div className="flex flex-col md:border-l md:border-border md:pl-6">
              <span className="text-3xl md:text-4xl font-black font-oswald text-primary">L&T / IBM / Ford</span>
              <span className="text-xs font-bold font-oswald uppercase text-foreground mt-1">Industry Advisors</span>
              <span className="text-[11px] font-libre text-muted-foreground">Executive Corporate Leaders</span>
            </div>
          </div>
        </div>
      </section>

      {/* Governing Council Members Table & Editorial Grid */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-16">
        <div className="flex flex-col gap-6 mb-8">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
            // Institutional Governance Matrix
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-oswald uppercase text-foreground">
            Members of the Governing Council
          </h2>
          <p className="text-sm md:text-base font-libre text-muted-foreground max-w-3xl">
            Composed of eminent academic experts, industry executives, government nominees, and trust leadership dedicated to upholding higher technical education excellence.
          </p>
        </div>

        {/* High-Contrast Table Container */}
        <div className="overflow-x-auto border border-border rounded-lg bg-card shadow-xs">
          <table className="w-full text-left border-collapse font-libre">
            <thead>
              <tr className="border-b border-border bg-muted/60 text-xs font-oswald font-black uppercase tracking-wider text-foreground">
                <th className="py-4 px-6 w-16">#</th>
                <th className="py-4 px-6">Name of Member</th>
                <th className="py-4 px-6">Designation in Council</th>
                <th className="py-4 px-6">Designation / Organization</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              {governingCouncilMembers.map((member) => (
                <tr
                  key={member.sno}
                  className="hover:bg-foreground/[0.02] transition-colors"
                >
                  <td className="py-4 px-6 font-mono font-bold text-primary">{member.sno}</td>
                  <td className="py-4 px-6 font-bold text-foreground">{member.name}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`inline-block px-2.5 py-1 text-xs font-oswald font-bold uppercase rounded-sm border ${
                        member.role.includes("Chairman")
                          ? "bg-primary/10 text-primary border-primary/20"
                          : member.role.includes("Nominee")
                          ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
                          : member.role.includes("Industry")
                          ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
                          : "bg-foreground/10 text-foreground border-foreground/20"
                      }`}
                    >
                      {member.role}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-muted-foreground">{member.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="border-t border-border bg-page-bg py-12">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-libre font-semibold text-muted-foreground">
            Explore sister institutions under Mohamed Sathak Trust
          </span>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/about/group-institutions"
              className="px-4 py-2 text-xs font-oswald font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors"
            >
              Group of Institutions &raquo;
            </Link>
            <Link
              to="/about/accreditations"
              className="px-4 py-2 text-xs font-oswald font-bold uppercase tracking-wider border border-border rounded-sm hover:bg-muted transition-colors"
            >
              Mandatory Disclosure &raquo;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
