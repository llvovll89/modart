import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactRefresh from '@vitejs/plugin-react-refresh';
import pages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactRefresh(), pages({ pagesDir: 'src/pages' })],
  base: '/modart/',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 4000,
  },
});
