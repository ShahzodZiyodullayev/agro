import { createElement, useEffect, useState } from "react";
import SelectOption from "../components/SelectOption";
import { Form } from "../components/Form";
import { secondConfig } from "../config/secondConfig";
import axios from "axios";
import { SubmitButton } from "../components/Button";

function SecondStep(props) {
  const [city, setCity] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [age, setAge] = useState("");
  const [age2, setAge2] = useState("");
  const [selectC, setSelectC] = useState("");
  const [selectD, setSelectD] = useState("");

  const submit = async () => {
    await axios.post("http://localhost:2000/api/users/add", {
      address: selectC + " " + selectD,
    });
  };

  const rightClick = (e) => {
    submit();
    props.setStep((prev) => (prev >= 3 ? prev : prev + 1));
  };

  const leftClick = (e) => {
    props.setStep((prev) => (prev <= 0 ? prev : prev - 1));
  };

  const cityList = async () => {
    await axios
      .get("http://localhost:2000/api/region/getall")
      .then((e) => setCity(e.data.data));
  };

  const districtList = async (val) => {
    await axios
      .get(`http://localhost:2000/api/region/getOne/${val}`)
      .then((e) => setDistricts(e.data.districts));
  };

  useEffect(() => {
    cityList();
  }, []);

  const selectCity = (event) => {
    setSelectC(event.target.textContent);
  };

  const selectDistrict = (event) => {
    setSelectD(event.target.textContent);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
    districtList(event.target.value);
  };

  const handleChange2 = (event) => {
    setAge2(event.target.value);
  };

  const keysToComponentMap = {
    select: SelectOption,
    form: Form,
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

  let second = (config) => {
    if (typeof keysToComponentMap[config.component] !== "undefined") {
      return (
        <div className="center height">
          {createElement(
            keysToComponentMap[config.component],
            {
              type: config.type ? config.type : null,
              key: config.id ? config.id : null,
              city: config.id ? city : null,
              districts: config.id ? districts : null,
              age: config.id ? age : null,
              age2: config.id ? age2 : null,
              handleChange: config.id ? handleChange : null,
              handleChange2: config.id ? handleChange2 : null,
              className: config.className ? config.className : null,
              style: config.styles ? stylesMap(config.styles) : null,
              value: config.value ? config.value : null,
              disabled:
                config.className === "rightButton"
                  ? selectC === "" || selectD === ""
                    ? true
                    : false
                  : null,
              onClick: config.onClick
                ? config.className === "rightButton"
                  ? rightClick
                  : leftClick
                : null,
              selectCity,
              selectDistrict,
            },
            config.children &&
              (typeof config.children === "string"
                ? config.children
                : config.children.map((c) => second(c))),
          )}
        </div>
      );
    }
  };
  return <>{second(secondConfig)}</>;
}

export default SecondStep;
