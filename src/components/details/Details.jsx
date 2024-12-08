import React from "react";
import Typewriter from "typewriter-effect";
import HeroImg from "../../asserts/me_img.png";
import { Bio } from "../data/constants";
import "./Details.css";

const Details = () => {
  return (
    <div id="About" className="hero-container">
      <div className="hero-bg"></div>
      <div className="hero-inner-container">
        <div className="hero-left-container">
          <div className="title">
            Hi, I am <br /> {Bio.name}
          </div>
          <div className="text-loop">
            I am a &nbsp;
            <span className="highlight">
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <div className="subtitle">{Bio.description}</div>
          <a
            className="resume-button"
            href={Bio.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            View CV
          </a>
        </div>

        <div className="hero-right-container">
          <div className="image">
            <img
              src={HeroImg}
              alt="Arosh Upathilak"
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
