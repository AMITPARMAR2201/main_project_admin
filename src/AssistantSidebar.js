import React from 'react'
import { Link } from 'react-router-dom';

export default function AssistantSidebar() {
  return (
    <nav id="sidebar" className="sidebar-wrapper">
      {/* Sidebar profile starts */}
      <div className="sidebar-profile shadow">
        <img
          src="assets/images/user6_1.jpeg"
          className="img-shadow img-3x me-3 rounded-5"
          alt="Hospital Admin Templates"
        />
        <div className="m-0">
          <h5 className="mb-1 profile-name text-nowrap text-truncate">
            {" "}
            AMIT PARMAR
          </h5>
          <p className="m-0 small profile-name text-nowrap text-truncate">
            Assistant
          </p>
        </div>
      </div>
      {/* Sidebar profile ends */}
      {/* Sidebar menu starts */}
      <div className="sidebarMenuScroll">
        <ul className="sidebar-menu">
          <li className="shadow">
            <Link to="/assistant-management">
              <i className="ri-nurse-line" />
              <span className="menu-text">Assistant</span>
            </Link>
          </li>
          <li className="shadow">
            <Link to="/assistant-view-appointment">
              <i className="ri-eye-line" />
              <span className="menu-text">View all Appointment</span>
            </Link>
          </li>
          <li className="shadow">
            <Link to="/assistant-edit-appointment">
              <i className="ri-edit-box-fill" />
              <span className="menu-text">Edit Appointment</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* Sidebar menu ends */}
    </nav>
  );
}
