import React from 'react';
import computer from '../../../data/computer.png'
import { aboutData } from '../../../data/data';

function About() {
  return (
    <section className="about2023B">
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
