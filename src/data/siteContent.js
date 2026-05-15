import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';
import {
  FaBed,
  FaCamera,
  FaFilm,
  FaMapMarkedAlt,
  FaTicketAlt,
} from 'react-icons/fa';

export const brand = {
  name: 'Free2Spread',
  slogan: 'Ryoal Rajasthani Heritage. Share & connect.',
  location: 'Udaipur, Rajasthan, India',
  email: 'hello@free2spread.com',
  phone: '+91 98765 43210',
  whatsapp: 'https://wa.me/919876543210',
};

export const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/free2spread', icon: FaInstagram },
  { name: 'Facebook', href: 'https://www.facebook.com/free2spread', icon: FaFacebookF },
  { name: 'X', href: 'https://x.com/free2spread', icon: FaXTwitter },
  { name: 'YouTube', href: 'https://www.youtube.com/@free2spread', icon: FaYoutube },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/free2spread', icon: FaLinkedinIn },
  { name: 'WhatsApp', href: brand.whatsapp, icon: FaWhatsapp },
];

export const coreServices = [
  {
    _id: 'hotel-bookings',
    title: 'Hotel Bookings',
    category: 'travel',
    duration: 'Same-day assistance',
    price: 1499,
    imageUrl: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=900',
    icon: FaBed,
    description:
      'Handpicked palace stays, lake-view hotels, boutique havelis, and comfortable family rooms across Udaipur and Rajasthan.',
  },
  {
    _id: 'ticket-bookings',
    title: 'Ticket Bookings',
    category: 'travel',
    duration: 'Fast confirmations',
    price: 699,
    imageUrl: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=900',
    icon: FaTicketAlt,
    description:
      'Smooth booking support for trains, flights, monuments, cultural shows, boating, and curated local experiences.',
  },
  {
    _id: 'photography',
    title: 'Photography',
    category: 'creative',
    duration: 'Half-day and full-day',
    price: 4999,
    imageUrl: 'https://images.pexels.com/photos/3014019/pexels-photo-3014019.jpeg?auto=compress&cs=tinysrgb&w=900',
    icon: FaCamera,
    description:
      'Portraits, couple shoots, hotel content, destination coverage, and heritage-themed visuals crafted for memories and sharing.',
  },
  {
    _id: 'short-videos',
    title: 'Short Videos Creating',
    category: 'creative',
    duration: 'Reels and shorts',
    price: 2999,
    imageUrl: 'https://images.pexels.com/photos/7773761/pexels-photo-7773761.jpeg?auto=compress&cs=tinysrgb&w=900',
    icon: FaFilm,
    description:
      'Cinematic reels, travel shorts, food stories, hotel walkthroughs, and social-ready edits with heritage flavor.',
  },
  {
    _id: 'trip-bookings',
    title: 'Trip Bookings',
    category: 'travel',
    duration: 'Custom itinerary',
    price: 2499,
    imageUrl: 'https://images.pexels.com/photos/158672/fog-forest-mountain-world-clouds-158672.jpeg?auto=compress&cs=tinysrgb&w=900',
    icon: FaMapMarkedAlt,
    description:
      'Custom Udaipur, Kumbhalgarh, Mount Abu, Jaisalmer, Jaipur, and Rajasthan tour plans with transport and guide coordination.',
  },
];

export const blogPosts = [
  {
    title: 'A First-Timer Guide to Udaipur Lake Experiences',
    tag: 'Travel',
    image: 'https://images.pexels.com/photos/14894269/pexels-photo-14894269.jpeg?auto=compress&cs=tinysrgb&w=900',
    excerpt:
      'Plan golden-hour boating, palace views, lakeside cafes, and photo stops without rushing your itinerary.',
  },
  {
    title: 'How to Create Heritage Reels That Feel Premium',
    tag: 'Creator Tips',
    image: 'https://images.pexels.com/photos/7693352/pexels-photo-7693352.jpeg?auto=compress&cs=tinysrgb&w=900',
    excerpt:
      'Use movement, textiles, music, architecture, and quick story beats to make short videos more memorable.',
  },
  {
    title: 'Best Booking Windows for Rajasthan Trips',
    tag: 'Bookings',
    image: 'https://images.pexels.com/photos/5205083/pexels-photo-5205083.jpeg?auto=compress&cs=tinysrgb&w=900',
    excerpt:
      'A simple season-by-season view for hotels, tickets, photoshoots, and local guided experiences.',
  },
];
