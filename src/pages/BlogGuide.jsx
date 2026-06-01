import { NavLink, useParams } from 'react-router-dom';
import { FaArrowLeft, FaCalendarCheck, FaCheckCircle } from 'react-icons/fa';
import Seo from '../components/Seo';
import { blogPosts } from '../data/siteContent';

const BlogGuide = () => {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center">
        <Seo title="Guide Not Found | Free2Spread" description="The requested Free2Spread travel guide was not found." path="/blog" />
        <h1 className="text-5xl font-cormorant text-royal-maroon">Guide Not Found</h1>
        <p className="mt-4 text-gray-600">The guide you are looking for may have moved.</p>
        <NavLink to="/blog" className="gold-button mt-8 inline-flex items-center gap-2">
          <FaArrowLeft /> Back to Blog
        </NavLink>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <div className="bg-raj-sand">
      <Seo title={`${post.title} | Free2Spread`} description={post.excerpt} image={post.image} path={`/blog/${post.slug}`} />
      <section className="relative overflow-hidden bg-raj-deepblue text-raj-sand">
        <img src={post.image} alt={post.title} className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-raj-deepblue via-royal-maroon/80 to-raj-deepblue/80" />
        <div className="relative mx-auto max-w-5xl px-4 py-20">
          <NavLink to="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-royal-gold hover:text-amber-300">
            <FaArrowLeft /> Back to Blog
          </NavLink>
          <p className="text-sm font-semibold uppercase tracking-widest text-royal-gold">{post.tag} - {post.readTime}</p>
          <h1 className="mt-4 text-5xl font-cormorant leading-tight md:text-6xl">{post.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-raj-sand/90">{post.excerpt}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-[1fr_320px]">
        <article className="rounded-lg bg-white p-6 shadow-xl md:p-10">
          {post.sections.map((section) => (
            <section key={section.heading} className="mb-10 last:mb-0">
              <h2 className="text-3xl font-cormorant text-royal-maroon">{section.heading}</h2>
              <div className="mb-4 mt-3 h-0.5 w-16 bg-royal-gold" />
              <p className="leading-8 text-gray-700">{section.body}</p>
            </section>
          ))}
        </article>

        <aside className="space-y-6">
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h3 className="text-2xl font-cormorant text-royal-maroon">Guide Checklist</h3>
            <div className="mt-4 space-y-3">
              {post.tips.map((tip) => (
                <p key={tip} className="flex items-start gap-3 text-sm text-gray-700">
                  <FaCheckCircle className="mt-1 shrink-0 text-royal-gold" /> {tip}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-lg bg-gradient-to-br from-royal-maroon to-raj-deepblue p-6 text-raj-sand shadow-lg">
            <FaCalendarCheck className="mb-4 text-3xl text-royal-gold" />
            <h3 className="text-2xl font-cormorant text-royal-gold">Need Help Planning?</h3>
            <p className="mt-3 text-sm leading-relaxed text-raj-sand/85">
              Share your dates, destination, and content needs. Free2Spread can coordinate bookings, trips, shoots, and short videos.
            </p>
            <NavLink to="/booking" className="mt-5 inline-flex rounded-full bg-royal-gold px-5 py-2 font-semibold text-raj-deepblue hover:bg-amber-500">
              Book Support
            </NavLink>
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="mb-6 text-3xl font-cormorant text-royal-maroon">Related Guides</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {relatedPosts.map((item) => (
            <NavLink key={item.slug} to={`/blog/${item.slug}`} className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:-translate-y-1">
              <img src={item.image} alt={item.title} className="h-40 w-full object-cover" />
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-royal-gold">{item.tag}</p>
                <h3 className="mt-2 text-xl font-cormorant text-royal-maroon">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.excerpt}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogGuide;
