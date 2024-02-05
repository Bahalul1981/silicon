import React from "react";
import HeaderPage from "../../Header/HeaderPage";
import MobileImg from "../../../style/assets/Image/mobile.svg";
function HomePage() {
  return (
    <div>
      <HeaderPage />
      <div className="main-vid-homePage">
        <div className="text-div">
          <h1>Hello I am from homePage</h1>
        </div>
        <div className="image-div">
          <img src={MobileImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
