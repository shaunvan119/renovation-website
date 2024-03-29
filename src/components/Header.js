import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram } from 'react-icons/ai';
import { ImPinterest2 } from 'react-icons/im';



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="header">
      <Link style={{textDecoration: 'none', color: 'inherit', }}  to="/"><img className="logo" src={logo} alt="logo"/></Link>
      <div className="icons-container">
      <a style={{textDecoration: 'none', color: 'inherit', }}  href="https://www.facebook.com/profile.php?id=100091332464688"><FaFacebookF /></a>
      <a style={{textDecoration: 'none', color: 'inherit', }}  href="https://www.instagram.com/"><AiOutlineInstagram /></a>
      <a style={{textDecoration: 'none', color: 'inherit', }}  href="https://www.pinterest.com.au/"><ImPinterest2 /></a>
      </div>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <Link style={{textDecoration: 'none', color: 'inherit', }}  to="/about"><li className="nav__options">About</li></Link>
          <Link style={{textDecoration: 'none', color: 'inherit', }}  to="/project"><li className="nav__options">Projects</li></Link>
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

