import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { adminApi, clearAdminToken, getAdminToken, setAdminToken } from '../api/adminApi';

const AdminAuthContext = createContext(null);
export default AdminAuthContext;

export const AdminAuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(null);
  const [checkingAuth, setCheckingAuth] = useState(Boolean(getAdminToken()));

  useEffect(() => {
    const loadProfile = async () => {
      if (!getAdminToken()) return;
      try {
        const { data } = await adminApi.profile();
        setAdmin(data);
      } catch {
        clearAdminToken();
        setAdmin(null);
      } finally {
        setCheckingAuth(false);
      }
    };
    loadProfile();
  }, []);

  const login = useCallback(async (payload) => {
    const { data } = await adminApi.login(payload);
    setAdminToken(data.token);
    setAdmin(data.admin);
    toast.success('Welcome back to Free2Spread Admin');
    navigate('/admin');
  }, [navigate]);

  const logout = useCallback(() => {
    clearAdminToken();
    setAdmin(null);
    toast.success('Logged out');
    navigate('/admin/login');
  }, [navigate]);

  const value = useMemo(() => ({ admin, checkingAuth, login, logout }), [admin, checkingAuth, login, logout]);

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
};
