import React from "react";
import { skills } from "../data/constants";
import { Tilt } from "react-tilt";
import "./Skill.css";

const Skill = () => {
  return (
    <div className="skills-container" id="Skills">
      <div className="skills-background"></div>
      <div className="skills-wrapper">
        <div className="skills-title">Skills</div>
        <div className="skills-desc">
        A showcase of the skills I have honed and mastered through dedication and practice.
        </div>

        <div className="skills-list-container">
          {skills.map((skill, index) => (
            <Tilt key={`skill-${index}`}>
              <div className="skill-card">
                <div className="skill-card-title">{skill.title}</div>
                <div className="skill-card-list">
                  {skill.skills.map((item, index_x) => (
                    <div className="skill-item" key={`skill-x-${index_x}`}>
                      <img src={item.image} alt={item.name} className="skill-image" />
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
