import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    Icon: Instagram,
    hoverBg: "hover:bg-[#E1306C]",
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    Icon: Facebook,
    hoverBg: "hover:bg-[#1877F2]",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    Icon: Linkedin,
    hoverBg: "hover:bg-[#0A66C2]",
  },
  {
    label: "X (Twitter)",
    href: "https://x.com",
    Icon: Twitter,
    hoverBg: "hover:bg-[#000000]",
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    Icon: Youtube,
    hoverBg: "hover:bg-[#FF0000]",
  },
];

export function StickySocialBar() {
  return (
    <aside
      aria-label="Social Media Quick Links"
      className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-1 select-none pointer-events-auto"
    >
      {socialLinks.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`Visit MSAJCE on ${label}`}
          className="group relative flex items-center h-10 w-10 pl-2.5 rounded-r-lg border border-l-0 border-border/80 dark:border-white/15 bg-background/95 dark:bg-[#18181B]/95 backdrop-blur-md shadow-md transition-all duration-300 hover:w-auto hover:pr-3.5 hover:shadow-lg hover:border-primary/50 overflow-hidden"
        >
          {/* Liquid Ocean Wave Fill Effect on Hover */}
          <span className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-r-lg">
            <span className="absolute inset-x-0 top-0 h-[140%] bg-primary translate-y-[150%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <span className="absolute -top-3.5 left-0 w-[200%] h-4 pointer-events-none block">
                <svg
                  className="w-full h-full fill-primary animate-ocean-wave"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                >
                  <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,-20 1200,40 L1200,120 L0,120 Z" />
                </svg>
              </span>
              <span className="absolute -top-4 left-0 w-[200%] h-5 opacity-40 pointer-events-none block">
                <svg
                  className="w-full h-full fill-primary animate-ocean-wave-reverse"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                >
                  <path d="M0,30 C200,-30 400,90 600,10 C800,-40 1000,70 1200,20 L1200,120 L0,120 Z" />
                </svg>
              </span>
            </span>
          </span>

          {/* Social Icon */}
          <Icon className="relative z-10 w-4 h-4 text-foreground/80 dark:text-foreground/90 group-hover:text-white transition-colors duration-300 shrink-0" />

          {/* Slide-out Label on Hover */}
          <span className="relative z-10 max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:ml-2 font-oswald text-xs font-bold uppercase tracking-wider text-white whitespace-nowrap overflow-hidden transition-all duration-300 ease-out">
            {label}
          </span>
        </a>
      ))}
    </aside>
  );
}
