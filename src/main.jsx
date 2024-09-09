import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import PizzaLandingPage from "./PizzaLandingPage.jsx";
import "./PizzaLandingPage.css";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <PizzaLandingPage />
  </React.StrictMode>
);
