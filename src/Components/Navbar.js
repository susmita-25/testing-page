import {
  faBars,
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import project1 from "../Assets/contactus.png";
import logo from "../Assets/Logo.png";
import "../Styles/Navbar.css";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
      <img src={logo} alt="Doctor Group" className="navbar-btn"/>
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <a href="#About" className="navbar-links">
            About
          </a>
        </li>
        <li>
          <a href="#Services" className="navbar-links">
            Services
          </a>
        </li>
        <li>
          <a href="#Portfolio" className="navbar-links">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#Contact" className="navbar-links">
            Contact Us
          </a>
        </li>
      </ul>

      {/* <button
        className="navbar-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleChatBtnClick}
      > */}
      <img src={project1} alt="Doctor Group" className="navbar-btn"/>

      {/* </button> */}

      {/* Mobile */}
      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#About">
              About
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#Services">
            Services
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#Portfolio">
            Portfolio
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#doctors">
            Contact Us
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#Contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
