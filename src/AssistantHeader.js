// import React from 'react'
// import { Link } from 'react-router-dom';

// export default function AssistantHeader() {
//   return (
//     <div className="app-header d-flex align-items-center">
//       {/* Toggle buttons starts */}
//       <div className="d-flex">
//         <button className="toggle-sidebar">
//           <i className="ri-menu-line" />
//         </button>
//         <button className="pin-sidebar">
//           <i className="ri-menu-line" />
//         </button>
//       </div>
//       {/* Toggle buttons ends */}
//       {/* App brand starts */}
//       <div className="app-brand ms-3">
//         <Link to="/assistant-management" className="d-lg-block d-none">
//           <img
//             src="assets/images/logo1.png"
//             className="logo"
//             alt="Medicare Admin Template"
//           />
//         </Link>
//         <Link to="/assistant-management" className="d-lg-none d-md-block">
//           <img
//             src="assets/images/logo3.png"
//             className="logo rounded-5"
//             alt="Medicare Admin Template"
//           />
//         </Link>
//       </div>
//       {/* App brand ends */}
//       {/* App header actions starts */}
//       <div className="header-actions">
//         {/* Header user settings starts */}
//         <div className="dropdown ms-2">
//           <a
//             id="userSettings"
//             className="dropdown-toggle d-flex align-items-center"
//             href="#!"
//             role="button"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//           >
//             <div className="avatar-box">
//               <i className="ri-logout-box-line" />
//               <span className="status busy" />
//             </div>
//           </a>
//           <div className="dropdown-menu dropdown-menu-end shadow-lg">
//             <div className="px-3 py-2">
//               <span className="small">Assistant</span>
//               <h6 className="m-0">AMIT PARMAR</h6>
//             </div>
//             <div className="mx-3 my-2 d-grid">
//               <Link to="/admin-login" className="btn btn-danger">
//                 Logout
//               </Link>
//             </div>
//           </div>
//         </div>
//         {/* Header user settings ends */}
//       </div>
//       {/* App header actions ends */}
//     </div>
//   );
// }


import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

export default function Header() {
  useEffect(() => {
    // jQuery code here
    $(".toggle-sidebar").on("click", function () {
      $(".page-wrapper").toggleClass("toggled");
    });

    $(".pin-sidebar").on("click", function () {
      $(".page-wrapper").toggleClass("pinned");
    });

    $("#overlay").on("click", function () {
      $(".page-wrapper").toggleClass("toggled");
    });

    $(window)
      .resize(function () {
        if ($(window).width() <= 768) {
          $(".page-wrapper").removeClass("pinned");
        } else {
          $(".page-wrapper").removeClass("toggled");
        }
      })
      .resize(); // Trigger the resize event handler to apply the initial state

    // Clean up
    return () => {
      $(".toggle-sidebar").off("click");
      $(".pin-sidebar").off("click");
      $("#overlay").off("click");
      $(window).off("resize");
    };
  }, []);

  return (
    <div className="app-header d-flex align-items-center">
      {/* Toggle buttons starts */}
      <div className="d-flex">
        <button className="toggle-sidebar">
          <i className="ri-menu-line" />
        </button>
        <button className="pin-sidebar">
          <i className="ri-menu-line" />
        </button>
      </div>
      {/* Toggle buttons ends */}
      {/* App brand starts */}
      <div className="app-brand ms-3">
        <Link to="/assistant-management" className="d-lg-block d-none">
          <img
            src="assets/images/logo1.png"
            className="logo"
            alt="Medicare Admin Template"
          />
        </Link>
        <Link to="/assistant-management" className="d-lg-none d-md-block">
          <img
            src="assets/images/logo3.png"
            className="logo rounded-5"
            alt="Medicare Admin Template"
          />
        </Link>
      </div>
      {/* App brand ends */}
      {/* App header actions starts */}
      <div className="header-actions">
        {/* Header user settings starts */}
        <div className="dropdown ms-2">
          <a
            id="userSettings"
            className="dropdown-toggle d-flex align-items-center"
            href="#!"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div className="avatar-box">
              <i className="ri-logout-box-line" />
              <span className="status busy" />
            </div>
          </a>
          <div className="dropdown-menu dropdown-menu-end shadow-lg">
            <div className="px-3 py-2">
              <span className="small">Assistant</span>
              <h6 className="m-0">AMIT PARMAR</h6>
            </div>
            <div className="mx-3 my-2 d-grid">
              <Link to="/admin-login" className="btn btn-danger">
                Logout
              </Link>
            </div>
          </div>
        </div>
        {/* Header user settings ends */}
      </div>
      {/* App header actions ends */}
    </div>
  );
}

