import React, { useState, useEffect } from 'react';
import { useEditable } from './EditableProvider';
import { supabase } from '@/lib/supabase';
import { Edit2, Check, X } from 'lucide-react';

interface EditableTextProps {
  page: string;
  field: string;
  defaultValue: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
  className?: string;
  multiline?: boolean;
}

export function EditableText({ page, field, defaultValue, as = 'p', className = '', multiline = false }: EditableTextProps) {
  const { isEditing } = useEditable();
  const [value, setValue] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch the current value from Supabase on mount
  useEffect(() => {
    async function loadContent() {
      try {
        const { data, error } = await supabase
          .from('site_content')
          .select('content')
          .eq('page_name', page)
          .single();
          
        if (data && data.content && data.content[field]) {
          setValue(data.content[field]);
        }
      } catch (err) {
        console.error("Failed to load content for", field);
      }
      setLoading(false);
    }
    loadContent();
  }, [page, field]);

  const handleSave = async (newValue: string) => {
    try {
      // First, get existing content
      const { data: existingData } = await supabase
        .from('site_content')
        .select('content')
        .eq('page_name', page)
        .single();

      let newContent = existingData?.content || {};
      newContent[field] = newValue;

      // Upsert
      const { error } = await supabase
        .from('site_content')
        .upsert({ page_name: page, content: newContent }, { onConflict: 'page_name' });
        
      if (!error) {
        setValue(newValue);
      }
    } catch (err) {
      console.error("Failed to save content", err);
    }
  };

  const onBlur = (e: React.FocusEvent<HTMLElement>) => {
    setIsFocused(false);
    if (e.currentTarget.innerText !== value) {
      handleSave(e.currentTarget.innerText);
    }
  };

  if (loading) {
    return <span className={`animate-pulse bg-gray-200 text-transparent rounded ${className}`}>{defaultValue}</span>;
  }

  const Tag = as as keyof JSX.IntrinsicElements;

  if (isEditing) {
    return (
      <div className="relative group inline-block w-full">
        <Tag
          className={`${className} outline-none cursor-text transition-all duration-200 ${isFocused ? 'ring-2 ring-blue-500 rounded bg-blue-50/50' : 'hover:ring-2 hover:ring-blue-300 hover:bg-blue-50/20 rounded'}`}
          contentEditable={true}
          suppressContentEditableWarning={true}
          onFocus={() => setIsFocused(true)}
          onBlur={onBlur}
          dangerouslySetInnerHTML={{ __html: value }}
        />
        <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-600 text-white p-1 rounded-full shadow-md z-50 pointer-events-none">
          <Edit2 size={12} />
        </div>
      </div>
    );
  }

  // Normal view
  return (
    <Tag className={className} dangerouslySetInnerHTML={{ __html: value }} />
  );
}
