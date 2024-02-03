import React from "react";
import "../../style/scss/style.min.css";
import { Link } from "react-router-dom";

function HeaderPage() {
  return (
    <div className="main-header-div">
      <div className="Logo-and-text">
        <header>
          <nav>
            <ul>
              <li>logo</li>
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
        </header>
      </div>
      <div className="toggle-login">
        <div>
          <p>I am tougle</p>
        </div>
        <div>Login / logout</div>
      </div>
    </div>
  );
}

export default HeaderPage;
