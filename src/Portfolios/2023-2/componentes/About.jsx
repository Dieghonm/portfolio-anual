import React from 'react';
import computer from '../../../data/computer.png'
import { aboutData } from '../../../data/data';

import '../styles/About.css'

function About() {
  return (
    <section className="about2023B">
      <h2>Sobre</h2>
      <div className="about-div2023B">
        <img src={computer} alt="BugHunter" />
        <h3 className="about-subtitle2023B">Um pouco sobre mim</h3>
      </div>
      <p>{aboutData.paragrafo1}</p>
      <p>{aboutData.paragrafo2}</p>
      <p>{aboutData.paragrafo3}</p>
    </section>
  );
}

export default About;
