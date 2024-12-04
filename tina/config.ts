import { defineConfig, type TinaField } from "tinacms";
import { globalCollection } from "./collections/global";
import { pricingCollection } from "./collections/pricing";

const branch = process.env.GITHUB_BRANCH || process.env.HEAD || "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "/src/assets/",
      publicFolder: "public",
    },
  },
  schema: {
    //@ts-ignore
    collections: [globalCollection, pricingCollection],
  },
});
