import React, { useState, createContext } from "react";
import MainLayout from "./layout/MainLayout";
import FirstStep from "./pages/FirstStep";
import { secondStep } from "./pages/secondStep";
import { thirdStep } from "./pages/thirdStep";
import Finally from "./pages/Finally";
import { secondConfig } from "./config/secondConfig";
import { firstConfig } from "./config/firstConfig";
import { thirdConfig } from "./config/thirdConfig";
import "./App.css";

export const StepContext = createContext(0);

function App() {
  const [step, setStep] = useState(0);

  return (
    <StepContext.Provider value={{ step, setStep }}>
      <div className="center app">
        <MainLayout>
          {(() => {
            switch (step) {
              // case 0:
              //   return FirstStep(firstConfig);
              case 0:
                return <FirstStep setStep={setStep} />;
              case 1:
                return secondStep(secondConfig);
              case 2:
                return thirdStep(thirdConfig);
              case 3:
                return <Finally />;
              default:
                return null;
            }
          })()}
        </MainLayout>
      </div>
    </StepContext.Provider>
  );
}

export default App;
