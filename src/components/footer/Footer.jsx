import React from "react";
import { Bio } from "../data/constants";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { HashLink } from 'react-router-hash-link';
import "./Footer.css"; 

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-logo">Arosh Upathilak</div>
        <nav className="nav-bar">
          <HashLink smooth to="#About" className="styled-link">About</HashLink>
          <HashLink smooth to="#Skills" className="styled-link">Skills</HashLink>
          <HashLink smooth to="#Projects" className="styled-link">Projects</HashLink>
          <HashLink smooth to="#Education" className="styled-link">Education</HashLink>
          <HashLink smooth to="#Contact" className="styled-link">Contact</HashLink>
        </nav>
        <div className="social-media-icons">
          <a href={Bio.facebook} target="_blank" className="social-media-icon" rel="noreferrer">
            <FacebookIcon />
          </a>
          <a href={Bio.linkedin} target="_blank" className="social-media-icon" rel="noreferrer">
            <LinkedInIcon />
          </a>

        </div>
        <p className="footer-copyright">&copy; 2025 AAU. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
