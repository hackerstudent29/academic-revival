const items = [
  {
    src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&h=800&q=80",
    tag: "Research",
    title: "Inspiring Innovation",
    desc: "Fostering academic excellence through rigorous study and research.",
  },
  {
    src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&h=800&q=80",
    tag: "Campus Life",
    title: "OMR IT Corridor Location",
    desc: "Located on Chennai's IT highway, featuring state-of-the-art labs.",
  },
];

export function HeroReel() {
  return (
    <div className="hidden h-full flex-col md:flex">
      {items.map((item) => (
        <div key={item.tag} className="group relative flex-1 min-h-0 overflow-hidden">
          <img
            src={item.src}
            alt={item.title}
            loading="lazy"
            className="pointer-events-none h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute inset-x-6 bottom-6 flex translate-y-4 flex-col gap-1.5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="inline-flex self-start rounded-[3px] bg-primary px-2.5 py-[3px] text-[9px] font-black uppercase tracking-[0.15em] text-primary-foreground">
              {item.tag}
            </span>
            <h3 className="text-xl font-black leading-tight tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.7)]">
              {item.title}
            </h3>
            <p className="max-w-[90%] text-[11px] leading-relaxed text-white/90">{item.desc}</p>
          </div>
        </div>
      ))}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
