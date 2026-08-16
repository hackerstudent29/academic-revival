import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { WhyJoinSection } from "@/components/WhyJoinSection";

const title = "Campus Life at MSAJCE — Clubs, Sports & Hostels";
const description =
  "Labs, hostels, sports facilities and student clubs that shape life on the MSAJCE campus in Chennai.";

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
  { t: "Hostels", d: "Separate men's and women's blocks with Wi-Fi, mess and 24/7 warden support.", img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=900&q=80" },
  { t: "Sports", d: "Cricket ground, indoor courts, gym and a full athletics track used for inter-college meets.", img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80" },
  { t: "Library", d: "Digital and print library with IEEE, Springer and Elsevier access for every student.", img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=80" },
  { t: "Clubs", d: "Robotics, coding, entrepreneurship, music and literary clubs run entirely by students.", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80" },
];

function CampusLife() {
  return (
    <main className="bg-background">
      <PageHero
        eyebrow="Campus Life"
        title="A campus that runs on curiosity"
        description="Beyond lectures — hackathons at midnight, inter-college tournaments, cultural nights and clubs led by students."
      />

      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-12">
        <div className="grid gap-8 sm:grid-cols-2">
          {facilities.map((f) => (
            <article key={f.t} className="group overflow-hidden rounded-3xl border border-foreground/12 bg-foreground/5">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={f.img}
                  alt={f.t}
                  className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-foreground">{f.t}</h2>
                <p className="mt-3 text-sm leading-relaxed text-foreground/60">{f.d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <WhyJoinSection />
    </main>
  );
}
