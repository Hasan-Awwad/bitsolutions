import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"
const Topnavbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="./BitsLogo.png" alt="logo" />
      </div>
      <ul className="navbar-btns">
        <li><Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/products" style={{ color: 'inherit', textDecoration: 'none' }}>Products</Link></li>
        <li><Link to="/careers" style={{ color: 'inherit', textDecoration: 'none' }}>Careers</Link></li>
        <li><Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</Link></li>
      </ul>
    </div>
  );
};

export default Topnavbar;
