import { NavLink, Outlet } from 'react-router-dom';
import { FaBell, FaSignOutAlt } from 'react-icons/fa';
import { adminNav } from './adminConfig';
import { useAdminAuth } from './useAdminAuth';
import { brand } from '../data/siteContent';

const AdminLayout = () => {
  const { admin, logout } = useAdminAuth();

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 border-r border-white/10 bg-slate-950 text-white lg:block">
        <div className="flex h-20 items-center gap-3 border-b border-white/10 px-6">
          <img src={brand.logo} alt={`${brand.name} logo`} className="h-12 w-12 object-contain" />
          <div>
            <p className="font-cormorant text-2xl text-royal-gold">{brand.name}</p>
            <p className="text-xs text-white/60">Admin Control Center</p>
          </div>
        </div>
        <nav className="h-[calc(100vh-5rem)] space-y-1 overflow-y-auto px-4 py-5">
          {adminNav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/admin'}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold transition ${
                  isActive ? 'bg-royal-gold text-slate-950' : 'text-white/75 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              <item.icon /> {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 px-4 py-4 shadow-sm backdrop-blur md:px-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-royal-gold">Production Admin</p>
              <h1 className="text-2xl font-cormorant text-royal-maroon">Free2Spread Dashboard</h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative rounded-full bg-slate-100 p-3 text-slate-600">
                <FaBell />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-royal-gold" />
              </button>
              <div className="hidden text-right sm:block">
                <p className="font-semibold">{admin?.name || 'Admin'}</p>
                <p className="text-xs text-slate-500">{admin?.role || 'Admin'}</p>
              </div>
              <button onClick={logout} className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-royal-maroon">
                <span className="inline-flex items-center gap-2"><FaSignOutAlt /> Logout</span>
              </button>
            </div>
          </div>

          <nav className="mt-4 flex gap-2 overflow-x-auto pb-1 lg:hidden">
            {adminNav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/admin'}
                className={({ isActive }) =>
                  `shrink-0 rounded-full px-4 py-2 text-xs font-semibold ${
                    isActive ? 'bg-royal-gold text-slate-950' : 'bg-slate-100 text-slate-700'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </header>

        <main className="px-4 py-6 md:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
