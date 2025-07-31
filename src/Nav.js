import React from "react";
import "./Nav.css";
import icon from "../src/assets/hotel tuli.jpeg";
import Location from "./pages/Location";
import SignUp from "./SignUp";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="navbar">
        <div className="navbar-logo">
          <img src={icon} alt="Hotel Tuli Logo" className="hotel-icon" />
          Hotel Tuli
        </div>
        <ul className="navbar-links">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/location">Location</a>
          </li>
          <li>
            <a href="/signup">SignUp</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
