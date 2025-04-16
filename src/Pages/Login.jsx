import React, { useState } from "react";
import "../Style/Login.css";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validUsers = [
    { email: "mai.mo.alii3@gmail.com", password: "123456" },
    { email: "hussam123@gmail.com", password: "pass123" },
    { email: "lamiaa23@gmail.com", password: "fitoo123" },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    const userFound = validUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (userFound) {
      navigate("/Dashboard");
    } else {
      setErrorMessage("Email or password is incorrect.");
    }
  };

  return (
    <div className="container">
      <div className="left-section"></div>

      <div className="right-section">
        <h2 className="logo">
          <img src="./src/assets/Images/Workout-bold.png" alt="" /> Fitoozone
        </h2>
        <h2 className="title">Sign In ✌</h2>
        <p className="p1">
          Welcome to FitooZone. Start your effective workout routine today!
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/forgot">Forgot Password?</a>
          </div>

          {errorMessage && (
            <p style={{ color: "red", marginBottom: "10px" }}>{errorMessage}</p>
          )}

          <button type="submit" className="sign-in-btn">Sign In</button>
        </form>

        <p>
          Don't have an account?{" "}
          <Link to="./RegisterPage" className="signup-link">
            Create New Account
          </Link>
        </p>

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

export default Login;
