import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Heart, Building2, GraduationCap, Award, ShieldCheck, ArrowRight, Quote } from "lucide-react";

const title = "The Trust — Mohamed Sathak Trust | Educational & Social Welfare";
const description =
  "Discover Mohamed Sathak Trust established on 26 October 1973, managing 18 educational institutions across Tamil Nadu.";

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
  { year: "26 OCT 1973", title: "Establishment of Mohamed Sathak Trust", desc: "Founded at Kilakarai by the philanthropic Mohamed Sathak Family of Ramanathapuram District to empower rural and financially challenged students with quality education." },
  { year: "1984", title: "First Self-Financing Engineering College in TN", desc: "Established Mohamed Sathak Engineering College at Kilakarai — pioneering self-financing technical education in Tamil Nadu." },
  { year: "1990s", title: "Expansion into Health Sciences & Arts", desc: "Launched pharmacy, nursing, physiotherapy, and arts & science colleges across Kilakarai, Ramanathapuram, and Chennai." },
  { year: "5 JULY 2001", title: "Establishment of MSAJCE in Chennai IT Park", desc: "Founded Mohamed Sathak A.J. College of Engineering inside the 70-acre SIPCOT IT Park in Siruseri, OMR, Chennai." },
  { year: "PRESENT", title: "18 Premier Educational Institutions", desc: "A thriving educational legacy managing 18 institutions across Engineering, Architecture, Medicine, Arts, Science, and K-12 Schooling." },
];

const trustees = [
  { name: "Alhaj S.M. Yousuf Sahib", role: "Chairman", desc: "Visionary leader steering the Trust's strategic growth and educational mission across Tamil Nadu." },
  { name: "Janaba S.M.H. Sharmila", role: "Secretary", desc: "Championing academic excellence, infrastructure modernization, and institutional governance." },
  { name: "Janab P.R.L. Hamid Ibrahim", role: "Executive Director", desc: "Overseeing administration, operational growth, and global technical collaborations." },
  { name: "Mr. S.M.Y. Mohamed Sathak", role: "Campus Director", desc: "Directing campus development, industry partnerships, and student welfare initiatives." },
];

const welfareActivities = [
  { title: "Educational Philanthropy & Concessions", desc: "Providing fee concessions, merit-cum-means scholarships, and support for economically challenged rural students." },
  { title: "Rural Upliftment & Technical Skills", desc: "Empowering rural youth with vocational, technical, and professional skills for sustainable self-employability." },
  { title: "Women's Empowerment in Education", desc: "Establishing dedicated women's colleges and promoting female participation in engineering, science, and healthcare." },
  { title: "Healthcare & Community Services", desc: "Free medical, dental, and health screening camps conducted by the Trust's nursing and pharmacy colleges." },
];

export function TheTrustPage() {
  return (
    <main className="bg-page-bg text-foreground min-h-screen pt-0 md:pt-1">
      {/* Header & Sub-Nav Title */}
      <section className="relative border-b border-border bg-page-bg pt-4 md:pt-6 pb-12 md:pb-16">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          {/* Secondary Sub-Nav Header */}
          <div className="mb-4">
            <span className="text-sm sm:text-base md:text-lg xl:text-xl font-black font-oswald uppercase text-primary tracking-wider">
              ABOUT MSAJCE // PHILANTHROPIC HERITAGE
            </span>
          </div>

          <div className="flex flex-col gap-3 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-foreground font-oswald leading-none">
              Mohamed Sathak <br />
              <span className="text-primary font-oswald">Trust History</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground font-sans mt-2">
              Established on <strong>26 October 1973</strong> to empower rural and deprived youth through academic excellence, vocational training, and social service.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Narrative & Motto */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Reveal variant="slide-right">
              <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">
                // 50+ Years of Educational Service
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground font-oswald mt-1">
                Empowering Generations Through Education
              </h2>
            </Reveal>

            <Reveal variant="slide-right" delay={0.1}>
              <p className="text-base sm:text-lg leading-relaxed text-foreground font-sans">
                The <strong>Mohamed Sathak Trust</strong>, a charitable and educational organization, was established on <strong>26 October 1973</strong> at Kilakarai by the philanthropic Mohamed Sathak Family of Kilakarai, Ramanathapuram District, Tamil Nadu, with the sole purpose of helping deprived people from rural and financially challenged backgrounds to obtain quality education.
              </p>
            </Reveal>

            <Reveal variant="slide-right" delay={0.2}>
              <p className="text-base leading-relaxed text-muted-foreground font-sans">
                The first self-financing engineering college in Tamil Nadu (Mohamed Sathak Engineering College) was established by the Trust in 1984 at Kilakarai. Since then, the Trust has maintained an impeccable track record of running <strong>18 premier educational institutions</strong> from higher secondary level to undergraduate, postgraduate, and doctoral levels across Kilakarai, Ramanathapuram, and Chennai.
              </p>
            </Reveal>

            <Reveal variant="slide-right" delay={0.3}>
              <div className="bg-card border-l-4 border-primary p-6 rounded-r-md shadow-xs">
                <Quote className="h-6 w-6 text-primary mb-2" />
                <p className="text-lg font-bold text-foreground font-oswald uppercase leading-snug">
                  "God will not change the condition of a people until they try to change themselves."
                </p>
                <span className="text-xs text-muted-foreground font-sans mt-2 block">
                  Foundational Philosophy of Mohamed Sathak Trust
                </span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden border border-border bg-card shadow-sm aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop"
                alt="Mohamed Sathak Educational Campus"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
                  Est. 26 October 1973
                </span>
                <span className="text-white text-base font-bold tracking-tight font-oswald uppercase mt-1">
                  18 Institutions Across Tamil Nadu
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Management Leadership */}
      <section className="bg-page-bg border-y border-border py-12 md:py-20">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
              Trust Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground font-oswald">
              Board of Trustees
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustees.map((t) => (
              <div
                key={t.name}
                className="bg-card border border-border p-6 rounded-sm shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-2.5 py-1 bg-primary/10 text-primary text-xs font-mono font-bold uppercase rounded-xs mb-3">
                    {t.role}
                  </span>
                  <h3 className="text-lg font-bold text-foreground font-oswald uppercase mb-2">{t.name}</h3>
                  <p className="text-xs text-muted-foreground font-sans leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Milestones */}
      <section className="mx-auto max-w-[1440px] px-6 py-12 md:px-12 md:py-20">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
            Historical Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground font-oswald">
            Five Decades of Excellence
          </h2>
        </div>

        <div className="relative border-l-2 border-primary ml-4 md:ml-6 space-y-10 pl-6 md:pl-10">
          {milestones.map((m) => (
            <div key={m.year} className="relative">
              <div className="absolute -left-[31px] md:-left-[47px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />
              <span className="text-xs font-mono font-bold text-primary tracking-widest uppercase block mb-1">
                {m.year}
              </span>
              <h3 className="text-xl font-bold text-foreground font-oswald uppercase mb-2">{m.title}</h3>
              <p className="text-sm text-muted-foreground font-sans max-w-3xl leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Welfare Initiatives */}
      <section className="bg-page-bg border-t border-border py-12 md:py-20">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase block mb-1">
              Social Responsibility
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-foreground font-oswald">
              Philanthropic Initiatives
            </h2>
          </div>

          <Stagger gap={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {welfareActivities.map((act) => (
              <StaggerItem
                key={act.title}
                variant="rise"
                className="bg-card border border-border p-8 rounded-sm shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-sm bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Heart size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground font-oswald uppercase mb-2">{act.title}</h3>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">{act.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="border-t border-border bg-page-bg py-10">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm font-semibold text-muted-foreground font-sans">
            Explore the complete directory of Mohamed Sathak Institutions
          </span>
          <Link
            to="/about/group-institutions"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-xs font-bold uppercase tracking-widest rounded-tl-xl rounded-br-xl rounded-tr-xs rounded-bl-xs hover:bg-primary/90 transition-colors font-oswald"
          >
            Group of Institutions &raquo;
          </Link>
        </div>
      </section>
    </main>
  );
}

