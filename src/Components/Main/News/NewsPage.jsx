import React from "react";
import HeaderPage from "../../Header/HeaderPage";
import FooterPage from "../../Footer/FooterPage";
import NewsPageTwo from "./NewsPageTwo";
import style from "../../../style/assets/Image/news/Group.svg";

function NewsPage() {
  const HandleSubmit = () => {
    alert("Page was not found");
  };
  return (
    <div>
      <HeaderPage />
      <div className="newspage-wrapper">
        <NewsPageTwo />
        <div className="dont-miss-wrapper">
          <div className="dontMiss-text">
            <h2>Don´t Want to Miss Anything?</h2>

            <img src={style} alt="logo" />
          </div>
          <div className="redio-buttons-div">
            <div className="newsLatter-text">
              <h5>
                Sign up for
                <br /> Newsletters
              </h5>
            </div>
            <div className="checkbox-wrapper">
              <div className="checkboxElem">
                <input type="checkbox" id="myCheckbox" />
                <label htmlFor="myCheckbox"> Daily Newsletter</label>
              </div>
              <div className="checkboxElem">
                <input type="checkbox" id="myCheckbox" />
                <label htmlFor="myCheckbox"> Event Updates</label>
              </div>
            </div>
            <div className="checkbox-wrapper">
              <div className="checkboxElem">
                <input type="checkbox" id="myCheckbox" />
                <label htmlFor="myCheckbox"> Daily Newsletter</label>
              </div>
              <div className="checkboxElem">
                <input type="checkbox" id="myCheckbox" />
                <label htmlFor="myCheckbox"> Event Updates</label>
              </div>
            </div>
            <div className="checkbox-wrapper">
              <div className="checkboxElem">
                <input type="checkbox" id="myCheckbox" />
                <label htmlFor="myCheckbox"> Daily Newsletter</label>
              </div>
              <div className="checkboxElem">
                <input type="checkbox" id="myCheckbox" />
                <label htmlFor="myCheckbox"> Event Updates</label>
              </div>
            </div>
          </div>
          <div className="newsPage-input-btn">
            <div className="input-container-news">
              <div className="left-section-news">
                <i class="fa-regular fa-envelope"></i>
              </div>
              <div>
                <input type="email" placeholder="Your Email" />
              </div>
            </div>
            <button className="subscribe-button-news" onClick={HandleSubmit}>
              Subscribe *
            </button>
          </div>

          <p>
            * Yes, I agree to the <a href="/error">terms</a> and{" "}
            <a href="/error">privacy policy</a>
          </p>
        </div>
        <FooterPage />
      </div>
    </div>
  );
}

export default NewsPage;
