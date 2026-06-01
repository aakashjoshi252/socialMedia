import { brand } from '../data/siteContent';
import Seo from '../components/Seo';

const Privacy = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Seo title="Privacy Policy | Free2Spread" description="Free2Spread privacy policy for booking inquiries, contact forms, reviews, and travel service data." path="/privacy" />
      <h1 className="text-5xl font-cormorant text-royal-maroon">Privacy Policy</h1>
      <div className="mb-8 mt-4 h-0.5 w-24 bg-royal-gold" />
      <div className="space-y-6 rounded-lg bg-white p-8 leading-relaxed text-gray-700 shadow-xl">
        <p>{brand.name} collects only the details needed to respond to enquiries, booking requests, and reviews, such as name, email, phone, service interest, travel dates, and message content.</p>
        <p>We use this information to coordinate services, contact guests, improve support, and keep a useful record of enquiries. We do not sell personal information.</p>
        <p>Review submissions may be displayed on the website with your name, location, selected service, rating, and review text. Email addresses are used for moderation or follow-up and are not shown publicly.</p>
        <p>For privacy requests, corrections, or review removal, contact us at {brand.email}.</p>
      </div>
    </div>
  );
};

export default Privacy;
