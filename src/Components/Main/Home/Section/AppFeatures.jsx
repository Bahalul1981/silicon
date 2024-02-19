import React from "react";
import logo1 from "../../../../style/assets/Image/logo1.svg";
import logo2 from "../../../../style/assets/Image/logo2.svg";
import logo3 from "../../../../style/assets/Image/logo3.svg";
import logo4 from "../../../../style/assets/Image/logo4.svg";
import logo5 from "../../../../style/assets/Image/logo5.svg";
import logo6 from "../../../../style/assets/Image/logo6.svg";

function AppFeatures() {
  return (
    <div className="app-feature-main-div">
      <div className="app-feature-logos">
        <a href="#" className="box-logo">
          <img src={logo1} alt="logo1" />
        </a>
        <a href="#" className="box-logo">
          <img src={logo2} alt="logo2" />
        </a>
        <a href="#" className="box-logo">
          <img src={logo3} alt="logo3" />
        </a>
        <a href="#" className="box-logo">
          <img src={logo4} alt="logo4" />
        </a>
        <a href="#" className="box-logo">
          <img src={logo5} alt="logo5" />
        </a>
        <a href="#" className="box-logo">
          <img src={logo6} alt="logo6" />
        </a>
      </div>
      <div className="features-secton">
        <div>
          <img src="" alt="feature-mobile" />
        </div>
        <div className="feature-text">
          <div className="app-fetures">
            <h1>App Fetures</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              voluptatem perspiciatis, sequi odit aperiam voluptatibus eum eius
              sapiente?{" "}
            </p>
          </div>
          <div className="text-and-logo">
            <div className="easyPayment">
              <img src="" alt="easyPayment" />
            </div>
            <div className="easyPayment">
              <img src="" alt="dataSecurity" />
            </div>
            <div className="easyPayment">
              <img src="" alt="costStatestic" />
            </div>
            <div className="easyPayment">
              <img src="" alt="regularCashback" />
            </div>
            <div className="easyPayment">
              <img src="" alt="support" />
            </div>
            <div className="easyPayment">
              <img src="" alt="topStanderds" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppFeatures;
