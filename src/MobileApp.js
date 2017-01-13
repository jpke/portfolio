import React from 'react'
import Technologies from './Technologies'

const MobileApp = (props) => (
      <div className="projectContainer mobile">
        <h3>{props.title}</h3>

        <iframe src="https://appetize.io/embed/zkg2kzmqj909hgxt29q34252tc?device=iphone5s&scale=75&orientation=portrait&osVersion=9.3" width="278px" height="590px" frameborder="0" scrolling="no"></iframe>
        <p className="projectDescription">{props.description}</p>
        <Technologies technologies={props.technologies} iconClass="techUsedIcon"/>
        <a href={props.github} title="Go to Code"><i className="fa fa-code codeIcon" aria-hidden="true"></i></a>
      </div>
)

export default MobileApp

    // <iframe src="https://appetize.io/embed/zkg2kzmqj909hgxt29q34252tc?device=iphone5s&scale=75&orientation=portrait&osVersion=9.3" width="278px" height="590px" frameborder="0" scrolling="no"></iframe>
