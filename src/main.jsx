// frontend/src/main.jsx
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './layout/layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Booking from './pages/Booking';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogGuide from './pages/BlogGuide';
import Reviews from './pages/Reviews';
import Gallery from './pages/Gallery';
import TravelGuide from './pages/TravelGuide';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import { AdminAuthProvider } from './admin/AdminAuthContext';
import ProtectedAdminRoute from './admin/ProtectedAdminRoute';
import AdminLayout from './admin/AdminLayout';
import AdminLogin from './admin/pages/AdminLogin';
import AdminDashboard from './admin/pages/AdminDashboard';
import AdminResourcePage from './admin/pages/AdminResourcePage';

const router = createBrowserRouter([
  {
    path: "/admin/login",
    element: (
      <AdminAuthProvider>
        <AdminLogin />
      </AdminAuthProvider>
    ),
  },
  {
    path: "/admin",
    element: (
      <AdminAuthProvider>
        <ProtectedAdminRoute />
      </AdminAuthProvider>
    ),
    children: [
      {
        element: <AdminLayout />,
        children: [
          { index: true, element: <AdminDashboard /> },
          { path: ":resource", element: <AdminResourcePage /> },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "booking", element: <Booking /> },
      { path: "about", element: <About /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:slug", element: <BlogGuide /> },
      { path: "reviews", element: <Reviews /> },
      { path: "gallery", element: <Gallery /> },
      { path: "travel-guide", element: <TravelGuide /> },
      { path: "privacy", element: <Privacy /> },
      { path: "terms", element: <Terms /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
