import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, AlertCircle } from 'lucide-react';
import { useAdminContext } from './admin';

export const Route = createFileRoute('/admin/startups')({
  component: StartupsDashboard,
});

function StartupsDashboard() {
  const { role } = useAdminContext();

  if (role !== 'INCUBATION_HEAD' && role !== 'ADMIN') {
    return (
      <div className="flex flex-col items-center justify-center h-96 text-gray-500">
        <AlertCircle size={48} className="mb-4 text-gray-400" />
        <h2 className="text-xl font-semibold">Access Restricted</h2>
        <p>You do not have permission to view incubation details.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <h1 className="text-3xl font-bold text-gray-900">Incubated Startups</h1>
      </div>
      
      <p className="text-gray-600">Manage student startups, funding stages, and incubation metrics.</p>
      
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Activity className="w-5 h-5 text-indigo-600" />
              Active Startups List
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-50 border border-slate-100 rounded-lg p-8 text-center text-slate-500">
              <p>No startups currently registered for this cohort.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
