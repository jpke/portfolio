import React from 'react'
import profile from '../public/images/profileMe.jpg'
import Tech from './Tech'

const AboutMe = () => (
  <div>
    <div id="aboutMe">
      <h2>About</h2>
      <div className="aboutMeContentTechContainer">
        <section className="aboutMeContent">
          <div className="aboutMeText">
            <p>Fullstack Javascript Web Developer here, eager for opportunities to work in the <a href="http://mern.io/" title="MERN stack"><strong>MERN</strong></a> stack or to grow into other stacks. You'll see several examples of my work below.</p>
            <p>Coding is one of my favorite activities. I love the creativity it enables and the satisfaction of writing features into existence. I'm amazed at how we can shape our world through representing and molding it through the electrons in our machines.</p>
            <p>Besides web development, I have a diverse professional background in massage therapy and online teaching. I'm also an avid yoga practitioner and dabble in <a href="https://github.com/jpke/Sample-Work" target="_blank" title="data science"><strong>data science</strong></a>. You can find out more about me in my <a href="/JP-Earnest-Resume.pdf" target="_blank" title="Resume"><strong>resume</strong></a> and even more at <a href="https://www.linkedin.com/in/jp-earnest" title="LinkedIn"><strong>LinkedIn</strong></a>.</p>
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
