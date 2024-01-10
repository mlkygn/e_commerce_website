import React from "react";

function Head() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-top">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item me-4">
              <a className="nav-link" href="#">
                <i className="fa fa-phone me-2"></i>
                <span>+90 216 80 70</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="fa fa-envelope me-2"></i>
                <span>info@mystore.com</span>
              </a>
            </li>
          </ul>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link">FAQ's</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Help
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <i className="fa-solid fa-earth me-1"></i>
                  EN
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fa-solid fa-dollar-sign me-1"></i>
                  USD
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Head;
