import React, { useState } from "react";
import MainLayout from "./layout/MainLayout";
import FirstStep from "./pages/FirstStep";
import SecondStep from "./pages/SecondStep";
import ThirdStep from "./pages/ThirdStep";
import Finally from "./pages/Finally";
import { secondConfig } from "./config/secondConfig";
import { thirdConfig } from "./config/thirdConfig";
import "./App.css";

function App() {
  const [step, setStep] = useState(0);

  return (
    <div className="center app">
      <MainLayout step={step}>
        {(() => {
          switch (step) {
            // case 0:
            //   return FirstStep(firstConfig);
            case 0:
              return <FirstStep setStep={setStep} />;
            case 1:
              return <SecondStep setStep={setStep} />;
            case 2:
              return <ThirdStep setStep={setStep} />;
            case 3:
              return <Finally />;
            default:
              return null;
          }
        })()}
      </MainLayout>
    </div>
  );
}

export default App;
