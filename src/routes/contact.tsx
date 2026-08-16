import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Mail, MapPin, Phone } from "lucide-react";

const title = "Contact MSAJCE — Admissions & Campus Enquiries";
const description =
  "Reach the MSAJCE admissions office on Chennai's OMR IT corridor by phone, email or the enquiry form.";

export const Route = createFileRoute("/contact")({
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
  component: Contact,
});

const details = [
  { icon: MapPin, label: "Campus", value: "OMR IT Corridor, Chennai, Tamil Nadu 603103" },
  { icon: Phone, label: "Phone", value: "+91 44 2747 0000" },
  { icon: Mail, label: "Email", value: "admissions@msajce.edu.in" },
];

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <main className="bg-black">
      <PageHero
        eyebrow="Contact"
        title="Talk to the admissions team"
        description="Weekdays 9am to 5pm. Campus tours can be scheduled on Saturdays with prior notice."
      />

      <section className="mx-auto grid max-w-[1440px] gap-14 px-6 py-24 md:px-12 lg:grid-cols-2">
        <div className="space-y-6">
          {details.map((d) => (
            <div key={d.label} className="flex gap-5 rounded-3xl border border-white/12 bg-white/5 p-8">
              <d.icon size={20} className="mt-1 shrink-0 text-white" />
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">{d.label}</div>
                <div className="mt-2 text-lg text-white">{d.value}</div>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-3xl border border-white/12 bg-white/5 p-9"
        >
          <h2 className="text-2xl font-black uppercase tracking-tight text-white">Send an enquiry</h2>
          <div className="mt-8 space-y-5">
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">Full name</span>
              <input
                required
                className="mt-2 w-full rounded-xl border border-white/15 bg-black px-4 py-3 text-sm text-white outline-none focus:border-white"
              />
            </label>
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">Email</span>
              <input
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-white/15 bg-black px-4 py-3 text-sm text-white outline-none focus:border-white"
              />
            </label>
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">Message</span>
              <textarea
                rows={5}
                required
                className="mt-2 w-full rounded-xl border border-white/15 bg-black px-4 py-3 text-sm text-white outline-none focus:border-white"
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-black transition-transform hover:-translate-y-0.5"
          >
            {sent ? "Thank you — we'll be in touch" : "Send enquiry"}
          </button>
        </form>
      </section>
    </main>
  );
}
