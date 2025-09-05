import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

// Root render (React 18 style)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);