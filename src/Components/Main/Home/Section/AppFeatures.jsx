import React from "react";
import logo1 from "../../../../style/assets/Image/logo1.svg";
import logo2 from "../../../../style/assets/Image/logo2.svg";
import logo3 from "../../../../style/assets/Image/logo3.svg";
import logo4 from "../../../../style/assets/Image/logo4.svg";
import logo5 from "../../../../style/assets/Image/logo5.svg";
import logo6 from "../../../../style/assets/Image/logo6.svg";
import featureMobile from "../../../../style/assets/Image/feature/featuremobile.svg";
import easyPayment from "../../../../style/assets/Image/feature/easyPayment.svg";
import cost from "../../../../style/assets/Image/feature/cost.svg";
import regular from "../../../../style/assets/Image/feature/regular.svg";
import data from "../../../../style/assets/Image/feature/data.svg";
import support from "../../../../style/assets/Image/feature/support.svg";
import standerd from "../../../../style/assets/Image/feature/top.svg";

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
        <div className="feature-mobile">
          <img src={featureMobile} alt="feature-mobile" />
        </div>
        <div className="feature-text">
          <div className="app-fetures">
            <h1>App Fetures</h1>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              natus. Neque placeat sapiente, nemo sequi odit magnam mollitia
              eveniet temporibus ipsa nesciunt veritatis dolore laborum id,
              cupiditate laboriosam.
            </p>
          </div>
          <div className="text-and-logo">
            <div className="text-and-logo-A">
              <div className="easyPayment">
                <a href="#">
                  <img src={easyPayment} alt="" />
                </a>

                <div className="text">
                  <h4>Easy Payments</h4>
                  <p>
                    Id mollis consectetur congue egestas egestas suspendisse
                    blandit justo.
                  </p>
                </div>
              </div>
              <div className="easyPayment">
                <a href="#">
                  <img src={cost} alt="" />
                </a>
                <div className="text">
                  <h4>Cost Statistics</h4>
                  <p>
                    Mattis urna ultricies non amet, purus in auctor non. Odio
                    vulputate ac nibh.
                  </p>
                </div>
              </div>
              <div className="easyPayment">
                <a href="#">
                  <img src={regular} alt="" />
                </a>
                <div className="text">
                  <h4>Regular Cashback</h4>
                  <p>
                    Sit facilisis dolor arcu, fermentum vestibulum arcu
                    elementum imperdiet eleifend.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-and-logo-B">
              <div className="easyPayment">
                <a href="#">
                  <img src={data} alt="" />
                </a>

                <div className="text">
                  <h4>Data Security</h4>
                  <p>
                    Augue pulvinar justo, fermentum fames aliquam accumsan
                    vestibulum non.
                  </p>
                </div>
              </div>
              <div className="easyPayment">
                <a href="">
                  <img src={support} alt="" />
                </a>

                <div className="text">
                  <h4>Support 24/7</h4>
                  <p>
                    A elementum, imperdiet enim, pretium etiam facilisi in
                    aenean quam mauris.
                  </p>
                </div>
              </div>
              <div className="easyPayment">
                <a href="#">
                  <img src={standerd} alt="" />
                </a>

                <div className="text">
                  <h4>Top Standards</h4>
                  <p>
                    Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus
                    id. Sit facilisis dolor arcu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppFeatures;
