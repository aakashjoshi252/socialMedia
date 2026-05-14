import { NavLink } from 'react-router-dom';
import { FaCalendarAlt, FaUsers, FaGem, FaMusic, FaArrowRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import api from '../api/api';

const Home = () => {
  const [featuredServices, setFeaturedServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await api.get('/services');
        // ✅ defensive: ensure data is an array
        const services = Array.isArray(response.data) ? response.data : [];
        setFeaturedServices(services.slice(0, 3));
      } catch (error) {
        console.error('Error fetching services:', error);
        setFeaturedServices([]); // fallback to empty array
      }
    };
    fetchServices();
  }, []);

  const highlights = [
    { icon: FaGem, title: 'Royal Heritage', desc: '300+ years of legacy' },
    { icon: FaUsers, title: 'Expert Artisans', desc: 'Master craftsmen' },
    { icon: FaCalendarAlt, title: '500+ Events', desc: 'Successfully hosted' },
    { icon: FaMusic, title: 'Folk Music', desc: 'Live Manganiyar' },
  ];

  return (
    <div>
      {/* Hero Section with Persian-Rajasthani Fusion */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/416676/pexels-photo-416676.jpeg?auto=compress&cs=tinysrgb&w=1600')" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-raj-deepblue/80 via-royal-maroon/70 to-raj-deepblue/80"></div>
        </div>
        
        {/* Persian art pattern overlay */}
        <div className="absolute inset-0 bg-mandala-pattern opacity-20"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-6 py-2 border border-royal-gold rounded-full text-royal-gold text-sm backdrop-blur-sm">
            ~ Where Rajputana Meets Persian Elegance ~
          </div>
          <h1 className="text-5xl md:text-7xl font-cormorant text-raj-sand mb-6 leading-tight">
            Celebrate Your<br />
            <span className="text-royal-gold">Royal Legacy</span>
          </h1>
          <p className="text-lg md:text-xl text-raj-sand/90 mb-8 max-w-2xl mx-auto">
            Experience unparalleled luxury with our curated blend of Rajasthani grandeur 
            and Persian artistic finesse. From royal weddings to intimate gatherings, 
            we craft moments that echo through eternity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/services" className="gold-button flex items-center justify-center gap-2">
              Explore Services <FaArrowRight />
            </NavLink>
            <NavLink to="/booking" className="maroon-button">Book Your Royal Experience</NavLink>
          </div>
        </div>
        
        {/* Decorative arch at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-raj-sand rounded-t-3xl"></div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-raj-sand">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-cormorant text-royal-maroon">The Rajwada Promise</h2>
            <div className="w-24 h-0.5 bg-royal-gold mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-royal-gold/20 to-royal-maroon/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-royal-gold text-3xl" />
                </div>
                <h3 className="text-xl font-cormorant text-raj-deepblue">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-gradient-to-b from-raj-sand to-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-cormorant text-royal-maroon">Signature Experiences</h2>
            <div className="w-24 h-0.5 bg-royal-gold mx-auto mt-4"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Each service is crafted with meticulous attention to detail, blending traditional Rajasthani 
              hospitality with Persian artistic sensibilities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <div key={service._id} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-pattern">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-cormorant text-royal-maroon mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description.substring(0, 100)}...</p>
                  <div className="flex justify-between items-center">
                    <span className="text-royal-gold font-bold text-xl">₹{service.price.toLocaleString()}</span>
                    <NavLink 
                      to={`/booking?service=${service._id}`}
                      className="text-raj-deepblue hover:text-royal-gold font-semibold transition-colors"
                    >
                      Book Now →
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <NavLink to="/services" className="inline-flex items-center gap-2 text-royal-maroon hover:text-royal-gold font-semibold transition-colors">
              View All Services <FaArrowRight />
            </NavLink>
          </div>
        </div>
      </section>
      
      {/* Persian Art CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/1132305/pexels-photo-1132305.jpeg?auto=compress&cs=tinysrgb&w=1600')" }}>
          <div className="absolute inset-0 bg-raj-deepblue/85"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-cormorant text-royal-gold mb-6">
            Inspired by Persian Miniatures & Rajputana Grandeur
          </h2>
          <p className="text-raj-sand text-lg mb-8">
            Every event is a canvas where we paint with vibrant traditions, intricate patterns, 
            and timeless elegance. Let us create your masterpiece.
          </p>
          <NavLink to="/contact" className="gold-button inline-block">Begin Your Journey</NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;