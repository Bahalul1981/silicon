import React from "react";
import "../../style/css/style.min.css";
import logos from "../../style/assets/Image/SiliconLogo.svg";
import logoText from "../../style/assets/Image/Silicon.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
function HeaderPage() {
  const goToSigneInpage = () => {
    window.location.href = "/contact";
  };
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
              <ul className="navigation-ul">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/overview">Overview</Link>
                </li>
                <li>
                  <Link to="/features">Features</Link>
                </li>
                <li>
                  <Link to="/news">News</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/error">Error</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="toggle-login">
            <div className="Light-Dark">
              <div>Light</div>
              <div className="theme-switch">
                <label>
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
              <div>Dark</div>
            </div>
            <div>
              <button className="login-logout" onClick={goToSigneInpage}>
                <FontAwesomeIcon icon={faUser} className="fa-icon" />
                Sign in / up
              </button>
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
