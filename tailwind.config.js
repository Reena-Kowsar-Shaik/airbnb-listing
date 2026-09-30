/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        airbnb: {
          brand: '#FF385C',
          dark: '#E00B41',
          hover: '#D70466',
          text: '#222222',
          muted: '#717171',
          light: '#F7F7F7',
          border: '#DDDDDD',
          card: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: [
          'Airbnb Cereal VF',
          'Circular',
          '-apple-system',
          'BlinkMacSystemFont',
          'Roboto',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      boxShadow: {
        'airbnb': '0 6px 16px rgba(0,0,0,0.12)',
        'airbnb-hover': '0 6px 20px rgba(0,0,0,0.18)',
        'card': '0 0 0 1px rgb(0 0 0 / 4%), 0 6px 20px rgb(0 0 0 / 10%)',
        'subtle': '0 2px 4px rgba(0,0,0,0.08)',
        'modal': '0 8px 28px rgba(0,0,0,0.28)',
      },
      maxWidth: {
        'airbnb': '1120px',
        'airbnb-wide': '1280px',
      }
    },
  },
  plugins: [],
}
