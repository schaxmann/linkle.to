import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import * as AWS from "aws-sdk";

const configuration = {
  secretAccessKey: "icHCERncEg3i15oLe5jnlTSpn4HNVz/JwLDh/at1",
  accessKeyId: "AKIAT3WO42NHNFUECKU2",
};

AWS.config.update(configuration);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
