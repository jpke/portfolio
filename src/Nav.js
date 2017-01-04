import React from 'react'
import ContactMe from './ContactMe'

const Nav = () => (
  <section className="navbar">
    <div className="navigate">
      <a href="#aboutMe" className="navLink" title="About Me">About Me</a>
      <a href="#projects" className="navLink" title="Sample Projects">Projects</a>
      <a href="#contact" className="navLink" title="Contact Info and Form">Contact</a>
    </div>
    <ContactMe />
  </section>
)

export default Nav
