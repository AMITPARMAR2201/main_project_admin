import React from 'react'

export default function AdminResetPassword() {
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
              <h4 className="mb-4">Reset Password</h4>
              <div className="mb-3">
                <label className="form-label" htmlFor="currentPwd">
                  Current password <span className="text-danger">*</span>
                </label>
                <div className="input-group ">
                  <input
                    type="password"
                    id="currentPwd"
                    className="form-control"
                    placeholder="Enter current password"
                  />
                  <button className="btn btn-outline-secondary" type="button">
                    <i className="ri-eye-line text-primary" />
                  </button>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="newPwd">
                  New password <span className="text-danger">*</span>
                </label>
                <div className="input-group ">
                  <input
                    type="password"
                    id="newPwd"
                    className="form-control"
                    placeholder="Enter new password"
                  />
                  <button className="btn btn-outline-secondary" type="button">
                    <i className="ri-eye-line text-primary" />
                  </button>
                </div>
                <div className="form-text">
                  Your password must be 8-20 characters long.
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="confNewPwd">
                  Confirm new password <span className="text-danger">*</span>
                </label>
                <div className="input-group ">
                  <input
                    type="password"
                    id="confNewPwd"
                    className="form-control"
                    placeholder="Confirm new password"
                  />
                  <button className="btn btn-outline-secondary" type="button">
                    <i className="ri-eye-line text-primary" />
                  </button>
                </div>
              </div>
              <div className="mb-3 d-grid">
                <button type="submit" className="btn btn-primary">
                  Reset Password
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
