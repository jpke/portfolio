import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AboutMe from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="nav">
          <a href="#">About Me</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </section>
        <section className="header">
          <h1>Portfolio</h1>
          <h2>of</h2>
          <h2>Web and Mobile Development</h2>
        </section>
        <section className="main">
          <AboutMe />
          <Projects />
          <Contact />
        </section>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
