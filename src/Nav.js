import React from 'react'
import ContactIcons from './ContactIcons'

const Nav = () => (
  <div className="navFixed">
      <section className="navBar">
        <div id="navLinkContainer">
          <a href="#aboutMe" className="navLink" title="About Me">About Me</a>
          <a href="#projects" className="navLink" title="Sample Projects">Projects</a>
          <a href="#contact" className="navLink" title="Contact Info and Form">Contact</a>
        </div>
        <ContactIcons />
      </section>
  </div>
)

export default Nav
