const recruiters = [
  "Amazon",
  "Cognizant",
  "Zoho",
  "TCS",
  "Infosys",
  "Wipro",
  "IBM",
  "Hitachi",
  "Atos",
  "Lenovo",
  "Valeo",
];

function Row({ list, duration }: { list: string[]; duration: string }) {
  return (
    <div className="group flex w-full overflow-hidden">
      {[0, 1].map((k) => (
        <div
          key={k}
          aria-hidden={k === 1}
          className="msajce-marquee flex min-w-full shrink-0 items-center gap-16 pr-16 group-hover:[animation-play-state:paused]"
          style={{ animationDuration: duration }}
        >
          {list.map((name) => (
            <span
              key={`${k}-${name}`}
              className="whitespace-nowrap text-2xl font-black uppercase tracking-tight text-foreground/45 transition-colors duration-300 hover:text-foreground sm:text-3xl"
            >
              {name}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export function RecruiterMarquee() {
  const row2 = [...recruiters.slice(5), ...recruiters.slice(0, 5)];
  return (
    <div className="flex select-none flex-col gap-6 py-8">
      <Row list={recruiters} duration="40s" />
      <Row list={row2} duration="30s" />
    </div>
  );
}