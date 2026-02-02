import React from 'react';
import '../styles/Header.css'

function Header() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <a href="#top" className="nav-logo">DM</a>
        <div className="nav-links">
          <a href="#skills">Skills</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;