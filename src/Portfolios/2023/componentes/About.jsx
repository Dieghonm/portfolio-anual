import React from 'react';
import programmer from '../../../data/programmer.png'
import BugHunter from '../../../data/BugHunter.jpg'
import computer from '../../../data/computer.png'
import '../styles/About.css';

function About() {
  return (
    <section className="about2023">
      <div className="trabalho2023">
        <h4 className="about-description2023">
        Meu trabalho consiste em criar soluções para a web, atuando tanto no desenvolvimento <i>front-end</i> quanto no <i>back-end</i>. Atualmente, estou expandindo meu conhecimento na área de dados.</h4>
        <img src={programmer} alt="computador" />
      </div>
      <div className="bug">
        <img src={BugHunter} alt="BugHunter" />
        <h4 className="about-description2023">
        Além disso, adoro a emocionante tarefa de caçar bugs. Passo a maior parte do meu tempo investigando 
        e solucionando problemas, e confesso que me divirto muito com isso...
        </h4>
      </div>

      <span className="about-content2023">
        <div className="about-content-div2023">
          <img src={computer} alt="BugHunter" />
          <h5 className="about-subtitle2023">- Um pouco sobre mim</h5>
        </div>
        <p>Sou um desenvolvedor web apaixonado por criar soluções digitais que ganham vida na internet. Minha jornada no desenvolvimento começou em 2000, quando mergulhei no estudo de programação para criar modificações em um jogo online. Porem minha carreira tomou diferentes direções. No entanto, a pandemia me proporcionou uma oportunidade única de dedicar-me à programação e seguir minha paixão.</p>

        <p>Durante o ano de 2022, tive o privilégio de trabalhar em duas <i>startups</i>, onde aprimorei minhas habilidades como desenvolvedor. Trabalhar nesses ambientes dinâmicos e inovadores me permitiu enfrentar desafios lógicos e transformar ideias em produtos digitais reais. Estou constantemente buscando ampliar meus conhecimentos, concentrando-me atualmente no desenvolvimento <i>back-end</i> e explorando linguagens como <i>Python</i>.</p>

        <p>Ao longo da minha jornada, conquistei resultados significativos e desenvolvi um conjunto sólido de habilidades técnicas. Minha paixão pela programação é impulsionada pela busca constante por projetos emocionantes nos quais possa contribuir de forma significativa. Tenho um compromisso inabalável em entregar soluções digitais de alta qualidade, e estou pronto para colaborar com equipes que compartilhem dessa visão.</p>
      </span>
    </section>
  );
}

export default About;
