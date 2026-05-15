import { NavLink } from 'react-router-dom';
import { FaCamera } from 'react-icons/fa';
import { galleryImages } from '../data/siteContent';

const Gallery = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-royal-gold">Visual Stories</p>
        <h1 className="text-5xl font-cormorant text-royal-maroon">Free2Spread Gallery</h1>
        <div className="mx-auto mb-4 mt-4 h-0.5 w-32 bg-royal-gold" />
        <p className="mx-auto max-w-2xl text-gray-600">
          A quick look at the travel, booking, and creator experiences Free2Spread helps shape across Rajasthan.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((item) => (
          <article key={item.title} className="group overflow-hidden rounded-lg bg-white shadow-lg">
            <div className="relative h-72 overflow-hidden">
              <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-raj-deepblue/90 to-transparent p-5 text-raj-sand">
                <h2 className="text-2xl font-cormorant">{item.title}</h2>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 rounded-lg bg-gradient-to-r from-royal-maroon to-raj-deepblue p-8 text-center text-raj-sand">
        <FaCamera className="mx-auto mb-4 text-4xl text-royal-gold" />
        <h2 className="text-3xl font-cormorant text-royal-gold">Create Your Rajasthan Story</h2>
        <p className="mx-auto mt-3 max-w-2xl text-raj-sand/85">Book photography, short videos, hotel showcases, or full trip support with a Udaipur-based team.</p>
        <NavLink to="/booking?service=photography" className="mt-6 inline-flex rounded-full bg-royal-gold px-6 py-3 font-semibold text-raj-deepblue hover:bg-amber-500">
          Book a Shoot
        </NavLink>
      </div>
    </div>
  );
};

export default Gallery;
