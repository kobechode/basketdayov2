import React, { useState } from "react";
import "./TrainDash.css";
import { useNavigate, Link } from "react-router-dom";

const TrainDash = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false); // New state to track button click

  const handleLogout = () => {
    alert("You have been logged out successfully.");
    navigate("/"); // Redirect to the login page
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsButtonClicked(true); // Hide the button after it is clicked
  };

  return (
    <div className="TrainDashboard">
      <div className="container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar__container">
            <Link to="/" className="navbar__logo">
             Training Camp
            </Link>
            {/* Conditionally render the button only if it's not clicked */}
            {!isButtonClicked && (
              <button
                className="navbar__toggle"
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
              >
                ☰
              </button>
            )}
            <ul className={`navbar__menu ${isMenuOpen ? "navbar__menu--open" : ""}`}>
              {isMenuOpen && (
                <li className="navbar__item">
                  <button className="navbar__logout" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <div className="projects__wrapper">
          {/* Project 1 */}
          <div className="pr1">
            <img
              className="w-[450px] h-[350px]"
              src="https://github.com/kobechode/CCT2/blob/master/BucalCamp.png?raw=true"
              alt="WSBC BALLERS"
            />
            <p>Bucal Camp</p>
            <div className="desc1">
              <p>
                This is a pickup basketball game that takes place on Monday,
                Tuesday, Wednesday, Friday, and Saturday from 6:00 PM to 9:00
                PM at Glenwood Park Subdivision. Players of all skill levels are
                welcome to join and enjoy a friendly yet competitive basketball
                environment. Please note that registration is required, and
                slots are limited to ensure a fair and organized game. Make sure
                to arrive on time and bring the necessary gear to participate.
              </p>
            </div>
            <Link to="/bucalcamp">Join now</Link>
          </div>

           
        </div>
      </div>
    </div>
  );
};

export default TrainDash;
