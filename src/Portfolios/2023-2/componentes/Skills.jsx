import {VisualStudio} from '@styled-icons/boxicons-logos/VisualStudio'
import {Docker} from '@styled-icons/boxicons-logos/Docker'
import {Git} from '@styled-icons/boxicons-logos/Git'
import {Python} from '@styled-icons/boxicons-logos/Python'
import {Jest} from '@styled-icons/simple-icons/Jest'
import {Javascript} from '@styled-icons/boxicons-logos/Javascript'
import {Eslint} from '@styled-icons/simple-icons/Eslint'
import {Typescript} from '@styled-icons/simple-icons/Typescript'
import {Linux} from '@styled-icons/fa-brands/Linux'

import {Cypress} from '@styled-icons/simple-icons/Cypress'
import {Css3} from '@styled-icons/boxicons-logos/Css3'
import {Html5} from '@styled-icons/boxicons-logos/Html5'
import {Redux} from '@styled-icons/boxicons-logos/Redux'
import {Rtl} from '@styled-icons/simple-icons/Rtl'
import {Styledcomponents} from '@styled-icons/simple-icons/Styledcomponents'
import {ReactLogo} from '@styled-icons/boxicons-logos/ReactLogo'
import {Mysql} from '@styled-icons/simple-icons/Mysql'
import {Nodejs} from '@styled-icons/boxicons-logos/Nodejs'
import {Mongodb} from '@styled-icons/simple-icons/Mongodb'
import {Sequelize} from '@styled-icons/simple-icons/Sequelize'

import '../styles/Skills.css'

const sistems = [<Linux/>, <Git />, <Docker />, <VisualStudio />, <Javascript />, <Typescript /> ,<Jest />, <Eslint />, <Python />]
const fronts = [<Html5 />, <Css3 />, <ReactLogo />, <Rtl />, <Redux />, <Styledcomponents />, <Cypress />]
const backs= [<Nodejs />, <Mysql />, <Mongodb />, <Sequelize /> ]

const sistemsName = ['Linux', 'Git', 'Docker', 'VisualStudio', 'Javascript', 'Typescript' ,'Jest', 'Eslint', 'Python']
const frontsName = ['Html5', 'Css3', 'ReactLogo', 'Rtl', 'Redux', 'Styledcomp...', 'Cypress']
const backsName= ['Nodejs', 'Mysql', 'Mongodb', 'Sequelize' ]

function Skills() {
  const iconDiv = (icon, index, names) => {
    return (
      <div className="SkillDiv" key={names[index]}>
        <div className="IconDiv">
          {icon}
        </div>
        <div className="TooltipBox">
          {names[index]}
        </div>
      </div>
    )
  }

  return (
    <div className="Skills2023B">
      <h2>Skills</h2>
        <div className="SkillsGroup-2023B">
          {sistems.map((sis,index) => iconDiv(sis, index, sistemsName))}
        </div>
        <div className="SkillsGroup-2023B">
          {fronts.map((fro,index) => iconDiv(fro, index, frontsName))}
        </div>
        <div className="SkillsGroup-2023B">
          {backs.map((back,index) => iconDiv(back, index, backsName))}
        </div>
    </div>
  )
}

export default Skills;
