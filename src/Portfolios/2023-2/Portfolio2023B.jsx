import { useState } from 'react'
import './Portfolio2023B.css'
import About from './componentes/About'
import Footer from './componentes/Footer'

function Portfolio2023B() {
  const [component, setComponent] = useState('Sobre')
  // const array = ['Sobre','Skills','Projetos','Contato']

  const vert = (text) => {
    const array = []
    for (let index = 0; index < text.length; index++) {
      array.push(<p key={text + index}>{text[index]}</p>)
    }
    return array
  }

  return (
    <div className="container-2023B">
      <button onClick={() => setComponent('Sobre')}>{vert('Sobre')}</button>
      {component === 'Sobre'? <div><About/></div>:null}

      <button onClick={() => setComponent('Skills')}>{vert('Skills')}</button>
      {component === 'Skills'? <div>Skills</div>:null}

      <button onClick={() => setComponent('Projetos')}>{vert('Projetos')}</button>
      {component === 'Projetos'? <div>Projetos</div>:null}

      <button onClick={() => setComponent('Contato')}>{vert('Contato')}</button>
      {component === 'Contato'? <div><Footer /></div>:null}

    </div>
  )
}

export default Portfolio2023B;