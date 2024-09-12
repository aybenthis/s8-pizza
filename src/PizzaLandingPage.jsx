import React from "react";
import "./PizzaLandingPage.css";

const PizzaLandingPage = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="hero">
          <img
            src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/0e6503fc3c2912358d6ebef5b399e69e2f3846b3/Assets/Iteration-1-assets/logo.svg"
            alt="logo"
          />
          <h2>
            <span className="firsat">fırsatı kaçırma</span>
            <br />
            <span className="onay">KOD ACIKTIRIR</span>
            <br />
            <span className="onay">PİZZA, DOYURUR</span>
          </h2>

          <button className="cta-button">ACIKTIM</button>
        </div>
      </header>

      <nav className="food-categories">
        <div style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <img
            src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/0e6503fc3c2912358d6ebef5b399e69e2f3846b3/Assets/Iteration-2-aseets/icons/1.svg"
            alt="Yeni Kore"
            style={{ marginRight: "10px" }}
          />
          <span>YENİ! Kore</span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <img
            src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/0e6503fc3c2912358d6ebef5b399e69e2f3846b3/Assets/Iteration-2-aseets/icons/2.svg"
            alt="Pizza"
            style={{ marginRight: "10px" }}
          />
          <span>Pizza</span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <img
            src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/0e6503fc3c2912358d6ebef5b399e69e2f3846b3/Assets/Iteration-2-aseets/icons/3.svg"
            alt="Burger"
            style={{ marginRight: "10px" }}
          />
          <span>Burger</span>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <img
            src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/0e6503fc3c2912358d6ebef5b399e69e2f3846b3/Assets/Iteration-2-aseets/icons/4.svg"
            alt="Kızartmalar"
            style={{ marginRight: "10px" }}
          />
          <span>Kızartmalar</span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <img
            src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/0e6503fc3c2912358d6ebef5b399e69e2f3846b3/Assets/Iteration-2-aseets/icons/5.svg"
            alt="Fast food"
            style={{ marginRight: "10px" }}
          />
          <span>Fast Food</span>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <img
            src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/0e6503fc3c2912358d6ebef5b399e69e2f3846b3/Assets/Iteration-2-aseets/icons/6.svg"
            alt="Gazlı içecek"
            style={{ marginRight: "10px" }}
          />
          <span>Gazlı İçecek</span>
        </div>
      </nav>

      <section className="special-offers">
        <div className="offer-card ozel">
          <h3>Özel Lezzetus</h3>
          <p>Position: Absolute Acı Burger</p>
          <button>SİPARİŞ VER</button>
        </div>
        <div className="offer-group">
          <div className="offer-card dark">
            <h3>Hackathlon Burger Menü</h3>
            <button>SİPARİŞ VER</button>
          </div>
          <div className="offer-card kurye">
            <h3>Çoooook hızlı npm gibi kurye</h3>
            <button>SİPARİŞ VER</button>
          </div>
        </div>
      </section>
      <section className="popular-dishes">
        <h2>
          <span className="yazi">en çok paketlenen menüler</span>
          <br />
          <span className="acik">Acıktıran Kodlara Doyuran Lezzetler</span>
        </h2>

        <div className="dishes-grid">
          <div className="dish-card">
            <img
              src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/Assets/Iteration-2-aseets/pictures/food-1.png?raw=true"
              alt="Terminal Pizza"
            />
            <h3>Terminal Pizza</h3>
            <p>4.8 (200)</p>
            <p className="price">60₺</p>
          </div>
          <div className="dish-card">
            <img
              src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/Assets/Iteration-2-aseets/pictures/food-2.png?raw=true"
              alt="Position Absolute Acı Pizza"
            />
            <h3>Position Absolute Acı Pizza</h3>
            <p>4.9 (150)</p>
            <p className="price">85₺</p>
          </div>
          <div className="dish-card">
            <img
              src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/Assets/Iteration-2-aseets/pictures/food-3.png?raw=true"
              alt="useEffect Tavuklu Burger"
            />
            <h3>useEffect Tavuklu Burger</h3>
            <p>4.7 (180)</p>
            <p className="price">75₺</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <img
            src="https://raw.githubusercontent.com/Workintech/fsweb-s8-challenge-pizza/0e6503fc3c2912358d6ebef5b399e69e2f3846b3/Assets/Iteration-2-aseets/footer/logo-footer.svg"
            alt="footer-logo"
          />
          <div style={{ display: "flex", alignItems: "center" }}>
            {" "}
            <img
              src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/Assets/Iteration-2-aseets/footer/icons/icon-1.png?raw=true"
              alt="konum"
              style={{ marginRight: "10px" }}
            />
            <span>340 Londonderry Road, İstanbul Türkiye</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {" "}
            <img
              src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/Assets/Iteration-2-aseets/footer/icons/icon-2.png?raw=true"
              alt="mail"
              style={{ marginRight: "10px" }}
            />
            <span>aciktim@teknolojikyemekler.com</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {" "}
            <img
              src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/Assets/Iteration-2-aseets/footer/icons/icon-3.png?raw=true"
              alt="tel"
              style={{ marginRight: "10px" }}
            />
            <span>+90 216 123 45 67</span>
          </div>
        </div>
        <div className="footer-menu">
          <h3>Sıccacık Menüler</h3>
          <ul>
            <li>Terminal Pizza</li>
            <br />
            <li>Syntax Highlighting Pizza</li>
            <br />
            <li>useEffect Tavuklu Pizza</li>
            <br />
            <li>Binary Console Frosty</li>
            <br />
            <li>Tester Query Mutlu Burger</li>
            <br />
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Instagram</h3>
          <div className="instagram-grid">
            <img
              src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/Assets/Iteration-2-aseets/footer/insta/li-0.png?raw=true"
              alt="Instagram post"
            />
            <img
              src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/Assets/Iteration-2-aseets/footer/insta/li-1.png?raw=true"
              alt="Instagram post"
            />
            <img
              src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/Assets/Iteration-2-aseets/footer/insta/li-2.png?raw=true"
              alt="Instagram post"
            />
            <img
              src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/Assets/Iteration-2-aseets/footer/insta/li-3.png?raw=true"
              alt="Instagram post"
            />
            <img
              src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/Assets/Iteration-2-aseets/footer/insta/li-4.png?raw=true"
              alt="Instagram post"
            />
            <img
              src="https://github.com/Workintech/fsweb-s8-challenge-pizza/blob/main/Assets/Iteration-2-aseets/footer/insta/li-5.png?raw=true"
              alt="Instagram post"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PizzaLandingPage;
