import React from 'react'
import HtmlToReactParser from 'html-to-react'
import formatAMPM from './utils/dateFormatter'

const htmlToReactParser = new HtmlToReactParser.Parser()

const BlogPosts = (props) => {
  let posts;
  if(props.blogPosts) posts = props.blogPosts.map((item, index) => {
    return (
      <div className="post" key={index}>
        <div className="postTitle">
          <h3>
            {htmlToReactParser.parse(item.title, item.date, item.content)}
          </h3>
        </div>
        <div className="postDate">
          created:  &nbsp; {formatAMPM(item.date)}
          <br></br>
          {item.modified && "updated: " + formatAMPM(item.modified)}
        </div>
        {htmlToReactParser.parse(item.content)}
      </div>
    )
  })
  return (
    <div id="posts">
      <div className="postsContainer">
        <h2>Blog</h2>
        {posts}
      </div>
    </div>
  )
}

export default BlogPosts
