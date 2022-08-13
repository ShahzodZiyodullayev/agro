export const thirdConfig = {
  component: "form",
  className: "name-and-lastname",
  children: [
    {
      component: "div",
      className: "formContainer",
      children: [
        {
          component: "div",
          className: "inputContainer",
          children: [
            {
              id: 1,
              name: "email",
              component: "input",
              className: "name",
              type: "text",
              label: "Email",
              onChange: true,
            },
            {
              id: 2,
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
  // children: [

  //   {
  //     id: 3,
  //     component: "input",
  //     className: "submitBtn",
  //     type: "submit",
  //     onClick: true,
  //     children: "Finish",
  //   },
  // ],
};
