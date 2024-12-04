export const pricingCollection = {
  name: "pricing",
  label: "pricing",
  path: "content/pricing",
  format: "json",
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false,
    },
  },

  fields: [
    {
      name: "october",
      label: "October Branch",
      type: "object",
      fields: [
        {
          name: "sharedSpacePackages",
          label: "Shared Space Packages",
          type: "object",
          fields: [
            {
              name: "title",
              label: "Title",
              type: "string",
            },
            {
              name: "rows",
              label: "Pricing Rows",
              type: "object",
              list: true,
              fields: [
                {
                  name: "hours",
                  label: "Hours",
                  type: "number",
                },
                {
                  name: "price",
                  label: "Price",
                  type: "string",
                },
                {
                  name: "notes",
                  label: "Notes",
                  type: "string",
                  list: true,
                },
              ],
            },
          ],
        },
        {
          name: "sharedSpaceSubscriptions",
          label: "Shared Space Subscriptions",
          type: "object",
          fields: [
            {
              name: "title",
              label: "Title",
              type: "string",
            },
            {
              name: "rows",
              label: "Subscription Rows",
              type: "object",
              list: true,
              fields: [
                {
                  name: "days",
                  label: "Days",
                  type: "number",
                },
                {
                  name: "validFor",
                  nameOverride: "valid for",
                  label: "Valid For",
                  type: "string",
                },
                {
                  name: "price",
                  label: "Price",
                  type: "string",
                },
              ],
            },
          ],
        },
        {
          name: "cabin",
          label: "Cabin",
          type: "object",
          fields: [
            {
              name: "title",
              label: "Title",
              type: "string",
            },
            {
              name: "rows",
              label: "Cabin Rows",
              type: "object",
              list: true,
              fields: [
                {
                  name: "hours",
                  label: "Hours",
                  type: "number",
                },
                {
                  name: "price",
                  label: "Price",
                  type: "string",
                },
                {
                  name: "notes",
                  label: "Notes",
                  type: "string",
                },
              ],
            },
          ],
        },
        {
          name: "meetingRooms",
          label: "Meeting Rooms",
          type: "object",
          fields: [
            {
              name: "title",
              label: "Title",
              type: "string",
            },
            {
              name: "rows",
              label: "Meeting Room Rows",
              type: "object",
              list: true,
              fields: [
                {
                  name: "capacity",
                  label: "Capacity",
                  type: "string",
                },
                {
                  name: "oneHour",
                  nameOverride: "1 Hour",
                  label: "1 Hour Price",
                  type: "string",
                },
                {
                  name: "tenHours",
                  nameOverride: "10 Hours",
                  label: "10 Hours Price",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "mansoura",
      label: "Mansoura Branch",
      type: "object",
      fields: [
        {
          name: "sharedSpacePackages",
          label: "Shared Space Packages",
          type: "object",
          fields: [
            {
              name: "title",
              label: "Title",
              type: "string",
            },
            {
              name: "rows",
              label: "Pricing Rows",
              type: "object",
              list: true,
              fields: [
                {
                  name: "hours",
                  label: "Hours",
                  type: "number",
                },
                {
                  name: "price",
                  label: "Price",
                  type: "string",
                },
                {
                  name: "notes",
                  label: "Notes",
                  type: "string",
                },
              ],
            },
          ],
        },
        {
          name: "sharedSpaceSubscriptions",
          label: "Shared Space Subscriptions",
          type: "object",
          fields: [
            {
              name: "title",
              label: "Title",
              type: "string",
            },
            {
              name: "rows",
              label: "Subscription Rows",
              type: "object",
              list: true,
              fields: [
                {
                  name: "days",
                  label: "Days",
                  type: "number",
                },
                {
                  name: "validFor",
                  nameOverride: "valid for",
                  label: "Valid For",
                  type: "string",
                },
                {
                  name: "price",
                  label: "Price",
                  type: "string",
                },
              ],
            },
          ],
        },
        {
          name: "meetingRooms",
          label: "Meeting Rooms",
          type: "object",
          fields: [
            {
              name: "title",
              label: "Title",
              type: "string",
            },
            {
              name: "rows",
              label: "Meeting Room Rows",
              type: "object",
              list: true,
              fields: [
                {
                  name: "capacity",
                  label: "Capacity",
                  type: "string",
                },
                {
                  name: "hours",
                  label: "Hours",
                  type: "string",
                },
                {
                  name: "price",
                  label: "Price",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
