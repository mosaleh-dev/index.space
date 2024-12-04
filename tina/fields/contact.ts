export const contactsField = {
  name: "contactInfo",
  label: "contact",
  type: "object",
  ui: {
    itemProps: (item) => {
      return { label: item.name };
    },
  },
  fields: [
    {
      name: "mansoura_wa",
      label: "mansoura whatsapp",
      type: "number",
    },
    {
      name: "mansoura_phone",
      label: "mansoura phone",
      type: "number",
    },
    {
      name: "mansoura_email",
      label: "mansoura email",
      type: "string",
    },
    {
      name: "october_wa",
      label: "october whatsapp",
      type: "number",
    },
    {
      name: "october_phone",
      label: "october phone",
      type: "number",
    },
    {
      name: "october_email",
      label: "october email",
      type: "string",
    },
  ],
};
