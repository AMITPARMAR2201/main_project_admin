import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState("");

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? "" : menu);
  };

  return (
    <nav id="sidebar" className="sidebar-wrapper">
      <div className="sidebar-profile shadow">
        <img
          src="assets/images/user6_1.jpeg"
          className="img-shadow img-3x me-3 rounded-5"
          alt="Hospital Admin Templates"
        />
        <div className="m-0">
          <h5 className="mb-1 profile-name text-nowrap text-truncate">
            Dr. AMIT PARMAR
          </h5>
          <p className="m-0 small profile-name text-nowrap text-truncate">
            Doctor
          </p>
        </div>
      </div>
      <div className="sidebarMenuScroll">
        <ul className="sidebar-menu">
          <li className="shadow">
            <Link to="/doctor">
              <i className="ri-nurse-line" />
              <span className="menu-text">Doctor</span>
            </Link>
          </li>
          <li
            className={`treeview ${activeMenu === "services" ? "active" : ""}`}
          >
            <a
              href="#!"
              className="shadow"
              onClick={() => handleMenuClick("services")}
            >
              <i className="ri-service-fill" />
              <span className="menu-text">Service Management</span>
            </a>
            <ul
              className={`treeview-menu ${
                activeMenu === "services" ? "menu-open" : ""
              }`}
            >
              <li className="shadow">
                <Link to="/admin-services-list">
                  <i className="ri-file-list-3-fill" />
                  <span className="menu-text">Services List</span>
                </Link>
              </li>
              <li className="shadow">
                <Link to="/admin-add-services">
                  <i className="ri-add-circle-fill" />
                  <span className="menu-text">Add Services</span>
                </Link>
              </li>
              <li className="shadow">
                <Link to="/admin-edit-services">
                  <i className="ri-edit-box-fill" />
                  <span className="menu-text">Edit Service</span>
                </Link>
              </li>
            </ul>
          </li>
          <li
            className={`treeview ${activeMenu === "assistant" ? "active" : ""}`}
          >
            <a
              href="#!"
              className="shadow"
              onClick={() => handleMenuClick("assistant")}
            >
              <i className="ri-nurse-line" />
              <span className="menu-text">Assistant Management</span>
            </a>
            <ul
              className={`treeview-menu ${
                activeMenu === "assistant" ? "menu-open" : ""
              }`}
            >
              <li className="shadow">
                <Link to="/admin-assistant-list">
                  <i className="ri-file-list-3-fill" />
                  <span className="menu-text">Assistant List</span>
                </Link>
              </li>
              <li className="shadow">
                <Link to="/admin-add-assistant">
                  <i className="ri-add-circle-fill" />
                  <span className="menu-text">Add Assistant</span>
                </Link>
              </li>
              <li className="shadow">
                <Link to="/admin-edit-assistant">
                  <i className="ri-edit-box-fill" />
                  <span className="menu-text">Edit Assistant</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="shadow">
            <Link to="/appointment">
              <i className="ri-contract-fill" />
              <span className="menu-text">Appointment Management</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

