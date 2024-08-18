import React from 'react'
import AssistantHeader from './AssistantHeader';
import AssistantSidebar from './AssistantSidebar';
import { Link } from 'react-router-dom';
import LoadingPages from './LodingPages';

export default function AssistentEditAppointment() {
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
                  All Appointment
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
                      <h5 className="card-title">Edit Appointment</h5>
                    </div>
                    <div className="card-body">
                      {/* Row starts */}
                      <div className="row gx-3">
                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="a1">
                              Patient Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="a1"
                              defaultValue="Jason Compton"
                            />
                          </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="a2">
                              Patient Email
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="a2"
                              defaultValue="test@test.com"
                            />
                          </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="a3">
                              Gender
                            </label>
                            <select className="form-select" id="a3">
                              <option value={0}>Male</option>
                              <option value={1}>Male</option>
                              <option value={2}>Female</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="a4">
                              Age
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="a4"
                              defaultValue={68}
                            />
                          </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="a5">
                              Patient Phone
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="a5"
                              //   defaultValue={09876543421}
                            />
                          </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="a6">
                              Select Date
                            </label>
                            <input
                              type="date"
                              className="form-control"
                              id="a6"
                              placeholder="28/05/2024"
                            />
                          </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="a7">
                              Select Time
                            </label>
                            <input
                              type="time"
                              className="form-control"
                              id="a7"
                              defaultValue="Select time"
                            />
                          </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="a8">
                              Speacilist Doctor
                            </label>
                            <select className="form-select" id="a8">
                              <option value={0}>Surgeon</option>
                              <option value={1}>Gynecologist</option>
                              <option value={2}>Psychiatrists</option>
                              <option value={3}>Surgeon</option>
                              <option value={4}>Urologist</option>
                              <option value={5}>Paediatrician</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="mb-3">
                            <label className="form-label" htmlFor="a9">
                              Problem
                            </label>
                            <textarea
                              className="form-control"
                              id="a9"
                              placeholder="Medical Issue health problem"
                              rows={3}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="d-flex gap-2 justify-content-end">
                            <Link
                              to="/assistant-view-appointment"
                              className="btn btn-outline-secondary"
                            >
                              Cancel
                            </Link>
                            <Link
                              to="/assistant-view-appointment"
                              className="btn btn-primary"
                            >
                              Update Appointment
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
    </>
  );
}
