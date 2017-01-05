import React from 'react'
import html from '../public/html.svg'
import css from '../public/css.svg'
import js from '../public/js.svg'
import R from '../public/R.png'
import rct from '../public/react.svg'
import rctnative from '../public/rn.svg'
import jquery from '../public/jquery.svg'
import node from '../public/node.svg'
import mongodb from '../public/mongodb.svg'
import postgresql from '../public/postgresql.png'


const Tech = () => (
  <section>
    <div className="tech">
      <div className="techDiv">
        <h3>Languages</h3>
        <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
        	<div className="flipper">
        		<div className="front">
              <img src={html} className="technologies" alt="html"/>
              <img src={css} className="technologies" alt="css"/>
              <img src={js} className="technologies" alt="javascript"/>
              <img src={R} className="technologies" alt="R"/>
        		</div>
        		<div className="back">
              <div className="tech-back">
                <img src={html} className="technologies back-icon" alt="html"/>
                <h6>HTML 5</h6>
              </div>
              <div className="tech-back">
                <img src={css} className="technologies back-icon" alt="css"/>
                <h6>CSS 3</h6>
              </div>
              <div className="tech-back">
              <img src={js} className="technologies back-icon" alt="javascript"/>
                <h6>JavaScript 6</h6>
              </div>
              <div className="tech-back">
                <img src={R} className="technologies back-icon" alt="R"/>
                <h6>R</h6>
              </div>
        		</div>
        	</div>
        </div>
      </div>
      <div className="techDiv">
        <h3>Frameworks</h3>
        <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
        	<div className="flipper">
        		<div className="front">
              <img src={rct} className="technologies" alt=" react"/>
              <img src={rctnative} className="technologies" alt=" react-native"/>
              <img src={node} className="technologies" alt=" node"/>
              <img src={jquery} className="technologies" alt=" jQuery"/>
        		</div>
        		<div className="back">
              <div className="tech-back">
                <img src={rct} className="technologies back-icon" alt="html"/>
                <h6>React</h6>
              </div>
              <div className="tech-back">
                <img src={rctnative} className="technologies back-icon" alt="html"/>
                <h6>React Native</h6>
              </div>
              <div className="tech-back">
                <img src={node} className="technologies back-icon" alt="html"/>
                <h6>NodeJs</h6>
              </div>
              <div className="tech-back">
                <img src={jquery} className="technologies back-icon" alt="html"/>
                <h6>jQuery</h6>
              </div>
        		</div>
        	</div>
        </div>
      </div>
      <div className="techDiv">
        <h3>Databases</h3>
        <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
          <div className="flipper">
            <div className="front">
            <img src={mongodb} className="technologies" alt="mongodb"/>
            <img src={postgresql} className="technologies" alt="postgreSQL"/>
            </div>
            <div className="back">
              <div className="tech-back">
                <img src={mongodb} className="technologies back-icon" alt="html"/>
                <h6>MongoDB</h6>
              </div>
              <div className="tech-back">
                <img src={postgresql} className="technologies back-icon" alt="html"/>
                <h6>PostgreSQL</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Tech
