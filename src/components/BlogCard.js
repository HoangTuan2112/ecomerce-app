import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src={`${process.env.PUBLIC_URL}/images/blog-1.jpg`} className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">5/8/2024</p>
        <h5 className="tittle">A beautiful sunday morning renaissance</h5>
        <p className="desc">Nguyen Hoang Tuan vippro</p>
        <Link to="/blog/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
