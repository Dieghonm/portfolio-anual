import React from 'react';
import '../styles/About.css';
import { aboutData } from '../../../data/data';

function About() {
  return (
    <section className="about">
      <div className="container">
        <h4 className="about-description">{aboutData.subtitulo1}</h4>
        <h4 className="about-description">{aboutData.subtitulo2}</h4>
        <span className="about-content">
          <h5 className="about-subtitle">- Um pouco sobre mim</h5>
          <p>{aboutData.paragrafo1}</p>
          <p>{aboutData.paragrafo2}</p>
          <p>{aboutData.paragrafo3}</p>
        </span>
      </div>
    </section>
  );
}

export default About;
