import React from 'react'
import ewokese from '../public/ewokese.png'
import ticTacToe from '../public/ticTacToe.png'
import blogAppReactNative from '../public/blogAppReactNative.png'
import medicationReminder from '../public/medicationReminder.png'

const Projects = () => (
  <div id="projects">
    <h3>Projects</h3>
    <div className="projectsContainer">
      <div className="projectDiv">
        <h4>Learn Ewokese</h4>
        <a href="https://enigmatic-refuge-11264.herokuapp.com/#/" title="Learn Ewokese App">
          <img src={ewokese} className="projectImg" alt="Learn Ewokese"/>
          <span className="sr-only">Learn Ewokese App</span>
        </a>
        <p className="projectDescription">Using a spaced-repetitation algorithm, this project teaches words used by Ewoks</p>
        <a href="https://github.com/jpke/spaced-rep-deploy" title="Go to Client Side Code"><i className="fa fa-code icon" aria-hidden="true"></i></a>
        <a href="https://github.com/jpke/spaced-rep-express" title="Go to Server Side Code"><i className="fa fa-code icon" aria-hidden="true"></i></a>
      </div>
      <div className="projectDiv">
        <h4>Tic Tac Toe</h4>
        <a href="http://localhost:8080/" title="Go to App">
          <img src={ticTacToe} className="projectImg" alt="Tic Tac Toe"/>
          <span className="sr-only">Tic Tac Toe App</span>
        </a>
        <p className="projectDescription">A modular tic tac toe app, where players can play other players or the computer, and multiple games can be run simultaneously.</p>
        <a href="https://github.com/phc5/tic-tac-toe-react" title="Go to Code"><i className="fa fa-code icon" aria-hidden="true"></i></a>
      </div>
      <div className="projectDiv">
        <h4>Medication Reminder</h4>
        <a href="http://localhost:8080/" title="Medication Reminder App">
          <img src={medicationReminder} className="projectImg" alt="Medciation Reminder"/>
          <span className="sr-only">Medication Reminder App</span>
        </a>
        <p className="projectDescription">An app to generate email reminders to take a medication at a specific time every week</p>
        <a href="https://github.com/oshirodk/medicationReminder" title="Go to Code"><i className="fa fa-code icon" aria-hidden="true"></i></a>
      </div>
      <div className="projectDiv">
        <h4>BlogApp</h4>
        <a href="http://localhost:8080/#" title="Blog App">
          <img src={blogAppReactNative} className="projectImg" alt="Blog App"/>
          <span className="sr-only">Blog App created with React Native</span>
        </a>
        <p className="projectDescription">A basic blog created with react native for iOS</p>
        <a href="https://github.com/jpke/BlogApp" title="Go to Code"><i className="fa fa-code icon" aria-hidden="true"></i></a>
      </div>
    </div>
    <div className="downArrow">
      <a href="#contact"><i className="fa fa-chevron-down" aria-hidden="true"></i></a>
    </div>
  </div>
)

export default Projects
