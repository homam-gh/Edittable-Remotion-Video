import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");

createRoot(rootElement as HTMLElement).render(
  <div style={{}}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>
);
