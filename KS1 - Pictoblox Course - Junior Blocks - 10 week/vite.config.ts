import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures seamless GitHub Pages and static hosting deployment
  server: {
    port: 5175,
    host: true
  }
});
