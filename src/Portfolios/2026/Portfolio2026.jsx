import "./Portfolio2026.css"

function Portfolio2026() {
  return (
    <div className="container-2026">
      <nav className="navbar">
        <div className="nav-content">
          <a href="#" className="nav-logo">DM</a>
          <div className="nav-links">
            <a href="#skills">Skills</a>
            <a href="#projects">Projetos</a>
            <a href="#contact">Contato</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            DISPONÍVEL PARA PROJETOS
          </div>

          <h1 className="hero-title">
            DIEGHO<br />
            <span className="gradient-text">MORAES</span>
          </h1>

          <div className="hero-subtitle">
            <p className="subtitle-main">Full Stack Developer</p>
            <p className="subtitle-focus">Especialista em Frontend & Mobile</p>
          </div>

          <div className="hero-description">
            <p>
              Transformo ideias em produtos digitais excepcionais. Co-fundador da Duo Estúdio,
              desenvolvendo apps mobile do design ao deploy com React Native, TypeScript e Python.
            </p>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Anos de Experiência</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">40+</div>
              <div className="stat-label">Projetos Desenvolvidos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Dedicação</div>
            </div>
          </div>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">VER PROJETOS →</a>
            <a href="#contact" className="btn btn-secondary">ENTRAR EM CONTATO</a>
          </div>
        </div>
      </section>

      <section className="skills" id="skills">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">01.</span> TECH STACK
          </h2>
          <p className="section-subtitle">
            Expertise técnico em desenvolvimento Full Stack com foco em criar experiências digitais memoráveis
          </p>
        </div>

        <div className="skills-grid">
          {[
            { icon:"📱", title:"Frontend & Mobile", items:["React Native","Expo","React.js","Next.js","TypeScript","JavaScript","TailwindCSS","Styled Components"] },
            { icon:"⚙️", title:"Backend & Database", items:["Python","FastAPI","Django","Node.js","PostgreSQL","MongoDB","REST APIs","JWT"] },
            { icon:"📊", title:"Data Science", items:["Pandas","NumPy","Matplotlib","Seaborn","Streamlit","Data Analysis"] },
            { icon:"🛠️", title:"DevOps & Tools", items:["Git","Docker","CI/CD","Figma","Jest","Cypress"] }
          ].map((card,i)=>(
            <div className="skill-card" key={i}>
              <div className="skill-header">
                <span className="skill-icon">{card.icon}</span>
                <h3 className="skill-category">{card.title}</h3>
              </div>
              <div className="skill-items">
                {card.items.map((tag,idx)=><span key={idx} className="skill-tag">{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

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
                <a href={p.link} target="_blank" className="project-link">VER CÓDIGO →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">03.</span> VAMOS CONVERSAR
          </h2>
        </div>
      </section>

      <footer className="footer">
        <div className="brand-name">DIEGHO MORAES</div>
        <div className="brand-tagline">Full Stack Developer</div>
      </footer>
    </div>
  )
}

export default Portfolio2026
