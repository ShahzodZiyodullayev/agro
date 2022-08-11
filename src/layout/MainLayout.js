import React from "react";

import ButtonContainer from "../components/ButtonContainer";
import StepPer from "../components/StepPer";

function MainLayout({ children, step, setStep }) {
  return (
    <div className="main-layout center">
      <StepPer step={step} />
      <div className="children">{children}</div>
      <ButtonContainer setStep={setStep} />
    </div>
  );
}

export default MainLayout;
