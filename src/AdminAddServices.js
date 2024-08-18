import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import LoadingPages from "./LodingPages";

export default function AdminAddServices() {
  return (
    <div>
      {/* Loading starts */}
      <LoadingPages/>
      {/* Loading ends */}
      {/* Page wrapper starts */}
      <div className="page-wrapper">
        {/* App header starts */}
        <Header />
        {/* App header ends */}
        {/* Main container starts */}
        <div className="main-container">
          {/* Sidebar wrapper starts */}
          <Sidebar />
          {/* Sidebar wrapper ends */}
          {/* App container starts */}
          <div className="app-container">
            {/* App hero header starts */}
            <div className="app-hero-header d-flex align-items-center">
              {/* Breadcrumb starts */}
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <i className="ri-home-8-line lh-1 pe-3 me-3 border-end" />
                  <Link to="/admin-services-list">Home</Link>
                </li>
                <li
                  className="breadcrumb-item text-primary"
                  aria-current="page"
                >
                  Add Service
                </li>
              </ol>
              {/* Breadcrumb ends */}
            </div>
            {/* App Hero header ends */}
            {/* App body starts */}
            <div className="app-body">
              {/* Row starts */}
              <div className="row gx-3">
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Add Service</h5>
                    </div>
                    <div className="card-body">
                      {/* Row starts */}
                      <div className="row gx-3">
                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="a1">
                              Service Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="a1"
                              placeholder="Enter Service Name"
                            />
                          </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="a2">
                              Service Email
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="a2"
                              placeholder="Enter email address"
                            />
                          </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="a3">
                              Service Head
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="a3"
                              placeholder="Enter Service Name"
                            />
                          </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="a4">
                              Service Phone
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="a4"
                              placeholder="Enter phone number"
                            />
                          </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                          <div className="mb-3">
                            <label
                              className="form-label"
                              htmlFor="inlineRadio1"
                            >
                              Status
                            </label>
                            <div className="m-0">
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio1"
                                  defaultValue="option1"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineRadio1"
                                >
                                  Active
                                </label>
                              </div>
                              <div className="form-check form-check-inline">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="inlineRadioOptions"
                                  id="inlineRadio2"
                                  defaultValue="option2"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inlineRadio2"
                                >
                                  Inactive
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="a7">
                              Message
                            </label>
                            <textarea
                              className="form-control"
                              id="a7"
                              placeholder="Enter message"
                              rows={3}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="d-flex gap-2 justify-content-end">
                            <Link
                              to="/admin-services-list"
                              className="btn btn-outline-secondary"
                            >
                              Cancel
                            </Link>
                            <Link
                              to="/admin-services-list"
                              className="btn btn-primary"
                            >
                              Add Service
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/* Row ends */}
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
    </div>
  );
}
