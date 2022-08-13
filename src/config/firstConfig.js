export const firstConfig = {
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
              id: 1,
              name: "name",
              component: "input",
              className: "name",
              type: "text",
              label: "Name",
              onChange: true,
            },
            {
              id: 2,
              name: "lastname",
              component: "input",
              className: "lastname",
              type: "text",
              label: "Lastname",
              onChange: true,
            },
          ],
        },
        {
          id: 2,
          component: "div",
          className: "buttonContainer",
          children: [
            {
              id: 3,
              component: "button",
              className: "leftButton",
              onClick: true,
              children: "Prev",
            },
            {
              id: 4,
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
