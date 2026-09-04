import { createFileRoute, Link } from "@tanstack/react-router";
import { AboutSubNav } from "@/components/layout/AboutSubNav";
import { Reveal } from "@/components/motion";
import { Quote, ArrowRight, Award, GraduationCap, Building } from "lucide-react";

const title = "Leadership Messages — M.S.A.J. College of Engineering, Chennai";
const description =
  "Official messages from Chairman Alhaj S.M. Yousuf Sahib, Executive Management, and Principal Dr. K.S. Srinivasan.";

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

const leaders = [
  {
    role: "Chairman's Message",
    name: "Alhaj S.M. Yousuf Sahib",
    title: "Chairman, Mohamed Sathak Trust",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    quote:
      "Choosing the right institute to pursue your higher studies is one of the most important decisions that you will ever make. It can be the key for the door of your lifelong opportunity for sustainable growth and service.",
    message: [
      "Dear Parents and Prospective Students, Welcome to Mohamed Sathak A.J. College of Engineering, Chennai. We want you to base your choice at the right place with relevant and reliable education.",
      "The success depends on the effort you invest in your own intellectual and professional development. Invest wisely and be assured that MSAJCE faculty and staff pledge their best efforts in helping you achieve your educational goals.",
      "Our standards are challenging and we are dedicating ourselves in helping you meet the standards. We will judge our institution's success by how best you succeed in realizing your potential as a student and later in your professional career. I invite you to visit our magnificent campus, to witness our state-of-the-art facilities, including Technology Centres, interact with students and faculty, and to convince yourselves on why so many bright students have made MSAJCE their choice of institution.",
    ],
  },
  {
    role: "Executive Management Message",
    name: "Janaba. S.M.H. Sharmila & Board of Trustees",
    title: "Executive Management, Mohamed Sathak Trust",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    quote:
      "Innovation and industry collaboration are the twin pillars of modern engineering education. We continually update our academic infrastructure to align with emerging global technologies.",
    message: [
      "As technology evolves at an unprecedented pace, our mission at MSAJCE is to bridge the gap between academic theory and industry demand.",
      "Through strategic MoUs with global technology firms, hands-on R&D centers, and our AICTE IDEA Lab, we ensure our graduates are equipped with practical problem-solving skills.",
      "We encourage our students to innovate, publish research, and build tech startups that contribute directly to national development.",
    ],
  },
  {
    role: "Principal's Message",
    name: "Dr. K.S. Srinivasan, Ph.D.",
    title: "Principal, Mohamed Sathak A.J. College of Engineering",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    quote:
      "Acquiring information is no longer the main focus of education; instead the main aim of education is to build the powers of human mind and spirit.",
    message: [
      "Dear Parents and Prospective Students, As Principal, I am impressed by the commitment of our management and faculty for the provision of an excellent all-round education with state-of-the-art facilities so that our students become multidimensional rather than uni-dimensional.",
      "MSAJCE believes in providing our students an environment which is rich in knowledge and supportive for their extracurricular interests. We evaluate our students on the basis of their physical, mental, social, emotional, and intellectual development. As a result, I assure that MSAJCE is dedicated to developing skilled and outstanding students who can pursue their interest and strength to the best of their ability.",
      "Our enriched students will be able to actively face Industry 4.0 challenges as well as build a strong society for a better world. To meet these needs, we practice a holistic approach with enabled new structure that stimulates young minds in terms of innovative and creative thinking with great freedom to learn with different perspectives. I welcome you all and wish a memorable studentship.",
    ],
  },
];

export function LeadershipMessagePage() {
  return (
    <main className="bg-page-bg text-foreground min-h-screen pt-0 md:pt-1">
      {/* Secondary Sticky Sub-Nav Header */}
      <AboutSubNav />

      {/* Hero Showcase Section */}
      <section className="relative border-b border-border bg-gradient-to-b from-primary/10 via-background to-page-bg pt-8 pb-16 md:pt-12 md:pb-20">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="flex flex-col gap-4 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-foreground/10 border border-foreground/20 text-foreground text-xs font-mono font-bold uppercase rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs w-max">
              Visionary Executive Leadership
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-foreground font-oswald leading-none">
              Leadership <span className="text-primary">Messages</span>
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground font-libre mt-2">
              Inspiring guidance from our Founder Chairman, Executive Management, and Academic Principal driving MSAJCE toward global excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Messages List */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-20 flex flex-col gap-16 font-libre">
        {leaders.map((leader, idx) => (
          <div
            key={leader.name}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start ${
              idx > 0 ? "border-t border-border pt-16" : ""
            }`}
          >
            {/* Leader Image & Details */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="relative rounded-lg overflow-hidden border border-border bg-muted aspect-[4/5] shadow-xs">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
                  {leader.role}
                </span>
                <h3 className="text-2xl font-oswald font-bold uppercase text-foreground mt-1">{leader.name}</h3>
                <span className="text-xs text-muted-foreground font-semibold mt-0.5">
                  {leader.title}
                </span>
              </div>
            </div>

            {/* SFCM Pull Quote & Message Content */}
            <div className="lg:col-span-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-start gap-4 bg-card border-l-4 border-primary border-y border-r border-border p-6 rounded-r-lg shadow-xs mb-6">
                  <Quote className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <p className="text-lg sm:text-xl font-bold font-oswald leading-snug text-foreground">
                    "{leader.quote}"
                  </p>
                </div>

                <div className="flex flex-col gap-4 text-muted-foreground text-base leading-relaxed">
                  {leader.message.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-border/60 flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  Mohamed Sathak A.J. College of Engineering
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Navigation Footer */}
      <section className="border-t border-border bg-page-bg py-12">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-libre font-semibold text-muted-foreground">
            Explore Governing Council and 18 Group Institutions
          </span>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/about/governing-council"
              className="px-4 py-2 text-xs font-oswald font-bold uppercase tracking-wider border border-border rounded-sm hover:bg-muted transition-colors"
            >
              Governing Council &raquo;
            </Link>
            <Link
              to="/about/group-institutions"
              className="px-4 py-2 text-xs font-oswald font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors"
            >
              Group of Institutions &raquo;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
