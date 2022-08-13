import React from "react";
import { Grid, Typography } from "@mui/material";

import ButtonContainer from "../components/ButtonContainer";
import StepPer from "../components/StepPer";

function MainLayout({ children, step }) {
  return (
    <div className="main-layout center">
      <StepPer step={step} />
      <Grid>
        <Typography variant="h3" m={10} color="#989888">
          Register
        </Typography>
      </Grid>
      <div className="children">{children}</div>
      {/* <ButtonContainer setStep={setStep} /> */}
    </div>
  );
}

export default MainLayout;
