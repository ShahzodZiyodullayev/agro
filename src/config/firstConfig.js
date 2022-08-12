export const firstConfig = {
  component: "form",
  className: "name-and-lastname",
  children: [
    {
      id: 1,
      component: "input",
      className: "name",
      type: "text",
      label: "Name",
    },
    {
      id: 2,
      component: "input",
      className: "lastname",
      type: "text",
      label: "Lastname",
    },
    {
      id: 3,
      component: "input",
      className: "submitBtn",
      type: "submit",
      onClick: true,
      children: "Next",
    },
  ],
};
