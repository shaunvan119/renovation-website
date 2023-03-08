import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";




const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo"/>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <Link style={{textDecoration: 'none', color: 'inherit', }}  to="/about"><li className="nav__options">About</li></Link>
          <Link style={{textDecoration: 'none', color: 'inherit', }}  to="/projects"><li className="nav__options">Projects</li></Link>
          <Link style={{textDecoration: 'none', color: 'inherit', }}  to="/news"><li className="nav__options">News</li></Link>
        </ul>
      </nav>
      <button className={`menu-button ${isMenuOpen ? "open" : ""}`} onClick={handleMenuClick}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default Header;

