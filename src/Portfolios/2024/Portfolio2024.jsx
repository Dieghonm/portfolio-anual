import { useState } from 'react'
import './Portfolio2024.css'
import About from './componentes/About'
import Init from './componentes/Init'
import Contact from './componentes/Contact'
import Skills from './componentes/Skills'
import Projects from './componentes/Projects'

function Portfolio2024() {
  const [component, setComponent] = useState('Init')

  const vert = (text) => {
    const array = []
    for (let index = 0; index < text.length; index++) {
      array.push(<p key={text + index}>{text[index]}</p>)
    }
    return array
  }

  return (
    <div className="container-2024">
      <div onClick={() => setComponent('Init')} className='Eu'>
        {component === 'Init'? <div><Init/></div>:<p className='Abas-2024'>Diegho Moraes</p>}
      </div>

      <div onClick={() => setComponent('Sobre')} className='Sobre'>
        {component === 'Sobre'? <div><About/></div>:<p className='Abas-2024'>Sobre</p>}
      </div>

      <div onClick={() => setComponent('Skills')} className='Skills'>
        {component === 'Skills'? <div><Skills /></div>:<p className='Abas-2024'>Skills</p>}
      </div>
      <div onClick={() => setComponent('Projetos')} className='Projetos'>
        {component === 'Projetos'? <div><Projects/></div>:<p className='Abas-2024'>Projetos</p>}
      </div>
      <div onClick={() => setComponent('Contato')} className='Contato'>
        {component === 'Contato'? <div><Contact/></div>:<p className='Abas-2024'>Contato</p>}
      </div>
    </div>
  )
}

export default Portfolio2024;