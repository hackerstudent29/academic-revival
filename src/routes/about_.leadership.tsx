import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Quote, ArrowRight, Award, ShieldCheck, Users, Building2 } from "lucide-react";

const title = "Leadership Message & Governing Council — M.S.A.J. College of Engineering, Chennai";
const description =
  "Official messages from Chairman Alhaj S.M. Yousuf Sahib, Principal Dr. K.S. Srinivasan, and complete Governing Council membership of Mohamed Sathak A.J. College of Engineering.";

export const Route = createFileRoute("/about_/leadership")({
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
  component: LeadershipMessagePage,
});

const governingCouncilMembers = [
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

export function LeadershipMessagePage() {
  return (
    <main className="bg-page-bg text-foreground min-h-screen pt-0 md:pt-1">
      {/* Header & Sub-Nav Title */}
      <section className="relative border-b border-border bg-page-bg pt-4 md:pt-6 pb-12 md:pb-16">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          {/* Secondary Sub-Nav Header */}
          <div className="mb-4">
            <span className="text-sm sm:text-base md:text-lg xl:text-xl font-black font-oswald uppercase text-primary tracking-wider">
              ABOUT MSAJCE // VISIONARY LEADERSHIP & GOVERNANCE
            </span>
          </div>

          <div className="flex flex-col gap-3 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-foreground font-oswald leading-none">
              Leadership Messages <br />
              <span className="text-primary font-oswald">& Governing Council</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground font-sans mt-2">
              Inspiring guidance from our Founder, Executive Management, and Academic Leadership driving Mohamed Sathak A.J. College of Engineering forward.
            </p>
          </div>
        </div>
      </section>

      {/* Chairman's Message */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-20 border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="relative rounded-lg overflow-hidden border border-border bg-card shadow-sm aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                alt="Alhaj S.M. Yousuf Sahib"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
                Chairman's Message
              </span>
              <h3 className="text-2xl font-bold text-foreground font-oswald uppercase mt-1">
                Alhaj S.M. Yousuf Sahib
              </h3>
              <span className="text-xs text-muted-foreground font-sans font-medium mt-0.5">
                Chairman, Mohamed Sathak Trust
              </span>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-between">
            <div>
              <div className="flex items-start gap-4 bg-card border border-border p-6 sm:p-8 rounded-sm shadow-xs mb-6">
                <Quote className="h-7 w-7 text-primary shrink-0 mt-1" />
                <blockquote className="text-xl sm:text-2xl font-bold tracking-tight leading-snug text-foreground font-oswald uppercase">
                  "Choosing the right institute to pursue your higher studies is one of the most important decisions that you will ever make. It can be the key for the door of your lifelong opportunity for sustainable growth and service."
                </blockquote>
              </div>

              <div className="flex flex-col gap-4 text-foreground/90 font-sans text-base sm:text-[17px] leading-relaxed">
                <p>
                  <strong>Dear Parents and Prospective Students,</strong>
                </p>
                <p>
                  Welcome to Mohamed Sathak A.J. College of Engineering, Chennai. Choosing a right institute to pursue your higher studies is one of the most important decisions that you will ever make. It can be the key for the door of your lifelong opportunity for sustainable growth and service. We want you to base your choice at the right place with relevant and reliable education.
                </p>
                <p>
                  The success depends on the effort you invest in your own intellectual and professional development. Invest wisely and be assured that MSAJCE faculty and staff pledge their best efforts in helping you to achieve your educational goals.
                </p>
                <p>
                  Our standards are challenging and we are dedicating ourselves in helping you to meet the standards. We will judge our institution's success by how best you succeed in realizing your potential as a student and later in professional career.
                </p>
                <p>
                  I invite you to visit our magnificent campus, to witness our state-of-the-art facilities, including the Technology Centres, interact with students and faculty and to convince yourselves on why so many bright students have made MSAJCE as their choice of the institution.
                </p>
                <p className="font-semibold text-foreground mt-2">
                  I am confident that you will take pride in joining our college.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-20 border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="relative rounded-lg overflow-hidden border border-border bg-card shadow-sm aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop"
                alt="Dr. K.S. Srinivasan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
                Principal's Message
              </span>
              <h3 className="text-2xl font-bold text-foreground font-oswald uppercase mt-1">
                Dr. K.S. Srinivasan Ph.D
              </h3>
              <span className="text-xs text-muted-foreground font-sans font-medium mt-0.5">
                Principal, Mohamed Sathak A.J. College of Engineering
              </span>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-between">
            <div>
              <div className="flex items-start gap-4 bg-card border border-border p-6 sm:p-8 rounded-sm shadow-xs mb-6">
                <Quote className="h-7 w-7 text-primary shrink-0 mt-1" />
                <blockquote className="text-xl sm:text-2xl font-bold tracking-tight leading-snug text-foreground font-oswald uppercase">
                  "Acquiring information is no longer the main focus of education; instead the main aim of education is to build the powers of human mind and spirit."
                </blockquote>
              </div>

              <div className="flex flex-col gap-4 text-foreground/90 font-sans text-base sm:text-[17px] leading-relaxed">
                <p>
                  <strong>Dear Parents and Prospective Students,</strong>
                </p>
                <p>
                  As Principal, I am impressed by the commitment of our management and the faculty for the provision of an excellent all-round education with state of the art facilities to our students so that they become multidimensional rather than uni-dimensional. Acquiring information is no longer the main focus of education; instead the main aim of education is to build the powers of human mind and spirit.
                </p>
                <p>
                  MSAJCE believes in providing our students an environment which is rich in knowledge and supportive for their extra curricular interests. We evaluate our students on the basis of their physical, mental, social, emotional and intellectual development.
                </p>
                <p>
                  As a result, I assure that MSAJCE is dedicated to developing skilled and outstanding students who can pursue their interest and strength to the best of their ability. Our enriched students will be able to actively face Industry 4.0 challenges as well as build a strong society for a better world.
                </p>
                <p>
                  To meet these needs, we practice a holistic approach with enabled new structure that stimulates young minds in terms of innovative and creative thinking with great freedom to learn with different perspectives.
                </p>
                <p className="font-semibold text-foreground mt-2">
                  I welcome you all and wish a memorable studentship. I hope you will be able to achieve greater heights and bring laurels to our Institute.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governing Council Members Table */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-20">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            Statutory Governance Body
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground font-oswald">
            Governing Council Members
          </h2>
          <p className="text-base text-muted-foreground font-sans mt-2">
            The statutory Governing Council provides strategic oversight, policy direction, and academic guidance for MSAJCE.
          </p>
        </div>

        {/* Clean Responsive Editorial Table */}
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
                {governingCouncilMembers.map((member) => (
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
            Explore Mohamed Sathak Trust History and Sister Institutions
          </span>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/about/trust"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-xs font-bold uppercase tracking-widest rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs hover:bg-primary/90 transition-colors font-oswald"
            >
              The Trust &raquo;
            </Link>
            <Link
              to="/about/group-institutions"
              className="inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 text-xs font-bold uppercase tracking-widest rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs hover:bg-muted transition-colors font-oswald"
            >
              Group of Institutions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

