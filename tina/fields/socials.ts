export const socialsFields = {
  name: "socials",
  label: "socials",
  type: "object",
  list: true,
  ui: {
    itemProps: (item) => {
      return { label: item.name };
    },
  },
  fields: [
    {
      name: "name",
      label: "name",
      type: "string",
    },
    {
      name: "url",
      label: "url",
      type: "string",
    },
    {
      name: "iconName",
      label: "icon code",
      type: "string",
    },
  ],
};
