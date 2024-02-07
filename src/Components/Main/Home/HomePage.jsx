import React from "react";
import HeaderPage from "../../Header/HeaderPage";
import {
  AppFeature,
  HowDoesItWork,
  ClientOffer,
  Subscribe,
  FooterHome,
} from "../Home/Section/index";
import MobileImg from "../../../style/assets/Image/mobile.svg";
function HomePage() {
  return (
    <div>
      <HeaderPage />
      <div className="main-vid-homePage">
        <div className="homepage-text-div">
          <h1>Manage All Your Money in One App</h1>
          <p>
            We offer you a new feneration of the mobile banking.Save, spend &
            manage money in your pocket.
          </p>

          <div className="apps-logo">
            <div>
              <img src="" alt="appStore" />
            </div>
            <div>
              <img src="" alt="googlePlay" />
            </div>
          </div>
          <div className="discover-more-icon">
            <img src="" alt="discoverMore" />
          </div>
        </div>
        <div className="homepage-image-div">
          <img src={MobileImg} alt="MobileImage" />
        </div>
      </div>
      <AppFeature />
      <HowDoesItWork />
      <ClientOffer />
      <Subscribe />
      <FooterHome />
    </div>
  );
}

export default HomePage;
