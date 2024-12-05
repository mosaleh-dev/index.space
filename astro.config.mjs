import { defineConfig } from "astro/config";
import icon from "astro-icon";
import lqip from "vite-plugin-lqip";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE || "http://localhost:8080",
  vite: {
    plugins: [lqip()],
  },
  integrations: [
    icon({
      iconDir: "src/icons",
    }),
    sitemap(),
  ],
});
