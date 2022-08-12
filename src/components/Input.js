import { TextField } from "@mui/material";

export const Input = ({ className, type, label, children, onClick }) => {
  return (
    <TextField
      type={type}
      label={label}
      className={className}
      required
      inputProps={{
        onSubmit: onClick,
        type,
      }}
    >
      {children}
    </TextField>
  );
};
