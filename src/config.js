export const config = {
  component: "li",
  id: "cardWrapper",
  className: "col-span-1",
  children: [
    {
      component: "div",
      id: "initialWrapper",
      className: "flex-shrink-0",
      styles: [
        {
          name: "backgroundColor",
          value: "#6366F1",
        },
      ],
      children: "Shahzod",
    },
    {
      component: "div",
      id: "infoWrapper",
      className: "flex-1",
      children: [
        {
          component: "div",
          id: "info",
          className: "flex-1",
          children: [
            {
              component: "div",
              id: "content",
              className: "flex-1",
              children: [
                { component: "p", id: "topic", children: "GrapgQL" },
                { component: "p", id: "readTime", children: "10 min read" },
              ],
            },
            {
              component: "div",
              id: "editWrapper",
              className: "flex-shrink-0",
              children: [
                {
                  component: "button",
                  id: "editButton",
                  className: "w-8",
                  children: [
                    {
                      component: "verticalDots",
                      id: "verticalDots",
                      className: "w-5",
                      ariaHidden: "true",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
