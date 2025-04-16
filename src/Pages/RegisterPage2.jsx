import React, { useState } from "react";
import "../Style/RegisterPage.css";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [selectedGender, setSelectedGender] = useState("");

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (!selectedGender) {
      alert("Please select your gender.");
    } else {
      console.log("Selected Gender:", selectedGender);
      navigate("/RegisterPage3");
    }
  };

  return (
    <div className="container">
      <div className="left-section"></div>

      <div className="register-container right-section">
        <h2 className="logo">
          <img src="./src/assets/Images/Workout-bold.png" alt="" /> Fitoozone
        </h2>
        <h2 className="register-title">Choose gender</h2>
        <p className="step-text">Step 2 of 8</p>

        <form onSubmit={handleNext} className="register-form">
          <div className="gender-options">
            <div
              className={`gender-box ${selectedGender === "woman" ? "selected" : ""}`}
              onClick={() => handleGenderSelect("woman")}>
              👩 Woman
            </div>
            <div
              className={`gender-box ${selectedGender === "man" ? "selected" : ""}`}
              onClick={() => handleGenderSelect("man")}>
              👨 Man
            </div>
          </div>

          <div className="register-buttons">
            <button
              type="button"
              className="back-btn"
              onClick={() => navigate("/RegisterPage")}
            >
              Back
            </button>
            <button type="submit" className="next-btn">
              Next
            </button>
          </div>
        </form>

        <div className="social-signin">
          <p className="p3">Sign in with</p>
          <div className="icons">
            <a href="#"><FaApple className="icon" /></a>
            <a href="#"><FaFacebook className="icon" /></a>
            <a href="#"><FaGoogle className="icon" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
