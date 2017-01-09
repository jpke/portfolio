import React from 'react'
import Project from './Project'

import bulldogquizapp from '../public/images/bulldogquizapp.jpg'
import ewokese from '../public/images/ewokese.jpg'
import ticTacToe from '../public/images/ticTacToe.png'
import blogAppReactNative from '../public/images/blogAppReactNative.jpg'
import medicationReminder from '../public/images/medicationReminder.jpg'

const Projects = () => (
  <div id="projects">
    <h2>Apps</h2>
    <div className="projectsContainer">
      <Project
        title="Bulldog Quiz"
        deployLink="https://jpke.github.io/bulldogquizapp/"
        image={bulldogquizapp}
        description="Lighthearted interactive frontend application"
        github="https://github.com/jpke/bulldogquizapp"
        technologies={["html", "css", "js", "jquery"]}
      />
      <Project
        title="Learn Ewokese"
        deployLink="https://jpke.github.io/spaced-rep-deploy/"
        image={ewokese}
        description="Using a spaced-repetition algorithm, this project teaches words used by Ewoks"
        github="https://github.com/jpke/spaced-rep-deploy/tree/deploy"
        technologies={["html", "css", "js", "react", "node", "mongo"]}
      />
      <Project
        title="Tic Tac Toe"
        deployLink="https://jpke.github.io/tic-tac-toe_portfolio/"
        image={ticTacToe}
        description="A modular tic tac toe app, where players can play other players or the computer, and multiple games can be run simultaneously"
        github="https://github.com/jpke/tic-tac-toe_portfolio"
        technologies={["html", "css", "js", "react"]}
      />
      <Project
        title="Medication Reminder"
        deployLink="https://jpke.github.io/medicationReminder_Portfolio"
        image={medicationReminder}
        description="An app to generate email reminders to take a medication at a specific time every week"
        github="https://github.com/jpke/medicationReminder_Portfolio"
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
    <div className="downArrow aboutMeArrow">
      <a href="#contact"><i className="fa fa-chevron-down" aria-hidden="true"></i></a>
    </div>
  </div>
)

export default Projects
