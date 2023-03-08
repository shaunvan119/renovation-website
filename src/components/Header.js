import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="header">
      <div className="logo">Logo</div>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#news">News</a></li>
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

