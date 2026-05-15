import { FaArrowRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { blogPosts } from '../data/siteContent';

const Blog = () => {
  return (
    <div className="bg-raj-sand">
      <section className="relative overflow-hidden bg-raj-deepblue py-20 text-raj-sand">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-royal-gold">Free2Spread Journal</p>
          <h1 className="text-5xl font-cormorant text-raj-sand">Rajasthan Travel, Content and Booking Ideas</h1>
          <p className="mx-auto mt-4 max-w-2xl text-raj-sand/85">
            Practical stories for travelers, creators, hotels, and local brands who want Rajasthan experiences to look as good online as they feel in person.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-lg bg-white shadow-lg">
              <img src={post.image} alt={post.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <span className="rounded-full bg-royal-gold/15 px-3 py-1 text-xs font-semibold text-royal-maroon">
                  {post.tag}
                </span>
                <h2 className="mt-4 text-2xl font-cormorant text-royal-maroon">{post.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>
                <NavLink to={`/blog/${post.slug}`} className="mt-5 inline-flex items-center gap-2 font-semibold text-raj-deepblue hover:text-royal-gold">
                  Read guide <FaArrowRight />
                </NavLink>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
