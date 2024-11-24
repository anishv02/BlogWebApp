import React, { useState } from "react";
import Header from "./Header";
import BlogCard from "./BlogCard";
import "./component.css";

const BlogManager = () => {
  const [blogs, setBlogs] = useState([
    {
      writerName: "John Doe",
      heading: "React Basics",
      text: "React is a powerful JavaScript library for building user interfaces and allows the creation of reusable components.",
      image:
        "https://images.unsplash.com/photo-1672307974995-cd253f7f7eeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      writerName: "Jane Smith",
      heading: "CSS Tricks",
      text: "CSS can bring life to your web designs with styles, animations, and effects that enhance user experience.",
      image:
        "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3R5bGVzJTIwaW4lMjB3ZWJ8ZW58MHx8MHx8fDA%3D",
    },
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [newBlog, setNewBlog] = useState({
    writerName: "",
    heading: "",
    text: "",
    image: "",
  });
  const [selectedBlog, setSelectedBlog] = useState(null); // Track the selected blog for detailed view.

  const handleCreateBlog = () => setShowPopup(true);
  const handleClosePopup = () => {
    setShowPopup(false);
    setNewBlog({ writerName: "", heading: "", text: "", image: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newBlog.writerName && newBlog.heading && newBlog.text) {
      setBlogs([newBlog, ...blogs]); // Add new blog to the top
      handleClosePopup();
    } else {
      alert("Please fill out all required fields.");
    }
  };

  const handleCardClick = (blog) => setSelectedBlog(blog); // Open blog in detailed view.
  const handleCloseDetailPopup = () => setSelectedBlog(null); // Close detailed blog popup.

  return (
    <div className="blog-manager">
      {/* Header */}
      <Header onCreateBlog={handleCreateBlog} />

      {/* Blog Cards */}
      <div className="blog-list">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            writerName={blog.writerName}
            heading={blog.heading}
            text={blog.text}
            image={blog.image}
            onClick={() => handleCardClick(blog)} // Pass the clicked blog to the handler.
          />
        ))}
      </div>

      {/* Popup for Creating Blog */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Create a New Blog</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="writerName"
                placeholder="Writer's Name"
                value={newBlog.writerName}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="heading"
                placeholder="Blog Heading"
                value={newBlog.heading}
                onChange={handleInputChange}
                required
              />
              <textarea
                name="text"
                placeholder="Blog Text"
                value={newBlog.text}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="image"
                placeholder="Image URL (optional)"
                value={newBlog.image}
                onChange={handleInputChange}
              />
              <div className="popup-buttons">
                <button type="submit">Submit</button>
                <button type="button" onClick={handleClosePopup}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Popup for Detailed Blog View */}
      {selectedBlog && (
        <div className="popup-overlay">
          <div className="popup-content wide">
            <button className="close-btn" onClick={handleCloseDetailPopup}>
              &times;
            </button>
            <img
              src={selectedBlog.image}
              alt={selectedBlog.heading}
              className="popup-image"
            />
            <h2>{selectedBlog.heading}</h2>
            <p>{selectedBlog.text}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogManager;
