import React, { useState } from "react";
import "../Style/RegisterPage.css";
import { useNavigate } from "react-router-dom";

const RegisterPage4 = () => {
  const [unit, setUnit] = useState("cm");
  const [height, setHeight] = useState("");
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    console.log("Height:", height, unit);
    navigate("/RegisterPage5"); 
  };

  return (
    <div className="container">
      <div className="left-section"></div>

      <div className="register-container right-section">
        <h2 className="register-title">How tall are you?</h2>
        <p className="step-text">Step 4 of 8</p>

        <form onSubmit={handleContinue} className="height-form">
          <div className="unit-toggle">
            <button
              type="button"
              className={unit === "ft" ? "unit-btn active" : "unit-btn"}
              onClick={() => setUnit("ft")}
            >
              Feet
            </button>
            <button
              type="button"
              className={unit === "cm" ? "unit-btn active" : "unit-btn"}
              onClick={() => setUnit("cm")}
            >
              Centimetre
            </button>
          </div>

          <div className="height-input-wrapper">
            <input
              type="number"
              className="height-input"
              placeholder="0"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
            <span className="unit-label">{unit}</span>
          </div>

          <div className="register-buttons">
            <button
              type="button"
              className="back-btn"
              onClick={() => navigate("/RegisterPage3")}
            >
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

export default RegisterPage4;
