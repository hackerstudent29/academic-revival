import { createFileRoute } from "@tanstack/react-router";
import {
  Quote,
  Award,
  ShieldCheck,
  Users,
  GraduationCap,
  Building2,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

const title = "Leadership Messages — M.S.A.J. College of Engineering, Chennai";
const description =
  "Official visionary messages from Chairman Alhaj S.M. Yousuf Sahib, Secretary Janaba S.M.H. Sharmila, Executive Director Janab P.R.L. Hamid Ibrahim, and Principal Dr. K.S. Srinivasan.";

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

const executiveLeaders = [
  {
    role: "Secretary",
    name: "Janaba S.M.H. Sharmila",
    org: "Secretary, Mohamed Sathak Trust",
    quote:
      "Education is the most potent catalyst for socio-economic transformation. Our continuous investment in advanced engineering infrastructure ensures our students thrive in a competitive global landscape.",
    message:
      "At MSAJCE, we are committed to nurturing not only technical proficiency but also strong moral character and societal responsibility. We continually modernize our laboratories, support women in STEM, and expand industry-partnered research centers so that every student can achieve their highest potential.",
  },
  {
    role: "Executive Director",
    name: "Janab P.R.L. Hamid Ibrahim",
    org: "Executive Director, Mohamed Sathak Trust",
    quote:
      "Bridging the institute-industry divide through state-of-the-art incubation and technology centers is our foremost institutional priority.",
    message:
      "Located inside the SIPCOT IT Park surrounded by multinational technology leaders, MSAJCE offers an unparalleled environment for experiential engineering education. We prioritize hands-on internships, patent innovation, and corporate collaborations that ensure seamless campus-to-corporate transitions.",
  },
  {
    role: "Campus Director",
    name: "Mr. S.M.Y. Mohamed Sathak",
    org: "Campus Director, Mohamed Sathak Trust",
    quote:
      "A vibrant campus ecosystem balancing rigorous academics with cultural vitality, sports, and technical societies shapes well-rounded leaders.",
    message:
      "Our 70-acre campus is designed to foster multidisciplinary innovation, athletic achievement, and entrepreneurial mindset. We provide all kinds of training for the professional and overall transformation of our students from day one.",
  },
];

const academicDirectives = [
  {
    num: "01",
    title: "Outcome-Based Pedagogy",
    desc: "Rigorous alignment with National Board of Accreditation (NBA) and Anna University academic frameworks ensuring conceptual mastery and continuous assessment.",
  },
  {
    num: "02",
    title: "Applied R&D & AICTE IDEA Lab",
    desc: "Empowering students and faculty to undertake sponsored research projects, publish in indexed journals, and patent disruptive technologies.",
  },
  {
    num: "03",
    title: "Corporate Recruitment Readiness",
    desc: "Comprehensive soft-skills, aptitude, and full-stack technical training preparing graduates for high-value placements across top-tier multinational software and core engineering firms.",
  },
  {
    num: "04",
    title: "Entrepreneurship & Higher Studies",
    desc: "Active startup incubation, MSME venture funding support, and dedicated mentorship for students pursuing higher education abroad and competitive examinations.",
  },
];

export function LeadershipMessagePage() {
  return (
    <main className="bg-white dark:bg-[#121214] text-foreground min-h-screen pt-0 md:pt-1 font-sans selection:bg-primary selection:text-white">
      {/* ========================================================================= */}
      {/* SECTION 1: Canvas A (White / #121214) — CHAIRMAN'S VISIONARY MESSAGE      */}
      {/* ========================================================================= */}
      <section className="w-full pt-2 md:pt-6 pb-12 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          {/* Header Bar */}
          <div className="border-b border-border pb-6 mb-8 sm:mb-12">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-primary uppercase block mb-2">
              ABOUT MSAJCE // LEADERSHIP MESSAGES
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight text-foreground font-oswald leading-[0.95]">
              Visionary Leadership <br />
              <span className="text-primary font-oswald">& Institutional Guidance</span>
            </h1>
          </div>

          {/* Chairman's Broadsheet (Strictly Zero Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Chairman Profile & Credentials */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="relative w-full rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs overflow-hidden border border-border shadow-md bg-muted aspect-[4/5]">
                <img
                  src="/images/peeps/trustee1.jpg"
                  alt="Alhaj S.M. Yousuf Sahib"
                  className="w-full h-full object-cover pointer-events-none select-none"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
                  }}
                />
              </div>

              <div className="border-b border-border pb-3">
                <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block">
                  Chairman's Address
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-oswald uppercase mt-1 leading-tight">
                  Alhaj S.M. Yousuf Sahib
                </h2>
                <span className="text-xs text-muted-foreground font-sans font-medium block mt-0.5">
                  Chairman, Mohamed Sathak Trust
                </span>
              </div>
            </div>

            {/* Right: Chairman Narrative & Manifesto */}
            <div className="lg:col-span-8 space-y-6">
              {/* Highlight Quote Block */}
              <div className="border-l-4 border-primary pl-4 sm:pl-6 py-2">
                <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-snug text-foreground font-oswald uppercase">
                  "Choosing the right institute to pursue your higher studies is one of the most important decisions that you will ever make. It can be the key for the door of your lifelong opportunity for sustainable growth and service."
                </blockquote>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-muted-foreground font-sans leading-relaxed">
                <p>
                  Since the establishment of the Mohamed Sathak Trust on 26th October 1973, our sacred mission has been to extend high-quality technical education to deserving youth, bridging societal divides and empowering generations of engineering professionals.
                </p>
                <p>
                  Mohamed Sathak A.J. College of Engineering (MSAJCE), founded on 5th July 2001 in Chennai's premier IT Corridor, stands as a testament to this commitment. Set within a sprawling 70-acre green campus inside SIPCOT IT Park Siruseri, surrounded by over 100 multinational IT titans, the college provides students with an immersive academic and industry ecosystem.
                </p>
                <p>
                  We continuously invest in state-of-the-art facilities, smart pedagogical tools, industry-collaborative technology centers, and passionate faculty mentors. Our aim is to transform every student into a competent technocrat equipped to tackle real-world global challenges with technical mastery and ethical uprightness.
                </p>
              </div>

              {/* Core Tenets Checklist (divide-x) */}
              <div className="pt-4 border-t border-border">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-border">
                  <div className="first:pl-0 sm:pl-4">
                    <span className="text-[11px] font-mono uppercase text-primary font-bold block">
                      Philanthropic Core
                    </span>
                    <span className="text-xs sm:text-sm text-foreground/80 font-sans block mt-1">
                      Committed to accessible, merit-driven technical education for all social strata.
                    </span>
                  </div>
                  <div className="pt-3 sm:pt-0 sm:pl-4">
                    <span className="text-[11px] font-mono uppercase text-primary font-bold block">
                      Industry Synergy
                    </span>
                    <span className="text-xs sm:text-sm text-foreground/80 font-sans block mt-1">
                      Direct collaboration with leading technology multinational neighbors on OMR.
                    </span>
                  </div>
                  <div className="pt-3 sm:pt-0 sm:pl-4">
                    <span className="text-[11px] font-mono uppercase text-primary font-bold block">
                      Ethical Leadership
                    </span>
                    <span className="text-xs sm:text-sm text-foreground/80 font-sans block mt-1">
                      Inculcating civic responsibility, sustainable engineering, and human integrity.
                    </span>
                  </div>
                </div>
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
      {/* SECTION 2: Canvas B (#F3F3F2 / #18181B) — EXECUTIVE MANAGEMENT MESSAGES  */}
      {/* ========================================================================= */}
      <section className="w-full bg-[#F3F3F2] dark:bg-[#18181B] py-10 sm:py-16 lg:py-20 transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          {/* Section Header */}
          <div className="max-w-3xl mb-8 sm:mb-12">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-primary uppercase block mb-2">
              EXECUTIVE PERSPECTIVES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-foreground font-oswald leading-none">
              Trust Executive Management
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground font-sans mt-3">
              Strategic guidance from the executive trustees overseeing institutional modernization, corporate affiliations, and student welfare.
            </p>
          </div>

          {/* 3-Column Executive Broadsheet (Strictly Zero Cards, divide-y) */}
          <div className="border-t border-b border-border">
            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border">
              {executiveLeaders.map((exec) => (
                <div key={exec.role} className="py-6 sm:py-8 lg:px-6 first:lg:pl-0 last:lg:pr-0 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="border-b border-border pb-3">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-primary block">
                        {exec.role}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground font-oswald mt-0.5">
                        {exec.name}
                      </h3>
                      <span className="text-xs text-muted-foreground font-sans block mt-0.5">
                        {exec.org}
                      </span>
                    </div>

                    <div className="border-l-2 border-primary pl-3 py-1">
                      <p className="text-sm font-oswald uppercase font-bold text-foreground leading-snug">
                        "{exec.quote}"
                      </p>
                    </div>

                    <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                      {exec.message}
                    </p>
                  </div>
                </div>
              ))}
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
      {/* SECTION 3: Canvas A (White / #121214) — PRINCIPAL'S ACADEMIC DIRECTIVE    */}
      {/* ========================================================================= */}
      <section className="w-full bg-white dark:bg-[#121214] py-10 sm:py-16 lg:py-20 transition-colors">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Principal Profile */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="relative w-full rounded-tl-2xl rounded-br-2xl rounded-tr-xs rounded-bl-xs overflow-hidden border border-border shadow-md bg-muted aspect-[4/5]">
                <img
                  src="/images/peeps/principal.jpg"
                  alt="Dr. K.S. Srinivasan, Principal"
                  className="w-full h-full object-cover pointer-events-none select-none"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/accreditations_campus.jpg";
                  }}
                />
              </div>

              <div className="border-b border-border pb-3">
                <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block">
                  Principal's Message
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-oswald uppercase mt-1 leading-tight">
                  Dr. K.S. Srinivasan
                </h2>
                <span className="text-xs text-muted-foreground font-sans font-medium block mt-0.5">
                  Principal, M.S.A.J. College of Engineering
                </span>
              </div>
            </div>

            {/* Right: Academic Directives Narrative */}
            <div className="lg:col-span-8 space-y-6">
              <div className="border-l-4 border-primary pl-4 sm:pl-6 py-2">
                <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-snug text-foreground font-oswald uppercase">
                  "Engineering education today must transcend textbooks to cultivate problem-solvers who can synthesize emerging technology, computational intellect, and sustainable practices."
                </blockquote>
              </div>

              <div className="space-y-4 text-base sm:text-lg text-muted-foreground font-sans leading-relaxed">
                <p>
                  At MSAJCE, our academic philosophy centers on outcome-based education, continuous experiential learning, and active industry participation. We believe in providing equal importance for academic rigor, co-curricular symposia, and extracurricular development.
                </p>
                <p>
                  With AICTE IDEA Lab facilities, international language training centers (English, German, and Japanese), hackathon incubators, and dynamic collegiate chapters of IEEE, CSI, and SAE, our students are systematically prepared for leadership roles in industry, research, and entrepreneurship.
                </p>
              </div>

              {/* 4 Academic Directives Broadsheet Grid (Zero Cards, divide-y) */}
              <div className="pt-4 border-t border-border">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-foreground block mb-4">
                  Institutional Academic Priorities
                </span>
                <div className="border-t border-b border-border divide-y divide-border">
                  {academicDirectives.map((dir) => (
                    <div key={dir.num} className="py-4 flex items-start gap-4">
                      <span className="text-base sm:text-lg font-mono font-black text-primary shrink-0 mt-0.5">
                        {dir.num}
                      </span>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold uppercase tracking-tight text-foreground font-oswald mb-1">
                          {dir.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed">
                          {dir.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
