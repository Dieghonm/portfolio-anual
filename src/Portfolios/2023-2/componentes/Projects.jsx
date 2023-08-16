import React from 'react';
import { projectsData } from '../../../data/data';

import '../styles/Projects.css'

function Projects () {
  const makeProjectCard = (projcet) => {
    console.log(projcet);

    return (
      <div className='project-card-2023B' key={projcet.title}>
        <p>{projcet.title}</p>
        <img src={projcet.image} alt="print da tela do projeto" />
      </div>
    )
  }

  return (
    <section className="Projects2023B">
      <h2>Projects</h2>
      <div className='projects-colection-2023B'>
        {projectsData.map((projcet) => makeProjectCard(projcet))}
      </div>
    </section>
  );
}

export default Projects;