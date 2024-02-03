import React from "react";
import { Link } from "react-router-dom";

function HeaderPage() {
  return (
    <div className="main-header-div">
      <header>
        <div className="Logo-and-text">
          <nav>
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
            <p>I am tougle</p>
          </div>
          <div>Login / logout</div>
        </div>
      </header>
    </div>
  );
}

export default HeaderPage;
