import { NavLink } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaMapMarkedAlt } from 'react-icons/fa';
import Seo from '../components/Seo';
import { blogPosts, guideTopics } from '../data/siteContent';

const TravelGuide = () => {
  return (
    <div className="bg-raj-sand">
      <Seo
        title="Rajasthan Travel Guide | Free2Spread"
        description="Destination guides, packing checklists, budget planning, safety tips, and travel advice for Rajasthan trips."
        path="/travel-guide"
      />

      <section className="relative overflow-hidden bg-raj-deepblue text-raj-sand">
        <img
          src="https://images.pexels.com/photos/15801083/pexels-photo-15801083.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="Rajasthan travel guide"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-raj-deepblue via-royal-maroon/75 to-raj-deepblue/80" />
        <div className="section-shell relative py-20">
          <p className="eyebrow">Free2Spread Travel Guide</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-cormorant leading-tight md:text-6xl">
            Plan Smarter Rajasthan Trips With Local Guidance
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-raj-sand/85">
            Destination guides, checklists, budget planning, safety tips, and booking advice for travelers, families, couples, and creators.
          </p>
          <NavLink to="/booking" className="gold-button mt-8 inline-flex items-center gap-2">
            Plan My Trip <FaArrowRight />
          </NavLink>
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="mb-10 text-center">
          <p className="eyebrow">Guide Library</p>
          <h2 className="mt-2 text-4xl font-cormorant text-royal-maroon">Everything You Need Before Booking</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guideTopics.map((topic) => (
            <article key={topic.title} className="premium-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-royal-gold/15">
                <FaMapMarkedAlt className="text-xl text-royal-maroon" />
              </div>
              <h3 className="text-2xl font-cormorant text-royal-maroon">{topic.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{topic.text}</p>
              <div className="mt-5 space-y-2">
                {topic.items.map((item) => (
                  <p key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <FaCheckCircle className="text-royal-gold" /> {item}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-shell">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Recommended Reading</p>
              <h2 className="mt-2 text-4xl font-cormorant text-royal-maroon">Featured Travel Articles</h2>
            </div>
            <NavLink to="/blog" className="inline-flex items-center gap-2 font-semibold text-raj-deepblue hover:text-royal-gold">
              Browse Blog <FaArrowRight />
            </NavLink>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {blogPosts.map((post) => (
              <NavLink key={post.slug} to={`/blog/${post.slug}`} className="premium-card overflow-hidden">
                <img src={post.image} alt={post.title} loading="lazy" className="h-40 w-full object-cover" />
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-royal-gold">{post.tag}</p>
                  <h3 className="mt-2 text-xl font-cormorant text-royal-maroon">{post.title}</h3>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelGuide;
