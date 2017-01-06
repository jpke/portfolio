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
        <section id="contactAndFooter">
          <Contact />
          <div id="footer">
            <div id="placeholderDiv" className="footerBox"></div>
            <div id="copyRight" className="footerBox"><p>&copy; JP Earnest 2017</p></div>
            <div id="photoCredit" className="footerBox">
              <p>Background Photo by <a href="https://www.flickr.com/photos/sodaniechea/7043471037/in/photolist-bQ1KhB-bHwvRF-bJpCxP-bxeCTy-byeXzm-bDKJTz">Sodanie Chea</a></p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
