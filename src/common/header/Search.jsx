import React from "react";
import logo from "../../assets/logo.png";

function Search() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} width={80} alt="" />
          </a>
          <form className="input-group w-50 d-none d-lg-flex" role="search">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-warning" type="submit">
              Search
            </button>
          </form>
          <div className="d-flex">
            <div className="circle-btn me-3">
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="circle-btn">
              <i className="fa-solid fa-basket-shopping"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                1
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Search;
