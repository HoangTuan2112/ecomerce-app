import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useSelector } from "react-redux";
const Header = () => {
  const cart = useSelector((state) => state.cart.cart);
  const money = useSelector((state) => state.cart.money);
  return (
    <div className="header">
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-6 ">
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-lg-6 ">
              <p className="text-end text-white">
                Hotline:{" "}
                <a className="text-white" href="tel:+84 377197374">
                  +84 377197374
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">Tuan</Link>
              </h2>
            </div>
            <div className="col-5">
              <div class="input-group mb-3">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search product here"
                  aria-label="Search product here"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-5" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to={"/compare-product"}
                    className="d-flex align-items-center gap-10"
                  >
                    <img src={`${process.env.PUBLIC_URL}/images/compare.svg`} alt="compare"></img>
                    <p className="mb-0 text-white">
                      Compare <br></br> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to={"/wishlist"}
                    className="d-flex align-items-center gap-10"
                  >
                    <img src={`${process.env.PUBLIC_URL}/images/wishlist.svg`} alt="wishlist"></img>
                    <p className="mb-0 text-white">
                      Favourite <br></br> Wislist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to={"/login"}
                    className="d-flex align-items-center gap-10"
                  >
                    <img src={`${process.env.PUBLIC_URL}/images/user.svg`} alt="user"></img>
                    <p className="mb-0 text-white">
                      Log in <br /> My account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to={"/cart"}
                    className="d-flex align-items-center gap-10"
                  >
                    <img src={`${process.env.PUBLIC_URL}/images/cart.svg`} alt="cart"></img>
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">{cart.length}</span>
                      <p className="text-white">$ {money}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15  d-flex align-items-center text-white"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={`${process.env.PUBLIC_URL}/images/menu.svg`}></img>
                      <span className="me-5 d-inline-block">
                        {" "}
                        Shop brands
                      </span>
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link class="dropdown-item text-white" href="#">
                        Panerai
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item text-white" href="#">
                        Longines
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item text-white" href="#">
                        Chopard
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item text-white" href="#">
                        Gucci
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item text-white" href="#">
                        Alasta
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item text-white" href="#">
                        TUDOR
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item text-white" href="#">
                        Garmin Epix Pro
                        </Link>
                      </li>
                      <li>
                        <Link class="dropdown-item text-white" href="#">
                        RADO
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/" className="text-white">
                      Home
                    </NavLink>
                    <NavLink to="/store" className="text-white">
                      Our Store
                    </NavLink>
                    <NavLink to="/blog" className="text-white">
                      Blogs
                    </NavLink>
                    <NavLink to="/contact" className="text-white">
                      Contacts
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
