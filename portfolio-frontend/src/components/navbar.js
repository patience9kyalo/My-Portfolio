import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <h1>My Portfolio</h1>

      {/* Hamburger Button */}
      <button className="hamburger" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'}
      </button>

      {/* Navbar Links */}
      <ul className={isOpen ? 'nav-links open' : 'nav-links'}>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
        <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
        <li><a href="#certificates" onClick={toggleMenu}>Certificates</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
