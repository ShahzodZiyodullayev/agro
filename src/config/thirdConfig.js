export const thirdConfig = {
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
              name: "email",
              component: "input",
              className: "name",
              type: "text",
              label: "Email",
              onChange: true,
            },
            {
              id: 3,
              name: "website",
              component: "input",
              className: "lastname",
              type: "text",
              label: "Website",
              onChange: true,
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
