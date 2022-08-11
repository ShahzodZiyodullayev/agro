import React from "react";
import { Box, Stepper, Step, StepLabel } from "@mui/material";

function StepPer({ step }) {
  const steps = ["First step", "Second step", "Third step"];

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default StepPer;
