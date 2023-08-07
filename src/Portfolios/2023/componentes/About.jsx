import React from 'react';
import programmer from '../../../data/programmer.png'
import BugHunter from '../../../data/BugHunter.jpg'
import computer from '../../../data/computer.png'
import { aboutData } from '../../../data/data';

import '../styles/About.css';

function About() {
  return (
    <section className="about2023">
      <div className="trabalho2023">
        <h4 className="about-description2023">{aboutData.subtitulo1}</h4>
        <img src={programmer} alt="computador" />
      </div>
      <div className="bug-description2023">
        <img src={BugHunter} alt="BugHunter" />
        <h4 className="about-description2023">{aboutData.subtitulo2}</h4>
      </div>

      <span className="about-content2023">
        <div className="about-content-div2023">
          <img src={computer} alt="BugHunter" />
          <h5 className="about-subtitle2023">- Um pouco sobre mim</h5>
        </div>
        <p>{aboutData.paragrafo1}</p>
        <p>{aboutData.paragrafo2}</p>
        <p>{aboutData.paragrafo3}</p>
      </span>
    </section>
  );
}

export default About;
