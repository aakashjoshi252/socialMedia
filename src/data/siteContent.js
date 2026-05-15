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
  slogan: 'Royal Rajasthani Heritage. Share & connect.',
  location: 'Udaipur, Rajasthan, India',
  email: 'hello@free2spread.com',
  phone: '+91 98765 43210',
  whatsapp: 'https://wa.me/919876543210',
  logo: '/free2spread-logo.png',
};

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Booking', path: '/booking' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Contact', path: '/contact' },
];

export const footerQuickLinks = [
  ...navLinks,
  { name: 'Gallery', path: '/gallery' },
  { name: 'Travel Guide', path: '/blog/udaipur-lake-experiences' },
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Terms', path: '/terms' },
];

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
    slug: 'udaipur-lake-experiences',
    title: 'A First-Timer Guide to Udaipur Lake Experiences',
    tag: 'Travel',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/14894269/pexels-photo-14894269.jpeg?auto=compress&cs=tinysrgb&w=900',
    excerpt:
      'Plan golden-hour boating, palace views, lakeside cafes, and photo stops without rushing your itinerary.',
    sections: [
      {
        heading: 'Start With the Right Lake',
        body: 'Lake Pichola is best for first-time palace views, Jagmandir stops, and sunset photos. Fateh Sagar feels more relaxed and works well for families, evening snacks, and a lighter local walk.',
      },
      {
        heading: 'Time Your Boat Ride',
        body: 'Book late afternoon when the stone facades begin to glow. Keep at least 90 minutes free around the ride so you are not rushing from hotel check-in, lunch, or another ticketed visit.',
      },
      {
        heading: 'Build a Simple Route',
        body: 'Pair City Palace, Gangaur Ghat, Ambrai side views, and a lakeside dinner in one day. Keep Monsoon Palace or Sajjangarh Biological Park for another half day because travel time adds up.',
      },
    ],
    tips: ['Carry a light layer for evening wind', 'Keep camera batteries ready before boarding', 'Ask about boating cut-off times during festival seasons'],
  },
  {
    slug: 'premium-heritage-reels',
    title: 'How to Create Heritage Reels That Feel Premium',
    tag: 'Creator Tips',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/7693352/pexels-photo-7693352.jpeg?auto=compress&cs=tinysrgb&w=900',
    excerpt:
      'Use movement, textiles, music, architecture, and quick story beats to make short videos more memorable.',
    sections: [
      {
        heading: 'Choose One Visual Story',
        body: 'A premium reel does not need every location. Pick one theme such as palace corridors, textile details, a hotel arrival, or a food walk, then let every shot support that theme.',
      },
      {
        heading: 'Use Motion With Purpose',
        body: 'Slow push-ins, doorway reveals, hand movements, dupatta flow, and walking transitions can make the edit feel cinematic without heavy effects.',
      },
      {
        heading: 'Respect the Heritage Detail',
        body: 'Let carved doors, jharokhas, mirror work, folk music, and local textures breathe on screen. A few clean shots often feel richer than a crowded montage.',
      },
    ],
    tips: ['Shoot vertical from the start', 'Capture 3-second detail clips', 'Record clean ambient sound for texture'],
  },
  {
    slug: 'rajasthan-booking-windows',
    title: 'Best Booking Windows for Rajasthan Trips',
    tag: 'Bookings',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/5205083/pexels-photo-5205083.jpeg?auto=compress&cs=tinysrgb&w=900',
    excerpt:
      'A simple season-by-season view for hotels, tickets, photoshoots, and local guided experiences.',
    sections: [
      {
        heading: 'October to March',
        body: 'This is the busiest travel window. Hotels, guides, photographers, cultural shows, and dinner slots should be planned early, especially near Diwali, New Year, and long weekends.',
      },
      {
        heading: 'April to June',
        body: 'Summer can be better for quieter luxury stays and indoor shoots. Keep outdoor experiences early morning or near sunset, and plan comfortable transport between stops.',
      },
      {
        heading: 'July to September',
        body: 'Monsoon makes hills and lakes look beautiful, but plans need flexibility. Keep backup indoor experiences and confirm road conditions for day trips outside Udaipur.',
      },
    ],
    tips: ['Book festival dates 3-6 weeks ahead', 'Confirm monument holidays before finalizing', 'Keep photo shoots close to sunrise or sunset'],
  },
  {
    slug: 'udaipur-family-trip-plan',
    title: 'A Calm 2-Day Udaipur Plan for Families',
    tag: 'Itinerary',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/15801083/pexels-photo-15801083.jpeg?auto=compress&cs=tinysrgb&w=900',
    excerpt:
      'Balance palace visits, lakes, food stops, and rest time so elders and children enjoy the city comfortably.',
    sections: [
      {
        heading: 'Day One',
        body: 'Start with City Palace before crowds build, rest after lunch, then keep boating and a lakeside dinner for evening. Avoid stacking too many old-city walks in the same day.',
      },
      {
        heading: 'Day Two',
        body: 'Use the morning for Saheliyon ki Bari or a relaxed market visit, then choose one bigger outing such as Monsoon Palace or a cultural show depending on energy levels.',
      },
      {
        heading: 'Comfort Matters',
        body: 'Short transfers, pre-booked tickets, and a clear pickup point make the trip easier. Families usually enjoy Udaipur more when the day includes pauses.',
      },
    ],
    tips: ['Keep water and sun protection handy', 'Pre-book larger vehicles for groups', 'Reserve dinner before sunset slots fill'],
  },
];

export const defaultReviews = [
  {
    _id: 'review-1',
    name: 'Aarav Sharma',
    location: 'Delhi',
    rating: 5,
    service: 'Trip Bookings',
    message: 'Free2Spread planned our Udaipur trip beautifully. The lake timing, hotel suggestion, and local guidance were all on point.',
  },
  {
    _id: 'review-2',
    name: 'Meera Joshi',
    location: 'Ahmedabad',
    rating: 5,
    service: 'Photography',
    message: 'The heritage photoshoot felt premium and natural. They knew the best corners, timing, and poses without making it stressful.',
  },
  {
    _id: 'review-3',
    name: 'Kabir Khan',
    location: 'Mumbai',
    rating: 4,
    service: 'Short Videos Creating',
    message: 'Our hotel reel looked polished and social-ready. Fast edit, good music sense, and lovely Rajasthani details.',
  },
];

export const galleryImages = [
  {
    title: 'Lake Pichola Evening',
    image: 'https://images.pexels.com/photos/14894269/pexels-photo-14894269.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Heritage Stay Detail',
    image: 'https://images.pexels.com/photos/15869828/pexels-photo-15869828.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Rajasthan Road Trip',
    image: 'https://images.pexels.com/photos/5205083/pexels-photo-5205083.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Creator Shoot',
    image: 'https://images.pexels.com/photos/3014019/pexels-photo-3014019.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Travel Bookings',
    image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Short Video Stories',
    image: 'https://images.pexels.com/photos/7773761/pexels-photo-7773761.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];
