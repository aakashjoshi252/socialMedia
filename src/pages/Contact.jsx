import { useState } from 'react';
import toast from 'react-hot-toast';
import api from '../api/api';
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import Seo from '../components/Seo';
import { brand, socialLinks } from '../data/siteContent';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
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
    <div className="mx-auto max-w-7xl px-4 py-12">
      <Seo
        title="Contact Free2Spread | Udaipur Travel Booking Support"
        description="Contact Free2Spread by form, WhatsApp, phone, email, Google Maps, and social media for hotels, tickets, trips, photography, and videos."
        path="/contact"
      />
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-cormorant text-royal-maroon">Connect With Free2Spread</h1>
        <div className="mx-auto mb-4 mt-4 h-0.5 w-32 bg-royal-gold" />
        <p className="mx-auto max-w-2xl text-gray-600">
          Reach our Udaipur team for hotel bookings, tickets, trip plans, photography, short videos, and collaborations.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-1">
          <div className="rounded-lg bg-gradient-to-br from-royal-maroon to-raj-deepblue p-6 text-raj-sand shadow-xl">
            <h3 className="mb-4 text-2xl font-cormorant text-royal-gold">Visit Our Udaipur Office</h3>
            <div className="space-y-4">
              <p className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-royal-gold" /> {brand.location}
              </p>
              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-royal-gold" /> {brand.phone}
              </p>
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-royal-gold" /> {brand.email}
              </p>
              <p className="flex items-center gap-3">
                <FaClock className="text-royal-gold" /> Mon-Sat: 10:00 AM - 7:00 PM
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 text-center shadow-lg">
            <FaWhatsapp className="mx-auto mb-3 text-4xl text-green-500" />
            <h4 className="mb-2 font-cormorant text-xl text-royal-maroon">Quick Booking Support</h4>
            <p className="mb-3 text-sm text-gray-500">Chat or WhatsApp for faster help</p>
            <a href={brand.whatsapp} target="_blank" rel="noreferrer" className="font-bold text-royal-gold">
              WhatsApp Free2Spread
            </a>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h4 className="mb-3 font-cormorant text-xl text-royal-maroon">Follow and Connect</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  aria-label={link.name}
                  target="_blank"
                  rel="noreferrer"
                  className="text-2xl text-royal-gold hover:text-amber-600"
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="rounded-lg bg-white p-8 shadow-xl">
            <div className="mb-6 grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-semibold text-raj-deepblue">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-royal-gold"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block font-semibold text-raj-deepblue">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-royal-gold"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="mb-2 block font-semibold text-raj-deepblue">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-royal-gold"
                placeholder="Hotel / Ticket / Trip / Photography / Video"
              />
            </div>

            <div className="mb-6">
              <label className="mb-2 block font-semibold text-raj-deepblue">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-royal-gold"
                placeholder="Tell us your dates, number of travelers, destination, budget, and service requirement..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="gold-button flex w-full items-center justify-center gap-2 py-3 text-lg disabled:opacity-50"
            >
              {loading ? 'Sending...' : (<>Send Message <FaPaperPlane /></>)}
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 overflow-hidden rounded-lg shadow-xl">
        <iframe
          src="https://www.google.com/maps?q=Udaipur%2C%20Rajasthan%2C%20India&output=embed"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Free2Spread location map"
        />
      </div>
    </div>
  );
};

export default Contact;
