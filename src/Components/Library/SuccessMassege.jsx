import { Icon } from "@blueprintjs/core";

const SuccessMessage = ({ successMessage }) => {
  return (
    <>
      <div className="success-message">
        <Icon icon="tick-circle" iconSize={25} color="green" />
        <span className="success-text">
          {successMessage && `${successMessage} `}
        </span>
      </div>
    </>
  );
};

export default SuccessMessage;
