/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal-maroon': '#800020',
        'royal-gold': '#D4AF37',
        'raj-deepblue': '#1A2B4C',
        'raj-sand': '#FFF8E7',
        'persian-teal': '#008080',
        'persian-rose': '#FE28A2',
      },
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'mandala-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M30 0 L33.5 15 L30 30 L26.5 15 Z\" fill=\"%23D4AF37\" opacity=\"0.08\"/%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"10\" fill=\"%23D4AF37\" opacity=\"0.05\"/%3E%3C/svg%3E')",
        'arch-pattern': "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(212,175,55,0.05) 20px, rgba(212,175,55,0.05) 40px)",
      },
    },
  },
  plugins: [],
}