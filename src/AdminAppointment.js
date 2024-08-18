import React from 'react'
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import { Link } from 'react-router-dom';
import LoadingPages from './LodingPages';

export default function AdminAppointment() {
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
          </div>
          {/* App body starts */}
          <div className="app-body">
            {/* Row starts */}
            <div className="row gx-3">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <h5 className="card-title">Applointments List</h5>
                  </div>
                  <div className="card-body">
                    {/* Table starts */}
                    <div className="table-responsive">
                      <table
                        id="appointmentsGrid"
                        className="table m-0 align-middle"
                      >
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Patient Name</th>
                            <th>Age</th>
                            <th>Consulting Doctor</th>
                            <th>Department</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Disease</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>001</td>
                            <td>Deena Cooley</td>
                            <td>65</td>
                            <td>
                              <img
                                src="assets/images/user.png"
                                className="img-shadow img-2x rounded-5 me-1"
                                alt="Hospital Admin Template"
                              />{" "}
                              Vicki Walsh
                            </td>
                            <td>Surgeon</td>
                            <td>05/23/2024</td>
                            <td>9:30AM</td>
                            <td>Diabeties</td>
                          </tr>
                          <tr>
                            <td>002</td>
                            <td>Jerry Wilcox</td>
                            <td>73</td>
                            <td>
                              <img
                                src="assets/images/user1.png"
                                className="img-shadow img-2x rounded-5 me-1"
                                alt="Hospital Admin Template"
                              />{" "}
                              April Gallegos
                            </td>
                            <td>Gynecologist</td>
                            <td>05/23/2024</td>
                            <td>9:45AM</td>
                            <td>Fever</td>
                          </tr>
                          <tr>
                            <td>003</td>
                            <td>Eduardo Kramer</td>
                            <td>84</td>
                            <td>
                              <img
                                src="assets/images/user2.png"
                                className="img-shadow img-2x rounded-5 me-1"
                                alt="Hospital Admin Template"
                              />{" "}
                              Basil Frost
                            </td>
                            <td>Psychiatrists</td>
                            <td>05/23/2024</td>
                            <td>10:00AM</td>
                            <td>Cold</td>
                          </tr>
                          <tr>
                            <td>004</td>
                            <td>Jason Compton</td>
                            <td>56</td>
                            <td>
                              <img
                                src="assets/images/user4.png"
                                className="img-shadow img-2x rounded-5 me-1"
                                alt="Hospital Admin Template"
                              />{" "}
                              Nannie Guerrero
                            </td>
                            <td>Urologist</td>
                            <td>05/23/2024</td>
                            <td>10:15AM</td>
                            <td>Prostate</td>
                          </tr>
                          <tr>
                            <td>005</td>
                            <td>Emmitt Bryan</td>
                            <td>49</td>
                            <td>
                              <img
                                src="assets/images/user5.png"
                                className="img-shadow img-2x rounded-5 me-1"
                                alt="Hospital Admin Template"
                              />{" "}
                              Daren Andrade
                            </td>
                            <td>Cardiology</td>
                            <td>05/23/2024</td>
                            <td>10:30AM</td>
                            <td>Asthma</td>
                          </tr>
                          <tr>
                            <td>006</td>
                            <td>Truman Miles</td>
                            <td>90</td>
                            <td>
                              <img
                                src="assets/images/user2.png"
                                className="img-shadow img-2x rounded-5 me-1"
                                alt="Hospital Admin Template"
                              />{" "}
                              Colleen Murillo
                            </td>
                            <td>Paediatrician</td>
                            <td>05/23/2024</td>
                            <td>10:45AM</td>
                            <td>Cholera</td>
                          </tr>
                          <tr>
                            <td>007</td>
                            <td>Dillon Stokes</td>
                            <td>36</td>
                            <td>
                              <img
                                src="assets/images/user3.png"
                                className="img-shadow img-2x rounded-5 me-1"
                                alt="Hospital Admin Template"
                              />{" "}
                              Josiah Hobbs
                            </td>
                            <td>Gynecologist</td>
                            <td>05/23/2024</td>
                            <td>11:00AM</td>
                            <td>Heart</td>
                          </tr>
                          <tr>
                            <td>008</td>
                            <td>Harris Peters</td>
                            <td>79</td>
                            <td>
                              <img
                                src="assets/images/user4.png"
                                className="img-shadow img-2x rounded-5 me-1"
                                alt="Hospital Admin Template"
                              />{" "}
                              Wilma Dickson
                            </td>
                            <td>Urologist</td>
                            <td>05/23/2024</td>
                            <td>11:15AM</td>
                            <td>Outbreaks</td>
                          </tr>
                          <tr>
                            <td>009</td>
                            <td>Tomas Schultz</td>
                            <td>79</td>
                            <td>
                              <img
                                src="assets/images/user5.png"
                                className="img-shadow img-2x rounded-5 me-1"
                                alt="Hospital Admin Template"
                              />{" "}
                              Monique Merritt
                            </td>
                            <td>Paediatrician</td>
                            <td>05/23/2024</td>
                            <td>11:30AM</td>
                            <td>Fever</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* Table ends */}
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
  );
}
