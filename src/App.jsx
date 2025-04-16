import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import RegisterPage from "./Pages/RegisterPage";
import RegisterPage2 from "./Pages/RegisterPage2";
import RegisterPage3 from "./Pages/RegisterPage3";
import RegisterPage4 from "./Pages/RegisterPage4";
import RegisterPage5 from "./Pages/RegisterPage5";
import RegisterPage6 from "./Pages/RegisterPage6";
import RegisterPage7 from "./Pages/RegisterPage7";
import RegisterPage8 from "./Pages/RegisterPage8";
import ProfileCard from "./Pages/ProfileCard";
import WeightTracking from "./Pages/WeightTracking";
import DailyReport from "./Pages/DailyReport";
import Dashboard from "./Pages/Dashboard";
import LandingPage from "./Pages/LandingPage";
import SupportCenter from "./Pages/SupportCenter";
import Training from "./Pages/Training";
import Activity from "./Pages/Activity";
import "./Style/Profile.css";
import "./App.css"

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/RegisterPage" element={<RegisterPage />} />
          <Route path="/RegisterPage2" element={<RegisterPage2 />} />
          <Route path="/RegisterPage3" element={<RegisterPage3 />} />
          <Route path="/RegisterPage4" element={<RegisterPage4 />} />
          <Route path="/RegisterPage5" element={<RegisterPage5 />} />
          <Route path="/RegisterPage6" element={<RegisterPage6 />} />
          <Route path="/RegisterPage7" element={<RegisterPage7 />} />
          <Route path="/RegisterPage8" element={<RegisterPage8 />} />
          <Route
          path="/profile"
          element={
            <div className="profile-page-container">
              <div className="card-section">
                <ProfileCard />
                <DailyReport />
              </div>
              <div style={{ marginTop: '2rem' }}>
                <WeightTracking />
              </div>
            </div>
          }
        />
        <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path="/Training" element={<Training />} />
        <Route path="/Activity" element={<Activity />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/SupportCenter" element={<SupportCenter />} />
      </Routes>
    </Router>
  );
}

export default App;
