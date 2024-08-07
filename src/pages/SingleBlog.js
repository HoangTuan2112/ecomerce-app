import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

const SingleBlog = () => {
  return (
    <div>
      <Meta title="Single Blog" />
      <BreadCrumb title="Single Blog" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
              <Link to="/blog" ><HiOutlineArrowLeft className="fs-4"></HiOutlineArrowLeft>Go Back to Blogs</Link>
                <h3 className="tittle">
                  A beautiful sunday morning renaissance
                </h3>
                <img
                  src="images/blog-1.jpg"
                  class="img-fluid w-100 my-4"
                  alt="blog"
                ></img>
                <p>
                  Sunday is here. A day for rest and recharging, for having fun
                  and to spend time with the people you love. So to help you
                  with that I’d like to share to the most inspiring Good morning
                  Sunday wishes, messages and greetings to make sure you have a
                  great Sunday morning and day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
