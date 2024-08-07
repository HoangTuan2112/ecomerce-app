import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
      <Meta tittle='Signup' />
      <BreadCrumb tittle='Signup' />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center">Login</h3>
                <form className="d-flex flex-column gap-15">
                <div>
                    <label>Name</label>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <label>Phone</label>
                    <input
                      type="tel"
                      placeholder="Enter Phone"
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
                    
                    <div className="d-flex justify-content-center gap-15 align-items-center">
                     <button type="submit" className="button"  >Sign Up</button>
                    
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup