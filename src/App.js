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
      blogPosts: false
    };
    fetch("https://public-api.wordpress.com/rest/v1.1/sites/jpearnestblog.wordpress.com/posts/?number=2&pretty=true")
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
  render() {
    return (
      <div id="App">
        <section id="top">
          <Nav />
          <Landing />
        </section>
        <section id="main">
          <AboutMe />
          <BlogPosts blogPosts={this.state.blogPosts} />
          <Projects />
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
