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
  { icon: MapPin, label: "Campus", value: "34, Rajiv Gandhi Salai (OMR), Siruseri IT Park, Chennai - 603103, Tamil Nadu, India." },
  { icon: Phone, label: "Phone & Helpdesk", value: "+91 99400 04500" },
  { icon: Mail, label: "General Office Email", value: "msajce.office@gmail.com" },
  { icon: Mail, label: "Admissions Email", value: "admission@msajce-edu.in" },
];

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <main className="bg-background">
      <PageHero
        eyebrow="Contact"
        title="Talk to the admissions team"
        description="Monday – Friday: 9:00 AM – 8:00 PM | Saturday: 10:00 AM – 4:00 PM | Sunday: 9:30 AM – 6:00 PM"
      />

      <section className="mx-auto grid max-w-[1440px] gap-14 px-6 py-24 md:px-12 lg:grid-cols-2">
        <div className="space-y-6">
          {details.map((d) => (
            <div key={d.label} className="flex gap-5 rounded-3xl border border-foreground/12 bg-foreground/5 p-8">
              <d.icon size={20} className="mt-1 shrink-0 text-foreground" />
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/50">{d.label}</div>
                <div className="mt-2 text-lg text-foreground">{d.value}</div>
              </div>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-3xl border border-foreground/12 bg-foreground/5 p-9"
        >
          <h2 className="text-2xl font-black uppercase tracking-tight text-foreground">Send an enquiry</h2>
          <div className="mt-8 space-y-5">
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-foreground/50">Full name</span>
              <input
                required
                className="mt-2 w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-border"
              />
            </label>
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-foreground/50">Email</span>
              <input
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-border"
              />
            </label>
            <label className="block">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-foreground/50">Message</span>
              <textarea
                rows={5}
                required
                className="mt-2 w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-border"
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-primary px-8 py-4 text-xs font-bold uppercase tracking-[0.16em] text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            {sent ? "Thank you — we'll be in touch" : "Send enquiry"}
          </button>
        </form>
      </section>
    </main>
  );
}
