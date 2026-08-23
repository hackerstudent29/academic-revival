import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, AlertCircle } from 'lucide-react';
import { useAdminContext } from './admin';

export const Route = createFileRoute('/admin/mentors')({
  component: MentorsDashboard,
});

function MentorsDashboard() {
  const { role } = useAdminContext();

  if (role !== 'INCUBATION_HEAD' && role !== 'ADMIN') {
    return (
      <div className="flex flex-col items-center justify-center h-96 text-gray-500">
        <AlertCircle size={48} className="mb-4 text-gray-400" />
        <h2 className="text-xl font-semibold">Access Restricted</h2>
        <p>You do not have permission to view mentorship programs.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <h1 className="text-3xl font-bold text-gray-900">Mentorship Programs</h1>
      </div>
      
      <p className="text-gray-600">Connect startups with industry experts and track engagement.</p>
      
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-600" />
              Active Mentors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-50 border border-slate-100 rounded-lg p-8 text-center text-slate-500">
              <p>No mentors have been assigned yet.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
