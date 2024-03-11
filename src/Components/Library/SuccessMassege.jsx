import { Icon } from "@blueprintjs/core";

const SuccessMessage = () => {
  return (
    <>
      <div className="success-message">
        <Icon icon="tick-circle" iconSize={25} color="green" />
        <span className="success-text">
          The form has been received{" "}
          <span>
            <i class="fa-regular fa-face-smile" style={{ color: "green" }}></i>
          </span>
        </span>
      </div>
    </>
  );
};

export default SuccessMessage;
