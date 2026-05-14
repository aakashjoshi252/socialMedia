import { FaInstagram, FaFacebookF, FaTwitter, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-raj-deepblue text-raj-sand mt-20 relative overflow-hidden">
      {/* Persian art decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-royal-gold to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-cormorant text-royal-gold mb-4">Rajwada Services</h3>
            <p className="text-sm leading-relaxed">
              Experience the royal essence of Rajasthan blended with Persian artistry. 
              Creating unforgettable moments since 1985.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-royal-gold hover:text-amber-400 transition-colors"><FaInstagram size={20} /></a>
              <a href="#" className="text-royal-gold hover:text-amber-400 transition-colors"><FaFacebookF size={20} /></a>
              <a href="#" className="text-royal-gold hover:text-amber-400 transition-colors"><FaTwitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-cormorant text-royal-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-royal-gold transition-colors">Home</a></li>
              <li><a href="/services" className="hover:text-royal-gold transition-colors">Our Services</a></li>
              <li><a href="/booking" className="hover:text-royal-gold transition-colors">Book Now</a></li>
              <li><a href="/about" className="hover:text-royal-gold transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-royal-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-cormorant text-royal-gold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-royal-gold" /> Jaipur, Rajasthan, India</p>
              <p className="flex items-center gap-2"><FaPhoneAlt className="text-royal-gold" /> +91 98765 43210</p>
              <p className="flex items-center gap-2"><FaEnvelope className="text-royal-gold" /> royal@rajwada.com</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-cormorant text-royal-gold mb-4">Royal Updates</h4>
            <p className="text-sm mb-3">Subscribe for exclusive offers</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-l-md text-raj-deepblue focus:outline-none"
              />
              <button className="bg-royal-gold text-raj-deepblue px-4 py-2 rounded-r-md hover:bg-amber-500 transition-colors font-semibold">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-royal-gold/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Rajwada Services. Where Heritage Meets Elegance.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;