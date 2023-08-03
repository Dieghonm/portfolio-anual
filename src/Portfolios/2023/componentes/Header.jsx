import React from 'react';
import perfil from '../../../data/perfil.jpeg'
import '../styles/Header.css';

function Header() {
  return (
    <header className="header2023">
      <div className="container2023">
        <img src={perfil} alt="Minha Foto" />
        <div className="container-text2023">
          <h1 className="header-title2023">Olá, eu sou o Diegho</h1>
          <h3 className="about-title2023">Sou um programador e desenvolvedor web.</h3>
        </div>
      </div>
    </header>
  );
}

export default Header;
