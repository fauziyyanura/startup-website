import React, { useState } from 'react';
import Vector from './asset/pages.png';
import { Link } from 'react-router-dom';
import Logo from './asset/logo.png';

const Nav = () => {
        const [menuOpen, setMenuOpen] = useState(false);

        const toggleMenu = () => {
            setMenuOpen(!menuOpen);
};

return (
    <header className="header">
        <div className="header-logo">
        <img src={Logo} alt="Start Logo" className="logo" />
        <span className="logo-text">Start</span>
        </div>

        <nav className="navbar">
        <div className="Menu" onClick={toggleMenu}>
            <img src={Vector} alt="Menu Icon" className="Menu-icon" />
        </div>
        <ul className={`nav-links ${menuOpen ? 'show' : ''}`} id="navLinks">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/service">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
        </nav>
    </header>
);
};

export default Nav;