import React from "react";
import "../Style/SupportCenter.css";

const SupportCenter = () => {
  return (
    <div className="support-center">
      <header className="header">
        <h1>Welcome to Fitoozone</h1>
        <p className="subtitle">How can we help you?</p>
      </header>

      <div className="search-luck-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search help articles..."
            className="search-bar"
          />
          <button className="search-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
        <button className="luck-button">TRY YOUR LUCK</button>
      </div>

      <div className="help-section">
        <h3>Need help? We've got your back</h3>
        <p>Perhaps you can find the answers in our collections</p>
      </div>

      <div className="categories-grid">
        <div className="category-card">
          <h3>Getting Started</h3>
          <p>Start off on the right foot! Not the left one!</p>
        </div>

        <div className="category-card">
          <h3>Account Settings</h3>
          <p>You're a special snowlizie and so is your account</p>
        </div>

        <div className="category-card">
          <h3>Billing</h3>
          <p>That feel when you look at your bank account</p>
        </div>

        <div className="category-card">
          <h3>Trust & Safety</h3>
          <p>Keep things safe & sound for you and your buddies</p>
        </div>

        <div className="category-card">
          <h3>FAQ</h3>
          <p>All you can eat self-serve problem solving</p>
        </div>

        <div className="category-card">
          <h3>Community</h3>
          <p>Bringing people together from all over the world</p>
        </div>

        <div className="category-card">
          <h3>Server Setup</h3>
          <p>Almost as exciting as interior decorating</p>
        </div>

        <div className="category-card">
          <h3>Interface</h3>
          <p>What does this button do</p>
        </div>
      </div>

      <footer className="footer">
        <div className="social-icons">
          <p>Other ways to get help:</p>
          <a href="#" className="social-icon" aria-label="Twitter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#1DA1F2"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a href="#" className="social-icon" aria-label="Reddit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#FF5700"
            >
              <path d="M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.285-1.84.746-1.814-1.191-4.271-1.949-6.971-2.036l1.483-4.674 4.057.972c.027.643.551 1.155 1.205 1.155 1.158 0 2.098-.94 2.098-2.098s-.94-2.098-2.098-2.098c-.929 0-1.711.607-1.971 1.437l-4.526-1.085c-.299-.072-.611.112-.683.411l-1.793 5.651c-2.88.051-5.47.825-7.352 2.067-.488-.46-1.126-.745-1.84-.745-1.465 0-2.657 1.186-2.657 2.645 0 1.096.666 2.037 1.618 2.445-.041.287-.062.58-.062.879 0 3.925 4.549 7.109 10.161 7.109s10.161-3.184 10.161-7.109c0-.299-.021-.592-.062-.879.952-.408 1.618-1.349 1.618-2.445zm-16.663 1.935c0-.869.705-1.573 1.573-1.573s1.573.705 1.573 1.573-.705 1.573-1.573 1.573-1.573-.705-1.573-1.573zm7.452 5.306c-.693.693-1.87.723-2.789.723-.919 0-2.096-.03-2.789-.723-.357-.357-.357-.936 0-1.293.357-.357.936-.357 1.293 0 .531.531 1.496.616 1.496.616s.965-.085 1.496-.616c.357-.357.936-.357 1.293 0 .357.357.357.936 0 1.293zm-.351-3.733c-.869 0-1.573-.705-1.573-1.573s.705-1.573 1.573-1.573 1.573.705 1.573 1.573-.705 1.573-1.573 1.573z" />
            </svg>
          </a>
          <a href="#" className="social-icon" aria-label="Discord">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#5865F2"
            >
              <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v19.056c0 1.368-1.104 2.472-2.46 2.472h-15.08c-1.356 0-2.46-1.104-2.46-2.472v-19.056c0-1.368 1.104-2.472 2.46-2.472h15.08zm-4.632 15.672c2.652-.84 3.691-2.653 3.691-2.653-1.104-.78-2.153-1.272-3.242-1.614l-.168-.048c-1.668-.468-3.237-.576-4.514-.396-.72.096-1.392.24-1.992.48-.48.168-.912.384-1.296.624-.144.096-.288.192-.408.288-.168.12-.312.216-.432.312-.096.072-.168.144-.24.192-.36.264-.576.408-.576.408s1.056-1.896 3.708-2.736c-2.652-.84-5.22.984-5.22.984s-1.056 1.896-3.708 2.736c2.652.84 3.708 2.736 3.708 2.736s-2.568 1.824-5.22.984c0 0-1.056-1.896-3.708-2.736 0 0 1.032 2.016 3.684 2.856 0 0 .456.384 1.248.72 1.44.576 3.144 1.2 5.76 1.296 1.848.072 3.96-.264 5.76-1.296.84-.336 1.248-.72 1.248-.72 2.652-.84 3.684-2.856 3.684-2.856-2.652.84-5.22-.984-5.22-.984zm-8.976-5.04c-.792 0-1.44.672-1.44 1.488s.648 1.488 1.44 1.488c.792 0 1.44-.672 1.44-1.488s-.648-1.488-1.44-1.488zm6.336 0c-.792 0-1.44.672-1.44 1.488s.648 1.488 1.44 1.488c.792 0 1.44-.672 1.44-1.488s-.648-1.488-1.44-1.488z" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default SupportCenter;
