import React from "react";
import ReactDOM from "react-dom";

import "materialize-css/dist/css/materialize.min.css";
import "./index.css";

import Routes from "./routes";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
