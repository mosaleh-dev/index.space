import { defineConfig } from "astro/config";
import icon from "astro-icon";
import lqip from "vite-plugin-lqip";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [lqip()],
  },
  integrations: [
    icon({
      iconDir: "src/icons",
    }),
  ],
});
