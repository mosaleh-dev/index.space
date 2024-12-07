export const incupSocialsFields = {
  name: "incupSocialAcounts",
  label: "incup socials",
  type: "object",
  list: true,
  ui: {
    itemProps: (item: any) => {
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
