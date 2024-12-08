import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project, setOpenModal }) => {
  const handleClick = () => {
    if (typeof setOpenModal === "function") {
      setOpenModal({ state: true, project });
    } else {
      console.error("setOpenModal is not a valid function");
    }
  };

  return (
    <div className="project-card" onClick={handleClick}>
      <img
        src={project.image}
        alt={project.title}
        className="project-image"
        onClick={(e) => {
          e.stopPropagation(); 
          handleClick();
        }}
      />
      <div className="project-tags">
        {project.tags?.map((tag, index) => (
          <span key={index} className="project-tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="project-details">
        <div className="project-title">{project.title}</div>
        <div className="project-date">{project.date}</div>
        <div className="project-description">{project.description}</div>
      </div>
      <div className="project-members">
        {project.member?.map((member, index) => (
          <img
            key={index}
            src={member.img}
            alt="member"
            className="project-avatar"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
