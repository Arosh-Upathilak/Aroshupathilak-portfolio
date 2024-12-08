import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "./EducationCard.css";

const EducationCard = ({ education }) => {
  return (
    <VerticalTimelineElement
      icon={
        <img
          className="education-card-icon"
          alt={education.school}
          src={education.img}
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
        <div className="education-card-date1">
          {education.date}
        </div>
      }
    >
      <div className="education-card-top">
        <img src={education.img} alt="School Logo" className="education-card-img" />
        <div className="education-card-body">
          <h3 className="education-card-name">{education.school}</h3>
          <p className="education-card-degree">{education.degree}</p>
          <p className="education-card-date">{education.date}</p>
        </div>
      </div>
      <p className="education-card-grade">
        <b>Result:</b> {education.grade}
      </p>
      <p className="education-card-description">{education.desc}</p>
    </VerticalTimelineElement>
  );
};

export default EducationCard;