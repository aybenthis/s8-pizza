import React, { useState } from "react";
import "./App.css";

function App() {
  const [size, setSize] = useState("");
  const [dough, setDough] = useState("");
  const [toppings, setToppings] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState("");
  const [currentPage, setCurrentPage] = useState("Sipariş Oluştur");
  const basePrice = 85.5;
  const toppingPrice = 5;

  const handleToppingChange = (e) => {
    const topping = e.target.value;
    setToppings((prev) =>
      e.target.checked ? [...prev, topping] : prev.filter((t) => t !== topping)
    );
  };

  const total = basePrice + toppings.length * toppingPrice;
  const NavButton = ({ page }) => (
    <button
      className={`nav-button ${currentPage === page ? "active" : ""}`}
      onClick={() => setCurrentPage(page)}
    >
      {page}
    </button>
  );

  return (
    <div className="pizza-order-form">
      <div className="form-container">
        <div className="form-header">
          <h2>Teknolojik Yemekler</h2>
          <div className="nav-buttons">
            <NavButton page="Anasayfa" />
            <NavButton page="Seçenekler" />
            <NavButton page="Sipariş Oluştur" />
          </div>
        </div>
        <div className="form-content">
          <h3>Position Absolute Acı Pizza</h3>
          <p className="price">{basePrice.toFixed(2)}₺</p>
          <p className="description">
            Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir... Küçük bir pizzaya büyük pizzetta
            denir.
          </p>

          <div className="form-row">
            <div className="form-group">
              <label>Boyut Seç *</label>
              <div className="radio-group">
                {["Küçük", "Orta", "Büyük"].map((s) => (
                  <label key={s} className="radio-label">
                    <input
                      type="radio"
                      value={s}
                      checked={size === s}
                      onChange={(e) => setSize(e.target.value)}
                    />
                    {s}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Hamur Seç *</label>
              <select value={dough} onChange={(e) => setDough(e.target.value)}>
                <option value="">Hamur Kalınlığı Seçiniz</option>
                <option value="ince">İnce</option>
                <option value="kalın">Kalın</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Ek Malzemeler</label>
            <p className="sub-label">En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="toppings-grid">
              {[
                "Pepperoni",
                "Domates",
                "Biber",
                "Sosis",
                "Mantar",
                "Sucuk",
                "Kanada Jambonu",
                "Sucuk",
                "Ananas",
                "Tavuk ızgara",
                "Jalapeno",
                "Kabak",
                "Soğan",
                "Sarımsak",
              ].map((topping) => (
                <label key={topping} className="checkbox-label">
                  <input
                    type="checkbox"
                    value={topping}
                    checked={toppings.includes(topping)}
                    onChange={handleToppingChange}
                  />
                  {topping}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Sipariş Notu</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Siparişiniz eklemek istediğiniz bir not var mı?"
            />
          </div>

          <div className="order-summary">
            <div className="quantity-control">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <div className="total">
              <p>Sipariş Toplamı</p>
              <p>Seçimler: {(total * quantity).toFixed(2)}₺</p>
              <p className="grand-total">
                Toplam: {(total * quantity).toFixed(2)}₺
              </p>
            </div>
          </div>

          <button className="order-button">SİPARİŞ VER</button>
        </div>
      </div>
    </div>
  );
}
const LandingPage = () => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate("/order-confirmation");
  };

  return (
    <div className="landing-page">
      <div className="content">
        <h1 className="title">Teknolojik Yemekler</h1>
        <div className="slogan">
          <h2>KOD AÇIKTIRIR</h2>
          <h2>PİZZA, DOYURUR</h2>
        </div>
        <button className="cta-button" onClick={handleOrderClick}>
          AÇIKTIM
        </button>
      </div>
      <div className="background-image"></div>
    </div>
  );
};

export default App;
