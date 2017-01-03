import React from 'react'
import ewokese from '../public/ewokese.png'
import shoppingList from '../public/shoppingList.png'
import ticTacToe from '../public/ticTacToe.png'
import medicationReminder from '../public/medicationReminder.png'

const Projects = () => (
  <div id="projects">
    <h3>Projects</h3>
    <p>At least three projects will go here that will display my skillset</p>
    <div className="projectsContainer">
      <div className="projectDiv">
        <h4>Learn Ewokese</h4>
        <a href="https://enigmatic-refuge-11264.herokuapp.com/#/" title="Learn Ewokese App">
          <img src={ewokese} className="projectImg" alt="Learn Ewokese"/>
          <span className="sr-only">Learn Ewokese App</span>
        </a>
        <p>Using a spaced-repetitation algorithm, this project teaches words used by Ewoks</p>
      </div>
      <div className="projectDiv">
        <h4>Shopping List</h4>
        <a href="https://warm-brook-55891.herokuapp.com/#" title="Shopping List App">
          <img src={shoppingList} className="projectImg" alt="Shopping List"/>
          <span className="sr-only">Shopping List App</span>
        </a>
        <p>A basic list app where items can be added and deleted</p>
      </div>
      <div className="projectDiv">
        <h4>Tic Tac Toe</h4>
        <a href="http://localhost:8080/" title="Tic Tac Toe App">
          <img src={ticTacToe} className="projectImg" alt="Tic Tac Toe"/>
          <span className="sr-only">Tic Tac Toe App</span>
        </a>
        <p>A modular tic tac toe app, where players can play other players or the computer, and multiple games can be run simultaneously.</p>
      </div>
      <div className="projectDiv">
        <h4>Medication Reminder</h4>
        <a href="http://localhost:8080/" title="Medication Reminder App">
          <img src={medicationReminder} className="projectImg" alt="Medciation Reminder"/>
          <span className="sr-only">Medication Reminder App</span>
        </a>
        <p>An app to generate email reminders to take a medication at a specific time every week</p>
      </div>
    </div>
  </div>
)

export default Projects
