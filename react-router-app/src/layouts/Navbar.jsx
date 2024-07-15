import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w3-top">
      <div
        className="w3-bar w3-white w3-padding w3-card"
        style={{ letterSpacing: "4px" }}
      >
        {/* <a href="#home" className="w3-bar-item w3-button">
          Gourmet au Catering
        </a> */}
        <Link to="/" className="w3-bar-item w3-button">
          Gourmet au Catering
        </Link>
        <div className="w3-right w3-hide-small">
          {/* <a href="#about" className="w3-bar-item w3-button">
            About
          </a> */}
          <NavLink to="/about" className="w3-bar-item w3-button">
            About
          </NavLink>
          <NavLink to="/menu" className="w3-bar-item w3-button">
            Menu
          </NavLink>
          <NavLink to="/contact" className="w3-bar-item w3-button">
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}
