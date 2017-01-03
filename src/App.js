import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import Header from './Header'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <section id="main">
          <AboutMe />
          <Projects />
          <Contact />
        </section>
        <div className="App-header">
        </div>
        <p className="App-intro">
          JP Earnest 2017
        </p>
      </div>
    );
  }
}

export default App;
