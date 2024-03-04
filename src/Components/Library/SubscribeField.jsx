function SubscribeField() {
  const handleErrorMassege = () => {
    alert("Försöket misslyckades");
    window.location.href = "/error";
  };
  return (
    <div className="email-subscription">
      <div className="input-wrapper">
        <div className="icon-wrapper">
          <i class="fa-regular fa-envelope"></i>
        </div>
        <input type="email" placeholder="Your Email" />
      </div>
      <button
        type="submit"
        className="Subscribe-btn"
        onClick={handleErrorMassege}
      >
        Subscribe
      </button>
    </div>
  );
}

export default SubscribeField;
