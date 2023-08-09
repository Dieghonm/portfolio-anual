import React from 'react';
import perfil from '../../../data/perfil.jpeg'
import programmer from '../../../data/programmer.png'
import BugHunter from '../../../data/BugHunter.jpg'
import { aboutData } from '../../../data/data';

import '../styles/About.css';

function About() {
  return (
    <section className="about2023B">
      <div className="container2023b">
        <img src={perfil} alt="Minha Foto" />
        <div className="container-text2023b">
          <h1 className="header-title2023b">Olá, eu sou o Diegho</h1>
          <h3 className="about-title2023b">Sou um programador e desenvolvedor web.</h3>
        </div>
      </div>
      <div className="trabalho2023B">
        <h4 className="about-description2023B">{aboutData.subtitulo1}</h4>
        <img src={programmer} alt="computador" />
      </div>
      <div className="bug-description2023B">
        <img src={BugHunter} alt="BugHunter" />
        <h4 className="about-description2023B">{aboutData.subtitulo2}</h4>
      </div>
    </section>
  );
}

export default About;
