const ALT = "Mohamed Sathak A J College of Engineering and Architecture, Chennai";

export function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <img src="/logos/msajce-logo-transparent.png" alt={ALT} className="h-full w-auto object-contain" />
    </span>
  );
}
