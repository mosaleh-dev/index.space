import { benefitFields } from "../fields/benefits";
import { contactsField } from "../fields/contact";
import { incupSocialsFields } from "../fields/incupSocials";
import { priceCardInfoFields } from "../fields/priceCardsInfo";
import { socialsFields } from "../fields/socials";

export const globalCollection = {
  name: "global",
  label: "global",
  path: "content/global",
  format: "json",
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false,
    },
  },

  fields: [
    contactsField,
    socialsFields,
    incupSocialsFields,
    benefitFields,
    priceCardInfoFields,
  ],
};
