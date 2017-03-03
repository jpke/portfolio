import React from 'react'

const ProjectInfo = ({project}) => (
      <div id="moreProjectInfoContainer">
        <h3>{project.title}</h3>
        <p className="projectDescription">{project.description}</p>
        <div className="projectTimeSpan">
          <h5>Development Period:</h5>
          <h5>{project.moreInfo.timespan}</h5>
        </div>
        <div className="listTitleContainer">
          <h4>Roles</h4>
        </div>
        <ul className="responsibilities">
          {project.moreInfo.responsibilities.map((responsibility, index) => {
            return <li key={index}>{responsibility}</li>
          })}
        </ul>
        <div className="listTitleContainer">
          <h4>Takeaways</h4>
        </div>
        <ul className="learned">
          {project.moreInfo.learned.map((lesson, index) => {
            return <li key={index}>{lesson}</li>
          })}
        </ul>
        <button className="moreInfo" onClick={() => {project.showMoreInfo()}}>Close</button>
      </div>
)

export default ProjectInfo
