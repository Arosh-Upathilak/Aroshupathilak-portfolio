import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import { Bio } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav">
      <div className="navbar-container">
        <LinkR to="/" className="nav-logo">
          <span className="color-text">&lt;</span><span className='name'>Arosh Upathilak</span>
          <span className="color-text">&gt;</span>
        </LinkR>

        <div className="mobile-icon" onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </div>

        <ul className={`nav-items ${isOpen ? "open" : ""}`}>
          <HashLink smooth to="#About" className="nav-link">About</HashLink>
          <HashLink smooth to="#Skills" className="nav-link">Skills</HashLink>     
          <HashLink smooth to="#Projects" className="nav-link">Projects</HashLink>
          <HashLink smooth to="#Education" className="nav-link">Education</HashLink>
          <HashLink smooth to="#Experience" className="nav-link">Experience</HashLink>
          <HashLink smooth to="#Contact" className="nav-link">Contact</HashLink>
        </ul>

        {isOpen && (
          <ul className={`mobile-menu ${isOpen ? 'open' : ''}`}>
            <a href="#About" className="nav-link" onClick={() => setIsOpen(!isOpen)}>About</a>
            <a href="#Skills" className="nav-link" onClick={() => setIsOpen(!isOpen)}>Skills</a>
            <a href="#Projects" className="nav-link" onClick={() => setIsOpen(!isOpen)}>Projects</a>
            <a href="#Education" className="nav-link" onClick={() => setIsOpen(!isOpen)}>Education</a>
            <a href="#Contact" className="nav-link" onClick={() => setIsOpen(!isOpen)}>Contact</a>
            <a href={Bio.github} className="github-button" target="_Blank" rel="noreferrer">
              Github Profile
            </a>
          </ul>
        )}

        <div className="button-container">
          <a href={Bio.github} className="github-button" target="_Blank" rel="noreferrer">
            Github Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
