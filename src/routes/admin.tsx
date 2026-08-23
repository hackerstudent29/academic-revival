import { createFileRoute, Outlet, useNavigate, useLocation } from '@tanstack/react-router';
import React, { useEffect, useState, createContext, useContext } from 'react';
import { supabase } from '@/lib/supabase';
import { 
  LayoutDashboard, LogOut, FileText, Calendar, Building2, BookOpen, 
  Menu, X, Activity, GraduationCap, Briefcase, Settings, ChevronRight, Users
} from 'lucide-react';
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute('/admin')({
  component: AdminLayout,
});

type Role = 'ADMIN' | 'DEVELOPER' | 'HOD' | 'STUDENT' | 'PLACEMENT_OFFICER' | 'INCUBATION_HEAD';

interface AdminContextType {
  role: Role | null;
  user: any;
}
export const AdminContext = createContext<AdminContextType>({ role: null, user: null });
export const useAdminContext = () => useContext(AdminContext);

function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [role, setRole] = useState<Role | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session && location.pathname !== '/admin/login') {
        navigate({ to: '/admin/login' });
      } else if (session?.user) {
        setUser(session.user);
        const { data: roleData } = await supabase
          .from('user_roles')
          .select('role')
          .eq('id', session.user.id)
          .single();
          
        if (roleData) {
          setRole(roleData.role as Role);
        } else {
          setRole('STUDENT');
        }
      }
      setLoading(false);

      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
        if (!session && location.pathname !== '/admin/login') {
          navigate({ to: '/admin/login' });
        }
      });

      return () => subscription.unsubscribe();
    };
    checkAuth();
  }, [navigate, location.pathname]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate({ to: '/admin/login' });
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
    </div>;
  }

  if (location.pathname === '/admin/login') {
    return <Outlet />;
  }

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Reusable Link Component for styling
  const NavLink = ({ to, icon: Icon, children, exact = false }: any) => (
    <Link 
      to={to} 
      onClick={closeMobileMenu} 
      className="flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 text-slate-600 hover:bg-white/60 hover:text-indigo-900 group"
      activeProps={{ className: 'bg-white shadow-sm text-indigo-700 font-medium ring-1 ring-slate-900/5' }} 
      activeOptions={{ exact }}
    >
      <Icon size={20} className="transition-transform group-hover:scale-110" />
      <span>{children}</span>
      <ChevronRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
    </Link>
  );

  return (
    <AdminContext.Provider value={{ role, user }}>
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col md:flex-row font-sans selection:bg-indigo-100 selection:text-indigo-900">
        
        {/* Mobile Header */}
        <div className="md:hidden bg-white/80 backdrop-blur-md sticky top-0 border-b border-slate-200 flex items-center justify-between p-4 z-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg shadow-sm"></div>
            <h2 className="text-xl font-bold text-slate-800 tracking-tight">MSAJCE Admin</h2>
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Sidebar Overlay for Mobile */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 md:hidden transition-opacity" onClick={closeMobileMenu}></div>
        )}

        {/* Sidebar Navigation */}
        <aside className={`
          fixed md:sticky top-0 h-screen inset-y-0 left-0 transform bg-slate-50/80 backdrop-blur-xl border-r border-slate-200 z-50
          w-72 flex flex-col transition-all duration-300 ease-out shadow-2xl md:shadow-none
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          <div className="p-6 hidden md:flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl shadow-sm flex items-center justify-center text-white font-bold text-xl">
              M
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900 tracking-tight leading-tight">MSAJCE</h2>
              <div className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full inline-block mt-1 border border-indigo-100">
                {role}
              </div>
            </div>
          </div>
          
          <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto custom-scrollbar">
            {(role === 'ADMIN' || role === 'DEVELOPER') && (
              <NavLink to="/admin" icon={LayoutDashboard} exact={true}>Dashboard</NavLink>
            )}

            {(role === 'DEVELOPER' || role === 'ADMIN') && (
              <NavLink to="/admin/audit-logs" icon={Activity}>Audit Logs</NavLink>
            )}

            {role === 'ADMIN' && (
              <>
                <div className="pt-4 pb-2 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Content Management</div>
                <NavLink to="/admin/pages" icon={FileText}>Visual Editor</NavLink>
                <NavLink to="/admin/departments" icon={Building2}>Departments</NavLink>
                <NavLink to="/admin/events" icon={Calendar}>Events</NavLink>
                <NavLink to="/admin/blogs" icon={BookOpen}>Blogs</NavLink>
              </>
            )}

            {role === 'HOD' && (
              <>
                <div className="pt-4 pb-2 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Department</div>
                <NavLink to="/admin/my-department" icon={Building2}>My Department</NavLink>
                <NavLink to="/admin/students" icon={GraduationCap}>My Students</NavLink>
              </>
            )}

            {role === 'STUDENT' && (
              <>
                <div className="pt-4 pb-2 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">My Profile</div>
                <NavLink to="/admin" icon={LayoutDashboard} exact={true}>Overview</NavLink>
                <NavLink to="/admin/academics" icon={BookOpen}>Academics & Grades</NavLink>
                <NavLink to="/admin/placements-portal" icon={Briefcase}>Placements Portal</NavLink>
              </>
            )}

            {role === 'PLACEMENT_OFFICER' && (
              <NavLink to="/admin/placements" icon={Briefcase}>Placements Mgmt</NavLink>
            )}

            {role === 'INCUBATION_HEAD' && (
              <>
                <div className="pt-4 pb-2 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Incubation Center</div>
                <NavLink to="/admin/startups" icon={Activity}>Startups</NavLink>
                <NavLink to="/admin/mentors" icon={Users}>Mentorship</NavLink>
              </>
            )}
          </nav>
          
          <div className="p-4 mt-auto border-t border-slate-200/60 bg-slate-50/50">
            <button 
              onClick={handleLogout}
              className="flex items-center justify-center space-x-2 p-3 w-full rounded-xl hover:bg-rose-50 text-rose-600 font-medium transition-colors ring-1 ring-transparent hover:ring-rose-200"
            >
              <LogOut size={18} />
              <span>Sign Out</span>
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 relative w-full overflow-y-auto">
          <div className="max-w-7xl mx-auto p-4 md:p-8 lg:p-10">
            <Outlet />
          </div>
        </main>
      </div>
    </AdminContext.Provider>
  );
}
