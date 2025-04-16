import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import '../Style/Dashboard.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const sleepData = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Sleep (hrs)',
        data: [4.5, 7.2, 2.8, 8.0, 6.5, 9.3, 7.8],
        backgroundColor: '#2DE1C2'
      }
    ]
  };

  const fitnessData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Fitness Score',
        data: [20, 45, 60, 82],
        borderColor: '#00CFFF',
        backgroundColor: 'rgba(0, 207, 255, 0.1)',
        fill: true
      }
    ]
  };

  return (
    <div className="layout">
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <h2>Fitoozone</h2>
        <ul>
          <li><Link to="/Dashboard">Dashboard</Link></li>
          <li><Link to="/training">Training</Link></li>
          <li><Link to="/activity">Activity</Link></li>
          <li><Link to="/profile">My Profile</Link></li>
          <li><Link to="/SupportCenter">Help</Link></li>
          <li><Link to="/">Log out</Link></li>
        </ul>
      </div>

      <div className="dashboard-container">
        <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
          ☰
        </button>

        <div className="dashboard-grid">
          <div className="dashboard-card chart-animate chart-delay-1">
            <h2>Sleep</h2>
            <Bar
              data={sleepData}
              options={{
                responsive: true,
                animation: {
                  duration: 1500,
                  easing: 'easeOutBounce'
                }
              }}
            />
          </div>

          <div className="dashboard-card chart-animate chart-delay-2">
            <h2>Last Training</h2>
            <p className="highlight">55 minutes</p>
          </div>

          <div className="dashboard-card chart-animate chart-delay-3">
            <h2>Fitness Tracker</h2>
            <Line
              data={fitnessData}
              options={{
                responsive: true,
                animation: {
                  duration: 2000,
                  easing: 'easeInOutQuart'
                }
              }}
            />
            <p className="highlight">82%</p>
          </div>

          <div className="dashboard-card chart-animate chart-delay-4">
            <h2>Calories</h2>
            <p className="highlight">2200 Kcal</p>
            <p className="note">2000 cal of 3200 cal</p>
          </div>

          <div className="dashboard-card chart-animate chart-delay-5">
            <h2>Activity</h2>
            <p className="highlight">2032 Steps</p>
          </div>

          <div className="dashboard-card chart-animate chart-delay-6">
            <h2>Water</h2>
            <p className="highlight">4L</p>
            <p className="note">8 glasses per day</p>
          </div>
        </div>

        <div className="dashboard-table">
          <h2>Food</h2>
          <table>
            <thead>
              <tr>
                <th>Food</th>
                <th>Meal</th>
                <th>Calories</th>
                <th>Priorities</th>
                <th>Carbs</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(3)].map((_, i) => (
                <tr key={i}>
                  <td>Burrito</td>
                  <td>Pizza Burger</td>
                  <td>Receiving</td>
                  <td>01:00 AM</td>
                  <td>20 gm</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="dashboard-achievements">
          <div className="achievement purple">
            <p className="value">5000</p>
            <p>Sets</p>
          </div>
          <div className="achievement red">
            <p className="value">550</p>
            <p>Kcal</p>
          </div>
          <div className="achievement blue">
            <p className="value">25</p>
            <p>Poses</p>
          </div>
          <div className="achievement orange">
            <p className="value">135</p>
            <p>hours</p>
          </div>
          <div className="achievement green">
            <p className="value">500</p>
            <p>Sets</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
