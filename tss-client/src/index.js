import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { TSSContextProvider } from "./contexts/TSSContext";
import reportWebVitals from "./reportWebVitals";
import "./services/fontawesome";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <TSSContextProvider >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TSSContextProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
