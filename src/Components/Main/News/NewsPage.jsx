import React from "react";
import HeaderPage from "../../Header/HeaderPage";

function NewsPage() {
  return (
    <div>
      <HeaderPage />
      <div className="newspage-main-div">
        <div className="text-icon">
          <img src="" alt="home-and-news-icon" />
          <h2>Our News</h2>
        </div>
        <div className="api-produtcs">Fetch data from API</div>
        <div className="dont-miss">
          <div className="text">
            <h2>Don´t Want to Miss Anything</h2> <img src="" alt="logo" />
          </div>
          <div className="redio-buttons">
            <div className="">Sign up for Newsletters</div>
            <div className="">
              {" "}
              <input type="checkbox" id="myCheckbox" />
              <label htmlFor="myCheckbox"> Daily Newsletter</label>
              <input type="checkbox" id="myCheckbox" />
              <label htmlFor="myCheckbox"> Event Updates</label>
            </div>
            <div className="">
              {" "}
              <input type="checkbox" id="myCheckbox" />
              <label htmlFor="myCheckbox"> Advertising Updates</label>
              <input type="checkbox" id="myCheckbox" />
              <label htmlFor="myCheckbox"> Startups Weekly</label>
            </div>
            <div className="">
              {" "}
              <input type="checkbox" id="myCheckbox" />
              <label htmlFor="myCheckbox"> Week in Review</label>
              <input type="checkbox" id="myCheckbox" />
              <label htmlFor="myCheckbox">Podcasts</label>
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
      </div>
    </div>
  );
}

export default NewsPage;
