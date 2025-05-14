import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";
import logo from "../Assets/footer.png";


function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-container">

        <div className="ft-list">
          <img src={logo} alt="Doctor Group" className="navbar-btn" />

        </div>
        <div className="ft-list">
          <p className="ft-description">
            2nd Floor, Shree Complex Plot No. 42, Sector 18 Koramangala, Bengaluru - 560095 Karnataka, India <br /><br /> <u>+91-9876543210</u> <br /><br /> <u>contact@brandworx.agency</u>
          </p>
        </div>

        <div className="ft-list">
          <ul className="ft-list-items">
            <li>
              <a href="#services">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#services">Portfolio</a>
            </li>
            <li>
              <a href="#services">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="ft-list">
          <ul className="ft-list-items">
            <li>
              <Link to={"/legal"}>Facebook
              </Link>
            </li>
            <li>
              <Link to={"/legal"}>Twitter</Link>
            </li>
            <li>
              <Link to={"/legal"}>Linkedin</Link>
            </li>
            <li>
              <Link to={"/legal"}>Instagram</Link>
            </li>
          </ul>
        </div>


      </div>


    </div>
  );
}

export default Footer;
