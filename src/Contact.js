import React from 'react'
import ContactIcons from './ContactIcons'

const Contact = () => (
  <div id="contact">
    <div className="contactContainer">
      <h2>Contact</h2>
      <ContactIcons className="contact"/>
      <section id="contactInfo">
        <h4>jp earnest</h4>
        <h4>fredericksburg, va</h4>
        <a href="mailto:jp@jpearnest.com"><h4>jp@jpearnest.com</h4></a>
      </section>
    </div>
    <div className="upArrow">
      <a href="#top"><i className="fa fa-chevron-up" aria-hidden="true"></i></a>
    </div>
  </div>
)

export default Contact
