import React from 'react'
import ContactMe from './ContactMe'

const Contact = () => (
  <div id="contact">
    <h3>Contact</h3>
    <ContactMe />
    <section id="contactInfo">
      <h4>jp earnest</h4>
      <h4>fredericksburg, va</h4>
      <h4>jp@jpearnest.com</h4>
    </section>
    <div className="upArrow">
      <a href="#top"><i className="fa fa-chevron-up" aria-hidden="true"></i></a>
    </div>
  </div>
)

export default Contact
