import React from 'react'
import Sidebar from './Sidebar';
import Header from './Header';
import { Link } from 'react-router-dom';
import LoadingPages from './LodingPages';

export default function AdminServicesList() {
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
                  Service List
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
                    <div className="card-header d-flex align-items-center justify-content-between">
                      <h5 className="card-title">Service List</h5>
                      <Link
                        to="/admin-add-services"
                        className="btn btn-primary ms-auto"
                      >
                        Add Service{" "}
                      </Link>
                    </div>
                    <div className="card-body">
                      {/* Table starts */}
                      <div className="table-responsive">
                        <table
                          id="basicExample"
                          className="table m-0 align-middle"
                        >
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Department</th>
                              <th>Department Head</th>
                              <th>Doctors List</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>001</td>
                              <td>Surgeon</td>
                              <td>
                                <img
                                  src="assets/images/user.png"
                                  className="img-shadow img-2x rounded-5 me-1"
                                  alt="Doctors Admin Template"
                                />
                                Deena Cooley
                              </td>
                              <td>
                                <div className="stacked-images">
                                  <img
                                    src="assets/images/user.png"
                                    alt="Medical Dashboard"
                                  />
                                  <img
                                    src="assets/images/user2.png"
                                    alt="Medical Dashboard"
                                  />
                                  <img
                                    src="assets/images/user3.png"
                                    alt="Medical Dashboard"
                                  />
                                  <span className="plus bg-primary">+5</span>
                                </div>
                              </td>
                              <td>
                                <div className="d-inline-flex gap-1">
                                  <button
                                    className="btn btn-outline-danger btn-sm rounded-5"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delRow"
                                  >
                                    <i className="ri-delete-bin-line" />
                                  </button>
                                  <Link
                                    to="/admin-edit-services"
                                    className="btn btn-outline-success btn-sm rounded-5"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="Edit Service"
                                  >
                                    <i className="ri-edit-box-line" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>002</td>
                              <td>Gynecologist</td>
                              <td>
                                <img
                                  src="assets/images/user2.png"
                                  className="img-shadow img-2x rounded-5 me-1"
                                  alt="Doctors Admin Template"
                                />
                                Hector Banks
                              </td>
                              <td>
                                <div className="stacked-images">
                                  <img
                                    src="assets/images/user3.png"
                                    alt="Medical Dashboard"
                                  />
                                  <img
                                    src="assets/images/user4.png"
                                    alt="Medical Dashboard"
                                  />
                                  <img
                                    src="assets/images/user5.png"
                                    alt="Medical Dashboard"
                                  />
                                  <span className="plus bg-danger">+8</span>
                                </div>
                              </td>
                              <td>
                                <div className="d-inline-flex gap-1">
                                  <button
                                    className="btn btn-outline-danger btn-sm rounded-5"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delRow"
                                  >
                                    <i className="ri-delete-bin-line" />
                                  </button>
                                  <Link
                                    to="/admin-edit-services"
                                    className="btn btn-outline-success btn-sm rounded-5"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="Edit Service"
                                  >
                                    <i className="ri-edit-box-line" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>003</td>
                              <td>Psychiatrists</td>
                              <td>
                                <img
                                  src="assets/images/user3.png"
                                  className="img-shadow img-2x rounded-5 me-1"
                                  alt="Doctors Admin Template"
                                />
                                Owen Scott
                              </td>
                              <td>
                                <div className="stacked-images">
                                  <img
                                    src="assets/images/user.png"
                                    alt="Medical Dashboard"
                                  />
                                  <img
                                    src="assets/images/user3.png"
                                    alt="Medical Dashboard"
                                  />
                                  <img
                                    src="assets/images/user2.png"
                                    alt="Medical Dashboard"
                                  />
                                  <span className="plus bg-success">+3</span>
                                </div>
                              </td>
                              <td>
                                <div className="d-inline-flex gap-1">
                                  <button
                                    className="btn btn-outline-danger btn-sm rounded-5"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delRow"
                                  >
                                    <i className="ri-delete-bin-line" />
                                  </button>
                                  <Link
                                    to="/admin-edit-services"
                                    className="btn btn-outline-success btn-sm rounded-5"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="Edit Service"
                                  >
                                    <i className="ri-edit-box-line" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>004</td>
                              <td>Urologist</td>
                              <td>
                                <img
                                  src="assets/images/user5.png"
                                  className="img-shadow img-2x rounded-5 me-1"
                                  alt="Doctors Admin Template"
                                />
                                Alison Estrada
                              </td>
                              <td>
                                <div className="stacked-images">
                                  <img
                                    src="assets/images/user4.png"
                                    alt="Medical Dashboard"
                                  />
                                  <img
                                    src="assets/images/user2.png"
                                    alt="Medical Dashboard"
                                  />
                                  <img
                                    src="assets/images/user1.png"
                                    alt="Medical Dashboard"
                                  />
                                  <span className="plus bg-warning">+6</span>
                                </div>
                              </td>
                              <td>
                                <div className="d-inline-flex gap-1">
                                  <button
                                    className="btn btn-outline-danger btn-sm rounded-5"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delRow"
                                  >
                                    <i className="ri-delete-bin-line" />
                                  </button>
                                  <Link
                                    to="/admin-edit-services"
                                    className="btn btn-outline-success btn-sm rounded-5"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="Edit Service"
                                  >
                                    <i className="ri-edit-box-line" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>005</td>
                              <td>Paediatrician</td>
                              <td>
                                <img
                                  src="assets/images/user4.png"
                                  className="img-shadow img-2x rounded-5 me-1"
                                  alt="Doctors Admin Template"
                                />
                                Mitchel Alvarez
                              </td>
                              <td>
                                <div className="stacked-images">
                                  <img
                                    src="assets/images/user1.png"
                                    alt="Medical Dashboard"
                                  />
                                  <img
                                    src="assets/images/user4.png"
                                    alt="Medical Dashboard"
                                  />
                                  <img
                                    src="assets/images/user5.png"
                                    alt="Medical Dashboard"
                                  />
                                  <span className="plus bg-info">+2</span>
                                </div>
                              </td>
                              <td>
                                <div className="d-inline-flex gap-1">
                                  <button
                                    className="btn btn-outline-danger btn-sm rounded-5"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delRow"
                                  >
                                    <i className="ri-delete-bin-line" />
                                  </button>
                                  <Link
                                    to="/admin-edit-services"
                                    className="btn btn-outline-success btn-sm rounded-5"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="Edit Service"
                                  >
                                    <i className="ri-edit-box-line" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* Table ends */}
                      {/* Modal Delete Row */}
                      <div
                        className="modal fade"
                        id="delRow"
                        tabIndex={-1}
                        aria-labelledby="delRowLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-sm">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="delRowLabel">
                                Confirm
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">
                              Are you sure you want to delete the department?
                            </div>
                            <div className="modal-footer">
                              <div className="d-flex justify-content-end gap-2">
                                <Link
                                  to="/admin-services-list"
                                  className="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                >
                                  No
                                </Link>
                                <Link
                                  to="/admin-services-list"
                                  className="btn btn-danger"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                >
                                  Yes
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
