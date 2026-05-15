import { FaHandshake, FaMapMarkedAlt, FaPalette, FaShareAlt } from 'react-icons/fa';
import { brand } from '../data/siteContent';

const About = () => {
  const values = [
    { icon: FaMapMarkedAlt, title: 'Local Knowledge', text: 'Udaipur-first planning with Rajasthan routes, stays, timings, and guest comfort in mind.' },
    { icon: FaPalette, title: 'Creative Storytelling', text: 'Photography and short videos shaped for social platforms without losing heritage detail.' },
    { icon: FaHandshake, title: 'Booking Care', text: 'Human support for hotels, tickets, trip plans, and service coordination.' },
    { icon: FaShareAlt, title: 'Share and Connect', text: 'A community-minded brand built around visibility, connection, and useful local discovery.' },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <div className="relative mb-16 overflow-hidden rounded-lg">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/15801083/pexels-photo-15801083.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-raj-deepblue/85 to-royal-maroon/75" />
        </div>
        <div className="relative z-10 px-6 py-20 text-center text-raj-sand">
          <img src={brand.logo} alt={`${brand.name} logo`} className="mx-auto mb-5 h-32 w-32 object-contain" />
          <h1 className="text-5xl font-cormorant">{brand.name}</h1>
          <div className="mx-auto mb-6 mt-4 h-0.5 w-24 bg-royal-gold" />
          <p className="mx-auto max-w-2xl text-lg">{brand.slogan}</p>
          <p className="mt-2 text-royal-gold">{brand.location}</p>
        </div>
      </div>

      <div className="mb-16 grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="mb-4 text-4xl font-cormorant text-royal-maroon">Royal Rajasthani Heritage for the Social Age</h2>
          <div className="mb-6 h-0.5 w-16 bg-royal-gold" />
          <p className="mb-4 leading-relaxed text-gray-700">
            Free2Spread connects travelers, creators, local businesses, and heritage experiences across Rajasthan. From Udaipur, we help people book better, plan smoother, and share richer stories.
          </p>
          <p className="leading-relaxed text-gray-700">
            Our work blends practical booking support with visual content services, so a trip, hotel stay, event, or local experience can move from idea to itinerary to shareable memory.
          </p>
        </div>
        <img
          src="https://images.pexels.com/photos/14894269/pexels-photo-14894269.jpeg?auto=compress&cs=tinysrgb&w=900"
          alt="Udaipur heritage view"
          className="h-96 w-full rounded-lg object-cover shadow-2xl"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {values.map((value) => (
          <div key={value.title} className="rounded-lg bg-white p-6 text-center shadow-lg">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-royal-gold/15">
              <value.icon className="text-2xl text-royal-maroon" />
            </div>
            <h3 className="text-xl font-cormorant text-royal-maroon">{value.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{value.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
