import React from 'react';
import { X, CheckCircle, Users, Sparkles, Building } from 'lucide-react';
import { Facility } from '../../types';

interface FacilityLightboxProps {
  facility: Facility | null;
  onClose: () => void;
}

export const FacilityLightbox: React.FC<FacilityLightboxProps> = ({ facility, onClose }) => {
  if (!facility) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#082B5C]/80 backdrop-blur-md animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image with Gradient */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
          <img
            src={facility.image}
            alt={facility.name}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#082B5C] via-[#082B5C]/40 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges & Title in Image */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="bg-[#1769AA] text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                {facility.category}
              </span>
              <span className="flex items-center gap-1 bg-white/20 backdrop-blur-md text-white text-xs px-2.5 py-0.5 rounded-full">
                <Users className="w-3 h-3" />
                {facility.capacity}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit',sans-serif]">
              {facility.name}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Space Overview</h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {facility.description}
            </p>
          </div>

          {/* Facility Specifications */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#082B5C] mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#1769AA]" />
              Dedicated Equipment & Infrastructure Specs
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {facility.equipment.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#F5FAFF] border border-blue-100 text-xs sm:text-sm text-[#10243E]">
                  <CheckCircle className="w-4 h-4 text-[#1769AA] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Bar */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Building className="w-4 h-4 text-[#1769AA]" />
              <span>Location: MSAJCE Central Campus, Rajiv Gandhi Salai (OMR)</span>
            </div>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-[#082B5C] hover:bg-[#1769AA] text-white text-xs font-semibold tracking-wide transition-colors"
            >
              Close Viewer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
