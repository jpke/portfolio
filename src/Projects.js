import React from 'react'
import Project from './Project'

import eLearn from '../public/images/eLearnQuiz.jpg'
import bulldogquizapp from '../public/images/bulldogquizapp.jpg'
import ewokese from '../public/images/ewokese.jpg'
import pah from '../public/images/pah.jpg'
import bookStore from '../public/images/bookStore.jpg'
import youTubeApp from '../public/images/youTubeApp.jpg'
import blogAppReactNative from '../public/images/blogAppReactNative.jpg'
import medicationReminder from '../public/images/medicationReminder.jpg'

const Projects = (props) => (
  <div onClick={() => {props.showMoreInfo()}}>
    <h2>Apps</h2>
    <div className="sectionNav">
      <button className="about" onClick={(e) => {props.toggleView(e)}}>About</button>
      <button className="blog" onClick={(e) => {props.toggleView(e)}}>Blog</button>
    </div>
    <div className="projectsContainer">
      <section className="projects-row row-top">
        <Project
          title="eLearn"
          deployLink="https://portfolio-express.herokuapp.com/elearn/#/"
          image={eLearn}
          description="Online learning platform delivering course files and interactive quizzes while tracking student performance"
          github="https://github.com/jpke/elearn"
          technologies={["html", "css", "javascript", "react", "node", "mongo"]}
          moreInfo={{
            timespan: "three weeks",
            responsibilities: ["entire app - solo project"],
            learned: ["developed data structure and flow for multiple related objects, including users, courses, quizzes and lessons", "REST api CRUD operations", "used BOX api for filesystem", "application state managed with multiple redux reducers", "heroku deployment", "react slingshot build template"]
          }}
          showMoreInfo={props.showMoreInfo}
        />
        <Project
          title="Learn Ewokese"
          deployLink="https://jpke.github.io/spaced-rep-deploy/"
          image={ewokese}
          description="Teaches Ewok words using a spaced-repetition algorithm"
          github="https://github.com/jpke/spaced-rep-deploy"
          technologies={["html", "css", "javascript", "react", "node", "mongo"]}
          moreInfo={{
            timespan: "one week",
            responsibilities: ["Google OAuth 2.0", "react assistance", "team lead"],
            learned: ["managed application state with redux", "heroku deployment", "create react app built template", "lead team - facillitated discussion and formed consensus"]
          }}
          showMoreInfo={props.showMoreInfo}
        />
      </section>
      <section className="projects-row minHeightRow">
        <Project
          title="Pocket Bookstore"
          deployLink="https://appetize.io/app/0d2ja651raq80n91emjr37h5tr?device=iphone6s&scale=75&orientation=portrait&osVersion=10.2"
          image={bookStore}
          description="Provides client-side checkout flow for buying a book from an online bookstore."
          github="https://github.com/jpke/bookstore"
          technologies={["javascript", "react-native"]}
          moreInfo={{
            timespan: "4 days",
            responsibilities: ["entire app - solo project"],
            learned: ["react native iOS app", "first project with Create React Native App", "first React Native project implementing Redux and Jest snapshots", "deployed app prototype to appetize.io"]
          }}
          showMoreInfo={props.showMoreInfo}
        />
        <Project
          title="Blog App"
          deployLink="https://appetize.io/app/jnhahxte9j2wwygntg5jummhjr?device=iphone5s&scale=75&orientation=portrait&osVersion=9.3"
          image={blogAppReactNative}
          description="A basic blog created with react native for iOS"
          github="https://github.com/jpke/mobileBlogApp"
          technologies={["javascript", "react-native", "node", "mongo"]}
          moreInfo={{
            timespan: "one week",
            responsibilities: ["entire app - solo project"],
            learned: ["react native iOS app", "json web token authentication", "REST api CRUD operations", "deployed app prototype to appetize.io"]
          }}
          showMoreInfo={props.showMoreInfo}
        />
      </section>
      <section className="projects-row">
        <Project
          title="Pancakes Against Humanity"
          deployLink="https://pah-cah.herokuapp.com/"
          image={pah}
          description="A pancake-themed rendition of Cards Against Humanity"
          github="https://github.com/fantastic-pancake/pancakes-against-humanities"
          technologies={["html", "css", "javascript", "react", "node", "mongo"]}
          moreInfo={{
            timespan: "one week",
            responsibilities: ["Facebook OAuth 2.0", "websockets proof of concept", "game card CSS styling", "user profile pics in game and chat room"],
            learned: ["groked unfamiliar codebase", "learned RxJS to understand codebase", "adapted and added features to prewritten codebase", "gulp for build system"]
          }}
          showMoreInfo={props.showMoreInfo}
        />
        <Project
          title="Medication Reminder"
          deployLink="https://jpke.github.io/medicationReminder_Portfolio"
          image={medicationReminder}
          description="An app to generate email reminders to take a medication at a specific time every week"
          github="https://github.com/jpke/medicationReminder_Portfolio"
          technologies={["html", "css", "javascript", "react", "node", "mongo"]}
          moreInfo={{
            timespan: "one week",
            responsibilities: ["REST api"],
            learned: ["basic authentication", "REST api CRUD operations", "utilized node-schedule and mailjet to automate reminder emails"]
          }}
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
          moreInfo={{
            timespan: "1.5 days",
            responsibilities: ["entire app - pair coded it with partner"],
            learned: ["used jQuery to listen and respond to user actions", "managed application state using jQuery", "deployed to gh-pages"]
          }}
          showMoreInfo={props.showMoreInfo}
        />
        <Project
          title="YouTube Search App"
          deployLink="https://appetize.io/app/gt4bgr085u7xtdvztz35k27u40?device=iphone5s&scale=75&orientation=portrait&osVersion=9.3"
          image={youTubeApp}
          description="Search YouTube videos on iOS with react native"
          github="https://github.com/jpke/YouTubeApp"
          technologies={["javascript", "react-native"]}
          moreInfo={{
            timespan: "one day",
            responsibilities: ["entire app - solo project"],
            learned: ["simple react native iOS app", "calls YouTube api", "plays video in app, using webview"]
          }}
          showMoreInfo={props.showMoreInfo}
        />
      </section>
    </div>
  </div>
)

//placeholder if there is an odd number of projects
// <div id="placeholder" className="projectContainer"></div>

export default Projects

// <Project
//   title="Tic Tac Toe"
//   deployLink="https://jpke.github.io/tic-tac-toe_portfolio/"
//   image={ticTacToe}
//   description="A modular tic tac toe app, where players can play other players or the computer, and multiple games can be run simultaneously"
//   github="https://github.com/jpke/tic-tac-toe_portfolio"
//   technologies={["html", "css", "javascript", "react"]}
//   moreInfo={{
//     timespan: "one day",
//     responsibilities: ["entire app - pair coded it with partner"],
//     learned: ["gained experience working in react", "built a modular app, where an indeterminate number of components could be created by user", "learned how to manage application state using react only"]
//   }}
//   showMoreInfo={props.showMoreInfo}
// />
