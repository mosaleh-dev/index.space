export const priceCardInfoFields = {
  name: "priceCardsInfo",
  label: "priceCards",
  type: "object",
  list: true,
  ui: {
    itemProps: (item) => {
      return { label: item.heading };
    },
  },
  fields: [
    {
      name: "heading",
      label: "name",
      type: "string",
    },
    {
      name: "pricePeriod",
      label: "period",
      type: "string",
    },
    {
      name: "priceAmount",
      label: "amount",
      type: "string",
    },
    {
      name: "benefits",
      label: "benefits",
      type: "string",
      list: true,
    },
    {
      name: "notice",
      label: "notice",
      type: "string",
      list: true,
    },
  ],
};
