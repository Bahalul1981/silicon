import React from "react";
import "../../style/scss/style.min.css";
import logos from "../../style/assets/Image/Group 2.png";
import logoText from "../../style/assets/Image/Silicon.png";
import signeUp from "../../style/assets/Image/btn.png";
import Tougle from "../../style/assets/Image/light toggle.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function HeaderPage() {
  return (
    <>
      <header>
        <div className="header-container">
          <div className="logo-and-text">
            <div className="logo-image">
              <div>
                <img src={logos} alt="" />
              </div>

              <div className="silicon-text">
                <img src={logoText} alt="" />
              </div>
            </div>
            <nav className="navigation-bar">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/error">Error</Link>
                </li>
                <li>
                  <Link to="/features">Features</Link>
                </li>
                <li>
                  <Link to="/overview">Overview</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="toggle-login">
            <div className="Light-Dark">
              <div>Light</div>
              <div>
                <img src={Tougle} alt="" />
              </div>
              <div>Dark</div>
            </div>
            <div>
              <img src={signeUp} className="Signe-up" alt="" />
            </div>
          </div>

          <div className="burgerMenue">
            <FontAwesomeIcon
              icon={faBars}
              style={{ fontSize: "24px", color: "black" }}
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderPage;
