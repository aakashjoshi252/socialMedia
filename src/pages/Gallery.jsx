import { useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaCamera, FaFilm, FaImages } from 'react-icons/fa';
import Seo from '../components/Seo';
import { galleryImages } from '../data/siteContent';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...new Set(galleryImages.map((item) => item.category))];

  const visibleImages = useMemo(() => {
    if (activeCategory === 'All') return galleryImages;
    return galleryImages.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-raj-sand">
      <Seo
        title="Travel Gallery | Free2Spread"
        description="Explore Free2Spread travel albums, photography portfolio, video showcase, and Rajasthan service visuals."
        path="/gallery"
      />

      <section className="relative overflow-hidden bg-raj-deepblue text-raj-sand">
        <img
          src="https://images.pexels.com/photos/3014019/pexels-photo-3014019.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="Travel gallery"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-raj-deepblue via-royal-maroon/80 to-raj-deepblue/80" />
        <div className="section-shell relative py-20 text-center">
          <p className="eyebrow">Visual Stories</p>
          <h1 className="mt-3 text-5xl font-cormorant md:text-6xl">Travel Albums, Shoots and Video Moments</h1>
          <p className="mx-auto mt-4 max-w-3xl text-raj-sand/85">
            Browse destination albums, hotel details, photography samples, booking moments, and short-video inspiration.
          </p>
        </div>
      </section>

      <section className="section-shell py-12">
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeCategory === category ? 'bg-royal-gold text-raj-deepblue' : 'bg-white text-royal-maroon shadow hover:bg-royal-gold/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {visibleImages.map((item, index) => (
            <article key={item.title} className="mb-6 break-inside-avoid overflow-hidden rounded-lg bg-white shadow-xl">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className={`${index % 2 === 0 ? 'h-80' : 'h-64'} w-full object-cover`}
              />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-royal-gold">{item.category}</p>
                <h2 className="mt-1 text-2xl font-cormorant text-royal-maroon">{item.title}</h2>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-shell grid gap-6 md:grid-cols-3">
          {[
            { icon: FaImages, title: 'Travel Albums', text: 'Destination, route, stay, and experience galleries for trip inspiration.' },
            { icon: FaCamera, title: 'Photography Portfolio', text: 'Couple, family, hotel, and destination photography support.' },
            { icon: FaFilm, title: 'Video Showcase', text: 'Reels, travel vlogs, social media content, and cinematic edits.' },
          ].map((item) => (
            <article key={item.title} className="rounded-lg bg-raj-sand p-6 text-center shadow-lg">
              <item.icon className="mx-auto mb-4 text-4xl text-royal-gold" />
              <h2 className="text-2xl font-cormorant text-royal-maroon">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell pb-16">
        <div className="rounded-lg bg-gradient-to-r from-royal-maroon to-raj-deepblue p-8 text-center text-raj-sand">
          <FaCamera className="mx-auto mb-4 text-4xl text-royal-gold" />
          <h2 className="text-3xl font-cormorant text-royal-gold">Create Your Rajasthan Story</h2>
          <p className="mx-auto mt-3 max-w-2xl text-raj-sand/85">Book photography, short videos, hotel showcases, or full trip support with a Udaipur-based team.</p>
          <NavLink to="/booking?service=photography" className="mt-6 inline-flex rounded-full bg-royal-gold px-6 py-3 font-semibold text-raj-deepblue hover:bg-amber-500">
            Book a Shoot
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
