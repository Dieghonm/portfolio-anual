import React from 'react';
import {Linkedin} from '@styled-icons/boxicons-logos/Linkedin'
import {Github} from '@styled-icons/boxicons-logos/Github'
import {Email} from '@styled-icons/evaicons-solid/Email'
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <nav className="header-nav">
        <a href="https://www.linkedin.com/in/diegho-neves/" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
        <a href="https://github.com/Dieghonm" target="_blank" rel="noopener noreferrer"><Github /></a>
        <a><Email /></a>
      </nav>
      <div className="container">
        <p className="footer-text">© {new Date().getFullYear()} Diegho Moraes. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;