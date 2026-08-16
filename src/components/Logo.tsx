import logoLight from "@/assets/msajce-logo.png.asset.json";
import logoDark from "@/assets/msajce-logo-white.png.asset.json";

const ALT = "Mohamed Sathak A J College of Engineering and Architecture, Chennai";

export function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img src={logoLight.url} alt={ALT} className="h-full w-auto object-contain dark:hidden" />
      <img src={logoDark.url} alt="" aria-hidden className="hidden h-full w-auto object-contain dark:block" />
    </span>
  );
}
