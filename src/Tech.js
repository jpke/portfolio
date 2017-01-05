import React from 'react'
import Technologies from './Technologies'

const Tech = () => (
    <div className="techContainer">
      <section className="techDiv">
        <h3>Languages</h3>
        <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
        	<div className="flipper">
        		<section className="front">
              <Technologies
                technologies={["html", "css", "js", "R"]}
                iconClass="techLearnedIcon"/>
        		</section>
        		<section className="back">
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
        		</section>
        	</div>
        </div>
      </section>
      <section className="techDiv">
        <h3>Frameworks</h3>
        <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
        	<div className="flipper">
        		<section className="front">
              <Technologies
                technologies={["react", "react-native", "node", "jquery"]}
                iconClass="techLearnedIcon"/>
        		</section>
        		<section className="back">
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
        		</section>
        	</div>
        </div>
      </section>
      <section className="techDiv">
        <h3>Databases</h3>
        <div className="flip-container" ontouchstart="this.classList.toggle('hover');">
          <div className="flipper">
            <section className="front">
              <Technologies
                technologies={["mongo", "postgresql"]}
                iconClass="techLearnedIcon"/>
            </section>
            <section className="back">
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
            </section>
          </div>
        </div>
      </section>
    </div>
)

export default Tech
