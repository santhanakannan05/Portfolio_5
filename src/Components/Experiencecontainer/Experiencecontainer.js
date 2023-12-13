import React from 'react'
import { Element } from 'react-scroll'
import Experiencebox from '../Experiencebox/Experiencebox'
import './Experiencecontainer.css';

const Experiencecontainer = () => {
  return (
    <Element className='experiencecontainer' id='exp'>
        <h1>Experience</h1>
        <div className='experiencecontainer_info'>
            <Experiencebox number="+10" title="Clients" />
            <Experiencebox number="60+" title="projects" style={{backgroundColor:"#f64c08"}} />
            <Experiencebox number="6+" title="years teaching" />
            <Experiencebox number="6000+" title="students got trained" />
        </div>
    
            
    
    </Element>
  )
}

export default Experiencecontainer
