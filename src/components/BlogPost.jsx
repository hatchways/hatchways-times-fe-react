import React from "react";
import PropTypes from "prop-types";

import "../css/blogs.scss";

function BlogPost({ author, title, excerpt }) {
  return (
    <div className="blogsWrapper">
      <div className="blog">
        <div className="imageWrapper">
          <img
            className="authorImage"
            src={`https://joeschmoe.io/api/v1/${author}`}
            alt="Author"
          />
          <p variant="body">{author}</p>
        </div>

        <h2>{title}</h2>
        <p className="excerpt">{excerpt}</p>
      </div>
    </div>
  );
}

BlogPost.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string,
};

BlogPost.defaultProps = {
  author: "",
  title: "",
  excerpt: "",
};

export default BlogPost;
