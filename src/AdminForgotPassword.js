import React from 'react'

export default function AdminForgotPassword() {
  return (
    <div className="login-bg">
      {/* Container starts */}
      <div className="container">
        {/* Auth wrapper starts */}
        <div className="auth-wrapper">
          {/* Form starts */}
          <form action="">
            <div className="auth-box">
              <div className="auth-logo mb-4">
                <img src="assets/images/logo1.png" alt="Bootstrap Gallery" />
              </div>
              <h6 className="fw-light mb-4">
                In order to access your dashboard, please enter the email ID you
                provided during the registration process.
              </h6>
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
              <div className="mb-3 d-grid">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
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
