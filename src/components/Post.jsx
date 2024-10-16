// Post.jsx
import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="post">
      <h3>{post.title}</h3>
      <img src={post.image} alt={post.title} />
      <p>{post.description}</p>
    </div>
  );
};

export default Post;
