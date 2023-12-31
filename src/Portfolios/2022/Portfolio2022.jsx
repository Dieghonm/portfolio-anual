import About from "./componentes/About";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Projects from "./componentes/Projects";
import Skills from "./componentes/Skills";

import './Portfolio2022.css'

function Portfolio2022() {
  return (
    <div className="Portfolio2022">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default Portfolio2022;