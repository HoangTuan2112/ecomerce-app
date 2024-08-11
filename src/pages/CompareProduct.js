import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Color from "../components/Color";

const CompareProduct = () => {
  return (
    <div>
      <Meta tittle="Compare Products" />
      <BreadCrumb tittle="Compare Products" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row ">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src={`${process.env.PUBLIC_URL}/images/cross.svg`}
                  alt="cross"
                  className="position-absolute top-0 end-0  "
                  width={"20px"}
                  style={{ cursor: "pointer" }}
                />
                <div className="product-card-image">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/watch.jpg`}
                    alt="watch"
                    className="img-fluid"
                  />
                  <div>
                    <div className="compare-product-details">
                      <h5 className="tittle">Apple Watch Series 6</h5>
                      <h6 className="price mb-3 mt-3">$300</h6>
                      <div>
                        <div className="product-detail">
                          <h5>Brand:</h5>
                          <p>Havels</p>
                        </div>
                        <div className="product-detail">
                          <h5>Type:</h5>
                          <p>Watch</p>
                        </div>
                        <div className="product-detail">
                          <h5>Available:</h5>
                          <p>In Strock</p>
                        </div>
                        <div className="product-detail">
                          <h5>Color:</h5>
                          <Color />
                        </div>
                        <div className="product-detail">
                          <h5>Size:</h5>
                          <div className="d-flex gap-10">
                            <p>S</p>
                            <p>M</p>
                            <p>L</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src={`${process.env.PUBLIC_URL}/images/cross.svg`}
                  alt="cross"
                  className="position-absolute top-0 end-0  "
                  width={"20px"}
                  style={{ cursor: "pointer" }}
                />
                <div className="product-card-image">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/watch.jpg`}
                    alt="watch"
                    className="img-fluid"
                  />
                  <div>
                    <div className="compare-product-details">
                      <h5 className="tittle">Apple Watch Series 6</h5>
                      <h6 className="price mb-3 mt-3">$300</h6>
                      <div>
                        <div className="product-detail">
                          <h5>Brand:</h5>
                          <p>Havels</p>
                        </div>
                        <div className="product-detail">
                          <h5>Type:</h5>
                          <p>Watch</p>
                        </div>
                        <div className="product-detail">
                          <h5>Available:</h5>
                          <p>In Strock</p>
                        </div>
                        <div className="product-detail">
                          <h5>Color:</h5>
                          <Color />
                        </div>
                        <div className="product-detail">
                          <h5>Size:</h5>
                          <div className="d-flex gap-10">
                            <p>S</p>
                            <p>M</p>
                            <p>L</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareProduct;
