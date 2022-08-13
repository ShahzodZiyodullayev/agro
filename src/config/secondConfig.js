export const secondConfig = {
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
  //     id: 2,
  //     component: "select",
  //     className: "city-select",
  //     onSelect: true,
  //   },
  //   {
  //     id: 3,
  //     component: "select",
  //     className: "district-select",
  //     onSelect: true,
  //   },
  //   {
  //     id: 5,
  //     component: "input",
  //     className: "submitBtn",
  //     type: "submit",
  //     onClick: true,
  //     children: "Next",
  //   },
  // ],
};
