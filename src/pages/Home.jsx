import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  FaArrowRight,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaQuoteLeft,
  FaSearch,
  FaStar,
  FaUsers,
} from 'react-icons/fa';
import api from '../api/api';
import Seo from '../components/Seo';
import {
  blogPosts,
  brand,
  coreServices,
  defaultReviews,
  featuredDestinations,
  galleryImages,
  partnerLogos,
  travelPackages,
  trustStats,
  whyChoose,
} from '../data/siteContent';

const Home = () => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState(defaultReviews);
  const [quickSearch, setQuickSearch] = useState({
    destination: 'Udaipur',
    service: 'trip-bookings',
    date: '',
    guests: '2',
  });

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await api.get('/reviews');
        setReviews(Array.isArray(data) && data.length > 0 ? data : defaultReviews);
      } catch {
        setReviews(defaultReviews);
      }
    };
    fetchReviews();
  }, []);

  const handleQuickSearch = (event) => {
    event.preventDefault();
    const params = new URLSearchParams({
      service: quickSearch.service,
      destination: quickSearch.destination,
      guests: quickSearch.guests,
      date: quickSearch.date,
    });
    navigate(`/booking?${params.toString()}`);
  };

  return (
    <div className="bg-raj-sand">
      <Seo path="/" />

      <section className="relative min-h-[92vh] overflow-hidden bg-raj-deepblue">
        <img
          src="https://images.pexels.com/photos/15801083/pexels-photo-15801083.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="Udaipur palace and lake"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-travel-ink/95 via-royal-maroon/75 to-raj-deepblue/55" />
        <div className="absolute inset-0 bg-mandala-pattern opacity-20" />

        <div className="section-shell relative z-10 grid min-h-[92vh] items-center gap-10 py-16 lg:grid-cols-[1fr_420px]">
          <div className="text-raj-sand">
            <img src={brand.logo} alt={`${brand.name} logo`} className="mb-5 h-28 w-28 object-contain md:h-36 md:w-36" />
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-royal-gold/70 px-4 py-2 text-sm text-royal-gold backdrop-blur-sm">
              <FaMapMarkerAlt /> {brand.location}
            </p>
            <h1 className="max-w-4xl text-5xl font-cormorant leading-tight md:text-7xl">
              Premium Rajasthan Trips, Bookings and Travel Stories
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-raj-sand/90">
              Book hotels, tickets, custom trips, photography, and cinematic reels with a Udaipur-based travel partner that blends local knowledge with premium service.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <NavLink to="/booking" className="gold-button inline-flex items-center justify-center gap-2">
                Start Booking <FaArrowRight />
              </NavLink>
              <NavLink to="/travel-guide" className="inline-flex items-center justify-center rounded-full border border-raj-sand/50 px-6 py-2 font-semibold text-raj-sand backdrop-blur-sm transition hover:bg-white/15">
                Explore Travel Guide
              </NavLink>
            </div>

            <div className="mt-10 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
              {trustStats.map((stat) => (
                <div key={stat.label} className="glass-panel p-4">
                  <p className="text-2xl font-bold text-royal-gold">{stat.value}</p>
                  <p className="text-xs text-raj-sand/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleQuickSearch} className="glass-panel bg-white/95 p-6 text-raj-deepblue">
            <div className="mb-5">
              <p className="eyebrow">Quick Inquiry</p>
              <h2 className="mt-1 text-3xl font-cormorant text-royal-maroon">Find Your Travel Plan</h2>
            </div>
            <div className="space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold">Destination</span>
                <input
                  value={quickSearch.destination}
                  onChange={(event) => setQuickSearch({ ...quickSearch, destination: event.target.value })}
                  className="focus-ring w-full rounded-lg border border-gray-300 px-4 py-3"
                  placeholder="Udaipur, Jaipur, Jaisalmer..."
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold">Service</span>
                <select
                  value={quickSearch.service}
                  onChange={(event) => setQuickSearch({ ...quickSearch, service: event.target.value })}
                  className="focus-ring w-full rounded-lg border border-gray-300 px-4 py-3"
                >
                  {coreServices.map((service) => (
                    <option key={service._id} value={service._id}>{service.title}</option>
                  ))}
                </select>
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">Date</span>
                  <input
                    type="date"
                    value={quickSearch.date}
                    onChange={(event) => setQuickSearch({ ...quickSearch, date: event.target.value })}
                    className="focus-ring w-full rounded-lg border border-gray-300 px-4 py-3"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">Guests</span>
                  <input
                    type="number"
                    min="1"
                    value={quickSearch.guests}
                    onChange={(event) => setQuickSearch({ ...quickSearch, guests: event.target.value })}
                    className="focus-ring w-full rounded-lg border border-gray-300 px-4 py-3"
                  />
                </label>
              </div>
              <button type="submit" className="gold-button flex w-full items-center justify-center gap-2 py-3">
                Search Availability <FaSearch />
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="mb-10 text-center">
          <p className="eyebrow">Core Services</p>
          <h2 className="mt-2 text-4xl font-cormorant text-royal-maroon">Everything Your Trip Needs</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">A single premium flow for bookings, trips, photography, and social-ready content.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {coreServices.map((service) => (
            <article key={service._id} className="premium-card flex flex-col p-5">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-royal-gold/15">
                <service.icon className="text-xl text-royal-maroon" />
              </div>
              <h3 className="text-2xl font-cormorant text-royal-maroon">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{service.description}</p>
              <NavLink to={`/booking?service=${service._id}`} className="mt-5 inline-flex items-center gap-2 font-semibold text-raj-deepblue hover:text-royal-gold">
                Book now <FaArrowRight />
              </NavLink>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-shell">
          <div className="mb-10 text-center">
            <p className="eyebrow">Why Choose Free2Spread</p>
            <h2 className="mt-2 text-4xl font-cormorant text-royal-maroon">Local Guidance With Premium Follow-Through</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {whyChoose.map((item) => (
              <article key={item.title} className="rounded-lg bg-raj-sand p-6 shadow-lg">
                <item.icon className="mb-4 text-3xl text-royal-gold" />
                <h3 className="text-xl font-cormorant text-royal-maroon">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Featured Destinations</p>
            <h2 className="mt-2 text-4xl font-cormorant text-royal-maroon">Rajasthan Routes Worth Planning</h2>
          </div>
          <NavLink to="/travel-guide" className="inline-flex items-center gap-2 font-semibold text-raj-deepblue hover:text-royal-gold">
            View guide <FaArrowRight />
          </NavLink>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredDestinations.map((destination) => (
            <article key={destination.name} className="group overflow-hidden rounded-lg bg-white shadow-xl">
              <div className="h-64 overflow-hidden">
                <img src={destination.image} alt={destination.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-royal-gold">{destination.bestFor}</p>
                <h3 className="mt-1 text-2xl font-cormorant text-royal-maroon">{destination.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{destination.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-shell">
          <div className="mb-10 text-center">
            <p className="eyebrow">Popular Packages</p>
            <h2 className="mt-2 text-4xl font-cormorant text-royal-maroon">Ready-to-Customize Travel Plans</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {travelPackages.map((item) => (
              <article key={item.title} className="premium-card overflow-hidden">
                <img src={item.image} alt={item.title} loading="lazy" className="h-56 w-full object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-cormorant text-royal-maroon">{item.title}</h3>
                    <span className="rounded-full bg-royal-gold/15 px-3 py-1 text-xs font-semibold text-royal-maroon">{item.duration}</span>
                  </div>
                  <p className="mt-3 text-2xl font-bold text-raj-deepblue">INR {item.price.toLocaleString()}+</p>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {item.highlights.map((highlight) => (
                      <p key={highlight} className="flex items-center gap-2 text-sm text-gray-600">
                        <FaCheckCircle className="text-royal-gold" /> {highlight}
                      </p>
                    ))}
                  </div>
                  <NavLink to="/booking" className="maroon-button mt-6 inline-flex w-full justify-center">Customize Package</NavLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Customer Reviews</p>
            <h2 className="mt-2 text-4xl font-cormorant text-royal-maroon">Trusted by Travelers and Creators</h2>
            <p className="mt-4 text-gray-600">Verified-style testimonials, ratings, and customer stories build confidence before a booking inquiry.</p>
            <NavLink to="/reviews" className="gold-button mt-6 inline-flex items-center gap-2">
              Add Review <FaArrowRight />
            </NavLink>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {reviews.slice(0, 4).map((review) => (
              <article key={review._id || review.name} className="premium-card p-6">
                <FaQuoteLeft className="mb-4 text-2xl text-royal-gold" />
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar key={index} className={index < Number(review.rating) ? 'text-royal-gold' : 'text-gray-300'} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-gray-700">{review.message}</p>
                <h3 className="mt-4 font-cormorant text-xl text-royal-maroon">{review.name}</h3>
                <p className="text-xs text-gray-500">{review.service} {review.location ? `- ${review.location}` : ''}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-shell">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Gallery Preview</p>
              <h2 className="mt-2 text-4xl font-cormorant text-royal-maroon">Travel Albums and Creator Work</h2>
            </div>
            <NavLink to="/gallery" className="inline-flex items-center gap-2 font-semibold text-raj-deepblue hover:text-royal-gold">
              Open Gallery <FaArrowRight />
            </NavLink>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {galleryImages.slice(0, 3).map((item) => (
              <img key={item.title} src={item.image} alt={item.title} loading="lazy" className="h-72 w-full rounded-lg object-cover shadow-xl" />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Latest Blog</p>
            <h2 className="mt-2 text-4xl font-cormorant text-royal-maroon">Travel Ideas and Booking Advice</h2>
          </div>
          <div className="grid gap-5">
            {blogPosts.slice(0, 3).map((post) => (
              <NavLink key={post.slug} to={`/blog/${post.slug}`} className="premium-card flex gap-4 p-4">
                <img src={post.image} alt={post.title} loading="lazy" className="h-24 w-28 rounded-lg object-cover" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-royal-gold">{post.tag} - {post.readTime}</p>
                  <h3 className="mt-1 text-xl font-cormorant text-royal-maroon">{post.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{post.excerpt}</p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-raj-deepblue py-10 text-raj-sand">
        <div className="section-shell">
          <p className="mb-5 text-center text-sm font-semibold uppercase tracking-widest text-royal-gold">Trusted Network</p>
          <div className="grid gap-4 md:grid-cols-4">
            {partnerLogos.map((partner) => (
              <div key={partner} className="rounded-lg border border-royal-gold/25 px-5 py-4 text-center text-sm text-raj-sand/85">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-royal-maroon py-16 text-raj-sand">
        <div className="absolute inset-0 bg-mandala-pattern opacity-20" />
        <div className="section-shell relative flex flex-col items-center text-center">
          <FaUsers className="mb-5 text-4xl text-royal-gold" />
          <h2 className="max-w-3xl text-4xl font-cormorant text-royal-gold">Ready to Build a Better Rajasthan Trip?</h2>
          <p className="mt-3 max-w-2xl text-raj-sand/85">Tell us your destination, dates, budget, and travel style. We will help with the plan, booking, and content details.</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <NavLink to="/booking" className="gold-button">Start Booking</NavLink>
            <a href={brand.whatsapp} target="_blank" rel="noreferrer" className="rounded-full border border-raj-sand/50 px-6 py-2 font-semibold text-raj-sand hover:bg-white/10">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
