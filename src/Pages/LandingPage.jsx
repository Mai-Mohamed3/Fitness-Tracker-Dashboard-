import React from "react";
import "../Style/LandingPage.css";
import preview from "../assets/Images/phone-preview.jpg";

const LandingPage = () => {
  return (
    <div className="hero-section">
      <div className="page-header">Fitoozone</div>

      <div className="content-container">
        <div className="text-content">
          <p className="eyebrow">#1 nutrition tracking app</p>
          <h1 className="title">
            Nutrition tracking
            <br />
            for <span className="highlight">real life</span>
          </h1>
          <p className="description">
            Make progress with the all-in-one food, exercise, and calorie
            tracker.
          </p>
          <button className="cta-button">START TODAY &gt;</button>
        </div>

        <div className="image-container">
          {/* Add your phone image file in src and update the path */}
          <img src={preview} alt="App interface" className="phone-image" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
