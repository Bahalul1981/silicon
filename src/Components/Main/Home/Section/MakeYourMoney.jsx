import React from "react";
import checked from "../../../../style/assets/Image/MakeYourMoney/bx-check-circle.svg";
import transfer from "../../../../style/assets/Image/MakeYourMoney/image.svg";
import reacive from "../../../../style/assets/Image/MakeYourMoney/image2.svg";
import logoOne from "../../../../style/assets/Image/MakeYourMoney/icon1.svg";
import logoTwo from "../../../../style/assets/Image/MakeYourMoney/icon2.svg";
import { ArrowRight, Arrowleft } from "../../../Library/CommonIcons";
import semicolon from "../../../../style/assets/Image/MakeYourMoney/quotes.svg";
import retingOne from "../../../../style/assets/Image/MakeYourMoney/rating1.svg";
import retingTwo from "../../../../style/assets/Image/MakeYourMoney/rating2.svg";
import Fannie from "../../../../style/assets/Image/MakeYourMoney/comment-image.png";
import Albert from "../../../../style/assets/Image/MakeYourMoney/comment-image2.svg";
function MakeYourMoney() {
  const ErrorPage = () => {
    window.location.href = "/error";
  };
  return (
    <div className="make-money-main-div">
      <div className="transfer-text-image">
        <div className="make-monet-text">
          <h2>Make your money trensfer simpleand clear</h2>

          <p>
            <img src={checked} alt="logo" />
            <span>Banking transaction are free for you</span>
          </p>
          <p>
            <img src={checked} alt="logo" />
            <span>No monthly cash commission</span>
          </p>
          <p>
            <img src={checked} alt="logo" />{" "}
            <span>Manage payments and transaction online</span>
          </p>
          <button className="button-primary " onClick={ErrorPage}>
            <span>Learn more</span>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <div className="make-monet-image">
          <img src={transfer} alt="transfer" />
        </div>
      </div>

      <div className="reacive-payment">
        <div className="payment-image">
          <img src={reacive} alt="reacive" />
        </div>
        <div className="payment-text">
          <div className="text">
            <h2>Recive payment from international bank details</h2>
          </div>
          <div className="sub-text">
            <div className="textOne">
              <img src={logoOne} alt="logo" />{" "}
              <p>
                Manage your payment online. Mollis congue my name is Arvid dawn
                amin
              </p>
            </div>
            <div className="textTwo">
              <img src={logoTwo} alt="logo" />{" "}
              <p>
                A elementur and payment online. Mollis congue my name is Arvid
                dawn amin
              </p>
            </div>
          </div>
          <div className="button-div">
            <button className="button-primary" onClick={ErrorPage}>
              <span>Learn more</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="client-area">
        <div className="client-area-text">
          <div className="text">
            <h2>Clients area Loving Our App</h2>
          </div>
          <div className="client-area-icons">
            <Arrowleft />
            <ArrowRight />
          </div>
        </div>

        <div className="commentOne">
          <div className="semiCollon">
            <img src={semicolon} alt="semi-collon" />
          </div>

          <img src={retingOne} alt="rank" className="rank" />
          <p>
            Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis.
            Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel.
            Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.
          </p>
          <div className="client-prof">
            <div>
              <img src={Fannie} alt="Fannie" />
            </div>
            <div>
              <h4>Fannie Summers</h4>
              <p>Designer</p>
            </div>
          </div>
        </div>
        <div className="commentTwo">
          <div className="semiCollon">
            <img src={semicolon} alt="semi-collon" />
          </div>
          <img src={retingTwo} alt="renk" className="rank" />
          <p>
            Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin
            amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare
            dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.
          </p>
          <div className="client-prof">
            <div>
              <img src={Albert} alt="Albart" />
            </div>
            <div>
              <h4>Albert Flores</h4>
              <p>Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MakeYourMoney;
