import React from "react";

const BlogInput = ({ label, type, name, handleChange }) => {
  return (
    <div className="form-control">
      <label>{label}</label>
      <input type={type} name={name}  onChange={handleChange}/>
    </div>
  );
};

export default BlogInput;
