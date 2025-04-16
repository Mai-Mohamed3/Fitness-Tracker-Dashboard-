import React from 'react';
import '../Style/Traning.css';
import img1 from '../assets/Images/1.png';
import img2 from '../assets/Images/2.jpg';
import img3 from '../assets/Images/3.png';
import img4 from '../assets/Images/4.png';
import img5 from '../assets/Images/5.png';
import img6 from '../assets/Images/6.jpg';
import img7 from '../assets/Images/7.jpg';
import img8 from '../assets/Images/8.jpg';
import img9 from '../assets/Images/9.jpg';
import img10 from '../assets/Images/10.jpg';
import img11 from '../assets/Images/11.jpg';
import img12 from '../assets/Images/12.jpg';


const Activity = () => {
  return (
    <div className="container training">    
        <h1>Activities</h1>
        <p>Here is your daily activities & reports</p>
      <div className="filters">
        <button className="filter-btn">Clear All</button>
        <button className="filter-btn active">Beginner</button>
        <button className="filter-btn">Medium</button>
        <button className="filter-btn">Advanced</button>
        <button className="filter-btn">10-20 min</button>
        <button className="filter-btn">20-40 min</button>
      </div>

        <div className="card-grid">

            <div className="card">
                <div className="card-img">
                <img src={img1} alt="Training 1" />
                <span className="heart">♡</span>
                </div>
                <div className="card-content">
                <h3>Strength and Conditioning</h3>
                <p><span className="level">Beginner</span> • 42 min</p>
                </div>
            </div>

            <div className="card">
                <div className="card-img">
                <img src={img3} alt="Training 3" />
                <span className="heart">♡</span>
                </div>
                <div className="card-content">
                <h3>Power Yoga Flow</h3>
                <p><span className="level">Beginner</span> • 20 min</p>
                </div>
            </div>

            <div className="card">
                <div className="card-img">
                <img src={img4} alt="Training 4" />
                <span className="heart">♡</span>
                </div>
                <div className="card-content">
                <h3>High-Intensity Interval</h3>
                <p><span className="level">Beginner</span> • 33 min</p>
                </div>
            </div>

            <div className="card">
                <div className="card-img">
                <img src={img5} alt="Training 5" />
                <span className="heart">♡</span>
                </div>
                <div className="card-content">
                <h3>Pilates Reformer Class</h3>
                <p><span className="level">Beginner</span> • 10 min</p>
                </div>
            </div>

            <div className="card">
                <div className="card-img">
                <img src={img6} alt="Training 6" />
                <span className="heart">♡</span>
                </div>
                <div className="card-content">
                <h3>Functional Core Training</h3>
                <p><span className="level">Beginner</span> • 60 min</p>
                </div>
            </div>

            <div className="card">
                <div className="card-img">
                <img src={img7} alt="Training 7" />
                <span className="heart">♡</span>
                </div>
                <div className="card-content">
                <h3>Calisthenics Strength Training</h3>
                <p><span className="level">Beginner</span> • 25 min</p>
                </div>
            </div>

            <div className="card">
                <div className="card-img">
                <img src={img8} alt="Training 8" />
                <span className="heart">♡</span>
                </div>
                <div className="card-content">
                <h3>Yoga for Stress Relief</h3>
                <p><span className="level">Beginner</span> • 20 min</p>
                </div>
            </div>

            <div className="card">
                <div className="card-img">
                <img src={img2} alt="Training 2" />
                <span className="heart">♡</span>
                </div>
                <div className="card-content">
                <h3>Body Sculpting Circuit</h3>
                <p><span className="level">Beginner</span> • 50 min</p>
                </div>
            </div>

            <div className="card">
                <div className="card-img">
                <img src={img9} alt="Training 9" />
                <span className="heart">♡</span>
                </div>
                <div className="card-content">
                <h3>Power Yoga Flow</h3>
                <p><span className="level">Beginner</span> • 35 min</p>
                </div>
            </div>

            <div className="card">
                <div className="card-img">
                <img src={img10} alt="Training 10" />
                <span className="heart">♡</span>
                </div>
                <div className="card-content">
                <h3>Rapid Lower Body</h3>
                <p><span className="level">Beginner</span> • 40 min</p>
                </div>
            </div>

            <div className="card">
                <div className="card-img">
                <img src={img11} alt="Training 11" />
                <span className="heart">♡</span>
                </div>
                <div className="card-content">
                <h3>Rapid Lower Body 2</h3>
                <p><span className="level">Beginner</span> • 30 min</p>
                </div>
            </div>

            <div className="card">
                <div className="card-img">
                <img src={img12} alt="Training 12" />
                <span className="heart">♡</span>
                </div>
                <div className="card-content">
                <h3>Rapid Lower Body 3</h3>
                <p><span className="level">Beginner</span> • 15 min</p>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Activity;
