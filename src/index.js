import { StrictMode } from "react";
import ReactDOM from "react-dom";

// import { Template } from "./Template";
import { CustomHookAndValidations } from "./CustomHookAndValidations";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <div>
      {/* <Template /> */}
      <div style={{ marginBottom: "30px" }} />
      <CustomHookAndValidations />
    </div>
  </StrictMode>,
  rootElement
);
