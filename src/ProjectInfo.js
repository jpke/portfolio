import React from 'react'
import Technologies from './Technologies'

const ProjectInfo = ({project}) => (
      <div id="moreProjectInfoContainer">
        <h3>{project.title}</h3>
        <p className="projectDescription">{project.description}</p>
        <p className="projectTimeSpan">{project.moreInfo.timespan}</p>
        <ul className="responsibilities">
          {project.moreInfo.responsibilities.map((responsibility, index) => {
            return <li key={index}>{responsibility}</li>
          })}
        </ul>
        <ul className="learned">
          {project.moreInfo.learned.map((lesson, index) => {
            return <li key={index}>{lesson}</li>
          })}
        </ul>
      </div>
)

export default ProjectInfo
