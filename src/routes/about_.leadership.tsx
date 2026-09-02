import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/motion";
import { Quote, ArrowRight, Award, GraduationCap, Building } from "lucide-react";

const title = "Leadership Message — M.S.A.J. College of Engineering, Chennai";
const description =
  "Official messages from Chairman Alhaj S.M. Mohamed Yousuf, Executive Director, and Principal Dr. K.S. Srinivasan.";

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
    name: "Alhaj S.M. Mohamed Yousuf",
    title: "Founder & Chairman, Mohamed Sathak Trust",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    quote:
      "Education is not merely about earning a degree; it is about building character, fostering curiosity, and serving humanity. At MSAJCE, our commitment is to empower young minds to reach their fullest potential.",
    message: [
      "Since establishing the Mohamed Sathak Trust in 1973, our foundational vision has been to extend quality technical and professional education to students across all segments of society.",
      "Mohamed Sathak A.J. College of Engineering stands as a proud testament to this vision. Situated in the heart of Chennai’s IT Corridor, our campus provides state-of-the-art infrastructure, world-class laboratories, and an inspiring academic atmosphere.",
      "I welcome all aspiring engineers to join MSAJCE and build a meaningful, impactful future.",
    ],
  },
  {
    role: "Executive Director's Message",
    name: "Mr. S.M.H. Sharmila",
    title: "Executive Director, Mohamed Sathak Trust",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    quote:
      "Innovation and industry collaboration are the twin pillars of modern engineering. We continually update our academic programs to align with emerging global technologies.",
    message: [
      "As technology evolves at an unprecedented pace, our mission at MSAJCE is to bridge the gap between academic theory and industry demand.",
      "Through strategic MoUs with global technology firms, hands-on R&D centers, and our AICTE IDEA Lab, we ensure our graduates are equipped with practical problem-solving skills.",
      "We encourage our students to innovate, publish research, and build startups that contribute to national development.",
    ],
  },
  {
    role: "Principal's Message",
    name: "Dr. K.S. Srinivasan",
    title: "Principal, M.S.A.J. College of Engineering",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    quote:
      "Academic rigor, disciplined culture, and holistic development form the cornerstone of student success at MSAJCE.",
    message: [
      "It gives me immense pleasure to welcome you to Mohamed Sathak A.J. College of Engineering. Our dedicated faculty members are committed to providing personalized mentorship and technical guidance.",
      "Our outcome-based educational framework guarantees that every student attains measurable competencies in core engineering, artificial intelligence, cyber security, and emerging interdisciplinary domains.",
      "We take pride in our 90%+ consistent placement record and look forward to fostering the next generation of engineering pioneers.",
    ],
  },
];

export function LeadershipMessagePage() {
  return (
    <main className="bg-page-bg text-foreground min-h-screen">
      {/* Page Hero */}
      <section className="relative border-b border-border bg-page-bg py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="flex flex-col gap-4 max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-primary">
              About MSAJCE // Visionary Leadership
            </span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-foreground">
              Leadership Messages
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground mt-2">
              Inspiring guidance from our Founder, Executive Management, and Academic Leadership driving MSAJCE forward.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Messages List */}
      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24 flex flex-col gap-20">
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
                <h3 className="text-2xl font-bold text-foreground mt-1">{leader.name}</h3>
                <span className="text-xs text-muted-foreground font-medium mt-0.5">
                  {leader.title}
                </span>
              </div>
            </div>

            {/* Editorial Message Content */}
            <div className="lg:col-span-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-start gap-3 bg-card border border-border p-6 rounded-md shadow-xs mb-8">
                  <Quote className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <p className="text-lg font-semibold tracking-tight leading-snug text-foreground font-display">
                    "{leader.quote}"
                  </p>
                </div>

                <div className="flex flex-col gap-4 text-muted-foreground text-base leading-relaxed">
                  {leader.message.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border/60 flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  Mohamed Sathak A.J. College of Engineering
                </span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Trust & Next Navigation */}
      <section className="border-t border-border bg-page-bg py-16">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
              Deepen Your Knowledge
            </span>
            <h3 className="text-2xl font-bold text-foreground">Learn More About Mohamed Sathak Trust</h3>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/about/trust"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-md hover:bg-primary/90 transition-colors shadow-sm"
            >
              The Trust &raquo;
            </Link>
            <Link
              to="/about/group-institutions"
              className="inline-flex items-center gap-2 border border-border bg-card text-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-md hover:bg-muted transition-colors"
            >
              Group of Institutions &raquo;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
