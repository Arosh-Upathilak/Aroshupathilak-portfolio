import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "./Experiencecard.css";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          className="experience-card-icon"
          alt={experience.company}
          src={experience.img}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "rgba(17, 25, 40, 0.83)",
        color: "#fff",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid rgba(255, 255, 255, 0.3)",
      }}

      date={
        <div className="experience-card-date1">
          {experience.date}
        </div>
      }
    >
      <div className="experience-card-top">
        <img src={experience.img} alt="Company Logo" className="experience-card-img" />
        <div className="experience-card-body">
          <h3 className="experience-card-name">{experience.company}</h3>
          <p className="experience-card-degree">{experience.position}</p>
          <p className="experience-card-date">{experience.date}</p>
        </div>
      </div>
      <p className="experience-card-grade">
        <b>Technologies:</b> {experience.technologies}
      </p>
      <p className="experience-card-description">{experience.desc}</p>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;