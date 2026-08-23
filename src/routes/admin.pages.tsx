import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '@/routes/index';
import { EditableProvider } from '@/components/admin/EditableProvider';
import { Monitor, Phone, Tablet, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export const Route = createFileRoute('/admin/pages')({
  component: PagesVisualEditor,
});

function PagesVisualEditor() {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  return (
    <div className="flex flex-col h-full space-y-4">
      {/* Editor Toolbar */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 flex items-center justify-between sticky top-0 z-50">
        <div>
          <h1 className="text-xl font-bold text-slate-800">Visual Page Editor</h1>
          <p className="text-sm text-slate-500">Editing: Home Page</p>
        </div>
        
        <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg">
          <button 
            onClick={() => setDevice('mobile')}
            className={`p-2 rounded-md transition-colors ${device === 'mobile' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
          >
            <Phone size={18} />
          </button>
          <button 
            onClick={() => setDevice('tablet')}
            className={`p-2 rounded-md transition-colors ${device === 'tablet' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
          >
            <Tablet size={18} />
          </button>
          <button 
            onClick={() => setDevice('desktop')}
            className={`p-2 rounded-md transition-colors ${device === 'desktop' ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
          >
            <Monitor size={18} />
          </button>
        </div>

        <div>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium shadow-sm shadow-indigo-200 hover:bg-indigo-700 transition flex items-center gap-2">
            <CheckCircle size={18} />
            <span>All Changes Saved</span>
          </button>
        </div>
      </div>

      {/* Interactive Preview Canvas */}
      <div className="flex-1 bg-slate-200/50 rounded-xl border-2 border-dashed border-slate-300 p-2 lg:p-4 flex flex-col items-center justify-start overflow-hidden min-h-[800px]">
        <div 
          className={`bg-white shadow-2xl rounded-lg overflow-y-auto transition-all duration-300 ease-in-out border border-slate-200 w-full h-full`}
          style={{
            maxWidth: device === 'mobile' ? '375px' : device === 'tablet' ? '768px' : '100%',
          }}
        >
          <EditableProvider forceEditMode={true}>
            <div className="pointer-events-auto h-full">
              <HomePage />
            </div>
          </EditableProvider>
        </div>
      </div>
    </div>
  );
}
