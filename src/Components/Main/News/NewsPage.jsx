import React from "react";
import HeaderPage from "../../Header/HeaderPage";
import FooterPage from "../../Footer/FooterPage";
import NewsPageTwo from "./NewsPageTwo";

function NewsPage() {
  return (
    <div>
      <HeaderPage />
      <div className="newspage-wrapper">
        <NewsPageTwo />
        <div className="dont-miss-wrapper">
          <div className="text">
            <h2>Don´t Want to Miss Anything</h2>
            <span>
              <img src="" alt="logo" />
            </span>
          </div>
          <div className="redio-buttons-div">
            <div className="">
              <h3>Sign up for Newsletters</h3>
            </div>
            <div>
              <div>
                <input type="checkbox" id="myCheckbox" />
                <label htmlFor="myCheckbox"> Daily Newsletter</label>
              </div>
              <div>
                <input type="checkbox" id="myCheckbox" />
                <label htmlFor="myCheckbox"> Event Updates</label>
              </div>
            </div>
            <div className="">
              <div>
                <input type="checkbox" id="myCheckbox" />
                <label htmlFor="myCheckbox"> Daily Newsletter</label>
              </div>
              <div>
                <input type="checkbox" id="myCheckbox" />
                <label htmlFor="myCheckbox"> Event Updates</label>
              </div>
            </div>
            <div className="">
              <div>
                <input type="checkbox" id="myCheckbox" />
                <label htmlFor="myCheckbox"> Daily Newsletter</label>
              </div>
              <div>
                <input type="checkbox" id="myCheckbox" />
                <label htmlFor="myCheckbox"> Event Updates</label>
              </div>
            </div>
          </div>
          <div className="subscribe">
            <input type="text" placeholder="Your Email" />
            <button className="subscribe-btn">Subscrube</button>
          </div>
          <p>
            * Yes, I agree to the <a href="#">terms</a> and{" "}
            <a href="#">privacy policy</a>
          </p>
        </div>
        <FooterPage />
      </div>
    </div>
  );
}

export default NewsPage;
