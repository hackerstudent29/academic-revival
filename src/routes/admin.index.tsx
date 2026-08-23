import { createFileRoute } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, FileText, Calendar, LayoutDashboard, Shield, Activity, Briefcase, GraduationCap, TrendingUp } from 'lucide-react';
import { useAdminContext } from './admin';

export const Route = createFileRoute('/admin/')({
  component: AdminDashboard,
});

function AdminDashboard() {
  const { role, user } = useAdminContext();

  // Extract ID from email (e.g. stu_123@msajce.edu.in -> stu_123)
  const displayId = user?.email?.split('@')[0] || 'User';

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold border border-blue-200">
          {role}
        </span>
      </div>
      
      <p className="text-gray-600">
        Welcome back, <span className="font-medium text-gray-900">{displayId}</span>. 
        Manage your authorized portal features from here.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {/* ADMIN / HOD CARDS */}
        {(role === 'ADMIN' || role === 'HOD') && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Departments</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{role === 'ADMIN' ? '12' : '1'}</div>
              <p className="text-xs text-muted-foreground">Managed by you</p>
            </CardContent>
          </Card>
        )}
        
        {/* ADMIN CARDS */}
        {(role === 'ADMIN') && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pages Edited</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">Global pages</p>
            </CardContent>
          </Card>
        )}

        {/* DEVELOPER CARDS */}
        {(role === 'DEVELOPER' || role === 'ADMIN') && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">System Status</CardTitle>
              <Shield className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">Online</div>
              <p className="text-xs text-muted-foreground">DB & APIs Healthy</p>
            </CardContent>
          </Card>
        )}

        {/* STUDENT CARDS */}
        {(role === 'STUDENT') && (
          <>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current CGPA</CardTitle>
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-indigo-600">8.45</div>
                <p className="text-xs text-muted-foreground">Last updated: Semester 5</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Attendance</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">92%</div>
                <p className="text-xs text-muted-foreground">Eligible for exams</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Drives</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">Registration open</p>
              </CardContent>
            </Card>
          </>
        )}

        {/* PLACEMENT OFFICER CARDS */}
        {(role === 'PLACEMENT_OFFICER') && (
          <>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Students Placed</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">452</div>
                <p className="text-xs text-muted-foreground">This academic year</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Recruiters</CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">14</div>
                <p className="text-xs text-muted-foreground">Currently hiring</p>
              </CardContent>
            </Card>
          </>
        )}

        {/* INCUBATION HEAD CARDS */}
        {(role === 'INCUBATION_HEAD') && (
          <>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Startups</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-indigo-600">8</div>
                <p className="text-xs text-muted-foreground">Currently incubated</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Grants Disbursed</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹12.5L</div>
                <p className="text-xs text-muted-foreground">This quarter</p>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
