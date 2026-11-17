/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        scratch: {
          motion: '#4C97FF',
          looks: '#9966FF',
          sound: '#CF63CF',
          events: '#FFBF00',
          control: '#FFAB19',
          sensing: '#5CB1D6',
          operators: '#59C059',
          variables: '#FF8C1A',
          myblocks: '#FF6680',
          bg: '#F9F9F9',
          dark: '#2E3547'
        }
      },
      fontFamily: {
        sans: ['"Comic Neue"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        display: ['"Fredoka"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'kid': '0 8px 0px 0px rgba(0,0,0,0.15)',
        'kid-pressed': '0 2px 0px 0px rgba(0,0,0,0.15)',
        'glow-yellow': '0 0 25px rgba(255, 191, 0, 0.4)',
        'glow-blue': '0 0 25px rgba(76, 151, 255, 0.4)'
      }
    },
  },
  plugins: [],
}
