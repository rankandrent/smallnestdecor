// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Pure static output — every route is a plain HTML file, deployable to
// Cloudflare Pages (or any static host) with no server runtime.
export default defineConfig({
  site: 'https://smallnestdecor.com',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
