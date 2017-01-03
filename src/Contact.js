import React from 'react'

const Contact = () => (
  <div className="contactContainer">
    <h3>Contact</h3>
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
