import React from 'react'
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import { Link } from 'react-router-dom';
import LoadingPages from './LodingPages';

export default function AdminServices() {
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
                  Services
                </li>
              </ol>
              {/* Breadcrumb ends */}
            </div>
            {/* App Hero header ends */}
            {/* App body starts */}
            <div className="row gx-3 mt-2">
              <div className="col-sm-12 col-12">
                <div className="card mb-2 ">
                  <div className="card-body">
                    {/* Row starts */}
                    <div className="d-flex align-items-center">
                      <h2>
                        <b>Over Services</b>
                      </h2>
                    </div>
                    {/* Row ends */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="services-area pt-100 pb-70">
            <div className="container">
              <div className="row justify-content-center">
                <div
                  className="col-sm-6 col-lg-3 wow fadeInUp "
                  data-wow-delay=".3s"
                >
                  <div className="service-item ">
                    <div className="service-front">
                      <i className="icofont-doctor" />
                      <h3>Expert Doctor</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod
                      </p>
                    </div>
                    <div className="service-end">
                      <i className="icofont-doctor" />
                      <h3>Expert Doctor</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-lg-3 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="service-item">
                    <div className="service-front">
                      <i className="icofont-prescription" />
                      <h3>Diagnosis</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod
                      </p>
                    </div>
                    <div className="service-end">
                      <i className="icofont-prescription" />
                      <h3>Diagnosis</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-lg-3 wow fadeInUp"
                  data-wow-delay=".7s"
                >
                  <div className="service-item">
                    <div className="service-front">
                      <i className="icofont-patient-file" />
                      <h3>Pathology</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod
                      </p>
                    </div>
                    <div className="service-end">
                      <i className="icofont-patient-file" />
                      <h3>Pathology</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-lg-3 wow fadeInUp"
                  data-wow-delay=".9s"
                >
                  <div className="service-item">
                    <div className="service-front">
                      <i className="icofont-tooth" />
                      <h3>Dental Care</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod
                      </p>
                    </div>
                    <div className="service-end">
                      <i className="icofont-tooth" />
                      <h3>Dental Care</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-lg-3 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="service-item">
                    <div className="service-front">
                      <i className="icofont-heart-beat-alt" />
                      <h3>Cardiology</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod
                      </p>
                    </div>
                    <div className="service-end">
                      <i className="icofont-heart-beat-alt" />
                      <h3>Cardiology</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-lg-3 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="service-item">
                    <div className="service-front">
                      <i className="icofont-drug" />
                      <h3>Medicine</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod
                      </p>
                    </div>
                    <div className="service-end">
                      <i className="icofont-drug" />
                      <h3>Medicine</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-lg-3 wow fadeInUp"
                  data-wow-delay=".7s"
                >
                  <div className="service-item">
                    <div className="service-front">
                      <i className="icofont-dna-alt-1" />
                      <h3>Neurology</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod
                      </p>
                    </div>
                    <div className="service-end">
                      <i className="icofont-dna-alt-1" />
                      <h3>Neurology</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-sm-6 col-lg-3 wow fadeInUp"
                  data-wow-delay=".9s"
                >
                  <div className="service-item">
                    <div className="service-front">
                      <i className="icofont-ambulance-cross" />
                      <h3>Ambulance</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod
                      </p>
                    </div>
                    <div className="service-end">
                      <i className="icofont-ambulance-cross" />
                      <h3>Ambulance</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* App body ends */}
        </div>
        {/* App container ends */}
      </div>
      {/* Main container ends */}
    </div>
  );
}
