import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { brand, coreServices, footerQuickLinks, socialLinks } from '../../data/siteContent';

const Footer = () => {
  return (
    <footer className="bg-raj-deepblue text-raj-sand mt-20 relative overflow-hidden">
      {/* Persian art decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-royal-gold to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img src={brand.logo} alt={`${brand.name} logo`} className="h-16 w-16 object-contain" />
              <div>
                <h3 className="text-2xl font-cormorant text-royal-gold">{brand.name}</h3>
                <p className="text-xs text-raj-sand/80">{brand.slogan}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Royal Rajasthani heritage, travel bookings, creator services, and social connection from Udaipur.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  aria-label={link.name}
                  target="_blank"
                  rel="noreferrer"
                  className="text-royal-gold hover:text-amber-400 transition-colors"
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-cormorant text-royal-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {footerQuickLinks.map((link) => (
                <li key={link.path}>
                  <NavLink to={link.path} className="hover:text-royal-gold transition-colors">
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-cormorant text-royal-gold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {coreServices.map((service) => (
                <li key={service._id}>
                  <NavLink to={`/booking?service=${service._id}`} className="hover:text-royal-gold transition-colors">
                    {service.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-cormorant text-royal-gold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-royal-gold" /> {brand.location}</p>
              <p className="flex items-center gap-2"><FaPhoneAlt className="text-royal-gold" /> {brand.phone}</p>
              <p className="flex items-center gap-2"><FaEnvelope className="text-royal-gold" /> {brand.email}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-royal-gold/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} {brand.name}. {brand.slogan}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
