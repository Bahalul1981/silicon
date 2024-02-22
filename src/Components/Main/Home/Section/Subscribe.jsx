import React from "react";
import notification from "../../../../style/assets/Image/MakeYourMoney/notification.svg";
function Subscribe() {
  return (
    <div className="notification-wrapper">
      <div className="notification">
        <div>
          <img src={notification} alt="notification" className="notification" />
        </div>
        <div className="latest-update">
          <h4>
            Subscribe to our newsletter to stay <br />
            informed about latest updates
          </h4>
        </div>
      </div>
      <div className="email-subscription">
        <div className="input-wrapper">
          <div className="icon-wrapper">
            <i class="fa-regular fa-envelope"></i>
          </div>
          <input type="email" placeholder="Your Email" />
        </div>
        <button type="submit" className="Subscribe-btn">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Subscribe;
