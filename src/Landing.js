import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

// const Landing = () => (
class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      welcome: ""
    }
  }
  componentDidMount() {
    this.setState({
      title: <div key="1"><h1>JP Earnest</h1><h2>FullStack Web Developer</h2></div>,
      welcome: <h2 id="welcome" key="1"><a href="#main">Welcome</a></h2>
    })
  }
  render() {
    return (
      <div className="landingContainer">
        <div className="cardContactTop">
          <h2>jp@jpearnest.com</h2>
          <h2>540.273.5906</h2>
        </div>
        <section className="titleContainer">
          <ReactCSSTransitionGroup
            transitionName="appear"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={300}>
              {this.state.title}
          </ReactCSSTransitionGroup>
        </section>
        <div className="downArrow">
          <ReactCSSTransitionGroup
            transitionName="welcome"
            transitionEnterTimeout={2500}
            transitionLeaveTimeout={300}>
              {this.state.welcome}
          </ReactCSSTransitionGroup>
          <a id="downToSection" href="#main"><i className="fa fa-chevron-down" aria-hidden="true"></i></a>
        </div>
          <h2 className="site">jpearnest.com</h2>
      </div>
    )
  }
}

export default Landing
