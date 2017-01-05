import React from 'react'
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


const Tech = () => (
  <section>
    <div className="tech">
      <div className="techDiv">
        <h3>Languages</h3>
        <img src={html} className="technologies" alt="html"/>
        <img src={css} className="technologies" alt="css"/>
        <img src={js} className="technologies" alt="javascript"/>
        <img src={R} className="technologies" alt="R"/>
      </div>
      <div className="techDiv">
        <h3>Frameworks</h3>
        <img src={rct} className="technologies" alt=" react"/>
        <img src={rctnative} className="technologies" alt=" react-native"/>
        <img src={jquery} className="technologies" alt=" jQuery"/>
        <img src={node} className="technologies" alt=" node"/>
      </div>
      <div className="techDiv">
        <h3>Databases</h3>
        <img src={mongodb} className="technologies" alt="mongodb"/>
        <img src={postgresql} className="technologies" alt="postgreSQL"/>
      </div>
    </div>
  </section>
)

export default Tech
