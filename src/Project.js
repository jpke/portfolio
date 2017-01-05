import React from 'react'
import Technologies from './Technologies'

const Project = (props) => (
      <div className="projectContainer">
        <h4>{props.title}</h4>
        <a href={props.deployLink} title={props.title + " App"}>
          <img src={props.image} className="projectImg" alt={props.title}/>
          <span className="sr-only">{props.title + " App"}</span>
        </a>
        <p className="projectDescription">{props.description}</p>
        <Technologies technologies={props.technologies} iconClass="techUsedIcon"/>
        <a href={props.github} title="Go to Code"><i className="fa fa-code icon" aria-hidden="true"></i></a>
      </div>
)

export default Project
