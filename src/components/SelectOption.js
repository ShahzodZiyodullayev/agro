import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const SelectOption = ({
  className,
  key,
  city,
  districts,
  age,
  age2,
  handlechange,
  handlechange2,
  selectcity,
  selectdistrict,
}) => {
  return (
    <>
      {className === "city-select" && (
        <FormControl
          className={className}
          key={key}
          sx={{ width: "225px", m: "10px" }}
        >
          <InputLabel id="demo-simple-select-label">City</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            key={key}
            onChange={handlechange}
          >
            {city &&
              city.length > 0 &&
              city.map((reg, ind) => (
                <MenuItem key={reg._id} value={reg._id} onClick={selectcity}>
                  {reg.region}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      )}
      {className === "district-select" && (
        <FormControl
          className={className}
          key={key}
          sx={{ width: "225px", m: "10px" }}
        >
          <InputLabel id="demo-simple-select-label">District</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age2}
            label="District"
            key={key}
            onChange={handlechange2}
          >
            {districts && districts.length > 0 ? (
              districts.map((reg, ind) => (
                <MenuItem
                  key={reg._id}
                  value={reg._id}
                  onClick={selectdistrict}
                >
                  {reg.district}
                </MenuItem>
              ))
            ) : (
              <MenuItem value={null}>No Option</MenuItem>
            )}
          </Select>
        </FormControl>
      )}
    </>
  );
};

export default SelectOption;
