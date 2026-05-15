import { useMemo, useState } from 'react';
import { FaComments, FaPaperPlane, FaTimes } from 'react-icons/fa';
import { brand, coreServices } from '../data/siteContent';

const quickReplies = [
  'Hotel booking',
  'Trip plan',
  'Photography',
  'Short videos',
  'Ticket booking',
];

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: `Namaste. I am the ${brand.name} assistant. Ask me about bookings, trips, photography, videos, or Udaipur plans.`,
    },
  ]);
  const [input, setInput] = useState('');

  const serviceNames = useMemo(() => coreServices.map((service) => service.title).join(', '), []);

  const getBotReply = (text) => {
    const message = text.toLowerCase();

    if (message.includes('hotel')) {
      return 'For hotel bookings, share your dates, guest count, budget, and preferred area. We can shortlist lake-view, palace-style, boutique, and family stays.';
    }

    if (message.includes('ticket')) {
      return 'For tickets, tell us whether you need train, flight, monument, boating, or cultural show bookings. We will help with availability and timing.';
    }

    if (message.includes('photo') || message.includes('shoot')) {
      return 'For photography, share the date, location style, number of people, and whether you want portraits, couple photos, hotel content, or event coverage.';
    }

    if (message.includes('video') || message.includes('reel') || message.includes('short')) {
      return 'For short videos, we can plan reels, travel shorts, food stories, walkthroughs, and social media edits with music and captions.';
    }

    if (message.includes('trip') || message.includes('tour')) {
      return 'For trip bookings, share your travel dates, pickup city, number of travelers, and must-see places. We can build a custom Rajasthan itinerary.';
    }

    if (message.includes('location') || message.includes('address')) {
      return `We are based in ${brand.location}.`;
    }

    return `I can help with ${serviceNames}. Share your preferred date and requirement, and our team will guide you.`;
  };

  const sendMessage = (text = input) => {
    const cleanText = text.trim();
    if (!cleanText) return;

    setMessages((current) => [
      ...current,
      { from: 'user', text: cleanText },
      { from: 'bot', text: getBotReply(cleanText) },
    ]);
    setInput('');
    setOpen(true);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-4 w-[min(22rem,calc(100vw-2.5rem))] overflow-hidden rounded-lg border border-royal-gold/40 bg-raj-sand shadow-2xl">
          <div className="flex items-center justify-between bg-raj-deepblue px-4 py-3 text-raj-sand">
            <div>
              <p className="font-semibold text-royal-gold">{brand.name} Chat</p>
              <p className="text-xs text-raj-sand/80">Bookings and travel support</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-raj-sand hover:bg-white/10"
              aria-label="Close chat"
            >
              <FaTimes />
            </button>
          </div>

          <div className="max-h-80 space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={`${message.from}-${index}`}
                className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${
                  message.from === 'bot'
                    ? 'bg-white text-raj-deepblue shadow'
                    : 'ml-auto bg-royal-maroon text-raj-sand'
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 border-t border-royal-gold/20 px-4 py-3">
            {quickReplies.map((reply) => (
              <button
                key={reply}
                type="button"
                onClick={() => sendMessage(reply)}
                className="rounded-full border border-royal-gold/50 px-3 py-1 text-xs text-royal-maroon hover:bg-royal-gold/15"
              >
                {reply}
              </button>
            ))}
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage();
            }}
            className="flex gap-2 border-t border-royal-gold/20 p-4"
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type your question"
              className="min-w-0 flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-royal-gold"
            />
            <button
              type="submit"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-royal-gold text-raj-deepblue hover:bg-amber-500"
              aria-label="Send chat message"
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-royal-maroon text-raj-sand shadow-xl ring-2 ring-royal-gold/70 hover:bg-red-900"
        aria-label="Open chat"
      >
        <FaComments className="text-2xl" />
      </button>
    </div>
  );
};

export default ChatBot;
