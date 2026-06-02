import { useEffect, useState } from 'react';
import { FaCalendarCheck, FaCheckCircle, FaClock, FaCreditCard, FaEnvelope, FaStar, FaTimesCircle } from 'react-icons/fa';
import { adminApi } from '../../api/adminApi';

const cardConfig = [
  ['totalBookings', 'Total Bookings', FaCalendarCheck],
  ['pendingBookings', 'Pending', FaClock],
  ['confirmedBookings', 'Confirmed', FaCheckCircle],
  ['completedBookings', 'Completed', FaCheckCircle],
  ['cancelledBookings', 'Cancelled', FaTimesCircle],
  ['totalRevenue', 'Revenue', FaCreditCard],
  ['newContacts', 'Contact Inquiries', FaEnvelope],
  ['latestReviews', 'Latest Reviews', FaStar],
];

const AdminDashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const response = await adminApi.dashboard();
        setData(response.data);
      } catch {
        setData({
          cards: {
            totalBookings: 0,
            pendingBookings: 0,
            confirmedBookings: 0,
            completedBookings: 0,
            cancelledBookings: 0,
            totalRevenue: 0,
            newContacts: 0,
            latestReviews: 0,
          },
          charts: { serviceWise: [], monthlyBookings: [] },
          recentActivity: [],
          latestReviews: [],
        });
      } finally {
        setLoading(false);
      }
    };
    loadDashboard();
  }, []);

  if (loading) {
    return <div className="h-96 animate-pulse rounded-lg bg-white" />;
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-royal-gold">Operations Overview</p>
        <h2 className="text-4xl font-cormorant text-royal-maroon">Dashboard</h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {cardConfig.map(([key, label, Icon]) => (
          <article key={key} className="rounded-lg bg-white p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">{label}</p>
                <p className="mt-2 text-3xl font-bold text-slate-950">
                  {key === 'totalRevenue' ? `INR ${Number(data.cards[key] || 0).toLocaleString()}` : data.cards[key] || 0}
                </p>
              </div>
              <div className="rounded-lg bg-royal-gold/15 p-4 text-royal-maroon">
                <Icon />
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <section className="rounded-lg bg-white p-6 shadow-lg xl:col-span-2">
          <h3 className="text-2xl font-cormorant text-royal-maroon">Monthly Bookings</h3>
          <div className="mt-6 flex h-64 items-end gap-3">
            {(data.charts.monthlyBookings.length ? data.charts.monthlyBookings : [{ _id: { month: 1 }, count: 0 }]).map((item) => (
              <div key={`${item._id.year || 'y'}-${item._id.month}`} className="flex flex-1 flex-col items-center gap-2">
                <div className="w-full rounded-t-lg bg-royal-gold" style={{ height: `${Math.max(item.count * 24, 12)}px` }} />
                <span className="text-xs text-slate-500">{item._id.month}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-lg bg-white p-6 shadow-lg">
          <h3 className="text-2xl font-cormorant text-royal-maroon">Service-wise Bookings</h3>
          <div className="mt-5 space-y-3">
            {(data.charts.serviceWise.length ? data.charts.serviceWise : [{ _id: 'No bookings yet', count: 0 }]).map((item) => (
              <div key={item._id} className="rounded-lg bg-slate-100 p-4">
                <p className="font-semibold text-slate-800">{item._id || 'Unknown service'}</p>
                <p className="text-sm text-slate-500">{item.count} requests</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <section className="rounded-lg bg-white p-6 shadow-lg">
          <h3 className="text-2xl font-cormorant text-royal-maroon">Recent Activity</h3>
          <div className="mt-5 space-y-3">
            {data.recentActivity.length === 0 ? (
              <p className="rounded-lg bg-slate-50 p-4 text-slate-500">No recent bookings yet.</p>
            ) : data.recentActivity.map((booking) => (
              <div key={booking._id} className="flex justify-between rounded-lg bg-slate-50 p-4">
                <div>
                  <p className="font-semibold">{booking.customerName}</p>
                  <p className="text-sm text-slate-500">{booking.serviceId} - {booking.destination}</p>
                </div>
                <span className="rounded-full bg-royal-gold/20 px-3 py-1 text-xs font-semibold text-royal-maroon">{booking.status}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-lg bg-white p-6 shadow-lg">
          <h3 className="text-2xl font-cormorant text-royal-maroon">Latest Reviews</h3>
          <div className="mt-5 space-y-3">
            {data.latestReviews.length === 0 ? (
              <p className="rounded-lg bg-slate-50 p-4 text-slate-500">No reviews yet.</p>
            ) : data.latestReviews.map((review) => (
              <div key={review._id} className="rounded-lg bg-slate-50 p-4">
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-slate-500">{review.message}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
