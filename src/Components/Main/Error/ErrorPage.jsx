import React from "react";
import HeaderPage from "../../Header/HeaderPage";
import erroLogo from "../../../style/assets/Image/404.svg";
import vector from "../../../style/assets/Image/Vector.png";
import Copyright from "../../Library/Copyright";
function ErrorPage() {
  const goToHomepage = () => {
    window.location.href = "/";
  };
  return (
    <div>
      <HeaderPage />
      <div className="wrapper-error-page">
        <div className="content">
          <img src={erroLogo} alt="404" />
          <h2>Ooops!</h2>
          <p>The page you are looking for is not available</p>
          <button className="back-to-main login-logout" onClick={goToHomepage}>
            <img src={vector} alt="" />
            <span>Go to homepage</span>
          </button>
        </div>
        <div className="copyright">
          <Copyright />
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
