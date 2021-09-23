import ReactDOM from "react-dom";
import { StrictMode } from "react";

import { FormComponent } from "./FormComponent";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <div>
      <div style={{ marginBottom: "30px" }} />
      <FormComponent />
    </div>
  </StrictMode>,
  rootElement
);
