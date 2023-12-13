import React from 'react';
import { Element } from 'react-scroll';

import skilling from "../../Image/info-systems.jpg.optimal.jpg"
import LinearProgress from "@material-ui/core/LinearProgress";
import "./Skillcontainer.css"

const SkillContainer = () => {
  return (
    <Element className='skillcontainer' id='skills'>
      <div className='skillcontainer_image'>
        <img src={skilling} alt="" />
      </div>
      <div className='skillcontainer_text'>
        <h2>SKILLSET</h2>
        <div className='skillcontainer_skillset'>
          <h5>React</h5>
          <div className='skillcontainer_slider skillcontainer_slider1'>
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
        <div className='skillcontainer_skillset'>
          <h5>Html</h5>
          <div className='skillcontainer_slider skillcontainer_slider2'>
            <LinearProgress variant="determinate" value={90} />
          </div>
        </div>
        <div className='skillcontainer_skillset'>
          <h5>Css</h5>
          <div className='skillcontainer_slider skillcontainer_slider3'>
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
        <div className='skillcontainer_skillset'>
          <h5>Javascript</h5>
          <div className='skillcontainer_slider skillcontainer_slider4'>
            <LinearProgress variant="determinate" value={70} />
          </div>
        </div>
        <div className='skillcontainer_skillset'>
          <h5>Java</h5>
          <div className='skillcontainer_slider skillcontainer_slider5'>
            <LinearProgress variant="determinate" value={50} />
          </div>
        </div>

      </div>
    </Element>
  );
}

export default SkillContainer;
