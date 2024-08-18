import React from 'react'
import AssistantHeader from './AssistantHeader';
import AssistantSidebar from './AssistantSidebar';
import { Link } from 'react-router-dom';
import LoadingPages from './LodingPages';

export default function AssistentManagementChangePassword() {
  return (
    <>
      {/* Loading starts */}
      <LoadingPages/>
      {/* Loading ends */}
      {/* Page wrapper starts */}
      <div className="page-wrapper">
        {/* App header starts */}
        <AssistantHeader />
        {/* App header ends */}
        {/* Main container starts */}
        <div className="main-container">
          {/* Sidebar wrapper starts */}
          <AssistantSidebar />
          {/* Sidebar wrapper ends */}
          {/* App container starts */}
          <div className="app-container">
            {/* App hero header starts */}
            <div className="app-hero-header d-flex align-items-center">
              {/* Breadcrumb starts */}
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <i className="ri-home-8-line lh-1 pe-3 me-3 border-end" />
                  <Link to="/assistant-management">Home</Link>
                </li>
                <li
                  className="breadcrumb-item text-primary"
                  aria-current="page"
                >
                  Change Password
                </li>
              </ol>
              {/* Breadcrumb ends */}
            </div>
            {/* App Hero header ends */}
            {/* App body starts */}
            <div className="app-body">
              {/* Row starts */}
              <div className="row gx-3">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-body">
                      {/* Custom tabs starts */}
                      <div className="custom-tabs-container">
                        {/* Nav tabs starts */}
                        <ul
                          className="nav nav-tabs"
                          id="customTab2"
                          role="tablist"
                        >
                          <li className="nav-item" role="presentation">
                            <a
                              className="nav-link active"
                              id="tab-fourA"
                              data-bs-toggle="tab"
                              href="#fourA"
                              role="tab"
                              aria-controls="fourA"
                              aria-selected="false"
                            >
                              <i className="ri-lock-password-line" />
                              Account Details
                            </a>
                          </li>
                        </ul>
                        {/* Nav tabs ends */}
                        {/* Tab content starts */}
                        <div className="tab-content">
                          <div
                            className="tab-pane fade show active"
                            id="fourA"
                            role="tabpanel"
                          >
                            {/* Row starts */}
                            <div className="row gx-3">
                              <div className="col-xxl-3 col-lg-4 col-sm-6">
                                <div className="mb-3">
                                  <label className="form-label" htmlFor="u1">
                                    User Name
                                  </label>
                                  <div className="input-group">
                                    <span className="input-group-text">
                                      <i className="ri-account-pin-circle-line" />
                                    </span>
                                    <input
                                      type="text"
                                      id="u1"
                                      defaultValue="alanstern99"
                                      className="form-control"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-xxl-3 col-lg-4 col-sm-6">
                                <div className="mb-3">
                                  <label className="form-label" htmlFor="u2">
                                    New Password
                                  </label>
                                  <div className="input-group">
                                    <span className="input-group-text">
                                      <i className="ri-lock-password-line" />
                                    </span>
                                    <input
                                      type="password"
                                      id="u2"
                                      className="form-control"
                                      defaultValue="***********#9"
                                    />
                                    <button
                                      className="btn btn-outline-secondary"
                                      type="button"
                                    >
                                      <i className="ri-eye-line" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xxl-3 col-lg-4 col-sm-6">
                                <div className="mb-3">
                                  <label className="form-label" htmlFor="u3">
                                    Confirm New Password
                                  </label>
                                  <div className="input-group">
                                    <span className="input-group-text">
                                      <i className="ri-lock-password-line" />
                                    </span>
                                    <input
                                      type="password"
                                      id="u3"
                                      defaultValue="***********#9"
                                      className="form-control"
                                    />
                                    <button
                                      className="btn btn-outline-secondary"
                                      type="button"
                                    >
                                      <i className="ri-eye-off-line" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* Row ends */}
                          </div>
                        </div>
                        {/* Tab content ends */}
                      </div>
                      {/* Custom tabs ends */}
                      {/* Card acrions starts */}
                      <div className="d-flex gap-2 justify-content-end mt-4">
                        <Link
                          to="/assistant-management"
                          className="btn btn-outline-secondary"
                        >
                          Cancel
                        </Link>
                        <Link
                          to="/assistant-management"
                          className="btn btn-primary"
                        >
                          Change Password
                        </Link>
                      </div>
                      {/* Card acrions ends */}
                    </div>
                  </div>
                </div>
              </div>
              {/* Row ends */}
            </div>
            {/* App body ends */}
          </div>
          {/* App container ends */}
        </div>
        {/* Main container ends */}
      </div>
      {/* Page wrapper ends */}
    </>
  );
}
