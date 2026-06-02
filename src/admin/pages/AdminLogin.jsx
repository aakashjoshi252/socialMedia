import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaLock, FaEnvelope, FaUserShield } from 'react-icons/fa';
import { adminApi } from '../../api/adminApi';
import { useAdminAuth } from '../useAdminAuth';
import { brand } from '../../data/siteContent';

const AdminLogin = () => {
  const { login } = useAdminAuth();
  const [mode, setMode] = useState('login');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', name: 'Super Admin' });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (mode === 'forgot') {
        await adminApi.forgotPassword({ email: formData.email });
        toast.success('Reset request submitted');
      } else if (mode === 'bootstrap') {
        const { data } = await adminApi.bootstrap(formData);
        localStorage.setItem('free2spread_admin_token', data.token);
        toast.success('Super Admin created');
        window.location.href = '/admin';
      } else {
        await login({ email: formData.email, password: formData.password });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Admin action failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid min-h-screen bg-slate-950 text-white lg:grid-cols-[1fr_460px]">
      <section className="relative hidden overflow-hidden lg:block">
        <img
          src="https://images.pexels.com/photos/15801083/pexels-photo-15801083.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="Free2Spread admin"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-royal-maroon/70 to-slate-950/50" />
        <div className="relative flex h-full flex-col justify-end p-14">
          <img src={brand.logo} alt={`${brand.name} logo`} className="mb-6 h-32 w-32 object-contain" />
          <h1 className="max-w-2xl text-6xl font-cormorant text-royal-gold">Free2Spread Admin Panel</h1>
          <p className="mt-4 max-w-xl text-white/75">
            Manage bookings, services, content, reviews, payments, staff, and website settings from one secure dashboard.
          </p>
        </div>
      </section>

      <section className="flex items-center justify-center p-6">
        <form onSubmit={handleSubmit} className="w-full max-w-md rounded-lg border border-white/10 bg-white p-8 text-slate-900 shadow-2xl">
          <div className="mb-8 text-center">
            <FaUserShield className="mx-auto mb-4 text-4xl text-royal-gold" />
            <h2 className="text-4xl font-cormorant text-royal-maroon">
              {mode === 'forgot' ? 'Forgot Password' : mode === 'bootstrap' ? 'Create Super Admin' : 'Admin Login'}
            </h2>
            <p className="mt-2 text-sm text-slate-500">Protected access for Free2Spread operations.</p>
          </div>

          <div className="space-y-5">
            {mode === 'bootstrap' && (
              <label>
                <span className="mb-2 block font-semibold">Name</span>
                <input name="name" value={formData.name} onChange={handleChange} className="focus-ring w-full rounded-lg border border-slate-300 px-4 py-3" />
              </label>
            )}

            <label>
              <span className="mb-2 flex items-center gap-2 font-semibold"><FaEnvelope className="text-royal-gold" /> Email</span>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="focus-ring w-full rounded-lg border border-slate-300 px-4 py-3" />
            </label>

            {mode !== 'forgot' && (
              <label>
                <span className="mb-2 flex items-center gap-2 font-semibold"><FaLock className="text-royal-gold" /> Password</span>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required minLength="8" className="focus-ring w-full rounded-lg border border-slate-300 px-4 py-3" />
              </label>
            )}
          </div>

          <button disabled={loading} className="gold-button mt-7 w-full py-3 disabled:opacity-60">
            {loading ? 'Please wait...' : mode === 'forgot' ? 'Send Reset Request' : mode === 'bootstrap' ? 'Create Admin' : 'Login'}
          </button>

          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <button type="button" onClick={() => setMode('login')} className="font-semibold text-royal-maroon">Login</button>
            <button type="button" onClick={() => setMode('forgot')} className="font-semibold text-royal-maroon">Forgot password</button>
            <button type="button" onClick={() => setMode('bootstrap')} className="font-semibold text-royal-maroon">First setup</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AdminLogin;
