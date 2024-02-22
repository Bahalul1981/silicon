import React from "react";
import Subscribe from "./Subscribe";

function HomeFooter() {
  return (
    <>
      <Subscribe />
      <div className="homeFooter-main-div">
        <div className="footer-logo">
          <img src="" alt="logo" />
        </div>
        <div className="nav-bar"></div>
        <div className="app-icon"></div>
        <div className="socialmedia-icon">
          <div className="link-icon">
            <img src="" alt="facebook" />
          </div>
          <div className="link-icon">
            <img src="" alt="twiter" />
          </div>
          <div className="link-icon">
            <img src="" alt="instram" />
          </div>
          <div className="link-icon">
            <img src="" alt="youtube" />
          </div>
        </div>
        <div className="">
          <p>
            {" "}
            <p>
              &copy; {new Date().getFullYear()} Silicon. All rights reserved.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magni
              numquam excepturi alias harum quis, totam maiores provident
              aspernatur.
            </p>
          </p>
        </div>
      </div>
    </>
  );
}

export default HomeFooter;
