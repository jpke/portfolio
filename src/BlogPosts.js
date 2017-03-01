import React from 'react'
import HtmlToReactParser from 'html-to-react'
import formatAMPM from './utils/dateFormatter'

const htmlToReactParser = new HtmlToReactParser.Parser()

const BlogPosts = (props) => {
  let posts;
  if(props.blogPosts) posts = props.blogPosts.map((item, index) => {
    // if(index === 0) return;
    return (
      <div className="post" key={index}>
        <div className="postTitle">
          <h3>
            {htmlToReactParser.parse(item.title)}
          </h3>
        </div>
        <div className="postDate">
          <div className="postDateDescription">
            created:
            <br></br>
            {item.modified && "updated:"}
          </div>
          <div className="dateTimes">
            {formatAMPM(item.date)}
            <br></br>
            {item.modified && formatAMPM(item.modified)}
          </div>
        </div>
        {htmlToReactParser.parse(item.content)}
      </div>
    )
  })
  return (
    <div className="postsContainer">
      <h2>Blog</h2>
      <div className="sectionNav">
        <button className="apps" onClick={(e) => {props.toggleView(e)}}>Apps</button>
        <button className="about" onClick={(e) => {props.toggleView(e)}}>About</button>
      </div>
      {posts}
    </div>
  )
}

export default BlogPosts
