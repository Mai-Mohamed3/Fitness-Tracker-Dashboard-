import React, { useState } from "react";
import "../Style/RegisterPage.css";
import { useNavigate } from "react-router-dom";

const RegisterPage6 = () => {
  const [birthDate, setBirthDate] = useState("");
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    console.log("Selected birth date:", birthDate);
    navigate("/RegisterPage7");
  };

  return (
    <div className="container">
      <div className="left-section"></div>

      <div className="register-container right-section">
        <h2 className="register-title">Select birth date</h2>
        <p className="step-text">Step 3 of 8</p>

        <form onSubmit={handleContinue} className="register-form">
          <div className="calendar-wrapper">
            <input
              type="date"
              className="birthdate-input"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              required
            />
          </div>

          <div className="register-buttons">
            <button
              type="button"
              className="back-btn"
              onClick={() => navigate("/RegisterPage5")}>
              Back
            </button>
            <button type="submit" className="next-btn">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage6;
