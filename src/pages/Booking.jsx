import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import api from '../api/api';
import { FaCalendarAlt, FaComment, FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';
import { coreServices } from '../data/siteContent';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const [services, setServices] = useState(coreServices);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    serviceId: searchParams.get('service') || '',
    eventDate: '',
    message: '',
  });

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await api.get('/services');
        setServices(Array.isArray(data) && data.length > 0 ? data : coreServices);
      } catch (error) {
        console.error('Error fetching services:', error);
        setServices(coreServices);
      }
    };
    fetchServices();
  }, []);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await api.post('/bookings', formData);
      toast.success('Booking request submitted! We will contact you soon.');
      setFormData({
        customerName: '',
        email: '',
        phone: '',
        serviceId: '',
        eventDate: '',
        message: '',
      });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const selectedService = services.find((service) => service._id === formData.serviceId);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-cormorant text-royal-maroon">Book With Free2Spread</h1>
        <div className="mx-auto mb-4 mt-4 h-0.5 w-32 bg-royal-gold" />
        <p className="mx-auto max-w-2xl text-gray-600">
          Share your dates and service needs. Our Udaipur team will help with bookings, trips, shoots, and short video creation.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit} className="rounded-lg bg-white p-8 shadow-xl">
            <div className="space-y-6">
              <div>
                <label className="mb-2 flex items-center gap-2 font-semibold text-raj-deepblue">
                  <FaUser className="text-royal-gold" /> Full Name
                </label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-royal-gold"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 font-semibold text-raj-deepblue">
                  <FaEnvelope className="text-royal-gold" /> Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-royal-gold"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 font-semibold text-raj-deepblue">
                  <FaPhone className="text-royal-gold" /> Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-royal-gold"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 font-semibold text-raj-deepblue">
                  <FaCalendarAlt className="text-royal-gold" /> Select Service
                </label>
                <select
                  name="serviceId"
                  value={formData.serviceId}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-royal-gold"
                >
                  <option value="">Choose a service</option>
                  {services.map((service) => (
                    <option key={service._id} value={service._id}>
                      {service.title} - INR {service.price.toLocaleString()}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 font-semibold text-raj-deepblue">
                  <FaCalendarAlt className="text-royal-gold" /> Preferred Date
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-royal-gold"
                />
              </div>

              <div>
                <label className="mb-2 flex items-center gap-2 font-semibold text-raj-deepblue">
                  <FaComment className="text-royal-gold" /> Special Requests
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition-colors focus:border-royal-gold"
                  placeholder="Tell us your destination, guest count, budget, content needs, or any special request..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="gold-button w-full py-3 text-lg disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'Submit Booking Request'}
              </button>
            </div>
          </form>
        </div>

        <div className="md:col-span-1">
          {selectedService ? (
            <div className="sticky top-24 rounded-lg bg-gradient-to-br from-royal-gold/10 to-royal-maroon/10 p-6">
              <h3 className="mb-4 text-2xl font-cormorant text-royal-maroon">Selected Service</h3>
              <div className="space-y-3">
                <p className="font-semibold">{selectedService.title}</p>
                <p className="text-sm text-gray-600">{selectedService.description}</p>
                <div className="border-t border-royal-gold/30 pt-3">
                  <p className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-semibold">{selectedService.duration}</span>
                  </p>
                  <p className="mt-2 flex justify-between">
                    <span>Price:</span>
                    <span className="text-xl font-bold text-royal-gold">INR {selectedService.price.toLocaleString()}</span>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-lg bg-gray-50 p-6 text-center">
              <p className="text-gray-500">Select a service to see details</p>
            </div>
          )}

          <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
            <h4 className="mb-3 font-cormorant text-xl text-royal-maroon">Why Book With Us?</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>100% customizable booking support</li>
              <li>Udaipur-based travel guidance</li>
              <li>Photography and short video options</li>
              <li>Hotel, ticket, and trip coordination</li>
              <li>Royal Rajasthani heritage focus</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
