// src/index.js

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Ini adalah titik awal, yang merender komponen App ke dalam 'root' di HTML
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
