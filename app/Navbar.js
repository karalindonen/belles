import React from 'react';
import './navbar.css'; 
import About from "./about/page";
import Link from 'next/link';


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
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/members">Members</Link></li>
          <li><Link href="/music">Music</Link></li>
          <li><Link href="/performances">Performances</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;