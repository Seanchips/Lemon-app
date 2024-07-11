import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/path/to/logo.png" alt="Little Lemon Logo" className="logo-img" />
        <h1 className="title">Little Lemon</h1>
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/booking" className="nav-link">Booking</Link>
        <a href="#about" className="nav-link">About</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
