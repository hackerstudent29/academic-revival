import React, { useState, useEffect } from 'react';
import { useEditable } from './EditableProvider';
import { supabase } from '@/lib/supabase';
import { Image as ImageIcon, Link as LinkIcon, Check, X } from 'lucide-react';

interface EditableImageProps {
  page: string;
  field: string;
  defaultSrc: string;
  alt: string;
  className?: string;
}

export function EditableImage({ page, field, defaultSrc, alt, className = '' }: EditableImageProps) {
  const { isEditing } = useEditable();
  const [src, setSrc] = useState(defaultSrc);
  const [isHovered, setIsHovered] = useState(false);
  const [isPromptOpen, setIsPromptOpen] = useState(false);
  const [tempUrl, setTempUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadContent() {
      try {
        const { data, error } = await supabase
          .from('site_content')
          .select('content')
          .eq('page_name', page)
          .single();
          
        if (data && data.content && data.content[field]) {
          setSrc(data.content[field]);
        }
      } catch (err) {
        // Ignore
      }
      setLoading(false);
    }
    loadContent();
  }, [page, field]);

  const handleSave = async () => {
    if (!tempUrl) return;
    
    try {
      const { data: existingData } = await supabase
        .from('site_content')
        .select('content')
        .eq('page_name', page)
        .single();

      let newContent = existingData?.content || {};
      newContent[field] = tempUrl;

      const { error } = await supabase
        .from('site_content')
        .upsert({ page_name: page, content: newContent }, { onConflict: 'page_name' });
        
      if (!error) {
        setSrc(tempUrl);
        setIsPromptOpen(false);
      }
    } catch (err) {
      console.error("Failed to save image", err);
    }
  };

  if (loading) {
    return <div className={`animate-pulse bg-slate-200 ${className}`}></div>;
  }

  if (isEditing) {
    return (
      <div 
        className="relative group inline-block w-full h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={src} alt={alt} className={`${className} ${isHovered ? 'opacity-80' : ''} transition-opacity`} />
        
        {isHovered && !isPromptOpen && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-10 transition-all cursor-pointer" onClick={() => { setTempUrl(src); setIsPromptOpen(true); }}>
            <div className="bg-white text-indigo-700 px-4 py-2 rounded-full font-semibold shadow-lg flex items-center gap-2 transform hover:scale-105 transition-transform">
              <ImageIcon size={18} />
              Change Image
            </div>
          </div>
        )}

        {isPromptOpen && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-20 p-4">
            <div className="bg-white rounded-xl shadow-2xl p-4 w-full max-w-sm" onClick={e => e.stopPropagation()}>
              <h4 className="text-sm font-bold text-slate-800 mb-2">Update Image URL</h4>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LinkIcon size={14} className="text-slate-400" />
                  </div>
                  <input 
                    type="url"
                    value={tempUrl}
                    onChange={(e) => setTempUrl(e.target.value)}
                    className="block w-full pl-9 pr-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="https://..."
                    autoFocus
                  />
                </div>
                <button onClick={handleSave} className="bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition">
                  <Check size={18} />
                </button>
                <button onClick={() => setIsPromptOpen(false)} className="bg-rose-100 text-rose-600 p-2 rounded-md hover:bg-rose-200 transition">
                  <X size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Normal view
  return <img src={src} alt={alt} className={className} />;
}
