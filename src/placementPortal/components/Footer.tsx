import React from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Award, 
  ShieldCheck, 
  ArrowUp,
  FileText,
  ExternalLink
} from 'lucide-react';

interface FooterProps {
  onSelectSection: (sectionId: string) => void;
  onOpenBrochure: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectSection,
  onOpenBrochure,
  onOpenContact,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#082B5C] text-white border-t border-blue-900/60 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Institutional Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white text-[#082B5C] flex items-center justify-center font-black text-sm shadow-md">
                MS
              </div>
              <div>
                <h3 className="font-extrabold text-base tracking-tight font-['Outfit',sans-serif]">
                  MSAJCE
                </h3>
                <p className="text-[10px] text-[#DCEEFF] uppercase tracking-wider">
                  Placement Cell
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Mohamed Sathak A. J. College of Engineering (MSAJCE), established in 2001, approved by AICTE New Delhi and affiliated to Anna University Chennai.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-[10px] bg-white/10 text-[#DCEEFF] px-2 py-0.5 rounded border border-white/10">
                AICTE Approved
              </span>
              <span className="text-[10px] bg-white/10 text-[#DCEEFF] px-2 py-0.5 rounded border border-white/10">
                Anna University
              </span>
              <span className="text-[10px] bg-white/10 text-[#DCEEFF] px-2 py-0.5 rounded border border-white/10">
                ISO 9001:2015
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#DCEEFF] mb-4">
              Placement Sections
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => onSelectSection('overview')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  01 — Placement Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('recruiters')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  02 — Recruiters & Tier Matrix
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('training')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  03 — Skill Training & Facilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('internships')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  04 — Internships & PPO Achievements
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('mous')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  05 — MoUs & Industry Alliances
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSection('journey')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  06 — Higher Studies & Global Track
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Placement Desk Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#DCEEFF] mb-4">
              Training & Placement Office
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1769AA] shrink-0 mt-0.5" />
                <span>
                  Rajiv Gandhi Salai (OMR), Inside SIPCOT IT Park, Siruseri, Chennai – 603 103, Tamil Nadu
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#1769AA] shrink-0" />
                <span>+91 44 2747 0021 / Ext. 114</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#1769AA] shrink-0" />
                <span>placement@msajce-edu.in</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#1769AA] shrink-0" />
                <span>www.msajce-edu.in</span>
              </div>
            </div>
          </div>

          {/* Col 4: Quick Action Portal */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#DCEEFF] mb-4">
              Quick Actions
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Recruiters may invite our placement team for on-campus / pooled recruitment. Students can download the official handbook.
            </p>
            <div className="space-y-2">
              <button
                onClick={onOpenContact}
                className="w-full py-2.5 px-3 rounded-lg bg-[#1769AA] hover:bg-[#145b94] text-white text-xs font-bold transition-colors text-center cursor-pointer flex items-center justify-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Schedule Campus Drive</span>
              </button>
              <button
                onClick={onOpenBrochure}
                className="w-full py-2.5 px-3 rounded-lg bg-white/10 hover:bg-white/15 text-[#DCEEFF] text-xs font-semibold transition-colors text-center cursor-pointer flex items-center justify-center gap-2 border border-white/15"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Download Brochure (PDF)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Mohamed Sathak A. J. College of Engineering. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300">Privacy Policy</span>
            <span className="hover:text-slate-300">Recruitment Guidelines</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#DCEEFF] hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
