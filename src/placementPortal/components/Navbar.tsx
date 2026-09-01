import React, { useState } from 'react';
import { 
  GraduationCap, 
  Download, 
  PhoneCall, 
  MapPin, 
  ShieldCheck, 
  Menu, 
  X, 
  ChevronRight,
  ExternalLink,
  Mail
} from 'lucide-react';

interface NavbarProps {
  onOpenBrochure: () => void;
  onOpenContact: () => void;
  onSelectSection: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBrochure,
  onOpenContact,
  onSelectSection,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#082B5C] text-white border-b border-blue-900/40 relative z-40">
      {/* Top Academic Credential Strip */}
      <div className="bg-[#051E40] py-1.5 px-4 text-xs border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-slate-300">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 text-[#DCEEFF] font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#1769AA]" />
              Affiliated to Anna University | Approved by AICTE | Accredited by NAAC & NBA
            </span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
              <MapPin className="w-3 h-3 text-[#1769AA]" />
              Siruseri IT Park, OMR, Chennai – 603103
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={onOpenContact}
              className="hover:text-white text-slate-300 transition-colors flex items-center gap-1"
            >
              <PhoneCall className="w-3 h-3 text-[#1769AA]" />
              Placement Helpdesk: 044-2747 0021
            </button>
            <a 
              href="https://www.msajce-edu.in/placement.php" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#DCEEFF] hover:underline flex items-center gap-1"
            >
              College Main Site
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Branding & Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div 
          onClick={() => onSelectSection('overview')}
          className="flex items-center gap-3.5 cursor-pointer group"
        >
          <div className="w-11 h-11 rounded-xl bg-[#1769AA] border border-blue-400/40 flex items-center justify-center shadow-md group-hover:bg-[#145b94] transition-all">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg tracking-tight text-white font-['Outfit',sans-serif]">MSAJCE</span>
              <span className="bg-[#1769AA]/40 text-[#DCEEFF] border border-blue-400/30 text-[10px] uppercase font-bold px-2 py-0.5 rounded-md tracking-wider">
                TRAINING & PLACEMENT
              </span>
            </div>
            <p className="text-xs text-slate-300 font-medium">Mohamed Sathak A J College of Engineering</p>
          </div>
        </div>

        {/* Institutional Nav Links (Desktop) */}
        <nav className="hidden xl:flex items-center gap-1 text-xs font-semibold text-slate-200">
          <button
            onClick={() => onSelectSection('overview')}
            className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
              activeSection === 'overview' ? 'bg-white/15 text-white font-bold' : 'hover:bg-white/10 hover:text-white'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => onSelectSection('overview')}
            className="px-3 py-2 rounded-lg hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
          >
            Statistics
          </button>
          <button
            onClick={() => onSelectSection('recruiters')}
            className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
              activeSection === 'recruiters' ? 'bg-white/15 text-white font-bold' : 'hover:bg-white/10 hover:text-white'
            }`}
          >
            Recruiters
          </button>
          <button
            onClick={() => onSelectSection('training')}
            className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
              activeSection === 'training' ? 'bg-white/15 text-white font-bold' : 'hover:bg-white/10 hover:text-white'
            }`}
          >
            Training
          </button>
          <button
            onClick={() => onSelectSection('internships')}
            className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
              activeSection === 'internships' ? 'bg-white/15 text-white font-bold' : 'hover:bg-white/10 hover:text-white'
            }`}
          >
            Internships & PPOs
          </button>
          <button
            onClick={() => onSelectSection('mous')}
            className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
              activeSection === 'mous' ? 'bg-white/15 text-white font-bold' : 'hover:bg-white/10 hover:text-white'
            }`}
          >
            MoUs & Industry
          </button>
          <button
            onClick={() => onSelectSection('journey')}
            className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
              activeSection === 'journey' ? 'bg-white/15 text-white font-bold' : 'hover:bg-white/10 hover:text-white'
            }`}
          >
            Higher Studies
          </button>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenBrochure}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs font-semibold tracking-wide transition-all shadow-xs active:scale-95 cursor-pointer"
            id="nav-btn-brochure"
          >
            <Download className="w-3.5 h-3.5 text-[#0D9488]" />
            <span>Brochure</span>
          </button>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1769AA] hover:bg-[#145b94] text-white text-xs font-bold tracking-wide transition-all shadow-md active:scale-95 cursor-pointer"
            id="nav-btn-contact-desk"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Recruit With Us</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#051E40] border-t border-white/10 px-4 py-4 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-xs">
            {[
              { id: 'overview', label: '01 Placement Overview' },
              { id: 'recruiters', label: '02 Recruiters & Tier Matrix' },
              { id: 'training', label: '03 Skill Training & Facilities' },
              { id: 'internships', label: '04 Internships & PPO Achievements' },
              { id: 'mous', label: '05 MoUs & Industry Alliances' },
              { id: 'journey', label: '06 Higher Studies & Global Track' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onSelectSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2 rounded-lg font-medium transition-all ${
                  activeSection === item.id 
                    ? 'bg-[#1769AA] text-white font-semibold' 
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenBrochure();
                setMobileMenuOpen(false);
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/10 text-white text-xs font-semibold"
            >
              <Download className="w-3.5 h-3.5 text-[#DCEEFF]" />
              Placement Brochure (PDF)
            </button>
            <button
              onClick={() => {
                onOpenContact();
                setMobileMenuOpen(false);
              }}
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#1769AA] text-white text-xs font-semibold"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              Contact Placement Cell
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
