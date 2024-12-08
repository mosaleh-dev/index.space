import { defineConfig } from "astro/config";
import icon from "astro-icon";
import lqip from "vite-plugin-lqip";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: "always",
  },
  image: {
    experimentalLayout: "responsive",
  },
  experimental: {
    responsiveImages: true,
  },
  site: process.env.SITE || "http://localhost:8080",
  vite: {
    plugins: [lqip()],
  },
  integrations: [
    icon({
      iconDir: "src/icons",
      include: {
        mdi: [
          "instagram",
          "twitter",
          "clock-outline",
          "instagram",
          "facebook",
          "whatsapp",
          "check-circle-outline",
        ],
        "material-symbols": [
          "phone-android",
          "mail-rounded",
          "chair-alt-outline-rounded",
          "visibility-lock-outline-rounded",
          "air-purifier-gen-outline-sharp",
          "menu-book-outline",
          "chair-outline",
          "prayer-times-outline",
          "coffee-maker-outline-rounded",
          "speed-outline-rounded",
        ],
      },
    }),
    sitemap(),
  ],
});
