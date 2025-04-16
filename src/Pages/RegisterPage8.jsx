import React, { useState } from "react";
import "../Style/RegisterPage.css";
import { useNavigate } from "react-router-dom";

const goalsList = [
  { id: "lose_weight", label: "Lose weight", emoji: "⚖️" },
  { id: "keep_fit", label: "Keep fit", emoji: "🍀" },
  { id: "get_stronger", label: "Get stronger", emoji: "💪" },
  { id: "gain_muscle", label: "Gain muscle mass", emoji: "🏋️" },
];

const RegisterPage8 = () => {
  const [selectedGoal, setSelectedGoal] = useState(null);
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    console.log("Selected Goal:", selectedGoal);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="left-section"></div>

      <div className="register-container right-section">
        <h2 className="register-title">Choose main goal</h2>
        <p className="step-text">Step 8 of 8</p>

        <form onSubmit={handleContinue} className="register-form">
          <div className="goals-options">
            {goalsList.map((goal) => (
              <div
                key={goal.id}
                className={`goal-box ${selectedGoal === goal.id ? "selected" : ""}`}
                onClick={() => setSelectedGoal(goal.id)}
              >
                <span className="goal-emoji">{goal.emoji}</span>
                <span className="goal-label">{goal.label}</span>
              </div>
            ))}
          </div>

          <div className="register-buttons">
            <button
              type="button"
              className="back-btn"
              onClick={() => navigate("/RegisterPage7")}
            >
              Back
            </button>
            <button type="submit" className="lets-btn" disabled={!selectedGoal}>
              Let's Start💪
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage8;
