import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { Template } from "./Template";
import { HookAndYup } from "./HookAndYup";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <div>
      {/* <Template /> */}
      <div style={{ marginBottom: "30px" }} />
      <HookAndYup />
    </div>
  </StrictMode>,
  rootElement
);
