import { createElement } from "react";
import SelectOption from "./SelectOption";

const keysToComponentMap = {
  select: SelectOption,
};

const stylesMap = (styles) => {
  let mappedStyles = {};
  styles.forEach((style) => {
    mappedStyles[style.name] = style.value;
  });
  return mappedStyles;
};

export const Two = (config) => {
  if (typeof keysToComponentMap[config.component] !== "undefined") {
    return (
      <div className="center height">
        {createElement(
          keysToComponentMap[config.component],
          {
            key: config.component,
            className: config.className ? config.className : null,
            style: config.styles ? stylesMap(config.styles) : null,
            value: config.value ? config.value : null,
          },
          config.children &&
            (typeof config.children === "string"
              ? config.children
              : config.children.map((c) => Two(c))),
        )}
      </div>
    );
  }
};
