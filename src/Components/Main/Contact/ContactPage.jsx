import React from "react";
import HeaderPage from "../../Header/HeaderPage";
import FooterPage from "../../Footer/FooterPage";
import home from "../../../style/assets/Image/Contact/home.svg";
import errow from "../../../style/assets/Image/Contact/bx-chevrons-right.svg";
import date from "../../../style/assets/Image/Contact/date.svg";
import MediaCenter from "./MediaCenter";

function ContactPage() {
  return (
    <div>
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
            <div className="email-us">
              <div className="">
                <img src="" alt="emailLogo" />
              </div>
              <div className="">
                <h3>Email us</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  dicta ducimus officiis{" "}
                </p>
                <a href="#">Send an application </a>
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
            <input type="text" id="specialist" />

            <label htmlFor="date">Date</label>
            <select id="date">
              <option value="">Select date</option>
            </select>

            <label htmlFor="time">Time</label>
            <select id="time">
              <option value="">Select time</option>
            </select>

            <button className="make-an-appointment">Make an appointment</button>
          </div>
        </div>
      </div>
      <MediaCenter />
      <FooterPage />
    </div>
  );
}

export default ContactPage;
