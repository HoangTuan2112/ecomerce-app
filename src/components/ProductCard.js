import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
const ProductCard = (props) => {
  const { grid ,img,img2,title,price,rating,brand,description,quantity,id} = props;
  let location = useLocation();

  return (
    <>
      <div
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to={`/product/:${id}`} className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={`${process.env.PUBLIC_URL}/images/wish.svg`} alt="wishlist"></img>
            </Link>
          </div>
          <div className="product-image">
          
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
        
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
            {description}
            </p>
      
         

            <p className="price">${price}</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src={`${process.env.PUBLIC_URL}/images/prodcompare.svg`} alt="compare" />
              </Link>
              <Link>
                <img src={`${process.env.PUBLIC_URL}/images/view.svg`} alt="view" />
              </Link>
              <Link>
                <img src={`${process.env.PUBLIC_URL}/images/add-cart.svg`} alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
