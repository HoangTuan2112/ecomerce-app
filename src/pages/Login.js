import React from "react";

import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";

const Login = () => {
  return (
    <div>
      <Meta title="Login" />
      <BreadCrumb title="Login" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center">Login</h3>
                <form className="d-flex flex-column gap-15">
                  <div>
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <label>Password</label>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <Link to="/forgotpassword" className="text-dark">Forgot Password?</Link>
                    <div className="d-flex justify-content-center gap-15 align-items-center">
                     <button type="submit" className="button">Login</button>
                     <Link to="/signup" className="button signup">Signup</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
