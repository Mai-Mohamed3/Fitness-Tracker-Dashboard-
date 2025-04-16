import React from 'react';
import ProfileCard from "./Pages/ProfileCard";
import DailyReport from "./Pages/DailyReport";
import '../Style/Profile.css'; // هنضيف فيه ستايلنا كمان

const Profile = () => {
    return (
        <div className="profile-page-container">
          <div className="card-section">
            <ProfileCard />
            <DailyReport />
          </div>
        </div>
      );
};

export default Profile;
