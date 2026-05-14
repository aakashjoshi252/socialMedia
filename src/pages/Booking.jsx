// frontend/src/pages/Booking.jsx
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import api from '../api/api';
import { FaCalendarAlt, FaUser, FaEnvelope, FaPhone, FaComment } from 'react-icons/fa';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const [services, setServices] = useState([]);
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
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };
    fetchServices();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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

  const selectedService = services.find(s => s._id === formData.serviceId);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-cormorant text-royal-maroon">Book Your Royal Experience</h1>
        <div className="w-32 h-0.5 bg-royal-gold mx-auto mt-4 mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Fill in your details below, and our royal concierge will reach out to craft your perfect event.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Form */}
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-raj-deepblue font-semibold mb-2">
                  <FaUser className="text-royal-gold" /> Full Name
                </label>
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-royal-gold transition-colors"
                  placeholder="Your royal name"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-raj-deepblue font-semibold mb-2">
                  <FaEnvelope className="text-royal-gold" /> Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-royal-gold transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-raj-deepblue font-semibold mb-2">
                  <FaPhone className="text-royal-gold" /> Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-royal-gold transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-raj-deepblue font-semibold mb-2">
                  <FaCalendarAlt className="text-royal-gold" /> Select Service
                </label>
                <select
                  name="serviceId"
                  value={formData.serviceId}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-royal-gold transition-colors"
                >
                  <option value="">Choose a service</option>
                  {services.map((service) => (
                    <option key={service._id} value={service._id}>
                      {service.title} - ₹{service.price.toLocaleString()}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="flex items-center gap-2 text-raj-deepblue font-semibold mb-2">
                  <FaCalendarAlt className="text-royal-gold" /> Event Date
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-royal-gold transition-colors"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-raj-deepblue font-semibold mb-2">
                  <FaComment className="text-royal-gold" /> Special Requests
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-royal-gold transition-colors"
                  placeholder="Tell us about your vision, preferences, or any special requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full gold-button py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Submit Booking Request'}
              </button>
            </div>
          </form>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-1">
          {selectedService ? (
            <div className="bg-gradient-to-br from-royal-gold/10 to-royal-maroon/10 rounded-2xl p-6 sticky top-24">
              <h3 className="text-2xl font-cormorant text-royal-maroon mb-4">Selected Service</h3>
              <div className="space-y-3">
                <p className="font-semibold">{selectedService.title}</p>
                <p className="text-sm text-gray-600">{selectedService.description}</p>
                <div className="border-t border-royal-gold/30 pt-3">
                  <p className="flex justify-between">
                    <span>Duration:</span>
                    <span className="font-semibold">{selectedService.duration}</span>
                  </p>
                  <p className="flex justify-between mt-2">
                    <span>Price:</span>
                    <span className="font-bold text-royal-gold text-xl">₹{selectedService.price.toLocaleString()}</span>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-2xl p-6 text-center">
              <p className="text-gray-500">Select a service to see details</p>
            </div>
          )}
          
          <div className="mt-6 bg-white rounded-2xl p-6 shadow-md">
            <h4 className="font-cormorant text-xl text-royal-maroon mb-3">Why Book With Us?</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>✓ 100% Customizable Packages</li>
              <li>✓ Dedicated Royal Concierge</li>
              <li>✓ Authentic Rajasthani Hospitality</li>
              <li>✓ Persian Art Integration</li>
              <li>✓ Best Price Guarantee</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;