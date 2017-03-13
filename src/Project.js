import React from 'react'
import Technologies from './Technologies'

const Project = (props) => (
      <div className="projectContainer">
        <h3>{props.title}</h3>
        <div className="projectImgContainer">
          <a href={props.deployLink} target="_blank" title={props.title + " App"}>
            <img src={props.image} className="projectImg" alt={props.title}/>
            <span className="sr-only">{props.title + " App"}</span>
            <p>Demo</p>
          </a>
        </div>
        <p className="projectDescription">{props.description}</p>
        <Technologies technologies={props.technologies} iconClass="techUsedIcon"/>
        <div className="moreInfoContainer">
          <a href={props.github} target="_blank" title="Go to Code">
            <button className="moreInfo">
              <i className="fa fa-code codeIcon" aria-hidden="true"></i>
            </button>
          </a>
          <button className="moreInfo" onClick={(event) => {
              event.stopPropagation()
              props.showMoreInfo(props)}}>
            More
          </button>
        </div>
      </div>
)

export default Project
