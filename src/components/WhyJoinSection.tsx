import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reasons = [
  {
    title: "Prime Location",
    desc: "Situated on the OMR IT Corridor - Chennai's tech highway - giving students unmatched access to MNCs, startups, and research hubs.",
    img: "https://images.unsplash.com/photo-1541888018376-7ec93d14dd84?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Industry Tie-ups",
    desc: "Live projects, corporate mentorship, and hackathons run year-round in partnership with top-tier technology companies.",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "State-of-the-Art Labs",
    desc: "Fully equipped research labs, innovation centres, and an IDEA Lab designed to transform ideas into real-world prototypes.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Scholarships & Sports",
    desc: "Merit-based and sports scholarships available so that talent - academic or athletic - is always recognised and rewarded.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
];

export function WhyJoinSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full relative py-32 bg-black text-white" id="why-msajce">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        <div className="lg:w-1/2 lg:sticky lg:top-32 flex flex-col gap-8 z-10 h-[70vh]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight">
              Why <span className="text-[var(--primary-blue)]">Join</span> MSAJCE?
            </h2>
          </motion.div>

          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-white/10">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={reasons[activeIndex].img}
                alt={reasons[activeIndex].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>

        <div className="lg:w-1/2 flex flex-col gap-32 py-[20vh] z-10">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-50% 0px -50% 0px" }}
              onViewportEnter={() => setActiveIndex(i)}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2rem] shadow-2xl transition-transform"
            >
              <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 transition-all duration-700 ease-out" />
              <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
              <p className="text-lg text-white/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
