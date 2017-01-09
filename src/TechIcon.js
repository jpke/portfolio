import React from 'react'

const TechIcon = (props) => {
  return (props.iconClass === "techLearnedIcon") ?
  (
    <div className="techIcon">
      <img src={props.imgSrc} className={props.iconClass}key={props.index || ""} alt={props.tech}/>
    </div>
  )
  :
  (
    <div className="techIcon">
      <a href={props.techInfo} title={props.tech}>
        <img src={props.imgSrc} className={props.iconClass}key={props.index || ""} alt={props.tech}/>
      </a>
    </div>
  )
}

export default TechIcon
