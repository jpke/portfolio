import React from 'react'
import ContactMe from './ContactMe'

const Contact = () => (
  <div className="contactContainer" id="contact">
    <h3>Contact</h3>
    <ContactMe />
    <section id="contactInfo">
      <h4>jp earnest</h4>
      <h4>fredericksburg, va</h4>
      <h4>jpearnest08@gmail.com</h4>
      <h4>540.273.5906</h4>
    </section>
    <div className="formContainer">
      <form>
        <input type="text" className="contactForm" placeholder="your name"/>
        <input type="text" className="contactForm" placeholder="phone"/>
        <input type="text" className="contactForm" placeholder="email"/>
        <textarea type="text" className="contactForm message" col="40" placeholder="message"></textarea>
      </form>
    </div>
  </div>
)

export default Contact
