import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import BlogCard from "../components/BlogCard";

const Blog = () => {
  return (
    <div>
      <Meta tittle="Blog" />
      <BreadCrumb tittle="Blog" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
            <div className="filter-card mb-3">
                <h3 className="filter-tittle">Shop By Brand</h3>
                <div>
                  <ul className="ps-0">
                    <li >Panerai</li>
                    <li >Longines</li>
                    <li >Chopard</li>
                    <li>Gucci</li>
                    <li >Alasta</li>
                    <li>TUDOR </li>
                    <li >
                      Garmin Epix Pro
                    </li>
                    <li >RADO</li>
                    <li >All</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="row">
                <div className="col-6 mb-3">
                  <BlogCard />
                </div>
                <div className="col-6 mb-3">
                  <BlogCard />
                </div>
                <div className="col-6 mb-3">
                  <BlogCard />
                </div>
                <div className="col-6 mb-3">
                  <BlogCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
