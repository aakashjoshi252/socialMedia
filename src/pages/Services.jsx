// frontend/src/pages/Services.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/api';
import { FaClock, FaTag, FaSearch } from 'react-icons/fa';
import { coreServices } from '../data/siteContent';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await api.get('/services');
        setServices(Array.isArray(data) && data.length > 0 ? data : coreServices);
      } catch (error) {
        console.error('Error fetching services:', error);
        setServices(coreServices);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const categories = [
    { value: 'all', label: 'All Services' },
    { value: 'travel', label: 'Travel' },
    { value: 'creative', label: 'Creative' },
    { value: 'photography', label: 'Photography' },
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(search.toLowerCase()) ||
                          service.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      category === 'all' ||
      service.category === category ||
      (category === 'photography' && service.title.toLowerCase().includes('photography'));
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="w-12 h-12 border-4 border-royal-gold border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header with Persian arch design */}
      <div className="text-center mb-12 persian-arch pb-8">
        <h1 className="text-5xl font-cormorant text-royal-maroon">Free2Spread Services</h1>
        <div className="w-32 h-0.5 bg-royal-gold mx-auto mt-4 mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Hotel bookings, ticket bookings, photography, short video creation, and trip bookings for Rajasthan travelers and creators.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <div className="flex-1 relative">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search services..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-royal-gold"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategory(cat.value)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                category === cat.value
                  ? 'bg-royal-gold text-raj-deepblue font-semibold shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-royal-gold/70'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      {filteredServices.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">No services found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div key={service._id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-royal-gold/90 text-raj-deepblue px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
                  {service.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-cormorant text-royal-maroon mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{service.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <FaClock />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-royal-gold font-bold">
                    <FaTag />
                    <span className="text-xl">INR {service.price.toLocaleString()}</span>
                  </div>
                </div>
                <Link
                  to={`/booking?service=${service._id}`}
                  className="block w-full text-center maroon-button"
                >
                  Book This Service
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
