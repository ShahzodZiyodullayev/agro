import { createElement, useState, useEffect } from "react";
import { Input } from "../components/Input";
import { Form } from "../components/Form";
// import { thirdConfig } from "../config/thirdConfig";
import { SubmitButton } from "../components/Button";
import axios from "axios";

function ThirdStep(props) {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [thirdConfig, setThirdConfig] = useState({});

  const getFrontEnd = async () => {
    await axios
      .get("http://localhost:2000/api/step/third")
      .then((d) => setThirdConfig(d.data.data[0].value));
  };

  useEffect(() => {
    getFrontEnd();
  }, []);

  const keysToComponentMap = {
    form: Form,
    input: Input,
    button: SubmitButton,
    div: "div",
  };

  const stylesMap = (styles) => {
    let mappedStyles = {};
    styles.forEach((style) => {
      mappedStyles[style.name] = style.value;
    });
    return mappedStyles;
  };

  const submit = async () => {
    await axios.post("http://localhost:2000/api/users/add", {
      email,
      website,
    });
  };

  const onChangeButton = (e) => {
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "website") setWebsite(e.target.value);
  };

  const rightClick = (e) => {
    submit();
    props.setStep((prev) => (prev >= 3 ? prev : prev + 1));
  };

  const leftClick = (e) => {
    props.setStep((prev) => (prev <= 0 ? prev : prev - 1));
  };

  const third = (config) => {
    if (thirdConfig) {
      if (typeof keysToComponentMap[config.component] !== "undefined") {
        return createElement(
          keysToComponentMap[config.component],
          {
            type: config.type ? config.type : null,
            key: config.id ? config.id : null,
            className: config.className ? config.className : null,
            style: config.styles ? stylesMap(config.styles) : null,
            type: config.type ? config.type : null,
            label: config.label ? config.label : null,
            name: config.name ? config.name : null,
            disabled:
              config.className === "rightButton"
                ? email === "" || website === ""
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
              : config.children.map((c) => third(c))),
        );
      }
    } else {
      return createElement(
        "h2",
        { className: "serverNotWorking" },
        "Serverni ishga tushiring!",
      );
    }
  };
  return <>{third(thirdConfig)}</>;
}

export default ThirdStep;
