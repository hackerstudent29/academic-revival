import { motion } from "framer-motion";

const items = [
  {
    src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1400&h=900&q=80",
    tag: "Research",
    title: "Inspiring Innovation",
    desc: "Fostering academic excellence through rigorous study and research.",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&h=900&q=80",
    tag: "Heritage",
    title: "25+ Years of Legacy",
    desc: "Delivering outstanding technical education in Chennai since 2001.",
  },
];

export function HeroReel() {
  return (
    <div className="hidden h-full flex-col md:flex">
      {items.map((item, i) => (
        <motion.div
          key={item.tag}
          initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 1.1, delay: 0.15 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="group relative min-h-0 flex-1 overflow-hidden"
        >
          <img
            src={item.src}
            alt={item.title}
            loading={i === 0 ? "eager" : "lazy"}
            className="pointer-events-none h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
          <div className="absolute inset-x-6 bottom-5 flex flex-col gap-1.5 transition-transform duration-500 group-hover:-translate-y-1">
            <span className="inline-flex self-start rounded-[3px] bg-primary px-2.5 py-[3px] text-[9px] font-black uppercase tracking-[0.15em] text-primary-foreground">
              {item.tag}
            </span>
            <h3 className="text-2xl font-black leading-tight tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.7)]">
              {item.title}
            </h3>
            <p className="max-w-[85%] text-[11px] leading-relaxed text-white/85">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
