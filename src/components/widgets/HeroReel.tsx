const items = [
  {
    id: "placement_interview",
    src: "/images/placement/03interviewroom.jpg",
    fallback: "/images/eligibility_hero.jpg",
    tag: "Placements",
    title: "Placement & Interview Suites",
    desc: "Dedicated interview cabins and discussion rooms for corporate recruitment.",
  },
  {
    id: "placement_training",
    src: "/images/placement/05classroom.jpg",
    fallback: "/images/eligibility_hero.jpg",
    tag: "Training",
    title: "Career & Soft Skills Training",
    desc: "Comprehensive aptitude, communication, and technical interview preparation.",
  },
  {
    id: "placement_lab",
    src: "/images/placement/06LAB.jpg",
    fallback: "/images/eligibility_hero.jpg",
    tag: "Facilities",
    title: "High-Tech Computer Labs",
    desc: "AC computer labs configured for online exams and global hiring drives.",
  },
  {
    id: "dsc6402",
    src: "/images/hero_dsc6402.jpg",
    fallback: "/DSC06402.JPG",
    tag: "Research",
    title: "Inspiring Innovation",
    desc: "Fostering academic excellence through study and research at MSAJCE.",
  },
  {
    id: "placement_gd",
    src: "/images/placement/02GDROOM.jpg",
    fallback: "/images/eligibility_hero.jpg",
    tag: "Placement Cell",
    title: "Group Discussion Chambers",
    desc: "Acoustically designed rooms for interactive group evaluations.",
  },
  {
    id: "placement_cnc",
    src: "/images/placement/CNCLab.jpg",
    fallback: "/images/eligibility_hero.jpg",
    tag: "Technology",
    title: "Advanced CNC & Robotics Labs",
    desc: "Industry-integrated hands-on training with cutting-edge engineering rigs.",
  },
  {
    id: "dsc6410",
    src: "/images/hero_dsc6410.jpg",
    fallback: "/DSC06410.JPG",
    tag: "Heritage",
    title: "25+ Years of Legacy",
    desc: "Delivering outstanding technical education in Chennai since 2001.",
  },
  {
    id: "dsc6419",
    src: "/images/hero_dsc6419.jpg",
    fallback: "/DSC06419.JPG",
    tag: "Campus Life",
    title: "Vibrant Community",
    desc: "State-of-the-art infrastructure and holistic student development.",
  },
];

export function HeroReel() {
  return (
    <div className="h-full w-full overflow-hidden">
      <div className="msajce-reel flex flex-col" style={{ height: `${items.length * 2 * 65}%` }}>
        {[...items, ...items].map((item, i) => (
          <div
            key={`${item.id}-${i}`}
            className="group relative w-full overflow-hidden"
            style={{ height: `${100 / (items.length * 2)}%` }}
          >
            <img
              key={item.id}
              src={item.src}
              alt={item.title}
              className="pointer-events-none h-full w-full object-cover transition-transform duration-[1400ms] ease-out"
              onError={(e) => {
                if (item.fallback) {
                  (e.target as HTMLImageElement).src = item.fallback;
                }
              }}
            />
            {/* Gradient + text — visible on hover */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-x-6 bottom-6 flex flex-col gap-2 translate-y-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              <span className="inline-flex self-start rounded-tl-md rounded-br-md rounded-tr-xs rounded-bl-xs bg-primary px-3 py-1 text-[11px] font-black uppercase tracking-[0.15em] text-primary-foreground font-oswald">
                {item.tag}
              </span>
              <h3 className="text-3xl font-black leading-tight tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.7)] font-oswald uppercase sm:text-4xl">
                {item.title}
              </h3>
              <p className="max-w-[85%] text-sm leading-relaxed text-white/90 font-libre font-medium">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


