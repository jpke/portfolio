import React from 'react'
import ContactIcons from './ContactIcons'

const Nav = () => (
  <div id="navContainer">
      <section className="navBar">
        <div id="navLinkContainer">
          <a href="#aboutMe" className="navLink" title="About Me">About</a>
          <a href="#projects" className="navLink" title="Sample Projects">Apps</a>
          <a href="#contact" className="navLink" title="Contact Info and Form">Contact</a>
        </div>
        <ContactIcons className="nav"/>
      </section>
  </div>
)

export default Nav
