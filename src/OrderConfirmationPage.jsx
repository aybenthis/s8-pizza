import React from "react";
import "./OrderConfirmationPage.css";

const OrderConfirmationPage = () => {
  return (
    <div className="order-confirmation">
      <img
        src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/0e6503fc3c2912358d6ebef5b399e69e2f3846b3/Assets/Iteration-1-assets/logo.svg"
        className="logo"
      />
      <h2>
        <span className="highlight">lezzetin yolda</span>
        <br />
        <span className="uniquifier">SİPARİŞ ALINDI</span>
      </h2>
      <hr />
      <h3 className="position">Position Absolute Acı Pizza</h3>
      <div className="order-details">
        <p>
          <span className="label">Boyut:</span>
          <span className="value">L</span>
        </p>
        <p>
          <span className="label">Hamur:</span>
          <span className="value">Süpper İnce</span>
        </p>
        <p className="toppings">
          <span className="label">Ek Malzemeler:</span>
          <span className="indented">
            <span className="value">
              Pepperoni,Sosis, Mısır, Ananas, Jalepeno
            </span>
          </span>
        </p>
      </div>
      <div className="order-summary">
        <h4 className="siparis">Sipariş Toplamı</h4>
        <div className="summary-row">
          <span>Seçimler</span>
          <span className="ucret">25.00₺</span>
        </div>
        <div className="summary-row total">
          <span>Toplam</span>

          <span>110.50₺</span>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
