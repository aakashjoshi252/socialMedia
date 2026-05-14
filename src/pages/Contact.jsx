import { useState } from 'react';
import toast from 'react-hot-toast';
import api from '../api/api';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('/contact', formData);
      toast.success('Message sent! Our team will respond within 24 hours.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-cormorant text-royal-maroon">Connect With Royalty</h1>
        <div className="w-32 h-0.5 bg-royal-gold mx-auto mt-4 mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Let us bring your vision to life. Reach out to our team for consultations, collaborations, or inquiries.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Info Cards */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gradient-to-br from-royal-maroon to-raj-deepblue rounded-2xl p-6 text-raj-sand shadow-xl">
            <h3 className="text-2xl font-cormorant text-royal-gold mb-4">Visit Our Palace Office</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-royal-gold mt-1" />
                <p>Rajwada House, Amer Road, Jaipur - 302002, Rajasthan, India</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-royal-gold" />
                <p>+91 141 234 5678 | +91 98765 43210</p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-royal-gold" />
                <p>royal@rajwada.com | events@rajwada.com</p>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-royal-gold" />
                <p>Mon-Sat: 10:00 AM - 7:00 PM | Sun: By Appointment</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <h4 className="font-cormorant text-xl text-royal-maroon mb-2">Emergency Support</h4>
            <p className="text-gray-500 text-sm mb-3">24/7 for booked clients</p>
            <p className="text-royal-gold font-bold text-lg">+91 98290 12345</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h4 className="font-cormorant text-xl text-royal-maroon mb-3">Follow Our Royal Journey</h4>
            <div className="flex gap-4 justify-center">
              <a href="#" className="text-royal-gold hover:text-amber-600 text-2xl">📷</a>
              <a href="#" className="text-royal-gold hover:text-amber-600 text-2xl">📘</a>
              <a href="#" className="text-royal-gold hover:text-amber-600 text-2xl">🐦</a>
              <a href="#" className="text-royal-gold hover:text-amber-600 text-2xl">📌</a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-raj-deepblue font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-royal-gold"
                  placeholder="Rajkumar Singh"
                />
              </div>
              <div>
                <label className="block text-raj-deepblue font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-royal-gold"
                  placeholder="royal@example.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-raj-deepblue font-semibold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-royal-gold"
                placeholder="Wedding Inquiry / Collaboration / Support"
              />
            </div>

            <div className="mb-6">
              <label className="block text-raj-deepblue font-semibold mb-2">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-royal-gold"
                placeholder="Tell us about your event, date, expected guest count, and any special requests..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full gold-button py-3 text-lg flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? 'Sending...' : (<>Send Message <FaPaperPlane /></>)}
            </button>
          </form>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="mt-12 rounded-2xl overflow-hidden shadow-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.444245900236!2d75.78657877509865!3d26.88482097664284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3fd6f1ffb0b%3A0x5a29ca3a9f0fa7b1!2sAmer%20Fort!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Location Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
