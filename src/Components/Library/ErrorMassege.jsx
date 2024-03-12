import React, { useState, useEffect } from "react";

function ErrorMassege() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {visible && (
        <div className="faield-message">
          <i class="fa-solid fa-wrench"></i>
          <span className="success-text">Vi jobbar fortfarande på det</span>
        </div>
      )}
    </>
  );
}

export default ErrorMassege;
