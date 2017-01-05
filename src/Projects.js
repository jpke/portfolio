import React from 'react'
import Project from './Project'

import ewokese from '../public/ewokese.png'
import ticTacToe from '../public/ticTacToe.png'
import blogAppReactNative from '../public/blogAppReactNative.png'
import medicationReminder from '../public/medicationReminder.png'

const Projects = () => (
  <div id="projects">
    <h3>Projects</h3>
    <div className="projectsContainer">
      <Project
        title="Learn Ewokese"
        deployLink="https://enigmatic-refuge-11264.herokuapp.com/#/"
        image={ewokese}
        description="Using a spaced-repetitation algorithm, this project teaches words used by Ewoks"
        github="https://github.com/jpke/spaced-rep-deploy"
        technologies={["html", "css", "js", "react", "node", "mongo"]}
      />
      <Project
        title="Tic Tac Toe"
        deployLink="http://localhost:8080/"
        image={ticTacToe}
        description="A modular tic tac toe app, where players can play other players or the computer, and multiple games can be run simultaneously"
        github="https://github.com/phc5/tic-tac-toe-react"
        technologies={["html", "css", "js", "react"]}
      />
      <Project
        title="Medication Reminder"
        deployLink="http://localhost:8080/"
        image={medicationReminder}
        description="An app to generate email reminders to take a medication at a specific time every week"
        github="https://github.com/oshirodk/medicationReminder"
        technologies={["html", "css", "js", "react", "node", "mongo"]}
      />
      <Project
        title="Blog App"
        deployLink="http://localhost:8080/"
        image={blogAppReactNative}
        description="A basic blog created with react native for iOS"
        github="https://github.com/jpke/BlogApp"
        technologies={["html", "css", "js", "react-native", "node", "mongo"]}
      />
    </div>
    <div className="downArrow">
      <a href="#contact"><i className="fa fa-chevron-down" aria-hidden="true"></i></a>
    </div>
  </div>
)

export default Projects
