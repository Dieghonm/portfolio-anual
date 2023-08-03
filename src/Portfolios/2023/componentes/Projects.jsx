import React, { useState } from 'react';
import {ArrowIosBack} from '@styled-icons/evaicons-solid/ArrowIosBack'
import {ArrowIosForward} from '@styled-icons/evaicons-solid/ArrowIosForward'
import { projectsData } from '../../../data/data';
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
      <div className="project-item-2023" key={project.id}>
        <img src={project.image} alt={project.title} className="project-image-2023" />
        <div className="project-info-2023">
          <h3 className="project-title-2023">{project.title}</h3>
          <p className="project-description-2023">{project.description}</p>
          <div className="project-links-2023">
            <a href={project.url} target="_blank" rel="noopener noreferrer">Demo</a>
            <a href={project.git} target="_blank" rel="noopener noreferrer">Repositório</a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="projects-2023">
      <div className="container-2023">
      <div className="mobile-buttons-2023">
          <button className="mobile-prev-button-2023" onClick={prevSlide}><ArrowIosBack /></button>
          <h2 className="projects-title-2023">Projetos</h2>
          <button className="mobile-next-button-2023" onClick={nextSlide}><ArrowIosForward /></button>
        </div>
        
        <div className="carousel-2023">
          <button className="prev-button-2023" onClick={prevSlide}><ArrowIosBack /></button>
          <div className="projects-list-2023">
            {projectCard(projectsData[currentIndex])}
          </div>
          <button className="next-button-2023" onClick={nextSlide}><ArrowIosForward /></button>
        </div>
      </div>
    </section>
  );
}

export default Projects;

