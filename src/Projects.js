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
          moreInfo=[{
            timespan: "three weeks",
            responsibilities: ["entire app - solo project"],
            learned: ["developed data structure and flow for relatively complex app", "learned necessity of clearly planning app architecture before starting to code", "gained experience with CRUD operations in mongoDB", "learned how to use BOX api", "learned how to accept form input into redux and use it to edit app data"]
          }]
          showMoreInfo={props.showMoreInfo}
        />
        <Project
          title="Learn Ewokese"
          deployLink="https://jpke.github.io/spaced-rep-deploy/"
          image={ewokese}
          description="Teaches Ewok words using a spaced-repetition algorithm"
          github="https://github.com/jpke/spaced-rep-deploy/tree/deploy"
          technologies={["html", "css", "javascript", "react", "node", "mongo"]}
          moreInfo=[{
            timespan: "one week",
            responsibilities: ["implemented Google OAuth 2.0", "helped build react app", "lead team - facillitated discussion and formed consensus", "pioneered working in new (to us) build system, Create React App"],
            learned: ["learned to manage application state with redux", "deployment protocol varies with build system, understand requirements before committing to system"]
          }]
          showMoreInfo={props.showMoreInfo}
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
          moreInfo=[{
            timespan: "one week",
            responsibilities: ["entire app - solo project"],
            learned: ["gained experience working in react native", "successfully deployed app build to appetize"]
          }]
          showMoreInfo={props.showMoreInfo}
        />
        <Project
          title="Medication Reminder"
          deployLink="https://jpke.github.io/medicationReminder_Portfolio"
          image={medicationReminder}
          description="An app to generate email reminders to take a medication at a specific time every week"
          github="https://github.com/jpke/medicationReminder_Portfolio"
          technologies={["html", "css", "javascript", "react", "node", "mongo"]}
          moreInfo=[{
            timespan: "one week",
            responsibilities: ["serverside REST api"],
            learned: ["gained experience building a REST api", "saw the importance of clearly communicating api endpoint requirements between frontend and backend team"]
          }]
          showMoreInfo={props.showMoreInfo}
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
          moreInfo=[{
            timespan: "one or two days",
            responsibilities: ["entire app - pair coded it with partner"],
            learned: ["how to use jQuery to listen to and respond to user actions", "how to initialize, change and reset application state using jQuery", "gained experience styling app with CSS"]
          }]
          showMoreInfo={props.showMoreInfo}
        />
        <Project
          title="Tic Tac Toe"
          deployLink="https://jpke.github.io/tic-tac-toe_portfolio/"
          image={ticTacToe}
          description="A modular tic tac toe app, where players can play other players or the computer, and multiple games can be run simultaneously"
          github="https://github.com/jpke/tic-tac-toe_portfolio"
          technologies={["html", "css", "javascript", "react"]}
          moreInfo=[{
            timespan: "one day",
            responsibilities: ["entire app - pair coded it with partner"],
            learned: ["gained experience working in react", "built a modular app, where an indeterminate number of components could be created by user", "learned how to manage application state using react only"]
          }]
          showMoreInfo={props.showMoreInfo}
        />
      </section>
    </div>
  </div>
)

export default Projects
