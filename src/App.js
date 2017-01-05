import React, { Component } from 'react';
import Nav from './Nav'
import Header from './Header'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="headerPic" id="top">
          <Nav />
          <Header />
        </section>
        <section id="main">
          <div id="mainContainer">
            <AboutMe />
            <Projects />
            <Footer />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
