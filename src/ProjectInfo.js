import React from 'react'
import Technologies from './Technologies'

const ProjectInfo = ({project}) => (
      <div className="moreProjectInfoContainer">
        <h3>{project.title}</h3>
        <p className="projectDescription">{project.description}</p>
        <Technologies technologies={project.technologies} iconClass="techUsedIcon"/>
        <a href={project.github} title="Go to Code"><i className="fa fa-code codeIcon" aria-hidden="true"></i></a>
      </div>
)

export default ProjectInfo
