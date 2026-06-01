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
  FaCheckCircle,
  FaFilm,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaSuitcaseRolling,
  FaTicketAlt,
  FaWallet,
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
  { name: 'Guides', path: '/travel-guide' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Contact', path: '/contact' },
];

export const footerQuickLinks = [
  ...navLinks,
  { name: 'Gallery', path: '/gallery' },
  { name: 'Travel Guide', path: '/travel-guide' },
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
    features: ['Luxury hotels', 'Budget hotels', 'Family stays', 'Resort bookings'],
    inclusions: ['Stay shortlist', 'Availability check', 'Price comparison', 'Check-in guidance'],
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
    features: ['Flight tickets', 'Train tickets', 'Bus tickets', 'Event tickets'],
    inclusions: ['Best route options', 'Fare guidance', 'Seat preference support', 'Instant follow-up'],
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
    features: ['Travel photography', 'Couple shoots', 'Family shoots', 'Destination photography'],
    inclusions: ['Shoot planning', 'Location guidance', 'Edited photos', 'Social-ready delivery'],
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
    features: ['Reels', 'Travel vlogs', 'Social media content', 'Cinematic edits'],
    inclusions: ['Shot list', 'Filming support', 'Music-led edit', 'Vertical exports'],
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
    features: ['Domestic trips', 'International trips', 'Honeymoon packages', 'Group and corporate tours'],
    inclusions: ['Itinerary design', 'Stay and transport coordination', 'Local guidance', 'Budget planning'],
  },
];

export const normalizeServices = (apiServices) => {
  if (!Array.isArray(apiServices) || apiServices.length === 0) return coreServices;

  return apiServices.map((service) => {
    const fallback = coreServices.find(
      (item) => item._id === service._id || item.title.toLowerCase() === service.title?.toLowerCase()
    );

    return {
      ...fallback,
      ...service,
      _id: fallback?._id || service._id,
      icon: fallback?.icon || FaMapMarkedAlt,
      features: service.features || fallback?.features || [],
      inclusions: service.inclusions || fallback?.inclusions || [],
    };
  });
};

export const trustStats = [
  { value: '2,500+', label: 'Travelers assisted' },
  { value: '4.8/5', label: 'Average guest rating' },
  { value: '18+', label: 'Rajasthan routes covered' },
  { value: '24 hr', label: 'Fast inquiry response' },
];

export const whyChoose = [
  { icon: FaShieldAlt, title: 'Trusted travel partner', text: 'Local-first coordination with clear communication from inquiry to follow-up.' },
  { icon: FaWallet, title: 'Best price guidance', text: 'Compare stay, ticket, and package options before you commit.' },
  { icon: FaMapMarkedAlt, title: 'Expert local guidance', text: 'Udaipur-based planning with real knowledge of timing, routes, and guest comfort.' },
  { icon: FaCheckCircle, title: 'Fast booking support', text: 'Quick shortlists, confirmations, and practical next steps for every request.' },
  { icon: FaSuitcaseRolling, title: 'Personalized trips', text: 'Trips, shoots, and content plans shaped around your budget and travel style.' },
];

export const featuredDestinations = [
  {
    name: 'Udaipur',
    image: 'https://images.pexels.com/photos/14894269/pexels-photo-14894269.jpeg?auto=compress&cs=tinysrgb&w=900',
    summary: 'Lakes, palaces, ghats, cafes, cultural shows, and premium heritage stays.',
    bestFor: 'Couples, families, creators',
  },
  {
    name: 'Jaipur',
    image: 'https://images.pexels.com/photos/784879/pexels-photo-784879.jpeg?auto=compress&cs=tinysrgb&w=900',
    summary: 'Fort views, pink city markets, luxury hotels, museums, and shopping routes.',
    bestFor: 'First-time Rajasthan trips',
  },
  {
    name: 'Jaisalmer',
    image: 'https://images.pexels.com/photos/5205083/pexels-photo-5205083.jpeg?auto=compress&cs=tinysrgb&w=900',
    summary: 'Golden fort lanes, desert camps, camel safaris, and cinematic sunset shoots.',
    bestFor: 'Desert experiences',
  },
  {
    name: 'Mount Abu',
    image: 'https://images.pexels.com/photos/158672/fog-forest-mountain-world-clouds-158672.jpeg?auto=compress&cs=tinysrgb&w=900',
    summary: 'Hill-station air, lake walks, family stays, and relaxed weekend itineraries.',
    bestFor: 'Short breaks',
  },
];

export const travelPackages = [
  {
    title: 'Royal Udaipur Weekend',
    duration: '2 nights / 3 days',
    price: 12999,
    image: 'https://images.pexels.com/photos/15801083/pexels-photo-15801083.jpeg?auto=compress&cs=tinysrgb&w=900',
    highlights: ['Lake Pichola', 'City Palace', 'Boating', 'Heritage photos'],
  },
  {
    title: 'Rajasthan Heritage Circuit',
    duration: '6 nights / 7 days',
    price: 42999,
    image: 'https://images.pexels.com/photos/784879/pexels-photo-784879.jpeg?auto=compress&cs=tinysrgb&w=900',
    highlights: ['Udaipur', 'Jodhpur', 'Jaisalmer', 'Jaipur'],
  },
  {
    title: 'Creator Shoot Escape',
    duration: '1 day',
    price: 7999,
    image: 'https://images.pexels.com/photos/3014019/pexels-photo-3014019.jpeg?auto=compress&cs=tinysrgb&w=900',
    highlights: ['Location plan', 'Photo shoot', 'Reels', 'Edited content'],
  },
];

export const partnerLogos = ['Heritage Stays', 'Local Guides', 'Travel Vendors', 'Creator Network'];

export const faqs = [
  {
    question: 'Does Free2Spread confirm bookings instantly?',
    answer: 'We confirm availability and pricing with vendors first, then share the next step clearly before any final confirmation.',
  },
  {
    question: 'Can I customize a package?',
    answer: 'Yes. Trips can be tailored by destination, hotel category, budget, travel dates, guest count, and content requirements.',
  },
  {
    question: 'Do you support photography and reels together?',
    answer: 'Yes. We can plan a combined photo and short-video session with location guidance, timing, and social-ready delivery.',
  },
  {
    question: 'Which destinations do you cover?',
    answer: 'We focus on Udaipur and Rajasthan routes, with support for domestic and selected international trip planning.',
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

export const guideTopics = [
  {
    title: 'Destination Guides',
    text: 'City-by-city plans for Udaipur, Jaipur, Jaisalmer, Mount Abu, Kumbhalgarh, and Rajasthan circuits.',
    items: ['Best time to visit', 'Top routes', 'Local food stops', 'Photo-friendly timings'],
  },
  {
    title: 'Travel Tips',
    text: 'Simple advice for smoother stays, transfers, tickets, weather planning, and cultural experiences.',
    items: ['Transport planning', 'Monument timing', 'Family comfort', 'Local etiquette'],
  },
  {
    title: 'Packing Checklists',
    text: 'Seasonal packing for desert trips, lake evenings, photo shoots, family travel, and monsoon getaways.',
    items: ['Clothing', 'Documents', 'Camera gear', 'Health essentials'],
  },
  {
    title: 'Visa and Documents',
    text: 'Practical reminders for IDs, permits, international planning, and booking documentation.',
    items: ['ID proof', 'Hotel vouchers', 'Ticket copies', 'International checklist'],
  },
  {
    title: 'Budget Planning',
    text: 'Break down stays, transport, food, tickets, shoots, and experience costs before booking.',
    items: ['Hotel category', 'Daily transport', 'Entry tickets', 'Content add-ons'],
  },
  {
    title: 'Safety Tips',
    text: 'Guest-friendly guidance for reliable vendors, road timing, emergency contacts, and safe travel habits.',
    items: ['Verified vendors', 'Daylight transfers', 'Shared contacts', 'Weather checks'],
  },
];

export const companyTimeline = [
  { year: '2022', title: 'Local travel support begins', text: 'Started helping guests discover Udaipur stays, routes, and reliable local experiences.' },
  { year: '2023', title: 'Creator services added', text: 'Expanded into photography, reels, hotel content, and social-first travel storytelling.' },
  { year: '2024', title: 'Rajasthan routes expanded', text: 'Added broader trip planning across Jaipur, Jodhpur, Jaisalmer, Mount Abu, and Kumbhalgarh.' },
  { year: '2026', title: 'Premium platform upgrade', text: 'Unified bookings, guides, reviews, gallery, and service inquiries under Free2Spread.' },
];

export const teamMembers = [
  { name: 'Aakash Jain', role: 'Travel Experience Lead', text: 'Builds guest journeys, service partnerships, and practical booking support.' },
  { name: 'Riya Sharma', role: 'Content and Shoots', text: 'Plans photography, reels, hotel stories, and creator-friendly shoot routes.' },
  { name: 'Devendra Singh', role: 'Local Operations', text: 'Coordinates routes, pickup timing, vendors, and on-ground guest comfort.' },
];

export const achievements = [
  'Local Udaipur travel and creator network',
  'Hotel, ticket, trip, photo, and video support in one flow',
  'Rajasthan-first content and itinerary knowledge',
  'Human follow-up through WhatsApp, phone, and email',
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
  {
    _id: 'review-4',
    name: 'Nisha Patel',
    location: 'Surat',
    rating: 5,
    service: 'Hotel Bookings',
    message: 'The stay shortlist saved us hours. Free2Spread understood our family budget and still found a beautiful heritage property.',
  },
  {
    _id: 'review-5',
    name: 'Rahul Mehta',
    location: 'Bengaluru',
    rating: 5,
    service: 'Ticket Bookings',
    message: 'Train and monument ticket guidance was quick, clear, and practical. It made our first Rajasthan trip feel easy.',
  },
];

export const galleryImages = [
  {
    title: 'Lake Pichola Evening',
    category: 'Destinations',
    image: 'https://images.pexels.com/photos/14894269/pexels-photo-14894269.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Heritage Stay Detail',
    category: 'Hotels',
    image: 'https://images.pexels.com/photos/15869828/pexels-photo-15869828.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Rajasthan Road Trip',
    category: 'Trips',
    image: 'https://images.pexels.com/photos/5205083/pexels-photo-5205083.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Creator Shoot',
    category: 'Photography',
    image: 'https://images.pexels.com/photos/3014019/pexels-photo-3014019.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Travel Bookings',
    category: 'Bookings',
    image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    title: 'Short Video Stories',
    category: 'Videos',
    image: 'https://images.pexels.com/photos/7773761/pexels-photo-7773761.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
];
