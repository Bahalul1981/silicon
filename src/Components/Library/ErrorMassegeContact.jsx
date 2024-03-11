import React from "react";
import { Icon } from "@blueprintjs/core";
function ErrorMassegeContact({ errorMessage = "" }) {
  return (
    <div>
      <div className="error-contact-message">
        <Icon icon="cross-circle" iconSize={25} color="red" />
        <span className="failed-text">
          {errorMessage && `${errorMessage} `}
          <span>
            <i class="fa-solid fa-face-sad-tear"></i>
          </span>
        </span>
      </div>
    </div>
  );
}

export default ErrorMassegeContact;
