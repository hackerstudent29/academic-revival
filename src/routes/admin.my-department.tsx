import { createFileRoute } from '@tanstack/react-router';
import { Building2, Save } from 'lucide-react';

export const Route = createFileRoute('/admin/my-department')({
  component: MyDepartment,
});

function MyDepartment() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
          <Building2 className="text-blue-600" />
          My Department
        </h1>
        <p className="text-gray-600 mt-1">HOD View: Manage your department's details and announcements.</p>
      </div>

      <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
        <h2 className="text-xl font-bold mb-4">Department Information</h2>
        
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Department Name</label>
              <input type="text" disabled value="Information Technology" className="mt-1 block w-full bg-gray-50 border border-gray-300 rounded-md shadow-sm p-2 text-gray-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Total Intake Quota</label>
              <input type="text" defaultValue="120" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">About / Description</label>
            <textarea rows={6} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" defaultValue="The Department of Information Technology was established with the objective of..."></textarea>
          </div>

          <div className="pt-4 border-t">
            <button type="button" className="bg-blue-900 text-white px-6 py-2 rounded shadow hover:bg-blue-800 flex items-center gap-2">
              <Save size={18} />
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
