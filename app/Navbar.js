import React from 'react';
import './Navbar.css'; 
import About from "./about";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          The Villanova Belles
        </a>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li><a href="/page">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/members">Members</a></li>
          <li><a href="/music">Music</a></li>
          <li><a href="/performances">Performances</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;