import React from "react";
import BreadCrumb from "./BreadCrumb";
import Meta from "./Meta";

const WishList = () => {
  return (
    <div>
      <Meta tittle="Wishlist" />
      <BreadCrumb tittle="Wishlist" />
      <div className="wishlist-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute top-0 end-0"
                  width={"20px"}
                  style={{ cursor: "pointer" }}
                />
                <div className="wishlist-card-image ">
                  <img
                    src="images/watch.jpg"
                    alt="watch"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="tittle">Apple Watch Series 6</h5>
                  <h6 className="price mb-3 mt-3">$300</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute top-0 end-0"
                  width={"20px"}
                  style={{ cursor: "pointer" }}
                />
                <div className="wishlist-card-image ">
                  <img
                    src="images/watch.jpg"
                    alt="watch"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="tittle">Apple Watch Series 6</h5>
                  <h6 className="price mb-3 mt-3">$300</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute top-0 end-0"
                  width={"20px"}
                  style={{ cursor: "pointer" }}
                />
                <div className="wishlist-card-image ">
                  <img
                    src="images/watch.jpg"
                    alt="watch"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="py-3 px-3">
                  <h5 className="tittle">Apple Watch Series 6</h5>
                  <h6 className="price mb-3 mt-3">$300</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
