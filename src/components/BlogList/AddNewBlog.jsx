import React, { useState } from "react";
import "../BlogList/AddNewBlog.css";
import Button from "../../UI/Button";
import BlogInput from "./BlogInput";

const blogInputs = [
  {
    label: "Title",
    type: "text",
    name: "title",
  },
  {
    label: "Content",
    type: "text",
    name: "content",
  },
  {
    label: "Author",
    type: "text",
    name: "author",
  },
  {
    label: "Date",
    type: "date",
    name: "date",
  },
];

function AddNewBlog({ setBlogs }) {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    author: "",
    date: "",
  });
  function handleChange({ target: { name, value } }) {
    setBlog({ ...blog, [name]: value });
    console.log({ [name]: value })
  }
  function handleSubmit(event) {
    event.preventDefault();
  
    // 'date' inputunun boş olup olmadığını kontrol etmek
    const isFormValid = Object.entries(blog).every(([key, value]) => {
      if (key === "date") {
        return value !== ""; // 'date' inputu için boşluk kontrolü
      }
      return value.trim() !== ""; // Diğer inputlar için trim kontrolü
    });
  
    if (!isFormValid) {
      alert("Bütün inputları doldurunuz");
      return;
    }
  
    const { title, content, author, date } = blog;
    console.log(blog); 
    const newBlog = {
      title,
      content,
      author,
      date,
      id: Math.random(),
    };
    setBlogs((prevState) => [newBlog, ...prevState]);
   
  }
  
  return (
    <div className="add-blog-container">
      <h2>Add New Blog Post</h2>
      <form className="add-blog-form" onSubmit={handleSubmit}>
        {blogInputs.map((input, index) => (
          <BlogInput key={index} {...input} 
          value={blog[input.name]}
          handleChange={handleChange} />
        ))}
        <Button
          color="success"
          size="large"
          type="submit"
        >
          Add New Blog
        </Button>
      </form>
    </div>
  );
}
export default AddNewBlog;
