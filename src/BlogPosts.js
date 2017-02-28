import React from 'react'
import HtmlToReactParser from 'html-to-react';
const htmlToReactParser = new HtmlToReactParser.Parser();

const BlogPosts = (props) => {
  let posts;
  if(props.blogPosts) posts = props.blogPosts.map((item, index) => {
    return (
      <div className="post" key={index}>
        <div className="postTitle">
          {htmlToReactParser.parse(item.title, item.date, item.content)}
        </div>
        <div className="postDate">
          {htmlToReactParser.parse(item.date)}
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
