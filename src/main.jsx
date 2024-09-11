import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import PizzaLandingPage from "./PizzaLandingPage.jsx";
import "./PizzaLandingPage.css";
import "./App.css";
import SuccessPage from "./SuccessPage.jsx";
import "./SuccessPage.css";
import OrderConfirmationPage from "./OrderConfirmationPage.jsx";
import "./OrderConfirmationPage.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <PizzaLandingPage />
    <SuccessPage />
    <OrderConfirmationPage />
  </React.StrictMode>
);
export default main;
