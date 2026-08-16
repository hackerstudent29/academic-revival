const items = [
  {
    src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&h=450&q=80",
    tag: "Research",
    title: "Inspiring Innovation",
    desc: "Fostering academic excellence through rigorous study and research.",
  },
  {
    src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&h=450&q=80",
    tag: "Heritage",
    title: "25+ Years of Legacy",
    desc: "Delivering outstanding technical education in Chennai since 2001.",
  },
  {
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&h=450&q=80",
    tag: "Affiliation",
    title: "Approved by AICTE",
    desc: "Approved by AICTE and affiliated to Anna University, Chennai.",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=450&q=80",
    tag: "Placements",
    title: "95% Placement Record",
    desc: "Outstanding placement training and hiring by top MNCs.",
  },
  {
    src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&h=450&q=80",
    tag: "Campus Life",
    title: "OMR IT Corridor Location",
    desc: "Located on Chennai's IT highway, featuring state-of-the-art labs.",
  },
  {
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&h=450&q=80",
    tag: "Philosophy",
    title: "Build a Life",
    desc: "Nurturing ethical engineers, shaping future technology leaders.",
  },
];

function Card({ item }: { item: (typeof items)[number] }) {
  return (
    <div className="group relative h-[340px] w-full shrink-0 select-none overflow-hidden">
      <img
        src={item.src}
        alt={item.title}
        loading="lazy"
        className="pointer-events-none h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-x-8 bottom-8 flex translate-y-6 flex-col gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="inline-flex self-start rounded-[3px] bg-primary px-2.5 py-[3px] text-[9px] font-black uppercase tracking-[0.15em] text-primary-foreground">
          {item.tag}
        </span>
        <h3 className="text-2xl font-black leading-tight tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.7)]">
          {item.title}
        </h3>
        <p className="max-w-[88%] text-[12px] leading-relaxed text-white/90">{item.desc}</p>
      </div>
    </div>
  );
}

export function HeroReel() {
  return (
    <div className="absolute inset-0 hidden overflow-hidden md:block">
      <div className="msajce-reel flex flex-col">
        {[...items, ...items].map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}