import React from 'react'
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import { Link } from 'react-router-dom';
import LoadingPages from './LodingPages';

export default function AdminAssistant() {
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
                  Assistant
                </li>
              </ol>
              {/* Breadcrumb ends */}
            </div>
            {/* App Hero header ends */}
            {/* App body starts */}
            <div className="app-body">
              {/* Row starts */}
              <div className="row gx-3">
                <div className="col-sm-12 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      {/* Row starts */}
                      <div className="d-flex align-items-end gap-2">
                        <h2>
                          <b>Over Assistant Team</b>
                        </h2>
                      </div>
                      {/* Row ends */}
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="text-center">
                        <div className="d-flex align-items-center flex-column">
                          <img
                            src="assets/images/user3.png"
                            alt="Hospitals Admin Template"
                            className="img-7x rounded-circle mb-3"
                          />
                          <h5>Willian Mathews</h5>
                          <h6 className="text-truncate">Supervisor</h6>
                          <h6 className="text-truncate">
                            {" "}
                            <b>Mo:- </b> 1234567890
                          </h6>
                          <h6 className="text-truncate">
                            {" "}
                            <b>Email:- </b> test@testing.com
                          </h6>
                          <h6 className="text-truncate">
                            {" "}
                            <b>Doj:- </b> 20/10/2000
                          </h6>
                          <p>2 Years Experience</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="text-center">
                        <div className="d-flex align-items-center flex-column">
                          <img
                            src="assets/images/user2.png"
                            alt="Hospitals Admin Template"
                            className="img-7x rounded-circle mb-3"
                          />
                          <h5>Willian Mathews</h5>
                          <h6 className="text-truncate">Supervisor</h6>
                          <h6 className="text-truncate">
                            {" "}
                            <b>Mo:- </b> 1234567890
                          </h6>
                          <h6 className="text-truncate">
                            {" "}
                            <b>Email:- </b> test@testing.com
                          </h6>
                          <h6 className="text-truncate">
                            {" "}
                            <b>Doj:- </b> 20/10/2000
                          </h6>
                          <p>2 Years Experience</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="text-center">
                        <div className="d-flex align-items-center flex-column">
                          <img
                            src="assets/images/user5.png"
                            alt="Hospitals Admin Template"
                            className="img-7x rounded-circle mb-3"
                          />
                          <h5>Willian Mathews</h5>
                          <h6 className="text-truncate">Supervisor</h6>
                          <h6 className="text-truncate">
                            {" "}
                            <b>Mo:- </b> 1234567890
                          </h6>
                          <h6 className="text-truncate">
                            {" "}
                            <b>Email:- </b> test@testing.com
                          </h6>
                          <h6 className="text-truncate">
                            {" "}
                            <b>Doj:- </b> 20/10/2000
                          </h6>
                          <p>2 Years Experience</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="text-center">
                        <div className="d-flex align-items-center flex-column">
                          <img
                            src="assets/images/user6.png"
                            alt="Hospitals Admin Template"
                            className="img-7x rounded-circle mb-3"
                          />
                          <h5>Willian Mathews</h5>
                          <h6 className="text-truncate">Supervisor</h6>
                          <h6 className="text-truncate">
                            {" "}
                            <b>Mo:- </b> 1234567890
                          </h6>
                          <h6 className="text-truncate">
                            {" "}
                            <b>Email:- </b> test@testing.com
                          </h6>
                          <h6 className="text-truncate">
                            {" "}
                            <b>Doj:- </b> 20/10/2000
                          </h6>
                          <p>2 Years Experience</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="text-center">
                        <div className="d-flex align-items-center flex-column">
                          <img
                            src="assets/images/user6.png"
                            alt="Hospitals Admin Template"
                            className="img-7x rounded-circle mb-3"
                          />
                          <h5>Willian Mathews</h5>
                          <h6 className="text-truncate">Supervisor</h6>
                          <h6 className="text-truncate">
                            {" "}
                            <b>Mo:- </b> 1234567890
                          </h6>
                          <h6 className="text-truncate">
                            {" "}
                            <b>Email:- </b> test@testing.com
                          </h6>
                          <h6 className="text-truncate">
                            {" "}
                            <b>Doj:- </b> 20/10/2000
                          </h6>
                          <p>2 Years Experience</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="text-center">
                        <div className="d-flex align-items-center flex-column">
                          <img
                            src="assets/images/user5.png"
                            alt="Hospitals Admin Template"
                            className="img-7x rounded-circle mb-3"
                          />
                          <h5>Willian Mathews</h5>
                          <h6 className="text-truncate">Supervisor</h6>
                          <h6 className="text-truncate">
                            {" "}
                            <b>Mo:- </b> 1234567890
                          </h6>
                          <h6 className="text-truncate">
                            {" "}
                            <b>Email:- </b> test@testing.com
                          </h6>
                          <h6 className="text-truncate">
                            {" "}
                            <b>Doj:- </b> 20/10/2000
                          </h6>
                          <p>2 Years Experience</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="text-center">
                        <div className="d-flex align-items-center flex-column">
                          <img
                            src="assets/images/user2.png"
                            alt="Hospitals Admin Template"
                            className="img-7x rounded-circle mb-3"
                          />
                          <h5>Willian Mathews</h5>
                          <h6 className="text-truncate">Supervisor</h6>
                          <h6 className="text-truncate">
                            {" "}
                            <b>Mo:- </b> 1234567890
                          </h6>
                          <h6 className="text-truncate">
                            {" "}
                            <b>Email:- </b> test@testing.com
                          </h6>
                          <h6 className="text-truncate">
                            {" "}
                            <b>Doj:- </b> 20/10/2000
                          </h6>
                          <p>2 Years Experience</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="text-center">
                        <div className="d-flex align-items-center flex-column">
                          <img
                            src="assets/images/user3.png"
                            alt="Hospitals Admin Template"
                            className="img-7x rounded-circle mb-3"
                          />
                          <h5>Willian Mathews</h5>
                          <h6 className="text-truncate">Supervisor</h6>
                          <h6 className="text-truncate">
                            {" "}
                            <b>Mo:- </b> 1234567890
                          </h6>
                          <h6 className="text-truncate">
                            {" "}
                            <b>Email:- </b> test@testing.com
                          </h6>
                          <h6 className="text-truncate">
                            {" "}
                            <b>Doj:- </b> 20/10/2000
                          </h6>
                          <p>2 Years Experience</p>
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
