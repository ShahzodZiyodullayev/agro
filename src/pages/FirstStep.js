import { createElement, useState } from "react";
import { Input } from "../components/Input";
import { Form } from "../components/Form";
import { SubmitButton } from "../components/Button";
import { firstConfig } from "./../config/firstConfig";
import axios from "axios";

function FirstStep(props) {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");

  console.log(name, lastname);

  const keysToComponentMap = {
    form: Form,
    input: Input,
    button: SubmitButton,
    div: "div",
  };

  const submit = async () => {
    await axios.post("http://localhost:2000/api/users/add", {
      name,
      lastname,
    });
  };

  const rightClick = (e) => {
    submit(name, lastname);
    props.setStep((prev) => (prev >= 3 ? prev : prev + 1));
  };

  const leftClick = (e) => {
    props.setStep((prev) => (prev <= 0 ? prev : prev - 1));
  };

  const onChangeButton = (e) => {
    if (e.target.name === "name") setName(e.target.value);
    if (e.target.name === "lastname") setLastname(e.target.value);
  };

  const stylesMap = (styles) => {
    let mappedStyles = {};
    styles.forEach((style) => {
      mappedStyles[style.name] = style.value;
    });
    return mappedStyles;
  };

  let first = (config) => {
    if (typeof keysToComponentMap[config.component] !== "undefined") {
      return createElement(
        keysToComponentMap[config.component],
        {
          key: config.id ? config.id : null,
          className: config.className ? config.className : null,
          style: config.styles ? stylesMap(config.styles) : null,
          type: config.type ? config.type : null,
          label: config.label ? config.label : null,
          name: config.name ? config.name : null,
          disabled:
            config.className === "rightButton"
              ? name === "" || lastname === ""
                ? true
                : false
              : null,
          onClick: config.onClick
            ? config.className === "rightButton"
              ? rightClick
              : leftClick
            : null,
          onChange: config.onChange ? onChangeButton : null,
        },
        config.children &&
          (typeof config.children === "string"
            ? config.children
            : config.children.map((c) => first(c))),
      );
    }
  };
  return <>{first(firstConfig)}</>;
}

export default FirstStep;
