import React from 'react'
import { Link } from 'react-router-dom'

const Resetpassword = () => {
  return (
    <div>
         <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Your Password</h3>
            
                <form className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      placeholder="Enter New Password"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Confirm New Password"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <div className="d-flex justify-content-center gap-15 align-items-center">
                      <button type="submit" className="button">
                        Submit
                      </button>
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
  )
}

export default Resetpassword