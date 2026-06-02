import api from './api';

export const adminTokenKey = 'free2spread_admin_token';

export const getAdminToken = () => localStorage.getItem(adminTokenKey);
export const setAdminToken = (token) => localStorage.setItem(adminTokenKey, token);
export const clearAdminToken = () => localStorage.removeItem(adminTokenKey);

api.interceptors.request.use((config) => {
  const token = getAdminToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const adminApi = {
  login: (payload) => api.post('/admin/auth/login', payload),
  bootstrap: (payload) => api.post('/admin/auth/bootstrap', payload),
  forgotPassword: (payload) => api.post('/admin/auth/forgot-password', payload),
  profile: () => api.get('/admin/auth/profile'),
  dashboard: () => api.get('/admin/dashboard'),
  list: (resource, params = {}) => api.get(`/admin/${resource}`, { params }),
  create: (resource, payload) => api.post(`/admin/${resource}`, payload),
  update: (resource, id, payload) => api.put(`/admin/${resource}/${id}`, payload),
  remove: (resource, id) => api.delete(`/admin/${resource}/${id}`),
  exportCsv: (resource, params = {}) => api.get(`/admin/${resource}/export`, { params, responseType: 'blob' }),
};
