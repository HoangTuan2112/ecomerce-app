import React, { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import {
  checkOut,
  deleteFromCart,
  updateCartItem,
} from "../features/cartSlice";
import { BiArrowToBottom, BiArrowToTop } from "react-icons/bi";
import Swal from "sweetalert2";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  let total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  return (
    <div>
      <meta tittle="Cart" />
      <BreadCrumb tittle="Cart" />
      <div className="cart-wrappper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              {cart.map((item) => (
                <div className="cart-data py-3 d-flex justify-content-between align-items-center">
                  <div className="cart-col-1 d-flex align-items-center gap-30">
                    <div className="w-25">
                      <img
                        src={item.img}
                        alt="product"
                        width={"78px"}
                        height={"130px"}
                      />
                    </div>

                    <div className="w-75">
                      <h5>{item.tittle}</h5>
                      <p>{item.brand}</p>
                      <p>{item.color}</p>
                      <p>{item.size} </p>
                    </div>
                  </div>
                  <div className="cart-col-2">
                    <h5>$ {item.price}</h5>
                  </div>
                  <div className="cart-col-3 d-flex align-items-center gap-30">
                    <div className="d-flex align-items-center gap-10">
                      <BiArrowToBottom
                        onClick={() =>
                          dispatch(updateCartItem({ id: item.id, flag: 0 }))
                        }
                      />
                      <span>{item.count}</span>
                      <BiArrowToTop
                        onClick={() =>
                          dispatch(updateCartItem({ id: item.id, flag: 1 }))
                        }
                      />
                    </div>
                    <div>
                      <AiFillDelete
                        onClick={() => dispatch(deleteFromCart(item.id))}
                      />
                    </div>
                  </div>
                  <div className="cart-col-4">{item.count * item.price}</div>
                </div>
              ))}

              <div className="cart-footer py-3 d-flex justify-content-between align-items-center">
                <h5>Total</h5>
                <h5>$ {total}</h5>
              </div>
              <div className="cart-footer py-3 d-flex justify-content-end align-items-center">
                <button
                  className="button"
                  onClick={() => {
                    dispatch(checkOut(total));
                    Swal.fire({
                      title: "Are you sure?",
                      icon: "question",
                      iconHtml: "؟",
                      confirmButtonText: "Yes",
                      cancelButtonText: "No",
                      showCancelButton: true,
                      showCloseButton: true,
                    });
                  }}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
