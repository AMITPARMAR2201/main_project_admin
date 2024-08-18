import React from 'react'
import { Link } from 'react-router-dom';

export default function AdminLogin() {
  return (
    <div className="login-bg">
      {/* Container starts */}
      <div className="container">
        {/* Auth wrapper starts */}
        <div className="auth-wrapper">
          {/* Form starts */}
          <form action>
            <div className="auth-box">
              <div className="auth-logo mb-4">
                <img src="assets/images/logo1.png" alt="Bootstrap Gallery" />
              </div>
              <h4 className="mb-4">Login</h4>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Your email <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-2">
                <label className="form-label" htmlFor="pwd">
                  Your password <span className="text-danger">*</span>
                </label>
                <div className="input-group">
                  <input
                    type="password"
                    id="pwd"
                    className="form-control"
                    placeholder="Enter password"
                  />
                  <button className="btn btn-outline-secondary" type="button">
                    <i className="ri-eye-line text-primary" />
                  </button>
                </div>
              </div>
              <div className="d-flex justify-content-end mb-3">
                <Link
                  to="/admin-forgot-password"
                  className="text-decoration-underline"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="mb-3 d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                <Link to="/admin-sign-up" className="btn btn-secondary">
                  Not registered? Signup
                </Link>
              </div>
            </div>
          </form>
          {/* Form ends */}
        </div>
        {/* Auth wrapper ends */}
      </div>
      {/* Container ends */}
    </div>
  );
}
