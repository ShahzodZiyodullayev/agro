import { createElement } from "react";
import { Input } from "../components/Input";
import { Form } from "../components/Form";

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

export const thirdStep = (config) => {
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
          : config.children.map((c) => thirdStep(c))),
    );
  }
};
