import React from 'react'
import me from '../public/me.jpg'

const AboutMe = () => (
  <div>
    <h3>About Me</h3>
    <div className="aboutMeContainer">
      <p className="aboutMeBlurb">A blurb about me will go here. It will be really interesting about how awesome I am.</p>
      <img src={me} className="profilePic" alt=" profile"/>
    </div>
  </div>
)

export default AboutMe
