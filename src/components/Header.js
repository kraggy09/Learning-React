import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <ul className="nav-items">
        <Link className="link" to="/">
          <li>Home</li>
        </Link>
        <Link className="link" to="/about">
          <li>About Us</li>
        </Link>
        <Link className="link" to="/contact">
          <li>Contact</li>
        </Link>
        <Link className="link">
          <li>Cart</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
