import React, { useState } from "react";
import HeaderPage from "../../Header/HeaderPage";
import appStore from "../../../style/assets/Image/appstore.svg";
import playStore from "../../../style/assets/Image/googleplay.svg";
import ErrorMassege from "../../Library/ErrorMassege";
import {
  AppFeature,
  HowDoesItWork,
  ClientOffer,
  Subscribe,
  FooterHome,
} from "../Home/Section/index";
import MobileImg from "../../../style/assets/Image/mobile.svg";

function HomePage() {
  const [errorMassege, setErrorMassege] = useState(false);
  const handleErrorMassege = () => {
    setErrorMassege(true);
    setTimeout(() => setErrorMassege(false), 1000);
  };
  return (
    <div className="bahalul">
      <HeaderPage />
      <div className="main-vid-homePage">
        <div className="container">
          <div className="content">
            <h1>Manage All Your Money in One App</h1>
            <p>
              We offer you a new feneration of the mobile banking.Save, spend &
              manage money in your pocket.
            </p>

            <div className="apps-logo">
              <div>
                <img src={appStore} alt="appStore" />
              </div>
              <div>
                <img src={playStore} alt="googlePlay" />
              </div>
            </div>
            <div className="discover-more">
              <a href="/error">
                <div className="round-cirkel">
                  <i class="fa-solid fa-chevron-down"></i>
                </div>
                <span className="discover-more" onClick={handleErrorMassege}>
                  Discover more
                </span>
              </a>
              {errorMassege && <ErrorMassege />}
            </div>
          </div>

          <div className="homepage-mobile">
            <img src={MobileImg} alt="MobileImage" className="MobileImage" />
          </div>
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
