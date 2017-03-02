import React from 'react'
import Technologies from './Technologies'

const Project = (props) => (
      <div className="projectContainer">
        <h3>{props.title}</h3>
        <div className="projectImgContainer">
          <a href={props.deployLink} title={props.title + " App"}>
            <img src={props.image} className="projectImg" alt={props.title}/>
            <span className="sr-only">{props.title + " App"}</span>
          </a>
        </div>
        <p className="projectDescription">{props.description}</p>
        <Technologies technologies={props.technologies} iconClass="techUsedIcon"/>
        <a href={props.github} title="Go to Code"><i className="fa fa-code codeIcon" aria-hidden="true"></i></a>
        <div className="moreInfoContainer">
          <button className="moreInfo" onClick={() => {props.showMoreInfo(props)}}>
            More
          </button>
        </div>
      </div>
)

export default Project
