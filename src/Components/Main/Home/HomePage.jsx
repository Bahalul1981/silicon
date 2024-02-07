import React from "react";
import HeaderPage from "../../Header/HeaderPage";
import MobileImg from "../../../style/assets/Image/mobile.svg";
function HomePage() {
  return (
    <div>
      <HeaderPage />
      <div className="main-vid-homePage">
        <div className="homepage-text-div">Habalul</div>
        <div className="homepage-image-div">
          <img src={MobileImg} alt="MobileImage" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
