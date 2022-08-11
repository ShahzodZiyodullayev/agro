import { MenuItem as Menu } from "@mui/material";

export const MenuItem = ({ children, className, value }) => {
  return (
    <Menu className={className} value={value}>
      {children}
    </Menu>
  );
};
