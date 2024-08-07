import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";

const Forgotpassword = () => {
  return (
    <div>
      <Meta title="Forgot Password" />
      <BreadCrumb title="Forgot Password" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Your Password</h3>
                <p className="text-center mt-2 mb-3">
                  We will send you an email to reset your password
                </p>
                <form className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <div className="d-flex justify-content-center gap-15 align-items-center">
                      <Link to="/resetpassword">
                        <button type="submit" className="button">
                          Submit
                        </button>
                      </Link>
                    </div>
                  </div>
                  <Link to="/login" className="text-dark text-center">
                    Cancel
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
