import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, AlertCircle } from 'lucide-react';
import { useAdminContext } from './admin';

export const Route = createFileRoute('/admin/students')({
  component: HODStudentsDashboard,
});

function HODStudentsDashboard() {
  const { role } = useAdminContext();

  if (role !== 'HOD' && role !== 'ADMIN') {
    return (
      <div className="flex flex-col items-center justify-center h-96 text-gray-500">
        <AlertCircle size={48} className="mb-4 text-gray-400" />
        <h2 className="text-xl font-semibold">Access Restricted</h2>
        <p>You do not have permission to manage student records.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <h1 className="text-3xl font-bold text-gray-900">Department Students</h1>
      </div>
      
      <p className="text-gray-600">Manage student profiles, view academic performance, and monitor attendance for your department.</p>
      
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-indigo-600" />
              Student Directory
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-50 border border-slate-100 rounded-lg p-8 text-center text-slate-500">
              <p>Student database integration is pending. Profiles will appear here once connected.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
