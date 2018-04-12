import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import PricingGrid from "./PricingGrid";
import registerServiceWorker from "./registerServiceWorker";
import EqualHeightElements from "./EqualHeightElements";

ReactDOM.render(<EqualHeightElements />, document.getElementById("root"));
registerServiceWorker();
