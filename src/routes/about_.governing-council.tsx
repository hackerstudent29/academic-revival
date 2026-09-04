import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Award, Building2, Users, GraduationCap, Briefcase } from "lucide-react";

const title = "Governing Council — M.S.A.J. College of Engineering, Chennai";
const description =
  "Official Governing Council members of Mohamed Sathak A.J. College of Engineering, Chennai.";

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
  { sno: 1, name: "Alhaj. S.M. Yousuf Sahib", role: "Chairman", category: "Trust", designation: "Chairman, Mohamed Sathak Trust, Chennai" },
  { sno: 2, name: "Janaba. S.M.H. Sharmila", role: "Member", category: "Trust", designation: "Secretary, Mohamed Sathak Trust, Chennai" },
  { sno: 3, name: "Janab. P.R.L. Hamid Ibrahim", role: "Member", category: "Trust", designation: "Executive Director, Mohamed Sathak Trust, Chennai" },
  { sno: 4, name: "Mr. S.M.Y. Mohamed Sathak", role: "Member", category: "Trust", designation: "Campus Director, Mohamed Sathak Trust, Chennai" },
  { sno: 5, name: "Dr. T.V. Gopal", role: "University Nominee", category: "Government & University", designation: "Professor / CSE, Anna University, Chennai" },
  { sno: 6, name: "Dr. S. Murugavel", role: "DOTE Nominee", category: "Government & University", designation: "Professor / TPGIT, Vellore" },
  { sno: 7, name: "Dr. B. Anbu Thambi", role: "Member", category: "Industry Partner", designation: "Head, Strategy & Partnerships, L&T EduTech, Chennai" },
  { sno: 8, name: "Mr. Arul Rajkumar", role: "Member", category: "Industry Partner", designation: "VP - IT Operations, Ford Motors Pvt. Ltd., Chennai" },
  { sno: 9, name: "Dr. R. Subramani", role: "Member", category: "Industry Partner", designation: "Director, IBM Chennai" },
  { sno: 10, name: "Dr. G. Kulanthaivelu", role: "Member", category: "Academic Expert", designation: "Professor & Head - ECE, NITTTR, Chennai" },
  { sno: 11, name: "Dr. K.S. Srinivasan", role: "Member Secretary", category: "Institutional Leadership", designation: "Principal, MSAJCE, Chennai" },
  { sno: 12, name: "Head - Administration", role: "Member", category: "Institutional Leadership", designation: "MSAJCE, Chennai" },
  { sno: 13, name: "Head - Academics", role: "Senior Faculty", category: "Academic Heads", designation: "MSAJCE, Chennai" },
  { sno: 14, name: "Head - IQAC", role: "Senior Faculty", category: "Academic Heads", designation: "MSAJCE, Chennai" },
  { sno: 15, name: "Head - Admission", role: "Senior Faculty", category: "Academic Heads", designation: "MSAJCE, Chennai" },
  { sno: 16, name: "Head – Student Affairs", role: "Senior Faculty", category: "Academic Heads", designation: "MSAJCE, Chennai" },
  { sno: 17, name: "Head - Research", role: "Senior Faculty", category: "Academic Heads", designation: "MSAJCE, Chennai" },
  { sno: 18, name: "Head - Examcell", role: "Member", category: "Academic Heads", designation: "MSAJCE, Chennai" },
];

const categoriesSummary = [
  { title: "Trust Management", icon: Building2, count: "4 Members", desc: "Chairman, Secretary, Executive Director, Campus Director" },
  { title: "Government & University Nominees", icon: ShieldCheck, count: "2 Nominees", desc: "Anna University Nominee & DOTE Nominee" },
  { title: "Industry Leaders", icon: Briefcase, count: "3 Leaders", desc: "L&T EduTech, Ford Motors, IBM" },
  { title: "Academic & Administrative Heads", icon: GraduationCap, count: "9 Experts", desc: "Principal, IQAC, Research, Admissions & Department Heads" },
];

export function GoverningCouncilPage() {
  return (
    <main className="bg-page-bg text-foreground min-h-screen pt-0 md:pt-1 font-sans">
      {/* SECTION 1: Boardroom Header */}
      <section className="relative border-b border-border bg-page-bg pt-4 md:pt-6 pb-12 md:pb-16">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="mb-4">
            <span className="text-sm sm:text-base md:text-lg xl:text-xl font-black font-oswald uppercase text-primary tracking-wider">
              ABOUT MSAJCE // STATUTORY GOVERNANCE
            </span>
          </div>

          <div className="flex flex-col gap-3 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-foreground font-oswald leading-none">
              Governing Council <br />
              <span className="text-primary font-oswald">& Statutory Body</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground font-sans mt-2">
              The Governing Council of Mohamed Sathak A.J. College of Engineering comprises distinguished educational administrators, corporate tech leaders from Ford & IBM, university nominees from Anna University, and senior academic heads steering institutional policy.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: Boardroom Governance Composition Cards */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-16">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            Council Composition
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground font-oswald">
            4 Pillars of Statutory Governance
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesSummary.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="bg-card border border-border p-6 rounded-sm shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-sm bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-primary uppercase block mb-1">
                    {cat.count}
                  </span>
                  <h3 className="text-lg font-bold text-foreground font-oswald uppercase mb-2">{cat.title}</h3>
                  <p className="text-xs text-muted-foreground font-sans leading-relaxed">{cat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: Complete Member Table */}
      <section className="mx-auto max-w-[1440px] px-6 pb-12 md:px-12 md:pb-20 border-t border-border pt-12">
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            Official Directory
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-foreground font-oswald">
            Complete 18-Member Governing Council
          </h2>
        </div>

        <div className="border border-border rounded-md overflow-hidden bg-card shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-muted/60 border-b border-border text-foreground font-oswald text-xs uppercase tracking-widest">
                  <th className="py-4 px-4 sm:px-6 w-16">S.No</th>
                  <th className="py-4 px-4 sm:px-6 font-bold">Name of Member</th>
                  <th className="py-4 px-4 sm:px-6 font-bold">Category</th>
                  <th className="py-4 px-4 sm:px-6 font-bold">Designation in Council</th>
                  <th className="py-4 px-4 sm:px-6 font-bold">Designation / Organization</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm font-sans">
                {members.map((member) => (
                  <tr key={member.sno} className="hover:bg-foreground/[0.02] transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-primary">{member.sno}</td>
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-foreground">{member.name}</td>
                    <td className="py-3.5 px-4 sm:px-6 text-xs font-mono text-muted-foreground uppercase">{member.category}</td>
                    <td className="py-3.5 px-4 sm:px-6 text-foreground font-medium">
                      <span className="inline-block px-2.5 py-1 bg-primary/10 text-primary text-xs font-mono font-bold uppercase rounded-xs">
                        {member.role}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-muted-foreground">{member.designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="border-t border-border bg-page-bg py-10">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-semibold text-muted-foreground font-sans">
            Read messages from Chairman and Principal
          </span>
          <Link
            to="/about/leadership"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs hover:bg-primary/90 transition-colors font-oswald"
          >
            Leadership Messages <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}

