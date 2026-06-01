import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaPlayCircle, FaPaperPlane, FaQuoteLeft, FaStar, FaUser } from 'react-icons/fa';
import api from '../api/api';
import Seo from '../components/Seo';
import { coreServices, defaultReviews, trustStats } from '../data/siteContent';

const Reviews = () => {
  const [reviews, setReviews] = useState(defaultReviews);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    service: coreServices[0].title,
    rating: '5',
    message: '',
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

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const { data } = await api.post('/reviews', {
        ...formData,
        rating: Number(formData.rating),
      });
      const newReview = data.review || { ...formData, _id: Date.now().toString() };
      setReviews([newReview, ...reviews]);
      setFormData({
        name: '',
        email: '',
        location: '',
        service: coreServices[0].title,
        rating: '5',
        message: '',
      });
      toast.success('Review added. Thank you for sharing your experience!');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Could not add review right now.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <Seo
        title="Customer Reviews | Free2Spread"
        description="Read Free2Spread customer reviews, verified-style testimonials, ratings, video review placeholders, and travel service stories."
        path="/reviews"
      />
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-royal-gold">Guest Voices</p>
        <h1 className="text-5xl font-cormorant text-royal-maroon">Free2Spread Reviews</h1>
        <div className="mx-auto mb-4 mt-4 h-0.5 w-32 bg-royal-gold" />
        <p className="mx-auto max-w-2xl text-gray-600">
          Read guest experiences and add your own review for booking support, trips, photography, or short video creation.
        </p>
      </div>

      <div className="mb-10 grid gap-4 md:grid-cols-4">
        {trustStats.map((stat) => (
          <div key={stat.label} className="rounded-lg bg-white p-5 text-center shadow-lg">
            <p className="text-3xl font-bold text-royal-maroon">{stat.value}</p>
            <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
        <section className="grid gap-6 md:grid-cols-2">
          {reviews.map((review) => (
            <article key={review._id || `${review.name}-${review.message}`} className="rounded-lg bg-white p-6 shadow-lg">
              <FaQuoteLeft className="mb-4 text-2xl text-royal-gold" />
              <div className="mb-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} className={index < Number(review.rating) ? 'text-royal-gold' : 'text-gray-300'} />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-gray-700">{review.message}</p>
              <div className="mt-5 border-t border-royal-gold/20 pt-4">
                <h2 className="font-cormorant text-xl text-royal-maroon">{review.name}</h2>
                <p className="text-xs text-gray-500">{review.service} {review.location ? `- ${review.location}` : ''}</p>
              </div>
            </article>
          ))}
        </section>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <form onSubmit={handleSubmit} className="rounded-lg bg-white p-6 shadow-xl">
            <h2 className="mb-5 text-3xl font-cormorant text-royal-maroon">Add Review</h2>
            <div className="space-y-4">
              <div>
                <label className="mb-2 flex items-center gap-2 font-semibold text-raj-deepblue">
                  <FaUser className="text-royal-gold" /> Name
                </label>
                <input name="name" value={formData.name} onChange={handleChange} required className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-royal-gold" placeholder="Your name" />
              </div>

              <div>
                <label className="mb-2 block font-semibold text-raj-deepblue">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-royal-gold" placeholder="you@example.com" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-semibold text-raj-deepblue">Location</label>
                  <input name="location" value={formData.location} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-royal-gold" placeholder="City" />
                </div>
                <div>
                  <label className="mb-2 block font-semibold text-raj-deepblue">Rating</label>
                  <select name="rating" value={formData.rating} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-royal-gold">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <option key={rating} value={rating}>{rating} stars</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block font-semibold text-raj-deepblue">Service</label>
                <select name="service" value={formData.service} onChange={handleChange} className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-royal-gold">
                  {coreServices.map((service) => (
                    <option key={service._id} value={service.title}>{service.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block font-semibold text-raj-deepblue">Review</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="5" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-royal-gold" placeholder="Share your experience..." />
              </div>

              <button type="submit" disabled={loading} className="gold-button flex w-full items-center justify-center gap-2 py-3 disabled:opacity-50">
                {loading ? 'Adding...' : (<>Submit Review <FaPaperPlane /></>)}
              </button>
            </div>
          </form>
        </aside>
      </div>

      <section className="mt-14 grid gap-6 md:grid-cols-3">
        {['Family Udaipur Trip', 'Hotel Reel Campaign', 'Couple Heritage Shoot'].map((story) => (
          <article key={story} className="rounded-lg bg-gradient-to-br from-royal-maroon to-raj-deepblue p-6 text-raj-sand shadow-xl">
            <FaPlayCircle className="mb-5 text-4xl text-royal-gold" />
            <p className="text-xs font-semibold uppercase tracking-widest text-royal-gold">Video Review</p>
            <h2 className="mt-2 text-2xl font-cormorant text-raj-sand">{story}</h2>
            <p className="mt-3 text-sm leading-relaxed text-raj-sand/80">
              A short customer story format ready for embedded video testimonials when production media is available.
            </p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Reviews;
