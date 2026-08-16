import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/12 bg-black">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-20 md:grid-cols-4 md:px-12">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-black uppercase tracking-tight text-white">
            M.S.A.J. College of Engineering
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
            An autonomous-spirited engineering campus on Chennai's OMR IT corridor, affiliated to Anna
            University and approved by AICTE, New Delhi.
          </p>
          <div className="mt-8 space-y-3 text-sm text-white/60">
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
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/60">
            <li><Link to="/about" className="hover:text-white">About the College</Link></li>
            <li><Link to="/academics" className="hover:text-white">Academic Programmes</Link></li>
            <li><Link to="/placements" className="hover:text-white">Placements</Link></li>
            <li><Link to="/campus-life" className="hover:text-white">Campus Life</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white">Admissions</h3>
          <ul className="mt-5 space-y-3 text-sm text-white/60">
            <li><Link to="/admissions" className="hover:text-white">How to Apply</Link></li>
            <li><Link to="/admissions" className="hover:text-white">Eligibility</Link></li>
            <li><Link to="/admissions" className="hover:text-white">Scholarships</Link></li>
            <li><Link to="/contact" className="hover:text-white">Talk to Us</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/12 px-6 py-6 text-center text-xs uppercase tracking-[0.16em] text-white/40 md:px-12">
        &copy; {new Date().getFullYear()} MSAJCE. All rights reserved.
      </div>
    </footer>
  );
}
