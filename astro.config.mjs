import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://software-and-software-accessories.netlify.app',
  redirects: {
    '/': '/about',
  },
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      langs: ['cpp', 'c', 'python', 'typescript'],
    },
  },
});
