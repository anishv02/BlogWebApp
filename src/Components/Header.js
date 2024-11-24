import React from "react";
import "./component.css";

const Header = ({ onCreateBlog }) => {
  return (
    <header className="header">
      <h4>All Blog Posts</h4>
      <button className="create-blog-button" onClick={onCreateBlog}>
        Create Blog
      </button>
    </header>
  );
};

export default Header;
