import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminSidebar() {
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarToggled(!isSidebarToggled);
  };

  const toggleSubMenu = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  return (
    <nav
      id="sidebar"
      className={`sidebar-wrapper ${isSidebarToggled ? "toggled" : ""}`}
    >
      {/* Sidebar profile starts */}
      <div className="sidebar-profile shadow">
        <img
          src="assets/images/user6_1.jpeg"
          className="img-shadow img-3x me-3 rounded-5"
          alt="Hospital Admin Templates"
        />
        <div className="m-0">
          <h5 className="mb-1 profile-name text-nowrap text-truncate">
            AMIT PARMAR
          </h5>
          <p className="m-0 small profile-name text-nowrap text-truncate">
            Admin
          </p>
        </div>
      </div>
      {/* Sidebar profile ends */}
      {/* Sidebar menu starts */}
      <div className="sidebarMenuScroll">
        <ul className="sidebar-menu">
          <li className={`shadow ${activeMenu === 1 ? "active" : ""}`}>
            <Link to="/admin-dashboard">
              <i className="ri-dashboard-2-line" />
              <span className="menu-text">Dashboard</span>
            </Link>
          </li>
          <li
            className={`shadow ${activeMenu === 2 ? "active" : ""}`}
            onClick={() => toggleSubMenu(2)}
          >
            <Link to="/admin-doctor">
              <i className="ri-nurse-fill" />
              <span className="menu-text">Doctor</span>
            </Link>
           
          </li>
          <li
            className={`shadow ${activeMenu === 3 ? "active" : ""}`}
            onClick={() => toggleSubMenu(3)}
          >
            <Link to="/admin-assistant">
              <i className="ri-nurse-line" />
              <span className="menu-text">Assistant</span>
            </Link>
           
          </li>
          <li className="shadow">
            <Link to="/admin-services">
              <i className="ri-service-fill" />
              <span className="menu-text">Service</span>
            </Link>
          </li>
          <li className="shadow">
            <Link to="/admin-appointment">
              <i className="ri-contract-fill" />
              <span className="menu-text">Appointment</span>
            </Link>
          </li>
          <li className="shadow">
            <Link to="/admin-setting">
              <i className="ri-user-settings-fill" />
              <span className="menu-text">Account Settings</span>
            </Link>
          </li>
        </ul>
      </div>
      {/* Sidebar menu ends */}
      <button className="toggle-sidebar" onClick={toggleSidebar}>
        <i className="ri-menu-line" />
      </button>
    </nav>
  );
}
