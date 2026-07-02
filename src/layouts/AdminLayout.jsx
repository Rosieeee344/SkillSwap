import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, ShieldCheck, Flag, Users, UserCheck, ArrowLeft } from 'lucide-react';

const adminLinks = [
  { label: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Verification Queue', path: '/admin/verification', icon: ShieldCheck },
  { label: 'Reports', path: '/admin/reports', icon: Flag },
  { label: 'User Management', path: '/admin/users', icon: Users },
];

export default function AdminLayout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-neutral-50">
      <aside className="flex w-64 flex-col border-r border-neutral-200/60 bg-white">
        <div className="flex h-16 items-center gap-2 border-b border-neutral-100 px-6">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-sm font-bold text-white">
            A
          </div>
          <span className="text-lg font-semibold tracking-tight text-neutral-900">Admin</span>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {adminLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-neutral-100 text-neutral-900'
                    : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                }`}
              >
                <Icon className="h-5 w-5" />
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-neutral-100 p-3">
          <Link
            to="/"
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to site
          </Link>
        </div>
      </aside>
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
