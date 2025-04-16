import React, { useState } from "react";
import "../Style/RegisterPage.css";
import { useNavigate } from "react-router-dom";

const trainingLevels = [
  {
    id: "beginner",
    title: "Beginner",
    description: "I want to start training",
  },
  {
    id: "irregular",
    title: "Irregular training",
    description: "I train 1–2 times a week",
  },
  {
    id: "medium",
    title: "Medium",
    description: "I train 3–5 times a week",
  },
  {
    id: "advanced",
    title: "Advanced",
    description: "I train more than 5 times a week",
  },
];

const RegisterPage7 = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    console.log("Selected Level:", selectedLevel);
    navigate("/RegisterPage8");
  };

  return (
    <div className="container">
      <div className="left-section"></div>

      <div className="register-container right-section">
        <h2 className="register-title">Choose training level</h2>
        <p className="step-text">Step 7 of 8</p>

        <form onSubmit={handleContinue} className="register-form">
          <div className="training-level-options">
            {trainingLevels.map((level) => (
              <div
                key={level.id}
                className={`training-level-box ${
                  selectedLevel === level.id ? "selected" : ""
                }`}
                onClick={() => setSelectedLevel(level.id)}
              >
                <h3>{level.title}</h3>
                <p>{level.description}</p>
              </div>
            ))}
          </div>

          <div className="register-buttons">
            <button
              type="button"
              className="back-btn"
              onClick={() => navigate("/RegisterPage6")}
            >
              Back
            </button>
            <button type="submit" className="next-btn" disabled={!selectedLevel}>
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage7;
