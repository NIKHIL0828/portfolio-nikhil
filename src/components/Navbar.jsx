import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Nikhil Sonkar
      </Link>
      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" end>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/projects" className="nav-link">Projects</NavLink>
        </li>
         <li className="nav-item">
          <NavLink to="/resume" className="nav-link">Resume</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;