import { TextField } from "@mui/material";

export const Input = ({
  className,
  type,
  label,
  children,
  onClick,
  onChange,
  name,
}) => {
  return (
    <TextField
      name={name}
      type={type}
      label={label}
      className={className}
      required
      inputProps={{
        onClick,
        onChange,
        type,
      }}
    >
      {children}
    </TextField>
  );
};
