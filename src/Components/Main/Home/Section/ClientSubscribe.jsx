import React, { useState } from "react";
import { ArrowDown, ArrowUpp } from "../../../Library/CommonIcons";
import cellPhonceIcon from "../../../../style/assets/Image/MakeYourMoney/whatsupcell.svg";
import smsIcon from "../../../../style/assets/Image/MakeYourMoney/smsicon.svg";

function ClientSubscribe() {
  return (
    <div className="client-andSubcription-mainDiv">
      <div className="customet-questions">
        <div className="question-one">
          <h2>
            Any questions? <br />
            Check out the FAQs
          </h2>

          <p>
            Still have unanswerd questions and need to get <br /> in touch?
          </p>
        </div>
        <div className="question-logo">
          <div className="question-logoOne">
            <img src={cellPhonceIcon} alt="" />
            <p className="question-p">Still have question?</p>
            <a href="#">
              <p>Contact us</p>
              <span>
                <i class="fa-solid fa-arrow-right"></i>
              </span>
            </a>
          </div>
          <div className="question-logo-two">
            {" "}
            <img src={smsIcon} alt="" />
            <p className="question-p">Don't like phone calls?</p>
            <a href="#" className="green-sms">
              <p>Contact us</p>
              <span>
                <i class="fa-solid fa-arrow-right"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="question-two">
        <div className="tougle-text">
          <h6>In any fo personal information stored in the App?</h6>{" "}
          <p>
            Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
            Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus
            adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra
            fermentum duis accumsan lectus non. Massa cursus molestie lorem
            scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing
            euismod montes, duis egestas. Vehicula eu etiam quam tristique
            tincidunt suspendisse ut consequat.
          </p>
          <div className="cirkel-tougle">
            {" "}
            <div className="arrow-down">
              <ArrowDown />
            </div>
            <div className="arrow-upp">
              <ArrowUpp />
            </div>
          </div>
        </div>
        <div className="tougle-text">
          <h6>What formats can I downloas my transaction history in?</h6>{" "}
          <p>
            Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
            Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus
            adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra
            fermentum duis accumsan lectus non. Massa cursus molestie lorem
            scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing
            euismod montes, duis egestas. Vehicula eu etiam quam tristique
            tincidunt suspendisse ut consequat.
          </p>
          <div className="cirkel-tougle">
            {" "}
            <div className="arrow-down">
              <ArrowDown />
            </div>
            <div className="arrow-upp">
              <ArrowUpp />
            </div>
          </div>
        </div>
        <div className="tougle-text">
          <h6>Can I schedule future transfers?</h6>{" "}
          <p>
            Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
            Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus
            adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra
            fermentum duis accumsan lectus non. Massa cursus molestie lorem
            scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing
            euismod montes, duis egestas. Vehicula eu etiam quam tristique
            tincidunt suspendisse ut consequat.
          </p>
          <div className="cirkel-tougle">
            {" "}
            <div className="arrow-down">
              <ArrowDown />
            </div>
            <div className="arrow-upp">
              <ArrowUpp />
            </div>
          </div>
        </div>
        <div className="tougle-text">
          <h6>When can I use banking App servics?</h6>{" "}
          <p>
            Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
            Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus
            adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra
            fermentum duis accumsan lectus non. Massa cursus molestie lorem
            scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing
            euismod montes, duis egestas. Vehicula eu etiam quam tristique
            tincidunt suspendisse ut consequat.
          </p>
          <div className="cirkel-tougle">
            {" "}
            <div className="arrow-down">
              <ArrowDown />
            </div>
            <div className="arrow-upp">
              <ArrowUpp />
            </div>
          </div>
        </div>
        <div className="tougle-text">
          <h6>Can I create my own password that is easy for me to remember?</h6>{" "}
          <p>
            Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
            Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus
            adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra
            fermentum duis accumsan lectus non. Massa cursus molestie lorem
            scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing
            euismod montes, duis egestas. Vehicula eu etiam quam tristique
            tincidunt suspendisse ut consequat.
          </p>
          <div className="cirkel-tougle">
            {" "}
            <div className="arrow-down">
              <ArrowDown />
            </div>
            <div className="arrow-upp">
              <ArrowUpp />
            </div>
          </div>
        </div>
        <div className="tougle-text">
          <h6>What happens if I forget or lose my password</h6>{" "}
          <p>
            Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper.
            Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus
            adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra
            fermentum duis accumsan lectus non. Massa cursus molestie lorem
            scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing
            euismod montes, duis egestas. Vehicula eu etiam quam tristique
            tincidunt suspendisse ut consequat.
          </p>
          <div className="cirkel-tougle">
            {" "}
            <div className="arrow-down">
              <ArrowDown />
            </div>
            <div className="arrow-upp">
              <ArrowUpp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientSubscribe;
