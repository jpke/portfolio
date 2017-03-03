import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import fetch from 'isomorphic-fetch';
import Nav from './Nav'
import Landing from './Landing'
import AboutMe from './AboutMe'
import BlogPosts from './BlogPosts'
import Projects from './Projects'
import ProjectInfo from './ProjectInfo'
import Contact from './Contact'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPosts: false,
      view: "about",
      project: false
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
    if(this.state.project) {
      this.setState({
        view: event.target.className,
        project: false
      })
    } else {
      this.setState({view: event.target.className})
    }
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
    if(prevState.project !== this.state.project && this.state.project) {
      console.log(window.scrollY, innerHeight, window.scrollY + (innerHeight * 0.15))
      let moreProjectInfoElement = document.getElementById("moreProjectInfoContainer")
      moreProjectInfoElement.style.top = (window.scrollY + (innerHeight * 0.15)).toString() + "px";
    }
  }
  showMoreInfo(project) {
    if(project) {
      this.setState({
        project: project
      })
    } else {
      this.setState({
        project: false
      })
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
          <div className="sectionContainer">
            <ReactCSSTransitionGroup
              transitionName="toggle"
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}>
                {this.state.view === "about" &&
                  <AboutMe toggleView={this.toggleView.bind(this)} />}
                {this.state.view === "apps" &&
                  <Projects toggleView={this.toggleView.bind(this)}
                            showMoreInfo={this.showMoreInfo.bind(this)}/>}
                {this.state.project &&
                  <ProjectInfo project={this.state.project} />}
                {this.state.view === "blog" &&
                  <BlogPosts toggleView={this.toggleView.bind(this)} blogPosts={this.state.blogPosts} />}
            </ReactCSSTransitionGroup>
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
