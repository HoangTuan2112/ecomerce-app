import React from "react";
import { BsGithub, BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={`${process.env.PUBLIC_URL}/images/newsletter.png` }alt="newsletter" />
                <h2 className="mb-0 text-white">Sign up for the Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div class="input-group ">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text p-2" id="basic-addon2">
                  Subcribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Address: 135, Hai Ba Trung, <br></br> DaKao, District 1,{" "}
                  <br></br> Ho Chi Minh City
                </address>
                <a
                  href="tel: +84 377197374"
                  className="mt-4 d-block mb-3 text-white"
                >
                  +84 377197374
                </a>
                <a
                  href="mailto: tuanxyz113@gmail.com"
                  className="mt-4 d-block mb-3 text-white"
                >
                  tuanxyz113@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30">
                  <a href="#">
                    {" "}
                    <BsGithub className="text-white fs-4" />
                  </a>
                  <a href="#">
                    {" "}
                    <BsFacebook className="text-white fs-4 ms-3" />
                  </a>
                  <a href="#">
                    {" "}
                    <BsInstagram className="text-white fs-4 ms-3" />
                  </a>
                  <a href="#">
                    {" "}
                    <BsYoutube className="text-white fs-4 ms-3" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to={"/privacy-policy"} className="text-white py2 mb-1">
                  Privacy Policy
                </Link>
                <Link to={"/refund-policy"} className="text-white py2 mb-1">
                  Refund Policy
                </Link>
                <Link to={"/shipping-policy"} className="text-white py2 mb-1">
                  Shipping Policy
                </Link>
                <Link to={"/term-conditions"} className="text-white py2 mb-1">
                  Terms & Conditions
                </Link>
                <Link to={"/blog"} className="text-white py2 mb-1">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py2 mb-1">About Us</Link>
                <Link className="text-white py2 mb-1">Faq</Link>
                <Link className="text-white py2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py2 mb-1">Laptops</Link>
                <Link className="text-white py2 mb-1">Headphones</Link>
                <Link className="text-white py2 mb-1">Tables</Link>
                <Link className="text-white py2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center text-white">
                &copy; {new Date().getFullYear()} Develop by Nguyen Hoang Tuan
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
