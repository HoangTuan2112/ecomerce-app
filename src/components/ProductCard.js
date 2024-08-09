import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
const ProductCard = (props) => {
  const { grid ,img,img2,title,price,rating,brand,description,quantity} = props;
  let location = useLocation();

  return (
    <>
      <div
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="/images/wish.svg" alt="wishlist"></img>
            </Link>
          </div>
          <div className="product-image">
            {/* <img className="img-fluid" src="/images/watch.jpg" alt="product" />
            <img
              className="img-fluid"
              src="/images/watch2.jpg"
              alt="product"
              width={"269px"}
              height={"269px"}
            /> */}
            <img
              className="img-fluid"
              src={img}
              alt="product"
              width={"269px"}
              height={"269px"}
            />
               <img
              className="img-fluid"
              src={img2}
              alt="product"
              width={"269px"}
              height={"269px"}
            /> 
            
          </div>
          <div className="product-details">
            {/* <h6 className="brand">Havels</h6>
            <h5 className="product-tittle">
              Kid's headphones bulk 10 pack multi color for students
            </h5> */}
            <h6 className="brand">{brand}</h6>
            <h5 className="product-tittle">{title}</h5>
            <ReactStars
              count={5}
              edit={false}
              value={rating}
              size={24}
              activeColor="#ffd700"
            />
            <p className="price">({quantity} sold)</p>
            {/* <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              This sleek and stylish smartwatch is the perfect blend of
              technology and fashion. With its [mention key features, e.g.,
              large AMOLED display, customizable watch faces, and advanced
              health tracking], this smartwatch offers a seamless integration
              into your daily life.
            </p> */}
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
            {description}
            </p>
      
            {/* <p className="price">$100</p> */}

            <p className="price">${price}</p>
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
