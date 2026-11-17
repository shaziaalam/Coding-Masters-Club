/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jr: {
          trigger: '#FFBF00', // Yellow Trigger / Start blocks
          motion: '#3388FF',  // Blue Motion blocks
          looks: '#9933FF',   // Purple Looks & Costume blocks
          sound: '#33CC33',   // Green Sound blocks
          control: '#FF7700', // Orange Control & Wait blocks
          end: '#EE2222',     // Red End & Forever blocks
          tobi: '#F59E0B'
        }
      },
      fontFamily: {
        sans: ['"Nunito"', 'system-ui', 'sans-serif'],
        display: ['"Fredoka"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'block': '0 4px 0px 0px rgba(0,0,0,0.18)',
        'block-pressed': '0 1px 0px 0px rgba(0,0,0,0.18)',
        'kid-card': '0 12px 24px -4px rgba(0,0,0,0.08), 0 4px 8px -2px rgba(0,0,0,0.04)',
        'glow-tobi': '0 0 25px rgba(245, 158, 11, 0.45)',
      }
    },
  },
  plugins: [],
}
