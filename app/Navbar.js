import React from 'react';
import './Navbar.css'; 
import About from "./about";
import { NavLink } from 'react-router-dom';


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
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/members">Members</NavLink></li>
          <li><NavLink to="/music">Music</NavLink></li>
          <li><NavLink to="/performances">Performances</NavLink></li>
          <li><NavLink to="/gallery">Gallery</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;