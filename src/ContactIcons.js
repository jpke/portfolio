import React from 'react'

const ContactIcons = (props) => (
    <section className={props.className + " contactIcons"}>
      <a href="mailto:jp@jpearnest.com" className="fa fa-envelope fa-fw" aria-hidden="true" title="Email"><span className="sr-only">Email Me</span></a>
      <a href="https://github.com/jpke" className="fa fa-github fa-fw" aria-hidden="true" title="GitHub"><span className="sr-only">GitHub Profile</span></a>
      <a href="https://www.linkedin.com/in/jp-earnest" className="fa fa-linkedin-square fa-fw" aria-hidden="true" title="LinkedIn"><span className="sr-only">LinkedIn Profile</span></a>
    </section>
)

export default ContactIcons
