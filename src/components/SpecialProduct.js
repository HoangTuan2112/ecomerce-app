import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const SpecialProduct = () => {
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img
              src="https://www.jurawatches.co.uk/cdn/shop/files/chpd-008-chopard-watch-happy-sport-278559-3001_78x.jpg?v=1691650749"
              alt="watch"
              className="special-product-img img-fluid"
            />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Chopard</h5>
            <h6 className="tittle">Happy Sport 36</h6>
            <ReactStars
              count={5}
              edit={false}
              value={5}
              size={24}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">$8820</span>&nbsp;<strike>$9500</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5 days</b>
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-2 bg-danger">23</span>:
                <span className="badge rounded-circle p-2 bg-danger">59</span>:
                <span className="badge rounded-circle p-2 bg-danger">59</span>
              </div>
            </div>
            <div className="prod-count my-3">
              <p>Product: 8</p>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <Link className="button">Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
