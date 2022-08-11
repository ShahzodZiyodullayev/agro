import React, { useState } from "react";
import MainLayout from "./layout/MainLayout";
import { renderComponent } from "./components/renderComponent";
import { Two } from "./components/Two";
import Three from "./components/Three";
import Finally from "./components/Finally";
import { config } from "./config";
import { nameConfig } from "./nameConfig";
import "./App.css";

function App() {
  const [step, setStep] = useState(0);
  return (
    <div className="center app">
      <MainLayout step={step} setStep={setStep}>
        {(() => {
          switch (step) {
            case 0:
              return renderComponent(nameConfig);
            case 1:
              return Two(config);
            case 2:
              return <Three />;
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
