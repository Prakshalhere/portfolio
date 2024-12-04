import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Linkdine from "@iconscout/react-unicons/icons/uil-linkedin";
import Email from "@iconscout/react-unicons/icons/uil-envelope";
import Github from "@iconscout/react-unicons/icons/uil-github";
import ArrowUp from "@iconscout/react-unicons/icons/uil-arrow-up";
import { Link } from "react-scroll";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="f-icons">
          <a
            href="https://github.com/Prakshalhere"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github color="white" size={"2.5rem"} />
          </a>
          <a
            href="https://www.linkedin.com/in/prakshal-jain-8b12bb222/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkdine color="white" size={"2.5rem"} />
          </a>
          <a
            href="mailto:prakshal.jain@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Email color="white" size={"2.5rem"} />
          </a>
        </div>
        <div className="f-navigation">
          <ul style={{ listStyleType: "none", display: "flex", gap: "1.5rem", justifyContent: "center" }}>
            <li>
              <Link to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                About
              </Link>
            </li>
            <li>
              <Link to="skills" spy={true} smooth={true}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="projects" spy={true} smooth={true}>
                Projects
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-text">
          <p>&copy; {new Date().getFullYear()} Prakshal Jain. All rights reserved.</p>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="back-to-top" onClick={scrollToTop}>
        <button className="back-to-top-btn" ><ArrowUp size={"2rem"}/></button>
      </div>
    </div>
  );
};

export default Footer;
