import React from 'react'
import profile from '../public/profile.png'
import Tech from './Tech'

const AboutMe = () => (
  <div>
    <div className="aboutMeContainer" id="aboutMe">
      <h3>About Me</h3>
      <section className="aboutMeTop">
        <div className="aboutMeText">
          <p className="aboutMeBlurb">Coding is one of the activities I enjoy most. I love the creativity and power of it. I love making it clean and clear. Most of all, I love to solve problems through it. I’m amazed by what man and machine can do together.</p>
          <p className="aboutMeBlurb">When I’m not coding web or mobile applications I teach pathophysiology online, dabble in data science and practice massage therapy and yoga.</p>
        </div>
        <div className="profilePicContainer">
          <img src={profile} className="profilePic" alt=" profile"/>
        </div>
      </section>
      <Tech />
      <div className="downArrow">
        <a href="#projects"><i className="fa fa-chevron-down" aria-hidden="true"></i></a>
      </div>
    </div>
  </div>
)

export default AboutMe
