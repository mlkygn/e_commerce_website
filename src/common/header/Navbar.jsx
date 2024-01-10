import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <div className="d-flex bg-white py-2 px-4 rounded align-items-center">
            <i className="fa-solid fa-layer-group"></i>
            <span className="mx-3 fw-500">Categories</span>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Pages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  User Account
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Vendor Account
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Track My Order
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
