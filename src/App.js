import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './Nav'
import Header from './Header'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="headerPic" id="top">
          <Nav />
          <Header />
        </div>
        <section id="main">
          <div id="mainContainer">
            <AboutMe />
            <Projects />
          </div>
        </section>
        <Contact />
        <p className="footer">
          &copy; JP Earnest 2017
        </p>
      </div>
    );
  }
}

export default App;
