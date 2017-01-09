import React from 'react'
import profile from '../public/images/profile.png'
import Tech from './Tech'

const AboutMe = () => (
  <div>
    <div id="aboutMe">
      <h2>About</h2>
      <div className="aboutMeContentTechContainer">
        <section className="aboutMeContent">
          <div className="aboutMeText">
            <p>Hi and thanks for stopping in to check out my work! I'm completing Thinkful's Fullstack Javascript Web Development Bootcamp, and am looking for opportunities to continue growing as a developer. I've built several apps showing my experience. You can check them out below. </p>
            <p>Coding is one of my favorite activities. I love the creativity it enables and the satisfaction of writing apps into existence.</p>
            <p>Besides web development, I have a background in health and wellness. I teach pathophysiology online, dabble in data science and practice massage therapy and yoga.</p>
          </div>
          <div className="profilePicContainer">
            <img src={profile} className="profilePic" alt=" profile"/>
          </div>
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
