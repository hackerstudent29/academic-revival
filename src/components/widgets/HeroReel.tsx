import { EditableImage } from '@/components/admin/EditableImage';
import { EditableText } from '@/components/admin/EditableText';

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
    <div className="h-full w-full overflow-hidden">
      <div className="msajce-reel flex flex-col" style={{ height: `${items.length * 2 * 65}%` }}>
        {[...items, ...items].map((item, i) => (
          <div
            key={`${item.tag}-${i}`}
            className="group relative w-full overflow-hidden"
            style={{ height: `${100 / (items.length * 2)}%` }}
          >
            <EditableImage
              page="home"
              field={`hero.reel.${i % items.length}.src`}
              defaultSrc={item.src}
              alt={item.title}
              className="pointer-events-none h-full w-full object-cover transition-transform duration-[1400ms] ease-out"
            />
            {/* Gradient + text — only visible on hover */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-x-6 bottom-6 flex flex-col gap-2 translate-y-4 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              <EditableText
                page="home"
                field={`hero.reel.${i % items.length}.tag`}
                defaultValue={item.tag}
                as="span"
                className="inline-flex self-start rounded-[3px] bg-primary px-3 py-1 text-[11px] font-black uppercase tracking-[0.15em] text-primary-foreground"
              />
              <EditableText
                page="home"
                field={`hero.reel.${i % items.length}.title`}
                defaultValue={item.title}
                as="h3"
                className="text-3xl font-black leading-tight tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.7)] sm:text-4xl"
              />
              <EditableText
                page="home"
                field={`hero.reel.${i % items.length}.desc`}
                defaultValue={item.desc}
                as="p"
                className="max-w-[85%] text-sm leading-relaxed text-white/90"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
