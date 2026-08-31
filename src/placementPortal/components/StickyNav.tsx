import React from 'react';
import { Download, Mail, Sparkles, GraduationCap } from 'lucide-react';

interface StickyNavProps {
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
  onOpenBrochure?: () => void;
  onOpenContact?: () => void;
}

export const StickyNav: React.FC<StickyNavProps> = ({
  activeSection,
  onSelectSection,
  onOpenBrochure,
  onOpenContact
}) => {
  const navItems = [
    { id: 'overview', number: '01', title: 'Placement Overview', shortTitle: 'Overview' },
    { id: 'recruiters', number: '02', title: 'Recruiters & Tier Matrix', shortTitle: 'Recruiters & Tiers' },
    { id: 'training', number: '03', title: 'Skill Training & Facilities', shortTitle: 'Training & Labs' },
    { id: 'internships', number: '04', title: 'Internships & PPO Achievements', shortTitle: 'Internships & PPOs' },
    { id: 'mous', number: '05', title: 'MoUs & Industry Alliances', shortTitle: 'MoUs & Alliances' },
    { id: 'journey', number: '06', title: 'Higher Studies & Global Track', shortTitle: 'Higher Studies' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 gap-3">
          
          {/* Institution Brand */}
          <div 
            onClick={() => onSelectSection('overview')}
            className="flex items-center gap-2.5 cursor-pointer shrink-0"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#082B5C] text-white flex items-center justify-center font-black text-xs sm:text-sm font-['Outfit',sans-serif] shadow-xs">
              AJ
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-black text-[#082B5C] font-['Outfit',sans-serif] tracking-tight leading-none">
                MSAJCE PLACEMENT
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono text-[#0D9488] font-bold tracking-wider uppercase leading-tight mt-0.5">
                CAREER & GLOBAL CELL
              </span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`sticky-tab-${item.id}`}
                  onClick={() => onSelectSection(item.id)}
                  className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap text-xs font-semibold transition-all duration-200 flex-shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#082B5C] text-white shadow-xs font-bold'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <span
                    className={`px-1.5 py-0.2 rounded text-[10px] font-mono font-bold transition-colors ${
                      isActive
                        ? 'bg-[#0D9488] text-white'
                        : 'bg-white text-slate-500 group-hover:text-[#082B5C]'
                    }`}
                  >
                    {item.number}
                  </span>
                  <span className="hidden lg:inline">{item.title}</span>
                  <span className="lg:hidden">{item.shortTitle}</span>
                </button>
              );
            })}
          </nav>

          {/* Quick Actions */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            {onOpenBrochure && (
              <button
                onClick={onOpenBrochure}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0D9488] hover:bg-[#0f766e] text-white rounded-lg text-xs font-bold font-mono uppercase tracking-wider transition-colors cursor-pointer shadow-2xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Brochure</span>
              </button>
            )}
            {onOpenContact && (
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-[#082B5C] rounded-lg text-xs font-bold font-mono uppercase tracking-wider transition-colors cursor-pointer border border-slate-200"
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="hidden md:inline">Contact</span>
              </button>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};
