import React from "react";
import { education } from "../data/constants";
import EducationCard from "./educationcard/EducationCard";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";

const Education = () => {
  return (
    <div className="education-container" id="Education">
      <div className="education-background"></div>
      <div className="education-wrapper">
        <h2 className="education-title">Education</h2>
        <p className="education-desc">
          My education has been a journey of self-discovery and growth, shaping
          my foundation and perspective.
        </p>
        <VerticalTimeline>
          {education.map((edu, index) => (
            <EducationCard key={`education-${index}`} education={edu} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;
