import React from "react";

function MediaCenter() {
  return (
    <div className="contact-address">
      <div className="map-location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12621.581077635414!2d-122.40883544657643!3d37.73387017208768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7f02449cda7b%3A0x56b4d414afddd65!2sSilver%20Terrace%2C%20San%20Francisco%2C%20Kalifornien%2094124%2C%20USA!5e0!3m2!1ssv!2sse!4v1708970830576!5m2!1ssv!2sse"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
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
  );
}

export default MediaCenter;
