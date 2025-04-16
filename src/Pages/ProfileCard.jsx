import React from 'react';
import '../Style/ProfileCard.css'; // تأكدي إن الملف موجود في المسار ده

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
          alt="avatar"
          className="profile-avatar"
        />
        <div>
          <h2 className="profile-name">Mary Smith</h2>
          <button className="go-premium">Go Premium</button>
        </div>
      </div>

      <div className="profile-stats">
        <div className="stat-box">
          <p>⚖️</p>
          <span>55 kg</span>
        </div>
        <div className="stat-box">
          <p>📏</p>
          <span>167 cm</span>
        </div>
        <div className="stat-box">
          <p>🎂</p>
          <span>26 Years</span>
        </div>
      </div>

      <div className="profile-info">
        <p><strong>Name:</strong><span> Mary Smith</span></p>
        <p><strong>Gender:</strong><span>Female</span> </p>
        <p><strong>Goal:</strong><span>Gain Weight</span></p>
      </div>

      <div className='setting'>
        <a href="/">Log in</a>
        <a href='/SupportCenter'>Contact Support</a>
        <a href='/Dashboard'>My Dashboard</a>

      </div>
    </div>
  );
};

export default ProfileCard;
