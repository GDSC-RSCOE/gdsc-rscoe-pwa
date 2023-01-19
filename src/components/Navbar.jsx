import React from "react";
import "../stylesheets/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex-navbar">
      <div className="logo-div">
        <img
          className="logo"
          src="./images/gdsc-favicon.png"
          alt="gdsc favicon"
        />
        <p className="logo-text">GDSC RSCOE</p>
      </div>
      <div className="menu">
        <ul className="routing-flex">
          <Link className="anchor-link" to="/">
            <li>Home</li>
          </Link>
          <Link className="anchor-link" to="/about">
            <li>About</li>
          </Link>
          <Link className="anchor-link" to="/events">
            <li>Events</li>
          </Link>
          <Link className="anchor-link" to="/team">
            <li>Team</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
