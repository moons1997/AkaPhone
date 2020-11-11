import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Context from "./services/Context";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <Context>
    <Router>
      <App />
    </Router>
  </Context>,
  document.getElementById("root")
);
