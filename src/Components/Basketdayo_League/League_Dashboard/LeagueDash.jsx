import React, { useState } from "react";
import "./LeagueDash.css";
import { useNavigate, Link } from "react-router-dom";

const LeagueDashboard = () => {
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
    <div className="PickupDashboard">
      <div className="container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar__container">
            <Link to="/" className="navbar__logo">
              League Registration
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
              src="https://github.com/kobechode/CCT2/blob/master/WSBC2.png?raw=true"
              alt="WSBC BALLERS"
            />
            <p>WSBC BALLERS</p>
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
            <Link to="">Join now</Link>
          </div>

          {/* Project 2 */}
          <div className="pr2">
            <img
              className="w-[450px] h-[350px]"
              src="https://github.com/kobechode/CCT2/blob/master/WCBA.png?raw=true"
              alt="WCBA League"
            />
            <p>WCBA League</p>
            <div className="desc2">
              <p>
                This is a pickup basketball game that takes every Wednesday from
                9:00 PM to 12:00 PM at Glenwood Park Subdivision. Players of all
                skill levels are welcome to join and enjoy a friendly yet
                competitive basketball environment. Please note that
                registration is required, and slots are limited to ensure a fair
                and organized game. Make sure to arrive on time and bring the
                necessary gear to participate.
              </p>
            </div>
            <Link to="/wcbaleague">Join now</Link>
          </div>

          {/* Project 3 */}
          <div className="pr3">
            <img
              className="w-[850px] h-[650px]"
              src="https://github.com/kobechode/CCT2/blob/master/Teachers_Club.png?raw=true"
              alt="Teachers Club"
            />
            <p>Teachers Club</p>
            <div className="desc">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
            <Link to="">Join now</Link>
          </div>

          {/* Project 4 */}
          <div className="pr4">
            <img
              className="w-[550px] h-[450px]"
              src="https://github.com/kobechode/CCT2/blob/master/Ayala.png?raw=true"
              alt="Ayala Ballers"
            />
            <p>Ayala Ballers</p>
            <div className="desc4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
            <Link to="">Join now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeagueDashboard;
