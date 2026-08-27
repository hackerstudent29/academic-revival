const recruiters = [
  { name: "Amazon", logo: "/logos/amazon.svg" },
  { name: "Cognizant", logo: "/logos/cognizant.svg" },
  { name: "Zoho", logo: "/logos/zoho_new.svg" },
  { name: "TCS", logo: "/logos/tcs.svg" },
  { name: "Infosys", logo: "/logos/infosys.svg" },
  { name: "Wipro", logo: "/logos/wipro.svg" },
  { name: "IBM", logo: "/logos/ibm.svg" },
  { name: "Hitachi", logo: "/logos/hitachi.svg" },
  { name: "Atos", logo: "/logos/atos.svg" },
  { name: "Lenovo", logo: "/logos/lenovo.svg" },
  { name: "Valeo", logo: "/logos/valeo.svg" },
  { name: "TVS", logo: "/logos/tvs.svg" },
  { name: "Aspire", logo: "/logos/aspire.png" },
  { name: "Movate", logo: "/logos/movate.png" },
  { name: "QBurst", logo: "/logos/qburst.png" },
];

function Row({ list, duration }: { list: typeof recruiters; duration: string }) {
  return (
    <div className="group flex w-full overflow-hidden">
      {[0, 1].map((k) => (
        <div
          key={k}
          aria-hidden={k === 1}
          className="msajce-marquee flex min-w-full shrink-0 items-center justify-around gap-16 pr-16 group-hover:[animation-play-state:paused] md:gap-24 md:pr-24"
          style={{ animationDuration: duration }}
        >
          {list.map((item) => (
              <div
                key={`${k}-${item.name}`}
                className="flex items-center justify-center rounded-sm dark:bg-white/95 dark:px-4 dark:py-2"
              >
              <img
                src={item.logo}
                alt={item.name}
                className="h-6 md:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export function RecruiterMarquee() {
  return (
    <div className="flex select-none flex-col py-2">
      <Row list={recruiters} duration="50s" />
    </div>
  );
}