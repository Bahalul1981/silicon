import React from "react";
import iphonProOne from "../../../../style/assets/Image/howDoesItWork/iPhonePro1.svg";
import iphonProTwo from "../../../../style/assets/Image/howDoesItWork/iPhonePro2.svg";
import iphonProThree from "../../../../style/assets/Image/howDoesItWork/iPhonePro3.svg";
function HowDoesItWork() {
  return (
    <div className="how-does-it-work-main">
      <div className="headerText">
        <h1>How Does It Work</h1>
      </div>
      <div className="imageses">
        <div className="iconOne">
          <a href="#">
            <div className="round-cirkel">
              <i class="fa-solid fa-chevron-left"></i>
            </div>
          </a>
        </div>
        <div className="imageOne">
          <img src={iphonProOne} alt="mobileOne" />
        </div>
        <div className="imageTwo">
          <img src={iphonProTwo} alt="mobileTwo" />
        </div>
        <div className="imageThree">
          <img src={iphonProThree} alt="mobileThree" />
        </div>
        <div className="iconTwo">
          <a href="#">
            <div className="round-cirkel">
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          </a>
        </div>
      </div>
      <div className="bottomText">
        <h3>Step 2. Latest transaction history </h3>
        <p>
          Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu
          sociis tristique quisque hac in consectetur condimentum.
        </p>
      </div>
    </div>
  );
}

export default HowDoesItWork;
