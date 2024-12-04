export const benefitFields = {
  name: "benefits",
  label: "benefits",
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
      name: "discription",
      label: "discription",
      type: "string",
    },
    {
      name: "icon",
      label: "icon code",
      type: "string",
    },
  ],
};
