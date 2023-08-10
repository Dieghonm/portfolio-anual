import { useState } from 'react'
import './Portfolio2023B.css'
import About from './componentes/About'
import Init from './componentes/Init'
import Contact from './componentes/Contact'
import Skills from './componentes/Skills'
import Projects from './componentes/Projects'

function Portfolio2023B() {
  const [component, setComponent] = useState('Init')

  const vert = (text) => {
    const array = []
    for (let index = 0; index < text.length; index++) {
      array.push(<p key={text + index}>{text[index]}</p>)
    }
    return array
  }

  return (
    <div className="container-2023B">
      <div onClick={() => setComponent('Init')} className='Eu'>
        {component === 'Init'? <div><Init/></div>:<p className='Abas-2023B'>Diegho Moraes</p>}
      </div>

      <div onClick={() => setComponent('Sobre')} className='Sobre'>
        {component === 'Sobre'? <div><About/></div>:<p className='Abas-2023B'>Sobre</p>}
      </div>

      <div onClick={() => setComponent('Skills')} className='Skills'>
        {component === 'Skills'? <div><Skills /></div>:<p className='Abas-2023B'>Skills</p>}
      </div>
      <div onClick={() => setComponent('Projetos')} className='Projetos'>
        {component === 'Projetos'? <div><Projects/></div>:<p className='Abas-2023B'>Projetos</p>}
      </div>
      <div onClick={() => setComponent('Contato')} className='Contato'>
        {component === 'Contato'? <div><Contact/></div>:<p className='Abas-2023B'>Contato</p>}
      </div>
    </div>
  )
}

export default Portfolio2023B;