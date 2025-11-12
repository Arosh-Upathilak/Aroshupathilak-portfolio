import React from "react";
import { experience } from "../data/constants";
import ExperienceCard from "./experiencecard/Experiencecard";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience-container" id="Experience">
      <div className="experience-background"></div>
      <div className="experience-wrapper">
        <h2 className="experience-title">Experience</h2>
        <p className="experience-desc">
          My professional experience has been a journey of growth and hands-on learning, allowing me to apply engineering principles, collaborate in dynamic teams, and contribute to impactful real-world projects.
        </p>
        <VerticalTimeline>
          {experience.map((exp, index) => (
            <ExperienceCard key={`experience-${index}`} experience={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
