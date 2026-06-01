import { FaAward, FaBullseye, FaCheckCircle, FaEye, FaHandshake, FaUsers } from 'react-icons/fa';
import Seo from '../components/Seo';
import { achievements, brand, companyTimeline, teamMembers, trustStats, whyChoose } from '../data/siteContent';

const About = () => {
  return (
    <div className="bg-raj-sand">
      <Seo
        title="About Free2Spread | Rajasthan Travel Partner"
        description="Learn about Free2Spread's story, mission, vision, team, achievements, and premium Udaipur travel service approach."
        path="/about"
      />

      <section className="relative overflow-hidden bg-raj-deepblue text-raj-sand">
        <img
          src="https://images.pexels.com/photos/15801083/pexels-photo-15801083.jpeg?auto=compress&cs=tinysrgb&w=1800"
          alt="Free2Spread story"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-raj-deepblue via-royal-maroon/80 to-raj-deepblue/80" />
        <div className="section-shell relative grid gap-10 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <img src={brand.logo} alt={`${brand.name} logo`} className="mx-auto h-52 w-52 object-contain lg:mx-0" />
          <div>
            <p className="eyebrow">Our Story</p>
            <h1 className="mt-3 text-5xl font-cormorant md:text-6xl">{brand.name}</h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-raj-sand/85">
              Free2Spread began in Udaipur with a simple idea: make Rajasthan travel easier to plan, more reliable to book, and more beautiful to remember and share.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          <article className="premium-card p-7 lg:col-span-1">
            <FaBullseye className="mb-4 text-4xl text-royal-gold" />
            <h2 className="text-3xl font-cormorant text-royal-maroon">Mission</h2>
            <p className="mt-3 leading-relaxed text-gray-600">
              Help travelers, families, creators, and local brands access trusted booking support, practical guidance, and premium visual storytelling across Rajasthan.
            </p>
          </article>
          <article className="premium-card p-7 lg:col-span-1">
            <FaEye className="mb-4 text-4xl text-royal-gold" />
            <h2 className="text-3xl font-cormorant text-royal-maroon">Vision</h2>
            <p className="mt-3 leading-relaxed text-gray-600">
              Become a recognizable travel and service platform where heritage, hospitality, and creator culture meet in one seamless guest experience.
            </p>
          </article>
          <article className="premium-card p-7 lg:col-span-1">
            <FaHandshake className="mb-4 text-4xl text-royal-gold" />
            <h2 className="text-3xl font-cormorant text-royal-maroon">Promise</h2>
            <p className="mt-3 leading-relaxed text-gray-600">
              Clear communication, thoughtful planning, local knowledge, and honest service recommendations before every booking decision.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-shell">
          <div className="mb-10 text-center">
            <p className="eyebrow">Impact</p>
            <h2 className="mt-2 text-4xl font-cormorant text-royal-maroon">Travel Support With Real Momentum</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {trustStats.map((stat) => (
              <div key={stat.label} className="rounded-lg bg-raj-sand p-6 text-center shadow-lg">
                <p className="text-4xl font-bold text-royal-maroon">{stat.value}</p>
                <p className="mt-2 text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Journey Timeline</p>
            <h2 className="mt-2 text-4xl font-cormorant text-royal-maroon">How Free2Spread Grew</h2>
          </div>
          <div className="space-y-5">
            {companyTimeline.map((item) => (
              <article key={item.year} className="premium-card flex gap-5 p-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-royal-gold text-lg font-bold text-raj-deepblue">
                  {item.year}
                </div>
                <div>
                  <h3 className="text-2xl font-cormorant text-royal-maroon">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-shell">
          <div className="mb-10 text-center">
            <p className="eyebrow">Team</p>
            <h2 className="mt-2 text-4xl font-cormorant text-royal-maroon">People Behind the Experience</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {teamMembers.map((member) => (
              <article key={member.name} className="rounded-lg bg-raj-sand p-6 text-center shadow-lg">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-royal-gold/20">
                  <FaUsers className="text-2xl text-royal-maroon" />
                </div>
                <h3 className="text-2xl font-cormorant text-royal-maroon">{member.name}</h3>
                <p className="font-semibold text-royal-gold">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{member.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="premium-card p-7">
            <FaAward className="mb-4 text-4xl text-royal-gold" />
            <h2 className="text-3xl font-cormorant text-royal-maroon">Achievements</h2>
            <div className="mt-5 space-y-3">
              {achievements.map((item) => (
                <p key={item} className="flex items-start gap-3 text-gray-700">
                  <FaCheckCircle className="mt-1 shrink-0 text-royal-gold" /> {item}
                </p>
              ))}
            </div>
          </div>
          <div className="premium-card p-7">
            <h2 className="text-3xl font-cormorant text-royal-maroon">What Makes Us Different</h2>
            <div className="mt-5 grid gap-4">
              {whyChoose.slice(0, 3).map((item) => (
                <div key={item.title}>
                  <h3 className="font-cormorant text-xl text-raj-deepblue">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
