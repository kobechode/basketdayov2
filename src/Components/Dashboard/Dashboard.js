// DashboardJs.js
import './Dashboard.css';
import { useState } from "react";
import { BsList } from 'react-icons/bs';
import { Link, useNavigate } from "react-router-dom";

export default function DashboardJs() {
    const slides = [
        { url: 'https://github.com/kobechode/CCT2/blob/master/Basketball-court.jpg?raw=true' },
        { url: 'https://github.com/kobechode/CCT2/blob/master/Coach%202.jpg?raw=true' },
        { url: 'https://github.com/kobechode/CCT2/blob/master/Venue.jpg?raw=true' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
    };

    const nextSlide = () => {
        setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
    };

    const handleLogout = () => {
        console.log("User logged out");
        navigate("/");
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='Dashboard'>
            <nav className="navbar">
                {!isMenuOpen && (
                    <div className="menu-icon" onClick={toggleMenu}>
                        <BsList size={40} />
                    </div>
                )}
                <ul className={`menu-list ${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center`}>
                    <li>
                        <button className="logout-buttonDb" onClick={handleLogout}>Logout</button>
                    </li>
                </ul>
            </nav>

            <div className="my-slider flex gap-12">
                <div className="Img1">
                    <Link to="/PickupDash">
                        <img className="w-[350px] h-[250px]" src={slides[0].url} alt="Basketball Court" />
                        <div className='card-content'>
                            <h1>Pickup Games</h1>
                        </div>
                    </Link>
                </div>
                <div className='Img2'>
                    <img className="w-[350px] h-[250px]" src={slides[1].url} alt="Coaching Session" />
                    <div className='card-content'>
                        <h1>Coaching Session</h1>
                    </div>
                </div>
                <div className='Img3'>
                    <img className="w-[350px] h-[250px]" src={slides[2].url} alt="Venue Reservation" />
                    <div className='card-content'>
                        <h1>Venue Reservation</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
