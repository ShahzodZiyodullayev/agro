import { createElement } from "react";
import { Input } from "./Input";
import { Form } from "./Form";

const keysToComponentMap = {
  form: Form,
  input: Input,
};

const stylesMap = (styles) => {
  let mappedStyles = {};
  styles.forEach((style) => {
    mappedStyles[style.name] = style.value;
  });
  return mappedStyles;
};

export const renderComponent = (config) => {
  let name = document.querySelector(".flex-shrink-0");

  console.dir(name);

  if (typeof keysToComponentMap[config.component] !== "undefined") {
    return createElement(
      keysToComponentMap[config.component],
      {
        key: config.id,
        className: config.className ? config.className : null,
        style: config.styles ? stylesMap(config.styles) : null,
        type: config.type ? config.type : null,
        label: config.label ? config.label : null,
      },
      config.children &&
        (typeof config.children === "string"
          ? config.children
          : config.children.map((c) => renderComponent(c))),
    );
  }
};
