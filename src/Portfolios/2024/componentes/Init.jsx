import React from 'react';
import perfil from '../../../data/perfil.jpeg'
import programmer from '../../../data/programmer.png'
import BugHunter from '../../../data/BugHunter.jpg'
import { aboutData } from '../../../data/data';

import '../styles/Init.css';

function Init() {
  return (
    <section className="init2023B">
      <div className="container2023B">
        <img src={perfil} alt="Minha Foto" />
        <div className="container-text2023B">
          <h1 className="header-title2023B">Olá, eu sou o Diegho</h1>
          <h3 className="init-title2023B">Sou um programador e desenvolvedor web.</h3>
        </div>
      </div>
      <div className="trabalho2023B">
        <h4 className="init-description2023B">{aboutData.subtitulo1}</h4>
        <img src={programmer} alt="computador" />
      </div>
      <div className="bug-description2023B">
        <img src={BugHunter} alt="BugHunter" />
        <h4 className="init-description2023B">{aboutData.subtitulo2}</h4>
      </div>
    </section>
  );
}

export default Init;
