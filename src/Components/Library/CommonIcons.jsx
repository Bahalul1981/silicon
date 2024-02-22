import React from "react";

function ArrowRight() {
  return (
    <div>
      <div className="iconTwo">
        <a href="#">
          <div className="round-cirkel">
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </a>
      </div>
    </div>
  );
}

function Arrowleft() {
  return (
    <div className="iconOne">
      <a href="#">
        <div className="round-cirkel">
          <i className="fa-solid fa-chevron-left"></i>
        </div>
      </a>
    </div>
  );
}

export { ArrowRight, Arrowleft };
