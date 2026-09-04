import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";

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
  { sno: 1, name: "Alhaj. S.M. Yousuf Sahib", role: "Chairman", designation: "Chairman, Mohamed Sathak Trust, Chennai" },
  { sno: 2, name: "Janaba. S.M.H. Sharmila", role: "Member", designation: "Secretary, Mohamed Sathak Trust, Chennai" },
  { sno: 3, name: "Janab. P.R.L. Hamid Ibrahim", role: "Member", designation: "Executive Director, Mohamed Sathak Trust, Chennai" },
  { sno: 4, name: "Mr. S.M.Y. Mohamed Sathak", role: "Member", designation: "Campus Director, Mohamed Sathak Trust, Chennai" },
  { sno: 5, name: "Dr. T.V. Gopal", role: "University Nominee", designation: "Professor / CSE, Anna University, Chennai" },
  { sno: 6, name: "Dr. S. Murugavel", role: "DOTE Nominee", designation: "Professor / TPGIT, Vellore" },
  { sno: 7, name: "Dr. B. Anbu Thambi", role: "Member", designation: "Head, Strategy & Partnerships, L&T EduTech, Chennai" },
  { sno: 8, name: "Mr. Arul Rajkumar", role: "Member", designation: "VP - IT Operations, Ford Motors Pvt. Ltd., Chennai" },
  { sno: 9, name: "Dr. R. Subramani", role: "Member", designation: "Director, IBM Chennai" },
  { sno: 10, name: "Dr. G. Kulanthaivelu", role: "Member", designation: "Professor & Head - ECE, NITTTR, Chennai" },
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
      {/* Header & Sub-Nav Title */}
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
              The Governing Council of Mohamed Sathak A.J. College of Engineering comprises distinguished educational administrators, industrial leaders, university nominees, and senior faculty steering the institution.
            </p>
          </div>
        </div>
      </section>

      {/* Governing Council Table */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-20">
        <div className="border border-border rounded-md overflow-hidden bg-card shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-muted/60 border-b border-border text-foreground font-oswald text-xs uppercase tracking-widest">
                  <th className="py-4 px-4 sm:px-6 w-16">S.No</th>
                  <th className="py-4 px-4 sm:px-6 font-bold">Name of Member</th>
                  <th className="py-4 px-4 sm:px-6 font-bold">Designation in Council</th>
                  <th className="py-4 px-4 sm:px-6 font-bold">Designation / Organization</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-sm font-sans">
                {members.map((member) => (
                  <tr key={member.sno} className="hover:bg-foreground/[0.02] transition-colors">
                    <td className="py-3.5 px-4 sm:px-6 font-mono font-bold text-primary">{member.sno}</td>
                    <td className="py-3.5 px-4 sm:px-6 font-bold text-foreground">{member.name}</td>
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
