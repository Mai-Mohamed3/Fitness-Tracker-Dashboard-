import React, { useState } from "react";
import "../Style/RegisterPage.css";
import { useNavigate } from "react-router-dom";

const activitiesList = [
  { id: "cardio", label: "Cardio", emoji: "🏃" },
  { id: "power", label: "Power training", emoji: "🏋️" },
  { id: "stretch", label: "Stretch", emoji: "🤸" },
  { id: "dancing", label: "Dancing", emoji: "💃" },
  { id: "yoga", label: "Yoga", emoji: "🧘" },
];

const RegisterPage3 = () => {
  const [selectedActivities, setSelectedActivities] = useState([]);
  const navigate = useNavigate();

  const toggleActivity = (id) => {
    setSelectedActivities((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleContinue = (e) => {
    e.preventDefault();
    console.log("Selected Activities:", selectedActivities);
    navigate("/RegisterPage4");
  };

  return (
    <div className="container">
      <div className="left-section"></div>

      <div className="register-container right-section">
        <h2 className="register-title">Choose activities that interest</h2>
        <p className="step-text">Step 3 of 8</p>

        <form onSubmit={handleContinue} className="register-form">
          <div className="activities-options">
            {activitiesList.map((activity) => (
              <div
                key={activity.id}
                className={`activity-box ${
                  selectedActivities.includes(activity.id) ? "selected" : ""
                }`}
                onClick={() => toggleActivity(activity.id)}
              >
                <span>{activity.emoji}</span> {activity.label}
                {selectedActivities.includes(activity.id) && (
                  <span className="checkmark">✔️</span>
                )}
              </div>
            ))}
          </div>

          <div className="register-buttons">
            <button
              type="button"
              className="back-btn"
              onClick={() => navigate("/RegisterPage2")}
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

export default RegisterPage3;
