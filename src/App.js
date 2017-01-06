import React, { Component } from 'react';
import Nav from './Nav'
import Landing from './Landing'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <div id="App">
        <section id="top">
          <Nav />
          <Landing />
        </section>
        <section id="main">
          <AboutMe />
          <Projects />
        </section>
        <section id="footer">
          <Contact />
          <p>&copy; JP Earnest 2017</p>
        </section>
      </div>
    );
  }
}

export default App;
