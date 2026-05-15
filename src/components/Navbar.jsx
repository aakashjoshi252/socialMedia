import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { brand, navLinks } from '../data/siteContent';

export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => (path === '/' ? location.pathname === path : location.pathname.startsWith(path));

  return (
    <nav className="bg-gradient-to-r from-raj-deepblue via-royal-maroon to-raj-deepblue shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 group">
            <img
              src={brand.logo}
              alt={`${brand.name} logo`}
              className="h-16 w-16 object-contain"
            />
            <div>
              <h1 className="text-xl font-cormorant text-royal-gold tracking-wider lg:text-2xl">{brand.name}</h1>
              <p className="hidden max-w-44 text-xs text-raj-sand font-poppins leading-tight lg:block">{brand.slogan}</p>
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-royal-gold bg-raj-deepblue shadow-lg border-b-2 border-royal-gold'
                    : 'text-raj-sand hover:text-royal-gold hover:bg-raj-deepblue/50'
                }`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-raj-sand focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-raj-deepblue/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-royal-gold bg-royal-maroon/50'
                    : 'text-raj-sand hover:text-royal-gold hover:bg-royal-maroon/30'
                }`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
