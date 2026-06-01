import { brand } from '../data/siteContent';
import Seo from '../components/Seo';

const Terms = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Seo title="Terms and Conditions | Free2Spread" description="Free2Spread terms for travel bookings, service inquiries, pricing, confirmations, and guest responsibilities." path="/terms" />
      <h1 className="text-5xl font-cormorant text-royal-maroon">Terms of Service</h1>
      <div className="mb-8 mt-4 h-0.5 w-24 bg-royal-gold" />
      <div className="space-y-6 rounded-lg bg-white p-8 leading-relaxed text-gray-700 shadow-xl">
        <p>{brand.name} provides travel coordination, booking support, photography, short video creation, and local experience assistance from Udaipur, Rajasthan.</p>
        <p>Submitting a booking request does not confirm a service automatically. Our team will contact you to confirm availability, scope, pricing, schedules, and any third-party booking terms.</p>
        <p>Prices shown on the website are starting references and may change based on dates, availability, location, group size, shoot scope, editing requirements, and vendor policies.</p>
        <p>Guests are responsible for sharing accurate travel details and following the policies of hotels, ticket providers, venues, transport vendors, and monuments.</p>
        <p>For questions about a booking or collaboration, contact {brand.email} or call {brand.phone}.</p>
      </div>
    </div>
  );
};

export default Terms;
