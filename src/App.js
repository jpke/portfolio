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
        <div className="headerPic">
          <Nav />
          <Header />
        </div>
        <section id="main">
          <AboutMe />
          <Projects />
          <Contact />
          <p className="footer">
            &copy; JP Earnest 2017
          </p>
        </section>
      </div>
    );
  }
}

export default App;
