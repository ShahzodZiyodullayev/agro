import React from "react";
import { Button } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

function ButtonContainer({ setStep }) {
  return (
    <Grid2 container columnSpacing={2}>
      <Grid2>
        <Button
          variant="contained"
          onClick={() => setStep((prev) => (prev > 0 ? prev - 1 : 0))}
        >
          Prev
        </Button>
      </Grid2>
      <Grid2>
        <Button
          variant="contained"
          onClick={() => setStep((prev) => (prev < 3 ? prev + 1 : 3))}
        >
          Next
        </Button>
      </Grid2>
    </Grid2>
  );
}

export default ButtonContainer;
