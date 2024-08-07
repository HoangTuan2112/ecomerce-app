import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to={"/product/id"} className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="/images/wish.svg" alt="wishlist"></img>
            </Link>
          </div>
          <div className="product-image">
            <img className="img-fluid" src="/images/watch.jpg" alt="product" />
            <img
              className="img-fluid"
              src="/images/watch2.jpg"
              alt="product"
              width={"269px"}
              height={"269px"}
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-tittle">
              Kid's headphones bulk 10 pack multi color for students
            </h5>
            <ReactStars
              count={5}
              edit={false}
              value={3}
              size={24}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              This sleek and stylish smartwatch is the perfect blend of
              technology and fashion. With its [mention key features, e.g.,
              large AMOLED display, customizable watch faces, and advanced
              health tracking], this smartwatch offers a seamless integration
              into your daily life.
            </p>
            <p className="price">$100</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="/images/prodcompare.svg" alt="compare" />
              </Link>
              <Link>
                <img src="/images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="/images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
