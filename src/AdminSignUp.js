import React from 'react'
import { Link } from 'react-router-dom';

export default function AdminSignUp() {
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
              <h4 className="mb-4">Signup</h4>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  Your name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>
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
              <div className="mb-3">
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
                <div className="form-text">
                  Your password must be 8-20 characters long.
                </div>
              </div>
              <div className="mb-3 d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                  Signup
                </button>
                <Link to="/admin-login" className="btn btn-secondary">
                  Already have an account? Login
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
