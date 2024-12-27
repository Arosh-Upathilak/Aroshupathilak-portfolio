import React, { useState } from "react";
import "./Project.css";
import { projects } from "../data/constants";
import ProjectCard from "./projectCard/ProjectCard";
import { Modal } from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";

const Project = () => {
  const [toggle, setToggle] = useState("all");
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <div className="projects-container" id="Projects">
      <div className="projects-background"></div>
      <div className="projects-wrapper">
        <div className="projects-title">Projects</div>
        <div className="projects-desc">
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </div>
        <div className="toggle-button-group">
          {["all", "Web App","AI","Embedded", "Robotic"].map((category) => (
            <div
              key={category}
              className={`toggle-button ${toggle === category ? "active" : ""}`}
              onClick={() => setToggle(category)}
            >
              {category.toUpperCase()}
            </div>
          ))}
        </div>
        <div className="card-container">
          {projects
            .filter((project) => toggle === "all" || project.category === toggle)
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                setOpenModal={setOpenModal}
              />
            ))}
        </div>
      </div>

      {/* Modal */}
      <Modal
        open={openModal.state}
        onClose={() => setOpenModal({ state: false, project: null })}
      >
        <div className="modal-container">
          <div className="modal-content">
            <button
              className="close-modal"
              onClick={() => setOpenModal({ state: false, project: null })}
            >
              &times;
            </button>
            <h2>{openModal.project?.title}</h2>
            <img
              src={openModal.project?.image}
              alt={openModal.project?.title}
              className="modal-image"
            />
            <div className="project-tags">
              {openModal.project?.tags?.map((tag, index) => (
                <span key={index} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
            <p>{openModal.project?.description}</p>
            <div className="date">{openModal.project?.date}</div>

            {/* Displaying members */}
            {openModal.project?.member && (
              <div className="modal-members">
                <h3>Members:</h3>
                {openModal.project.member.map((member) => (
                  <div className="member-info" key={member.name}>
                    <img
                      src={member.img}
                      alt={member.name}
                      className="member-image"
                    />
                    <div className="member-details">
                      <span className="member-name">{member.name} ({member.role})</span>
                      <div className="member-links">
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                        >
                          <GitHub />
                        </a>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                        >
                          <LinkedIn />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Buttons */}
            <div className="modal-buttons">
              {openModal.project?.github && (
                <a
                  href={openModal.project?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-btn"
                >
                  View Code
                </a>
              )}

              {openModal.project?.webapp && (
                <a
                  href={openModal.project?.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-btn"
                >
                  View Live App
                </a>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Project;
