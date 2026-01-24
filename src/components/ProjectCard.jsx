import React from "react";

function ProjectCard({ title, description, link }) {
  return (
    <div className="project">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
}