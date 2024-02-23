import React from "react";
import Subscribe from "./Subscribe";
import { Link } from "react-router-dom";
import siliconLogo from "../../../../style/assets/Image/Group 2.png";
import siliconText from "../../../../style/assets/Image/Silicon.png";
import apple from "../../../../style/assets/Image/appstore.svg";
import android from "../../../../style/assets/Image/googleplay.svg";
import faceBook from "../../../../style/assets/Image/HomePageFooter/FaceBook.svg";
import twiter from "../../../../style/assets/Image/HomePageFooter/Twiter.svg";
import instagram from "../../../../style/assets/Image/HomePageFooter/Instagram.svg";
import youtube from "../../../../style/assets/Image/HomePageFooter/youtube.svg";

function HomeFooter() {
  return (
    <>
      <Subscribe />
      <div className="homePageFooterWrapper">
        <div className="footer-logo">
          <div className="footer-logo-img">
            <img src={siliconLogo} alt="" />
          </div>
          <div>
            <img src={siliconText} alt="logo" />
          </div>
        </div>
        <div className="nav-bar">
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
        <div className="app-icon">
          <div>
            <img src={apple} alt="apple" />
          </div>
          <div>
            <img src={android} alt="android" />
          </div>
        </div>
        <div className="socialmedia-icon">
          <div className="link-icon">
            <a href="#">
              {" "}
              <img src={faceBook} alt="facebook" />
            </a>
          </div>
          <div className="link-icon">
            <a href="#">
              <img src={twiter} alt="twiter" />
            </a>
          </div>
          <div className="link-icon">
            <a href="#">
              <img src={instagram} alt="instram" />
            </a>
          </div>
          <div className="link-icon">
            <a href="#">
              {" "}
              <img src={youtube} alt="youtube" />
            </a>
          </div>
        </div>
        <div className="main-footer-text">
          <p>
            &copy; {new Date().getFullYear()} Silicon. All rights reserved.
            Pulvinar urna condimentum amet tempor, ornare integer. Lorem odio
            justo malesuada suspendisse viverra
          </p>

          <p className="Second-text">
            aliquet quisque turpis non. Feugiat in odio non nunc ornare
            consectetur. aspernatur.
          </p>
        </div>
      </div>
    </>
  );
}

export default HomeFooter;
