import React, { useState } from 'react';
import Logo from './asset/logo.png';
import Vector from './asset/pages.png';
import Group from './asset/Group.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
};

return(
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
        </ul>
        </nav>
        <div className="welcome-section">
        <motion.div 
        className="group-container"
        initial={{ x: 100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 1 }} 
        >
        <motion.img
            src={Group}
            alt="Group"
            className="Group"  
        />
        </motion.div>        
        <div className='wel-container'>
            <h2>WELCOME</h2>
            <h1>Lorem ipsum dolor sit amet consectetur</h1>
            <p>Lorem ipsum, dolor sit amet consectetur<br /> adipisicing elit. Suscipit nemo hic quos, ab,<br /> dolor aperiam nobis cum set cos error<br /> ipsum,volimptate culpan nesciunt delectus<br /> iste?</p>
            <button className="explore-button">Explore</button>

        </div>
    
        
    </div>

    </header>

    );
};

export default Header;
