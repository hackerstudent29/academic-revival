import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, AlertCircle } from 'lucide-react';
import { useAdminContext } from './admin';

export const Route = createFileRoute('/admin/placements-portal')({
  component: StudentPlacementsDashboard,
});

function StudentPlacementsDashboard() {
  const { role } = useAdminContext();

  if (role !== 'STUDENT' && role !== 'ADMIN') {
    return (
      <div className="flex flex-col items-center justify-center h-96 text-gray-500">
        <AlertCircle size={48} className="mb-4 text-gray-400" />
        <h2 className="text-xl font-semibold">Access Restricted</h2>
        <p>You do not have permission to view the placements portal.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <h1 className="text-3xl font-bold text-gray-900">Placements Portal</h1>
      </div>
      
      <p className="text-gray-600">Register for upcoming placement drives and track your job offers.</p>
      
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-indigo-600" />
              Upcoming Drives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-50 border border-slate-100 rounded-lg p-8 text-center text-slate-500">
              <p>No active placement drives matching your profile currently.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
