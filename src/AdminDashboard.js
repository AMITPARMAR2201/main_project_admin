import React from 'react'
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import { Link } from 'react-router-dom';
import LoadingPages from './LodingPages';

export default function AdminDashboard() {
  return (
    <div>
      {/* Loading starts */}
      <LoadingPages/>
      {/* Loading ends */}
      {/* Page wrapper starts */}
      <div className="page-wrapper">
        {/* App header starts */}
        <AdminHeader />
        {/* App header ends */}
        {/* Main container starts */}
        <div className="main-container">
          {/* Sidebar wrapper starts */}
          <AdminSidebar />
          {/* Sidebar wrapper ends */}
          {/* App container starts */}
          <div className="app-container">
            {/* App hero header starts */}
            <div className="app-hero-header d-flex align-items-center">
              {/* Breadcrumb starts */}
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <i className="ri-home-8-line lh-1 pe-3 me-3 border-end" />
                  <Link to="/admin-dashboard">Home</Link>
                </li>
                <li
                  className="breadcrumb-item text-primary"
                  aria-current="page"
                >
                  Dashboard
                </li>
              </ol>
              {/* Breadcrumb ends */}
            </div>
            {/* App Hero header ends */}
            {/* App body starts */}
            <div className="app-body">
              {/* Row starts */}
              <div className="row gx-3">
                <div className="col-xxl-12 col-sm-12">
                  <div className="card mb-3 bg-2">
                    <div className="card-body">
                      <div className="py-4 px-3 text-white">
                        <h4> नमस्ते,</h4>
                        <h2> Amit Parmar</h2>
                        <h5>Nurturing Health, Inspiring Hope.</h5>
                        <div className="mt-4 d-flex gap-3">
                          <div className="d-flex align-items-center">
                            <div className="icon-box lg bg-arctic rounded-3 me-3">
                              <i className="ri-surgical-mask-line fs-4" />
                            </div>
                            <div className="d-flex flex-column">
                              <h2 className="m-0 lh-1">9</h2>
                              <p className="m-0">Patients</p>
                            </div>
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="icon-box lg bg-lime rounded-3 me-3">
                              <i className="ri-lungs-line fs-4" />
                            </div>
                            <div className="d-flex flex-column">
                              <h2 className="m-0 lh-1">3</h2>
                              <p className="m-0">Surgeries</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Row ends */}
              {/* Row starts */}
              <div className="row gx-3">
                <div className="col-xl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="p-2 border border-success rounded-circle text-center ">
                          <div className="icon-box md bg-success-subtle rounded-5">
                            <i className="ri-nurse-fill fs-4 text-success" />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-end justify-content-center mt-1">
                        <Link to="/admin-doctor">
                          <div className="text-end">
                            <span className="badge bg-success-subtle text-success small">
                              <h2>Doctor</h2>
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="p-2 border border-primary rounded-circle me-3">
                          <div className="icon-box md bg-primary-subtle rounded-5">
                            <i className="ri-nurse-line fs-4 text-primary" />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-end justify-content-center mt-1">
                        <Link to="admin-assistant">
                          <div className="text-end">
                            <span className="badge bg-primary-subtle text-primary small">
                              <h2>Assistant</h2>
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="p-2 border border-danger rounded-circle me-3">
                          <div className="icon-box md bg-danger-subtle rounded-5">
                            <i className="ri-customer-service-2-fill fs-4 text-danger" />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-end justify-content-center mt-1">
                        <Link to="/admin-services">
                          <div className="text-end">
                            <span className="badge bg-danger-subtle text-danger small">
                              <h2>Service</h2>
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="p-2 border border-warning rounded-circle me-3">
                          <div className="icon-box md bg-warning-subtle rounded-5">
                            <i className="ri-survey-line fs-4 text-warning" />
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-end justify-content-center mt-1">
                        <Link to="/admin-appointment">
                          <div className="text-end">
                            <span className="badge bg-warning-subtle text-warning small">
                              <h2>Appointment</h2>
                            </span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Row ends */}
              {/* Row starts */}
              <div className="row gx-3">
                <div className="col-xl-2 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="d-flex flex-column align-items-center">
                        <div className="icon-box md rounded-5 bg-primary mb-3">
                          <i className="ri-verified-badge-line fs-4 lh-1" />
                        </div>
                        <h6>Appointments</h6>
                        <h2 className="text-primary m-0">639</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="d-flex flex-column align-items-center">
                        <div className="icon-box md rounded-5 bg-primary mb-3">
                          <i className="ri-stethoscope-line fs-4 lh-1" />
                        </div>
                        <h6>Doctors</h6>
                        <h2 className="text-primary m-0">83</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="d-flex flex-column align-items-center">
                        <div className="icon-box md rounded-5 bg-primary mb-3">
                          <i className="ri-psychotherapy-line fs-4 lh-1" />
                        </div>
                        <h6>Staff</h6>
                        <h2 className="text-primary m-0">296</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="d-flex flex-column align-items-center">
                        <div className="icon-box md rounded-5 bg-primary mb-3">
                          <i className="ri-lungs-line fs-4 lh-1" />
                        </div>
                        <h6>Operations</h6>
                        <h2 className="text-primary m-0">49</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="d-flex flex-column align-items-center">
                        <div className="icon-box md rounded-5 bg-primary mb-3">
                          <i className="ri-hotel-bed-line fs-4 lh-1" />
                        </div>
                        <h6>Admitted</h6>
                        <h2 className="text-primary m-0">372</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="d-flex flex-column align-items-center">
                        <div className="icon-box md rounded-5 bg-primary mb-3">
                          <i className="ri-walk-line fs-4 lh-1" />
                        </div>
                        <h6>Discharged</h6>
                        <h2 className="text-primary m-0">253</h2>
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
