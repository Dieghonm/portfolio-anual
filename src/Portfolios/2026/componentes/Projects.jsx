import React from 'react';
import '../styles/Projects.css'

function Projects() {
  return (
      <section className="projects" id="projects">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">02.</span> PROJETOS SELECIONADOS
          </h2>
        </div>

        <div className="projects-grid">
          {[
            { emoji:"🗺️", title:"Eden Map", desc:"App mobile de jornada emocional com interface intuitiva, gamificação e dashboards.", tech:["React Native","TypeScript","Python","PostgreSQL"], link:"https://github.com/Dieghonm/Eden-Map" },
            { emoji:"📊", title:"Data Vision", desc:"Plataforma de visualização e análise de dados com dashboards interativos.", tech:["Python","Pandas","Matplotlib","Streamlit"], link:"https://github.com/Dieghonm/DataVision" },
            { emoji:"🎤", title:"Karaokê Finder", desc:"App mobile para busca e organização de músicas de karaokê.", tech:["React Native","Expo","Context API"], link:"https://github.com/Dieghonm/hit_finder" }
          ].map((p,i)=>(
            <div className="project-card" key={i}>
              <div className="project-image">{p.emoji}</div>
              <div className="project-content">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-description">{p.desc}</p>
                <div className="project-tech">
                  {p.tech.map((t,idx)=><span key={idx} className="tech-badge">{t}</span>)}
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  VER CÓDIGO →
                </a>

              </div>
            </div>
          ))}
        </div>
      </section>
  );
}

export default Projects;