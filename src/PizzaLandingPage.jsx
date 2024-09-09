import React from "react";
import "./PizzaLandingPage.css";

const PizzaLandingPage = () => {
  return (
    <div className="landing-page">
      <div className="content">
        <h1 className="title">Teknolojik Yemekler</h1>
        <div className="slogan">
          <h2>KOD ACIKTIRIR</h2>
          <h2>PİZZA, DOYURUR</h2>
        </div>
        <button className="cta-button">ACIKTIM</button>
      </div>
      <div className="background-image"></div>
    </div>
  );
};

export default PizzaLandingPage;
