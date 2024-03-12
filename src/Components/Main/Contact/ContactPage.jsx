import React, { useState } from "react";
import HeaderPage from "../../Header/HeaderPage";
import FooterPage from "../../Footer/FooterPage";
import home from "../../../style/assets/Image/Contact/home.svg";
import errow from "../../../style/assets/Image/Contact/bx-chevrons-right.svg";
import date from "../../../style/assets/Image/Contact/date.svg";
import email from "../../../style/assets/Image/Contact/bx-envelope.svg";
import addHuman from "../../../style/assets/Image/Contact/add-group.svg";
import MediaCenter from "./MediaCenter";
import SuccessMessage from "../../Library/SuccessMassege";
import ErrorMassegeContact from "../../Library/ErrorMassegeContact";

function ContactPage() {
  const [successMessage, setSuccessMessage] = useState(false);
  const [failedMessage, setFailedMessage] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    specialist: "",
    date: "",
    time: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://kyhnet23-assignment.azurewebsites.net/api/book-appointment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            specialist: formData.specialist,
            date: formData.date,
            time: formData.time,
          }),
        }
      );

      if (response.ok) {
        setSuccessMessage(true);
        setTimeout(() => {
          setSuccessMessage(false);
        }, 3000);
        setFormData({
          fullName: "",
          email: "",
          specialist: "",
          date: "",
          time: "",
        });
      } else {
        console.log(formData);
        throw new Error("Failed to submit data.");
      }
    } catch (error) {
      console.error("Error:", error);
      setFailedMessage(true);
      setTimeout(() => {
        setFailedMessage(false);
      }, 3000);
      setFormData({
        fullName: "",
        email: "",
        specialist: "",
        date: "",
        time: "",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailPattern.test(value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      emailValid: name === "email" ? isValidEmail : prevData.emailValid,
    }));
  };

  return (
    <>
      <div className="contactPage-wrapper">
        <HeaderPage />

        <div className="contact-page-location">
          <img src={home} alt="home" />
          <img src={errow} alt="errow" />
          <a href="">
            <img src={date} alt="currentPage" />
          </a>
        </div>
        <div className="contact-page-main-div">
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
                  Please feel free to drop us a line. We will <br></br> respond
                  as soon as possible.
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
                  Sit ac ipsum leo lorem magna nunc mattis <br></br> maecenas
                  non vestibulum.
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

            {/* // FORM VALIDIITON */}

            <form onSubmit={handleSubmit}>
              <label htmlFor="fullName">Full name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {formData.emailValid === false && (
                <span style={{ color: "red" }}>Invalid email address</span>
              )}
              <label htmlFor="specialist">Specialist</label>
              <select
                name="specialist"
                id="specialist"
                value={formData.specialist}
                onChange={handleChange}
              >
                <option value="1"></option>
                <option value="2">Specialist2</option>
                <option value="3">Specialist3</option>
              </select>

              <div class="datetime-container">
                <div className="date-time">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>

                <div className="date-time">
                  <label htmlFor="time">Time</label>
                  <input
                    type="time"
                    name="time"
                    id="time"
                    value={formData.time}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button className="button-primary contact-page-button">
                Make an appointment
              </button>
            </form>
            {successMessage && (
              <SuccessMessage successMessage="Data was successfully submitted" />
            )}
            {failedMessage && (
              <ErrorMassegeContact errorMessage="Data was failed to submit" />
            )}
          </div>
        </div>
      </div>
      <MediaCenter />
      <FooterPage />
    </>
  );
}

export default ContactPage;
