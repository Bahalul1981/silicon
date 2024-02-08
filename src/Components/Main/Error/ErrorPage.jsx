import React from "react";
import HeaderPage from "../../Header/HeaderPage";

function ErrorPage() {
  return (
    <div>
      <HeaderPage />
      <div className="error-page">
        <img src="" alt="404" />
        <h3>Ooops!</h3>
        <p>The page you are looking for is not available</p>
        <button>
          <img src="" alt="home-logo" />
          <p>Go to homepage</p>
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
