import { TextField } from "@mui/material";

export const Input = ({ className, type, label }) => {
  return (
    <TextField
      type={type}
      label={label}
      className={className}
      inputProps={{
        type,
      }}
    ></TextField>
  );
};
