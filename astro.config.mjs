// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from "@tailwindcss/vite"

import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: 'https://rushcms.com',
  experimental: {
    svgo: true,
  },

  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    // @ts-expect-error
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'always',
  },
})