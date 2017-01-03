import React from 'react'
import ContactMe from './ContactMe'

const Nav = () => (
  <section className="navbar">
    <div className="navigate">
      <a href="#aboutMe" title="About Me">About Me</a>
      <a href="#projects" title="Sample Projects">Projects</a>
      <a href="#contact" title="Contact Info and Form">Contact</a>
    </div>
    <ContactMe />
  </section>
)

export default Nav
