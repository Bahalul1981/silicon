import React from "react";

function Logo() {
  return (
    <div className="header__logo">
      <img
        src={process.env.PUBLIC_URL + "/property/image/logo.png"}
        alt="Logo"
      />
    </div>
  );
}

export default Logo;
