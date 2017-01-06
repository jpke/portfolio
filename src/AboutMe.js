import React from 'react'
import profile from '../public/profile.png'
import Tech from './Tech'

const AboutMe = () => (
  <div>
    <div id="aboutMe">
      <h2>About Me</h2>
      <div className="aboutMeContentTechContainer">
        <section className="aboutMeContent">
          <div className="aboutMeText">
            <p>Coding is one of the activities I enjoy most. I love the creativity and power of it. I love making it clean and clear. Most of all, I love to solve problems through it. I’m amazed by what man and machine can do together.</p>
            <p>When I’m not coding web or mobile applications I teach pathophysiology online, dabble in data science and practice massage therapy and yoga.</p>
          </div>
          <img src={profile} className="profilePic" alt=" profile"/>
        </section>
        <Tech />
      </div>
      <div className="downArrow">
        <a href="#projects"><i className="fa fa-chevron-down" aria-hidden="true"></i></a>
      </div>
    </div>
  </div>
)

export default AboutMe
