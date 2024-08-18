import React from 'react'
import AssistantHeader from './AssistantHeader';
import AssistantSidebar from './AssistantSidebar';
import { Link } from 'react-router-dom';
import LoadingPages from './LodingPages';

export default function AssistentManagement() {
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
                <div className="col-xxl-6 col-sm-12">
                  <div className="card mb-3 bg-1">
                    <div className="card-body mh-230">
                      {/* Row starts */}
                      <div className="row gx-3">
                        <div className="col-sm-3 pt-5">
                          <img
                            src="assets/images/user6_1.jpeg"
                            className="img-fluid rounded-3"
                            alt="Medical Dashboard"
                          />
                        </div>
                        <div className="col-sm-9">
                          <div className="text-white mt-3">
                            <h6>Hello I am,</h6>
                            <h3> Jessika Linda</h3>
                            <h5>
                              {" "}
                              <b>Mo:- </b>1234567890
                            </h5>
                            <h5>
                              <b>Email:- </b>test@gmail.com
                            </h5>
                            <h5>Nurse, BSN,MSN</h5>
                            <h5>5 Years Experience Overall</h5>
                            <div className=" d-flex align-items-center justify-content-between m-3">
                              <Link
                                to="/assistant-management-changePassword"
                                className="btn btn-primary ms-auto"
                              >
                                Change Password
                              </Link>
                            </div>
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
                            <i className="ri-projector-2-fill fs-1 text-primary" />
                          </div>
                          <h1 className="text-primary">120</h1>
                          <h6>Projects</h6>
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
                            <i className="ri-task-fill fs-1 text-danger" />
                          </div>
                          <h1 className="text-danger">507</h1>
                          <h6>Tasks</h6>
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
                            <i className="ri-chat-upload-fill fs-1 text-success" />
                          </div>
                          <h1 className="text-success">28</h1>
                          <h6>Uploads</h6>
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
                <div className="col-xl-12 col-sm-12">
                  {/* Row starts */}
                  <div className="row gx-3">
                    <div className="col-sm-12">
                      <div className="card ">
                        <div className="ps-3 pt-3">
                          <h5 className>
                            <b>About</b>
                          </h5>
                          <hr />
                        </div>
                        <div className="ps-3 ">
                          <span>
                            Hello I am James Smith a Nurse in Sanjivni Hospital
                            Surat. I love to work with all my hospital staff and
                            seniour doctors. Completed my post graduation Master
                            of Science in Nursing(MSN) from the well known and
                            renowned institution of India  SARDAR PATEL NURSING
                            COLLEGE, BARODA in 2000-01, which was affiliated to
                            Gujarat University, Ahmedabad,India. I ranker in
                            University exams from the same university from
                            1996-01.
                          </span>
                        </div>
                        <div className="ps-3 pt-4">
                          <h5 className="card-title">
                            <b>Education</b>
                          </h5>
                          <hr />
                        </div>
                        <div className="ps-3">
                          <ul>
                            <li>M.S.N.,Gujarat University, Ahmedabad,India.</li>
                            <li>
                              B.S.N.,Gujarat University, Ahmedabad, India.
                            </li>
                            <li>
                              A.S.D.,Shaurashtra University, Rajkot, India
                            </li>
                          </ul>
                        </div>
                        <div className="ps-3 pt-4">
                          <h5 className="card-title">
                            <b>Experience</b>
                          </h5>
                          <hr />
                        </div>
                        <div className="ps-3">
                          <ul>
                            <li>
                              One year nursing internship from April-2009 to
                              march-2010 at B. J. Medical College, Ahmedabad.
                            </li>
                            <li>
                              I have worked as a part time Nursing in Apang
                              manav mandal from 1st june 2004 to 31st jan 2005.
                            </li>
                            <li>
                              2.5 Years Worked at Mahatma Gandhi General
                              Hospital, Surendranagar.
                            </li>
                          </ul>
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
    </>
  );
}
