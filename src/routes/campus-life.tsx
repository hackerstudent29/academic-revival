import { createFileRoute } from "@tanstack/react-router";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/shared/PageHero";
import { WhyJoinSection } from "@/components/sections/WhyJoinSection";
import { ShieldAlert, BookOpen, Code, Trophy } from "lucide-react";

const title = "Campus Life at MSAJCE — Tech Centres, Facilities & Discipline";
const description =
  "Experience experiential learning through 19 Technology Centres, state-of-the-art facilities, and a disciplined campus environment in Chennai.";

export const Route = createFileRoute("/campus-life")({
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
  component: CampusLife,
});

const facilities = [
  { t: "Hostels", d: "Separate men's and women's blocks with Wi-Fi, mess and 24/7 warden support for a secure stay.", img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=900&q=80" },
  { t: "Sports", d: "Cricket ground, indoor courts, gym and a full athletics track used for inter-college meets and fitness.", img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80" },
  { t: "Digital Library", d: "Integrated Library Management System (ILMS) with massive subscriptions to IEEE, Springer, and e-resources.", img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80" },
  { t: "Tech Clubs & NSS", d: "Engage in social outreach through NSS/YRC or join cutting-edge robotics and coding chapters.", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80" },
];

const rules = [
  "Mandatory minimum 75% attendance per semester as per Anna University regulations.",
  "Proper formal dress code, formal shoes, and visible display of student ID cards at all times.",
  "Mobile phones and laptops permitted on campus but strictly prohibited during lecture hours and examinations.",
  "Zero tolerance policy for discrimination based on gender, caste, religion, or language."
];

function CampusLife() {
  return (
    <main className="bg-background">
      <PageHero
        eyebrow="Campus Life"
        title="A Campus Designed for Innovation"
        description="Beyond lectures — experience our 19 Technology Centres, vibrant student clubs, and a strictly disciplined environment that builds character."
      />

      {/* Flagship Tech Centres Section */}
      <section id="tech-centres" className="border-b border-foreground/12 bg-foreground/[0.03] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <Reveal variant="mask">
                <h2 className="text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl">19 Technology Centres</h2>
              </Reveal>
              <Reveal variant="mask" delay={0.1}>
                <p className="mt-4 text-lg text-foreground/60 leading-relaxed">
                  As part of our NAAC-recognized Best Practices, MSAJCE hosts 19 specialized technology centres including CISCO, Altair, and Automation Anywhere.
                </p>
                <p className="mt-4 text-lg text-foreground/60 leading-relaxed">
                  Our unique <strong>Afternoon Laboratory Classes</strong> model schedules core academics in the forenoon and dedicates the afternoon entirely to experiential learning, lab practice, and industry certifications.
                </p>
              </Reveal>
            </div>
            
            <Stagger gap={0.1} className="grid grid-cols-2 gap-4">
              <StaggerItem variant="scale" className="flex flex-col items-center justify-center p-6 text-center border border-foreground/12 rounded-3xl bg-background">
                <Code className="text-primary mb-3" size={32} />
                <h3 className="font-bold text-foreground">CISCO Networking</h3>
              </StaggerItem>
              <StaggerItem variant="scale" className="flex flex-col items-center justify-center p-6 text-center border border-foreground/12 rounded-3xl bg-background">
                <Trophy className="text-primary mb-3" size={32} />
                <h3 className="font-bold text-foreground">Altair Simulation</h3>
              </StaggerItem>
              <StaggerItem variant="scale" className="flex flex-col items-center justify-center p-6 text-center border border-foreground/12 rounded-3xl bg-background">
                <BookOpen className="text-primary mb-3" size={32} />
                <h3 className="font-bold text-foreground">Automation Anywhere</h3>
              </StaggerItem>
              <StaggerItem variant="scale" className="flex flex-col items-center justify-center p-6 text-center border border-foreground/12 rounded-3xl bg-background">
                <ShieldAlert className="text-primary mb-3" size={32} />
                <h3 className="font-bold text-foreground">Cyber Security</h3>
              </StaggerItem>
            </Stagger>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section id="facilities" className="mx-auto max-w-[1440px] px-6 py-24 md:px-12">
        <Reveal variant="mask">
          <h2 className="text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl mb-12">Campus Facilities</h2>
        </Reveal>
        <Stagger gap={0.1} className="grid gap-8 sm:grid-cols-2">
          {facilities.map((f) => (
            <StaggerItem key={f.t} variant="unfold" className="group overflow-hidden rounded-3xl border border-foreground/12 bg-foreground/5">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={f.img}
                  alt={f.t}
                  // Removed the zoom/scale effect per mandatory rule, keeping only grayscale transition
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-foreground">{f.t}</h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">{f.d}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Code of Conduct */}
      <section id="code-of-conduct" className="border-t border-foreground/12 bg-foreground/[0.03] px-6 py-24 md:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="rounded-3xl border border-foreground/12 bg-background p-10 md:p-14">
            <Reveal variant="mask">
              <h2 className="text-3xl font-black uppercase tracking-tight text-primary sm:text-4xl mb-8">Student Code of Conduct</h2>
            </Reveal>
            <ul className="space-y-4">
              {rules.map((rule, idx) => (
                <Reveal key={idx} variant="slide-up" delay={idx * 0.1}>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                      {idx + 1}
                    </span>
                    <p className="text-lg text-foreground/80 leading-relaxed">{rule}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <WhyJoinSection />
    </main>
  );
}
