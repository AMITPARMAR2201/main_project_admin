import React from 'react'
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import { Link } from 'react-router-dom';
import LoadingPages from './LodingPages';

export default function AdminDoctorProfile() {
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
                <div className="col-xxl-6 col-sm-12">
                  <div className="card mb-3 bg-1">
                    <div className="card-body mh-230">
                      {/* Row starts */}
                      <div className="row gx-3">
                        <div className="col-sm-3">
                          <img
                            src="assets/images/user2.png"
                            className="img-fluid rounded-3"
                            alt="Medical Dashboard"
                          />
                        </div>
                        <div className="col-sm-9">
                          <div className="text-white mt-3">
                            <h6>Hello I am,</h6>
                            <h3>Dr. Jessika Linda</h3>
                            <h6>
                              MBBS, MS - General Surgery, General Physician
                            </h6>
                            <h6>16 Years Experience Overall</h6>
                            <div className="rating-stars">
                              <div className="readonly5" />
                            </div>
                            <div className="mt-1">2896 Reviews</div>
                          </div>
                        </div>
                      </div>
                      {/* Row ends */}
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-sm-4">
                  <div className="card mb-3">
                    <div className="card-body mh-230">
                      {/* Card details start */}
                      <div>
                        <div className="d-flex flex-column align-items-center">
                          <div className="icon-box xl bg-primary-subtle rounded-5 mb-2 no-shadow">
                            <i className="ri-empathize-line fs-1 text-primary" />
                          </div>
                          <h1 className="text-primary">3605</h1>
                          <h6>Patients</h6>
                          <span className="badge bg-primary">68% High</span>
                        </div>
                      </div>
                      {/* Card details end */}
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-sm-4">
                  <div className="card mb-3">
                    <div className="card-body mh-230">
                      {/* Card details start */}
                      <div>
                        <div className="d-flex flex-column align-items-center">
                          <div className="icon-box xl bg-danger-subtle rounded-5 mb-2 no-shadow">
                            <i className="ri-lungs-line fs-1 text-danger" />
                          </div>
                          <h1 className="text-danger">507</h1>
                          <h6>Surgeries</h6>
                          <span className="badge bg-danger">26% High</span>
                        </div>
                      </div>
                      {/* Card details end */}
                    </div>
                  </div>
                </div>
                <div className="col-xxl-2 col-sm-4">
                  <div className="card mb-3">
                    <div className="card-body mh-230">
                      {/* Card details start */}
                      <div>
                        <div className="d-flex flex-column align-items-center">
                          <div className="icon-box xl bg-success-subtle rounded-5 mb-2 no-shadow">
                            <i className="ri-star-line fs-1 text-success" />
                          </div>
                          <h1 className="text-success">2896</h1>
                          <h6>Reviews</h6>
                          <span className="badge bg-success">30% High</span>
                        </div>
                      </div>
                      {/* Card details end */}
                    </div>
                  </div>
                </div>
              </div>
              {/* Row ends */}
              {/* Row starts */}
              <div className="row gx-3">
                <div className="col-xl-8 col-sm-12">
                  {/* Row starts */}
                  <div className="row gx-3">
                    <div className="col-sm-12">
                      <div className="card mb-3">
                        <div className="card-header">
                          <h5 className="card-title">About</h5>
                        </div>
                        <div className="card-body">
                          <p>
                            Dr. Jessika Linda is an eminent Endocrinologist
                            associated with med hospitals who is specially
                            trained to diagnose diseases related to glands. She
                            specialises in treating people who suffer from
                            hormonal imbalances, typically from glands in the
                            endocrine system. The most common conditions treated
                            by Dr. Linda are Diabetes, Metabolic disorders, Lack
                            of growth, Osteoporosis, Thyroid diseases, Cancers
                            of the endocrine glands, Over- or under-production
                            of hormones, Cholesterol disorders, Hypertension and
                            Infertility. Also available for consultation at Med
                            hospital.{" "}
                          </p>
                          <div className>
                            <h6>Specialized in</h6>
                            <div className="d-flex flex-wrap gap-2">
                              <span className="badge bg-primary">Diabetes</span>
                              <span className="badge bg-primary">Thyroid</span>
                              <span className="badge bg-primary">
                                Osteoporosis
                              </span>
                              <span className="badge bg-primary">Surgeon</span>
                              <span className="badge bg-primary">General</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Row ends */}
                </div>
                <div className="col-xl-4 col-sm-12">
                  {/* Row starts */}
                  <div className="row gx-3">
                    <div className="col-xl-12 col-sm-6">
                      <div className="card mb-3">
                        <div className="card-header">
                          <h5 className="card-title">Avalibility</h5>
                        </div>
                        <div className="card-body">
                          <div className="d-flex flex-wrap gap-1 mb-3">
                            <span className="p-2 lh-1 bg-light rounded-2 box-shadow">
                              Mon - 9:AM - 2:PM
                            </span>
                            <span className="p-2 lh-1 bg-light rounded-2 box-shadow">
                              Tue - 9:AM - 2:PM
                            </span>
                            <span className="p-2 lh-1 bg-light rounded-2 box-shadow">
                              Wed - 9:AM - 2:PM
                            </span>
                            <span className="p-2 lh-1 bg-light rounded-2 box-shadow">
                              Thu - 9:AM - 2:PM
                            </span>
                            <span className="p-2 lh-1 bg-light rounded-2 box-shadow">
                              Fri - 9:AM - 2:PM
                            </span>
                            <span className="p-2 lh-1 bg-light rounded-2 box-shadow">
                              Sat - 9:AM - 2:PM
                            </span>
                            <span className="p-2 lh-1 bg-light rounded-2 box-shadow">
                              Sun - NA
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Row ends */}
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
