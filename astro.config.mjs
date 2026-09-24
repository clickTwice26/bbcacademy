// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/config/site.ts';

export default defineConfig({
  // Public address for canonical links, the sitemap and social previews. A SITE_URL set at
  // build time (the Docker build arg) overrides the default in src/config/site.ts.
  site: process.env.SITE_URL || site.url,
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  // Astro 7 defaults to 'jsx' whitespace rules, which silently drop spaces
  // between inline elements written on separate lines. Keep HTML semantics.
  compressHTML: true,
  i18n: {
    locales: ['en', 'bn'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  image: {
    layout: 'constrained',
    responsiveStyles: true,
  },
  integrations: [
    sitemap({
      // Bangla pages stay out of the sitemap until a native speaker has reviewed them.
      filter: (page) => site.bnReviewed || !new URL(page).pathname.startsWith('/bn/'),
      ...(site.bnReviewed
        ? { i18n: { defaultLocale: 'en', locales: { en: 'en', bn: 'bn-BD' } } }
        : {}),
    }),
  ],
});
