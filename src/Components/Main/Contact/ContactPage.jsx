import React from "react";
import HeaderPage from "../../Header/HeaderPage";

function ContactPage() {
  return (
    <div>
      <HeaderPage />
      <img src="" alt="homeContact" />
      <div className="contact-page-main-div">
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
        <div className="contact-address">
          <div className="map-location"></div>
          <div className="contact-address">
            <div className="medical-center-one">
              <h3>Medical Center 1</h3>
              <p>
                <img src="" alt="location" />
                4517 Washington Ave. Manchester, Kentucky 39495
              </p>
              <p>
                <img src="" alt="mobile" />
                (406) 555-0120
              </p>

              <img src="" alt="time" />
              <h4>Mon – Fri:</h4>
              <p> 9:00 am – 22:00 am</p>

              <h4>Mon – Fri:</h4>
              <p> 9:00 am – 22:00 am</p>
            </div>
            <div className="medical-center-two">
              <h3>Medical Center 2</h3>
              <p>
                <img src="" alt="location" />
                4517 Washington Ave. Manchester, Kentucky 39495
              </p>
              <p>
                <img src="" alt="mobile" />
                (406) 555-0120
              </p>
              <img src="" alt="time" />
              <h4>Mon – Fri:</h4>
              <p> 9:00 am – 22:00 am</p>

              <h4>Mon – Fri:</h4>
              <p> 9:00 am – 22:00 am</p>
            </div>
            <div className="medical-center-link-icon">
              <img src="" alt="facebook" />
              <img src="" alt="twiter" />
              <img src="" alt="instagram" />
              <img src="" alt="youtube" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
