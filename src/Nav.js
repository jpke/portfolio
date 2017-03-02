import React from 'react'
import ContactIcons from './ContactIcons'

const Nav = () => (
  <div id="navContainer">
      <section className="navBar">
        <div id="navLinkContainer">
          <a href="#main" className="navLink" title="About Me">Content</a>
          <a href="#contact" className="navLink" title="Contact Info and Form">Contact</a>
        </div>
        <ContactIcons className="nav"/>
      </section>
  </div>
)

export default Nav
