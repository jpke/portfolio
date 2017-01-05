import React from 'react'
import TechIcon from './TechIcon'

import html from '../public/html.svg'
import css from '../public/css.svg'
import js from '../public/js.svg'
import R from '../public/R.png'
import rct from '../public/react.svg'
import rctnative from '../public/rn.svg'
import jquery from '../public/jquery.svg'
import node from '../public/node.svg'
import mongodb from '../public/mongodb.svg'
import postgresql from '../public/postgresql.png'

function selectIcon(tech) {
  switch (tech) {
    case 'html':
      return [html, "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"]
    case 'css':
      return [css, "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3"]
    case 'js':
      return [js, "https://developer.mozilla.org/en-US/docs/Web/JavaScript"]
    case 'R':
      return [R, "https://www.r-project.org/"]
    case 'react':
      return [rct, "https://facebook.github.io/react/"]
    case 'react-native':
      return [rctnative, "https://facebook.github.io/react-native/"]
    case 'jquery':
      return [jquery, "https://jquery.com/"]
    case 'node':
      return [node, "https://nodejs.org/en/"]
    case 'mongo':
      return [mongodb, "https://www.mongodb.com/"]
    case 'postgresql':
      return [postgresql, "https://www.postgresql.org/"]
    default:
      return null
  }
}

const Technologies = (props) => (
    <section className="techUsed">
      {props.technologies.map((tech, index) =>
          <TechIcon
            techInfo={selectIcon(tech)[1]}
            tech={tech}
            imgSrc={selectIcon(tech)[0]}
            iconClass={props.iconClass}
            key={index}
          />
        )}
    </section>
)

export default Technologies
