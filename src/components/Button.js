import { Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const SubmitButton = ({ className, style, id, onClick, disabled }) => {
  return (
    <Button
      disabled={disabled}
      id={id}
      className={className}
      style={style}
      onClick={onClick}
    >
      {className === "leftButton" ? (
        <ArrowBackIosIcon />
      ) : (
        <ArrowForwardIosIcon />
      )}
    </Button>
  );
};
