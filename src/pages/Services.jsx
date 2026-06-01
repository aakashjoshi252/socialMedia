import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaClock, FaQuestionCircle, FaSearch, FaTag } from 'react-icons/fa';
import api from '../api/api';
import Seo from '../components/Seo';
import { coreServices, faqs, normalizeServices } from '../data/siteContent';

const Services = () => {
  const [services, setServices] = useState(coreServices);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await api.get('/services');
        setServices(normalizeServices(data));
      } catch {
        setServices(coreServices);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const categories = [
    { value: 'all', label: 'All Services' },
    { value: 'travel', label: 'Travel' },
    { value: 'creative', label: 'Creative' },
  ];

  const filteredServices = services.filter((service) => {
    const content = `${service.title} ${service.description} ${(service.features || []).join(' ')}`.toLowerCase();
    const matchesSearch = content.includes(search.toLowerCase());
    const matchesCategory = category === 'all' || service.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-raj-sand">
      <Seo
        title="Travel Services | Free2Spread"
        description="Explore Free2Spread services for hotels, tickets, photography, reels, custom trips, group tours, and Rajasthan travel support."
        path="/services"
      />

      <section className="relative overflow-hidden bg-raj-deepblue text-raj-sand">
        <img
          src="https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="Travel services"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-raj-deepblue via-royal-maroon/80 to-raj-deepblue/80" />
        <div className="section-shell relative py-20 text-center">
          <p className="eyebrow">Premium Services</p>
          <h1 className="mt-3 text-5xl font-cormorant md:text-6xl">Book Smarter Travel and Creator Support</h1>
          <p className="mx-auto mt-4 max-w-3xl text-raj-sand/85">
            From luxury hotels and tickets to photography, reels, honeymoon packages, group tours, and corporate travel support.
          </p>
        </div>
      </section>

      <section className="section-shell py-12">
        <div className="mb-10 flex flex-col gap-5 rounded-lg bg-white p-5 shadow-xl md:flex-row md:items-center">
          <div className="relative flex-1">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search hotels, tickets, packages, reels..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="focus-ring w-full rounded-lg border border-gray-300 py-3 pl-12 pr-4"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setCategory(cat.value)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  category === cat.value
                    ? 'bg-royal-gold text-raj-deepblue'
                    : 'bg-gray-100 text-gray-700 hover:bg-royal-gold/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex h-64 items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-royal-gold border-t-transparent" />
          </div>
        ) : (
          <div className="grid gap-8">
            {filteredServices.map((service) => (
              <article key={service._id} className="premium-card overflow-hidden lg:grid lg:grid-cols-[360px_1fr]">
                <div className="relative min-h-80">
                  <img src={service.imageUrl} alt={service.title} loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute left-4 top-4 rounded-full bg-royal-gold px-3 py-1 text-sm font-semibold text-raj-deepblue">
                    {service.category}
                  </div>
                </div>
                <div className="p-6 lg:p-8">
                  <div className="flex flex-col justify-between gap-5 md:flex-row">
                    <div>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-royal-gold/15">
                        <service.icon className="text-xl text-royal-maroon" />
                      </div>
                      <h2 className="text-4xl font-cormorant text-royal-maroon">{service.title}</h2>
                      <p className="mt-3 max-w-3xl leading-relaxed text-gray-600">{service.description}</p>
                    </div>
                    <div className="rounded-lg bg-raj-sand p-5 md:min-w-56">
                      <p className="flex items-center gap-2 text-sm text-gray-600"><FaClock /> {service.duration}</p>
                      <p className="mt-3 flex items-center gap-2 text-2xl font-bold text-royal-maroon">
                        <FaTag className="text-royal-gold" /> INR {service.price.toLocaleString()}+
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 grid gap-5 md:grid-cols-2">
                    <div>
                      <h3 className="font-cormorant text-2xl text-raj-deepblue">Service Options</h3>
                      <div className="mt-3 grid gap-2 sm:grid-cols-2">
                        {(service.features || []).map((feature) => (
                          <p key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                            <FaCheckCircle className="text-royal-gold" /> {feature}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-cormorant text-2xl text-raj-deepblue">Included Support</h3>
                      <div className="mt-3 grid gap-2 sm:grid-cols-2">
                        {(service.inclusions || []).map((feature) => (
                          <p key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                            <FaCheckCircle className="text-royal-gold" /> {feature}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link to={`/booking?service=${service._id}`} className="gold-button inline-flex items-center justify-center gap-2">
                      Book This Service <FaArrowRight />
                    </Link>
                    <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-royal-maroon px-6 py-2 font-semibold text-royal-maroon hover:bg-royal-maroon hover:text-raj-sand">
                      Ask a Question
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="bg-white py-16">
        <div className="section-shell">
          <div className="mb-10 text-center">
            <p className="eyebrow">Common Questions</p>
            <h2 className="mt-2 text-4xl font-cormorant text-royal-maroon">Service FAQs</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-lg bg-raj-sand p-6 shadow-lg">
                <h3 className="flex items-start gap-3 text-xl font-cormorant text-royal-maroon">
                  <FaQuestionCircle className="mt-1 shrink-0 text-royal-gold" /> {faq.question}
                </h3>
                <p className="mt-3 leading-relaxed text-gray-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
