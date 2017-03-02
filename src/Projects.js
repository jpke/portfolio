import React from 'react'
import Project from './Project'

import eLearn from '../public/images/eLearnQuiz.jpg'
import bulldogquizapp from '../public/images/bulldogquizapp.jpg'
import ewokese from '../public/images/ewokese.jpg'
import ticTacToe from '../public/images/ticTacToe.png'
import blogAppReactNative from '../public/images/blogAppReactNative.jpg'
import medicationReminder from '../public/images/medicationReminder.jpg'

const Projects = (props) => (
  <div>
    <h2>Apps</h2>
    <div className="sectionNav">
      <button className="about" onClick={(e) => {props.toggleView(e)}}>About</button>
      <button className="blog" onClick={(e) => {props.toggleView(e)}}>Blog</button>
    </div>
    <div className="projectsContainer">
      <section className="projects-row">
        <Project
          title="eLearn"
          deployLink="https://portfolio-express.herokuapp.com/elearn/#/"
          image={eLearn}
          description="Online learning platform delivering course files and interactive quizzes while tracking student performance"
          github="https://github.com/jpke/elearn"
          technologies={["html", "css", "javascript", "react", "node", "mongo"]}
        />
        <Project
          title="Learn Ewokese"
          deployLink="https://jpke.github.io/spaced-rep-deploy/"
          image={ewokese}
          description="Teaches Ewok words using a spaced-repetition algorithm"
          github="https://github.com/jpke/spaced-rep-deploy/tree/deploy"
          technologies={["html", "css", "javascript", "react", "node", "mongo"]}
        />
      </section>
      <section className="projects-row minHeightRow">
        <Project
          title="Blog App"
          deployLink="https://appetize.io/app/jnhahxte9j2wwygntg5jummhjr?device=iphone5s&scale=75&orientation=portrait&osVersion=9.3"
          image={blogAppReactNative}
          description="A basic blog created with react native for iOS"
          github="https://github.com/jpke/BlogApp"
          technologies={["html", "css", "javascript", "react-native", "node", "mongo"]}
        />
        <Project
          title="Medication Reminder"
          deployLink="https://jpke.github.io/medicationReminder_Portfolio"
          image={medicationReminder}
          description="An app to generate email reminders to take a medication at a specific time every week"
          github="https://github.com/jpke/medicationReminder_Portfolio"
          technologies={["html", "css", "javascript", "react", "node", "mongo"]}
        />
      </section>
      <section className="projects-row">
        <Project
          title="Bulldog Quiz"
          deployLink="https://jpke.github.io/bulldogquizapp/"
          image={bulldogquizapp}
          description="Lighthearted interactive multiple-choice quiz about bulldogs"
          github="https://github.com/jpke/bulldogquizapp"
          technologies={["html", "css", "javascript", "jquery"]}
        />
        <Project
          title="Tic Tac Toe"
          deployLink="https://jpke.github.io/tic-tac-toe_portfolio/"
          image={ticTacToe}
          description="A modular tic tac toe app, where players can play other players or the computer, and multiple games can be run simultaneously"
          github="https://github.com/jpke/tic-tac-toe_portfolio"
          technologies={["html", "css", "javascript", "react"]}
        />
      </section>
    </div>
  </div>
)

export default Projects
