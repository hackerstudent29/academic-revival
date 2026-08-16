import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logoAsset from "@/assets/msajce-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/12 bg-background">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-20 md:grid-cols-4 md:px-12">
        <div className="md:col-span-2">
          <img
            src={logoAsset.url}
            alt="Mohamed Sathak A J College of Engineering and Architecture"
            className="h-12 w-auto object-contain dark:invert dark:hue-rotate-180"
          />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/60">
            An autonomous-spirited engineering campus on Chennai's OMR IT corridor, affiliated to Anna
            University and approved by AICTE, New Delhi.
          </p>
          <div className="mt-8 space-y-3 text-sm text-foreground/60">
            <p className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              OMR IT Corridor, Chennai, Tamil Nadu 603103
            </p>
            <p className="flex items-center gap-3">
              <Phone size={16} /> +91 44 2747 0000
            </p>
            <p className="flex items-center gap-3">
              <Mail size={16} /> admissions@msajce.edu.in
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm text-foreground/60">
            <li><Link to="/about" className="hover:text-foreground">About the College</Link></li>
            <li><Link to="/academics" className="hover:text-foreground">Academic Programmes</Link></li>
            <li><Link to="/placements" className="hover:text-foreground">Placements</Link></li>
            <li><Link to="/campus-life" className="hover:text-foreground">Campus Life</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground">Admissions</h3>
          <ul className="mt-5 space-y-3 text-sm text-foreground/60">
            <li><Link to="/admissions" className="hover:text-foreground">How to Apply</Link></li>
            <li><Link to="/admissions" className="hover:text-foreground">Eligibility</Link></li>
            <li><Link to="/admissions" className="hover:text-foreground">Scholarships</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Talk to Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-foreground/12 px-6 py-6 text-center text-xs uppercase tracking-[0.16em] text-foreground/40 md:px-12">
        &copy; {new Date().getFullYear()} MSAJCE. All rights reserved.
      </div>
    </footer>
  );
}
