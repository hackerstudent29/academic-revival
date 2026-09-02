import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Heart, Building2, GraduationCap, Award, CheckCircle, ArrowRight } from "lucide-react";

const title = "The Trust — Mohamed Sathak Trust | Educational & Social Welfare";
const description =
  "Discover Mohamed Sathak Trust established in 1973, managing 18+ educational institutions across Tamil Nadu.";

export const Route = createFileRoute("/about_/trust")({
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
  component: TheTrustPage,
});

const milestones = [
  { year: "1973", title: "Establishment of Mohamed Sathak Trust", desc: "Founded with the mission of uplifting society through quality education and charitable initiatives." },
  { year: "1980", title: "Mohamed Sathak Engineering College", desc: "Established the first self-financing engineering college in Tamil Nadu at Kilakarai." },
  { year: "1991", title: "Expansion into Arts, Science & Health Sciences", desc: "Launched pharmacy, nursing, physiotherapy, and arts & science colleges in Chennai and Kilakarai." },
  { year: "2001", title: "MSAJCE Established in Chennai IT Park", desc: "Founded Mohamed Sathak A.J. College of Engineering inside SIPCOT IT Park, Siruseri, Chennai." },
  { year: "2024+", title: "18+ Institutions & 25,000+ Active Students", desc: "A thriving educational empire delivering excellence across engineering, medical sciences, and research." },
];

const welfareActivities = [
  { title: "Merit & Need-Based Scholarships", desc: "Disbursing millions of rupees annually in full and partial fee concessions for underprivileged and meritorious youth." },
  { title: "Rural Student Empowerment", desc: "Special technical training initiatives and hostel subsidies aimed at empowering rural students from economically weaker backgrounds." },
  { title: "Women's Higher Education", desc: "Dedicated women's colleges and leadership forums promoting women's education in STEM and healthcare fields." },
  { title: "Community Healthcare Camps", desc: "Free medical, dental, and health screening camps conducted by the Trust's nursing and pharmacy colleges." },
];

export function TheTrustPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* Page Hero */}
      <section className="relative border-b border-border bg-page-bg py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="flex flex-col gap-4 max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-primary">
              About MSAJCE // Philanthropic Legacy
            </span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-foreground">
              The Mohamed Sathak Trust
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground mt-2">
              Serving society through quality education, healthcare, technical innovation, and philanthropic support since 1973.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <Reveal variant="slide-right">
              <span className="text-[11px] font-mono font-bold tracking-widest text-primary uppercase">
                // 50+ Years of Service
              </span>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground mt-2">
                Empowering Generations Through Knowledge
              </h2>
            </Reveal>
            <Reveal variant="slide-right" delay={0.1}>
              <p className="text-base leading-relaxed text-muted-foreground">
                The <strong>Mohamed Sathak Trust</strong> was founded in 1973 by late Janab S.M. Mohamed Yousuf Sahib and his brothers in memory of their father. Driven by deep philanthropic values, the Trust was created to propagate education and vocational skills among youth, particularly those from rural and marginalized communities.
              </p>
            </Reveal>
            <Reveal variant="slide-right" delay={0.2}>
              <p className="text-base leading-relaxed text-muted-foreground">
                Today, the Trust manages 18 premier institutions across Chennai, Kilakarai, and Ramanathapuram — offering courses in Engineering, Architecture, Pharmacy, Nursing, Physiotherapy, Arts & Science, and School Education.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-lg overflow-hidden border border-border bg-muted shadow-md aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop"
                alt="Mohamed Sathak Campus Library"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Milestones Timeline */}
      <section className="bg-page-bg border-y border-border py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="max-w-2xl mb-16">
            <span className="text-[11px] font-mono font-bold tracking-widest text-primary uppercase block mb-2">
              Our Journey // Key Milestones
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground">
              Five Decades of Academic Excellence
            </h2>
          </div>

          <div className="relative border-l-2 border-primary/30 ml-4 md:ml-6 space-y-12 pl-6 md:pl-10">
            {milestones.map((m) => (
              <div key={m.year} className="relative">
                <div className="absolute -left-[31px] md:-left-[47px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-1">
                  {m.year}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-2">{m.title}</h3>
                <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philanthropic & Social Welfare Activities */}
      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24">
        <div className="max-w-2xl mb-14">
          <span className="text-[11px] font-mono font-bold tracking-widest text-primary uppercase block mb-2">
            Social Responsibility // Welfare Initiatives
          </span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground">
            Building Stronger Communities
          </h2>
        </div>

        <Stagger gap={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {welfareActivities.map((act) => (
            <StaggerItem
              key={act.title}
              variant="rise"
              className="bg-card border border-border p-8 rounded-md shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Heart size={20} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{act.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{act.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Group Institutions CTA */}
      <section className="border-t border-border bg-page-bg py-12">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-semibold text-muted-foreground">
            Explore the complete network of Mohamed Sathak institutions.
          </span>
          <Link
            to="/about/group-institutions"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-md hover:bg-primary/90 transition-colors shadow-sm"
          >
            Group of Institutions &raquo;
          </Link>
        </div>
      </section>
    </main>
  );
}
