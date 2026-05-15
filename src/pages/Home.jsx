import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  FaArrowRight,
  FaCalendarCheck,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaQuoteLeft,
  FaStar,
  FaUsers,
} from 'react-icons/fa';
import api from '../api/api';
import { blogPosts, brand, coreServices, defaultReviews, socialLinks } from '../data/siteContent';

const Home = () => {
  const [reviews, setReviews] = useState(defaultReviews);

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

  const highlights = [
    { icon: FaMapMarkerAlt, title: 'Udaipur Based', desc: brand.location },
    { icon: FaCalendarCheck, title: 'Booking Support', desc: 'Hotels, tickets and trips' },
    { icon: FaUsers, title: 'Creator Network', desc: 'Photography and short videos' },
    { icon: FaStar, title: 'Heritage Focus', desc: 'Royal Rajasthani storytelling' },
  ];

  const premiumPoints = [
    'Curated stays, routes, shoots, tickets, and local experiences in one place',
    'Content planning for reels, short videos, hotel showcases, and travel stories',
    'Quick enquiry flow through chat, WhatsApp, contact form, and booking page',
    'Local-first guidance for Udaipur, Rajasthan culture, timing, and guest comfort',
  ];

  return (
    <div>
      <section className="relative min-h-[88vh] overflow-hidden bg-raj-deepblue">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/15801083/pexels-photo-15801083.jpeg?auto=compress&cs=tinysrgb&w=1800')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-raj-deepblue/90 via-royal-maroon/70 to-raj-deepblue/60" />
        </div>
        <div className="absolute inset-0 bg-mandala-pattern opacity-25" />

        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl items-center px-4 py-16">
          <div className="max-w-3xl text-raj-sand">
            <img src={brand.logo} alt={`${brand.name} logo`} className="mb-5 h-32 w-32 object-contain" />
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-royal-gold/70 px-4 py-2 text-sm text-royal-gold backdrop-blur-sm">
              <FaMapMarkerAlt /> {brand.location}
            </p>
            <h1 className="text-5xl font-cormorant leading-tight text-raj-sand md:text-7xl">
              {brand.name}
            </h1>
            <p className="mt-3 text-2xl font-cormorant text-royal-gold md:text-3xl">{brand.slogan}</p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-raj-sand/90">
              Discover royal Rajasthani experiences, book travel essentials, and create social-ready stories with a Udaipur-based team that connects heritage, hospitality, and creators.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <NavLink to="/booking" className="gold-button inline-flex items-center justify-center gap-2">
                Start Booking <FaArrowRight />
              </NavLink>
              <NavLink to="/services" className="maroon-button inline-flex items-center justify-center">
                Explore Services
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-raj-sand py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 md:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-royal-gold/15">
                <item.icon className="text-2xl text-royal-maroon" />
              </div>
              <h3 className="text-xl font-cormorant text-raj-deepblue">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-raj-sand to-amber-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-cormorant text-royal-maroon">Services Built for Sharing and Travel</h2>
            <div className="mx-auto mt-4 h-0.5 w-24 bg-royal-gold" />
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Book the essentials, shape the itinerary, and create premium social content from the same trusted place.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-5">
            {coreServices.map((service) => (
              <div key={service._id} className="rounded-lg bg-white p-5 shadow-lg transition-transform duration-300 hover:-translate-y-1">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-royal-gold/15">
                  <service.icon className="text-xl text-royal-maroon" />
                </div>
                <h3 className="text-2xl font-cormorant text-royal-maroon">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-royal-gold">A+ Content</p>
            <h2 className="mt-2 text-4xl font-cormorant text-royal-maroon">Premium Heritage, Booking and Creator Support</h2>
            <p className="mt-4 leading-relaxed text-gray-700">
              Free2Spread is shaped for travelers, hotels, creators, local businesses, and families who want Rajasthan experiences planned well and presented beautifully.
            </p>
            <div className="mt-6 space-y-3">
              {premiumPoints.map((point) => (
                <p key={point} className="flex items-start gap-3 text-gray-700">
                  <FaCheckCircle className="mt-1 shrink-0 text-royal-gold" />
                  {point}
                </p>
              ))}
            </div>
            <NavLink to="/contact" className="gold-button mt-8 inline-flex items-center gap-2">
              Connect With Us <FaArrowRight />
            </NavLink>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <img
              src="https://images.pexels.com/photos/15869828/pexels-photo-15869828.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Rajasthani palace detail"
              className="h-72 w-full rounded-lg object-cover shadow-xl sm:mt-10"
            />
            <img
              src="https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Travel booking"
              className="h-72 w-full rounded-lg object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-raj-sand py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-cormorant text-royal-maroon">Latest From the Blog</h2>
              <p className="mt-2 max-w-2xl text-gray-600">Travel tips, booking guidance, and creator ideas for Rajasthan.</p>
            </div>
            <NavLink to="/blog" className="inline-flex items-center gap-2 font-semibold text-raj-deepblue hover:text-royal-gold">
              View Blog <FaArrowRight />
            </NavLink>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {blogPosts.slice(0, 3).map((post) => (
              <article key={post.title} className="overflow-hidden rounded-lg bg-white shadow-lg">
                <img src={post.image} alt={post.title} className="h-48 w-full object-cover" />
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-widest text-royal-gold">{post.tag}</span>
                  <h3 className="mt-2 text-2xl font-cormorant text-royal-maroon">{post.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>
                  <NavLink to={`/blog/${post.slug}`} className="mt-4 inline-flex items-center gap-2 font-semibold text-raj-deepblue hover:text-royal-gold">
                    Read guide <FaArrowRight />
                  </NavLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-cormorant text-royal-maroon">Guest Reviews</h2>
              <p className="mt-2 max-w-2xl text-gray-600">Real feedback from travelers, creators, hotels, and families we support.</p>
            </div>
            <NavLink to="/reviews" className="gold-button inline-flex items-center justify-center gap-2">
              Add Review <FaArrowRight />
            </NavLink>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {reviews.slice(0, 3).map((review) => (
              <article key={review._id || review.name} className="rounded-lg bg-raj-sand p-6 shadow-lg">
                <FaQuoteLeft className="mb-4 text-2xl text-royal-gold" />
                <div className="mb-3 flex gap-1 text-royal-gold">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar key={index} className={index < Number(review.rating) ? 'text-royal-gold' : 'text-gray-300'} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-gray-700">{review.message}</p>
                <div className="mt-5 border-t border-royal-gold/20 pt-4">
                  <h3 className="font-cormorant text-xl text-royal-maroon">{review.name}</h3>
                  <p className="text-xs text-gray-500">{review.service} {review.location ? `- ${review.location}` : ''}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-raj-deepblue py-12 text-raj-sand">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-cormorant text-royal-gold">Share and Connect With Free2Spread</h2>
            <p className="mt-2 text-raj-sand/80">Follow our Rajasthan stories, reels, bookings, and creator updates.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.name}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-royal-gold/50 text-royal-gold hover:bg-royal-gold hover:text-raj-deepblue"
              >
                <link.icon />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
