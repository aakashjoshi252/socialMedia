import { useEffect } from 'react';
import { brand } from '../data/siteContent';

const setMeta = (selector, attribute, value) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    const match = selector.match(/\[(name|property)="([^"]+)"\]/);
    if (match) {
      element.setAttribute(match[1], match[2]);
    }
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
};

const Seo = ({
  title = `${brand.name} | Premium Travel, Bookings and Creator Services`,
  description = 'Book hotels, tickets, custom trips, photography, reels, and travel support across Rajasthan with Free2Spread.',
  image = brand.logo,
  path = '/',
}) => {
  useEffect(() => {
    const url = `https://free2spread.netlify.app${path}`;
    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[name="theme-color"]', 'content', '#1A2B4C');
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:image"]', 'content', image);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:type"]', 'content', 'website');
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
  }, [description, image, path, title]);

  return null;
};

export default Seo;
