// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://xiutian.github.io',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  integrations: [sitemap()],
  // Keep the old al-folio /cv/ URL working.
  redirects: {
    '/cv': '/assets/pdf/xiutian_cv.pdf',
  },
});
