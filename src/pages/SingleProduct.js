import React, { useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";

const SingleProduct = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);
  const props = {
    width: 400,
    height: 400,
    zoomWidth: 500,
    img: "/images/watch.jpg",
  };
  return (
    <div>
      <Meta tittle="Single Product" />
      <BreadCrumb tittle="Single Product" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
               
                </div>
              </div>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
        <div className="decription-wrapper py-5 home-wrapper2">
          <div className="container-xxl">
          <h4>Description</h4>
            <div className="col-12">
              <div className="bg-white p-3">
                
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nguyen Hoang Tuan vippro No.1
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="reviews-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="col-12">
            <h4 className="mb-4">Customer Reviews</h4>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                   
                    <div className="d-flex gap-10 align-items-center ">
                      <ReactStars
                        count={5}
                        edit={false}
                        value={3}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Base on 2 reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        href="#"
                        className="text-dark text-decoration-underline"
                      >
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-3">
                  <h4>Writte a review</h4>
                  <form className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        value={3}
                        size={24}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols={"30"}
                        rows={"4"}
                        placeholder="Review"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-3">
                  <div className="review ">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Nguyen Hoang Tuan</h6>
                      <ReactStars
                        count={5}
                        value={5}
                        size={24}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">Ok lam nha</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="popular-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">Our Popular Products</h3>
              </div>
              <div className="row">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SingleProduct;
