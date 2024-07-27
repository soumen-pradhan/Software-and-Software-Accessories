import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://software-and-software-accessories.netlify.app',
  trailingSlash: 'always',
  redirects: {
    '/': '/about/',
  },
  build: {
    redirects: false,
  },
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      langs: ['cpp', 'c', 'python', 'typescript'],
    },
  },
});
