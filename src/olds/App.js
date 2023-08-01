import About from "./componentes/About";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Projects from "./componentes/Projects";
import Skills from "./componentes/Skills";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;