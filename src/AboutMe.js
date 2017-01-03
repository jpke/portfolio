import React from 'react'
import profile from '../public/profile.png'

const AboutMe = () => (
  <div>
    <div className="aboutMeContainer" id="aboutMe">
      <h3>About Me</h3>
      <section className="aboutMeTop">
        <div className="aboutMeText">
          <p className="aboutMeBlurb">Based in Fredericksburg, VA, I enjoy the variety of multiple professions. Besides a fullstack javascript developer, I also dabble in data science, teach physiology and pathophysiology in an online graduate nursing program and am a certified massage therapist.</p>
          <p className="aboutMeBlurb">Coding is one of the activities I enjoy most. I love the creativity and power of it. I love making it clean and clear. Most of all, I love to solve problems through it.</p>
        </div>
        <div className="profilePicContainer">
          <img src={profile} className="profilePic" alt=" profile"/>
        </div>
      </section>
    </div>
  </div>
)

export default AboutMe
