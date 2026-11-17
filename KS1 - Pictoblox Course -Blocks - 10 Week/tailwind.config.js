/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        picto: {
          motion: '#4C97FF',
          looks: '#9966FF',
          sound: '#CF63CF',
          events: '#FFBF00',
          control: '#FFAB19',
          sensing: '#5CB1D6',
          operators: '#59C059',
          variables: '#FF8C1A',
          ai: '#8A2BE2',
          speech: '#00BFFF',
          tobi: '#F59E0B'
        }
      },
      fontFamily: {
        sans: ['"Nunito"', 'system-ui', 'sans-serif'],
        display: ['"Fredoka"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'kid-bold': '0 8px 0px 0px rgba(0,0,0,0.12)',
        'kid-card': '0 12px 24px -4px rgba(0,0,0,0.08), 0 4px 8px -2px rgba(0,0,0,0.04)',
        'glow-tobi': '0 0 25px rgba(245, 158, 11, 0.45)',
        'glow-star': '0 0 25px rgba(254, 240, 138, 0.6)'
      }
    },
  },
  plugins: [],
}
