import { Navigate, Outlet } from 'react-router-dom';
import { getAdminToken } from '../api/adminApi';
import { useAdminAuth } from './useAdminAuth';

const ProtectedAdminRoute = () => {
  const { checkingAuth } = useAdminAuth();

  if (checkingAuth) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-royal-gold border-t-transparent" />
      </div>
    );
  }

  if (!getAdminToken()) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedAdminRoute;
