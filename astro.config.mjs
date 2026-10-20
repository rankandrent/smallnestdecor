// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import rehypeFigure from './src/plugins/rehype-figure.mjs';

// Pure static output — every route is a plain HTML file, deployable to
// Cloudflare Pages (or any static host) with no server runtime.
export default defineConfig({
  site: 'https://smallnestdecor.com',
  output: 'static',
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [rehypeFigure],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
