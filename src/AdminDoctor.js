import React from 'react'
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import { Link } from 'react-router-dom';
import LoadingPages from './LodingPages';

export default function AdminDoctor() {
  return (
    <div>
      {/* Loading starts */}
      <LoadingPages/>
      {/* Loading ends */}
      {/* Page wrapper starts */}
      <div className="page-wrapper">
        {/* App header starts */}
        <AdminHeader/>
        {/* App header ends */}
        {/* Main container starts */}
        <div className="main-container">
          {/* Sidebar wrapper starts */}
          <AdminSidebar/>
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
                  Doctor
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
                          <b>Over Doctor Team</b>
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
                        <Link
                          to="/admin-doctor-profile"
                          className="d-flex align-items-center flex-column"
                        >
                          <img
                            src="assets/images/user1.png"
                            alt="Hospitals Admin Template"
                            className="img-7x rounded-circle mb-3"
                          />
                          <h5>Dr. Clive Nathan</h5>
                          <h6 className="text-truncate">
                            Gynecologist, General Physician
                          </h6>
                          <p>8 Years Experience</p>
                        </Link>
                        <div className="rating-stars m-auto mb-3">
                          <div className="readonly5" />
                        </div>
                        <Link
                          to="/admin-doctor-profile"
                          className="btn btn-primary"
                        >
                          View More Detail
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="text-center">
                        <Link
                          to="/admin-doctor-profile"
                          className="d-flex align-items-center flex-column"
                        >
                          <img
                            src="assets/images/user2.png"
                            alt="Hospitals Admin Template"
                            className="img-7x rounded-circle mb-3"
                          />
                          <h5>Dr. Laura Jaden</h5>
                          <h6>Plastic Surgeon</h6>
                          <p>9 Years Experience</p>
                        </Link>
                        <div className="rating-stars m-auto mb-3">
                          <div className="readonly5" />
                        </div>
                        <Link
                          to="/admin-doctor-profile"
                          className="btn btn-primary"
                        >
                          View More Detail
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="text-center">
                        <Link
                          to="/admin-doctor-profile"
                          className="d-flex align-items-center flex-column"
                        >
                          <img
                            src="assets/images/user3.png"
                            alt="Hospitals Admin Template"
                            className="img-7x rounded-circle mb-3"
                          />
                          <h5>Dr. Aliko Maria</h5>
                          <h6>Physiotherapist</h6>
                          <p>6 Years Experience</p>
                        </Link>
                        <div className="rating-stars m-auto mb-3">
                          <div className="readonly5" />
                        </div>
                        <Link
                          to="/admin-doctor-profile"
                          className="btn btn-primary"
                        >
                          View More Detail
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="text-center">
                        <Link
                          to="/admin-doctor-profile"
                          className="d-flex align-items-center flex-column"
                        >
                          <img
                            src="assets/images/user4.png"
                            alt="Hospitals Admin Template"
                            className="img-7x rounded-circle mb-3"
                          />
                          <h5>Dr. Amelia Kim</h5>
                          <h6>Gastroenterologist</h6>
                          <p>7 Years Experience</p>
                        </Link>
                        <div className="rating-stars m-auto mb-3">
                          <div className="readonly4" />
                        </div>
                        <Link
                          to="/admin-doctor-profile"
                          className="btn btn-primary"
                        >
                          View More Detail
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="text-center">
                        <Link
                          to="/admin-doctor-profile"
                          className="d-flex align-items-center flex-column"
                        >
                          <img
                            src="assets/images/user5.png"
                            alt="Hospitals Admin Template"
                            className="img-7x rounded-circle mb-3"
                          />
                          <h5>Dr. Emma Monis</h5>
                          <h6>General Surgeon</h6>
                          <p>5 Years Experience</p>
                        </Link>
                        <div className="rating-stars m-auto mb-3">
                          <div className="readonly5" />
                        </div>
                        <Link
                          to="/admin-doctor-profile"
                          className="btn btn-primary"
                        >
                          View More Detail
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="text-center">
                        <Link
                          to="/admin-doctor-profile"
                          className="d-flex align-items-center flex-column"
                        >
                          <img
                            src="assets/images/user.png"
                            alt="Hospitals Admin Template"
                            className="img-7x rounded-circle mb-3"
                          />
                          <h5>Dr. Olivia</h5>
                          <h6>Bariatric Surgeon</h6>
                          <p>8 Years Experience</p>
                        </Link>
                        <div className="rating-stars m-auto mb-3">
                          <div className="readonly5" />
                        </div>
                        <Link
                          to="/admin-doctor-profile"
                          className="btn btn-primary"
                        >
                          View More Detail
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="text-center">
                        <Link
                          to="/admin-doctor-profile"
                          className="d-flex align-items-center flex-column"
                        >
                          <img
                            src="assets/images/user1.png"
                            alt="Hospitals Admin Template"
                            className="img-7x rounded-circle mb-3"
                          />
                          <h5>Dr. Kelly Phong</h5>
                          <h6>Ophthalmologist</h6>
                          <p>9 Years Experience</p>
                        </Link>
                        <div className="rating-stars m-auto mb-3">
                          <div className="readonly4" />
                        </div>
                        <Link
                          to="/admin-doctor-profile"
                          className="btn btn-primary"
                        >
                          View More Detail
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="text-center">
                        <Link
                          to="/admin-doctor-profile"
                          className="d-flex align-items-center flex-column"
                        >
                          <img
                            src="assets/images/user3.png"
                            alt="Hospitals Admin Template"
                            className="img-7x rounded-circle mb-3"
                          />
                          <h5>Dr. George Max</h5>
                          <h6>Dermatologist</h6>
                          <p>3 Years Experience</p>
                        </Link>
                        <div className="rating-stars m-auto mb-3">
                          <div className="readonly5" />
                        </div>
                        <Link
                          to="/admin-doctor-profile"
                          className="btn btn-primary"
                        >
                          View More Detail
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="text-center">
                        <Link
                          to="/admin-doctor-profile"
                          className="d-flex align-items-center flex-column"
                        >
                          <img
                            src="assets/images/user4.png"
                            alt="Hospitals Admin Template"
                            className="img-7x rounded-circle mb-3"
                          />
                          <h5>Dr. Taylor</h5>
                          <h6>Radiologist</h6>
                          <p>8 Years Experience</p>
                        </Link>
                        <div className="rating-stars m-auto mb-3">
                          <div className="readonly3" />
                        </div>
                        <Link
                          to="/admin-doctor-profile"
                          className="btn btn-primary"
                        >
                          View More Detail
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="text-center">
                        <Link
                          to="/admin-doctor-profile"
                          className="d-flex align-items-center flex-column"
                        >
                          <img
                            src="assets/images/user2.png"
                            alt="Hospitals Admin Template"
                            className="img-7x rounded-circle mb-3"
                          />
                          <h5>Dr. Bailey</h5>
                          <h6>Dentist</h6>
                          <p>8 Years Experience</p>
                        </Link>
                        <div className="rating-stars m-auto mb-3">
                          <div className="readonly5" />
                        </div>
                        <Link
                          to="/admin-doctor-profile"
                          className="btn btn-primary"
                        >
                          View More Detail
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="text-center">
                        <Link
                          to="/admin-doctor-profile"
                          className="d-flex align-items-center flex-column"
                        >
                          <img
                            src="assets/images/user5.png"
                            alt="Hospitals Admin Template"
                            className="img-7x rounded-circle mb-3"
                          />
                          <h5>Dr. O'Sullivan</h5>
                          <h6>Laparoscopic Surgeon</h6>
                          <p>5 Years Experience</p>
                        </Link>
                        <div className="rating-stars m-auto mb-3">
                          <div className="readonly5" />
                        </div>
                        <Link
                          to="/admin-doctor-profile"
                          className="btn btn-primary"
                        >
                          View More Detail
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-sm-6 col-12">
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="text-center">
                        <Link
                          to="/admin-doctor-profile"
                          className="d-flex align-items-center flex-column"
                        >
                          <img
                            src="assets/images/user.png"
                            alt="Hospitals Admin Template"
                            className="img-7x rounded-circle mb-3"
                          />
                          <h5>Dr. O'Brien Bui</h5>
                          <h6>Spine Surgeon</h6>
                          <p>6 Years Experience</p>
                        </Link>
                        <div className="rating-stars m-auto mb-3">
                          <div className="readonly5" />
                        </div>
                        <Link
                          to="/admin-doctor-profile"
                          className="btn btn-primary"
                        >
                          View More Detail
                        </Link>
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
