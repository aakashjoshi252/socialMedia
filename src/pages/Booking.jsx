import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import api from '../api/api';
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaComment,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaRupeeSign,
  FaUser,
  FaUsers,
} from 'react-icons/fa';
import Seo from '../components/Seo';
import { coreServices, featuredDestinations, normalizeServices } from '../data/siteContent';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const [services, setServices] = useState(coreServices);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    serviceId: searchParams.get('service') || '',
    destination: searchParams.get('destination') || '',
    eventDate: searchParams.get('date') || '',
    guests: searchParams.get('guests') || '2',
    budget: '',
    travelStyle: 'Premium comfort',
    message: '',
  });

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await api.get('/services');
        setServices(normalizeServices(data));
      } catch {
        setServices(coreServices);
      }
    };
    fetchServices();
  }, []);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const selectedService = services.find((service) => service._id === formData.serviceId);

  const bookingSummary = useMemo(() => {
    const estimate = selectedService ? selectedService.price * Math.max(Number(formData.guests) || 1, 1) : 0;
    return {
      service: selectedService?.title || 'Choose a service',
      destination: formData.destination || 'Destination pending',
      date: formData.eventDate || 'Date pending',
      guests: formData.guests || '1',
      budget: formData.budget || 'Budget pending',
      estimate,
    };
  }, [formData.budget, formData.destination, formData.eventDate, formData.guests, selectedService]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await api.post('/bookings', formData);
      toast.success('Booking inquiry submitted. Our team will contact you soon.');
      setFormData({
        customerName: '',
        email: '',
        phone: '',
        serviceId: '',
        destination: '',
        eventDate: '',
        guests: '2',
        budget: '',
        travelStyle: 'Premium comfort',
        message: '',
      });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-raj-sand">
      <Seo
        title="Book Travel Services | Free2Spread"
        description="Submit a professional booking inquiry for hotels, tickets, trips, photography, reels, destination selection, guests, budget, and contact details."
        path="/booking"
      />

      <section className="relative overflow-hidden bg-raj-deepblue text-raj-sand">
        <img
          src="https://images.pexels.com/photos/15869828/pexels-photo-15869828.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="Premium travel booking"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-raj-deepblue via-royal-maroon/80 to-raj-deepblue/80" />
        <div className="section-shell relative py-20 text-center">
          <p className="eyebrow">Booking Desk</p>
          <h1 className="mt-3 text-5xl font-cormorant md:text-6xl">Plan Your Trip With a Human Travel Partner</h1>
          <p className="mx-auto mt-4 max-w-3xl text-raj-sand/85">
            Share your service, destination, date, guest count, budget, and contact details. We will follow up with availability and next steps.
          </p>
        </div>
      </section>

      <section className="section-shell grid gap-8 py-12 lg:grid-cols-[1fr_360px]">
        <form onSubmit={handleSubmit} className="premium-card p-6 md:p-8">
          <div className="mb-8">
            <p className="eyebrow">Inquiry Form</p>
            <h2 className="mt-1 text-4xl font-cormorant text-royal-maroon">Booking Details</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <label>
              <span className="mb-2 flex items-center gap-2 font-semibold text-raj-deepblue"><FaUser className="text-royal-gold" /> Full Name</span>
              <input name="customerName" value={formData.customerName} onChange={handleChange} required className="focus-ring w-full rounded-lg border border-gray-300 px-4 py-3" placeholder="Your name" />
            </label>
            <label>
              <span className="mb-2 flex items-center gap-2 font-semibold text-raj-deepblue"><FaEnvelope className="text-royal-gold" /> Email</span>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="focus-ring w-full rounded-lg border border-gray-300 px-4 py-3" placeholder="you@example.com" />
            </label>
            <label>
              <span className="mb-2 flex items-center gap-2 font-semibold text-raj-deepblue"><FaPhone className="text-royal-gold" /> Phone</span>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="focus-ring w-full rounded-lg border border-gray-300 px-4 py-3" placeholder="+91 98765 43210" />
            </label>
            <label>
              <span className="mb-2 flex items-center gap-2 font-semibold text-raj-deepblue"><FaMapMarkerAlt className="text-royal-gold" /> Destination</span>
              <input list="destinations" name="destination" value={formData.destination} onChange={handleChange} required className="focus-ring w-full rounded-lg border border-gray-300 px-4 py-3" placeholder="Udaipur, Jaipur..." />
              <datalist id="destinations">
                {featuredDestinations.map((destination) => <option key={destination.name} value={destination.name} />)}
              </datalist>
            </label>
            <label>
              <span className="mb-2 flex items-center gap-2 font-semibold text-raj-deepblue"><FaCalendarAlt className="text-royal-gold" /> Service</span>
              <select name="serviceId" value={formData.serviceId} onChange={handleChange} required className="focus-ring w-full rounded-lg border border-gray-300 px-4 py-3">
                <option value="">Choose a service</option>
                {services.map((service) => (
                  <option key={service._id} value={service._id}>{service.title} - INR {service.price.toLocaleString()}+</option>
                ))}
              </select>
            </label>
            <label>
              <span className="mb-2 flex items-center gap-2 font-semibold text-raj-deepblue"><FaCalendarAlt className="text-royal-gold" /> Preferred Date</span>
              <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} required min={new Date().toISOString().split('T')[0]} className="focus-ring w-full rounded-lg border border-gray-300 px-4 py-3" />
            </label>
            <label>
              <span className="mb-2 flex items-center gap-2 font-semibold text-raj-deepblue"><FaUsers className="text-royal-gold" /> Guests</span>
              <input type="number" min="1" name="guests" value={formData.guests} onChange={handleChange} required className="focus-ring w-full rounded-lg border border-gray-300 px-4 py-3" />
            </label>
            <label>
              <span className="mb-2 flex items-center gap-2 font-semibold text-raj-deepblue"><FaRupeeSign className="text-royal-gold" /> Budget</span>
              <select name="budget" value={formData.budget} onChange={handleChange} required className="focus-ring w-full rounded-lg border border-gray-300 px-4 py-3">
                <option value="">Select budget</option>
                <option>Under INR 10,000</option>
                <option>INR 10,000 - 25,000</option>
                <option>INR 25,000 - 50,000</option>
                <option>INR 50,000+</option>
              </select>
            </label>
            <label className="md:col-span-2">
              <span className="mb-2 block font-semibold text-raj-deepblue">Travel Style</span>
              <select name="travelStyle" value={formData.travelStyle} onChange={handleChange} className="focus-ring w-full rounded-lg border border-gray-300 px-4 py-3">
                <option>Premium comfort</option>
                <option>Budget smart</option>
                <option>Family friendly</option>
                <option>Honeymoon / couple</option>
                <option>Creator / content focused</option>
                <option>Corporate / group</option>
              </select>
            </label>
            <label className="md:col-span-2">
              <span className="mb-2 flex items-center gap-2 font-semibold text-raj-deepblue"><FaComment className="text-royal-gold" /> Special Requests</span>
              <textarea name="message" value={formData.message} onChange={handleChange} rows="5" className="focus-ring w-full rounded-lg border border-gray-300 px-4 py-3" placeholder="Tell us hotel category, ticket needs, shoot style, route, room count, transport needs, or any special request..." />
            </label>
          </div>

          <button type="submit" disabled={loading} className="gold-button mt-8 w-full py-3 text-lg disabled:cursor-not-allowed disabled:opacity-50">
            {loading ? 'Submitting...' : 'Submit Booking Inquiry'}
          </button>
        </form>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="premium-card p-6">
            <h3 className="text-3xl font-cormorant text-royal-maroon">Booking Summary</h3>
            <div className="mt-5 space-y-4 text-sm">
              {[
                ['Service', bookingSummary.service],
                ['Destination', bookingSummary.destination],
                ['Date', bookingSummary.date],
                ['Guests', bookingSummary.guests],
                ['Budget', bookingSummary.budget],
              ].map(([label, value]) => (
                <p key={label} className="flex justify-between gap-4 border-b border-royal-gold/20 pb-3">
                  <span className="text-gray-500">{label}</span>
                  <span className="text-right font-semibold text-raj-deepblue">{value}</span>
                </p>
              ))}
              <p className="rounded-lg bg-raj-sand p-4 text-center">
                <span className="block text-xs text-gray-500">Starting estimate</span>
                <span className="text-2xl font-bold text-royal-maroon">
                  {bookingSummary.estimate ? `INR ${bookingSummary.estimate.toLocaleString()}+` : 'Pending'}
                </span>
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-royal-maroon to-raj-deepblue p-6 text-raj-sand shadow-xl">
            <h4 className="font-cormorant text-2xl text-royal-gold">What Happens Next?</h4>
            <div className="mt-4 space-y-3 text-sm">
              {['We review your route, service, and budget', 'We check availability and vendor options', 'You receive clear next steps on WhatsApp or email'].map((item) => (
                <p key={item} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 text-royal-gold" /> {item}
                </p>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default Booking;
