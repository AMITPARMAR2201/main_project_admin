import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import LoadingPages from './LodingPages';

export default function AdminAssistantList() {
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
                  <Link to="/admin-assistant-list">Home</Link>
                </li>
                <li
                  className="breadcrumb-item text-primary"
                  aria-current="page"
                >
                  Assistant List
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
                      <h5 className="card-title">Assistant List</h5>
                      <Link
                        to="/admin-add-assistant"
                        className="btn btn-primary ms-auto"
                      >
                        Add Assistant Member
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
                              <th>Name</th>
                              <th>Designation</th>
                              <th>Mobile</th>
                              <th>Email</th>
                              <th>DOJ</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>001</td>
                              <td>
                                <img
                                  src="assets/images/user.png"
                                  className="img-shadow img-2x rounded-5 me-1"
                                  alt="Doctors Admin Template"
                                />
                                Willian Mathews
                              </td>
                              <td>Supervisor</td>
                              <td>0987654321</td>
                              <td>test@testing.com</td>
                              <td>20/10/2020</td>
                              <td>
                                <div className="d-inline-flex gap-1">
                                  <button
                                    className="btn btn-outline-danger btn-sm"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delRow"
                                  >
                                    <i className="ri-delete-bin-line" />
                                  </button>
                                  <Link
                                     to="/admin-add-assistant"
                                    className="btn btn-outline-success btn-sm"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="Edit Assistant  Member"
                                  >
                                    <i className="ri-edit-box-line" />
                                  </Link>
                                  <Link
                                     to="/admin-assistant-single"
                                    className="btn btn-outline-info btn-sm"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="View Profile"
                                  >
                                    <i className="ri-eye-line" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>002</td>
                              <td>
                                <img
                                  src="assets/images/user1.png"
                                  className="img-shadow img-2x rounded-5 me-1"
                                  alt="Doctors Admin Template"
                                />
                                Adam Bradley
                              </td>
                              <td>Nurse</td>
                              <td>0987654321</td>
                              <td>test@testing.com</td>
                              <td>12/03/2018</td>
                              <td>
                                <div className="d-inline-flex gap-1">
                                  <button
                                    className="btn btn-outline-danger btn-sm"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delRow"
                                  >
                                    <i className="ri-delete-bin-line" />
                                  </button>
                                  <Link
                                    to="/admin-add-assistant"
                                    className="btn btn-outline-success btn-sm"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="Edit Assistant  Member"
                                  >
                                    <i className="ri-edit-box-line" />
                                  </Link>
                                  <Link
                                    to="/admin-assistant-single"
                                    className="btn btn-outline-info btn-sm"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="View Profile"
                                  >
                                    <i className="ri-eye-line" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>003</td>
                              <td>
                                <img
                                  src="assets/images/user2.png"
                                  className="img-shadow img-2x rounded-5 me-1"
                                  alt="Doctors Admin Template"
                                />
                                Merle Daniel
                              </td>
                              <td>Receptionist</td>
                              <td>0987654321</td>
                              <td>test@testing.com</td>
                              <td>03/09/2022</td>
                              <td>
                                <div className="d-inline-flex gap-1">
                                  <button
                                    className="btn btn-outline-danger btn-sm"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delRow"
                                  >
                                    <i className="ri-delete-bin-line" />
                                  </button>
                                  <Link
                                    to="/admin-add-assistant"
                                    className="btn btn-outline-success btn-sm"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="Edit Assistant  Member"
                                  >
                                    <i className="ri-edit-box-line" />
                                  </Link>
                                  <Link
                                    to="/admin-assistant-single"
                                    className="btn btn-outline-info btn-sm"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="View Profile"
                                  >
                                    <i className="ri-eye-line" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>004</td>
                              <td>
                                <img
                                  src="assets/images/user3.png"
                                  className="img-shadow img-2x rounded-5 me-1"
                                  alt="Doctors Admin Template"
                                />
                                Nicole Sellers
                              </td>
                              <td>Pharmacist</td>
                              <td>0987654321</td>
                              <td>test@testing.com</td>
                              <td>18/12/2013</td>
                              <td>
                                <div className="d-inline-flex gap-1">
                                  <button
                                    className="btn btn-outline-danger btn-sm"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delRow"
                                  >
                                    <i className="ri-delete-bin-line" />
                                  </button>
                                  <Link
                                    to="/admin-add-assistant"
                                    className="btn btn-outline-success btn-sm"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="Edit Assistant  Member"
                                  >
                                    <i className="ri-edit-box-line" />
                                  </Link>
                                  <Link
                                    to="/admin-assistant-single"
                                    className="btn btn-outline-info btn-sm"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="View Profile"
                                  >
                                    <i className="ri-eye-line" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>005</td>
                              <td>
                                <img
                                  src="assets/images/user4.png"
                                  className="img-shadow img-2x rounded-5 me-1"
                                  alt="Doctors Admin Template"
                                />
                                Kathy Atkinson
                              </td>
                              <td>Admin</td>
                              <td>0987654321</td>
                              <td>test@testing.com</td>
                              <td>23/10/2016</td>
                              <td>
                                <div className="d-inline-flex gap-1">
                                  <button
                                    className="btn btn-outline-danger btn-sm"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delRow"
                                  >
                                    <i className="ri-delete-bin-line" />
                                  </button>
                                  <Link
                                    to="/admin-add-assistant"
                                    className="btn btn-outline-success btn-sm"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="Edit Assistant  Member"
                                  >
                                    <i className="ri-edit-box-line" />
                                  </Link>
                                  <Link
                                    to="/admin-assistant-single"
                                    className="btn btn-outline-info btn-sm"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="View Profile"
                                  >
                                    <i className="ri-eye-line" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>006</td>
                              <td>
                                <img
                                  src="assets/images/user5.png"
                                  className="img-shadow img-2x rounded-5 me-1"
                                  alt="Doctors Admin Template"
                                />
                                Roger Briggs
                              </td>
                              <td>Helper</td>
                              <td>0987654321</td>
                              <td>test@testing.com</td>
                              <td>17/02/2019</td>
                              <td>
                                <div className="d-inline-flex gap-1">
                                  <button
                                    className="btn btn-outline-danger btn-sm"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delRow"
                                  >
                                    <i className="ri-delete-bin-line" />
                                  </button>
                                  <Link
                                    to="/admin-add-assistant"
                                    className="btn btn-outline-success btn-sm"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="Edit Assistant  Member"
                                  >
                                    <i className="ri-edit-box-line" />
                                  </Link>
                                  <Link
                                    to="/admin-assistant-single"
                                    className="btn btn-outline-info btn-sm"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="View Profile"
                                  >
                                    <i className="ri-eye-line" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>007</td>
                              <td>
                                <img
                                  src="assets/images/user.png"
                                  className="img-shadow img-2x rounded-5 me-1"
                                  alt="Doctors Admin Template"
                                />
                                Mervin Elliott
                              </td>
                              <td>Pharmacist</td>
                              <td>0987654321</td>
                              <td>test@testing.com</td>
                              <td>15/06/2023</td>
                              <td>
                                <div className="d-inline-flex gap-1">
                                  <button
                                    className="btn btn-outline-danger btn-sm"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delRow"
                                  >
                                    <i className="ri-delete-bin-line" />
                                  </button>
                                  <Link
                                    to="/admin-add-assistant"
                                    className="btn btn-outline-success btn-sm"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="Edit Assistant  Member"
                                  >
                                    <i className="ri-edit-box-line" />
                                  </Link>
                                  <Link
                                    to="/admin-assistant-single"
                                    className="btn btn-outline-info btn-sm"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="View Profile"
                                  >
                                    <i className="ri-eye-line" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>008</td>
                              <td>
                                <img
                                  src="assets/images/user3.png"
                                  className="img-shadow img-2x rounded-5 me-1"
                                  alt="Doctors Admin Template"
                                />
                                Fermin George
                              </td>
                              <td>Nurse</td>
                              <td>0987654321</td>
                              <td>test@testing.com</td>
                              <td>29/08/2017</td>
                              <td>
                                <div className="d-inline-flex gap-1">
                                  <button
                                    className="btn btn-outline-danger btn-sm"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delRow"
                                  >
                                    <i className="ri-delete-bin-line" />
                                  </button>
                                  <Link
                                    to="/admin-add-assistant"
                                    className="btn btn-outline-success btn-sm"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="Edit Assistant  Member"
                                  >
                                    <i className="ri-edit-box-line" />
                                  </Link>
                                  <Link
                                    to="/admin-assistant-single"
                                    className="btn btn-outline-info btn-sm"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="View Profile"
                                  >
                                    <i className="ri-eye-line" />
                                  </Link>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>009</td>
                              <td>
                                <img
                                  src="assets/images/user4.png"
                                  className="img-shadow img-2x rounded-5 me-1"
                                  alt="Doctors Admin Template"
                                />
                                Olen Frye
                              </td>
                              <td>Nurse</td>
                              <td>0987654321</td>
                              <td>test@testing.com</td>
                              <td>02/09/2014</td>
                              <td>
                                <div className="d-inline-flex gap-1">
                                  <button
                                    className="btn btn-outline-danger btn-sm"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delRow"
                                  >
                                    <i className="ri-delete-bin-line" />
                                  </button>
                                  <Link
                                    to="/admin-add-assistant"
                                    className="btn btn-outline-success btn-sm"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="Edit Assistant Member"
                                  >
                                    <i className="ri-edit-box-line" />
                                  </Link>
                                  <Link
                                    to="/admin-assistant-single"
                                    className="btn btn-outline-info btn-sm"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    data-bs-title="View Profile"
                                  >
                                    <i className="ri-eye-line" />
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
                              Are you sure you want to delete the Assistant
                              member?
                            </div>
                            <div className="modal-footer">
                              <div className="d-flex justify-content-end gap-2">
                                <button
                                  className="btn btn-outline-secondary"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                >
                                  No
                                </button>
                                <button
                                  className="btn btn-danger"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                >
                                  Yes
                                </button>
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
