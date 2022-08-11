import { Button as Btn } from "@mui/material";

export const Button = ({ className, style, id, children }) => {
  return (
    <Btn variant="contained" id={id} className={className} style={style}>
      {children}
    </Btn>
  );
};
