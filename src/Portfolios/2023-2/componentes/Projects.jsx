import React, { useState } from 'react';
import { projectsData } from '../../../data/data';

import '../styles/Projects.css'

function Projects () {
  const [showProject, setShowProject] = useState(0)

  const makeProjectCard = (project) => {
    return (
      <div onClick={() => setShowProject(project.id)} className='project-card-2023B' key={project.title}>
        <p>{project.title}</p>
        <img src={project.image} alt="print da tela do projeto" />
      </div>
    )
  }

  const projectSelected = () => {
    const filteredProject = projectsData.find((project)=> project.id === showProject)
    return (
      <div className='selected-project-card-2023B'>
        <h3>{filteredProject.title}</h3>
        <div className='selected-project-data-2023B'>
          <div className='selected-project-img-2023B'>
            <img src={filteredProject.image} alt="print da tela do projeto" />
            <a href={filteredProject.url} target="_blank" rel="noopener noreferrer">Demo</a>
            <a href={filteredProject.git} target="_blank" rel="noopener noreferrer">Repositório</a>
          </div>

          <p className='selected-project-text-2023B'>{filteredProject.description}</p>
        </div>
      </div>
    )
  }

  return (
    <section className="Projects2023B">
      <h2>Projects</h2>
      {showProject === 0 ? 
        <div className='projects-colection-2023B'>
          {projectsData.map((project) => makeProjectCard(project))}
        </div>
      :
        <div className='show-project'>
          <div className='project-list-2023B'>
            <button onClick={() => setShowProject(0)}>Todos os projetos</button>
            {projectsData.map((project)=> <button key={project.title + 'button'} onClick={() => setShowProject(project.id)}>{project.title}</button>)}
          </div>
          {projectSelected()}
        </div>}
    </section>
  );
}

export default Projects;