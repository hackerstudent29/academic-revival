import React from 'react';
import { X, Calendar, MapPin, Tag } from 'lucide-react';
import { GalleryItem } from '../../types';

interface GalleryLightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const GalleryLightboxModal: React.FC<GalleryLightboxModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200 animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#082B5C] px-6 py-4 flex items-center justify-between text-white border-b border-blue-900">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#1769AA] text-white tracking-wider uppercase">
              {item.category}
            </span>
            <span className="text-xs text-blue-200 font-medium">{item.year}</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close image preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Stage */}
        <div className="relative bg-slate-900 max-h-[60vh] flex items-center justify-center overflow-hidden">
          <img 
            src={item.image} 
            alt={item.title}
            className="w-full h-full object-contain max-h-[60vh]" 
          />
        </div>

        {/* Content Footer */}
        <div className="p-6 bg-white space-y-3">
          <h3 className="text-xl font-bold text-[#082B5C] font-['Outfit',sans-serif]">
            {item.title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            {item.description}
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5 text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-[#1769AA]" />
              <span>{item.venueOrPartner}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-700">
              <Calendar className="w-3.5 h-3.5 text-[#1769AA]" />
              <span>Academic Year {item.year}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-700">
              <Tag className="w-3.5 h-3.5 text-[#0D9488]" />
              <span>Official Institutional Event</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
