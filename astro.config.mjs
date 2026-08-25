// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { copyFile } from "node:fs/promises";

export default defineConfig({
  site: "https://thesater.com",
  trailingSlash: "ignore",

  // English is the destination, so it sits at the root with no prefix.
  // Arabic is the origin edition and lives under /ar/.
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ar"],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    legacyLegalUrls(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: { en: "en", ar: "ar" },
      },
      // Legal documents stay out of search results; the product pages do not.
      filter: (page) => !/(privacy|terms)(?:\.html)?\/?$/.test(page),
    }),
  ],

  build: {
    format: "directory",
  },

});

/**
 * The Play Store listings link to /tam/privacy.html and friends. The canonical
 * pages now live at /tam/privacy/, so after the build each one is also copied
 * to the exact legacy filename. Both serve the same document, and the page's
 * own canonical tag points at the clean URL.
 */
function legacyLegalUrls() {
  const docs = [
    ["tam", "privacy"], ["tam", "terms"],
    ["khamen", "privacy"], ["khamen", "terms"],
    ["zill", "privacy"],
    ["studio-chairman", "privacy"], ["studio-chairman", "terms"],
  ];
  return {
    name: "sater:legacy-legal-urls",
    hooks: {
      "astro:build:done": async ({ dir, logger }) => {
        for (const [app, kind] of docs) {
          const from = new URL(`${app}/${kind}/index.html`, dir);
          const to = new URL(`${app}/${kind}.html`, dir);
          await copyFile(from, to);
        }
        logger.info(`kept ${docs.length} legacy .html paths alive`);
      },
    },
  };
}
