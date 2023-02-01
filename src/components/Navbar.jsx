import React from "react";
import "../stylesheets/Navbar.css";
import { Link } from "react-router-dom";
import { BsCaretDownFill } from "react-icons/bs";
import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  let style = "down-arrow";

  if (show) {
    style = "after-click";
  } else {
    style = "down-arrow";
  }

  return (
    <div className="flex-navbar">
      <Link className="anchor-link logo-div" to="/">
        <img
          className="logo"
          src="./images/gdsc-favicon.png"
          alt="gdsc favicon"
        />
        <p className="logo-text">GDSC RSCOE</p>
      </Link>

      <div className="menu">
        <ul className="routing-flex">
          <Link className="anchor-link" to="/">
            <li>Home</li>
          </Link>
          <Link className="anchor-link" to="/about">
            <li>About</li>
          </Link>
          <div className="dropdown">
            <button
              className="dropbtn"
              onClick={() => {
                setShow(!show);
              }}
            >
              Events{" "}
              <BsCaretDownFill
                className={style}
                fontSize={"1.2rem"}
              ></BsCaretDownFill>
            </button>
            {show ? (
              <div className="dropdown-content">
                <Link to="/upcoming">Upcoming Events</Link>
                <Link to="/past">Past Events</Link>
              </div>
            ) : null}
          </div>
          <Link className="anchor-link" to="/team">
            <li>Team</li>
          </Link>
          <Link className="anchor-link" to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
