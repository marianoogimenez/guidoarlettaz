import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.drdelgado.com.ar',
  integrations: [
    tailwind(),
    sitemap(),
  ],
});
