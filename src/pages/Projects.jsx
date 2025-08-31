import React from 'react';
import './Projects.css';
import chatAppImage from "../assets/chat-app_image.png";
import TMAImage from "../assets/TMA_image.png";
import TTImage from "../assets/TT_image.png";
import MCTImage from "../assets/MCT_image.png";



const projectData = [
  {
    title: "Fullstack-Chat-App",
    description: "A cool Chat App built with the MERN stack.",
    image: chatAppImage,
    githubLink: "https://github.com/NIKHIL0828/fullstack-chat-app",
    liveLink: "https://fullstack-chat-app-vv4u.onrender.com/login"
  },
  {
    title: "Task-Manager-App",
    description: "A task management application built with React and Node.js.",
    image: TMAImage,
    githubLink: "https://github.com/NIKHIL0828/Task_manager_app",
    liveLink: "https://task-manager-nine-rho.vercel.app/"
  },
  {
    title: "Travel-Tourism",
    description: "A travel and tourism website built with React in group.",
    image: TTImage,
    githubLink: "https://github.com/sandeep-001488/Travel-Tourism",
    liveLink: "https://sandeep-001488.github.io/Travel-Tourism/index.html"
  },
  {
    title: "Multi-Countdown-Timer",
    description: "A multi countdown timer application built with html, css and javascript.",
    image: MCTImage,
    githubLink: "https://github.com/NIKHIL0828/Multi-Countdown-timer",
    liveLink: "https://nikhil0828.github.io/Multi-Countdown-timer/"
  }
];

const Projects = () => {
  return (
    <section className="page-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;