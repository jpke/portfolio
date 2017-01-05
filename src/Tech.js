import React from 'react'
import Technologies from './Technologies'

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
        <div className="flip-container" onTouchStart="this.classList.toggle('hover');">
        	<div className="flipper">
        		<div className="front">
              <Technologies
                technologies={["html", "css", "js", "R"]}
                iconClass="techLearnedIcon"/>
        		</div>
        		<div className="back">
              <div className="back-col">
                <div className="tech-back">
                  <Technologies
                    technologies={["html"]}
                    iconClass="techLearnedIcon back-icon"/>
                  <h6>HTML5</h6>
                </div>
                <div className="tech-back">
                  <Technologies
                    technologies={["css"]}
                    iconClass="techLearnedIcon back-icon"/>
                  <h6>CSS3</h6>
                </div>
              </div>
              <div className="back-col">
                <div className="tech-back">
                  <Technologies
                    technologies={["js"]}
                    iconClass="techLearnedIcon back-icon"/>
                  <h6>JavaScript</h6>
                </div>
                <div className="tech-back">
                  <Technologies
                    technologies={["R"]}
                    iconClass="techLearnedIcon back-icon"/>
                  <h6>R</h6>
                </div>
              </div>
        		</div>
        	</div>
        </div>
      </div>
      <div className="techDiv">
        <h3>Frameworks</h3>
        <div className="flip-container" onTouchStart="this.classList.toggle('hover');">
        	<div className="flipper">
        		<div className="front">
            <Technologies
              technologies={["react", "react-native", "node", "jquery"]}
              iconClass="techLearnedIcon"/>
        		</div>
        		<div className="back">
              <div className="back-col">
                <div className="tech-back">
                  <Technologies
                    technologies={["react"]}
                    iconClass="techLearnedIcon back-icon"/>
                  <h6>React</h6>
                </div>
                <div className="tech-back">
                  <Technologies
                    technologies={["react-native"]}
                    iconClass="techLearnedIcon back-icon"/>
                  <h6>React Native</h6>
                </div>
              </div>
              <div className="back-col">
                <div className="tech-back">
                  <Technologies
                    technologies={["node"]}
                    iconClass="techLearnedIcon back-icon"/>
                  <h6>NodeJs</h6>
                </div>
                <div className="tech-back">
                  <Technologies
                    technologies={["jquery"]}
                    iconClass="techLearnedIcon back-icon"/>
                  <h6>jQuery</h6>
                </div>
              </div>
        		</div>
        	</div>
        </div>
      </div>
      <div className="techDiv">
        <h3>Databases</h3>
        <div className="flip-container" onTouchStart="this.classList.toggle('hover');">
          <div className="flipper">
            <div className="front">
            <Technologies
              technologies={["mongo", "postgresql"]}
              iconClass="techLearnedIcon"/>
            </div>
            <div className="back">
              <div className="back-col">
                <div className="tech-back">
                  <Technologies
                    technologies={["mongo"]}
                    iconClass="techLearnedIcon back-icon"/>
                  <h6>MongoDB</h6>
                </div>
                <div className="tech-back">
                  <Technologies
                    technologies={["postgresql"]}
                    iconClass="techLearnedIcon back-icon"/>
                  <h6>PostgreSQL</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Tech
