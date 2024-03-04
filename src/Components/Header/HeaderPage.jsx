import { useState } from "react";
import "../../style/css/style.min.css";
import logos from "../../style/assets/Image/SiliconLogo.svg";
import logoText from "../../style/assets/Image/Silicon.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
function HeaderPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

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
            <div className={`navigation-bar ${menuOpen ? "open" : ""}`}>
              <nav>
                <ul className="navigation-ul">
                  <li>
                    <Link to="/" onClick={closeMenu}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/overview" onClick={closeMenu}>
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link to="/features" onClick={closeMenu}>
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link to="/news" onClick={closeMenu}>
                      News
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={closeMenu}>
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/error">Error</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="toggle-login">
            <div className="Light-Dark">
              <p>Light</p>
              <div className="theme-switch">
                <label>
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
              </div>
              <p>Dark</p>
            </div>
            <div>
              <button className="button-primary" onClick={goToSigneInpage}>
                <FontAwesomeIcon icon={faUser} className="fa-icon" />
                Sign in / up
              </button>
            </div>
          </div>

          <div
            className="burgerMenue"
            style={{ cursor: "pointer" }}
            onClick={toggleMenu}
          >
            <div style={{ fontSize: "24px", color: "black" }}>
              {menuOpen ? (
                <FontAwesomeIcon icon={faTimes} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderPage;
