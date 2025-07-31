import React from "react";
import "./App.css";
const MenuCard = () => {
  return (
    <div className="menu-container" id="menu">
      <div className="menu-left">
        <div className="menu-title">
          <div className="shape-circle">
            <h2>HOTEL MENU</h2>
          </div>
        </div>
        <div className="menu-subtext">HOTEL TULI</div>
      </div>
      <div className="menu-right">
        <div className="menu-subtitle">HOTEL TULI</div>
        <div className="menu-section">
          <h3>🍟 STARTERS</h3>
          <ul>
            <li>
              CHEESE BALLS <span>RS 190</span>
            </li>
            <li>
              PANIR TIKKA <span>RS 240</span>
            </li>
            <li>
              CRISPY SWEET PATATOS<span>RS 230</span>
            </li>
            <li>
              BREAD ROLLS <span>RS 200</span>
            </li>
            <li>
              FRENCH FRIES <span>RS 250</span>
            </li>
          </ul>
        </div>
        <div className="menu-section">
          <h3>🍽 MAIN COURSE</h3>
          <ul>
            <li>
              BIRYANI <span>RS 600 </span>
            </li>
            <li>
              PANIR MAKHANI <span>RS 400</span>
            </li>
            <li>
              CHOLE BHATURE <span>RS 380</span>
            </li>
            <li>
              RAJMA CHAVAL <span>RS 420</span>
            </li>
            <li>
              KADAI PANIR <span>RS 400</span>
            </li>
            <li>
              CHICKEN CHAP <span>RS 600</span>
            </li>
          </ul>
        </div>

        <div className="menu-section">
          <h3>🍸DRINKS</h3>
          <ul>
            <li>
              ORANGE JUICE <span>RS 170</span>
            </li>
            <li>
              APPLE JUICE <span>RS 140</span>
            </li>
            <li>
              FRUIT BEER <span>RS 350</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
