import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Nav from './Nav'
import Landing from './Landing'
import AboutMe from './AboutMe'
import BlogPosts from './BlogPosts'
import Projects from './Projects'
import Contact from './Contact'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPosts: false,
      view: "about"
    };
    fetch("https://public-api.wordpress.com/rest/v1.1/sites/jpearnestblog.wordpress.com/posts/?number=10")
    .then(response => {
      if(response.status !== 200) {
        console.log("error in fetching blog posts: ", response);
      } else {
        return response = response.json();
      }
    })
    .then(response => {
      this.setState({
        blogPosts: response.posts
      });
    });
  }
  toggleView(event) {
    this.setState({view: event.target.className})
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.view !== this.state.view) {
      let bodyRect = document.body.getBoundingClientRect(),
      elemRect = document.getElementById("main").getBoundingClientRect(),
      offset   = elemRect.top - bodyRect.top;
      if(pageYOffset > offset) {
        window.scrollTo(0, offset);
      }
    }
  }
  render() {
    return (
      <div id="App">
        <section id="top">
          <Nav />
          <Landing />
        </section>
        <section id="main">
          <div id="sectionContainer">
            {this.state.view === "about" &&
              <AboutMe toggleView={this.toggleView.bind(this)} />}
            {this.state.view === "apps" &&
              <Projects toggleView={this.toggleView.bind(this)} />}
            {this.state.view === "blog" &&
              <BlogPosts toggleView={this.toggleView.bind(this)} blogPosts={this.state.blogPosts} />}
          <div className="downArrow">
            <a href="#contact"><i className="fa fa-chevron-down" aria-hidden="true"></i></a>
          </div>
        </div>
        </section>
        <section id="contactAndFooter">
          <Contact />
          <div id="footer">
            <div id="placeholderDiv" className="footerBox"></div>
            <div id="copyRight" className="footerBox"><p>&copy; JP Earnest 2017</p></div>
            <div id="photoCredit" className="footerBox">
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
