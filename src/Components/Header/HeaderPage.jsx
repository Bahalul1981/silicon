import React from "react";
import "../../style/scss/style.min.css";
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
              <img src="" alt="Logo" />
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
            <div>
              <p>I am toggle</p>
            </div>
            <div>
              <p>I am toggle</p>
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
