import React, { useState } from 'react';
import {ArrowIosBack} from '@styled-icons/evaicons-solid/ArrowIosBack'
import {ArrowIosForward} from '@styled-icons/evaicons-solid/ArrowIosForward'
import { projectsData } from '../../../data/Projetos/projectsData';
import '../styles/Projects.css';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % projectsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + projectsData.length) % projectsData.length);
  };

  const projectCard = (project) => {
    return (
      <div className="project-item" key={project.id}>
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-info">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-links">
            <a href={project.url} target="_blank" rel="noopener noreferrer">Demo</a>
            <a href={project.git} target="_blank" rel="noopener noreferrer">Repositório</a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="projects">
      <div className="container">
      <div className="mobile-buttons">
          <button className="mobile-prev-button" onClick={prevSlide}><ArrowIosBack /></button>
          <h2 className="projects-title">Projetos</h2>
          <button className="mobile-next-button" onClick={nextSlide}><ArrowIosForward /></button>
        </div>
        
        <div className="carousel">
          <button className="prev-button" onClick={prevSlide}><ArrowIosBack /></button>
          <div className="projects-list">
            {projectCard(projectsData[currentIndex])}
          </div>
          <button className="next-button" onClick={nextSlide}><ArrowIosForward /></button>
        </div>
      </div>
    </section>
  );
}

export default Projects;

