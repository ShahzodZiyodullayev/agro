import { createElement } from "react";
import { Input } from "../components/Input";
import { Form } from "../components/Form";
import { firstConfig } from "./../config/firstConfig";
// import { nimadir } from "./nimadir";
// import { StepContext } from "../App";

function FirstStep(props) {
  const keysToComponentMap = {
    form: Form,
    input: Input,
  };

  function onClickButton(params) {
    console.log(params);
    // params.preventDefault()
    props.setStep((prev) => prev + 1);
  }

  const stylesMap = (styles) => {
    let mappedStyles = {};
    styles.forEach((style) => {
      mappedStyles[style.name] = style.value;
    });
    return mappedStyles;
  };

  let nimadir = (config) => {
    if (typeof keysToComponentMap[config.component] !== "undefined") {
      return createElement(
        keysToComponentMap[config.component],
        {
          key: config.id ? config.id : null,
          className: config.className ? config.className : null,
          style: config.styles ? stylesMap(config.styles) : null,
          type: config.type ? config.type : null,
          label: config.label ? config.label : null,
          onSubmit: config.onClick ? onClickButton : null,
        },
        config.children &&
          (typeof config.children === "string"
            ? config.children
            : config.children.map((c) => nimadir(c))),
      );
    }
  };
  return <>{nimadir(firstConfig)}</>;
}

export default FirstStep;
