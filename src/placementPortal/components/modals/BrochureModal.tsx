import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle, GraduationCap, Building2, Award, Mail } from 'lucide-react';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
    setTimeout(() => {
      // simulate trigger
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#082B5C]/80 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#082B5C] text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 bg-[#1769AA] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full mb-2 uppercase">
            Official Placement Dossier
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-['Outfit',sans-serif]">
            MSAJCE Placement Brochure 2026
          </h3>
          <p className="text-xs sm:text-sm text-[#DCEEFF] mt-1">
            Comprehensive recruiter handbook, department statistics, academic demographics, and recruitment guidelines.
          </p>
        </div>

        <div className="p-6 sm:p-7 space-y-5">
          {/* Highlights in the brochure */}
          <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
            <div className="flex items-center gap-2 p-2.5 bg-[#F5FAFF] rounded-lg border border-blue-100">
              <GraduationCap className="w-4 h-4 text-[#1769AA] shrink-0" />
              <span>8 Undergraduate Disciplines</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 bg-[#F5FAFF] rounded-lg border border-blue-100">
              <Building2 className="w-4 h-4 text-[#1769AA] shrink-0" />
              <span>42+ Visiting Corporates</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 bg-[#F5FAFF] rounded-lg border border-blue-100">
              <Award className="w-4 h-4 text-[#1769AA] shrink-0" />
              <span>₹12 LPA Peak CTC Offered</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 bg-[#F5FAFF] rounded-lg border border-blue-100">
              <FileText className="w-4 h-4 text-[#1769AA] shrink-0" />
              <span>MoU Partnerships & Labs</span>
            </div>
          </div>

          {downloaded ? (
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-2">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-emerald-800">Placement Brochure Ready!</h4>
              <p className="text-xs text-emerald-700">
                Official MSAJCE Placement Dossier (PDF format) has been dispatched and downloaded.
              </p>
              <button
                onClick={() => {
                  setDownloaded(false);
                  onClose();
                }}
                className="mt-2 text-xs font-semibold text-emerald-800 underline"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleDownload} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Enter your Work / Student Email to access instant download:
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="hr.recruiter@company.com or student@msajce-edu.in"
                    className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1769AA] focus:border-transparent text-slate-800"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#082B5C] hover:bg-[#1769AA] text-white text-xs sm:text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Official Placement Brochure (PDF)</span>
              </button>
            </form>
          )}

          <div className="pt-3 border-t border-slate-100 text-center">
            <span className="text-[11px] text-slate-400">
              Mohamed Sathak A J College of Engineering • Training & Placement Cell, OMR Chennai
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
