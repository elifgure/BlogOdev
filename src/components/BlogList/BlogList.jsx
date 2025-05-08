import React, { useState } from "react";
import { blogData } from "../../Data/blogData";
import BlogItem from "./BlogItem";
import "../BlogList/BlogList.css";
import AddNewBlog from "./AddNewBlog";

function BlogList() {
  const[blogs, setBlogs] = useState(blogData)
  return (
    <div className="container">
      <header className="bloglist-header">
        <h1>Blog Management App</h1>
      </header>
      <div className="blog-wrapper">
      <div className="add-blog-wrapper">
        <AddNewBlog setBlogs={setBlogs}/>
      </div>
      <div className="blog-content">
      <div className="search-blogs">
       <div className="search-input">
       <input type="text" placeholder="Search Blogs..." />
       </div>
        <div className="select">
          <label>Sort By:</label>
          <select name="" id="">
            <option value="date">Date</option>
            <option value="author">Author</option>
          </select>
        </div>
      </div>
      <div className="blog-posts">
        <h2>Blog Posts</h2>
        {blogs.map((blog) => (
          <BlogItem
            key={blog.id}
            title={blog.title}
            content={blog.content}
            author={blog.author}
            date={blog.date}
          />
        ))}
      </div>
      </div>
      </div>
    </div>
  );
}

export default BlogList;
