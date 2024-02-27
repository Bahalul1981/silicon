import React from "react";
import HeaderPage from "../../Header/HeaderPage";
import FooterPage from "../../Footer/FooterPage";
import home from "../../../style/assets/Image/Contact/home.svg";
import errow from "../../../style/assets/Image/Contact/bx-chevrons-right.svg";
import date from "../../../style/assets/Image/Contact/date.svg";
import email from "../../../style/assets/Image/Contact/bx-envelope.svg";
import addHuman from "../../../style/assets/Image/Contact/add-group.svg";
import MediaCenter from "./MediaCenter";

function ContactPage() {
  return (
    <>
      <div className="contactPage-wrapper">
        <HeaderPage />

        <div className="contact-page-main-div">
          <div className="contact-page-location">
            <img src={home} alt="home" />
            <img src={errow} alt="errow" />
            <a href="">
              <img src={date} alt="currentPage" />
            </a>
          </div>
          <div className="contact-form">
            <div className="contactUs">
              <div className="contactUs-h2">
                <h2>Contact Us</h2>
              </div>
              <div className="email-us">
                <div className="round-cirkel-big">
                  <img src={email} alt="emailLogo" />
                </div>
                <div className="email-us-text">
                  <h4>Email us</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga dicta ducimus officiis{" "}
                  </p>
                  <a href="#">
                    Leave a message{" "}
                    <span>
                      <i class="fa-solid fa-arrow-right"></i>
                    </span>{" "}
                  </a>
                </div>
              </div>
              <div className="Careers">
                <div className="round-cirkel-big">
                  <img src={addHuman} alt="careersLogo" />
                </div>
                <div className="careers-text">
                  <h4>Careers</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga dicta ducimus officiis{" "}
                  </p>
                  <a href="#">
                    Send an application{" "}
                    <span>
                      <i class="fa-solid fa-arrow-right"></i>
                    </span>{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-form-validation">
              <h2>Get Online Consultation</h2>
              <label htmlFor="fullName">Full name</label>
              <input type="text" id="fullName" />
              <label htmlFor="email">Email address</label>
              <input type="text" id="email" />
              <label htmlFor="specialist">Specialist</label>
              <select name="" id="specialist">
                <option value="1">Specialist1</option>
                <option value="2">Specialist2</option>
                <option value="3">Specialist3</option>
              </select>

              <div class="datetime-container">
                <div class="date-time">
                  <label htmlFor="date">Date</label>
                  <input type="date" id="date" />
                </div>
                <div class="date-time">
                  <label htmlFor="time">Time</label>
                  <input type="time" id="time" />
                </div>
              </div>

              <button className="button-primary">Make an appointment</button>
            </div>
          </div>
        </div>
      </div>
      <MediaCenter />
      <FooterPage />
    </>
  );
}

export default ContactPage;
