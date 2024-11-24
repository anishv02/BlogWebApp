import React from "react";
import "./component.css";

const BlogCard = ({ writerName, heading, text, image, onClick }) => {
  const truncatedText =
    text.split(" ").length > 15
      ? text.split(" ").slice(0, 15).join(" ") + "..."
      : text;

  return (
    <div className="blog-card" onClick={onClick}>
      <img src={image} alt={heading} />
      <h2>{heading}</h2>
      <p>{truncatedText}</p>
      <p className="writer-name">- {writerName}</p>
    </div>
  );
};

export default BlogCard;
