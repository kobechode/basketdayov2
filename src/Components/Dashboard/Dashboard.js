import './Dashboard.css';
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { Link, useNavigate } from "react-router-dom";

export default function DashboardJs() {
    const slides = [
        { url: 'https://github.com/kobechode/CCT2/blob/master/Basketball-court.jpg?raw=true' },
        { url: 'https://github.com/kobechode/CCT2/blob/master/Coach%202.jpg?raw=true' },
        { url: 'https://github.com/kobechode/CCT2/blob/master/Venue.jpg?raw=true' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const handleLogout = () => {
        // Add your logout logic here
        console.log("User logged out");
        navigate("/login"); // Redirect to login page
    };

    return (
        <div className='Dashboard'>
          

            <div className="my-slider flex gap-12">

                  {/* Logout Button */}
            <div className="logout-container">
                <button className="logout-buttonDb" onClick={handleLogout}>
                    Logout
                </button>
            </div>
                <div className="Img1">
                    <Link to="/PickupDash">
                        <img className="w-[350px] h-[250px]" src="https://github.com/kobechode/CCT2/blob/master/Basketball-court.jpg?raw=true" alt="" />
                        <div className='card-content'>
                            <h1>Pickup Games</h1>
                        </div>
                    </Link>
                </div>

                <div className='Img2'>
                    <img className="w-[350px] h-[250px]" src="https://github.com/kobechode/CCT2/blob/master/Coach%202.jpg?raw=true" alt="" />
                    <div className='card-content'>
                        <h1>Coaching Session</h1>
                    </div>
                </div>

                <div className='Img3'>
                    <img className="w-[350px] h-[250px]" src="https://github.com/kobechode/CCT2/blob/master/Venue.jpg?raw=true" alt="" />
                    <div className='card-content'>
                        <h1>Venue Reservation</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
