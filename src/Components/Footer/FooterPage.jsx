import React, { useState } from "react";
import logo from "../../style/assets/Image/Silicon.svg";
import Silicon from "../../style/assets/Image/SiliconLogo.svg";
import ErrorMassegeContact from "../Library/ErrorMassegeContact";
function FooterPage() {
  const HandleErro = () => {
    alert("Page was not found");
  };
  return (
    <div className="footer-main-div-wrapper">
      <div className="logo-subcribe">
        <div className="footer-logo">
          <img src={Silicon} alt="mainLogo" />
          <img src={logo} alt="text" style={{ height: "20px" }} />
        </div>
        <div className="footer-silicon-text">
          <p>
            Proin ipsum pharetra, senectus eget scelerisque varius pretium{" "}
            <br />
            platea velit. Lacus, eget eu vitae nullam proin turpis etiam mi sit.{" "}
            <br />
            Non feugiat feugiat egestas nulla nec. Arcu tempus, eget <br />{" "}
            elementum dolor ullamcorper sodales ultrices eros.
          </p>
        </div>
        <div className="subscribe-newsLetter">
          <h5>Subscribe to our newsletter</h5>

          <div className="input-wrapper-footer">
            <div className="input-container-footer">
              <div className="left-section-footer">
                <i class="fa-regular fa-envelope"></i>
              </div>
              <div>
                <input type="email" placeholder="Your Email" />
              </div>
            </div>
            <button className="subscribe-button-footer" onClick={HandleErro}>
              Subscribe
            </button>
          </div>
        </div>
        <div className="Footer">
          <p className="footer-p-copy-right">
            {" "}
            &copy; {new Date().getFullYear()} All rights reserved. Silicon
            Template.
          </p>
        </div>
      </div>

      <div className="footer-links">
        <div className="link-div">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Service</a>{" "}
            </li>
            <li>
              <a href="#">Our client</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#">Terms & Condiitons</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="link-div">
          <ul>
            <li>
              <a href="*">Facebook</a>
            </li>
            <li>
              <a href="*">Linkdin</a>
            </li>
            <li>
              <a href="*">Twitter</a>
            </li>
            <li>
              <a href="*">Instragram</a>
            </li>
          </ul>
        </div>
        <div className="link-div-three">
          <ul>
            <li>
              <a href="*">Contact Us</a>
            </li>
            <div className="silicon-email">
              {" "}
              <a href="*">silicon@gmail.com</a>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterPage;
