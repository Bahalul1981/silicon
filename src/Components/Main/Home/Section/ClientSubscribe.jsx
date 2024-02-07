import React from "react";

function ClientSubscribe() {
  return (
    <div className="client-andSubcription-mainDiv">
      <div className="customer-comments">
        <div className="comments-text">
          <h3>Clients are Loving Our App</h3>
        </div>
        <div className="commentOne"></div>
        <div className="commentTwo"></div>
      </div>

      <div className="customet-questions">
        <div className="questin-one">
          {" "}
          <h3>Any questions? Check out the FAQs</h3>
          <p>Still have unanswerd questions and need to get in touch?</p>
        </div>
        <div className="question-logo">
          <div className="question-logoOne"></div>
          <div className="question-logo-two"></div>
        </div>
      </div>
      <div className="question-two">
        <div className="">
          <h5>In any fo personal information stored in the App?</h5>{" "}
          <img src="" alt="dropdownIcon" />
        </div>
        <div className="">
          <h5>What formats can I downloas my transaction history in?</h5>{" "}
          <img src="" alt="dropdownIcon" />
        </div>
        <div className="">
          <h5>Can I schedule future transfers?</h5>{" "}
          <img src="" alt="dropdownIcon" />
        </div>
        <div className="">
          <h5>When can I use banking App servics?</h5>{" "}
          <img src="" alt="dropdownIcon" />
        </div>
        <div className="">
          <h5>Can I create my own password that is easy for me to remember?</h5>{" "}
          <img src="" alt="dropdownIcon" />
        </div>
        <div className="">
          <h5>What happens if I forget or lose my password</h5>{" "}
          <img src="" alt="dropdownIcon" />
        </div>
      </div>
    </div>
  );
}

export default ClientSubscribe;
