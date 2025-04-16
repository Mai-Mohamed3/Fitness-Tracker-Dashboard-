import React, { useState } from "react";
import "../Style/RegisterPage.css";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Password and Confirm Password do not match.");
    } else {
      setError("");
      console.log("Step 1 Data:", formData);
      navigate("/RegisterPage2");
    }
  };

  return (
    <div className="container">
      <div className="left-section"></div>

      <div className="register-container right-section">
        <h2 className="logo">
          <img src="./src/assets/Images/Workout-bold.png" alt="" /> Fitoozone
        </h2>
        <h2 className="register-title">Create New Account</h2>
        <p className="step-text">Step 1 of 8</p>

        <form onSubmit={handleNext} className="register-form">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          {error && <p className="error-message">{error}</p>}

          <div className="register-buttons">
            <button
              type="button"
              className="back-btn"
              onClick={() => navigate("/")}
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
            <a href="#">
              <FaApple className="icon" />
            </a>
            <a href="#">
              <FaFacebook className="icon" />
            </a>
            <a href="#">
              <FaGoogle className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
