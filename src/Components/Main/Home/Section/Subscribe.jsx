import React from "react";
import notification from "../../../../style/assets/Image/MakeYourMoney/notification.svg";
import SubscribeField from "../../../Library/SubscribeField";
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
      <SubscribeField />
    </div>
  );
}

export default Subscribe;
