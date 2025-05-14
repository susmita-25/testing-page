import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import circle from "../Assets/circle.png";
import project1 from "../Assets/social.png";
import Navbar from "../Components/Navbar";
import "../Styles/Hero.css";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <Navbar />
        </div>
        <br/><br/>
        <center><img src={project1} alt="Doctor Group" className="" /></center>

        <div className="text-section">

        <div className="text-headline">Amazing Digital creations with <span className="text-color-single">Brandworx agency</span></div>
        <br/><br/>

          <p className="text-descritpion">
            help you to build digital solutions that is modern, user friendly, good CEO, and Clean design
        <br/><br/>
        </p>
          <div className="text-button"></div>

        </div>
        <br/><br/>

        <center><img src={circle} alt="Doctor Group" className="" /></center>
        <br/><br/>

      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
