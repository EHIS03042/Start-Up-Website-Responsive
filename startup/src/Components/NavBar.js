import React, { useState } from "react";
import { Link } from "react-router-dom";
import './NavBar.css'
import navlogo from '../images/navlogo.svg'
import hamburgerMenu from'../images/hamburgerMenu.png'

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);


    return (  
        <header className="home-header">
            <nav className="nav-bar">
        <div className="logo-title">
        <img src={navlogo} className="logo" alt="Logo" />
        <h2 className="start">Start</h2>
        </div>
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <img src={hamburgerMenu} className="menu-button" alt="Menu-Button"/>
            </div>

                 {/* Mobile Dropdown Menu */}
        <ul className={`nav-menu ${menuOpen ? "show-menu" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link></li>
        <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
        </ul>

                {/* Desktop Navigation */}
        <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </ul>
            </nav>
        </header>
        
    );
}

export default NavBar;