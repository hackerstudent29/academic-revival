import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Lock, User, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const Route = createFileRoute('/admin/login')({
  component: AdminLogin,
});

function AdminLogin() {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // If it's a student ID or HOD ID without domain, append dummy domain for Supabase Auth
    const email = loginId.includes('@') ? loginId : `${loginId}@msajce.edu.in`;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else if (data.session) {
      // Successfully logged in
      navigate({ to: '/admin' });
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-[#0A0A0B] selection:bg-primary/30">
      {/* Background Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-600/20 blur-[150px] mix-blend-screen pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[420px] px-6 relative z-10"
      >
        <div className="backdrop-blur-2xl bg-white/5 border border-white/10 p-8 sm:p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
          
          {/* Subtle shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none" />

          <div className="relative z-10">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <ShieldCheck className="text-white w-8 h-8" strokeWidth={1.5} />
              </div>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-serif tracking-tight text-white mb-2">
                MSAJCE Portal
              </h2>
              <p className="text-sm text-white/50">
                Enter your ID and password to access your dashboard
              </p>
            </div>
            
            {error && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl flex items-start gap-3"
              >
                <AlertCircle size={18} className="shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{error}</span>
              </motion.div>
            )}

            <form className="space-y-5" onSubmit={handleLogin}>
              <div>
                <label htmlFor="loginId" className="block text-xs font-semibold uppercase tracking-wider text-white/50 mb-2 ml-1">
                  Login ID / Email
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/30 group-focus-within:text-blue-400 transition-colors">
                    <User className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <input
                    id="loginId"
                    name="loginId"
                    type="text"
                    required
                    value={loginId}
                    onChange={(e) => setLoginId(e.target.value)}
                    className="block w-full pl-12 pr-4 py-3.5 bg-black/20 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all sm:text-sm"
                    placeholder="Enter ID or Email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-xs font-semibold uppercase tracking-wider text-white/50 mb-2 ml-1">
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/30 group-focus-within:text-blue-400 transition-colors">
                    <Lock className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-12 pr-4 py-3.5 bg-black/20 border border-white/10 rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all sm:text-sm"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {loading ? 'Authenticating...' : 'Secure Sign In'}
                    {!loading && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
                  </span>
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full" />
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-white/30 flex items-center justify-center gap-2">
          <Lock size={12} />
          <span>Authorized personnel only. Secure connection.</span>
        </div>
      </motion.div>
    </div>
  );
}
