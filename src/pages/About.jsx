import { FaHeart, FaPaintBrush, FaMusic, FaFeather } from 'react-icons/fa';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="relative rounded-3xl overflow-hidden mb-16">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1600')" }}>
          <div className="absolute inset-0 bg-gradient-to-r from-raj-deepblue/80 to-royal-maroon/70"></div>
        </div>
        <div className="relative z-10 py-20 px-6 text-center text-raj-sand">
          <h1 className="text-5xl font-cormorant mb-4">Our Royal Legacy</h1>
          <div className="w-24 h-0.5 bg-royal-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg">
            Where the grandeur of Rajputana courts meets the delicate artistry of Persian miniatures
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-4xl font-cormorant text-royal-maroon mb-4">The Fusion of Two Great Civilizations</h2>
          <div className="w-16 h-0.5 bg-royal-gold mb-6"></div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Founded in 1985 by the late Maharaj Rana Singh, Rajwada Services was born from a vision to 
            preserve and celebrate the rich cultural tapestry of Rajasthan while drawing inspiration from 
            Persian artistic traditions that have influenced Indian heritage for centuries.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our signature style combines the vibrant colors, intricate mirror work, and majestic hospitality 
            of Rajasthan with the geometric precision, arabesque patterns, and poetic elegance of Persian art.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Today, we are proud to be Rajasthan's premier luxury event and service provider, having orchestrated 
            over 500 royal weddings, 1000+ cultural events, and countless intimate gatherings that celebrate 
            the timeless beauty of our shared heritage.
          </p>
        </div>
        <div className="relative">
          <img 
            src="https://images.pexels.com/photos/258447/pexels-photo-258447.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="Rajasthani Palace"
            className="rounded-2xl shadow-2xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-raj-sand p-4 rounded-xl shadow-lg border border-royal-gold">
            <p className="text-royal-maroon font-cormorant text-xl">40+ Years of Excellence</p>
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <div className="bg-gradient-to-r from-amber-50 to-raj-sand rounded-2xl p-8 mb-16">
        <h2 className="text-3xl font-cormorant text-center text-royal-maroon mb-8">Our Creative Philosophy</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-royal-gold/20 rounded-full flex items-center justify-center mb-3">
              <FaHeart className="text-royal-maroon text-2xl" />
            </div>
            <h4 className="font-semibold">Passion</h4>
            <p className="text-sm text-gray-600">Every event is crafted with devoted care</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-royal-gold/20 rounded-full flex items-center justify-center mb-3">
              <FaPaintBrush className="text-royal-maroon text-2xl" />
            </div>
            <h4 className="font-semibold">Artistry</h4>
            <p className="text-sm text-gray-600">Blending two rich artistic traditions</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-royal-gold/20 rounded-full flex items-center justify-center mb-3">
              <FaMusic className="text-royal-maroon text-2xl" />
            </div>
            <h4 className="font-semibold">Harmony</h4>
            <p className="text-sm text-gray-600">Seamless fusion of cultures</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-royal-gold/20 rounded-full flex items-center justify-center mb-3">
              <FaFeather className="text-royal-maroon text-2xl" />
            </div>
            <h4 className="font-semibold">Elegance</h4>
            <p className="text-sm text-gray-600">Timeless sophistication</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-cormorant text-royal-maroon">Our Royal Concierge</h2>
        <div className="w-24 h-0.5 bg-royal-gold mx-auto mt-4 mb-4"></div>
        <p className="text-gray-600">Meet the masters who bring your dreams to life</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center group">
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 ring-4 ring-royal-gold ring-offset-4">
            <img src="https://images.pexels.com/photos/139343/pexels-photo-139343.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Founder" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
          </div>
          <h3 className="text-xl font-cormorant text-royal-maroon">Maharaj Rana Singh</h3>
          <p className="text-royal-gold text-sm">Founder & Creative Director</p>
        </div>
        <div className="text-center group">
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 ring-4 ring-royal-gold ring-offset-4">
            <img src="https://images.pexels.com/photos/144133/pexels-photo-144133.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Designer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
          </div>
          <h3 className="text-xl font-cormorant text-royal-maroon">Priyanka Kumari</h3>
          <p className="text-royal-gold text-sm">Head of Design (Persian Arts)</p>
        </div>
        <div className="text-center group">
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4 ring-4 ring-royal-gold ring-offset-4">
            <img src="https://images.pexels.com/photos/885021/pexels-photo-885021.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Manager" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
          </div>
          <h3 className="text-xl font-cormorant text-royal-maroon">Vikramaditya Rajawat</h3>
          <p className="text-royal-gold text-sm">Royal Concierge Manager</p>
        </div>
      </div>
    </div>
  );
};

export default About;