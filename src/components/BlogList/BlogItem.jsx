import React from "react";
import "../BlogList/BlogItem.css";
import Button from "../../UI/Button";

const BlogItem = ({ title, content, author, date }) => {
  return (
    <div className="blog-item-wrapper">
      <h3>{title}</h3>
      <div className="blog-info">
        <span>By:{author}</span>
        <span>Date:{date}</span>
      </div>
      <div className="blog-desc">
        <p>{content}</p>
      </div>
      <div className="buttons">
      <Button color="primary" size="small">Edit</Button>
      <Button color="danger" size="small">Delete</Button>
      </div>
    </div>
  );
};

export default BlogItem;
