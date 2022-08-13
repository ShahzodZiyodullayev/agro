export const secondConfig = {
  id: 7,
  component: "form",
  className: "name-and-lastname",
  children: [
    {
      component: "div",
      className: "formContainer",
      children: [
        {
          id: 1,
          component: "div",
          className: "inputContainer",
          children: [
            {
              id: 2,
              component: "select",
              className: "city-select",
              onSelect: true,
            },
            {
              id: 3,
              component: "select",
              className: "district-select",
              onSelect: true,
            },
          ],
        },
        {
          id: 4,
          component: "div",
          className: "buttonContainer",
          children: [
            {
              id: 5,
              component: "button",
              className: "leftButton",
              onClick: true,
              children: "Prev",
            },
            {
              id: 6,
              component: "button",
              className: "rightButton",
              onClick: true,
              children: "Next",
            },
          ],
        },
      ],
    },
  ],
};
