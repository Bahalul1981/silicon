import React from "react";

function FooterPage() {
  return (
    <div className="footer-main-div">
      <div className="logo-subcribe">
        <div className="footer-logo">
          <img src="" alt="mainLogo" />
        </div>
        <div className="">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            alias quidem excepturi voluptas impedit ratione, provident enim quis
            unde id dolores. Qui nulla aliquid esse quaerat cum harum ipsa
            dignissimos.
          </p>
        </div>
        <div className="">
          <h5>Subscribe to our newsletter</h5>
          <div className="mail-button">
            <div className="">
              <label htmlFor="">
                <input type="text" />
                Your Email
              </label>
            </div>
            <div className="Subscribe-btn">
              <Button>Subscrib</Button>
            </div>
          </div>
        </div>
        <div className="">
          &copy; {new Date().getFullYear()} Silicon. All rights reserved. Lorem
          ipsum dolor sit amet consectetur adipisicing elit
        </div>
      </div>

      <div className="footer-links">
        <div className="link-div">
          <ul>
            <li>
              <link to="/" />
              Home
            </li>
            <li>Service</li>
            <li>Case Studio</li>
            <li>About Us</li>
            <li>News & Insight</li>
            <li>Terms & Condiitons</li>
            <li>Privacy Policy</li>
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
        <div className="contact-div">
          <ul>
            <li>
              <a href="*">Contact Us</a>
            </li>
            <li>
              <a href="*">silicon@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FooterPage;
